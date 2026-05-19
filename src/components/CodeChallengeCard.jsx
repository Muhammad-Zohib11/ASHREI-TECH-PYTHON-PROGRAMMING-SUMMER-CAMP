import { useState, useRef, useEffect } from 'react';
import { validateCode, getHint } from '../utils/codeValidator.js';

/**
 * CodeChallengeCard
 * Props:
 *   step        - challenge step object from challenges.js
 *   dayColor    - hex color string
 *   onSuccess   - callback(xpEarned) when challenge passes
 *   stepIndex   - 0-based index
 *   totalSteps  - total steps count
 */
export default function CodeChallengeCard({ step, dayColor, onSuccess, stepIndex, totalSteps, isAdmin }) {
  const [userCode, setUserCode]     = useState('');
  const [result, setResult]         = useState(null);   // {valid, feedback}
  const [attempts, setAttempts]     = useState(0);
  const [hint, setHint]             = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shaking, setShaking]       = useState(false);
  const textareaRef                 = useRef(null);

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = Math.max(ta.scrollHeight, 80) + 'px';
  }, [userCode]);

  const handleValidate = () => {
    const res = validateCode(userCode, step.validator);
    setResult(res);
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (res.valid) {
      setShowSuccess(true);
      setTimeout(() => {
        onSuccess(step.xp);
      }, 1400);
    } else {
      // Shake animation
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      // Reveal hint
      const h = getHint(step.hints, newAttempts);
      setHint(h);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end   = e.target.selectionEnd;
      const next  = userCode.substring(0, start) + '    ' + userCode.substring(end);
      setUserCode(next);
      // Restore cursor after state update
      requestAnimationFrame(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = start + 4;
          textareaRef.current.selectionEnd   = start + 4;
        }
      });
    }
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleValidate();
    }
  };

  const done = showSuccess;

  return (
    <div
      className={shaking ? 'challenge-shake' : ''}
      style={{
        borderRadius: 18,
        border: `1px solid ${done ? '#10b98160' : `${dayColor}50`}`,
        background: done
          ? 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(0,0,0,0.4))'
          : `linear-gradient(135deg, ${dayColor}10, rgba(0,0,0,0.4))`,
        overflow: 'hidden',
        transition: 'all 0.4s ease',
        position: 'relative',
      }}
    >
      {/* Header bar */}
      <div style={{
        padding: '12px 20px',
        background: done ? 'rgba(16,185,129,0.12)' : `${dayColor}12`,
        borderBottom: `1px solid ${done ? '#10b98140' : `${dayColor}25`}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: '50%',
            background: done ? '#10b981' : `${dayColor}30`,
            border: `2px solid ${done ? '#10b981' : dayColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 900, color: done ? '#000' : dayColor,
          }}>
            {done ? '✓' : stepIndex + 1}
          </div>
          <span style={{ color: done ? '#10b981' : dayColor, fontSize: 12, fontWeight: 800, letterSpacing: 1 }}>
            STEP {stepIndex + 1} / {totalSteps}
          </span>
        </div>
        <div style={{
          background: `${dayColor}20`, border: `1px solid ${dayColor}35`,
          borderRadius: 99, padding: '3px 12px', color: dayColor,
          fontSize: 11, fontWeight: 800,
        }}>
          ⚡ +{step.xp} XP
        </div>
      </div>

      <div style={{ padding: '20px 22px' }}>
        {/* Instruction */}
        <div style={{ color: 'rgba(255,255,255,0.88)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
          {step.instruction.split('**').map((part, i) =>
            i % 2 === 1
              ? <strong key={i} style={{ color: dayColor }}>{part}</strong>
              : <span key={i}>{part}</span>
          )}
        </div>


        {!done ? (
          <>
            {/* Code input */}
            <div style={{ position: 'relative', marginBottom: 12 }}>
              <div style={{
                background: '#060a12', borderRadius: 10,
                border: `1px solid ${result?.valid === false ? 'rgba(239,68,68,0.5)' : `${dayColor}30`}`,
                overflow: 'hidden', transition: 'border-color 0.3s',
              }}>
                {/* Mini terminal bar */}
                <div style={{
                  padding: '6px 12px', background: 'rgba(255,255,255,0.03)',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  display: 'flex', gap: 6, alignItems: 'center',
                }}>
                  {['#ff5f57','#febc2e','#28c840'].map((c, i) =>
                    <div key={i} style={{ width: 9, height: 9, borderRadius: '50%', background: c }} />
                  )}
                  <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: 11, marginLeft: 6 }}>
                    🐍 your_code.py
                  </span>
                  <span style={{ marginLeft: 'auto', color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>
                    Ctrl+Enter to run
                  </span>
                </div>
                <textarea
                  ref={textareaRef}
                  value={userCode}
                  onChange={e => { setUserCode(e.target.value); setResult(null); }}
                  onKeyDown={handleKey}
                  placeholder={step.placeholder}
                  spellCheck={false}
                  style={{
                    width: '100%', minHeight: 80, padding: '14px 16px',
                    background: 'transparent', border: 'none', outline: 'none',
                    color: '#e2e8f0', fontFamily: 'var(--font-code)', fontSize: 14,
                    lineHeight: 1.7, resize: 'none', display: 'block',
                  }}
                />
              </div>
            </div>

            {/* Feedback */}
            {result && (
              <div style={{
                padding: '10px 14px', borderRadius: 8, marginBottom: 12,
                background: result.valid ? 'rgba(16,185,129,0.12)' : 'rgba(239,68,68,0.1)',
                border: `1px solid ${result.valid ? 'rgba(16,185,129,0.35)' : 'rgba(239,68,68,0.3)'}`,
                color: result.valid ? '#10b981' : '#f87171',
                fontSize: 13, fontWeight: 600,
                animation: 'slideUp 0.25s ease forwards',
              }}>
                {result.feedback}
              </div>
            )}

            {/* Hint */}
            {hint && (
              <div style={{
                padding: '10px 14px', borderRadius: 8, marginBottom: 12,
                background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)',
                animation: 'slideUp 0.25s ease forwards',
              }}>
                <div style={{ color: '#f59e0b', fontSize: 10, fontWeight: 800, letterSpacing: 1, marginBottom: 4 }}>
                  💡 HINT
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>{hint}</div>
              </div>
            )}

            {/* Validate button */}
            <button
              onClick={handleValidate}
              style={{
                width: '100%', padding: '12px 0', borderRadius: 10, border: 'none',
                background: `linear-gradient(135deg, ${dayColor}, ${dayColor}aa)`,
                color: '#000', fontWeight: 900, fontSize: 14, cursor: 'pointer',
                fontFamily: 'inherit', letterSpacing: 0.5,
                boxShadow: `0 0 20px ${dayColor}40`,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'none'}
            >
              ▶ Run & Validate Code
            </button>
            {isAdmin && (
              <button
                type="button"
                onClick={() => { setShowSuccess(true); setTimeout(() => onSuccess(step.xp), 400); }}
                style={{
                  width: '100%', marginTop: 8, padding: '10px 0', borderRadius: 10,
                  border: '1px solid rgba(255,107,0,0.4)', background: 'rgba(255,107,0,0.08)',
                  color: 'var(--orange)', fontWeight: 800, fontSize: 12, cursor: 'pointer',
                  fontFamily: 'inherit', letterSpacing: 0.5,
                }}
              >
                🛡️ Admin Skip
              </button>
            )}
          </>
        ) : (
          // Success state
          <div style={{
            textAlign: 'center', padding: '20px 0',
            animation: 'popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
          }}>
            <div style={{ fontSize: 48, marginBottom: 10 }}>✅</div>
            <div style={{ color: '#10b981', fontWeight: 900, fontSize: 18, marginBottom: 6 }}>
              Challenge Passed!
            </div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
              {step.successMessage}
            </div>
            <div style={{
              display: 'inline-block', marginTop: 12,
              background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.35)',
              borderRadius: 99, padding: '4px 16px',
              color: '#f59e0b', fontSize: 12, fontWeight: 800,
            }}>
              ⚡ +{step.xp} XP earned!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
