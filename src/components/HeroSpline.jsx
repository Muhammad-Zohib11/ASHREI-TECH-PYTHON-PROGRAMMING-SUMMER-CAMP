import { useState, useEffect } from 'react';

const VIEWER_URL  = 'https://my.spline.design/cybermannequin-TkpEookEZulTAId4uezLepvv/';
const APP_URL     = '/app.html';
const STORAGE_KEY = 'ashri-progress-v1';

const AVATARS = [
  { emoji:'\uD83E\uDD16', label:'Cyber Bot'      },
  { emoji:'\uD83D\uDE80', label:'Rocket Captain' },
  { emoji:'\uD83E\uDD77', label:'Code Ninja'     },
  { emoji:'\u26A1',       label:'Neon Runner'    },
  { emoji:'\uD83E\uDDD9', label:'Pixel Wizard'   },
  { emoji:'\uD83D\uDC7E', label:'Game Hacker'    },
];

const FEATURES = [
  { icon:'\uD83C\uDFAE', text:'Build Real Games'          },
  { icon:'\uD83C\uDFC6', text:'Earn XP & Badges'         },
  { icon:'\uD83D\uDE80', text:'Unlock Missions'           },
  { icon:'\uD83D\uDC0D', text:'Learn Python Through Play' },
];

const INIT_MSGS = [
  'Initializing Academy Systems...',
  'Loading Missions...',
  'Spawning Training Bots...',
  'Activating XP Engine...',
  'Unlocking Day 1...',
];

function SplineLoader() {
  return (
    <div style={s.loaderWrap}>
      <div style={s.spinRing} />
      <p style={s.loaderText}>Loading scene...</p>
    </div>
  );
}

function HeroHeader({ mx, my }) {
  const sh = (f) => 'translate(' + (mx * f) + 'px,' + (my * f * 0.45) + 'px)';
  return (
    <div style={s.heroWrap}>
      <div style={{ ...s.heroLayer, filter:'blur(14px)', opacity:0.18, transform:sh(-22) }}>
        <div style={s.heroBig}>PYTHON</div>
        <div style={s.heroMed}>PROGRAMMING</div>
      </div>
      <div style={{ ...s.heroLayer, filter:'blur(3px)', opacity:0.38, transform:sh(-9) }}>
        <div style={s.heroBig}>PYTHON</div>
        <div style={s.heroMed}>PROGRAMMING</div>
      </div>
      <div style={{ ...s.heroLayer, transform:sh(-1) }}>
        <div style={s.heroBig}>PYTHON</div>
        <div style={s.heroMed}>PROGRAMMING</div>
      </div>
      <div style={{ ...s.heroName, transform:sh(4) }}>
        <span style={s.heroDash}>——</span>
        <span style={s.heroNameText}>MUHAMMAD ZOHIB</span>
        <span style={s.heroDash}>——</span>
      </div>
    </div>
  );
}

/* STAGE 0 — Welcome */
function Stage0({ onStart }) {
  const [vis, setVis] = useState(false);
  const [hovCta, setHovCta] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'0.65rem' }}>
      <div style={s.welcomeRocket}>{'\uD83D\uDE80'}</div>
      <div style={s.welcomeTitle}>
        WELCOME TO<br />
        <span style={s.welcomeAcademy}>ASHREI TECH</span><br />
        <span style={s.welcomeSubtitle}>ACADEMY</span>
      </div>
      <p style={s.welcomeTagline}>
        Build Games. Unlock Badges.<br />Become a Python Hero.
      </p>
      <div style={s.featureList}>
        {FEATURES.map((f, i) => (
          <div key={i} style={{
            ...s.featureItem,
            opacity: vis ? 1 : 0,
            transform: vis ? 'translateX(0)' : 'translateX(-14px)',
            transition: 'opacity 0.4s ease ' + (0.1 + i * 0.11) + 's, transform 0.4s ease ' + (0.1 + i * 0.11) + 's',
          }}>
            <span style={s.featureIcon}>{f.icon}</span>
            <span style={s.featureText}>{f.text}</span>
          </div>
        ))}
      </div>
      <button
        onClick={onStart}
        onMouseEnter={() => setHovCta(true)} onMouseLeave={() => setHovCta(false)}
        style={{
          ...s.ctaBtn,
          background: hovCta ? '#FF6B00' : 'rgba(255,107,0,0.12)',
          color: hovCta ? '#000' : '#FF6B00',
          boxShadow: hovCta ? '0 0 30px #FF6B0088' : '0 0 0 1px rgba(255,107,0,0.35)',
          transform: hovCta ? 'scale(1.03)' : 'scale(1)',
        }}
      >
        {'\u26A1'} START YOUR JOURNEY
      </button>
    </div>
  );
}

