import { useState, useEffect } from 'react';
import { useProgress } from '../context/ProgressContext.jsx';
import { CHALLENGES_DATA } from '../data/challenges.js';
import { BADGES_ALL } from '../data/badges.js';
import { DAYS_DATA } from '../data/lessons.js';
import CodeChallengeCard from './CodeChallengeCard.jsx';
import LockedContentCard from './LockedContentCard.jsx';
import XPRewardPopup from './XPRewardPopup.jsx';
import MiniGame from './MiniGame.jsx';

/**
 * ChallengeEngine — orchestrates the full mission flow for a single day:
 *   Missions (sequential) → all done → live game unlocks + DayCompleteOverlay
 */
export default function ChallengeEngine({ day, dayColor, setView, setSelectedDay }) {
  const { state, dispatch } = useProgress();
  const data = CHALLENGES_DATA[day.id];
  if (!data) return null;

  const { steps, miniGame } = data;
  const totalSteps = steps.length;

  const isAdmin = state.gamerTag === 'admin123';
  const allStepIds = steps.map(s => s.id);

  const [completedSteps, setCompletedSteps] = useState(isAdmin ? allStepIds : []);
  const [xpPopup,        setXpPopup]        = useState(null);
  const [showComplete,   setShowComplete]   = useState(false);
  // Admin: never fire the day-complete overlay automatically
  const [alreadyFired,   setAlreadyFired]   = useState(isAdmin);

  const completedCount = completedSteps.length;
  const allDone        = completedCount >= totalSteps;
  const progressPct    = Math.round((completedCount / totalSteps) * 100);


  // Badge for this day
  const dayBadge = BADGES_ALL.find(b => b.day === day.id);
  const nextDayId = day.id + 1;
  const hasNextDay = nextDayId <= 12;

  // Fire COMPLETE_CHALLENGE once when all steps done
  useEffect(() => {
    if (allDone && !alreadyFired && !state.completedDays?.includes(day.id)) {
      setAlreadyFired(true);
      dispatch({
        type: 'COMPLETE_CHALLENGE',
        payload: {
          dayId:     day.id,
          xpReward:  totalSteps * 30,
          badgeName: dayBadge?.name || null,
        },
      });
      // Short delay then show celebration overlay
      setTimeout(() => setShowComplete(true), 1200);
    }
  }, [allDone]);

  const handleStepSuccess = (stepId, xp) => {
    if (completedSteps.includes(stepId)) return;
    setCompletedSteps(prev => [...prev, stepId]);
    setXpPopup({ xp, key: Date.now() });
    dispatch({ type: 'AWARD_CHALLENGE_XP', payload: { xp } });
  };

  const goNextDay = () => {
    setShowComplete(false);
    if (hasNextDay && setSelectedDay && setView) {
      const nextDay = DAYS_DATA.find(d => d.id === nextDayId);
      if (nextDay) { setSelectedDay(nextDay); setView('day'); }
    }
  };

  // Any key closes overlay and navigates
  useEffect(() => {
    if (!showComplete) return;
    const handle = (e) => {
      if (e.type === 'keydown' || e.type === 'click') goNextDay();
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [showComplete]);

  return (
    <div style={{ marginBottom: 32 }}>
      {/* XP reward popup */}
      {xpPopup && (
        <XPRewardPopup key={xpPopup.key} xp={xpPopup.xp} dayColor={dayColor} onDone={() => setXpPopup(null)} />
      )}

      {/* Day Complete Overlay */}
      {showComplete && (
        <DayCompleteOverlay
          day={day}
          dayColor={dayColor}
          badge={dayBadge}
          hasNextDay={hasNextDay}
          nextDayId={nextDayId}
          onContinue={goNextDay}
        />
      )}

      {/* Section header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}>⚡ Code Missions</div>
        <div style={{
          background: `${dayColor}18`, border: `1px solid ${dayColor}35`,
          borderRadius: 99, padding: '4px 14px', color: dayColor, fontSize: 12, fontWeight: 800,
        }}>
          {completedCount}/{totalSteps} Complete
        </div>
      </div>

      {/* Mission progress bar */}
      <div style={{ height: 6, borderRadius: 99, background: 'rgba(255,255,255,0.07)', marginBottom: 20, overflow: 'hidden' }}>
        <div style={{
          height: '100%', borderRadius: 99,
          background: `linear-gradient(90deg, ${dayColor}, ${dayColor}88)`,
          width: `${progressPct}%`,
          transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: `0 0 12px ${dayColor}60`,
        }} />
      </div>

      {/* Hint bar */}
      <div style={{
        padding: '12px 18px', borderRadius: 12, marginBottom: 20,
        background: `${dayColor}10`, border: `1px solid ${dayColor}25`,
        color: 'rgba(255,255,255,0.65)', fontSize: 13, lineHeight: 1.6,
      }}>
        🎯 Complete all {totalSteps} missions to unlock the live game below!
        &nbsp;Tab = 4 spaces · Ctrl+Enter = validate
      </div>

      {/* Challenge steps — each locked until previous complete */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {steps.map((step, idx) => {
          const prevDone = idx === 0 || completedSteps.includes(steps[idx - 1].id);
          return (
            <LockedContentCard
              key={step.id}
              unlocked={prevDone}
              dayColor={dayColor}
              label={`Complete Mission ${idx} to unlock this step`}
            >
              <CodeChallengeCard
                step={step}
                dayColor={dayColor}
                stepIndex={idx}
                totalSteps={totalSteps}
                onSuccess={(xp) => handleStepSuccess(step.id, xp)}
              />
            </LockedContentCard>
          );
        })}
      </div>

      {/* Game unlock section — locked until all missions complete */}
      <div style={{ marginTop: 24 }}>
        <LockedContentCard
          unlocked={allDone}
          dayColor={dayColor}
          label="Complete all code missions above to play the live game!"
        >
          <GameUnlockPanel miniGame={miniGame} dayColor={dayColor} dayId={day.id} />
        </LockedContentCard>
      </div>
    </div>
  );
}

// ── Day Complete Overlay ───────────────────────────────────────────────────────
function DayCompleteOverlay({ day, dayColor, badge, hasNextDay, nextDayId, onContinue }) {
  return (
    <div
      onClick={onContinue}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(4,8,15,0.92)',
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        animation: 'fadeIn 0.4s ease',
        cursor: 'pointer',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 480, margin: '0 24px',
          borderRadius: 24, overflow: 'hidden',
          border: `1px solid ${dayColor}50`,
          background: `linear-gradient(145deg, rgba(4,8,15,0.98), rgba(10,20,40,0.98))`,
          boxShadow: `0 0 80px ${dayColor}30, 0 40px 80px rgba(0,0,0,0.8)`,
          animation: 'unlockReveal 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* Header glow bar */}
        <div style={{ height: 4, background: `linear-gradient(90deg, transparent, ${dayColor}, transparent)` }} />

        {/* Main content */}
        <div style={{ padding: '36px 32px', textAlign: 'center' }}>
          {/* Confetti emoji burst */}
          <div style={{ fontSize: 48, marginBottom: 4, animation: 'float 2s ease-in-out infinite' }}>🎉</div>

          <div style={{ color: dayColor, fontWeight: 900, fontSize: 13, letterSpacing: 3, marginBottom: 8, opacity: 0.8 }}>
            DAY {day.id} COMPLETE
          </div>
          <div style={{ color: '#fff', fontWeight: 900, fontSize: 28, lineHeight: 1.2, marginBottom: 24 }}>
            {day.title}
          </div>

          {/* Badge earned */}
          {badge && (
            <div style={{
              margin: '0 auto 28px',
              padding: '20px 24px',
              borderRadius: 16,
              background: `${badge.color}12`,
              border: `1px solid ${badge.color}40`,
              maxWidth: 320,
            }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>{badge.icon}</div>
              <div style={{ color: badge.color, fontWeight: 900, fontSize: 16, marginBottom: 4 }}>
                🏅 BADGE UNLOCKED: {badge.name}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, lineHeight: 1.5 }}>
                {badge.desc}
              </div>
            </div>
          )}

          {/* Next day unlock */}
          {hasNextDay ? (
            <div style={{ marginBottom: 24 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
                borderRadius: 99, padding: '6px 18px', marginBottom: 16,
              }}>
                <span style={{ color: '#10b981', fontWeight: 800, fontSize: 13 }}>
                  🔓 Day {nextDayId} Unlocked!
                </span>
              </div>
            </div>
          ) : (
            <div style={{ color: '#f59e0b', fontWeight: 800, fontSize: 16, marginBottom: 24 }}>
              🏆 You completed the full 10-day course!
            </div>
          )}

          {/* CTA button */}
          <button
            onClick={onContinue}
            style={{
              width: '100%', padding: '16px 24px',
              borderRadius: 12, border: `1px solid ${dayColor}60`,
              background: `linear-gradient(135deg, ${dayColor}30, ${dayColor}15)`,
              color: '#fff', fontWeight: 900, fontSize: 16,
              cursor: 'pointer', fontFamily: 'inherit',
              boxShadow: `0 0 24px ${dayColor}30`,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background=`linear-gradient(135deg, ${dayColor}50, ${dayColor}30)`; }}
            onMouseLeave={e => { e.currentTarget.style.background=`linear-gradient(135deg, ${dayColor}30, ${dayColor}15)`; }}
          >
            {hasNextDay ? `🚀 Continue to Day ${nextDayId}` : '🏆 View My Badges'}
          </button>

          <div style={{ marginTop: 12, color: 'rgba(255,255,255,0.25)', fontSize: 12 }}>
            Press any key to continue
          </div>
        </div>

        {/* Footer bar */}
        <div style={{ height: 4, background: `linear-gradient(90deg, transparent, ${dayColor}, transparent)` }} />
      </div>
    </div>
  );
}

// ── Game Unlock Panel ─────────────────────────────────────────────────────────
function GameUnlockPanel({ miniGame, dayColor, dayId }) {
  const DIFF_LABELS = ['', 'Beginner', 'Easy', 'Medium', 'Hard', 'Expert'];

  return (
    <div style={{
      borderRadius: 18, overflow: 'hidden',
      border: `1px solid ${dayColor}50`,
      background: `linear-gradient(135deg, ${dayColor}08, rgba(0,0,0,0.6))`,
      animation: 'unlockReveal 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards',
    }}>
      {/* Trophy banner */}
      <div style={{
        padding: '12px 20px', textAlign: 'center',
        background: `linear-gradient(90deg, ${dayColor}30, ${dayColor}15, ${dayColor}30)`,
        borderBottom: `1px solid ${dayColor}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      }}>
        <span style={{ fontSize: 18 }}>🏆</span>
        <span style={{ color: dayColor, fontSize: 12, fontWeight: 900, letterSpacing: 2 }}>
          ALL MISSIONS COMPLETE — GAME UNLOCKED!
        </span>
        <span style={{ fontSize: 18 }}>🎮</span>
      </div>

      {/* Game info strip */}
      <div style={{
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
        borderBottom: `1px solid ${dayColor}20`,
        background: `${dayColor}06`,
      }}>
        <span style={{ fontSize: 28 }}>{miniGame.icon}</span>
        <div>
          <div style={{ color: '#fff', fontWeight: 900, fontSize: 15 }}>{miniGame.title}</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>{miniGame.description}</div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <span style={{
            background: `${dayColor}18`, border: `1px solid ${dayColor}35`,
            borderRadius: 99, padding: '3px 12px', color: dayColor, fontSize: 11, fontWeight: 700,
          }}>
            🎯 {DIFF_LABELS[miniGame.difficulty] || 'Beginner'}
          </span>
          <span style={{
            background: 'rgba(16,185,129,0.12)', border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: 99, padding: '3px 12px', color: '#10b981', fontSize: 11, fontWeight: 800,
          }}>
            ▶ LIVE IN BROWSER
          </span>
        </div>
      </div>

      {/* The live playable game */}
      <div style={{ padding: '20px' }}>
        <MiniGame dayId={dayId} dayColor={dayColor} autoPlay />
      </div>

      {/* Concepts reinforced */}
      {miniGame.concepts?.length > 0 && (
        <div style={{
          padding: '14px 20px', borderTop: `1px solid ${dayColor}15`,
          background: 'rgba(0,0,0,0.2)',
          display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 700 }}>
            CONCEPTS USED:
          </span>
          {miniGame.concepts.map((c, i) => (
            <span key={i} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 99, padding: '2px 10px', color: 'rgba(255,255,255,0.55)', fontSize: 11,
            }}>
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
