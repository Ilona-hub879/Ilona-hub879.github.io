/**
 * Build AI GDPR Audit Tool legal HTML from Markdown (catalog/products/ai-gdpr-audit/legal/*.md).
 * Run: node scripts/build-ai-gdpr-legal.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MD_DIR = join(ROOT, 'catalog', 'products', 'ai-gdpr-audit', 'legal');

function readMd(name) {
  const path = join(MD_DIR, name);
  if (!existsSync(path)) throw new Error(`Missing ${path}`);
  return readFileSync(path, 'utf8');
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inlineMarkdown(text) {
  let out = escapeHtml(text);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const safeHref = href.replace(/"/g, '&quot;');
    if (/^https?:\/\//i.test(href) || href.startsWith('mailto:')) {
      const external = /^https?:\/\//i.test(href);
      return external
        ? `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${label}</a>`
        : `<a href="${safeHref}">${label}</a>`;
    }
    return `<a href="${safeHref}">${label}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  out = out.replace(/_([^_]+)_/g, '<em>$1</em>');
  return out;
}

function mdToBody(md, lang) {
  const lines = md.replace(/\r\n/g, '\n').trim().split('\n');
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    if (!trimmed) {
      i += 1;
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = Math.min(heading[1].length, 2);
      const tag = level === 1 ? 'h1' : 'h2';
      html.push(`<${tag}>${inlineMarkdown(heading[2])}</${tag}>`);
      i += 1;
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      html.push('<ul>');
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        html.push(`<li>${inlineMarkdown(lines[i].trim().replace(/^[-*]\s+/, ''))}</li>`);
        i += 1;
      }
      html.push('</ul>');
      continue;
    }

    html.push(`<p>${inlineMarkdown(trimmed)}</p>`);
    i += 1;
  }

  let result = html.join('\n');
  if (!result.includes('<h1>')) {
    result = result.replace(/<h2>/, '<h1>').replace(/<\/h2>/, '</h1>');
  }
  result = result.replace(/\\(\.)/g, '$1');

  const privacyHref = `ai-gdpr-auditor-privacy.html?lang=${lang}`;
  const termsHref = `ai-gdpr-auditor-terms.html?lang=${lang}`;

  if (lang === 'lv') {
    result = result.replace(
      /Privātuma politik(?:u|ā)(?![^<]*<\/a>)/gi,
      (m) => `<a href="${privacyHref}">${m}</a>`
    );
    result = result.replace(
      /Lietošanas noteikum(?:iem|us)(?![^<]*<\/a>)/gi,
      (m) => `<a href="${termsHref}">${m}</a>`
    );
  } else if (lang === 'en') {
    result = result.replace(
      /\bPrivacy Policy\b(?![^<]*<\/a>)/g,
      (m) => `<a href="${privacyHref}">${m}</a>`
    );
    result = result.replace(
      /\bTerms of Service\b(?![^<]*<\/a>)/g,
      (m) => `<a href="${termsHref}">${m}</a>`
    );
  } else if (lang === 'ru') {
    result = result.replace(
      /Политик(?:ой|а) конфиденциальности(?![^<]*<\/a>)/gi,
      (m) => `<a href="${privacyHref}">${m}</a>`
    );
    result = result.replace(
      /Условия(?:ми)? использования(?![^<]*<\/a>)/gi,
      (m) => `<a href="${termsHref}">${m}</a>`
    );
  }

  result = result.replace(/info@prosolvely\.com/gi, (match, offset, str) => {
    const before = str.slice(Math.max(0, offset - 24), offset);
    if (before.includes('mailto:') || before.endsWith('">')) return match;
    return `<a href="mailto:info@prosolvely.com">${match}</a>`;
  });

  return result.trim();
}

const LEGAL_HEAD = `  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Syne:wght@600;700&amp;display=swap" rel="stylesheet">
  <link rel="icon" type="image/jpeg" href="images/favikon.jpg">
  <link rel="stylesheet" href="style.css">`;

function indent(text, spaces) {
  const pad = ' '.repeat(spaces);
  return text.split('\n').map((line) => (line ? pad + line : line)).join('\n');
}

function buildTriPage({ title, ruMd, lvMd, enMd, outFile }) {
  const ruBody = mdToBody(readMd(ruMd), 'ru');
  const lvBody = mdToBody(readMd(lvMd), 'lv');
  const enBody = mdToBody(readMd(enMd), 'en');

  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${title}</title>
${LEGAL_HEAD}
</head>
<body class="bg-anthracite text-gray-200 pb-20" data-back-href="digital-products.html">
  <div class="legal-page">
    <a href="digital-products.html?lang=ru" class="back" id="legal-back">&#8592; К цифровым продуктам</a>

    <article data-lang="ru" class="is-active">
${indent(ruBody, 6)}
    </article>

    <article data-lang="en">
${indent(enBody, 6)}
    </article>

    <article data-lang="lv">
${indent(lvBody, 6)}
    </article>
  </div>
  <script src="legal-lang.js"></script>
</body>
</html>
`;

  writeFileSync(join(ROOT, outFile), html, 'utf8');
  console.log('  ✓', outFile);
}

console.log('Building AI GDPR legal pages…');
buildTriPage({
  title: 'Terms of Service — AI GDPR Audit Tool',
  ruMd: 'Terms_AIauditorTool_ru.md',
  lvMd: 'Terms_AIauditorTool_lv.md',
  enMd: 'Terms_AIauditorTool_en.md',
  outFile: 'ai-gdpr-auditor-terms.html'
});
buildTriPage({
  title: 'Privacy Policy — AI GDPR Audit Tool',
  ruMd: 'GDPR_privatuma_politika_AIauditorTool_ru.md',
  lvMd: 'GDPR_privatuma_politika_AIauditorTool_lv.md',
  enMd: 'GDPR_privatuma_politika_AIauditorTool_en.md',
  outFile: 'ai-gdpr-auditor-privacy.html'
});
console.log('Done.');
