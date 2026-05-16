import { useProgress } from '../context/ProgressContext.jsx';
import { DAYS_DATA }   from '../data/lessons.js';
import DayCard         from '../components/DayCard.jsx';
import SectionLabel    from '../components/SectionLabel.jsx';

export default function LessonsGrid({ setView, setSelectedDay }) {
  const { state } = useProgress();
  const done = state.completedDays.length;

  return (
    <div style={{ maxWidth:1200, margin:'0 auto', padding:'40px 24px', position:'relative', zIndex:1 }} className="page-enter">
      <div style={{ marginBottom:40 }}>
        <SectionLabel color="var(--orange)">12-DAY CURRICULUM</SectionLabel>
        <h1 style={{ fontFamily:'var(--font-head)', fontSize:34, color:'#fff', fontWeight:900 }}>Mission Map</h1>
        <p style={{ color:'rgba(255,255,255,0.4)', marginTop:8, fontSize:15 }}>Complete each day to unlock the next. Ship a real game every single day.</p>
      </div>

      {/* Progress bar */}
      <div style={{ borderRadius:18, padding:'20px 28px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.08)', marginBottom:32, display:'flex', alignItems:'center', gap:20 }}>
        <div style={{ flex:1 }}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
            <span style={{ color:'rgba(255,255,255,0.65)', fontSize:14, fontWeight:700 }}>Overall Progress</span>
            <span style={{ color:'var(--orange)', fontSize:14, fontWeight:800 }}>{done}/12 Days Complete</span>
          </div>
          <div style={{ height:10, background:'rgba(255,255,255,0.07)', borderRadius:99, overflow:'hidden' }}>
            <div style={{ height:'100%', width:`${(done/12)*100}%`, background:'linear-gradient(90deg, var(--orange), var(--teal))', borderRadius:99, boxShadow:'0 0 14px rgba(255,107,0,0.4)', transition:'width 1.2s' }} />
          </div>
        </div>
        <div style={{ color:'var(--orange)', fontWeight:900, fontFamily:'var(--font-head)', fontSize:28 }}>{Math.round((done/12)*100)}%</div>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(270px,1fr))', gap:18 }}>
        {DAYS_DATA.map(day => (
          <DayCard key={day.id} day={day} onClick={d => { setSelectedDay(d); setView('day'); }} />
        ))}
      </div>
    </div>
  );
}
