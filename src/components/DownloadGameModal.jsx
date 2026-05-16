import { useState, useRef } from 'react';

const DOWNLOAD_PASSWORD = 'admin';

/**
 * DownloadGameModal — password-protected download.
 *
 * Download strategy (in order of preference):
 *   1. If game.filePath is set → use <a href> pointing to public URL (real file).
 *   2. Otherwise fall back to Blob from fallbackContent string.
 *
 * Props:
 *   game            { title, icon, fileName, filePath?, description, difficulty, concepts, password }
 *   dayColor        hex string
 *   onClose         () => void
 *   fallbackContent string — Python file text if no filePath
 */
export default function DownloadGameModal({ game, dayColor, onClose, fallbackContent }) {
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [success, setSuccess]   = useState(false);
  const [shaking, setShaking]   = useState(false);
  const inputRef                = useRef(null);

  const DIFF_STARS = ['', '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];

  const triggerDownload = async () => {
    if (game.filePath) {
      // Fetch the real file from /public and download as Blob
      try {
        const res  = await fetch(game.filePath);
        const text = await res.text();
        const blob = new Blob([text], { type: 'text/plain' });
        const url  = URL.createObjectURL(blob);
        const a    = document.createElement('a');
        a.href     = url;
        a.download = game.fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch {
        // Fallback to inline content if fetch fails
        downloadBlob(fallbackContent);
      }
    } else {
      downloadBlob(fallbackContent);
    }
  };

  const downloadBlob = (content) => {
    const blob = new Blob([content || '# Game file\nprint("Hello!")\n'], { type: 'text/plain' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = game.fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };


  const handleUnlock = () => {
    if (password === DOWNLOAD_PASSWORD) {
      setSuccess(true);
      setTimeout(triggerDownload, 500);
    } else {
      setError('❌ Wrong password. Ask your instructor!');
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      setPassword('');
      inputRef.current?.focus();
    }
  };

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(10px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
      }}
    >
      <div
        className={shaking ? 'challenge-shake' : ''}
        style={{
          width: '100%', maxWidth: 480, borderRadius: 24,
          background: 'linear-gradient(145deg, #0d1424, #080d18)',
          border: `1px solid ${dayColor}40`,
          boxShadow: `0 0 60px ${dayColor}25, 0 32px 80px rgba(0,0,0,0.6)`,
          overflow: 'hidden',
          animation: 'popupIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          background: `linear-gradient(135deg, ${dayColor}15, transparent)`,
          borderBottom: `1px solid ${dayColor}25`,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 14,
              background: `${dayColor}20`, border: `1px solid ${dayColor}40`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26,
            }}>
              {game.icon}
            </div>
            <div>
              <div style={{ color: dayColor, fontSize: 10, fontWeight: 800, letterSpacing: 2 }}>🎮 MINI GAME DOWNLOAD</div>
              <div style={{ color: '#fff', fontWeight: 900, fontSize: 16 }}>{game.title}</div>
            </div>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 22, cursor: 'pointer', lineHeight: 1 }}>×</button>
        </div>

        <div style={{ padding: '24px' }}>
          {/* Game info */}
          <div style={{
            background: 'rgba(255,255,255,0.03)', borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.07)', padding: '14px 16px', marginBottom: 20,
          }}>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.6, marginBottom: 12 }}>
              {game.description}
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span style={{
                background: `${dayColor}15`, border: `1px solid ${dayColor}30`,
                borderRadius: 99, padding: '3px 10px', color: dayColor, fontSize: 11, fontWeight: 700,
              }}>
                {DIFF_STARS[game.difficulty] || '⭐'} Difficulty {game.difficulty}
              </span>
              {game.concepts?.slice(0, 2).map((c, i) => (
                <span key={i} style={{
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: 99, padding: '3px 10px', color: 'rgba(255,255,255,0.55)', fontSize: 11,
                }}>{c}</span>
              ))}
            </div>
          </div>

          {/* File name */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20,
            padding: '10px 14px', background: 'rgba(0,0,0,0.3)', borderRadius: 10,
            border: '1px solid rgba(255,255,255,0.07)',
          }}>
            <span style={{ fontSize: 18 }}>🐍</span>
            <span style={{ fontFamily: 'var(--font-code)', color: '#10b981', fontSize: 13 }}>{game.fileName}</span>
            {game.filePath && (
              <span style={{
                marginLeft: 'auto', background: 'rgba(16,185,129,0.12)',
                border: '1px solid rgba(16,185,129,0.3)', borderRadius: 99,
                padding: '2px 8px', color: '#10b981', fontSize: 10, fontWeight: 700,
              }}>REAL FILE</span>
            )}
          </div>

          {!success ? (
            <>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 8 }}>
                🔐 Enter instructor password to download:
              </div>
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
                onKeyDown={e => e.key === 'Enter' && handleUnlock()}
                placeholder="Enter password..."
                autoFocus
                style={{
                  width: '100%', padding: '12px 16px', borderRadius: 10,
                  background: '#060a12',
                  border: `1px solid ${error ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.12)'}`,
                  color: '#fff', fontFamily: 'var(--font-code)', fontSize: 15,
                  outline: 'none', marginBottom: 10, transition: 'border-color 0.3s', letterSpacing: 4,
                }}
              />
              {error && (
                <div style={{
                  color: '#f87171', fontSize: 13, marginBottom: 12,
                  animation: 'slideUp 0.2s ease forwards',
                }}>
                  {error}
                </div>
              )}
              <button
                onClick={handleUnlock}
                style={{
                  width: '100%', padding: '13px', borderRadius: 10, border: 'none',
                  background: `linear-gradient(135deg, ${dayColor}, ${dayColor}99)`,
                  color: '#000', fontWeight: 900, fontSize: 15, cursor: 'pointer',
                  fontFamily: 'inherit', boxShadow: `0 0 24px ${dayColor}50`, transition: 'all 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'none'}
              >
                🔓 Unlock & Download
              </button>
              <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, textAlign: 'center', marginTop: 12 }}>
                Password provided by your ASHRI instructor
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '16px 0', animation: 'popupIn 0.4s ease forwards' }}>
              <div style={{ fontSize: 56, marginBottom: 12 }}>🎉</div>
              <div style={{ color: '#10b981', fontWeight: 900, fontSize: 20, marginBottom: 8 }}>Download Started!</div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginBottom: 16 }}>
                {game.fileName} is downloading now!
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, lineHeight: 1.8 }}>
                Open it in VS Code and run with:<br />
                <code style={{ color: '#10b981', fontFamily: 'var(--font-code)' }}>python {game.fileName}</code>
              </div>
              <button onClick={onClose} style={{
                marginTop: 16, padding: '10px 28px', borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.15)', background: 'transparent',
                color: 'rgba(255,255,255,0.6)', cursor: 'pointer', fontFamily: 'inherit', fontSize: 13,
              }}>
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