/* STAGE 1 — Create Profile */
function Stage1({ name, setName, tag, setTag, avatar, setAvatar, onNext, onBack }) {
  const [focusName, setFocusName] = useState(false);
  const [focusTag,  setFocusTag]  = useState(false);
  const canNext = name.trim().length > 0 && avatar !== null;
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'0.7rem' }}>
      <button onClick={onBack} style={s.backBtn}>{'\u2190'} back</button>
      <div style={s.stageHeader}>
        <span style={s.stageBadge}>STAGE 1 OF 3</span>
        <div style={s.stageHeadTitle}>CREATE YOUR<br /><em style={s.accent}>PLAYER PROFILE</em></div>
      </div>
      <input
        type="text" value={name} onChange={e => setName(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && name.trim() && onNext()}
        placeholder="Your Name *" maxLength={24} autoFocus
        onFocus={() => setFocusName(true)} onBlur={() => setFocusName(false)}
        style={{ ...s.inp, borderColor: focusName ? '#FF6B00' : 'rgba(255,107,0,0.2)', boxShadow: focusName ? '0 0 0 2px rgba(255,107,0,0.12)' : 'none' }}
      />
      <input
        type="text" value={tag} onChange={e => setTag(e.target.value)}
        placeholder="Gamer Tag / Nickname" maxLength={20}
        onFocus={() => setFocusTag(true)} onBlur={() => setFocusTag(false)}
        style={{ ...s.inp, borderColor: focusTag ? '#FF6B00' : 'rgba(255,107,0,0.2)', boxShadow: focusTag ? '0 0 0 2px rgba(255,107,0,0.12)' : 'none' }}
      />
      <p style={s.avatarLabel}>CHOOSE YOUR AVATAR</p>
      <div style={s.avatarGrid}>
        {AVATARS.map(a => {
          const sel = avatar === a.emoji;
          return (
            <button key={a.emoji} onClick={() => setAvatar(a.emoji)} style={{
              ...s.avatarBtn,
              borderColor: sel ? '#FF6B00' : 'rgba(255,255,255,0.07)',
              background:  sel ? 'rgba(255,107,0,0.15)' : 'rgba(4,8,18,0.55)',
              boxShadow:   sel ? '0 0 14px rgba(255,107,0,0.45)' : 'none',
              transform:   sel ? 'scale(1.08)' : 'scale(1)',
            }}>
              <span style={{ fontSize:'1.5rem' }}>{a.emoji}</span>
              <span style={{ fontSize:'0.52rem', color: sel ? '#FF6B00' : 'rgba(140,170,200,0.45)', letterSpacing:'0.06em', marginTop:2 }}>{a.label}</span>
            </button>
          );
        })}
      </div>
      <button
        onClick={onNext} disabled={!canNext}
        style={{
          ...s.ctaBtn, marginTop:'0.1rem',
          opacity: canNext ? 1 : 0.35,
          background: canNext ? 'rgba(255,107,0,0.12)' : 'rgba(255,107,0,0.04)',
          cursor: canNext ? 'pointer' : 'not-allowed',
        }}
      >CREATE PROFILE {'\u2192'}</button>
    </div>
  );
}

