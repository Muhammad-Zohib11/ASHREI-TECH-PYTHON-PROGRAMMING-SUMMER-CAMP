import { useState } from 'react';
import { useProgress } from '../context/ProgressContext.jsx';

export default function GlowBadge({ badge, size = 'normal' }) {
  const { state } = useProgress();
  const earned = state.earnedBadges.includes(badge.name);
  const sm = size === 'small';

  return (
    <div
      style={{
        position:'relative', textAlign:'center',
        padding: sm ? '18px 12px' : '28px 18px',
        borderRadius:16,
        background: earned
          ? `radial-gradient(ellipse at 50% 0%, ${badge.color}25, rgba(255,255,255,0.02))`
          : 'rgba(255,255,255,0.02)',
        border:`1px solid ${earned ? badge.color+'50' : 'rgba(255,255,255,0.06)'}`,
        filter: earned ? 'none' : 'grayscale(1)',
        opacity: earned ? 1 : 0.45,
        boxShadow: earned ? `0 0 30px ${badge.color}20` : 'none',
        animation: earned ? 'badgepulse 4s ease-in-out infinite' : 'none',
        cursor:'default', transition:'transform 0.2s',
      }}
      onMouseEnter={e => earned && (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {earned && (
        <div style={{ position:'absolute', top:8, right:8, background:badge.color, borderRadius:99, padding:'2px 7px', fontSize:9, fontWeight:900, color:'#000', letterSpacing:1 }}>✓ EARNED</div>
      )}
      <div style={{ fontSize: sm ? 34 : 52, marginBottom:10 }}>{badge.icon}</div>
      <div style={{ color: earned ? '#fff' : 'rgba(255,255,255,0.3)', fontWeight:800, fontSize: sm ? 11 : 13, marginBottom:4 }}>{badge.name}</div>
      {!sm && <div style={{ color:'rgba(255,255,255,0.35)', fontSize:12, lineHeight:1.4 }}>{badge.desc}</div>}
      {!sm && earned && <div style={{ marginTop:10, color:badge.color, fontSize:11, fontWeight:700 }}>Day {badge.day}</div>}
      {!earned && <div style={{ marginTop:6, fontSize:20 }}>🔒</div>}
    </div>
  );
}
