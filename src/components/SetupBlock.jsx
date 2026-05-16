import { useState } from 'react';

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button onClick={handle} style={{
      background: copied ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.07)',
      border: `1px solid ${copied ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.12)'}`,
      borderRadius: 6, padding: '3px 10px', color: copied ? '#10b981' : 'rgba(255,255,255,0.5)',
      cursor: 'pointer', fontSize: 11, fontFamily: 'inherit', flexShrink: 0, transition: 'all 0.2s',
    }}>
      {copied ? '✓ Copied' : '⧉ Copy'}
    </button>
  );
}

function TerminalLine({ cmd, comment }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12, padding:'5px 0', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
      <div style={{ display:'flex', gap:10, alignItems:'flex-start', flex:1, minWidth:0 }}>
        <span style={{ color:'#10b981', fontFamily:'var(--font-code)', flexShrink:0 }}>$</span>
        <div>
          <div style={{ color:'#e6edf3', fontFamily:'var(--font-code)', fontSize:13, wordBreak:'break-all' }}>{cmd}</div>
          {comment && <div style={{ color:'rgba(255,255,255,0.35)', fontSize:11, marginTop:2 }}># {comment}</div>}
        </div>
      </div>
      <CopyBtn text={cmd} />
    </div>
  );
}

/**
 * SetupBlock — "Setup for Today" section in each lesson.
 * Props:
 *   setup: {
 *     pythonVersion: string,        // e.g. "3.9+"
 *     packages: string[],           // pip install targets
 *     commands: { cmd, comment }[], // terminal commands in order
 *     extensions: string[],         // VS Code extension IDs/names
 *     troubleshooting: { issue, fix }[],
 *     note: string,                 // optional extra note
 *   }
 *   dayColor: string
 */
export default function SetupBlock({ setup, dayColor = '#00f5ff' }) {
  const [open,   setOpen]   = useState(false);
  const [showTB, setShowTB] = useState(false);

  if (!setup) return null;

  return (
    <div style={{ borderRadius:14, overflow:'hidden', border:'1px solid rgba(255,255,255,0.09)', marginBottom:24 }}>

      {/* Header */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{ background:'rgba(16,185,129,0.08)', padding:'12px 18px', display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer', borderBottom: open ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
      >
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ fontSize:18 }}>🛠️</span>
          <div>
            <div style={{ color:'#10b981', fontWeight:800, fontSize:14 }}>Setup for Today</div>
            <div style={{ color:'rgba(255,255,255,0.4)', fontSize:12 }}>Terminal commands · VS Code extensions · Python checks</div>
          </div>
        </div>
        <span style={{ color:'rgba(255,255,255,0.4)', fontSize:12 }}>{open ? '▲ Hide' : '▼ Show Setup'}</span>
      </div>

      {open && (
        <div style={{ background:'#060d14' }}>

          {/* Python version check */}
          {setup.pythonVersion && (
            <div style={{ padding:'14px 18px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color:'rgba(255,255,255,0.4)', fontSize:10, fontWeight:800, letterSpacing:2, marginBottom:8 }}>PYTHON VERSION REQUIRED</div>
              <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                <div style={{ fontFamily:'var(--font-code)', color:'#a5d6ff', fontSize:13 }}>
                  Python {setup.pythonVersion}
                  <span style={{ color:'rgba(255,255,255,0.3)', fontSize:11, marginLeft:8 }}>
                    — check with: <code style={{ color:'#10b981' }}>python --version</code>
                  </span>
                </div>
                <CopyBtn text="python --version" />
              </div>
            </div>
          )}

          {/* Terminal commands */}
          {setup.commands?.length > 0 && (
            <div style={{ padding:'14px 18px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color:'rgba(255,255,255,0.4)', fontSize:10, fontWeight:800, letterSpacing:2, marginBottom:10 }}>TERMINAL COMMANDS (run in order)</div>
              <div style={{ display:'flex', flexDirection:'column', gap:2 }}>
                {setup.commands.map((c, i) => <TerminalLine key={i} cmd={c.cmd} comment={c.comment} />)}
              </div>
            </div>
          )}

          {/* Pip installs */}
          {setup.packages?.length > 0 && (
            <div style={{ padding:'14px 18px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color:'rgba(255,255,255,0.4)', fontSize:10, fontWeight:800, letterSpacing:2, marginBottom:10 }}>PACKAGES TO INSTALL</div>
              {setup.packages.map((pkg, i) => (
                <TerminalLine key={i} cmd={`pip install ${pkg}`} comment={`installs the ${pkg} library`} />
              ))}
            </div>
          )}

          {/* VS Code Extensions */}
          {setup.extensions?.length > 0 && (
            <div style={{ padding:'14px 18px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color:'rgba(255,255,255,0.4)', fontSize:10, fontWeight:800, letterSpacing:2, marginBottom:8 }}>VS CODE EXTENSIONS</div>
              <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
                {setup.extensions.map((ext, i) => (
                  <span key={i} style={{ background:'rgba(0,245,255,0.08)', border:'1px solid rgba(0,245,255,0.2)', borderRadius:8, padding:'4px 12px', color:'#00f5ff', fontSize:12, fontFamily:'var(--font-code)' }}>
                    {ext}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Optional note */}
          {setup.note && (
            <div style={{ padding:'12px 18px', borderBottom:'1px solid rgba(255,255,255,0.05)', background:'rgba(245,158,11,0.04)' }}>
              <div style={{ color:'#f59e0b', fontSize:13 }}>⚠️ {setup.note}</div>
            </div>
          )}

          {/* Troubleshooting */}
          {setup.troubleshooting?.length > 0 && (
            <div style={{ padding:'14px 18px' }}>
              <div
                onClick={() => setShowTB(t => !t)}
                style={{ display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer', marginBottom: showTB ? 12 : 0 }}
              >
                <div style={{ color:'#f59e0b', fontSize:13, fontWeight:700 }}>🔧 Troubleshooting ({setup.troubleshooting.length} known issues)</div>
                <span style={{ color:'rgba(255,255,255,0.35)', fontSize:11 }}>{showTB ? '▲' : '▼ Expand'}</span>
              </div>
              {showTB && (
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  {setup.troubleshooting.map((tb, i) => (
                    <div key={i} style={{ background:'rgba(255,255,255,0.03)', borderRadius:10, padding:'12px 14px', borderLeft:'3px solid #f59e0b' }}>
                      <div style={{ color:'#f59e0b', fontSize:12, fontWeight:700, marginBottom:4 }}>❓ {tb.issue}</div>
                      <div style={{ color:'rgba(255,255,255,0.65)', fontSize:12, lineHeight:1.6 }}>✅ {tb.fix}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
