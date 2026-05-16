export const GAMES_SHOWCASE = [
  { title: "Window Builder",     icon: "🪟", desc: "Open a window, draw shapes, and move things with the keyboard",  color: "#06b6d4", day: 9  },
  { title: "Flappy Bird",        icon: "🐦", desc: "Navigate through pipes using precise, rhythmic jumps",           color: "#ff6b35", day: 10 },
  { title: "Shooter Core",       icon: "🔫", desc: "WASD ship + bullets + enemy spawner — the core systems",          color: "#8b5cf6", day: 11 },
  { title: "Space Shooter",      icon: "🚀", desc: "Complete game: collision, HUD, start screen, game over + restart",  color: "#f59e0b", day: 12 },
  { title: "Coin Collector",     icon: "💰", desc: "Grab coins before the timer runs out",                       color: "#f59e0b", day: 2  },
  { title: "Rock Paper Scissors",icon: "✊", desc: "Battle the AI with strategy, logic and a bit of luck",       color: "#10b981", day: 4  },
  { title: "Meteor Dodge",       icon: "☄️", desc: "Dodge incoming meteors as they speed up over time",          color: "#8b5cf6", day: 8  },
];

// Fixed star field — deterministic so no re-render flicker
export const STARS = Array.from({ length: 90 }, (_, i) => ({
  x:       (i * 137.508) % 100,
  y:       (i * 79.33)   % 100,
  size:    (i % 3) + 1,
  delay:   (i * 0.37)    % 5,
  dur:     2 + (i % 4),
  opacity: 0.15 + (i % 6) * 0.08,
}));

export const SPACE_SHOOTER_FEATURES = [
  { d: 1,  feat: "Output",    icon: "🖨️" },
  { d: 2,  feat: "Variables", icon: "💎" },
  { d: 3,  feat: "Math",      icon: "📐" },
  { d: 4,  feat: "Logic",     icon: "🧠" },
  { d: 5,  feat: "Loops",     icon: "🔄" },
  { d: 6,  feat: "Functions", icon: "🧙" },
  { d: 7,  feat: "Lists",     icon: "📋" },
  { d: 8,  feat: "Random",    icon: "🎲" },
  { d: 9,  feat: "Window",    icon: "🪟" },
  { d: 10, feat: "Flappy",    icon: "🐦" },
  { d: 11, feat: "Shooter",   icon: "🔫" },
  { d: 12, feat: "LEGEND!",   icon: "🏆" },
];
