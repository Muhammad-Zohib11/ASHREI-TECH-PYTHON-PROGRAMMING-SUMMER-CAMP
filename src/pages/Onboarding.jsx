import { useState } from 'react';
import { useProgress } from '../context/ProgressContext.jsx';

const AVATARS = ['🚀','🐍','🎮','⚡','🧠','🔥','🤖','💎','🌟','🥷','🎯','👾'];

const BATCHES = [
  { id: 'morning', label: 'Morning Batch',    icon: '🌅' },
  { id: 'evening', label: 'Evening Batch',    icon: '🌆' },
  { id: 'weekend', label: 'Weekend Warriors', icon: '⚔️' },
  { id: 'ninjas',  label: 'Python Ninjas',    icon: '🥷' },
];

const LEVELS = [
  { id: 'beginner',    label: 'Total Beginner',  desc: 'Never coded before',       icon: '🌱' },
  { id: 'some',        label: 'Some Experience', desc: 'Tried a little coding',    icon: '🌿' },
  { id: 'experienced', label: 'I Can Code!',     desc: 'Comfortable with basics',  icon: '🌳' },
];

export default function Onboarding() {
  const { dispatch } = useProgress();
  const [step,            setStep]           = useState(0);  // 0=name, 1=batch+level, 2=avatar
  const [name,            setName]           = useState('');
  const [gamerTag,        setGamerTag]       = useState('');
  const [batch,           setBatch]          = useState('morning');
  const [experienceLevel, setExperienceLevel]= useState('beginner');
  const [avatarEmoji,     setAvatarEmoji]    = useState('🚀');
  const [nameError,       setNameError]      = useState('');

  const TOTAL_STEPS = 3;

  const handleNext = () => {
    if (step === 0) {
      if (!name.trim()) { setNameError('Please enter your name!'); return; }

      // Admin shortcut — skip onboarding and unlock all days
      if (name.trim().toLowerCase() === 'admin123') {
        dispatch({ type: 'ADMIN_UNLOCK_ALL' });
        return;
      }

      setNameError('');
      setStep(1);
      return;
    }
    if (step === 1) {
      setStep(2);
      return;
    }
    // Step 2 → launch
    dispatch({
      type: 'COMPLETE_ONBOARDING',
      payload: { studentName: name.trim(), avatarEmoji, batch, experienceLevel, gamerTag: gamerTag.trim() },
    });
  };

  return (
    <div style={{
      minHeight:'100vh', background:'var(--bg)',
      display:'flex', alignItems:'center', justifyContent:'center',
      padding:'24px', fontFamily:'var(--font-body)', position:'relative', overflow:'hidden',
    }}>
      {/* Brand orbs */}
      <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)', top:'-15%', right:'-10%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,214,143,0.06) 0%, transparent 70%)', bottom:'-15%', left:'-10%', pointerEvents:'none' }} />

      <div style={{
        width:'100%', maxWidth:480,
        background:'var(--card)',
        border:'1px solid rgba(255,107,0,0.2)',
        borderRadius:20, padding:'44px 40px',
        backdropFilter:'blur(24px)',
        boxShadow:'0 0 60px rgba(255,107,0,0.08)',
      }}>
        {/* Logo */}
        <div style={{ textAlign:'center', marginBottom:32 }}>
          <img src="/ashrei-logo.png" alt="ASHRI Tech" style={{ height:40, objectFit:'contain', marginBottom:12 }} />
          <div style={{ fontFamily:'var(--font-head)', color:'var(--orange)', fontSize:13, letterSpacing:3, marginTop:4 }}>AI &amp; PYTHON PROGRAMMING</div>
          <div style={{ color:'var(--muted)', fontSize:11, letterSpacing:2, marginTop:4 }}>CREATE YOUR PROFILE</div>
        </div>

        {/* Progress dots */}
        <div style={{ display:'flex', justifyContent:'center', gap:8, marginBottom:32 }}>
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} style={{
              width: i === step ? 24 : 8, height:7, borderRadius:99,
              background: i <= step ? 'var(--orange)' : 'rgba(255,255,255,0.1)',
              transition:'all 0.3s',
              boxShadow: i === step ? '0 0 10px rgba(255,107,0,0.5)' : 'none',
            }} />
          ))}
        </div>

        {/* ── STEP 0: Name + GamerTag ── */}
        {step === 0 && (
          <div className="page-enter">
            <div style={{ color:'var(--orange)', fontFamily:'var(--font-head)', fontSize:12, letterSpacing:3, marginBottom:8 }}>STEP 1 OF 3</div>
            <h2 style={{ fontFamily:'var(--font-head)', color:'var(--white)', fontSize:22, letterSpacing:1, marginBottom:6 }}>What's your name, Recruit?</h2>
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:13, marginBottom:24, lineHeight:1.6 }}>
              This appears on your badge and leaderboard.
            </p>
            <input
              autoFocus
              value={name}
              onChange={e => { setName(e.target.value); setNameError(''); }}
              onKeyDown={e => e.key === 'Enter' && handleNext()}
              placeholder="Your full name"
              style={{
                width:'100%', padding:'13px 18px', borderRadius:8, fontSize:15,
                background:'rgba(255,255,255,0.05)',
                border:`1px solid ${nameError ? '#ef4444' : 'rgba(255,107,0,0.3)'}`,
                color:'var(--white)', fontFamily:'inherit', outline:'none', marginBottom:4,
              }}
            />
            {nameError && <div style={{ color:'#ef4444', fontSize:12, marginBottom:12 }}>⚠ {nameError}</div>}

            <div style={{ color:'rgba(255,255,255,0.35)', fontSize:12, marginTop:16, marginBottom:8 }}>
              Gamer tag (optional — shown in class):
            </div>
            <input
              value={gamerTag}
              onChange={e => setGamerTag(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleNext()}
              placeholder="e.g. ProCoder99"
              style={{ width:'100%', padding:'10px 18px', borderRadius:10, fontSize:14, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.1)', color:'rgba(255,255,255,0.7)', fontFamily:'inherit', outline:'none' }}
            />
          </div>
        )}

        {/* ── STEP 1: Batch + Experience Level ── */}
        {step === 1 && (
          <div className="page-enter">
            <div style={{ color:'var(--teal)', fontFamily:'var(--font-head)', fontSize:12, letterSpacing:3, marginBottom:8 }}>STEP 2 OF 3</div>
            <h2 style={{ fontFamily:'var(--font-head)', color:'var(--white)', fontSize:22, letterSpacing:1, marginBottom:6 }}>Tell us about yourself</h2>
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:13, marginBottom:22 }}>Helps your instructor personalise your experience.</p>

            <div style={{ color:'rgba(255,255,255,0.5)', fontSize:11, fontWeight:800, letterSpacing:1.5, marginBottom:10 }}>YOUR BATCH</div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:24 }}>
              {BATCHES.map(b => (
                <button key={b.id} onClick={() => setBatch(b.id)} style={{
                  padding:'11px 14px', borderRadius:12, border:'none', cursor:'pointer', textAlign:'left',
                  background: batch === b.id ? 'rgba(139,92,246,0.2)' : 'rgba(255,255,255,0.04)',
                  outline: batch === b.id ? '2px solid #8b5cf6' : '2px solid transparent',
                  color: batch === b.id ? '#fff' : 'rgba(255,255,255,0.55)',
                  fontFamily:'inherit', fontSize:13, fontWeight: batch === b.id ? 700 : 400,
                  transition:'all 0.18s',
                }}>
                  <span style={{ marginRight:6 }}>{b.icon}</span>{b.label}
                </button>
              ))}
            </div>

            <div style={{ color:'rgba(255,255,255,0.5)', fontSize:11, fontWeight:800, letterSpacing:1.5, marginBottom:10 }}>YOUR EXPERIENCE LEVEL</div>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {LEVELS.map(l => (
                <button key={l.id} onClick={() => setExperienceLevel(l.id)} style={{
                  padding:'12px 16px', borderRadius:12, border:'none', cursor:'pointer',
                  textAlign:'left', display:'flex', alignItems:'center', gap:12,
                  background: experienceLevel === l.id ? 'rgba(0,245,255,0.12)' : 'rgba(255,255,255,0.04)',
                  outline: experienceLevel === l.id ? '2px solid #00f5ff' : '2px solid transparent',
                  color: experienceLevel === l.id ? '#fff' : 'rgba(255,255,255,0.55)',
                  fontFamily:'inherit', transition:'all 0.18s',
                }}>
                  <span style={{ fontSize:22 }}>{l.icon}</span>
                  <div>
                    <div style={{ fontSize:13, fontWeight: experienceLevel === l.id ? 700 : 400 }}>{l.label}</div>
                    <div style={{ fontSize:11, color:'rgba(255,255,255,0.35)', marginTop:1 }}>{l.desc}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── STEP 2: Avatar picker ── */}
        {step === 2 && (
          <div className="page-enter">
            <div style={{ color:'var(--orange)', fontFamily:'var(--font-head)', fontSize:12, letterSpacing:3, marginBottom:8 }}>STEP 3 OF 3</div>
            <h2 style={{ fontFamily:'var(--font-head)', color:'var(--white)', fontSize:22, letterSpacing:1, marginBottom:6 }}>Pick your player badge</h2>
            <p style={{ color:'rgba(255,255,255,0.4)', fontSize:13, marginBottom:22 }}>This will appear on your profile and badge card.</p>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(6, 1fr)', gap:10, marginBottom:20 }}>
              {AVATARS.map(emoji => (
                <button key={emoji} onClick={() => setAvatarEmoji(emoji)} style={{
                  fontSize:28, padding:'12px 0', borderRadius:12, border:'none', cursor:'pointer',
                  background: avatarEmoji === emoji ? 'rgba(16,185,129,0.2)' : 'rgba(255,255,255,0.04)',
                  outline: avatarEmoji === emoji ? '2px solid #10b981' : '2px solid transparent',
                  transform: avatarEmoji === emoji ? 'scale(1.15)' : 'scale(1)',
                  transition:'all 0.18s',
                  boxShadow: avatarEmoji === emoji ? '0 0 18px rgba(16,185,129,0.4)' : 'none',
                }}>{emoji}</button>
              ))}
            </div>

            {/* Profile preview */}
            <div style={{ borderRadius:14, padding:'16px 20px', background:'rgba(255,255,255,0.03)', border:'1px solid rgba(0,245,255,0.12)', display:'flex', alignItems:'center', gap:14 }}>
              <div style={{ fontSize:40 }}>{avatarEmoji}</div>
              <div>
                <div style={{ color:'#fff', fontWeight:800, fontSize:16 }}>{name}</div>
                {gamerTag && <div style={{ color:'#00f5ff', fontSize:12, fontFamily:'var(--font-code)' }}>@{gamerTag}</div>}
                <div style={{ color:'rgba(255,255,255,0.35)', fontSize:11, marginTop:2 }}>
                  {BATCHES.find(b => b.id === batch)?.icon} {BATCHES.find(b => b.id === batch)?.label} · 🌱 Code Recruit · 0 XP
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div style={{ display:'flex', gap:12, marginTop:28 }}>
          {step > 0 && (
            <button onClick={() => setStep(s => s - 1)} style={{ padding:'13px 20px', borderRadius:12, border:'1px solid rgba(255,255,255,0.12)', background:'transparent', color:'rgba(255,255,255,0.55)', cursor:'pointer', fontSize:14, fontFamily:'inherit', flex:1 }}>
              ← Back
            </button>
          )}
          <button
            onClick={handleNext}
            style={{
              padding:'14px 28px', borderRadius:8, border:'none', cursor:'pointer',
              background: step === 2
                ? 'linear-gradient(135deg, var(--teal), #00a36e)'
                : 'linear-gradient(135deg, var(--orange), #cc5500)',
              color:'#fff', fontWeight:700, fontSize:15, fontFamily:'var(--font-body)', flex:2,
              letterSpacing:0.5,
              boxShadow: step === 2 ? '0 0 28px rgba(0,214,143,0.35)' : '0 0 28px rgba(255,107,0,0.35)',
            }}
          >
            {step === 2 ? '🚀 Launch Academy!' : 'Continue →'}
          </button>
        </div>
      </div>
    </div>
  );
}
