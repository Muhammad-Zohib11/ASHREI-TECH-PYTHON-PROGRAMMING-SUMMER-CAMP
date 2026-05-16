// Lightweight pure-CSS confetti (no libraries)
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
          animation: `confettiFall ${p.dur} ${p.delay} ease-in forwards,
                      confettiSway ${p.dur} ${p.delay} ease-in-out forwards`,
          opacity: 0,
        }} />
      ))}
    </div>
  );
}

export default function RewardPopup({ type, day, onClose }) {
  if (type === 'xp') {
    return (
      <>
        <Confetti />
        <div
          onClick={onClose}
          style={{ position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000, background:'rgba(0,0,0,0.82)', backdropFilter:'blur(12px)' }}
        >
          <div style={{
            background:'linear-gradient(135deg, rgba(0,245,255,0.16), rgba(245,158,11,0.16))',
            border:'1px solid rgba(0,245,255,0.5)', borderRadius:28, padding:'52px 72px',
            textAlign:'center', animation:'popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
            position:'relative',
          }}>
            <div style={{ fontSize:80, marginBottom:12, animation:'float 2s ease-in-out infinite' }}>⚡</div>
            <div style={{ fontFamily:'var(--font-head)', fontSize:56, color:'#f59e0b', fontWeight:900, textShadow:'0 0 30px rgba(245,158,11,0.6)' }}>
              +{day.xp}
            </div>
            <div style={{ color:'#f59e0b', fontWeight:800, fontSize:22, marginBottom:8 }}>XP EARNED!</div>
            <div style={{ color:'rgba(255,255,255,0.55)', fontSize:15, marginBottom:8 }}>Challenge Complete — Incredible Work!</div>
            <div style={{ color:'rgba(255,255,255,0.25)', fontSize:12 }}>Click anywhere to continue</div>
          </div>
        </div>
      </>
    );
  }

  if (type === 'badge') {
    return (
      <div
        onClick={onClose}
        style={{ position:'fixed', inset:0, display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000, background:'rgba(0,0,0,0.82)', backdropFilter:'blur(12px)' }}
      >
        <div style={{
          background:`linear-gradient(135deg, ${day.color}28, rgba(255,255,255,0.04))`,
          border:`2px solid ${day.color}80`, borderRadius:28, padding:'52px 72px',
          textAlign:'center', animation:'popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          boxShadow:`0 0 80px ${day.color}40`,
        }}>
          <div style={{ position:'relative', display:'inline-block', marginBottom:14 }}>
            <div style={{ position:'absolute', inset:-20, borderRadius:'50%', border:`2px solid ${day.color}60`, animation:'pulseRing 1.5s ease-out infinite' }} />
            <div style={{ fontSize:90, animation:'float 2s ease-in-out infinite' }}>{day.badgeIcon}</div>
          </div>
          <div style={{ color:'rgba(255,255,255,0.4)', fontSize:12, fontWeight:800, letterSpacing:3, marginBottom:12 }}>🏅 BADGE UNLOCKED!</div>
          <div style={{ fontFamily:'var(--font-head)', fontSize:26, color:day.color, fontWeight:900, marginBottom:8, textShadow:`0 0 20px ${day.color}` }}>
            {day.badge}
          </div>
          <div style={{ color:'rgba(255,255,255,0.5)', fontSize:14, marginBottom:20 }}>Added to your collection</div>
          <div style={{ color:'rgba(255,255,255,0.25)', fontSize:12 }}>Click anywhere to continue</div>
        </div>
      </div>
    );
  }

  return null;
}
