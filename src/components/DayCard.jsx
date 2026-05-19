import { useState } from 'react';
import { useProgress } from '../context/ProgressContext.jsx';
import ConceptTag from './ConceptTag.jsx';

export default function DayCard({ day, onClick }) {
  const { state } = useProgress();
  const locked  = !state.unlockedDays.includes(day.id);
  const done    = state.completedDays.includes(day.id);
  const active  = !locked && !done;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      role={locked ? undefined : 'button'}
      tabIndex={locked ? undefined : 0}
      onClick={() => !locked && onClick(day)}
      onKeyDown={e => !locked && (e.key === 'Enter' || e.key === ' ') && onClick(day)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={locked ? `Day ${day.id}: ${day.title} — locked` : `Day ${day.id}: ${day.title}`}
      aria-disabled={locked}
      style={{
        borderRadius:18, padding:22, position:'relative', overflow:'hidden',
        background: locked
          ? 'rgba(255,255,255,0.02)'
          : `linear-gradient(135deg, ${day.color}12, rgba(255,255,255,0.03))`,
        border:`1px solid ${done ? day.color+'55' : active ? day.color+'35' : 'rgba(255,255,255,0.06)'}`,
        cursor: locked ? 'default' : 'pointer',
        opacity: locked ? 0.5 : 1,
        transform: hovered && !locked ? 'translateY(-6px)' : 'none',
        boxShadow: hovered && !locked ? `0 16px 40px ${day.color}20` : done ? `0 0 20px ${day.color}15` : 'none',
        transition:'all 0.3s cubic-bezier(0.4,0,0.2,1)',
      }}
    >
      {done && (
        <div style={{ position:'absolute', top:0, right:0, width:0, height:0, borderTop:`50px solid ${day.color}40`, borderLeft:'50px solid transparent' }} />
      )}
      {done && <div style={{ position:'absolute', top:8, right:6, fontSize:14 }}>✓</div>}

      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
        <div style={{ width:36, height:36, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', background: locked ? 'rgba(255,255,255,0.04)' : `${day.color}20`, border:`1px solid ${locked ? 'rgba(255,255,255,0.08)' : day.color+'45'}`, color: locked ? 'rgba(255,255,255,0.2)' : day.color, fontWeight:900, fontSize:15, fontFamily:'var(--font-head)' }}>
          {day.id}
        </div>
        <div>
          <div style={{ color:'rgba(255,255,255,0.35)', fontSize:10, fontWeight:700, letterSpacing:1.5, textTransform:'uppercase' }}>Day {day.id}</div>
          <div style={{ color: locked ? 'rgba(255,255,255,0.25)' : day.color, fontSize:11, fontWeight:700 }}>{day.subtitle}</div>
        </div>
        <div style={{ marginLeft:'auto', fontSize:18 }}>
          {done ? '✅' : active ? '🔓' : '🔒'}
        </div>
      </div>

      <div style={{ color: locked ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.9)', fontWeight:700, fontSize:14, marginBottom:8, lineHeight:1.35 }}>
        {day.title}
      </div>
      <div style={{ color:'rgba(255,255,255,0.35)', fontSize:12, marginBottom:12 }}>🎮 {day.project}</div>

      <div style={{ display:'flex', flexWrap:'wrap', gap:4, marginBottom:14 }}>
        {day.concepts.slice(0,3).map((c, i) => <ConceptTag key={i} label={c} color={day.color} locked={locked} />)}
      </div>

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ color: locked ? 'rgba(255,255,255,0.15)' : '#f59e0b', fontSize:12, fontWeight:800 }}>⚡ +{day.xp} XP</div>
        <div style={{ fontSize:18 }}>{day.badgeIcon}</div>
      </div>
    </div>
  );
}
