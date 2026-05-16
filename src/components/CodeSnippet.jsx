import { useState } from 'react';

// ── Keyword set ──
const KEYWORDS = new Set([
  'print','input','int','str','float','bool','len','range','list','dict',
  'def','return','if','elif','else','for','while','import','from','True',
  'False','None','and','or','not','in','break','continue','pass','random',
  'math','pygame','time','sys','append','pop','insert','sort','shuffle',
  'randint','choice','uniform','seed','self','class','try','except','with',
  'as','lambda','global','yield','open','read','write','format','round',
  'abs','min','max','sum','type','enumerate',
]);

function escHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Single-pass character tokenizer — avoids regex-on-regex corruption.
 * Returns an HTML string with <span> tags for syntax highlighting.
 */
function tokenizeLine(line) {
  let html = '';
  let i = 0;
  const n = line.length;

  while (i < n) {
    const ch = line[i];

    // ── Comment: everything from # to EOL ──
    if (ch === '#') {
      html += `<span style="color:#6a737d;font-style:italic">${escHtml(line.slice(i))}</span>`;
      break;
    }

    // ── Double-quoted string ──
    if (ch === '"') {
      let j = i + 1;
      while (j < n && line[j] !== '"') j++;
      if (j < n) j++;
      html += `<span style="color:#a5d6ff">${escHtml(line.slice(i, j))}</span>`;
      i = j; continue;
    }

    // ── Single-quoted string ──
    if (ch === "'") {
      let j = i + 1;
      while (j < n && line[j] !== "'") j++;
      if (j < n) j++;
      html += `<span style="color:#a5d6ff">${escHtml(line.slice(i, j))}</span>`;
      i = j; continue;
    }

    // ── Identifier or keyword ──
    if (/[a-zA-Z_]/.test(ch)) {
      let j = i;
      while (j < n && /\w/.test(line[j])) j++;
      const word = line.slice(i, j);
      html += KEYWORDS.has(word)
        ? `<span style="color:#ff7b72;font-weight:700">${word}</span>`
        : escHtml(word);
      i = j; continue;
    }

    // ── Number (int or float) ──
    if (/[0-9]/.test(ch)) {
      let j = i;
      while (j < n && /[0-9.]/.test(line[j])) j++;
      html += `<span style="color:#79c0ff">${escHtml(line.slice(i, j))}</span>`;
      i = j; continue;
    }

    // ── Operators ──
    if ('=!<>+-*/%'.includes(ch)) {
      html += `<span style="color:#ffa657">${escHtml(ch)}</span>`;
      i++; continue;
    }

    // ── Brackets & parentheses ──
    if ('()[]{}:,'.includes(ch)) {
      html += `<span style="color:#e6edf3">${escHtml(ch)}</span>`;
      i++; continue;
    }

    // ── Everything else ──
    html += escHtml(ch);
    i++;
  }

  return html;
}

function highlight(code) {
  return code.split('\n').map((line, i) => (
    <div
      key={i}
      style={{ minHeight: '1.5em' }}
      dangerouslySetInnerHTML={{ __html: tokenizeLine(line) || '&nbsp;' }}
    />
  ));
}

// ── Component ──
export default function CodeSnippet({ snippet, dayColor = '#00f5ff' }) {
  const [open,    setOpen]    = useState(true);
  const [copied,  setCopied]  = useState(false);
  const [showTry, setShowTry] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.09)', marginBottom: 20 }}>

      {/* ── Header ── */}
      <div style={{ background: 'rgba(255,255,255,0.05)', padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: open ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
        <div style={{ color: dayColor, fontWeight: 700, fontSize: 14 }}>💻 {snippet.title}</div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <button
            onClick={handleCopy}
            style={{ background: copied ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.07)', border: `1px solid ${copied ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.12)'}`, borderRadius: 6, padding: '4px 10px', color: copied ? '#10b981' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontSize: 11, fontFamily: 'inherit', transition: 'all 0.2s' }}
          >
            {copied ? '✓ Copied!' : '⧉ Copy'}
          </button>
          <button
            onClick={() => setOpen(!open)}
            style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', fontSize: 12, padding: '4px 8px', fontFamily: 'inherit' }}
          >
            {open ? '▲' : '▼ Show'}
          </button>
        </div>
      </div>

      {open && (
        <>
          {/* ── Code block ── */}
          <div style={{ background: '#0d1117', padding: '18px 20px', fontFamily: 'var(--font-code)', fontSize: 13, lineHeight: 1.7, color: '#e6edf3', overflowX: 'auto' }}>
            {highlight(snippet.code)}
          </div>

          {/* ── Simulated output ── */}
          {snippet.output && (
            <div style={{ background: 'rgba(0,0,0,0.4)', padding: '12px 18px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#6a737d', fontSize: 10, fontWeight: 700, letterSpacing: 2, marginBottom: 6 }}>▶ OUTPUT</div>
              <div style={{ fontFamily: 'var(--font-code)', fontSize: 12, color: '#10b981', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{snippet.output}</div>
            </div>
          )}

          {/* ── Explanation ── */}
          <div style={{ background: 'rgba(0,245,255,0.04)', padding: '10px 18px', color: 'rgba(255,255,255,0.55)', fontSize: 13, borderTop: '1px solid rgba(255,255,255,0.05)', lineHeight: 1.6 }}>
            💡 {snippet.desc}
          </div>

          {/* ── Try This (collapsible) ── */}
          {snippet.tryThis && (
            <>
              <div
                onClick={() => setShowTry(!showTry)}
                style={{ background: 'rgba(245,158,11,0.06)', borderTop: '1px solid rgba(245,158,11,0.15)', padding: '9px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', userSelect: 'none' }}
              >
                <span style={{ color: '#f59e0b', fontSize: 12, fontWeight: 700 }}>🎯 Try This Challenge</span>
                <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>{showTry ? '▲ Hide' : '▼ Show'}</span>
              </div>
              {showTry && (
                <div style={{ background: 'rgba(245,158,11,0.06)', padding: '14px 18px', color: 'rgba(255,255,255,0.8)', fontSize: 13, lineHeight: 1.65, borderTop: '1px solid rgba(245,158,11,0.1)' }}>
                  {snippet.tryThis}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
}