/* STAGE 2 — Select Program */
function Stage2({ onSelect, onBack }) {
  const [hov, setHov] = useState(null);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
      <button onClick={onBack} style={s.backBtn}>{'\u2190'} back</button>
      <div style={s.stageHeader}>
        <span style={s.stageBadge}>STAGE 2 OF 3</span>
        <div style={s.stageHeadTitle}>SELECT YOUR<br /><em style={s.accent}>MISSION PROGRAM</em></div>
      </div>

      {/* 12-Day — ACTIVE */}
      <div
        onMouseEnter={() => setHov('12')} onMouseLeave={() => setHov(null)}
        style={{
          ...s.progCard,
          borderColor: hov === '12' ? '#FF6B00' : 'rgba(255,107,0,0.25)',
          background: hov === '12' ? 'rgba(255,107,0,0.1)' : 'rgba(4,8,18,0.7)',
          boxShadow: hov === '12' ? '0 0 20px rgba(255,107,0,0.2)' : 'none',
        }}
      >
        <div style={s.progCardHeader}>
          <span style={s.progBadge}>12-DAY PROGRAM</span>
          <span style={s.progActiveBadge}>{'\u25CF'} ACTIVE</span>
        </div>
        <p style={s.progSub}>Build Games {'\u2022'} Learn Python {'\u2022'} Unlock Rewards</p>
        <div style={s.progFeatures}>
          {['\uD83C\uDFAE 12 Interactive Missions','\uD83D\uDC0D Real Python Game Dev','\uD83C\uDFC6 XP + Badge System','\uD83D\uDE80 Final Space Shooter'].map(f => (
            <div key={f} style={s.progFeat}>{f}</div>
          ))}
        </div>
        <button
          onClick={() => onSelect({ id:'morning', level:'beginner' })}
          onMouseEnter={() => setHov('12btn')} onMouseLeave={() => setHov('12')}
          style={{
            ...s.ctaBtn, marginTop:'0.5rem', fontSize:'0.68rem', padding:'0.65rem',
            background: hov === '12btn' ? '#FF6B00' : 'rgba(255,107,0,0.15)',
            color: hov === '12btn' ? '#000' : '#FF6B00',
            boxShadow: hov === '12btn' ? '0 0 20px #FF6B0066' : 'none',
          }}
        >START 12-DAY PROGRAM {'\u26A1'}</button>
      </div>

      {/* 4-Day — COMING SOON */}
      <div style={{ ...s.progCard, borderColor:'rgba(255,255,255,0.06)', position:'relative', overflow:'hidden' }}>
        <div style={s.lockedOverlay}>
          <div style={{ fontSize:'1.6rem' }}>{'\uD83D\uDD12'}</div>
          <div style={s.comingSoonBadge}>COMING SOON</div>
        </div>
        <div style={{ filter:'blur(2.5px)', pointerEvents:'none', userSelect:'none' }}>
          <div style={s.progCardHeader}>
            <span style={{ ...s.progBadge, color:'rgba(160,160,160,0.6)' }}>4-DAY PROGRAM</span>
          </div>
          <p style={{ ...s.progSub, color:'rgba(150,170,200,0.38)' }}>Fast-Track Coding Adventure</p>
          <div style={s.progFeatures}>
            {['\uD83C\uDFAE Core Missions','\uD83D\uDC0D Express Python','\uD83C\uDFC6 Starter Badges','\uD83D\uDE80 Mini Project'].map(f => (
              <div key={f} style={{ ...s.progFeat, color:'rgba(140,160,190,0.3)' }}>{f}</div>
            ))}
          </div>
        </div>
      </div>

      <div style={s.rewardPreview}>
        <span style={s.rewardLabel}>FINAL REWARD:</span><br />
        BUILD YOUR OWN SPACE SHOOTER GAME {'\uD83D\uDE80'}
      </div>
    </div>
  );
}

/* STAGE 3 — Initialization */
function Stage3({ name }) {
  const [lines, setLines]         = useState([]);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const timers = [];
    INIT_MSGS.forEach((_, i) => {
      timers.push(setTimeout(() => setLines(prev => [...prev, i]), 400 + i * 620));
    });
    const afterAll = 400 + INIT_MSGS.length * 620;
    timers.push(setTimeout(() => setShowWelcome(true), afterAll + 400));
    timers.push(setTimeout(() => { window.location.href = APP_URL; }, afterAll + 2400));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div style={{ display:'flex', flexDirection:'column', gap:'0.55rem', alignItems:'center' }}>
      <div style={s.initIcon}>{'\u26A1'}</div>
      <div style={s.initTitle}>INITIALIZING</div>
      <div style={s.initLines}>
        {lines.map(i => (
          <div key={i} style={{ ...s.initLine, animation:'initFadeIn 0.35s ease' }}>
            <span style={s.initCheck}>{'\u2713'}</span>
            <span>{INIT_MSGS[i]}</span>
          </div>
        ))}
        {lines.length < INIT_MSGS.length && (
          <div style={{ ...s.initLine, color:'rgba(255,107,0,0.5)' }}>
            <span style={{ ...s.initCheck, display:'inline-block', animation:'initSpinCheck 0.8s linear infinite' }}>{'\u27F3'}</span>
            <span>{INIT_MSGS[lines.length]}</span>
          </div>
        )}
      </div>
      {showWelcome && (
        <div style={{ ...s.welcomeCommander, animation:'initFadeIn 0.5s ease' }}>
          <div style={s.cmdLine1}>WELCOME, COMMANDER</div>
          <div style={s.cmdName}>{(name || 'CADET').toUpperCase()}</div>
          <div style={s.cmdLine2}>YOUR CODING JOURNEY BEGINS NOW.</div>
        </div>
      )}
    </div>
  );
}

