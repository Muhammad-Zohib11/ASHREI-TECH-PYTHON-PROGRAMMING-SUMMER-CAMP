import { useProgress } from '../context/ProgressContext.jsx';
import { BADGES_ALL }  from '../data/badges.js';
import GlowBadge       from '../components/GlowBadge.jsx';
import SectionLabel    from '../components/SectionLabel.jsx';

export default function BadgesPage() {
  const { state } = useProgress();
  const earned = state.earnedBadges.length;
  const total   = BADGES_ALL.length;

  return (
    <div style={{ maxWidth:1000, margin:'0 auto', padding:'40px 24px 80px', position:'relative', zIndex:1 }} className="page-enter">
      <div style={{ textAlign:'center', marginBottom:44 }}>
        <SectionLabel color="#f59e0b">ACHIEVEMENTS</SectionLabel>
        <h1 style={{ fontFamily:'var(--font-head)', fontSize:34, color:'#fff', fontWeight:900 }}>Badge Collection</h1>
        <p style={{ color:'rgba(255,255,255,0.4)', marginTop:8, fontSize:15 }}>Earn all {total} badges to become a Python Legend.</p>
      </div>

      {/* Stats */}
      <div style={{ borderRadius:18, padding:'20px 20px', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.07)', marginBottom:36, display:'flex', gap:24, justifyContent:'center', alignItems:'center', flexWrap:'wrap' }}>
        <div style={{ textAlign:'center' }}>
          <div style={{ color:'#f59e0b', fontFamily:'var(--font-head)', fontSize:34, fontWeight:900 }}>{earned}</div>
          <div style={{ color:'rgba(255,255,255,0.4)', fontSize:13 }}>Earned</div>
        </div>
        <div style={{ width:1, height:40, background:'rgba(255,255,255,0.08)' }} />
        <div style={{ textAlign:'center' }}>
          <div style={{ color:'rgba(255,255,255,0.25)', fontFamily:'var(--font-head)', fontSize:34, fontWeight:900 }}>{total - earned}</div>
          <div style={{ color:'rgba(255,255,255,0.4)', fontSize:13 }}>Locked</div>
        </div>
        <div style={{ width:1, height:40, background:'rgba(255,255,255,0.08)' }} />
        <div style={{ textAlign:'center' }}>
          <div style={{ color:'#00f5ff', fontFamily:'var(--font-head)', fontSize:34, fontWeight:900 }}>{Math.round(earned/total*100)}%</div>
          <div style={{ color:'rgba(255,255,255,0.4)', fontSize:13 }}>Complete</div>
        </div>
        <div style={{ flex:'0 0 200px' }}>
          <div style={{ height:8, background:'rgba(255,255,255,0.07)', borderRadius:99, overflow:'hidden' }}>
            <div style={{ height:'100%', width:`${Math.round(earned/total*100)}%`, background:'linear-gradient(90deg, #f59e0b, #ff6b35)', borderRadius:99, boxShadow:'0 0 12px rgba(245,158,11,0.4)' }} />
          </div>
        </div>
      </div>

      <div className="badges-grid" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(165px,1fr))', gap:16 }}>
        {BADGES_ALL.map((badge, i) => <GlowBadge key={i} badge={badge} />)}
      </div>
    </div>
  );
}
