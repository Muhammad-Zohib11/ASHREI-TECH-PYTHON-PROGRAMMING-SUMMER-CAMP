import SectionLabel from '../components/SectionLabel.jsx';
import HeroSplineBackground from '../components/HeroSplineBackground.jsx';
import { GAMES_SHOWCASE } from '../data/showcase.js';
import { RANKS } from '../data/ranks.js';
import { DAYS_DATA } from '../data/lessons.js';
import { useProgress } from '../context/ProgressContext.jsx';

const FLOATERS = [
  { e:'🚀', x:'7%',  y:'14%', d:'0s',   s:'38px' },
  { e:'⭐', x:'87%', y:'18%', d:'0.6s', s:'30px' },
  { e:'💰', x:'4%',  y:'62%', d:'1.1s', s:'34px' },
  { e:'🐍', x:'91%', y:'55%', d:'1.7s', s:'36px' },
  { e:'🎮', x:'14%', y:'78%', d:'0.8s', s:'32px' },
  { e:'⚡', x:'80%', y:'72%', d:'1.4s', s:'28px' },
  { e:'☄️', x:'48%', y:'4%',  d:'0.3s', s:'26px' },
  { e:'🏆', x:'73%', y:'88%', d:'2s',   s:'30px' },
];

export default function LandingPage({ setView, setSelectedDay }) {
  const { state } = useProgress();
  const completedCount = state.completedDays.length;
  const pct = Math.round((completedCount / 12) * 100);
  return (
    <div style={{ position:'relative', zIndex:1 }} className="page-enter">

      {/* ── HERO ── */}
      <section className="hero-section" style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'80px 24px', textAlign:'center', position:'relative', overflow:'hidden' }}>

        {/* 3D Spline background — sits behind all content */}
        <HeroSplineBackground />

        {/* All hero content — sits above Spline via natural stacking */}
        <div style={{ position:'relative', zIndex:1, width:'100%', display:'flex', flexDirection:'column', alignItems:'center' }}>

        {FLOATERS.map((f, i) => (
          <div key={i} className="floater-item" style={{ position:'absolute', left:f.x, top:f.y, fontSize:f.s, animation:`float 4s ease-in-out ${f.d} infinite`, pointerEvents:'none', userSelect:'none', opacity:0.65 }}>{f.e}</div>
        ))}

        {/* Live badge */}
        <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(0,245,255,0.08)', border:'1px solid rgba(0,245,255,0.25)', borderRadius:99, padding:'7px 22px', marginBottom:28 }}>
          <span style={{ width:8, height:8, borderRadius:'50%', background:'#00f5ff', display:'inline-block', boxShadow:'0 0 10px #00f5ff', animation:'blink 1.5s ease-in-out infinite' }} />
          <span style={{ color:'#00f5ff', fontSize:12, fontWeight:800, letterSpacing:2, textTransform:'uppercase' }}>ASHRI Tech · Summer Camp 2025</span>
        </div>

        <h1 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(34px,6vw,74px)', fontWeight:900, lineHeight:1.08, marginBottom:24, color:'#fff', maxWidth:900 }}>
          Build Games with{' '}
          <span style={{ background:'linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>Python</span>
          {' '}in{' '}
          <span style={{ color:'#f59e0b', textShadow:'0 0 30px rgba(245,158,11,0.5)' }}>12 Days</span>
        </h1>

        <p style={{ fontSize:'clamp(16px,2vw,20px)', color:'rgba(255,255,255,0.6)', maxWidth:580, lineHeight:1.65, marginBottom:44 }}>
          Learn Python through Space Shooters, Flappy Bird, and Mini Arcade Games. Level up every day. Earn badges. Ship real games from scratch.
        </p>

        <div style={{ display:'flex', gap:16, flexWrap:'wrap', justifyContent:'center' }}>
          <button onClick={() => setView('lessons')} style={{ padding:'16px 44px', borderRadius:12, border:'none', cursor:'pointer', background:'linear-gradient(135deg, #00f5ff, #7c3aed)', color:'#000', fontWeight:900, fontSize:16, fontFamily:'inherit', boxShadow:'0 0 40px rgba(0,245,255,0.35)', animation:'heroglowbtn 2s ease-in-out infinite', letterSpacing:0.5 }}>
            🚀 Start Journey
          </button>
          <button onClick={() => setView('lessons')} style={{ padding:'16px 44px', borderRadius:12, cursor:'pointer', background:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.85)', fontWeight:700, fontSize:16, fontFamily:'inherit', border:'1px solid rgba(255,255,255,0.18)', letterSpacing:0.5 }}>
            📚 View Curriculum
          </button>
        </div>

        {/* Stats */}
        <div className="hero-stats" style={{ display:'flex', gap:48, marginTop:64, flexWrap:'wrap', justifyContent:'center' }}>
          {[{ v:'12', l:'Days' }, { v:'6+', l:'Games Built' }, { v:'30+', l:'Skills' }, { v:'12', l:'Badges' }].map((s, i) => (
            <div key={i} style={{ textAlign:'center' }}>
              <div className="hero-stat-value" style={{ fontFamily:'var(--font-head)', fontSize:36, fontWeight:900, color:'#00f5ff', textShadow:'0 0 20px rgba(0,245,255,0.4)' }}>{s.v}</div>
              <div style={{ color:'rgba(255,255,255,0.4)', fontSize:13, marginTop:4, fontWeight:600 }}>{s.l}</div>
            </div>
          ))}
        </div>

        </div>{/* end z-index:1 content wrapper */}
      </section>

      {/* ── GAME SHOWCASE ── */}
      <section className="landing-section" style={{ padding:'80px 24px', maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <SectionLabel color="#00f5ff">WHAT YOU'LL BUILD</SectionLabel>
          <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(26px,4vw,42px)', color:'#fff', fontWeight:800 }}>5 Complete Games</h2>
          <p style={{ color:'rgba(255,255,255,0.45)', marginTop:10, fontSize:15 }}>Every game ships in a single day. No fluff. Real code.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(190px,1fr))', gap:20 }}>
          {GAMES_SHOWCASE.map((g, i) => (
            <div key={i}
              style={{ borderRadius:18, padding:'30px 20px', textAlign:'center', background:`radial-gradient(ellipse at 50% 0%, ${g.color}22, rgba(255,255,255,0.02))`, border:`1px solid ${g.color}30`, transition:'all 0.3s', cursor:'default' }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-10px)'; e.currentTarget.style.boxShadow=`0 24px 50px ${g.color}25`; }}
              onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}
            >
              <div style={{ fontSize:52, marginBottom:16, animation:'float 4s ease-in-out infinite' }}>{g.icon}</div>
              <div style={{ color:'#fff', fontWeight:800, fontSize:16, marginBottom:8 }}>{g.title}</div>
              <div style={{ color:'rgba(255,255,255,0.45)', fontSize:13, lineHeight:1.5, marginBottom:14 }}>{g.desc}</div>
              <div style={{ color:g.color, fontSize:11, fontWeight:800, letterSpacing:1, background:`${g.color}15`, border:`1px solid ${g.color}30`, borderRadius:99, display:'inline-block', padding:'4px 14px' }}>DAY {g.day}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12-DAY ROADMAP ── */}
      <section className="landing-section" style={{ padding:'80px 24px', maxWidth:900, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <SectionLabel color="#8b5cf6">THE JOURNEY</SectionLabel>
          <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(26px,4vw,42px)', color:'#fff', fontWeight:800 }}>12-Day Roadmap</h2>
        </div>
        {/* Live progress bar */}
        {completedCount > 0 && (
          <div style={{ textAlign:'center', marginBottom:32 }}>
            <div style={{ color:'rgba(255,255,255,0.35)', fontSize:12, marginBottom:10 }}>YOUR PROGRESS</div>
            <div className="progress-bar-container" style={{ width:'100%', maxWidth:320, height:8, background:'rgba(255,255,255,0.07)', borderRadius:99, overflow:'hidden', margin:'0 auto 8px' }}>
              <div style={{ height:'100%', width:`${pct}%`, background:'linear-gradient(90deg, #00f5ff, #8b5cf6, #ff6b35)', borderRadius:99, boxShadow:'0 0 12px rgba(0,245,255,0.4)', transition:'width 1.2s' }} />
            </div>
            <div style={{ color:'#00f5ff', fontWeight:800, fontSize:14 }}>{completedCount}/12 Days Complete · {pct}%</div>
          </div>
        )}
        <div style={{ position:'relative' }}>
          <div className="roadmap-line" style={{ position:'absolute', left:'50%', top:20, bottom:20, width:2, background:'linear-gradient(to bottom, #00f5ff, #7c3aed, #ff6b35)', transform:'translateX(-50%)', opacity:0.25 }} />
          {DAYS_DATA.map((day, i) => {
            const done    = state.completedDays.includes(day.id);
            const active  = state.unlockedDays.includes(day.id) && !done;
            return (
            <div key={day.id} className="roadmap-row" style={{ display:'flex', alignItems:'flex-start', gap:20, marginBottom:20, flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
              <div className="roadmap-content" style={{ flex:1, display:'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                <div className="roadmap-card" style={{ borderRadius:12, padding:'14px 20px', maxWidth:320,
                  background: done ? `${day.color}15` : active ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                  border:`1px solid ${done ? day.color+'55' : active ? day.color+'30' : 'rgba(255,255,255,0.07)'}`,
                  textAlign: i % 2 === 0 ? 'right' : 'left',
                  boxShadow: done ? `0 0 16px ${day.color}20` : 'none',
                  transition:'all 0.4s',
                }}>
                  <div style={{ color: done ? day.color : active ? day.color+'cc' : 'rgba(255,255,255,0.35)', fontWeight:700, fontSize:12, marginBottom:4 }}>Day {day.id} · {day.subtitle}</div>
                  <div style={{ color: done || active ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.45)', fontSize:13, fontWeight:600, marginBottom:4 }}>{day.title}</div>
                  <div style={{ color:'rgba(255,255,255,0.35)', fontSize:12 }}>🎮 {day.project}</div>
                  {done && <div style={{ color:day.color, fontSize:11, fontWeight:800, marginTop:6 }}>✓ COMPLETE · +{day.xp} XP</div>}
                  {active && <div style={{ color:'#f59e0b', fontSize:11, fontWeight:800, marginTop:6, animation:'blink 1.5s ease-in-out infinite' }}>🎯 IN PROGRESS</div>}
                </div>
              </div>
              {/* Node */}
              <div style={{ width:36, height:36, borderRadius:'50%', flexShrink:0, zIndex:1,
                background: done ? day.color : active ? `${day.color}30` : 'rgba(255,255,255,0.06)',
                border:`2px solid ${done ? day.color : active ? day.color : 'rgba(255,255,255,0.15)'}`,
                display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow: done ? `0 0 20px ${day.color}70` : active ? `0 0 12px ${day.color}40` : 'none',
                color: done ? '#000' : active ? day.color : 'rgba(255,255,255,0.4)',
                fontSize:14, fontWeight:900,
                animation: active ? 'badgepulse 2s ease-in-out infinite' : 'none',
                transition:'all 0.4s',
              }}>
                {done ? '✓' : active ? '▶' : day.id}
              </div>
              <div className="roadmap-filler" style={{ flex:1 }} />
            </div>
          );})}
        </div>
      </section>

      {/* ── WHY GAMES ── */}
      <section className="landing-section" style={{ padding:'80px 24px', maxWidth:1200, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <SectionLabel color="#10b981">THE SCIENCE</SectionLabel>
          <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(26px,4vw,42px)', color:'#fff', fontWeight:800 }}>Why Learn Through Games?</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:22 }}>
          {[
            { icon:'🎯', title:'Instant Feedback',  desc:"See your code come alive on screen immediately. Bugs become puzzles, not problems.", color:'#00f5ff' },
            { icon:'🧠', title:'Deeper Retention',  desc:"When you build something you are proud of, the concepts stick 3× longer.",            color:'#8b5cf6' },
            { icon:'🚀', title:'Real Deliverables', desc:"Every single day you ship a complete mini-game. Your portfolio grows daily.",           color:'#ff6b35' },
            { icon:'🏆', title:'Gamified Progress', desc:"Earn XP, unlock badges, level up your rank. Learning feels like winning.",              color:'#f59e0b' },
          ].map((item, i) => (
            <div key={i} style={{ borderRadius:18, padding:28, background:'rgba(255,255,255,0.025)', border:'1px solid rgba(255,255,255,0.07)', transition:'all 0.3s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor=item.color+'45'; e.currentTarget.style.background=`${item.color}08`; e.currentTarget.style.transform='translateY(-4px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.07)'; e.currentTarget.style.background='rgba(255,255,255,0.025)'; e.currentTarget.style.transform='none'; }}
            >
              <div style={{ fontSize:40, marginBottom:16 }}>{item.icon}</div>
              <div style={{ color:'#fff', fontWeight:800, fontSize:16, marginBottom:10 }}>{item.title}</div>
              <div style={{ color:'rgba(255,255,255,0.5)', fontSize:14, lineHeight:1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RANK LADDER ── */}
      <section className="landing-section" style={{ padding:'80px 24px', maxWidth:900, margin:'0 auto' }}>
        <div style={{ textAlign:'center', marginBottom:52 }}>
          <SectionLabel color="#f59e0b">YOUR DESTINY</SectionLabel>
          <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(26px,4vw,42px)', color:'#fff', fontWeight:800 }}>Rank Up Your Skills</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:16 }}>
          {RANKS.map((rank, i) => (
            <div key={i} style={{ borderRadius:14, padding:'20px 14px', textAlign:'center', background:`${rank.color}10`, border:`1px solid ${rank.color}30`, opacity: i <= 2 ? 1 : 0.6 }}>
              <div style={{ fontSize:32, marginBottom:10 }}>{rank.icon}</div>
              <div style={{ color:rank.color, fontWeight:800, fontSize:12, marginBottom:4 }}>{rank.name}</div>
              <div style={{ color:'rgba(255,255,255,0.3)', fontSize:11 }}>{rank.minXP}+ XP</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="landing-section-lg" style={{ padding:'80px 24px 100px', textAlign:'center' }}>
        <div className="final-cta-card" style={{ maxWidth:680, margin:'0 auto', padding:'64px 40px', borderRadius:28, background:'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(124,58,237,0.1))', border:'1px solid rgba(0,245,255,0.2)', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 50% 0%, rgba(0,245,255,0.1) 0%, transparent 60%)', pointerEvents:'none' }} />
          <div style={{ fontSize:56, marginBottom:20, animation:'float 3s ease-in-out infinite' }}>🏆</div>
          <h2 style={{ fontFamily:'var(--font-head)', fontSize:30, color:'#fff', fontWeight:900, marginBottom:14, position:'relative' }}>Ready to Become a Python Legend?</h2>
          <p style={{ color:'rgba(255,255,255,0.55)', marginBottom:36, fontSize:16, lineHeight:1.6, position:'relative' }}>Join the 12-day adventure. Build games you'll be proud to show.</p>
          <button onClick={() => setView('lessons')} style={{ padding:'18px 56px', borderRadius:14, border:'none', cursor:'pointer', background:'linear-gradient(135deg, #00f5ff, #7c3aed)', color:'#000', fontWeight:900, fontSize:18, fontFamily:'inherit', boxShadow:'0 0 50px rgba(0,245,255,0.4)', position:'relative' }}>
            🚀 Begin Your Quest
          </button>
        </div>
      </section>
    </div>
  );
}
