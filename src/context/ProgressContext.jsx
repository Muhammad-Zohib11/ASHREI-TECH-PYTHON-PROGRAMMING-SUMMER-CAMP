import { createContext, useContext, useReducer, useEffect } from 'react';

const STORAGE_KEY = 'ashri-progress-v1';

export const defaultState = {
  // ── Onboarding ──
  onboardingDone:      false,
  studentName:         '',
  avatar:              '?',          // 2-char initials OR chosen emoji
  avatarEmoji:         '🚀',         // chosen avatar emoji
  batch:               '',           // morning | evening | weekend | ninjas
  experienceLevel:     'beginner',   // beginner | some | experienced
  gamerTag:            '',

  // ── Progression ──
  xp:                  0,
  streak:              0,
  lastCompletedDate:   null,         // ISO date string 'YYYY-MM-DD' of last challenge complete
  completedDays:       [],
  unlockedDays:        [1],          // Day 1 always unlocked
  earnedBadges:        [],
  completedChallenges: [],
};

function progressReducer(state, action) {
  switch (action.type) {

    case 'COMPLETE_ONBOARDING': {
      const { studentName, avatarEmoji, batch, experienceLevel, gamerTag } = action.payload;
      const initials = studentName.trim().slice(0, 2).toUpperCase() || '??';
      return {
        ...state,
        onboardingDone:  true,
        studentName:     studentName.trim(),
        avatar:          initials,
        avatarEmoji,
        batch,
        experienceLevel,
        gamerTag:        gamerTag.trim(),
      };
    }

    case 'AWARD_CHALLENGE_XP': {
      return { ...state, xp: state.xp + (action.payload.xp || 0) };
    }

    case 'COMPLETE_CHALLENGE': {
      const { dayId, xpReward, badgeName } = action.payload;
      if (state.completedChallenges.includes(dayId)) return state;

      // ── Streak calculation ──
      const todayStr = new Date().toISOString().split('T')[0]; // 'YYYY-MM-DD'
      let newStreak = state.streak;
      if (!state.lastCompletedDate) {
        // First ever completion
        newStreak = 1;
      } else if (state.lastCompletedDate === todayStr) {
        // Already completed something today — keep streak
        newStreak = state.streak;
      } else {
        // Check if yesterday was the last completion
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];
        newStreak = state.lastCompletedDate === yesterdayStr
          ? state.streak + 1   // Consecutive day — increment
          : 1;                 // Missed a day — reset to 1
      }

      const nextDayId    = dayId + 1;
      const newUnlocked  = state.unlockedDays.includes(nextDayId)
        ? state.unlockedDays
        : [...state.unlockedDays, nextDayId];
      const newCompleted = state.completedDays.includes(dayId)
        ? state.completedDays
        : [...state.completedDays, dayId];
      const newBadges    = badgeName && !state.earnedBadges.includes(badgeName)
        ? [...state.earnedBadges, badgeName]
        : state.earnedBadges;

      return {
        ...state,
        xp:                  state.xp + xpReward,
        streak:              newStreak,
        lastCompletedDate:   todayStr,
        completedDays:       newCompleted,
        unlockedDays:        newUnlocked,
        earnedBadges:        newBadges,
        completedChallenges: [...state.completedChallenges, dayId],
      };
    }

    case 'SET_STUDENT_NAME':
      return {
        ...state,
        studentName: action.payload,
        avatar:      action.payload.slice(0, 2).toUpperCase(),
      };

    // Admin account — unlocks all days instantly for testing
    case 'ADMIN_UNLOCK_ALL':
      return {
        ...defaultState,
        onboardingDone:  true,
        studentName:     'Admin (Test Mode)',
        avatar:          'AD',
        avatarEmoji:     '🛡️',
        batch:           'ninjas',
        experienceLevel: 'experienced',
        gamerTag:        'admin123',
        xp:              9999,
        unlockedDays:    [1,2,3,4,5,6,7,8,9,10,11,12],
        completedDays:   [1,2,3,4,5,6,7,8,9,10,11],  // all unlocked, last one pending showcase
        earnedBadges:    [],
        completedChallenges: [],
      };

    // Reset to show onboarding / login page again
    case 'RESET_ACCOUNT':
      return { ...defaultState };

    case 'RESET':
      return { ...defaultState };

    default:
      return state;
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return defaultState;
    // Merge saved into defaultState so new fields always have fallbacks
    return { ...defaultState, ...JSON.parse(saved) };
  } catch {
    return defaultState;
  }
}

export const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [state, dispatch] = useReducer(progressReducer, undefined, loadState);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <ProgressContext.Provider value={{ state, dispatch }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
