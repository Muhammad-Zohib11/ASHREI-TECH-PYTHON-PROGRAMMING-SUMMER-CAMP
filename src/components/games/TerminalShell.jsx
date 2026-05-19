import { useRef, useEffect } from 'react';

/** Shared terminal UI used by all day games */
export function TerminalShell({ color, title, lines, input, onInput, onSubmit, placeholder, onReset, disabled }) {
  const outRef = useRef(null);
  const inRef  = useRef(null);

  useEffect(() => {
    if (outRef.current) outRef.current.scrollTop = outRef.current.scrollHeight;
  }, [lines]);

  useEffect(() => { if (!disabled) inRef.current?.focus(); }, [disabled]);

  const C = {
    output: 'rgba(200,230,255,0.75)', info: 'rgba(100,200,255,0.9)',
    success: '#10b981', error: '#f87171', border: `${color}80`,
    title: color, subtitle: 'rgba(255,255,255,0.5)',
    maze: 'rgba(220,240,255,0.92)', input: 'rgba(255,255,255,0.5)',
    prompt: `${color}cc`, warn: '#f59e0b',
  };

  return (
    <div style={{ width:'100%', borderRadius:12, overflow:'hidden', border:`1px solid ${color}30`, background:'#060a12' }}>
      {/* Chrome */}
      <div style={{ padding:'8px 14px', background:'rgba(255,255,255,0.04)', borderBottom:`1px solid ${color}20`, display:'flex', gap:6, alignItems:'center' }}>
        {['#ff5f57','#febc2e','#28c840'].map((c,i)=><div key={i} style={{ width:11,height:11,borderRadius:'50%',background:c }}/>)}
        <span style={{ color:'rgba(255,255,255,0.3)', fontSize:11, marginLeft:8 }}>{title}</span>
        <button onClick={onReset} style={{ marginLeft:'auto', background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, color:'rgba(255,255,255,0.45)', fontSize:11, padding:'2px 10px', cursor:'pointer', fontFamily:'inherit' }}>↺ Reset</button>
      </div>
      {/* Output */}
      <div ref={outRef} style={{ height:380, overflowY:'auto', padding:'10px 0', fontFamily:'var(--font-code)', fontSize:13, lineHeight:1.65 }}>
        {lines.map((l,i)=>(
          <div key={i} style={{ color:C[l.t]||'rgba(255,255,255,0.7)', whiteSpace:'pre', paddingLeft:4, fontWeight:l.t==='title'?800:400 }}>{l.s}</div>
        ))}
      </div>
      {/* Input */}
      <div style={{ padding:'8px 12px', borderTop:`1px solid ${color}20`, display:'flex', gap:8, alignItems:'center', background:'rgba(0,0,0,0.3)' }}>
        <span style={{ color, fontFamily:'var(--font-code)', fontSize:13 }}>{'>'}</span>
        <input ref={inRef} value={input} onChange={e=>onInput(e.target.value)}
          onKeyDown={e=>{ if(e.key==='Enter') onSubmit(); }}
          placeholder={disabled ? '— game over —' : placeholder}
          disabled={disabled}
          style={{ flex:1, background:'transparent', border:'none', outline:'none', color:'#e2e8f0', fontFamily:'var(--font-code)', fontSize:16, caretColor:color, opacity:disabled?0.3:1 }}
          autoComplete="off" spellCheck={false}
        />
        <button onClick={onSubmit} disabled={disabled} style={{ background:`${color}20`, border:`1px solid ${color}40`, borderRadius:6, color, fontSize:12, padding:'4px 12px', cursor:'pointer', fontFamily:'inherit', fontWeight:700, opacity:disabled?0.3:1 }}>Enter ↵</button>
      </div>
    </div>
  );
}

/** Helper: make a line object */
export const L = (s, t='output') => ({ s, t });

/** Seeded random for consistent auto-runs */
export const rnd = (lo, hi) => Math.floor(Math.random() * (hi - lo + 1)) + lo;
export const pick = arr => arr[Math.floor(Math.random() * arr.length)];
