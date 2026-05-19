import { useState, useRef } from 'react';

/**
 * FillBlankCode — Code Detective Mode
 * Renders real game Python code with blanks the student must deduce.
 * Props:
 *   step      – { id, instruction, template, blanks, hints, xp, successMessage }
 *   dayColor  – hex string (overridden with detective purple in ChallengeEngine)
 *   gameName  – display name of the game (e.g. "Coin Collector Dash")
 *   stepIndex – 0-based
 *   totalSteps
 *   onSuccess – callback(xpEarned)
 */
export default function FillBlankCode({ step, dayColor, gameName, stepIndex, totalSteps, onSuccess, isAdmin }) {
  const detectiveColor = '#a78bfa'; // always purple for detective mode
  const color = detectiveColor;
  // answers[i] = what the student typed for blank i
  const [answers, setAnswers]       = useState(() => step.blanks.map(() => ''));
  const [checked,  setChecked]      = useState(false);
  const [wrongs,   setWrongs]       = useState([]);   // indices that are wrong
  const [done,     setDone]         = useState(false);
  const [shaking,  setShaking]      = useState(false);
  const [hint,     setHint]         = useState(null);
  const [attempts, setAttempts]     = useState(0);
  const inputRefs = useRef([]);

  // Split the template on ___ so we can interleave text + inputs
  const parts = step.template.split('___');

  // Progressive hints: reveal one more hint per failed attempt
  const currentHints = step.hints || [];
  const visibleHints = currentHints.slice(0, Math.min(attempts, currentHints.length));

  // Partial reveal: after 3 wrong attempts, show first char of each blank
  const showPartialReveal = attempts >= 3;

  const setAnswer = (i, val) => {
    setAnswers(prev => { const n = [...prev]; n[i] = val; return n; });
    setChecked(false);
    setWrongs([]);
  };

  const handleCheck = () => {
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    const wrongIdx = [];
    step.blanks.forEach((correct, i) => {
      const student = answers[i].trim().toLowerCase();
      // Accept array of valid answers, or single string
      const validAnswers = Array.isArray(correct)
        ? correct.map(a => a.trim().toLowerCase())
        : [correct.trim().toLowerCase()];
      // Lenient: also accept with minor whitespace variations
      if (!validAnswers.includes(student)) wrongIdx.push(i);
    });

    setChecked(true);
    setWrongs(wrongIdx);

    if (wrongIdx.length === 0) {
      setDone(true);
      setTimeout(() => onSuccess(step.xp), 1200);
    } else {
      setShaking(true);
      setTimeout(() => setShaking(false), 500);
      // Focus first wrong input
      inputRefs.current[wrongIdx[0]]?.focus();
    }
  };

  const handleKeyDown = (e, i) => {
    // Tab moves to next blank
    if (e.key === 'Tab') {
      e.preventDefault();
      const next = inputRefs.current[i + 1];
      if (next) next.focus();
    }
    if (e.key === 'Enter') handleCheck();
  };

  return (
    <div
      className={shaking ? 'challenge-shake' : ''}
      style={{
        borderRadius: done ? 0 : 0,
        borderTop: `1px solid ${done ? 'rgba(16,185,129,0.25)' : 'rgba(139,92,246,0.2)'}`,
        background: done
          ? 'linear-gradient(135deg,rgba(16,185,129,0.07),rgba(0,0,0,0.35))'
          : 'linear-gradient(135deg,rgba(139,92,246,0.07),rgba(0,0,0,0.35))',
        overflow: 'hidden',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Step counter + XP badge */}
      <div style={{
        padding: '10px 20px',
        background: done ? 'rgba(16,185,129,0.1)' : 'rgba(139,92,246,0.1)',
        borderBottom: `1px solid ${done ? 'rgba(16,185,129,0.25)' : 'rgba(139,92,246,0.2)'}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 26, height: 26, borderRadius: '50%',
            background: done ? 'rgba(16,185,129,0.25)' : 'rgba(139,92,246,0.25)',
            border: `1.5px solid ${done ? '#10b981' : color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 900,
            color: done ? '#10b981' : color,
          }}>
            {done ? '✓' : stepIndex + 1}
          </div>
          <span style={{ color: done ? '#10b981' : color, fontSize: 11, fontWeight: 800, letterSpacing: 1.5 }}>
            CLUE {stepIndex + 1} / {totalSteps}
          </span>
        </div>
        <div style={{
          background: done ? 'rgba(16,185,129,0.15)' : 'rgba(139,92,246,0.15)',
          border: `1px solid ${done ? 'rgba(16,185,129,0.4)' : 'rgba(139,92,246,0.4)'}`,
          borderRadius: 99, padding: '3px 12px',
          color: done ? '#10b981' : color, fontSize: 11, fontWeight: 800,
        }}>
          ⚡ +{step.xp} XP
        </div>
      </div>

      <div style={{ padding: '18px 22px' }}>
        {/* Mission instruction */}
        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, lineHeight: 1.75, marginBottom: 14 }}>
          {step.instruction.split('**').map((part, i) =>
            i % 2 === 1
              ? <strong key={i} style={{ color: color }}>{part}</strong>
              : <span key={i}>{part}</span>
          )}
        </div>

        {/* Redacted-code block */}
        <div style={{
          background: 'rgba(0,0,0,0.65)',
          border: `1px solid ${done ? 'rgba(16,185,129,0.35)' : 'rgba(139,92,246,0.3)'}`,
          borderRadius: 12,
          padding: '16px 18px',
          fontFamily: 'var(--font-code)',
          fontSize: 12.5,
          lineHeight: 2,
          marginBottom: 16,
          overflowX: 'auto',
          overflowY: 'auto',
          maxHeight: '520px',
          whiteSpace: 'pre',
          boxShadow: done ? '0 0 20px rgba(16,185,129,0.08)' : '0 0 20px rgba(139,92,246,0.06)',
        }}>
          {parts.map((part, i) => {
            const blankIdx = i;
            const isWrong   = wrongs.includes(blankIdx);
            const isCorrect = checked && !isWrong && i < parts.length - 1;
            // Partial reveal hint: show first char after 3 bad attempts
            const partialHint = showPartialReveal && i < parts.length - 1
              ? (Array.isArray(step.blanks[blankIdx])
                  ? step.blanks[blankIdx][0][0]
                  : step.blanks[blankIdx][0])
              : null;

            return (
              <span key={i}>
                {/* Syntax-highlight comments green-ish, code white */}
                {part.split('\n').map((line, li) => (
                  <span key={li}>
                    {li > 0 && '\n'}
                    {line.startsWith('#')
                      ? <span style={{ color: 'rgba(134,239,172,0.6)', fontStyle: 'italic' }}>{line}</span>
                      : <span style={{ color: 'rgba(220,240,255,0.9)' }}>{line}</span>
                    }
                  </span>
                ))}
                {/* Inline blank input */}
                {i < parts.length - 1 && (
                  <span style={{ position: 'relative', display: 'inline-block' }}>
                    <input
                      ref={el => inputRefs.current[blankIdx] = el}
                      value={answers[blankIdx] ?? ''}
                      onChange={e => setAnswer(blankIdx, e.target.value)}
                      onKeyDown={e => handleKeyDown(e, blankIdx)}
                      disabled={done}
                      placeholder={partialHint ? `${partialHint}...` : '███'}
                      spellCheck={false}
                      autoComplete="off"
                      style={{
                        display: 'inline-block',
                        width: `${Math.max(answers[blankIdx]?.length || 3, 7) + 2}ch`,
                        minWidth: '7ch',
                        maxWidth: '30ch',
                        background: done
                          ? 'rgba(16,185,129,0.18)'
                          : isWrong
                            ? 'rgba(239,68,68,0.18)'
                            : 'rgba(139,92,246,0.15)',
                        border: `1.5px solid ${
                          done ? '#10b981' : isWrong ? '#ef4444' : 'rgba(139,92,246,0.6)'
                        }`,
                        borderRadius: 6,
                        color: done ? '#6ee7b7' : isWrong ? '#fca5a5' : '#ddd6fe',
                        fontFamily: 'var(--font-code)',
                        fontSize: 13,
                        padding: '0 6px',
                        outline: 'none',
                        verticalAlign: 'middle',
                        transition: 'all 0.2s',
                        letterSpacing: 0.5,
                      }}
                    />
                  </span>
                )}
              </span>
            );
          })}
        </div>

        {/* Progressive hints */}
        {visibleHints.length > 0 && !done && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
            {visibleHints.map((h, i) => (
              <div key={i} style={{
                padding: '8px 14px', borderRadius: 10,
                background: i === 0 ? 'rgba(139,92,246,0.1)' : i === 1 ? 'rgba(59,130,246,0.1)' : 'rgba(245,158,11,0.1)',
                border: `1px solid ${i === 0 ? 'rgba(139,92,246,0.3)' : i === 1 ? 'rgba(59,130,246,0.3)' : 'rgba(245,158,11,0.3)'}`,
                color: 'rgba(255,255,255,0.72)', fontSize: 13, lineHeight: 1.5,
              }}>
                {i === 0 ? '🔎' : i === 1 ? '💡' : '✨'} <strong style={{color: i === 0 ? '#a78bfa' : i === 1 ? '#60a5fa' : '#fbbf24'}}>Hint {i + 1}:</strong> {h}
              </div>
            ))}
          </div>
        )}

        {/* Partial reveal notice */}
        {showPartialReveal && !done && (
          <div style={{
            padding: '8px 14px', borderRadius: 10, marginBottom: 12,
            background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)',
            color: 'rgba(255,255,255,0.55)', fontSize: 12,
          }}>
            🔓 First letter of each answer is shown in the placeholder — you're almost there!
          </div>
        )}

        {/* Wrong field count */}
        {checked && wrongs.length > 0 && (
          <div style={{
            padding: '8px 14px', borderRadius: 10, marginBottom: 10,
            background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
            color: '#fca5a5', fontSize: 12,
          }}>
            ❌ {wrongs.length === 1 ? '1 blank is wrong' : `${wrongs.length} blanks are wrong`} — highlighted in red
          </div>
        )}

        {/* Success */}
        {done && (
          <div style={{
            padding: '14px 18px', borderRadius: 12, marginBottom: 12,
            background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
            color: '#10b981', fontWeight: 700, fontSize: 14, textAlign: 'center',
            animation: 'popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          }}>
            ✅ {step.successMessage}
          </div>
        )}

        {/* Submit button */}
        {!done && (
          <button
            onClick={handleCheck}
            style={{
              width: '100%', padding: '11px 20px',
              borderRadius: 10, border: '1px solid rgba(139,92,246,0.45)',
              background: 'linear-gradient(135deg,rgba(139,92,246,0.25),rgba(139,92,246,0.1))',
              color: '#ddd6fe', fontWeight: 800, fontSize: 14,
              cursor: 'pointer', fontFamily: 'inherit',
              boxShadow: '0 0 16px rgba(139,92,246,0.15)',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'linear-gradient(135deg,rgba(139,92,246,0.4),rgba(139,92,246,0.2))'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'linear-gradient(135deg,rgba(139,92,246,0.25),rgba(139,92,246,0.1))'; }}
          >
            🔍 Submit Detection
          </button>
        )}
        {isAdmin && !done && (
          <button
            type="button"
            onClick={() => { setDone(true); setTimeout(() => onSuccess(step.xp), 400); }}
            style={{
              width: '100%', marginTop: 8, padding: '10px 20px', borderRadius: 10,
              border: '1px solid rgba(255,107,0,0.4)', background: 'rgba(255,107,0,0.08)',
              color: 'var(--orange)', fontWeight: 800, fontSize: 12,
              cursor: 'pointer', fontFamily: 'inherit',
            }}
          >
            🛡️ Admin Skip
          </button>
        )}

        <div style={{ color: 'rgba(255,255,255,0.22)', fontSize: 11, marginTop: 8, textAlign: 'center' }}>
          Tab = next blank · Enter = check
        </div>
      </div>
    </div>
  );
}
