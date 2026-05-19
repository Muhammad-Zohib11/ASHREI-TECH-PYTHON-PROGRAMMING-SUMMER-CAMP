import { useState } from 'react';
import { useProgress }  from '../context/ProgressContext.jsx';
import { DAYS_DATA }    from '../data/lessons.js';
import { SETUP_DATA }   from '../data/setup.js';
import CodeSnippet      from '../components/CodeSnippet.jsx';
import RewardPopup      from '../components/RewardPopup.jsx';
import ConceptTag       from '../components/ConceptTag.jsx';
import SetupBlock       from '../components/SetupBlock.jsx';
import MiniGame         from '../components/MiniGame.jsx';
import ChallengeEngine  from '../components/ChallengeEngine.jsx';

// Simulated terminal lines shown in game preview
function GamePreview({ day }) {
  return (
    <div style={{ borderRadius:16, overflow:'hidden', border:`1px solid ${day.color}30`, marginBottom:28 }}>
      {/* Window chrome */}
      <div style={{ background:'rgba(255,255,255,0.04)', padding:'10px 18px', display:'flex', gap:8, alignItems:'center', borderBottom:`1px solid ${day.color}20` }}>
        {['#ff5f57','#febc2e','#28c840'].map((c, i) => <div key={i} style={{ width:12, height:12, borderRadius:'50%', background:c }} />)}
        <span style={{ color:'rgba(255,255,255,0.35)', fontSize:12, marginLeft:8 }}>🐍 {day.project}.py — Running</span>
      </div>
      {/* Body */}
      <div style={{ background:'#060a12', padding:'32px 28px', minHeight:200, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:14 }}>
        <div style={{ fontSize:68, animation:'float 3s ease-in-out infinite' }}>{day.gamePreviewIcon}</div>
        {day.gamePreviewLines?.map((line, i) => (
          <div key={i} style={{ fontFamily:'var(--font-code)', color: i === 0 ? '#10b981' : 'rgba(255,255,255,0.5)', fontSize:13 }}>{line}</div>
        ))}
      </div>
    </div>
  );
}

