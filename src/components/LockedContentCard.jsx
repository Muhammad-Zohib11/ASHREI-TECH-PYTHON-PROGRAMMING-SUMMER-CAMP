import { useEffect, useState } from 'react';

/**
 * LockedContentCard
 * Wraps children in a blurred, locked overlay until `unlocked` is true.
 * Props:
 *   unlocked   - boolean
 *   dayColor   - hex string
 *   label      - lock message to display
 *   children   - content to reveal
 */
export default function LockedContentCard({ unlocked, dayColor, label, children }) {
  const [revealed, setRevealed] = useState(unlocked);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (unlocked && !revealed) {
      setAnimating(true);
      const t = setTimeout(() => {
        setRevealed(true);
        setAnimating(false);
      }, 600);
      return () => clearTimeout(t);
    }
  }, [unlocked]);

  if (revealed) {
    return (
      <div style={{ animation: 'unlockReveal 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards' }}>
        {children}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', borderRadius: 18, overflow: 'hidden' }}>
      {/* Blurred content beneath */}
      <div style={{ filter: 'blur(6px)', opacity: 0.35, pointerEvents: 'none', userSelect: 'none' }}>
        {children}
      </div>

      {/* Lock overlay */}
      <div style={{
        position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 14,
        background: `radial-gradient(ellipse at center, ${dayColor}12 0%, rgba(4,8,15,0.85) 70%)`,
        backdropFilter: 'blur(2px)',
        animation: animating ? 'lockPulse 0.6s ease forwards' : 'none',
      }}>
        {/* Animated lock icon */}
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          background: `${dayColor}15`, border: `2px solid ${dayColor}50`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, animation: 'float 3s ease-in-out infinite',
          boxShadow: `0 0 30px ${dayColor}30`,
        }}>
          🔒
        </div>
        <div style={{ textAlign: 'center', padding: '0 24px' }}>
          <div style={{ color: dayColor, fontWeight: 900, fontSize: 15, marginBottom: 6 }}>
            LOCKED
          </div>
          <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.6 }}>
            {label || 'Complete the challenge above to unlock this section'}
          </div>
        </div>
        {/* Pulse ring */}
        <div style={{
          position: 'absolute', width: 80, height: 80, borderRadius: '50%',
          border: `2px solid ${dayColor}40`,
          animation: 'pulseRing 2s ease-out infinite',
        }} />
      </div>
    </div>
  );
}
