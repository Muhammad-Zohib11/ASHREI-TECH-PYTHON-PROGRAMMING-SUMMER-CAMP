import { useState }              from 'react';
import { useProgress }         from '../context/ProgressContext.jsx';
import { getRankInfo }          from '../utils/rank.js';
import { DAYS_DATA }            from '../data/lessons.js';
import { BADGES_ALL }           from '../data/badges.js';
import XPBar                    from '../components/XPBar.jsx';
import DayCard                  from '../components/DayCard.jsx';
import GlowBadge                from '../components/GlowBadge.jsx';
import SpaceShooterTracker      from '../components/SpaceShooterTracker.jsx';

export default function Dashboard({ setView, setSelectedDay }) {
  const { state, dispatch } = useProgress();
  const { current } = getRankInfo(state.xp);
  const completedCount = state.completedDays.length;
  const currentDay = DAYS_DATA.find(d => state.unlockedDays.includes(d.id) && !state.completedDays.includes(d.id));
  const [confirmReset, setConfirmReset] = useState(false);

  const BATCH_LABELS = { morning:'Morning Batch 🌅', evening:'Evening Batch 🌆', weekend:'Weekend Warriors ⚔️', ninjas:'Python Ninjas 🥷' };
  const batchLabel = BATCH_LABELS[state.batch] || 'ASHRI Tech Academy';

  return (
    <div style={{ maxWidth:1200, margin:'0 auto', padding:'40px 24px', position:'relative', zIndex:1 }} className="page-enter">
      <div style={{ marginBottom:36 }}>
        <div style={{ color:'rgba(255,255,255,0.35)', fontSize:13, marginBottom:4 }}>Welcome back, {state.studentName} 👋</div>
        <h1 style={{ fontFamily:'var(--font-head)', fontSize:30, color:'#fff', fontWeight:900 }}>Player Profile</h1>
      </div>

      {/* Profile + Stats Grid */}
      <div className="dashboard-grid" style={{ display:'grid', gridTemplateColumns:'300px 1fr', gap:22, marginBottom:28 }}>

        {/* Profile Card */}
        <div style={{ borderRadius:22, padding:'32px 24px', background:`linear-gradient(160deg, ${current.color}18, rgba(255,255,255,0.02))`, border:`1px solid ${current.color}35`, textAlign:'center' }}>
          {/* Avatar */}
          <div style={{ width:84, height:84, borderRadius:'50%', margin:'0 auto 16px', background:`rgba(255,255,255,0.05)`, border:`2px solid ${current.color}60`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:42, boxShadow:`0 0 35px ${current.color}40` }}>
            {state.avatarEmoji || '🚀'}
          </div>
          <div style={{ color:'#fff', fontWeight:800, fontSize:22, marginBottom:2 }}>{state.studentName}</div>
          {state.gamerTag && (
            <div style={{ color:'#00f5ff', fontSize:13, marginBottom:4, fontFamily:'var(--font-code)' }}>@{state.gamerTag}</div>
          )}
          <div style={{ color:current.color, fontWeight:800, fontSize:14, marginBottom:4 }}>{current.icon} {current.name}</div>
          <div style={{ color:'rgba(255,255,255,0.3)', fontSize:11, marginBottom:20, background:'rgba(255,255,255,0.04)', borderRadius:99, padding:'3px 12px', display:'inline-block' }}>{batchLabel}</div>
          <XPBar showDetails />
          <div style={{ display:'flex', justifyContent:'center', gap:28, marginTop:24 }}>
            <div style={{ textAlign:'center' }}>
              <div style={{ color:'#f59e0b', fontWeight:900, fontSize:26 }}>🔥{state.streak}</div>
              <div style={{ color:'rgba(255,255,255,0.35)', fontSize:11 }}>Day Streak</div>
            </div>
            <div style={{ width:1, background:'rgba(255,255,255,0.08)' }} />
            <div style={{ textAlign:'center' }}>
              <div style={{ color:'#00f5ff', fontWeight:900, fontSize:26 }}>🏅{state.earnedBadges.length}</div>
              <div style={{ color:'rgba(255,255,255,0.35)', fontSize:11 }}>Badges</div>
            </div>
          </div>
          {/* Reset button — inline confirm to avoid browser confirm() dialog */}
          {!confirmReset ? (
            <button
              onClick={() => setConfirmReset(true)}
              style={{ marginTop:20, background:'transparent', border:'1px solid rgba(255,255,255,0.08)', borderRadius:8, padding:'5px 14px', color:'rgba(255,255,255,0.2)', cursor:'pointer', fontSize:11, fontFamily:'inherit' }}
            >⟳ Reset Profile</button>
          ) : (
            <div style={{ marginTop:20, display:'flex', flexDirection:'column', gap:8, alignItems:'center' }}>
              <div style={{ color:'rgba(255,255,255,0.45)', fontSize:12 }}>Reset all progress? This cannot be undone.</div>
              <div style={{ display:'flex', gap:8 }}>
                <button
                  onClick={() => { dispatch({ type:'RESET' }); setConfirmReset(false); }}
                  style={{ background:'rgba(239,68,68,0.18)', border:'1px solid rgba(239,68,68,0.4)', borderRadius:8, padding:'5px 14px', color:'#ef4444', cursor:'pointer', fontSize:12, fontFamily:'inherit', fontWeight:700 }}
                >Yes, Reset</button>
                <button
                  onClick={() => setConfirmReset(false)}
                  style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'5px 14px', color:'rgba(255,255,255,0.5)', cursor:'pointer', fontSize:12, fontFamily:'inherit' }}
                >Cancel</button>
              </div>
            </div>
          )}
        </div>

        {/* Stat cards */}
        <div className="dashboard-stats" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr', gap:16 }}>
          {[
            { label:'Total XP Earned',   value: state.xp,                   suffix:' XP', icon:'⚡', color:'#00f5ff' },
            { label:'Days Completed',     value: completedCount,              suffix:'/10',  icon:'📅', color:'#10b981' },
            { label:'Current Rank',       value: current.name,                suffix:'',    icon:current.icon, color:current.color, small:true },
            { label:'Badges Collected',   value: state.earnedBadges.length,   suffix:'/10',  icon:'🏅', color:'#f59e0b' },
          ].map((s, i) => (
            <div key={i} style={{ borderRadius:18, padding:'24px 22px', background:`${s.color}0e`, border:`1px solid ${s.color}22` }}>
              <div style={{ fontSize:28, marginBottom:10 }}>{s.icon}</div>
              <div style={{ color:s.color, fontSize: s.small ? 18 : 30, fontWeight:900, fontFamily: s.small ? 'inherit' : 'var(--font-head)' }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ color:'rgba(255,255,255,0.35)', fontSize:13, marginTop:4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Mission */}
      {currentDay && (
        <div style={{ borderRadius:20, padding:'26px 30px', background:`linear-gradient(135deg, ${currentDay.color}15, rgba(255,255,255,0.02))`, border:`1px solid ${currentDay.color}45`, marginBottom:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
          <div>
            <div style={{ color:currentDay.color, fontSize:11, fontWeight:800, letterSpacing:2, marginBottom:8 }}>🎯 ACTIVE MISSION</div>
            <div style={{ color:'#fff', fontWeight:900, fontSize:22, marginBottom:6 }}>Day {currentDay.id}: {currentDay.title}</div>
            <div style={{ color:'rgba(255,255,255,0.45)', fontSize:13, display:'flex', gap:16, flexWrap:'wrap' }}>
              <span>🎮 {currentDay.project}</span>
              <span>⚡ +{currentDay.xp} XP</span>
              <span>{currentDay.badgeIcon} {currentDay.badge}</span>
            </div>
          </div>
          <button onClick={() => { setSelectedDay(currentDay); setView('day'); }} style={{ padding:'14px 32px', borderRadius:12, border:'none', cursor:'pointer', background:`linear-gradient(135deg, ${currentDay.color}, ${currentDay.color}99)`, color:'#000', fontWeight:900, fontSize:15, fontFamily:'inherit', whiteSpace:'nowrap' }}>
            Continue Mission →
          </button>
        </div>
      )}

      {/* Space Shooter Tracker */}
      <SpaceShooterTracker />

      {/* Badge preview */}
      <div style={{ marginBottom:24 }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18 }}>
          <div style={{ color:'#fff', fontWeight:800, fontSize:18 }}>🏅 Badge Collection</div>
          <button onClick={() => setView('badges')} style={{ background:'transparent', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'6px 16px', color:'rgba(255,255,255,0.5)', cursor:'pointer', fontSize:13, fontFamily:'inherit' }}>View All →</button>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))', gap:12 }}>
          {BADGES_ALL.slice(0,5).map((b, i) => <GlowBadge key={i} badge={b} size="small" />)}
        </div>
      </div>

      {/* Quick lesson access */}
      <div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:18 }}>
          <div style={{ color:'#fff', fontWeight:800, fontSize:18 }}>📚 Lesson Progress</div>
          <button onClick={() => setView('lessons')} style={{ background:'transparent', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'6px 16px', color:'rgba(255,255,255,0.5)', cursor:'pointer', fontSize:13, fontFamily:'inherit' }}>Full Map →</button>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))', gap:16 }}>
          {DAYS_DATA.slice(0,3).map(day => (
            <DayCard key={day.id} day={day} onClick={d => { setSelectedDay(d); setView('day'); }} />
          ))}
        </div>
      </div>
    </div>
  );
}