// Mission header with story
function MissionHeader({ day }) {
  return (
    <div style={{ borderRadius:22, padding:'34px 32px', background:`linear-gradient(135deg, ${day.color}18, rgba(255,255,255,0.02))`, border:`1px solid ${day.color}45`, marginBottom:28, position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:0, right:0, width:200, height:200, background:`radial-gradient(circle at 100% 0%, ${day.color}15 0%, transparent 60%)`, pointerEvents:'none' }} />
      {/* Tags row */}
      <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:18, flexWrap:'wrap' }}>
        <div style={{ background:day.color, color:'#000', borderRadius:10, padding:'6px 18px', fontFamily:'var(--font-head)', fontWeight:900, fontSize:13 }}>DAY {day.id}</div>
        <div style={{ background:`${day.color}18`, color:day.color, borderRadius:99, padding:'5px 16px', fontSize:12, fontWeight:700, border:`1px solid ${day.color}35` }}>{day.subtitle}</div>
        {day.missionTag && (
          <div style={{ background:'rgba(245,158,11,0.12)', color:'#f59e0b', borderRadius:99, padding:'5px 16px', fontSize:11, fontWeight:800, border:'1px solid rgba(245,158,11,0.25)', letterSpacing:1 }}>🎯 {day.missionTag}</div>
        )}
      </div>
      <h1 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(18px,3vw,30px)', color:'#fff', fontWeight:900, marginBottom:16, lineHeight:1.2 }}>{day.title}</h1>
      {/* Story block */}
      <div style={{ background:'rgba(0,0,0,0.3)', borderLeft:`3px solid ${day.color}`, borderRadius:'0 10px 10px 0', padding:'14px 18px', marginBottom:20 }}>
        <div style={{ color:day.color, fontSize:10, fontWeight:800, letterSpacing:2, marginBottom:6 }}>📖 MISSION BRIEFING</div>
        <p style={{ color:'rgba(255,255,255,0.75)', fontSize:14, lineHeight:1.75 }}>{day.story}</p>
      </div>
      {/* Rewards row */}
      <div style={{ display:'flex', gap:20, flexWrap:'wrap' }}>
        <span style={{ color:'#f59e0b', fontWeight:800, fontSize:14 }}>⚡ +{day.xp} XP</span>
        <span style={{ color:'rgba(255,255,255,0.4)', fontSize:14 }}>🎮 {day.project}</span>
        <span style={{ color:'rgba(255,255,255,0.4)', fontSize:14 }}>{day.badgeIcon} {day.badge}</span>
      </div>
      {/* Space Shooter evolution note */}
      {day.spaceFeature && (
        <div style={{ marginTop:16, background:'rgba(0,245,255,0.06)', border:'1px solid rgba(0,245,255,0.15)', borderRadius:10, padding:'10px 16px', display:'flex', gap:10, alignItems:'center' }}>
          <span style={{ fontSize:18 }}>🚀</span>
          <div>
            <div style={{ color:'#00f5ff', fontSize:10, fontWeight:800, letterSpacing:1.5 }}>SPACE SHOOTER UPDATE</div>
            <div style={{ color:'rgba(255,255,255,0.6)', fontSize:12, marginTop:2 }}>{day.spaceFeature}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Concept explainer lookup — module-level so it's created once, never re-created on render ──
const CONCEPT_EXPLAINERS = {
  'print()':              { icon:'🖨️', tip:'Displays text on screen — your game\'s output!' },
  'input()':              { icon:'⌨️', tip:'Reads keyboard input from the player.' },
  'Variables':            { icon:'📦', tip:'Named boxes that store data in memory.' },
  'Comments':             { icon:'📝', tip:'Notes for humans — Python ignores them.' },
  'Strings':              { icon:'💬', tip:'Text data wrapped in "quotes".' },
  'Integers':             { icon:'🔢', tip:'Whole numbers: 1, 42, -10.' },
  'f-strings':            { icon:'🧩', tip:'Embed variables directly inside text.' },
  'Arithmetic operators': { icon:'➕', tip:'+, -, *, /, // — the math toolkit.' },
  'int() / float()':      { icon:'🔄', tip:'Convert strings from input() into numbers.' },
  'Math module':          { icon:'📐', tip:'import math gives you sqrt, ceil, floor and more.' },
  'if / elif / else':     { icon:'🧠', tip:'Choose different paths based on conditions.' },
  'Comparison operators': { icon:'⚖️', tip:'==, !=, >, <, >=, <= — compare values.' },
  'Boolean logic':        { icon:'🔮', tip:'True/False — and, or, not — combine conditions.' },
  'for loops':            { icon:'🔁', tip:'Repeat a block for each item in a range/list.' },
  'while loops':          { icon:'🔄', tip:'Keep repeating while a condition is True.' },
  'range()':              { icon:'📏', tip:'Generates a sequence of numbers.' },
  'break / continue':     { icon:'⚡', tip:'break exits the loop; continue skips to next iteration.' },
  'def keyword':          { icon:'⚙️', tip:'Defines a reusable function.' },
  'Parameters':           { icon:'📥', tip:'Inputs you pass into a function.' },
  'Return values':        { icon:'📤', tip:'The result a function sends back.' },
  'List creation':        { icon:'📋', tip:'[item1, item2, item3] — ordered collection.' },
  'Indexing':             { icon:'🎯', tip:'Access items: list[0] is the first.' },
  'random module':        { icon:'🎲', tip:'import random — generates random numbers.' },
  'randint()':            { icon:'🎯', tip:'Random whole number between two values.' },
  'Default arguments':    { icon:'🔧', tip:'def fn(x=10) — x has a default if not passed.' },
  'append() / remove()':  { icon:'✏️', tip:'append() adds to end; remove() deletes by value.' },
  'Looping through lists':{ icon:'🔁', tip:'for item in my_list: — visits every element.' },
  'choice()':             { icon:'🎰', tip:'random.choice(list) picks one item at random.' },
  'shuffle()':            { icon:'🃏', tip:'random.shuffle(list) randomises the order in place.' },
  'seed()':               { icon:'🌱', tip:'random.seed(n) makes randomness reproducible.' },
  'Pygame setup':         { icon:'🎮', tip:'pygame.init() + display.set_mode() — the game window.' },
  'Physics & gravity':    { icon:'⬇️', tip:'velocity += gravity each frame = realistic falling.' },
  'Collision detection':  { icon:'💥', tip:'rect.colliderect(other) — one line for collisions!' },
  'Score system':         { icon:'🏆', tip:'A variable that increments on events.' },
  'Game loop':            { icon:'🔄', tip:'while running: — every game lives inside this loop.' },
  'Game polish':          { icon:'✨', tip:'Sounds, menus, particles — the final 10% that feels like 90%.' },
  'Sound effects':        { icon:'🔊', tip:'pygame.mixer.Sound().play() — audio in one line.' },
  'Menus':                { icon:'📋', tip:'A separate loop that waits for input before starting.' },
  'Presentation skills':  { icon:'🎤', tip:'Explain what your code does — as important as writing it.' },
  'Portfolio':            { icon:'💼', tip:'Games you built = proof of your skills.' },
  'Nested conditions':    { icon:'🌲', tip:'if inside an if — for complex multi-condition logic.' },
  'Order of operations':  { icon:'📐', tip:'PEMDAS: Parentheses, Exponents, *, /, +, - in that order.' },
};

// Concept power-ups grid
function ConceptCards({ day }) {

  return (
    <div style={{ marginBottom:28 }}>
      <div style={{ color:'#fff', fontWeight:800, fontSize:18, marginBottom:14 }}>🧠 Today's Power-Ups</div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:12 }}>
        {day.concepts.map((c, i) => {
          const ex = CONCEPT_EXPLAINERS[c] || { icon:'⚡', tip:'A core Python concept.' };
          return (
            <div key={i} style={{ background:`${day.color}10`, border:`1px solid ${day.color}30`, borderRadius:12, padding:'14px 16px', transition:'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background=`${day.color}1e`; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background=`${day.color}10`; e.currentTarget.style.transform='none'; }}
            >
              <div style={{ fontSize:24, marginBottom:8 }}>{ex.icon}</div>
              <div style={{ color:day.color, fontWeight:700, fontSize:13, marginBottom:4 }}>{c}</div>
              <div style={{ color:'rgba(255,255,255,0.45)', fontSize:12, lineHeight:1.5 }}>{ex.tip}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Challenge section
function ChallengeBlock({ day, done, onComplete }) {
  return (
    <div style={{ borderRadius:18, padding:28, background:'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(255,107,53,0.06))', border:'1px solid rgba(245,158,11,0.28)', marginBottom:32 }}>
      <div style={{ color:'#f59e0b', fontSize:11, fontWeight:800, letterSpacing:2, marginBottom:12 }}>⚡ MINI CHALLENGE</div>
      <p style={{ color:'rgba(255,255,255,0.85)', fontSize:16, lineHeight:1.7, marginBottom:22 }}>{day.challenge}</p>
      {!done ? (
        <button onClick={onComplete} style={{ padding:'13px 32px', borderRadius:10, border:'none', cursor:'pointer', background:'linear-gradient(135deg, #f59e0b, #ff6b35)', color:'#000', fontWeight:900, fontSize:14, fontFamily:'inherit', boxShadow:'0 0 20px rgba(245,158,11,0.3)', display:'flex', alignItems:'center', gap:8 }}>
          <span>✓</span> Mark Challenge Complete — Claim {day.xp} XP + {day.badgeIcon} Badge!
        </button>
      ) : (
        <div style={{ color:'#10b981', fontWeight:800, fontSize:16, display:'flex', alignItems:'center', gap:10 }}>
          <span style={{ fontSize:28 }}>✅</span>
          <div>
            <div>Challenge Complete! Incredible work!</div>
            <div style={{ color:'rgba(255,255,255,0.4)', fontSize:13, marginTop:2 }}>XP and badge have been added to your profile.</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Main DayLesson page ──
export default function DayLesson({ day, setView, setSelectedDay }) {
  const { state, dispatch } = useProgress();
  const challengeDone = state.completedChallenges.includes(day.id);

  const [popup, setPopup] = useState(null); // 'xp' | 'badge' | null

  const prevDay = day.id > 1  ? DAYS_DATA[day.id - 2] : null;
  const nextDay = day.id < 12 ? DAYS_DATA[day.id]     : null;

  const handleComplete = () => {
    if (challengeDone) return;
    dispatch({ type:'COMPLETE_CHALLENGE', payload:{ dayId: day.id, xpReward: day.xp, badgeName: day.badge } });
    setPopup('xp');
  };

  const handlePopupClose = () => {
    if (popup === 'xp') { setPopup('badge'); return; }
    setPopup(null);
    if (nextDay) setSelectedDay(nextDay);
  };
  const nextUnlocked = nextDay && state.unlockedDays.includes(nextDay.id);

  return (
    <div style={{ maxWidth:900, margin:'0 auto', padding:'40px 24px', position:'relative', zIndex:1 }} className="page-enter day-lesson-wrap">

      {/* Back button */}
      <button onClick={() => { setView('lessons'); setSelectedDay(null); }} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:'8px 18px', color:'rgba(255,255,255,0.55)', cursor:'pointer', fontSize:13, marginBottom:32, fontFamily:'inherit' }}>
        ← Back to Mission Map
      </button>

      {/* Mission header + story */}
      <MissionHeader day={day} />

      {/* Setup for Today */}
      <SetupBlock setup={SETUP_DATA[day.id]} dayColor={day.color} />

      {/* Concept power-up cards */}
      <ConceptCards day={day} />

      {/* Code missions */}
      {day.snippets.length > 0 && (
        <div style={{ marginBottom:28 }}>
          <div style={{ color:'#fff', fontWeight:800, fontSize:18, marginBottom:8 }}>💻 Code Missions</div>
          <div style={{ color:'rgba(255,255,255,0.35)', fontSize:13, marginBottom:16 }}>Study each snippet. Try the challenges. Modify the code and experiment!</div>
          {day.snippets.map((s, i) => <CodeSnippet key={i} snippet={s} dayColor={day.color} />)}
        </div>
      )}

      {/* Empty snippets placeholder */}
      {day.snippets.length === 0 && (
        <div style={{ borderRadius:16, padding:28, background:'rgba(255,255,255,0.02)', border:'1px solid rgba(255,255,255,0.06)', marginBottom:28, textAlign:'center' }}>
          <div style={{ fontSize:40, marginBottom:12 }}>📝</div>
          <div style={{ color:'rgba(255,255,255,0.6)', fontSize:15 }}>Code snippets for this day will be revealed in class!</div>
          <div style={{ color:'rgba(255,255,255,0.35)', fontSize:13, marginTop:6 }}>Your instructor will walk through each snippet live.</div>
        </div>
      )}

      {/* Interactive Code Challenge Engine */}
      <ChallengeEngine day={day} dayColor={day.color} setView={setView} setSelectedDay={setSelectedDay} />

      {/* Legacy: passive challenge block shown only when no challenge data */}

      {/* Day navigation */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
        {prevDay ? (
          <button onClick={() => setSelectedDay(prevDay)} style={{ padding:'12px 24px', borderRadius:10, border:'1px solid rgba(255,255,255,0.12)', background:'transparent', color:'rgba(255,255,255,0.6)', cursor:'pointer', fontSize:14, fontFamily:'inherit' }}>
            ← Day {prevDay.id}
          </button>
        ) : <div />}

        {nextDay && nextUnlocked ? (
          <button onClick={() => setSelectedDay(nextDay)} style={{ padding:'12px 28px', borderRadius:10, border:'none', background:`linear-gradient(135deg, ${day.color}, ${nextDay.color})`, color:'#000', cursor:'pointer', fontSize:14, fontWeight:800, fontFamily:'inherit' }}>
            Day {nextDay.id}: {nextDay.subtitle} →
          </button>
        ) : nextDay && !nextUnlocked ? (
          <div style={{ color:'rgba(255,255,255,0.3)', fontSize:13, display:'flex', alignItems:'center', gap:6 }}>
            🔒 Complete this challenge to unlock Day {nextDay.id}
          </div>
        ) : <div />}
      </div>

      {/* Reward popups */}
      {popup && <RewardPopup type={popup} day={day} nextDay={nextDay} onClose={handlePopupClose} />}
    </div>
  );
}