/* ─── Main ─── */
export default function HeroSpline({ style }) {
  const [ready, setReady]     = useState(false);
  const [stage, setStage]     = useState(0);
  const [name, setName]       = useState('');
  const [tag,  setTag]        = useState('');
  const [avatar, setAvatar]   = useState(null);
  const [mouse, setMouse]     = useState({ x:0, y:0 });

  useEffect(() => {
    const onMove = e => setMouse({
      x: (e.clientX / window.innerWidth)  * 2 - 1,
      y: (e.clientY / window.innerHeight) * 2 - 1,
    });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const handleProgramSelect = (program) => {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const trimName = name.trim() || 'Cadet';
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...existing,
      onboardingDone:  true,
      studentName:     trimName,
      gamerTag:        tag.trim() || trimName,
      avatar:          trimName.slice(0, 2).toUpperCase(),
      avatarEmoji:     avatar || '\uD83D\uDE80',
      batch:           program.id,
      experienceLevel: program.level,
    }));
    setStage(3);
  };

  return (
    <div style={{ ...s.root, ...style }}>
      <div style={{ ...s.fadeOverlay, opacity: ready ? 0 : 1, pointerEvents: ready ? 'none' : 'all' }}>
        <SplineLoader />
      </div>
      <iframe
        src={VIEWER_URL} title="Cyber Mannequin"
        frameBorder="0" allow="autoplay"
        onLoad={() => setReady(true)}
        style={{ ...s.canvas, opacity: ready ? 1 : 0 }}
      />
      <div style={s.badgeCover} />
      <HeroHeader mx={mouse.x} my={mouse.y} />
      <div style={{ ...s.panel, opacity: ready ? 1 : 0, transition:'opacity 0.8s ease 0.4s' }}>
        {stage === 0 && <Stage0 onStart={() => setStage(1)} />}
        {stage === 1 && <Stage1 name={name} setName={setName} tag={tag} setTag={setTag} avatar={avatar} setAvatar={setAvatar} onNext={() => setStage(2)} onBack={() => setStage(0)} />}
        {stage === 2 && <Stage2 onSelect={handleProgramSelect} onBack={() => setStage(1)} />}
        {stage === 3 && <Stage3 name={name} />}
      </div>
    </div>
  );
}

