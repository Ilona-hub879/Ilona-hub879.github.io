/**
 * Build main-site legal HTML pages from Markdown sources (no npm deps).
 * Run: node scripts/build-legal.mjs
 *
 * Sources (edit these):
 *   PRIVACY _POLICY_LV.md / PRIVACY _POLICY_EN.md / PRIVACY_POLICY_RU.md -> privacy2.html
 *   Terms_of_service_RU.md / Terms_of_service_EN.md / Terms_of_service_LV.md -> terms.html
 *   Refund_Policy_LV.md / Refund_Policy_EN.md       -> refund-policy.html
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function readMd(name) {
  return cleanMd(readFileSync(join(ROOT, name), 'utf8'));
}

function cleanMd(md) {
  let text = md.replace(/\r\n/g, '\n');
  text = text.replace(/\[\[([^\]]+)\]\{\.underline\}\]\(([^)]+)\)/g, '[$1]($2)');
  text = text.replace(/<https:\/\/([^>]+)>/g, 'https://$1');
  text = text.replace(/\\"/g, '"');
  text = text.replace(/ --- /g, ' — ');
  text = text.replace(/\\\s*\n/g, ' ');

  const lines = text.split('\n');
  const merged = [];
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    const isListStart = (l) => /^[-*]\s/.test(l.trim()) || /^-\s{2,}/.test(l);

    if (isListStart(line)) {
      while (i + 1 < lines.length) {
        const nxt = lines[i + 1];
        const nt = nxt.trim();
        if (!nt) break;
        if (isListStart(nxt) || /^(#{1,6})\s/.test(nt) || /^\|/.test(nt) || /^\*\*\d+\./.test(nt) || /^\d+\.\d+\./.test(nt)) break;
        line = `${line.trimEnd()} ${nt}`;
        i += 1;
      }
      merged.push(line);
      i += 1;
      continue;
    }

    while (i + 1 < lines.length) {
      const t = line.trimEnd();
      const n = lines[i + 1].trim();
      if (!t || !n) break;
      if (/^(#{1,6}\s|\||[-*]\s|-\s{2,}|\*\*\d|[\d]+\.\d+\.)/.test(n)) break;
      if (/^(#{1,6}\s|\||[-*]\s)/.test(t.trim())) break;
      if (/^\*\*[^*]+\*\*$/.test(t.trim()) && /^\*\*/.test(n)) break;
      if (!/[.!?:;]$/.test(t) && /^[a-zа-яё0-9(«"\[]/i.test(n)) {
        line = `${t} ${n}`;
        i += 1;
        continue;
      }
      break;
    }
    merged.push(line);
  }
  return merged.join('\n');
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function inlineMarkdown(text) {
  let out = escapeHtml(text);
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const safeHref = href.replace(/"/g, '&quot;');
    if (/^https?:\/\//i.test(href)) {
      return `<a href="${safeHref}" target="_blank" rel="noopener noreferrer">${label}</a>`;
    }
    return `<a href="${safeHref}">${label}</a>`;
  });
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  out = out.replace(/_([^_]+)_/g, '<em>$1</em>');
  return out;
}

