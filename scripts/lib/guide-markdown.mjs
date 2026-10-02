/**
 * Markdown → HTML for product how-to guides (digital products card).
 */

export function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export function inlineMarkdown(text) {
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
  return out;
}

export function mdToGuideHtml(md) {
  const lines = md.replace(/\r\n/g, '\n').trim().split('\n');
  const html = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed || trimmed === '---') {
      i += 1;
      continue;
    }

    if (/^#\s+/.test(trimmed) && !html.length) {
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
      const level = heading[1].length;
      const tag = level <= 2 ? 'h2' : 'h3';
      html.push(`<${tag}>${inlineMarkdown(heading[2])}</${tag}>`);
      i += 1;
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      html.push('<ol class="list-decimal ml-5 space-y-1">');
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        html.push(`<li>${inlineMarkdown(lines[i].trim().replace(/^\d+\.\s+/, ''))}</li>`);
        i += 1;
      }
      html.push('</ol>');
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

    if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
      html.push(`<p class="text-gray-500 text-sm italic">${inlineMarkdown(trimmed.slice(1, -1))}</p>`);
      i += 1;
      continue;
    }

    html.push(`<p>${inlineMarkdown(trimmed)}</p>`);
    i += 1;
  }

  let result = html.join('\n        ');
  result = result.replace(
    /(https:\/\/t\.me\/aigdprauditsupport_bot)(?![^<]*<\/a>)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  return result.trim();
}