const s = {
  root: {
    position:'relative', width:'100%', height:'100%',
    background:'#050d1a', overflow:'hidden',
    fontFamily:"'Exo 2','Segoe UI',sans-serif",
  },
  canvas:      { width:'100%', height:'100%', border:'none', transition:'opacity 0.6s ease', display:'block' },
  fadeOverlay: {
    position:'absolute', inset:0, display:'flex', flexDirection:'column',
    alignItems:'center', justifyContent:'center',
    background:'#050d1a', transition:'opacity 0.6s ease', zIndex:10,
  },
  loaderWrap:  { display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem' },
  spinRing: {
    width:40, height:40, borderRadius:'50%',
    border:'3px solid rgba(255,107,0,0.15)', borderTopColor:'#FF6B00',
    animation:'splineSpinRing 0.9s linear infinite',
  },
  loaderText: { fontSize:'0.8rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,107,0,0.5)' },

  badgeCover: {
    position:'absolute', bottom:5, right:5,
    width:195, height:62,
    background:'#050d1a',
    borderRadius:'40px',
    zIndex:20, pointerEvents:'none',
  },

  heroWrap: {
    position:'absolute', left:'3vw', top:'50%', transform:'translateY(-52%)',
    width:'clamp(200px,40vw,520px)', zIndex:25, pointerEvents:'none',
    minHeight:'clamp(110px,14vw,190px)',
  },
  heroLayer: { position:'absolute', top:0, left:0, width:'100%', display:'flex', flexDirection:'column' },
  heroBig: {
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    fontSize:'clamp(52px,7vw,96px)', fontWeight:900, color:'#ffffff',
    letterSpacing:'-0.02em', lineHeight:1,
  },
  heroMed: {
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    fontSize:'clamp(14px,2.2vw,28px)', fontWeight:400, color:'rgba(255,255,255,0.75)',
    letterSpacing:'0.28em', marginTop:'0.25rem',
  },
  heroName: {
    position:'absolute', top:'clamp(72px,10vw,140px)', left:0,
    display:'flex', alignItems:'center', gap:'0.6rem',
  },
  heroDash:     { color:'rgba(255,107,0,0.45)', fontSize:'0.75rem', letterSpacing:'0.1em' },
  heroNameText: {
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    fontSize:'clamp(10px,1.1vw,14px)', fontWeight:600,
    color:'rgba(255,107,0,0.85)', letterSpacing:'0.22em',
  },

  panel: {
    position:'absolute', top:'50%', right:'3vw', transform:'translateY(-50%)',
    width:'clamp(270px,24vw,350px)', maxHeight:'88vh', overflowY:'auto',
    padding:'1.4rem 1.25rem',
    background:'rgba(4,9,20,0.82)', backdropFilter:'blur(22px)',
    border:'1px solid rgba(255,107,0,0.12)', borderRadius:'16px',
    boxShadow:'0 0 70px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.04)',
    zIndex:30, scrollbarWidth:'none',
  },

  welcomeRocket:   { fontSize:'2.4rem', lineHeight:1, animation:'welcomeBounce 2s ease-in-out infinite' },
  welcomeTitle: {
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    fontSize:'0.7rem', fontWeight:600, color:'rgba(180,200,230,0.65)',
    letterSpacing:'0.18em', textAlign:'center', lineHeight:1.9,
  },
  welcomeAcademy:  { fontSize:'1.4rem', fontWeight:900, color:'#FF6B00', textShadow:'0 0 22px rgba(255,107,0,0.5)', display:'block' },
  welcomeSubtitle: { fontSize:'1.1rem', fontWeight:800, color:'#ffffff', letterSpacing:'0.08em', display:'block' },
  welcomeTagline: {
    fontSize:'0.71rem', color:'rgba(160,190,225,0.55)',
    textAlign:'center', lineHeight:1.65, letterSpacing:'0.02em',
  },
  featureList: { display:'flex', flexDirection:'column', gap:'0.38rem', width:'100%' },
  featureItem: {
    display:'flex', alignItems:'center', gap:'0.55rem',
    padding:'0.44rem 0.65rem',
    background:'rgba(255,107,0,0.06)',
    borderRadius:'7px', border:'1px solid rgba(255,107,0,0.12)',
  },
  featureIcon: { fontSize:'1rem', lineHeight:1, flexShrink:0 },
  featureText: { fontSize:'0.74rem', color:'rgba(200,220,250,0.8)', fontWeight:500, letterSpacing:'0.02em' },
  ctaBtn: {
    width:'100%', padding:'0.76rem', border:'none', borderRadius:'10px',
    fontSize:'0.76rem', fontWeight:800, letterSpacing:'0.13em',
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    cursor:'pointer', transition:'all 0.2s',
    color:'#FF6B00', background:'rgba(255,107,0,0.12)',
    boxShadow:'0 0 0 1px rgba(255,107,0,0.35)',
  },

  stageHeader:    { display:'flex', flexDirection:'column', gap:'0.25rem', marginBottom:'0.1rem' },
  stageBadge:     { fontSize:'0.57rem', letterSpacing:'0.2em', color:'rgba(255,107,0,0.42)', textTransform:'uppercase' },
  stageHeadTitle: { fontSize:'1.2rem', fontWeight:700, color:'rgba(200,225,255,0.9)', lineHeight:1.3 },
  accent:         { fontStyle:'normal', color:'#FF6B00', textShadow:'0 0 14px rgba(255,107,0,0.38)' },
  backBtn: {
    background:'none', border:'none', color:'rgba(255,107,0,0.38)',
    fontSize:'0.63rem', letterSpacing:'0.1em', cursor:'pointer',
    padding:'0 0 0.1rem', textTransform:'uppercase', textAlign:'left',
  },
  inp: {
    width:'100%', padding:'0.64rem 0.85rem',
    background:'rgba(4,9,20,0.75)', border:'1px solid',
    borderRadius:'7px', color:'#e8f0ff',
    fontSize:'0.82rem', fontFamily:"'Exo 2','Segoe UI',sans-serif",
    outline:'none', letterSpacing:'0.03em', transition:'all 0.2s',
  },
  avatarLabel: { fontSize:'0.58rem', letterSpacing:'0.18em', color:'rgba(255,107,0,0.38)', textTransform:'uppercase', marginTop:'0.05rem' },
  avatarGrid:  { display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.38rem' },
  avatarBtn: {
    display:'flex', flexDirection:'column', alignItems:'center',
    justifyContent:'center', padding:'0.55rem 0.2rem',
    border:'1px solid', borderRadius:'9px', cursor:'pointer',
    gap:2, transition:'all 0.15s ease',
  },

  progCard: {
    padding:'0.85rem 0.82rem', border:'1px solid',
    borderRadius:'10px', transition:'all 0.2s ease',
  },
  progCardHeader: { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'0.28rem' },
  progBadge: {
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    fontSize:'0.66rem', fontWeight:800, color:'#FF6B00', letterSpacing:'0.07em',
  },
  progActiveBadge: { fontSize:'0.58rem', color:'#00D68F', letterSpacing:'0.09em', animation:'pulseGreen 1.8s ease-in-out infinite' },
  progSub:      { fontSize:'0.63rem', color:'rgba(160,185,215,0.58)', letterSpacing:'0.02em', marginBottom:'0.45rem' },
  progFeatures: { display:'flex', flexDirection:'column', gap:'0.2rem' },
  progFeat:     { fontSize:'0.66rem', color:'rgba(190,210,240,0.7)', letterSpacing:'0.01em' },
  lockedOverlay: {
    position:'absolute', inset:0, zIndex:2,
    display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
    gap:'0.4rem', background:'rgba(4,9,20,0.65)', borderRadius:'10px',
  },
  comingSoonBadge: {
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    fontSize:'0.62rem', fontWeight:800, color:'rgba(200,200,200,0.55)',
    letterSpacing:'0.2em', padding:'0.22rem 0.65rem',
    border:'1px solid rgba(200,200,200,0.22)', borderRadius:'20px',
    animation:'comingSoonPulse 2s ease-in-out infinite',
  },
  rewardPreview: {
    padding:'0.55rem 0.65rem',
    background:'rgba(255,107,0,0.06)', border:'1px solid rgba(255,107,0,0.14)',
    borderRadius:'8px', fontSize:'0.64rem',
    color:'rgba(255,200,100,0.7)', letterSpacing:'0.04em',
    lineHeight:1.75, textAlign:'center',
  },
  rewardLabel: { fontSize:'0.53rem', letterSpacing:'0.18em', color:'rgba(255,107,0,0.42)' },

  initIcon:  { fontSize:'2.2rem', lineHeight:1 },
  initTitle: {
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    fontSize:'1rem', fontWeight:800, color:'#FF6B00',
    letterSpacing:'0.2em', textAlign:'center',
  },
  initLines: { display:'flex', flexDirection:'column', gap:'0.32rem', width:'100%', marginTop:'0.3rem' },
  initLine:  { display:'flex', alignItems:'center', gap:'0.48rem', fontSize:'0.67rem', color:'rgba(180,210,240,0.72)', letterSpacing:'0.01em' },
  initCheck: { color:'#00D68F', fontSize:'0.68rem', flexShrink:0 },
  welcomeCommander: {
    marginTop:'0.7rem', textAlign:'center',
    padding:'0.75rem 0.9rem',
    background:'rgba(255,107,0,0.08)', border:'1px solid rgba(255,107,0,0.22)',
    borderRadius:'10px',
  },
  cmdLine1: { fontSize:'0.6rem', letterSpacing:'0.18em', color:'rgba(200,220,255,0.5)', textTransform:'uppercase' },
  cmdName: {
    fontFamily:"'Orbitron','Exo 2',sans-serif",
    fontSize:'1.3rem', fontWeight:900, color:'#FF6B00',
    textShadow:'0 0 20px rgba(255,107,0,0.55)', marginTop:'0.2rem',
  },
  cmdLine2: { fontSize:'0.6rem', letterSpacing:'0.07em', color:'rgba(200,220,255,0.45)', marginTop:'0.35rem' },
};
