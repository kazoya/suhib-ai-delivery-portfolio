/**
 * Minimal, dependency-free Markdown → HTML for the OUT/ documents.
 * Supports: headings, paragraphs, hr, blockquote, ul/ol (+ task boxes),
 * tables, fenced code, inline code, bold, italic, links, bare URLs.
 * Output is escaped first, so document text can never inject markup.
 */

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function inline(raw: string): string {
  let s = esc(raw);
  s = s.replace(/`([^`]+)`/g, (_m, c: string) => `<code dir="ltr">${c}</code>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, t: string, u: string) =>
    /^https?:\/\//.test(u) ? `<a href="${u}" target="_blank" rel="noopener noreferrer">${t}</a>` : t,
  );
  s = s.replace(/(^|[\s(])((?:https?:\/\/)[^\s<)]+)/g, (_m, pre: string, u: string) =>
    `${pre}<a href="${u}" target="_blank" rel="noopener noreferrer" dir="ltr">${u}</a>`,
  );
  return s;
}

const isTableRow = (l: string) => /^\s*\|.*\|\s*$/.test(l);
const isSep = (l: string) => /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/.test(l);
const cells = (r: string) => r.trim().replace(/^\||\|$/g, "").split("|").map((c) => inline(c.trim()));

export function markdownToHtml(src: string): string {
  const lines = src.replace(/\r\n?/g, "\n").split("\n");
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (/^\s*$/.test(l)) { i++; continue; }

    if (/^```/.test(l)) {
      const buf: string[] = []; i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre dir="ltr"><code>${esc(buf.join("\n"))}</code></pre>`);
      continue;
    }
    const h = /^(#{1,6})\s+(.*)$/.exec(l);
    if (h) { const n = h[1].length; out.push(`<h${n}>${inline(h[2])}</h${n}>`); i++; continue; }
    if (/^\s*(-{3,}|\*{3,})\s*$/.test(l)) { out.push("<hr>"); i++; continue; }
    if (/^\s*>/.test(l)) {
      const buf: string[] = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) buf.push(lines[i++].replace(/^\s*>\s?/, ""));
      out.push(`<blockquote>${markdownToHtml(buf.join("\n"))}</blockquote>`);
      continue;
    }
    if (isTableRow(l) && i + 1 < lines.length && isSep(lines[i + 1])) {
      const head = cells(l); i += 2;
      const rows: string[][] = [];
      while (i < lines.length && isTableRow(lines[i])) rows.push(cells(lines[i++]));
      out.push(
        `<div class="table-wrap"><table><thead><tr>${head.map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${rows
          .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
          .join("")}</tbody></table></div>`,
      );
      continue;
    }
    const ul = /^\s*[-*]\s+(.*)$/.exec(l);
    const ol = /^\s*\d+[.)]\s+(.*)$/.exec(l);
    if (ul || ol) {
      const tag = ul ? "ul" : "ol";
      const re = ul ? /^\s*[-*]\s+(.*)$/ : /^\s*\d+[.)]\s+(.*)$/;
      const items: string[] = [];
      while (i < lines.length) {
        const m = re.exec(lines[i]);
        if (!m) {
          if (items.length && /^\s{2,}\S/.test(lines[i])) { items[items.length - 1] += " " + lines[i].trim(); i++; continue; }
          break;
        }
        items.push(m[1]); i++;
      }
      out.push(
        `<${tag}>${items
          .map((t) => {
            const task = /^\[([ xX])\]\s+(.*)$/.exec(t);
            if (task) return `<li class="task"><input type="checkbox" disabled ${task[1] !== " " ? "checked" : ""}>${inline(task[2])}</li>`;
            return `<li>${inline(t)}</li>`;
          })
          .join("")}</${tag}>`,
      );
      continue;
    }
    const buf = [l]; i++;
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,6}\s|```|\s*>|\s*[-*]\s|\s*\d+[.)]\s|\s*\|)/.test(lines[i])) buf.push(lines[i++]);
    out.push(`<p>${buf.map((x) => inline(x.replace(/\s{2}$/, ""))).join("<br>")}</p>`);
  }
  return out.join("\n");
}
