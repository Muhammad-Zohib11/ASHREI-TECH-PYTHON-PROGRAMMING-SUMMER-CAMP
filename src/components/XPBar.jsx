import { useProgress } from '../context/ProgressContext.jsx';
import { getRankInfo }  from '../utils/rank.js';

export default function XPBar({ showDetails = false }) {
  const { state } = useProgress();
  const { current, next, pct } = getRankInfo(state.xp);
  return (
    <div>
      {showDetails && (
        <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6, alignItems:'center' }}>
          <span style={{ color:current.color, fontWeight:700, fontSize:13 }}>{current.icon} {current.name}</span>
          <span style={{ color:'rgba(255,255,255,0.4)', fontSize:12 }}>{state.xp} / {next ? next.minXP : 'MAX'} XP</span>
        </div>
      )}
      <div style={{ height:8, background:'rgba(255,255,255,0.08)', borderRadius:99, overflow:'hidden', position:'relative' }}>
        <div style={{
          height:'100%', borderRadius:99,
          width: pct + '%',
          background:`linear-gradient(90deg, ${current.color}, ${next?.color || '#fff'})`,
          boxShadow:`0 0 14px ${current.color}90`,
          transition:'width 1.2s cubic-bezier(0.4,0,0.2,1)',
        }} />
      </div>
      {showDetails && next && (
        <div style={{ textAlign:'right', marginTop:4, color:'rgba(255,255,255,0.35)', fontSize:11 }}>
          {next.minXP - state.xp} XP to {next.icon} {next.name}
        </div>
      )}
    </div>
  );
}
