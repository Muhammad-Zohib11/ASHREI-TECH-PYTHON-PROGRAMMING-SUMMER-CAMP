import { useEffect } from 'react';
const CONFETTI_COLORS = ['#00f5ff','#f59e0b','#10b981','#8b5cf6','#ff6b35','#ec4899','#fff'];

function Confetti() {
  const pieces = Array.from({ length: 36 }, (_, i) => {
    const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    const left  = `${(i * 2.78).toFixed(1)}%`;
    const delay = `${(i * 0.08).toFixed(2)}s`;
    const dur   = `${(1.8 + (i % 5) * 0.3).toFixed(1)}s`;
    const size  = `${6 + (i % 4) * 3}px`;
    const shape = i % 3 === 0 ? '50%' : i % 3 === 1 ? '2px' : '0';
    return { color, left, delay, dur, size, shape };
  });

  return (
    <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:999, overflow:'hidden' }}>
      {pieces.map((p, i) => (
        <div key={i} style={{
          position:'absolute', top: 0, left: p.left,
          width: p.size, height: p.size,
          background: p.color, borderRadius: p.shape,
          animation: `confettiFall ${p.dur} ${p.delay} ease-in forwards`,
          opacity: 0,
        }} />
      ))}
    </div>
  );
}

export default function RewardPopup({ type, day, nextDay, onClose }) {
  // Keyboard dismiss — Enter or Space or Escape
  useEffect(() => {
    const handle = (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [onClose]);

  const overlayStyle = {
    position:'fixed', inset:0, zIndex:1000,
    background:'rgba(0,0,0,0.82)', backdropFilter:'blur(12px)',
    display:'flex', alignItems:'flex-start', justifyContent:'center',
    paddingTop:'5vh', paddingLeft:16, paddingRight:16,
    overflowY:'auto',
  };

  if (type === 'xp') {
    return (
      <>
        <Confetti />
        <div onClick={onClose} style={overlayStyle}>
          <div style={{
            background:'linear-gradient(135deg, rgba(0,245,255,0.16), rgba(245,158,11,0.16))',
            border:'1px solid rgba(0,245,255,0.5)', borderRadius:24, padding:'36px 48px',
            textAlign:'center', animation:'popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            width:'100%', maxWidth:420,
          }}>
            <div style={{ fontSize:60, marginBottom:8, animation:'float 2s ease-in-out infinite' }}>⚡</div>
            <div style={{ fontFamily:'var(--font-head)', fontSize:46, color:'#f59e0b', fontWeight:900, textShadow:'0 0 30px rgba(245,158,11,0.6)', lineHeight:1 }}>
              +{day.xp} XP
            </div>
            <div style={{ color:'#f59e0b', fontWeight:800, fontSize:18, marginTop:6, marginBottom:6 }}>CHALLENGE COMPLETE!</div>
            <div style={{ color:'rgba(255,255,255,0.5)', fontSize:14, marginBottom:20 }}>Incredible work — badge incoming!</div>
            <div style={{ background:'rgba(0,245,255,0.08)', border:'1px solid rgba(0,245,255,0.25)', borderRadius:10, padding:'10px 20px', color:'rgba(255,255,255,0.4)', fontSize:12 }}>
              Tap anywhere to continue
            </div>
          </div>
        </div>
      </>
    );
  }

  if (type === 'badge') {
    return (
      <div onClick={onClose} style={overlayStyle}>
        <div style={{
          background:`linear-gradient(135deg, ${day.color}22, rgba(255,255,255,0.04))`,
          border:`2px solid ${day.color}70`, borderRadius:24, padding:'36px 48px',
          textAlign:'center', animation:'popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow:`0 0 60px ${day.color}35`,
          width:'100%', maxWidth:420,
        }}>
          <div style={{ color:'rgba(255,255,255,0.4)', fontSize:11, fontWeight:800, letterSpacing:3, marginBottom:10 }}>🏅 BADGE UNLOCKED</div>
          <div style={{ position:'relative', display:'inline-block', marginBottom:10 }}>
            <div style={{ position:'absolute', inset:-16, borderRadius:'50%', border:`2px solid ${day.color}50`, animation:'pulseRing 1.5s ease-out infinite' }} />
            <div style={{ fontSize:70, animation:'float 2s ease-in-out infinite' }}>{day.badgeIcon}</div>
          </div>
          <div style={{ fontFamily:'var(--font-head)', fontSize:24, color:day.color, fontWeight:900, marginBottom:6, textShadow:`0 0 18px ${day.color}` }}>
            {day.badge}
          </div>
          <div style={{ color:'rgba(255,255,255,0.4)', fontSize:13, marginBottom:20 }}>Added to your collection</div>
          <div style={{
            background: nextDay ? `linear-gradient(135deg, ${day.color}, ${nextDay.color || day.color})` : 'rgba(255,255,255,0.08)',
            border: nextDay ? 'none' : '1px solid rgba(255,255,255,0.12)',
            borderRadius:12, padding:'13px 24px',
            color: nextDay ? '#000' : 'rgba(255,255,255,0.4)',
            fontSize:14, fontWeight:800,
          }}>
            {nextDay ? `🚀 Tap to start Day ${nextDay.id}: ${nextDay.subtitle}` : '🏁 You completed all days!'}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
