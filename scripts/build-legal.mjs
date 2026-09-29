/**
 * Build main-site legal HTML pages from Markdown sources (no npm deps).
 * Run: node scripts/build-legal.mjs
 *
 * Sources (edit these):
 *   PRIVACY _POLICY_LV.md / PRIVACY _POLICY_EN.md  -> privacy2.html
 *   Terms_of_service_LV.md / Terms_of_service_EN.md -> terms.html
 *   Refund_Policy_LV.md / Refund_Policy_EN.md       -> refund-policy.html
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

function readMd(name) {
  return readFileSync(join(ROOT, name), 'utf8');
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

console.log('Building legal pages from Markdown…');
buildLvEnPage({
  title: 'Privacy Policy — ProSolvely by Ilona Samovica',
  lvMd: 'PRIVACY _POLICY_LV.md',
  enMd: 'PRIVACY _POLICY_EN.md',
  pageTitles: {
    lv: 'Privātuma politika — ProSolvely by Ilona Samovica',
    en: 'Privacy Policy — ProSolvely by Ilona Samovica'
  },
  outFile: 'privacy2.html'
});
buildLvEnPage({
  title: 'Terms of Service — ProSolvely by Ilona Samovica',
  lvMd: 'Terms_of_service_LV.md',
  enMd: 'Terms_of_service_EN.md',
  pageTitles: {
    lv: 'Lietošanas noteikumi — ProSolvely by Ilona Samovica',
    en: 'Terms of Service — ProSolvely by Ilona Samovica'
  },
  outFile: 'terms.html'
});
buildRefundPage();
console.log('Done.');
