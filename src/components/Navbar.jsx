import { useProgress } from '../context/ProgressContext.jsx';
import { getRankInfo }  from '../utils/rank.js';
import XPBar from './XPBar.jsx';

export default function Navbar({ view, setView, setSelectedDay }) {
  const { state, dispatch } = useProgress();
  const { current } = getRankInfo(state.xp);

  const navItems = [
    { id:'landing', label:'Home',    icon:'🏠' },
    { id:'lessons', label:'Lessons', icon:'📚' },
    { id:'badges',  label:'Badges',  icon:'🏅' },
  ];

  const goTo = (id) => { setView(id); setSelectedDay(null); };

  const switchAccount = () => {
    if (window.confirm('Switch account? This will return to the login screen.')) {
      dispatch({ type: 'RESET_ACCOUNT' });
      window.location.replace('/hero.html');
    }
  };

  const isAdmin = state.gamerTag === 'admin123';

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 200,
      background: 'rgba(8,12,24,0.92)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,107,0,0.15)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,
      }}>

        {/* ── Logo ── */}
        <div style={{ display:'flex', alignItems:'center', gap:14, cursor:'pointer' }} onClick={() => goTo('landing')}>
          <img src="/ashrei-logo.png" alt="ASHRI Tech" style={{ height: 32, objectFit:'contain' }} />
          <div style={{ borderLeft: '1px solid rgba(255,107,0,0.3)', paddingLeft: 14 }}>
            <div style={{ fontFamily:'var(--font-head)', fontSize: 11, letterSpacing: 3, color: 'var(--orange)', lineHeight: 1 }}>
              AI &amp; PYTHON PROGRAMMING
            </div>
          </div>
        </div>

        {/* ── Nav items ── */}
        <div style={{ display:'flex', gap:2 }}>
          {navItems.map(item => (
            <button
              key={item.id}
              type="button"
              onClick={() => goTo(item.id)}
              aria-current={view === item.id ? 'page' : undefined}
              style={{
              padding: '7px 16px', borderRadius: 6, border: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-body)',
              background: view === item.id ? 'rgba(255,107,0,0.12)' : 'transparent',
              color: view === item.id ? 'var(--orange)' : 'var(--muted)',
              borderBottom: view === item.id ? '2px solid var(--orange)' : '2px solid transparent',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { if(view!==item.id){ e.currentTarget.style.color='var(--text)'; e.currentTarget.style.background='rgba(255,255,255,0.04)'; }}}
            onMouseLeave={e => { if(view!==item.id){ e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.background='transparent'; }}}
            >
              <span className="hide-mobile">{item.icon} </span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </div>

        {/* ── Right: XP + avatar + switch ── */}
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          {isAdmin && (
            <div style={{
              background: 'rgba(255,107,0,0.12)', border: '1px solid rgba(255,107,0,0.35)',
              borderRadius: 6, padding: '3px 10px', color: 'var(--orange)', fontSize: 11, fontWeight: 700,
              letterSpacing: 1,
            }}>
              🛡️ ADMIN
            </div>
          )}
          <div style={{
            background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.25)',
            borderRadius: 6, padding: '5px 14px', color: 'var(--orange)', fontSize: 13, fontWeight: 700,
          }}>
            ⚡ {state.xp} XP
          </div>
          <button
            type="button"
            onClick={() => goTo('lessons')}
            aria-label={`${state.studentName} — go to lessons`}
            title={state.studentName}
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: `linear-gradient(135deg, ${current.color}33, rgba(255,255,255,0.06))`,
              border: `2px solid ${current.color}60`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, cursor: 'pointer',
              boxShadow: `0 0 14px ${current.color}40`,
              transition: 'all 0.2s',
            }}
          >
            {state.avatarEmoji || state.avatar}
          </button>
          {/* Switch account */}
          <button
            type="button"
            onClick={switchAccount}
            aria-label="Switch account"
            title="Switch Account"
            style={{
              width: 34, height: 34, borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.03)',
              color: 'rgba(255,255,255,0.35)', fontSize: 14,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(239,68,68,0.5)'; e.currentTarget.style.color='#ef4444'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.color='rgba(255,255,255,0.35)'; }}
          >
            <span aria-hidden="true">⏏</span>
          </button>
        </div>
      </div>

      {/* XP bar — teal accent matching brand */}
      <div style={{ height: 2, background: 'rgba(255,107,0,0.06)' }}>
        <XPBar />
      </div>
    </nav>
  );
}
