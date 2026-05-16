import { useState } from 'react';

/**
 * HowToPlayCard
 * Reusable "How To Play" section for any day's mini-game.
 *
 * Props:
 *   howToPlay  - object from challenges.js with keys:
 *                { controls[], objective, winCondition, loseCondition, tips[], mechanics[] }
 *   miniGame   - { title, icon, fileName, difficulty }
 *   dayColor   - hex string
 */
export default function HowToPlayCard({ howToPlay, miniGame, dayColor }) {
  const [expanded, setExpanded] = useState(true);

  if (!howToPlay) return null;

  const { controls = [], objective, winCondition, loseCondition, tips = [], mechanics = [] } = howToPlay;

  const DIFF_STARS = ['', '⭐', '⭐⭐', '⭐⭐⭐', '⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'];

  return (
    <div style={{
      borderRadius: 18, overflow: 'hidden', marginBottom: 24,
      border: `1px solid ${dayColor}35`,
      background: `linear-gradient(135deg, ${dayColor}08, rgba(0,0,0,0.3))`,
    }}>
      {/* Header — always visible, click to toggle */}
      <button
        onClick={() => setExpanded(e => !e)}
        style={{
          width: '100%', padding: '14px 20px', border: 'none', cursor: 'pointer',
          background: `${dayColor}12`,
          borderBottom: expanded ? `1px solid ${dayColor}25` : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          fontFamily: 'inherit', transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = `${dayColor}1e`}
        onMouseLeave={e => e.currentTarget.style.background = `${dayColor}12`}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 22 }}>{miniGame?.icon || '🎮'}</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: dayColor, fontSize: 10, fontWeight: 800, letterSpacing: 2 }}>
              📖 HOW TO PLAY
            </div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 15 }}>
              {miniGame?.title || 'Mini Game'}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {miniGame?.difficulty && (
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
              {DIFF_STARS[miniGame.difficulty]}
            </span>
          )}
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 18, lineHeight: 1 }}>
            {expanded ? '▲' : '▼'}
          </span>
        </div>
      </button>

      {/* Expandable body */}
      {expanded && (
        <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 18 }}>

          {/* Objective */}
          {objective && (
            <Section icon="🎯" label="MISSION OBJECTIVE" color={dayColor}>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                {objective}
              </p>
            </Section>
          )}

          {/* Controls */}
          {controls.length > 0 && (
            <Section icon="🕹️" label="CONTROLS" color={dayColor}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: 8 }}>
                {controls.map((ctrl, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '8px 12px', borderRadius: 8,
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <kbd style={{
                      background: `${dayColor}20`, border: `1px solid ${dayColor}50`,
                      borderRadius: 6, padding: '2px 8px', color: dayColor,
                      fontFamily: 'var(--font-code)', fontSize: 12, fontWeight: 700,
                      whiteSpace: 'nowrap', flexShrink: 0,
                    }}>
                      {ctrl.key}
                    </kbd>
                    <span style={{ color: 'rgba(255,255,255,0.65)', fontSize: 13 }}>
                      {ctrl.action}
                    </span>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Win / Lose row */}
          {(winCondition || loseCondition) && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {winCondition && (
                <div style={{
                  padding: '12px 14px', borderRadius: 10,
                  background: 'rgba(16,185,129,0.08)',
                  border: '1px solid rgba(16,185,129,0.25)',
                }}>
                  <div style={{ color: '#10b981', fontSize: 10, fontWeight: 800, letterSpacing: 1.5, marginBottom: 6 }}>
                    ✅ WIN CONDITION
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    {winCondition}
                  </p>
                </div>
              )}
              {loseCondition && (
                <div style={{
                  padding: '12px 14px', borderRadius: 10,
                  background: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.25)',
                }}>
                  <div style={{ color: '#f87171', fontSize: 10, fontWeight: 800, letterSpacing: 1.5, marginBottom: 6 }}>
                    ❌ LOSE CONDITION
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    {loseCondition}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Special mechanics */}
          {mechanics.length > 0 && (
            <Section icon="⚙️" label="SPECIAL MECHANICS" color={dayColor}>
              <ul style={{ margin: 0, padding: '0 0 0 4px', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {mechanics.map((m, i) => (
                  <li key={i} style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.7)', fontSize: 13, lineHeight: 1.5 }}>
                    <span style={{ color: dayColor, flexShrink: 0 }}>◆</span>
                    {m}
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* Tips */}
          {tips.length > 0 && (
            <Section icon="💡" label="PRO TIPS" color="#f59e0b">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {tips.map((tip, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: 10, alignItems: 'flex-start',
                    padding: '8px 12px', borderRadius: 8,
                    background: 'rgba(245,158,11,0.07)',
                    border: '1px solid rgba(245,158,11,0.18)',
                  }}>
                    <span style={{ color: '#f59e0b', fontSize: 14, flexShrink: 0, marginTop: 1 }}>💡</span>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, lineHeight: 1.6 }}>{tip}</span>
                  </div>
                ))}
              </div>
            </Section>
          )}
        </div>
      )}
    </div>
  );
}

/** Small labeled section wrapper */
function Section({ icon, label, color, children }) {
  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        color: color || 'rgba(255,255,255,0.5)',
        fontSize: 10, fontWeight: 800, letterSpacing: 2, marginBottom: 10,
      }}>
        <span>{icon}</span> {label}
      </div>
      {children}
    </div>
  );
}