function mdToBody(md) {
  const lines = md.trim().split('\n');
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    if (/^\|/.test(trimmed) && trimmed.includes('|')) {
      const tableLines = [];
      while (i < lines.length && /^\|/.test(lines[i].trim())) {
        tableLines.push(lines[i].trim());
        i += 1;
      }
      if (tableLines.length >= 2) {
        const bodyRows = tableLines.filter((row) => {
          const cells = row.split('|').slice(1, -1).map((c) => c.trim());
          return !cells.every((c) => /^:?-+:?$/.test(c));
        });
        const rows = bodyRows.map((row) =>
          row
            .split('|')
            .slice(1, -1)
            .map((cell) => inlineMarkdown(cell.trim()))
        );
        if (rows.length) {
          html.push('<div class="legal-page-table-wrap"><table>');
          html.push('<thead><tr>' + rows[0].map((c) => `<th>${c}</th>`).join('') + '</tr></thead>');
          html.push('<tbody>');
          for (let r = 1; r < rows.length; r += 1) {
            html.push('<tr>' + rows[r].map((c) => `<td>${c}</td>`).join('') + '</tr>');
          }
          html.push('</tbody></table></div>');
        }
      }
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

    const sectionBold = trimmed.match(/^\*\*(.+)\*\*$/);
    if (sectionBold && (/^\d+\.\s/.test(sectionBold[1]) || sectionBold[1] === sectionBold[1].toUpperCase())) {
      html.push(`<h2>${inlineMarkdown(sectionBold[1])}</h2>`);
      i += 1;
      continue;
    }

    const subSection = trimmed.match(/^(\d+\.\d+\.)\s*(.+)$/);
    if (subSection) {
      html.push(`<h3>${inlineMarkdown(subSection[1] + ' ' + subSection[2])}</h3>`);
      i += 1;
      continue;
    }

    if (/^[-*]\s+/.test(trimmed) || /^-\s{2,}/.test(line)) {
      html.push('<ul>');
      while (i < lines.length) {
        const t = lines[i].trim();
        if (!t) {
          i += 1;
          continue;
        }
        if (/^[-*]\s+/.test(t) || /^-\s{2,}/.test(lines[i])) {
          html.push(`<li>${inlineMarkdown(t.replace(/^[-*]\s+/, '').replace(/^-\s{2,}/, ''))}</li>`);
          i += 1;
        } else break;
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

  result = result.replace(/info@prosolvely\.com/gi, (match, offset, str) => {
    const before = str.slice(Math.max(0, offset - 20), offset);
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

const LEGAL_STYLE = `  <style>
    .legal-page { max-width: 720px; margin: 0 auto; padding: 2rem 1rem 3rem; color: #e5e7eb; font-family: 'Inter', sans-serif; }
    .legal-page h1 { font-family: 'Syne', sans-serif; font-size: 1.75rem; color: #fff; margin-bottom: 0.75rem; }
    .legal-page h2 { font-family: 'Syne', sans-serif; font-size: 1.125rem; color: #00ff7f; margin-top: 1.5rem; margin-bottom: 0.5rem; }
    .legal-page p, .legal-page li { font-size: 0.9375rem; line-height: 1.6; margin-bottom: 0.75rem; color: #d1d5db; }
    .legal-page ul { margin: 0.5rem 0 1rem 1.25rem; padding: 0; }
    .legal-page a { color: #00ff7f; text-decoration: none; }
    .legal-page a:hover { text-decoration: underline; }
    .legal-page .back { display: inline-block; margin-bottom: 1.5rem; color: #00ff7f; font-family: 'Syne', sans-serif; font-size: 0.875rem; }
    .legal-page-table-wrap { overflow-x: auto; margin: 1rem 0; }
    .legal-page-table-wrap table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    .legal-page-table-wrap th, .legal-page-table-wrap td { border: 1px solid rgba(255,255,255,0.12); padding: 0.5rem 0.65rem; text-align: left; vertical-align: top; }
    [data-lang] { display: none; }
    [data-lang].is-active { display: block; }
  </style>`;

const LANG_SCRIPT = `  <script>
    (function () {
      var blocks = document.querySelectorAll('[data-lang]');
      var back = document.getElementById('legal-back');
      var pageTitles = PAGE_TITLES;
      function setLang(code) {
        blocks.forEach(function (el) {
          el.classList.toggle('is-active', el.getAttribute('data-lang') === code);
        });
        document.documentElement.lang = code;
        document.title = pageTitles[code] || pageTitles.lv;
        if (back) {
          back.innerHTML = code === 'en' ? '&#8592; Back to the site' : '&#8592; Atpaka&#316; uz vietni';
        }
      }
      var params = new URLSearchParams(window.location.search);
      var lang = params.get('lang');
      if (lang !== 'en' && lang !== 'lv') {
        try {
          var siteLang = localStorage.getItem('lang');
          lang = siteLang === 'en' ? 'en' : 'lv';
        } catch (e) {
          lang = 'lv';
        }
      }
      setLang(lang);
    })();
  </script>`;

function buildLvEnPage({ title, lvMd, enMd, pageTitles, outFile }) {
  const lvBody = mdToBody(readMd(lvMd));
  const enBody = mdToBody(readMd(enMd));

  const html = `<!DOCTYPE html>
<html lang="lv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
${LEGAL_HEAD}
${LEGAL_STYLE}
</head>
<body class="bg-anthracite text-gray-200 pb-20">
  <div class="legal-page">
    <a href="index.html" class="back" id="legal-back">&#8592; Atpaka&#316; uz vietni</a>

    <article data-lang="lv" class="is-active">
${indent(lvBody, 6)}
    </article>

    <article data-lang="en">
${indent(enBody, 6)}
    </article>
  </div>

${LANG_SCRIPT.replace('PAGE_TITLES', JSON.stringify(pageTitles))}
</body>
</html>
`;

  writeFileSync(join(ROOT, outFile), html, 'utf8');
  console.log('  ✓', outFile);
}

function buildRefundPage() {
  const lvBody = mdToBody(readMd('Refund_Policy_LV.md'));
  const enBody = mdToBody(readMd('Refund_Policy_EN.md'));

  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Refund Policy — ProSolvely by Ilona Samovica</title>
${LEGAL_HEAD}
${LEGAL_STYLE}
</head>
<body class="bg-anthracite text-gray-200 pb-20" data-back-href="digital-products.html">
  <div class="legal-page">
    <a href="digital-products.html?lang=ru" class="back" id="legal-back">&#8592; К цифровым продуктам</a>

    <!-- RU: official Latvian text (Refund_Policy_LV.md) -->
    <article data-lang="ru" class="is-active">
${indent(lvBody, 6)}
    </article>

    <article data-lang="lv">
${indent(lvBody, 6)}
    </article>

    <article data-lang="en">
${indent(enBody, 6)}
    </article>
  </div>
  <script src="legal-lang.js"></script>
</body>
</html>
`;

  writeFileSync(join(ROOT, 'refund-policy.html'), html, 'utf8');
  console.log('  ✓ refund-policy.html');
}

function indent(text, spaces) {
  const pad = ' '.repeat(spaces);
  return text.split('\n').map((line) => (line ? pad + line : line)).join('\n');
}

function buildTermsPage() {
  const ruBody = mdToBody(readMd('Terms_of_service_RU.md'));
  const enBody = mdToBody(readMd('Terms_of_service_EN.md'));
  const lvBody = mdToBody(readMd('Terms_of_service_LV.md'));

  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Terms of Service — ProSolvely by Ilona Samovica</title>
${LEGAL_HEAD}
${LEGAL_STYLE}
</head>
<body class="bg-anthracite text-gray-200 pb-20" data-back-href="index.html">
  <div class="legal-page">
    <a href="index.html?lang=ru" class="back" id="legal-back">&#8592; На главную</a>

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

  writeFileSync(join(ROOT, 'terms.html'), html, 'utf8');
  console.log('  ✓ terms.html');
}

function buildPrivacyPage() {
  const ruBody = mdToBody(readMd('PRIVACY_POLICY_RU.md'));
  const enBody = mdToBody(readMd('PRIVACY _POLICY_EN.md'));
  const lvBody = mdToBody(readMd('PRIVACY _POLICY_LV.md'));

  const html = `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Privacy Policy — ProSolvely by Ilona Samovica</title>
${LEGAL_HEAD}
${LEGAL_STYLE}
</head>
<body class="bg-anthracite text-gray-200 pb-20" data-back-href="index.html">
  <div class="legal-page">
    <a href="index.html?lang=ru" class="back" id="legal-back">&#8592; На главную</a>

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

  writeFileSync(join(ROOT, 'privacy2.html'), html, 'utf8');
  console.log('  ✓ privacy2.html');
}

console.log('Building legal pages from Markdown…');
buildPrivacyPage();
buildTermsPage();
buildRefundPage();
console.log('Done.');
