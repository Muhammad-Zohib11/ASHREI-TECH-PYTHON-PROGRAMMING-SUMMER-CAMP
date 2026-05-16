import { useProgress } from '../context/ProgressContext.jsx';
import { SPACE_SHOOTER_FEATURES } from '../data/showcase.js';

export default function SpaceShooterTracker() {
  const { state } = useProgress();
  const completedCount = state.completedDays.length;

  return (
    <div style={{ borderRadius:20, padding:'24px 28px', background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.07)', marginBottom:24 }}>
      <div style={{ color:'#00f5ff', fontSize:11, fontWeight:800, letterSpacing:2, marginBottom:4 }}>🚀 SPACE SHOOTER: EVOLUTION TRACKER</div>
      <div style={{ color:'rgba(255,255,255,0.3)', fontSize:12, marginBottom:16 }}>Watch your game grow feature by feature across all 10 days</div>
      <div style={{ display:'flex', gap:10, flexWrap:'wrap', alignItems:'flex-end' }}>
        {SPACE_SHOOTER_FEATURES.map((item, i) => (
          <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:6 }}>
            <div style={{
              width:48, height:48, borderRadius:12,
              display:'flex', alignItems:'center', justifyContent:'center', fontSize:20,
              background: i < completedCount ? 'rgba(0,245,255,0.15)' : 'rgba(255,255,255,0.03)',
              border:`1px solid ${i < completedCount ? 'rgba(0,245,255,0.45)' : 'rgba(255,255,255,0.08)'}`,
              boxShadow: i < completedCount ? '0 0 14px rgba(0,245,255,0.25)' : 'none',
              transition:'all 0.4s',
            }}>
              {item.icon}
            </div>
            <div style={{ color: i < completedCount ? 'rgba(0,245,255,0.7)' : 'rgba(255,255,255,0.3)', fontSize:10, fontWeight: i < completedCount ? 700 : 400 }}>{item.feat}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop:16, height:4, background:'rgba(255,255,255,0.05)', borderRadius:99, overflow:'hidden' }}>
        <div style={{ height:'100%', width:`${completedCount * 10}%`, background:'linear-gradient(90deg, #00f5ff, #7c3aed)', borderRadius:99, boxShadow:'0 0 10px rgba(0,245,255,0.4)', transition:'width 1s' }} />
      </div>
      <div style={{ marginTop:8, color:'rgba(255,255,255,0.25)', fontSize:11 }}>{completedCount}/10 features unlocked · {(completedCount * 10)}% complete</div>
    </div>
  );
}
