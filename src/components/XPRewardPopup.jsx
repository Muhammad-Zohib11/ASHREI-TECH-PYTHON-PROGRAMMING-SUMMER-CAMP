import { useState, useEffect } from 'react';

/**
 * XPRewardPopup
 * Floating "+XP" popup that animates in and fades out.
 * Props:
 *   xp        - number
 *   dayColor  - hex string
 *   onDone    - callback when animation completes
 */
export default function XPRewardPopup({ xp, dayColor, onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      if (onDone) setTimeout(onDone, 400);
    }, 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      position: 'fixed', top: '30%', left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 9999, pointerEvents: 'none',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.4s ease',
      animation: 'xpFloat 1.8s ease forwards',
    }}>
      {/* XP pill */}
      <div style={{
        background: `linear-gradient(135deg, ${dayColor}, ${dayColor}88)`,
        borderRadius: 99, padding: '12px 28px',
        color: '#000', fontWeight: 900, fontSize: 24,
        fontFamily: 'var(--font-head)',
        boxShadow: `0 0 40px ${dayColor}80, 0 8px 32px rgba(0,0,0,0.4)`,
        letterSpacing: 1,
      }}>
        ⚡ +{xp} XP
      </div>
      {/* Stars */}
      <div style={{ fontSize: 22, letterSpacing: 6, animation: 'popupIn 0.3s ease forwards' }}>
        ✨✨✨
      </div>
    </div>
  );
}
