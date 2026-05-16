import { useState, useEffect } from "react";

// ================================================================
// DATA LAYER
// ================================================================
const DAYS_DATA = [
  {
    id: 1, unlocked: true, completed: true, color: "#00f5ff",
    title: "How Computers Understand Humans", subtitle: "Input & Output",
    concepts: ["print()", "input()", "Variables", "Comments"],
    project: "Robot Maze", xp: 150, badge: "First Program", badgeIcon: "🚀",
    story: "Welcome, Code Recruit! Today you take your first step into Python — the language that powers games, robots, and AI. You will make the computer listen to YOU. Every legend starts with a single line of code.",
    snippets: [
      { title: "Say Hello to the World", code: `print("Hello, Game World!")\nprint("I am learning Python!")\nprint("Let the adventure begin!")`, desc: "The print() function displays text on screen. Every game has a screen — this is yours." },
      { title: "Listen to the Player", code: `name = input("Enter your hero name: ")\nprint("Welcome,", name, "!")\nprint("Your quest begins NOW.")`, desc: "input() collects what the player types. Now your program talks back!" },
      { title: "Add Comments", code: `# This is a comment - Python ignores it!\n# Use comments to explain your thinking\n\nprint("Score: 0")    # Starting score\nprint("Lives: 3")    # Starting lives`, desc: "Comments are notes for yourself. Professional coders write them constantly." },
    ],
    challenge: "Change the welcome message to include your own name and add your favourite emoji at the end!"
  },
  {
    id: 2, unlocked: true, completed: true, color: "#8b5cf6",
    title: "Variables & The Power of Names", subtitle: "Data Storage",
    concepts: ["Variables", "Strings", "Integers", "f-strings"],
    project: "Coin Collector", xp: 200, badge: "Variable Explorer", badgeIcon: "💎",
    story: "Every great game stores data. Player health, coins, speed, score — it is ALL variables! Without variables, games forget everything the instant it happens. You are about to become a data wizard.",
    snippets: [
      { title: "Player Stats", code: `player_name = "Alex"\nhealth = 100\ncoins = 0\nspeed = 5\n\nprint(f"Player: {player_name}")\nprint(f"Health: {health} | Coins: {coins} | Speed: {speed}")`, desc: "Variables store your game's data. Name them clearly so you always know what they hold!" },
      { title: "Collect Coins", code: `coins = 0\nprint(f"Start: {coins} coins")\n\ncoins = coins + 10\nprint(f"Coin collected! {coins} coins")\n\ncoins += 5   # Shortcut for coins = coins + 5\nprint(f"Another one! {coins} coins total!")`, desc: "+= is the power shortcut. Every game uses it constantly." },
    ],
    challenge: "Create a 'score' variable, add 50 points three times using +=, then print the final score with an f-string!"
  },
  {
    id: 3, unlocked: true, completed: false, color: "#ff6b35",
    title: "Operations & Typecasting", subtitle: "Math Magic",
    concepts: ["Arithmetic operators", "int() / float()", "Math module", "Order of operations"],
    project: "Health Battle Simulator", xp: 220, badge: "Math Wizard", badgeIcon: "⚡",
    story: "Games calculate EVERYTHING. Damage dealt, distance traveled, score multipliers, enemy health. Today you teach Python to crunch numbers like a real game engine. Math is the secret power behind every game.",
    snippets: [
      { title: "Battle Calculation", code: `attack = 35\ndefense = 12\ncritical_hit = True\n\ndamage = attack - defense\n\nif critical_hit:\n    damage = damage * 2\n    print("CRITICAL HIT!")\n\nprint(f"Damage dealt: {damage}")`, desc: "Math operations power your game's entire combat system." },
      { title: "Type Conversion", code: `# input() always gives TEXT, not numbers!\nlevel_str = input("Enter your level (1-10): ")\nlevel = int(level_str)   # Convert text to number!\n\nbonus_xp = level * 150\nhealth_bonus = level * 20\n\nprint(f"Level {level} bonuses:")\nprint(f"  XP: +{bonus_xp}")\nprint(f"  Health: +{health_bonus}")`, desc: "Always convert input() with int() or float() before doing math!" },
    ],
    challenge: "Calculate how many coins you need to reach Level 5 if each level costs level_number × 200 coins!"
  },
  {
    id: 4, unlocked: false, completed: false, color: "#10b981",
    title: "Conditions: Games That Think", subtitle: "Decision Making",
    concepts: ["if / elif / else", "Comparison operators", "Boolean logic", "Nested conditions"],
    project: "Rock Paper Scissors", xp: 250, badge: "Condition Commander", badgeIcon: "🧠",
    story: "Today we teach your game to THINK. Should the enemy attack or flee? Did the player win or lose? Did their health drop to zero? Conditions are the brain of every game ever made.",
    snippets: [], challenge: "Add a 'Lizard' and 'Spock' option to Rock Paper Scissors (look up the rules from Big Bang Theory)!"
  },
  {
    id: 5, unlocked: false, completed: false, color: "#f59e0b",
    title: "Loops: Infinite Power", subtitle: "Repetition",
    concepts: ["for loops", "while loops", "range()", "break / continue"],
    project: "Endless Falling Blocks", xp: 275, badge: "Loop Master", badgeIcon: "🔄",
    story: "Every game runs in a LOOP. The screen redraws 60 times per second. Enemies spawn in loops. Players keep playing until they die — and that is a while loop! Today you master the engine of all games.",
    snippets: [], challenge: "Make 10 blocks fall from the sky, speeding up by 1 each time, and print the final speed!"
  },
  {
    id: 6, unlocked: false, completed: false, color: "#ec4899",
    title: "Functions: Your Custom Powers", subtitle: "Code Superpowers",
    concepts: ["def keyword", "Parameters", "Return values", "Default arguments"],
    project: "Reaction Speed Game", xp: 300, badge: "Function Wizard", badgeIcon: "🧙",
    story: "Functions are your reusable superpowers. Define once, call everywhere. Want to calculate damage? Call calculate_damage(). Spawn an enemy? Call spawn_enemy(). Professional developers think in functions.",
    snippets: [], challenge: "Create a function called calculate_damage(attack, defense, is_critical) that returns the final damage!"
  },
  {
    id: 7, unlocked: false, completed: false, color: "#00f5ff",
    title: "Lists: Armies of Data", subtitle: "Collections",
    concepts: ["List creation", "Indexing", "append() / remove()", "Looping through lists"],
    project: "Snake Lite", xp: 325, badge: "Array Warrior", badgeIcon: "🐍",
    story: "A Snake game IS a list of positions. High scores ARE a list. Enemy waves ARE a list. Power-ups ARE a list. Lists are the backbone of every game ever made. Today you command armies of data.",
    snippets: [], challenge: "Store 5 enemy names in a list, loop through them, and print each with their number (Enemy 1: Goblin, etc.)!"
  },
  {
    id: 8, unlocked: false, completed: false, color: "#8b5cf6",
    title: "Random: Chaos is Power", subtitle: "Randomness",
    concepts: ["random module", "randint()", "choice()", "shuffle()", "seed()"],
    project: "Meteor Dodge", xp: 350, badge: "Randomness Ninja", badgeIcon: "🎲",
    story: "What makes games ADDICTIVE? Surprise! Random meteor positions, random item drops, random enemy behavior, random loot. Today you add the element of chaos that keeps players hooked forever.",
    snippets: [], challenge: "Spawn 5 meteors at random X positions (0–800) and random speeds (3–10), print each one!"
  },
  {
    id: 9, unlocked: false, completed: false, color: "#ff6b35",
    title: "Flappy Bird: Full Build", subtitle: "Game Complete",
    concepts: ["Pygame setup", "Physics & gravity", "Collision detection", "Score system", "Game loop"],
    project: "Flappy Bird", xp: 500, badge: "Arcade Creator", badgeIcon: "🐦",
    story: "THE DAY HAS COME. You have the skills. The knowledge. The power. Variables, conditions, loops, functions, lists, randomness — all leading to THIS. Today we build Flappy Bird from scratch using Pygame.",
    snippets: [], challenge: "Add a high score display that saves the best score across multiple games!"
  },
  {
    id: 10, unlocked: false, completed: false, color: "#f59e0b",
    title: "Final Showcase Day", subtitle: "Python Legend",
    concepts: ["Game polish", "Sound effects", "Menus", "Presentation skills", "Portfolio"],
    project: "Space Shooter Complete", xp: 1000, badge: "Python Legend", badgeIcon: "🏆",
    story: "You made it, LEGEND. Today you present your masterpiece to parents, friends, and the entire audience. Every skill you earned. Every badge you collected. Every line of code you wrote. It all led to this moment.",
    snippets: [], challenge: "Present your game live and explain your favourite feature that you built completely from scratch!"
  },
];

const BADGES_ALL = [
  { name: "First Program", icon: "🚀", desc: "Wrote your very first Python program", earned: true, color: "#00f5ff", day: 1 },
  { name: "Variable Explorer", icon: "💎", desc: "Mastered variables and data storage", earned: true, color: "#8b5cf6", day: 2 },
  { name: "Math Wizard", icon: "⚡", desc: "Conquered operations and typecasting", earned: false, color: "#ff6b35", day: 3 },
  { name: "Condition Commander", icon: "🧠", desc: "Built decision-making logic with if/else", earned: false, color: "#10b981", day: 4 },
  { name: "Loop Master", icon: "🔄", desc: "Harnessed the infinite power of loops", earned: false, color: "#f59e0b", day: 5 },
  { name: "Function Wizard", icon: "🧙", desc: "Created your own reusable superpowers", earned: false, color: "#ec4899", day: 6 },
  { name: "Array Warrior", icon: "🐍", desc: "Commanded lists and data collections", earned: false, color: "#00f5ff", day: 7 },
  { name: "Randomness Ninja", icon: "🎲", desc: "Mastered chaos and unpredictability", earned: false, color: "#8b5cf6", day: 8 },
  { name: "Arcade Creator", icon: "🐦", desc: "Built a complete Flappy Bird game", earned: false, color: "#ff6b35", day: 9 },
  { name: "Python Legend", icon: "🏆", desc: "Completed the full 10-day journey", earned: false, color: "#f59e0b", day: 10 },
];

const RANKS = [
  { name: "Code Recruit", minXP: 0, icon: "🔰", color: "#94a3b8" },
  { name: "Python Explorer", minXP: 300, icon: "🧭", color: "#10b981" },
  { name: "Logic Warrior", minXP: 650, icon: "⚔️", color: "#00f5ff" },
  { name: "Loop Master", minXP: 1100, icon: "🔄", color: "#8b5cf6" },
  { name: "Game Architect", minXP: 1600, icon: "🏗️", color: "#ff6b35" },
  { name: "Python Ninja", minXP: 2200, icon: "🥷", color: "#f59e0b" },
];

const GAMES_SHOWCASE = [
  { title: "Flappy Bird", icon: "🐦", desc: "Navigate through pipes using precise, rhythmic jumps", color: "#ff6b35", day: 9 },
  { title: "Space Shooter", icon: "🚀", desc: "Blast enemies in deep space with bullets and shields", color: "#00f5ff", day: 10 },
  { title: "Coin Collector", icon: "💰", desc: "Grab coins before the timer runs out", color: "#f59e0b", day: 2 },
  { title: "Rock Paper Scissors", icon: "✊", desc: "Battle the AI with strategy, logic and a bit of luck", color: "#10b981", day: 4 },
  { title: "Meteor Dodge", icon: "☄️", desc: "Dodge incoming meteors as they speed up over time", color: "#8b5cf6", day: 8 },
];

const STUDENT = { name: "Alex Chen", avatar: "AC", xp: 650, streak: 3, totalBadges: 2 };

// Fixed star field positions (deterministic)
const STARS = Array.from({ length: 90 }, (_, i) => ({
  x: (i * 137.508) % 100,
  y: (i * 79.33) % 100,
  size: (i % 3) + 1,
  delay: (i * 0.37) % 5,
  dur: 2 + (i % 4),
  opacity: 0.15 + (i % 6) * 0.08,
}));

// ================================================================
// UTILITIES
// ================================================================
function getRankInfo(xp) {
  let current = RANKS[0];
  for (const r of RANKS) { if (xp >= r.minXP) current = r; }
  const nextIdx = RANKS.indexOf(current) + 1;
  const next = RANKS[nextIdx] || null;
  const min = current.minXP;
  const max = next ? next.minXP : current.minXP + 500;
  const pct = Math.min(100, Math.round(((xp - min) / (max - min)) * 100));
  return { current, next, pct };
}

// ================================================================
// COMPONENTS
// ================================================================

function StarField() {
  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {STARS.map((s, i) => (
        <div key={i} style={{
          position: "absolute", borderRadius: "50%", background: "#fff",
          width: s.size + "px", height: s.size + "px",
          left: s.x + "%", top: s.y + "%", opacity: s.opacity,
          animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", top: "5%", right: "0%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)", bottom: "15%", left: "5%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%)", top: "50%", left: "40%", pointerEvents: "none" }} />
    </div>
  );
}

function Navbar({ view, setView, setSelectedDay }) {
  const navItems = [
    { id: "landing", label: "Home", icon: "🏠" },
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "lessons", label: "Lessons", icon: "📚" },
    { id: "badges", label: "Badges", icon: "🏅" },
  ];
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 200,
      background: "rgba(4,8,15,0.88)", backdropFilter: "blur(24px)",
      borderBottom: "1px solid rgba(255,255,255,0.07)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => { setView("landing"); setSelectedDay(null); }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #00f5ff, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, boxShadow: "0 0 20px rgba(0,245,255,0.3)" }}>🐍</div>
          <div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 900, color: "#00f5ff", fontSize: 15, letterSpacing: 1, lineHeight: 1 }}>ASHRI Tech</div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, letterSpacing: 2 }}>GAME DEV CAMP</div>
          </div>
        </div>
        {/* Nav */}
        <div style={{ display: "flex", gap: 2 }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => { setView(item.id); setSelectedDay(null); }} style={{
              padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 700, fontFamily: "inherit",
              background: view === item.id ? "rgba(0,245,255,0.12)" : "transparent",
              color: view === item.id ? "#00f5ff" : "rgba(255,255,255,0.5)",
              transition: "all 0.2s",
              borderBottom: view === item.id ? "2px solid #00f5ff" : "2px solid transparent",
            }}>
              {item.icon} {item.label}
            </button>
          ))}
        </div>
        {/* User pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)", borderRadius: 8, padding: "6px 14px", color: "#f59e0b", fontSize: 13, fontWeight: 800 }}>
            ⚡ {STUDENT.xp} XP
          </div>
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #00f5ff, #7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#000", fontWeight: 900, fontSize: 13, boxShadow: "0 0 16px rgba(0,245,255,0.4)", cursor: "pointer" }} onClick={() => setView("dashboard")}>
            {STUDENT.avatar}
          </div>
        </div>
      </div>
    </nav>
  );
}

function XPBar({ xp, showDetails = false }) {
  const { current, next, pct } = getRankInfo(xp);
  return (
    <div>
      {showDetails && (
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, alignItems: "center" }}>
          <span style={{ color: current.color, fontWeight: 700, fontSize: 13 }}>{current.icon} {current.name}</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12 }}>{xp} / {next ? next.minXP : "MAX"} XP</span>
        </div>
      )}
      <div style={{ height: 8, background: "rgba(255,255,255,0.08)", borderRadius: 99, overflow: "hidden", position: "relative" }}>
        <div style={{
          height: "100%", borderRadius: 99,
          width: pct + "%",
          background: `linear-gradient(90deg, ${current.color}, ${next?.color || "#fff"})`,
          boxShadow: `0 0 14px ${current.color}90`,
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
        }} />
      </div>
      {showDetails && next && (
        <div style={{ textAlign: "right", marginTop: 4, color: "rgba(255,255,255,0.35)", fontSize: 11 }}>
          {next.minXP - xp} XP to {next.icon} {next.name}
        </div>
      )}
    </div>
  );
}

function GlowBadge({ badge, size = "normal" }) {
  const sm = size === "small";
  return (
    <div style={{
      position: "relative", textAlign: "center",
      padding: sm ? "18px 12px" : "28px 18px",
      borderRadius: 16,
      background: badge.earned
        ? `radial-gradient(ellipse at 50% 0%, ${badge.color}25, rgba(255,255,255,0.02))`
        : "rgba(255,255,255,0.02)",
      border: `1px solid ${badge.earned ? badge.color + "50" : "rgba(255,255,255,0.06)"}`,
      filter: badge.earned ? "none" : "grayscale(1)",
      opacity: badge.earned ? 1 : 0.45,
      boxShadow: badge.earned ? `0 0 30px ${badge.color}20` : "none",
      animation: badge.earned ? `badgepulse 4s ease-in-out infinite` : "none",
      cursor: "default", transition: "transform 0.2s",
    }}
    onMouseEnter={e => badge.earned && (e.currentTarget.style.transform = "scale(1.05)")}
    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
    >
      {badge.earned && (
        <div style={{
          position: "absolute", top: 8, right: 8,
          background: badge.color, borderRadius: 99, padding: "2px 7px",
          fontSize: 9, fontWeight: 900, color: "#000", letterSpacing: 1,
        }}>✓ EARNED</div>
      )}
      <div style={{ fontSize: sm ? 34 : 52, marginBottom: 10, display: "block" }}>{badge.icon}</div>
      <div style={{ color: badge.earned ? "#fff" : "rgba(255,255,255,0.3)", fontWeight: 800, fontSize: sm ? 11 : 13, marginBottom: 4 }}>{badge.name}</div>
      {!sm && <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, lineHeight: 1.4 }}>{badge.desc}</div>}
      {!sm && badge.earned && <div style={{ marginTop: 10, color: badge.color, fontSize: 11, fontWeight: 700 }}>Day {badge.day}</div>}
      {!badge.earned && <div style={{ marginTop: 6, fontSize: 20 }}>🔒</div>}
    </div>
  );
}

function DayCard({ day, onClick }) {
  const locked = !day.unlocked;
  const done = day.completed;
  const active = day.unlocked && !day.completed;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => !locked && onClick(day)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 18, padding: 22, position: "relative", overflow: "hidden",
        background: locked
          ? "rgba(255,255,255,0.02)"
          : `linear-gradient(135deg, ${day.color}12, rgba(255,255,255,0.03))`,
        border: `1px solid ${done ? day.color + "55" : active ? day.color + "35" : "rgba(255,255,255,0.06)"}`,
        cursor: locked ? "default" : "pointer",
        opacity: locked ? 0.5 : 1,
        transform: hovered && !locked ? "translateY(-6px)" : "none",
        boxShadow: hovered && !locked ? `0 16px 40px ${day.color}20` : done ? `0 0 20px ${day.color}15` : "none",
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      {done && (
        <div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderTop: `50px solid ${day.color}40`, borderLeft: "50px solid transparent" }} />
      )}
      {done && <div style={{ position: "absolute", top: 8, right: 6, fontSize: 14 }}>✓</div>}

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
          background: locked ? "rgba(255,255,255,0.04)" : `${day.color}20`,
          border: `1px solid ${locked ? "rgba(255,255,255,0.08)" : day.color + "45"}`,
          color: locked ? "rgba(255,255,255,0.2)" : day.color,
          fontWeight: 900, fontSize: 15, fontFamily: "'Orbitron', monospace",
        }}>{day.id}</div>
        <div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>Day {day.id}</div>
          <div style={{ color: locked ? "rgba(255,255,255,0.25)" : day.color, fontSize: 11, fontWeight: 700 }}>{day.subtitle}</div>
        </div>
        <div style={{ marginLeft: "auto", fontSize: 18 }}>
          {done ? "✅" : active ? "🔓" : "🔒"}
        </div>
      </div>

      <div style={{ color: locked ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: 14, marginBottom: 8, lineHeight: 1.35 }}>
        {day.title}
      </div>
      <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginBottom: 12 }}>🎮 {day.project}</div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
        {day.concepts.slice(0, 3).map((c, i) => (
          <span key={i} style={{
            background: locked ? "rgba(255,255,255,0.03)" : `${day.color}12`,
            color: locked ? "rgba(255,255,255,0.2)" : day.color,
            border: `1px solid ${locked ? "rgba(255,255,255,0.05)" : day.color + "30"}`,
            borderRadius: 99, padding: "3px 9px", fontSize: 10, fontWeight: 700,
          }}>{c}</span>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: locked ? "rgba(255,255,255,0.15)" : "#f59e0b", fontSize: 12, fontWeight: 800 }}>⚡ +{day.xp} XP</div>
        <div style={{ fontSize: 18 }}>{day.badgeIcon}</div>
      </div>
    </div>
  );
}

function CodeSnippet({ snippet }) {
  const [open, setOpen] = useState(true);

  const highlight = (code) => code.split('\n').map((line, i) => {
    const escaped = line
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const colored = escaped
      .replace(/(print|input|int|str|float|bool|len|range|list|dict|def|return|if|elif|else|for|while|import|from|True|False|None|and|or|not|in|break|continue|pass)\b/g, '<span style="color:#ff7b72;font-weight:700">$1</span>')
      .replace(/"([^"]*)"/g, '<span style="color:#a5d6ff">"$1"</span>')
      .replace(/'([^']*)'/g, "<span style=\"color:#a5d6ff\">'$1'</span>")
      .replace(/(#[^\n]*)/g, '<span style="color:#6a737d;font-style:italic">$1</span>')
      .replace(/\b(\d+)\b/g, '<span style="color:#79c0ff">$1</span>');
    return <div key={i} style={{ minHeight: "1.5em" }} dangerouslySetInnerHTML={{ __html: colored || "&nbsp;" }} />;
  });

  return (
    <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,0.09)", marginBottom: 18 }}>
      <div style={{ background: "rgba(255,255,255,0.05)", padding: "10px 18px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: open ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
        <div style={{ color: "#00f5ff", fontWeight: 700, fontSize: 14 }}>💻 {snippet.title}</div>
        <button onClick={() => setOpen(!open)} style={{ background: "transparent", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 12, padding: "4px 10px" }}>
          {open ? "▲" : "▼ Show"}
        </button>
      </div>
      {open && <>
        <div style={{ background: "#0d1117", padding: "18px 20px", fontFamily: "'Courier New', monospace", fontSize: 13, lineHeight: 1.65, color: "#e6edf3", overflowX: "auto" }}>
          {highlight(snippet.code)}
        </div>
        <div style={{ background: "rgba(0,245,255,0.04)", padding: "10px 18px", color: "rgba(255,255,255,0.55)", fontSize: 13, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          💡 {snippet.desc}
        </div>
      </>}
    </div>
  );
}

function SectionLabel({ color, children }) {
  return (
    <div style={{ color: color || "#00f5ff", fontSize: 11, fontWeight: 800, letterSpacing: 3, textTransform: "uppercase", marginBottom: 10 }}>
      {children}
    </div>
  );
}

// ================================================================
// VIEWS
// ================================================================

function LandingPage({ setView, setSelectedDay }) {
  const floaters = [
    { e: "🚀", x: "7%", y: "14%", d: "0s", s: "38px" },
    { e: "⭐", x: "87%", y: "18%", d: "0.6s", s: "30px" },
    { e: "💰", x: "4%", y: "62%", d: "1.1s", s: "34px" },
    { e: "🐍", x: "91%", y: "55%", d: "1.7s", s: "36px" },
    { e: "🎮", x: "14%", y: "78%", d: "0.8s", s: "32px" },
    { e: "⚡", x: "80%", y: "72%", d: "1.4s", s: "28px" },
    { e: "☄️", x: "48%", y: "4%", d: "0.3s", s: "26px" },
    { e: "🏆", x: "73%", y: "88%", d: "2s", s: "30px" },
  ];

  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      {/* ── HERO ── */}
      <section style={{ minHeight: "92vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center", position: "relative" }}>
        {floaters.map((f, i) => (
          <div key={i} style={{ position: "absolute", left: f.x, top: f.y, fontSize: f.s, animation: `float 4s ease-in-out ${f.d} infinite`, pointerEvents: "none", userSelect: "none", opacity: 0.65 }}>{f.e}</div>
        ))}

        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.25)", borderRadius: 99, padding: "7px 22px", marginBottom: 28 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00f5ff", display: "inline-block", boxShadow: "0 0 10px #00f5ff", animation: "blink 1.5s ease-in-out infinite" }} />
          <span style={{ color: "#00f5ff", fontSize: 12, fontWeight: 800, letterSpacing: 2, textTransform: "uppercase" }}>ASHRI Tech • Summer Camp 2025</span>
        </div>

        <h1 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(34px, 6vw, 74px)", fontWeight: 900, lineHeight: 1.08, marginBottom: 24, color: "#fff", maxWidth: 900 }}>
          Build Games with{" "}
          <span style={{ background: "linear-gradient(90deg, #00f5ff 0%, #7c3aed 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Python</span>
          {" "}in{" "}
          <span style={{ color: "#f59e0b", textShadow: "0 0 30px rgba(245,158,11,0.5)" }}>10 Days</span>
        </h1>

        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "rgba(255,255,255,0.6)", maxWidth: 580, lineHeight: 1.65, marginBottom: 44 }}>
          Learn Python through Space Shooters, Flappy Bird, and Mini Arcade Games. Level up every day. Earn badges. Ship real games from scratch.
        </p>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
          <button onClick={() => setView("dashboard")} style={{
            padding: "16px 44px", borderRadius: 12, border: "none", cursor: "pointer",
            background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
            color: "#000", fontWeight: 900, fontSize: 16, fontFamily: "inherit",
            boxShadow: "0 0 40px rgba(0,245,255,0.35)",
            animation: "heroglowbtn 2s ease-in-out infinite",
            letterSpacing: 0.5,
          }}>🚀 Start Journey</button>
          <button onClick={() => setView("lessons")} style={{
            padding: "16px 44px", borderRadius: 12, cursor: "pointer",
            background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.85)", fontWeight: 700,
            fontSize: 16, fontFamily: "inherit", border: "1px solid rgba(255,255,255,0.18)", letterSpacing: 0.5,
          }}>📚 View Curriculum</button>
        </div>

        <div style={{ display: "flex", gap: 48, marginTop: 64, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { v: "10", l: "Days" }, { v: "5+", l: "Games Built" }, { v: "30+", l: "Skills" }, { v: "10", l: "Badges" }
          ].map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 36, fontWeight: 900, color: "#00f5ff", textShadow: "0 0 20px rgba(0,245,255,0.4)" }}>{s.v}</div>
              <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, marginTop: 4, fontWeight: 600 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── GAME SHOWCASE ── */}
      <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel color="#00f5ff">WHAT YOU'LL BUILD</SectionLabel>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(26px, 4vw, 42px)", color: "#fff", fontWeight: 800 }}>5 Complete Games</h2>
          <p style={{ color: "rgba(255,255,255,0.45)", marginTop: 10, fontSize: 15 }}>Every game ships in a single day. No fluff. No tutorials. Real code.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: 20 }}>
          {GAMES_SHOWCASE.map((g, i) => (
            <div key={i}
              style={{ borderRadius: 18, padding: "30px 20px", textAlign: "center", background: `radial-gradient(ellipse at 50% 0%, ${g.color}22, rgba(255,255,255,0.02))`, border: `1px solid ${g.color}30`, transition: "all 0.3s", cursor: "default" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = `0 24px 50px ${g.color}25`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontSize: 52, marginBottom: 16, animation: "float 4s ease-in-out infinite", display: "block" }}>{g.icon}</div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 8 }}>{g.title}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}>{g.desc}</div>
              <div style={{ color: g.color, fontSize: 11, fontWeight: 800, letterSpacing: 1, background: `${g.color}15`, border: `1px solid ${g.color}30`, borderRadius: 99, display: "inline-block", padding: "4px 14px" }}>DAY {g.day}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ROADMAP ── */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel color="#8b5cf6">THE JOURNEY</SectionLabel>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(26px, 4vw, 42px)", color: "#fff", fontWeight: 800 }}>10-Day Roadmap</h2>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "50%", top: 20, bottom: 20, width: 2, background: "linear-gradient(to bottom, #00f5ff, #7c3aed, #ff6b35)", transform: "translateX(-50%)", opacity: 0.25 }} />
          {DAYS_DATA.map((day, i) => (
            <div key={day.id} style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 20, flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}>
              <div style={{ flex: 1, display: "flex", justifyContent: i % 2 === 0 ? "flex-end" : "flex-start" }}>
                <div style={{
                  borderRadius: 12, padding: "14px 20px", maxWidth: 320,
                  background: day.completed ? `${day.color}12` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${day.completed ? day.color + "35" : "rgba(255,255,255,0.07)"}`,
                  textAlign: i % 2 === 0 ? "right" : "left",
                }}>
                  <div style={{ color: day.color, fontWeight: 700, fontSize: 12, marginBottom: 4 }}>Day {day.id} · {day.subtitle}</div>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{day.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12 }}>🎮 {day.project}</div>
                </div>
              </div>
              <div style={{
                width: 36, height: 36, borderRadius: "50%", flexShrink: 0, zIndex: 1,
                background: day.completed ? day.color : "rgba(255,255,255,0.06)",
                border: `2px solid ${day.completed ? day.color : "rgba(255,255,255,0.15)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: day.completed ? `0 0 20px ${day.color}70` : "none",
                color: day.completed ? "#000" : "rgba(255,255,255,0.4)", fontSize: 14, fontWeight: 900,
              }}>{day.completed ? "✓" : day.id}</div>
              <div style={{ flex: 1 }} />
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY GAMES ── */}
      <section style={{ padding: "80px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel color="#10b981">THE SCIENCE</SectionLabel>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(26px, 4vw, 42px)", color: "#fff", fontWeight: 800 }}>Why Learn Through Games?</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 22 }}>
          {[
            { icon: "🎯", title: "Instant Feedback", desc: "See your code come alive on screen immediately. Bugs become puzzles, not problems.", color: "#00f5ff" },
            { icon: "🧠", title: "Deeper Retention", desc: "When you build something you are proud of, the concepts stick 3× longer.", color: "#8b5cf6" },
            { icon: "🚀", title: "Real Deliverables", desc: "Every single day you ship a complete mini-game. Your portfolio grows daily.", color: "#ff6b35" },
            { icon: "🏆", title: "Gamified Progress", desc: "Earn XP, unlock badges, level up your rank. Learning actually feels like winning.", color: "#f59e0b" },
          ].map((item, i) => (
            <div key={i}
              style={{ borderRadius: 18, padding: 28, background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = item.color + "45"; e.currentTarget.style.background = `${item.color}08`; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.background = "rgba(255,255,255,0.025)"; e.currentTarget.style.transform = "none"; }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
              <div style={{ color: "#fff", fontWeight: 800, fontSize: 16, marginBottom: 10 }}>{item.title}</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── RANK LADDER ── */}
      <section style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <SectionLabel color="#f59e0b">YOUR DESTINY</SectionLabel>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(26px, 4vw, 42px)", color: "#fff", fontWeight: 800 }}>Rank Up Your Skills</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 16 }}>
          {RANKS.map((rank, i) => (
            <div key={i} style={{
              borderRadius: 14, padding: "20px 14px", textAlign: "center",
              background: `${rank.color}10`,
              border: `1px solid ${rank.color}30`,
              opacity: i <= 2 ? 1 : 0.6,
            }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>{rank.icon}</div>
              <div style={{ color: rank.color, fontWeight: 800, fontSize: 12, marginBottom: 4 }}>{rank.name}</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11 }}>{rank.minXP}+ XP</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "80px 24px 100px", textAlign: "center" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "64px 40px", borderRadius: 28, background: "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(124,58,237,0.1))", border: "1px solid rgba(0,245,255,0.2)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(0,245,255,0.1) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div style={{ fontSize: 56, marginBottom: 20, animation: "float 3s ease-in-out infinite" }}>🏆</div>
          <h2 style={{ fontFamily: "'Orbitron', monospace", fontSize: 30, color: "#fff", fontWeight: 900, marginBottom: 14, position: "relative" }}>Ready to Become a Python Legend?</h2>
          <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: 36, fontSize: 16, lineHeight: 1.6, position: "relative" }}>Join the 10-day adventure. Build games you will be proud to show your friends and family.</p>
          <button onClick={() => setView("dashboard")} style={{
            padding: "18px 56px", borderRadius: 14, border: "none", cursor: "pointer",
            background: "linear-gradient(135deg, #00f5ff, #7c3aed)",
            color: "#000", fontWeight: 900, fontSize: 18, fontFamily: "inherit",
            boxShadow: "0 0 50px rgba(0,245,255,0.4)", position: "relative",
          }}>🚀 Begin Your Quest</button>
        </div>
      </section>
    </div>
  );
}

function Dashboard({ setView, setSelectedDay }) {
  const { current } = getRankInfo(STUDENT.xp);
  const completedDays = DAYS_DATA.filter(d => d.completed).length;
  const currentDay = DAYS_DATA.find(d => d.unlocked && !d.completed);

  const spaceFeatures = [
    { d: 1, feat: "Window", icon: "🖥️" }, { d: 2, feat: "Player", icon: "🚀" },
    { d: 3, feat: "Math", icon: "📐" }, { d: 4, feat: "Bullets", icon: "💥" },
    { d: 5, feat: "Enemies", icon: "👾" }, { d: 6, feat: "Powers", icon: "⚙️" },
    { d: 7, feat: "Waves", icon: "🌊" }, { d: 8, feat: "Random", icon: "🎲" },
    { d: 9, feat: "Score", icon: "🏆" }, { d: 10, feat: "Done!", icon: "🎮" },
  ];

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ marginBottom: 36 }}>
        <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, marginBottom: 4 }}>Welcome back, hero 👋</div>
        <h1 style={{ fontFamily: "'Orbitron', monospace", fontSize: 30, color: "#fff", fontWeight: 900 }}>Player Profile</h1>
      </div>

      {/* Profile + Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "300px 1fr", gap: 22, marginBottom: 28 }}>
        {/* Profile Card */}
        <div style={{ borderRadius: 22, padding: "32px 24px", background: `linear-gradient(160deg, ${current.color}18, rgba(255,255,255,0.02))`, border: `1px solid ${current.color}35`, textAlign: "center" }}>
          <div style={{ width: 84, height: 84, borderRadius: "50%", margin: "0 auto 16px", background: `linear-gradient(135deg, ${current.color}, #7c3aed)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 900, color: "#000", boxShadow: `0 0 35px ${current.color}60` }}>
            {STUDENT.avatar}
          </div>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 22, marginBottom: 4 }}>{STUDENT.name}</div>
          <div style={{ color: current.color, fontWeight: 800, fontSize: 14, marginBottom: 6 }}>{current.icon} {current.name}</div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginBottom: 22 }}>Code Adventurer · Karachi, PK</div>
          <XPBar xp={STUDENT.xp} showDetails />
          <div style={{ display: "flex", justifyContent: "center", gap: 28, marginTop: 24 }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#f59e0b", fontWeight: 900, fontSize: 26 }}>🔥{STUDENT.streak}</div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>Day Streak</div>
            </div>
            <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "#00f5ff", fontWeight: 900, fontSize: 26 }}>🏅{STUDENT.totalBadges}</div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 11 }}>Badges</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 16 }}>
          {[
            { label: "Total XP Earned", value: STUDENT.xp, suffix: " XP", icon: "⚡", color: "#00f5ff" },
            { label: "Days Completed", value: completedDays, suffix: "/10", icon: "📅", color: "#10b981" },
            { label: "Current Rank", value: current.name, suffix: "", icon: current.icon, color: current.color, small: true },
            { label: "Badges Collected", value: STUDENT.totalBadges, suffix: "/10", icon: "🏅", color: "#f59e0b" },
          ].map((s, i) => (
            <div key={i} style={{ borderRadius: 18, padding: "24px 22px", background: `${s.color}0e`, border: `1px solid ${s.color}22` }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ color: s.color, fontSize: s.small ? 18 : 30, fontWeight: 900, fontFamily: s.small ? "inherit" : "'Orbitron', monospace" }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Mission */}
      {currentDay && (
        <div style={{ borderRadius: 20, padding: "26px 30px", background: `linear-gradient(135deg, ${currentDay.color}15, rgba(255,255,255,0.02))`, border: `1px solid ${currentDay.color}45`, marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ color: currentDay.color, fontSize: 11, fontWeight: 800, letterSpacing: 2, marginBottom: 8 }}>🎯 ACTIVE MISSION</div>
            <div style={{ color: "#fff", fontWeight: 900, fontSize: 22, marginBottom: 6 }}>Day {currentDay.id}: {currentDay.title}</div>
            <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <span>🎮 {currentDay.project}</span>
              <span>⚡ +{currentDay.xp} XP</span>
              <span>{currentDay.badgeIcon} {currentDay.badge}</span>
            </div>
          </div>
          <button onClick={() => { setSelectedDay(currentDay); setView("day"); }} style={{
            padding: "14px 32px", borderRadius: 12, border: "none", cursor: "pointer",
            background: `linear-gradient(135deg, ${currentDay.color}, ${currentDay.color}99)`,
            color: "#000", fontWeight: 900, fontSize: 15, fontFamily: "inherit", whiteSpace: "nowrap",
          }}>Continue Mission →</button>
        </div>
      )}

      {/* Space Shooter Tracker */}
      <div style={{ borderRadius: 20, padding: "24px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 24 }}>
        <div style={{ color: "#00f5ff", fontSize: 11, fontWeight: 800, letterSpacing: 2, marginBottom: 16 }}>🚀 SPACE SHOOTER: EVOLUTION TRACKER</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-end" }}>
          {spaceFeatures.map((item, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                background: i < completedDays ? "rgba(0,245,255,0.15)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${i < completedDays ? "rgba(0,245,255,0.45)" : "rgba(255,255,255,0.08)"}`,
                boxShadow: i < completedDays ? "0 0 14px rgba(0,245,255,0.25)" : "none",
              }}>{item.icon}</div>
              <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 10 }}>{item.feat}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, height: 4, background: "rgba(255,255,255,0.05)", borderRadius: 99, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${completedDays * 10}%`, background: "linear-gradient(90deg, #00f5ff, #7c3aed)", borderRadius: 99, boxShadow: "0 0 10px rgba(0,245,255,0.4)", transition: "width 1s" }} />
        </div>
      </div>

      {/* Badges Row */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>🏅 Badge Collection</div>
          <button onClick={() => setView("badges")} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 16px", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>View All →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: 12 }}>
          {BADGES_ALL.slice(0, 5).map((b, i) => <GlowBadge key={i} badge={b} size="small" />)}
        </div>
      </div>

      {/* Quick Day Access */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>📚 Lesson Progress</div>
          <button onClick={() => setView("lessons")} style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "6px 16px", color: "rgba(255,255,255,0.5)", cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>Full Map →</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
          {DAYS_DATA.slice(0, 3).map(day => (
            <DayCard key={day.id} day={day} onClick={d => { setSelectedDay(d); setView("day"); }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LessonsGrid({ setView, setSelectedDay }) {
  const done = DAYS_DATA.filter(d => d.completed).length;
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ marginBottom: 40 }}>
        <SectionLabel color="#8b5cf6">10-DAY CURRICULUM</SectionLabel>
        <h1 style={{ fontFamily: "'Orbitron', monospace", fontSize: 34, color: "#fff", fontWeight: 900 }}>Mission Map</h1>
        <p style={{ color: "rgba(255,255,255,0.4)", marginTop: 8, fontSize: 15 }}>Complete each day to unlock the next. Ship a real game every single day.</p>
      </div>

      {/* Progress */}
      <div style={{ borderRadius: 18, padding: "20px 28px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 32, display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, fontWeight: 700 }}>Overall Progress</span>
            <span style={{ color: "#00f5ff", fontSize: 14, fontWeight: 800 }}>{done}/10 Days Complete</span>
          </div>
          <div style={{ height: 10, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${done * 10}%`, background: "linear-gradient(90deg, #00f5ff, #8b5cf6, #ff6b35)", borderRadius: 99, boxShadow: "0 0 14px rgba(0,245,255,0.4)", transition: "width 1.2s" }} />
          </div>
        </div>
        <div style={{ color: "#00f5ff", fontWeight: 900, fontFamily: "'Orbitron', monospace", fontSize: 28 }}>{done * 10}%</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 18 }}>
        {DAYS_DATA.map(day => (
          <DayCard key={day.id} day={day} onClick={d => { setSelectedDay(d); setView("day"); }} />
        ))}
      </div>
    </div>
  );
}

function DayLesson({ day, setView, setSelectedDay }) {
  const [challengeDone, setChallengeDone] = useState(false);
  const [showXP, setShowXP] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  const handleComplete = () => {
    setChallengeDone(true);
    setShowXP(true);
    setTimeout(() => { setShowXP(false); setShowBadge(true); }, 2200);
    setTimeout(() => setShowBadge(false), 5000);
  };

  const gameIcons = ["🤖", "💰", "⚔️", "✊", "🧱", "⚡", "🐍", "☄️", "🐦", "🚀"];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>
      {/* Back */}
      <button onClick={() => { setView("lessons"); setSelectedDay(null); }} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, padding: "8px 18px", color: "rgba(255,255,255,0.55)", cursor: "pointer", fontSize: 13, marginBottom: 32, fontFamily: "inherit" }}>
        ← Back to Mission Map
      </button>

      {/* Day Header */}
      <div style={{ borderRadius: 22, padding: "34px 32px", background: `linear-gradient(135deg, ${day.color}18, rgba(255,255,255,0.02))`, border: `1px solid ${day.color}45`, marginBottom: 28, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, background: `radial-gradient(circle at 100% 0%, ${day.color}15 0%, transparent 60%)`, pointerEvents: "none" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <div style={{ background: day.color, color: "#000", borderRadius: 10, padding: "6px 18px", fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: 13 }}>DAY {day.id}</div>
          <div style={{ background: `${day.color}18`, color: day.color, borderRadius: 99, padding: "5px 16px", fontSize: 12, fontWeight: 700, border: `1px solid ${day.color}35` }}>{day.subtitle}</div>
        </div>
        <h1 style={{ fontFamily: "'Orbitron', monospace", fontSize: "clamp(18px, 3vw, 30px)", color: "#fff", fontWeight: 900, marginBottom: 16, lineHeight: 1.2 }}>{day.title}</h1>
        <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>{day.story}</p>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <span style={{ color: "#f59e0b", fontWeight: 800, fontSize: 14 }}>⚡ +{day.xp} XP</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>🎮 {day.project}</span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>{day.badgeIcon} {day.badge}</span>
        </div>
      </div>

      {/* Concepts */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 14 }}>🧠 Today's Power-Ups</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {day.concepts.map((c, i) => (
            <div key={i} style={{ background: `${day.color}14`, border: `1px solid ${day.color}40`, borderRadius: 10, padding: "10px 22px", color: day.color, fontWeight: 700, fontSize: 14 }}>{c}</div>
          ))}
        </div>
      </div>

      {/* Code Snippets */}
      {day.snippets.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 16 }}>💻 Code Missions</div>
          {day.snippets.map((s, i) => <CodeSnippet key={i} snippet={s} />)}
        </div>
      )}

      {day.snippets.length === 0 && (
        <div style={{ borderRadius: 16, padding: 28, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", marginBottom: 28, textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>📝</div>
          <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 15 }}>Code snippets for this day will be revealed in class!</div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, marginTop: 6 }}>Your instructor will walk through each snippet live.</div>
        </div>
      )}

      {/* Game Preview */}
      <div style={{ marginBottom: 28 }}>
        <div style={{ color: "#fff", fontWeight: 800, fontSize: 18, marginBottom: 14 }}>🎮 Game Preview</div>
        <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${day.color}30` }}>
          <div style={{ background: "rgba(255,255,255,0.04)", padding: "10px 18px", display: "flex", gap: 8, alignItems: "center", borderBottom: `1px solid ${day.color}20` }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => <div key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />)}
            <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 12, marginLeft: 8 }}>🐍 {day.project}.py — Running</span>
          </div>
          <div style={{ background: "#060a12", padding: "50px 40px", textAlign: "center", minHeight: 220, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ fontSize: 72, marginBottom: 16, animation: "float 3s ease-in-out infinite" }}>{gameIcons[day.id - 1]}</div>
            <div style={{ fontFamily: "'Courier New', monospace", color: "#10b981", fontSize: 14, marginBottom: 8 }}>▶ Program running...</div>
            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>Your {day.project} runs right here when you execute the code!</div>
          </div>
        </div>
      </div>

      {/* Challenge */}
      <div style={{ borderRadius: 18, padding: 28, background: "linear-gradient(135deg, rgba(245,158,11,0.08), rgba(255,107,53,0.06))", border: "1px solid rgba(245,158,11,0.28)", marginBottom: 32 }}>
        <div style={{ color: "#f59e0b", fontSize: 11, fontWeight: 800, letterSpacing: 2, marginBottom: 12 }}>⚡ MINI CHALLENGE</div>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, lineHeight: 1.65, marginBottom: 22 }}>{day.challenge}</p>
        {!challengeDone ? (
          <button onClick={handleComplete} style={{ padding: "12px 30px", borderRadius: 10, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #f59e0b, #ff6b35)", color: "#000", fontWeight: 900, fontSize: 14, fontFamily: "inherit", boxShadow: "0 0 20px rgba(245,158,11,0.3)" }}>
            ✓ Mark Challenge Complete
          </button>
        ) : (
          <div style={{ color: "#10b981", fontWeight: 800, fontSize: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 24 }}>✅</span> Challenge Complete! Incredible work!
          </div>
        )}
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {day.id > 1 ? (
          <button onClick={() => setSelectedDay(DAYS_DATA[day.id - 2])} style={{ padding: "12px 24px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "transparent", color: "rgba(255,255,255,0.6)", cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Day {day.id - 1}</button>
        ) : <div />}
        {day.id < 10 && DAYS_DATA[day.id]?.unlocked ? (
          <button onClick={() => setSelectedDay(DAYS_DATA[day.id])} style={{ padding: "12px 28px", borderRadius: 10, border: "none", background: `linear-gradient(135deg, ${day.color}, ${DAYS_DATA[day.id].color})`, color: "#000", cursor: "pointer", fontSize: 14, fontWeight: 800, fontFamily: "inherit" }}>
            Day {day.id + 1} →
          </button>
        ) : <div />}
      </div>

      {/* XP Popup */}
      {showXP && (
        <div style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
          onClick={() => setShowXP(false)}>
          <div style={{ background: "linear-gradient(135deg, rgba(0,245,255,0.18), rgba(245,158,11,0.18))", border: "1px solid rgba(0,245,255,0.5)", borderRadius: 28, padding: "52px 72px", textAlign: "center", animation: "popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}>
            <div style={{ fontSize: 90, marginBottom: 14 }}>⚡</div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 52, color: "#f59e0b", fontWeight: 900, textShadow: "0 0 30px rgba(245,158,11,0.5)" }}>+{day.xp}</div>
            <div style={{ color: "#f59e0b", fontWeight: 800, fontSize: 20, marginBottom: 8 }}>XP EARNED!</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>Challenge Complete!</div>
          </div>
        </div>
      )}

      {/* Badge Popup */}
      {showBadge && (
        <div style={{ position: "fixed", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, background: "rgba(0,0,0,0.75)", backdropFilter: "blur(10px)" }}
          onClick={() => setShowBadge(false)}>
          <div style={{ background: `linear-gradient(135deg, ${day.color}28, rgba(255,255,255,0.04))`, border: `2px solid ${day.color}80`, borderRadius: 28, padding: "52px 72px", textAlign: "center", animation: "popupIn 0.4s cubic-bezier(0.34,1.56,0.64,1)", boxShadow: `0 0 80px ${day.color}40` }}>
            <div style={{ fontSize: 90, marginBottom: 14, animation: "float 2s ease-in-out infinite" }}>{day.badgeIcon}</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 800, letterSpacing: 3, marginBottom: 12 }}>🏅 BADGE UNLOCKED!</div>
            <div style={{ fontFamily: "'Orbitron', monospace", fontSize: 26, color: day.color, fontWeight: 900, marginBottom: 8, textShadow: `0 0 20px ${day.color}` }}>{day.badge}</div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Added to your collection</div>
          </div>
        </div>
      )}
    </div>
  );
}

function BadgesPage() {
  const earned = BADGES_ALL.filter(b => b.earned).length;
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 24px", position: "relative", zIndex: 1 }}>
      <div style={{ textAlign: "center", marginBottom: 44 }}>
        <SectionLabel color="#f59e0b">ACHIEVEMENTS</SectionLabel>
        <h1 style={{ fontFamily: "'Orbitron', monospace", fontSize: 34, color: "#fff", fontWeight: 900 }}>Badge Collection</h1>
        <p style={{ color: "rgba(255,255,255,0.4)", marginTop: 8, fontSize: 15 }}>Earn all 10 badges to become a Python Legend.</p>
      </div>

      {/* Stats */}
      <div style={{ borderRadius: 18, padding: "22px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", marginBottom: 36, display: "flex", gap: 32, justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#f59e0b", fontFamily: "'Orbitron', monospace", fontSize: 34, fontWeight: 900 }}>{earned}</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Earned</div>
        </div>
        <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'Orbitron', monospace", fontSize: 34, fontWeight: 900 }}>{10 - earned}</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Locked</div>
        </div>
        <div style={{ width: 1, height: 40, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "#00f5ff", fontFamily: "'Orbitron', monospace", fontSize: 34, fontWeight: 900 }}>{Math.round(earned / 10 * 100)}%</div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Complete</div>
        </div>
        <div style={{ flex: "0 0 200px" }}>
          <div style={{ height: 8, background: "rgba(255,255,255,0.07)", borderRadius: 99, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${earned * 10}%`, background: "linear-gradient(90deg, #f59e0b, #ff6b35)", borderRadius: 99, boxShadow: "0 0 12px rgba(245,158,11,0.4)" }} />
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: 16 }}>
        {BADGES_ALL.map((badge, i) => <GlowBadge key={i} badge={badge} />)}
      </div>
    </div>
  );
}

// ================================================================
// ROOT APP
// ================================================================
export default function App() {
  const [view, setView] = useState("landing");
  const [selectedDay, setSelectedDay] = useState(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600;700;800&display=swap";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: #04080f; font-family: 'Exo 2', 'Segoe UI', sans-serif; color: #fff; overflow-x: hidden; }
      button { font-family: 'Exo 2', sans-serif; transition: opacity 0.2s, transform 0.2s; }
      button:active { transform: scale(0.97); }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: #04080f; }
      ::-webkit-scrollbar-thumb { background: rgba(0,245,255,0.25); border-radius: 99px; }
      @keyframes twinkle { 0%,100% { opacity:0.1; transform:scale(1); } 50% { opacity:0.9; transform:scale(1.3); } }
      @keyframes float { 0%,100% { transform:translateY(0) rotate(-2deg); } 50% { transform:translateY(-18px) rotate(2deg); } }
      @keyframes badgepulse { 0%,100% { box-shadow:0 0 10px transparent; } 50% { box-shadow:0 0 28px currentColor; } }
      @keyframes heroglowbtn { 0%,100% { box-shadow:0 0 25px rgba(0,245,255,0.3); } 50% { box-shadow:0 0 55px rgba(0,245,255,0.65); } }
      @keyframes popupIn { from { transform:scale(0.4) translateY(30px); opacity:0; } to { transform:scale(1) translateY(0); opacity:1; } }
      @keyframes blink { 0%,100% { opacity:1; } 50% { opacity:0.3; } }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(link)) document.head.removeChild(link);
      if (document.head.contains(style)) document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#04080f" }}>
      <StarField />
      <Navbar view={view} setView={setView} setSelectedDay={setSelectedDay} />
      {view === "landing" && <LandingPage setView={setView} setSelectedDay={setSelectedDay} />}
      {view === "dashboard" && <Dashboard setView={setView} setSelectedDay={setSelectedDay} />}
      {view === "lessons" && <LessonsGrid setView={setView} setSelectedDay={setSelectedDay} />}
      {view === "day" && selectedDay && <DayLesson day={selectedDay} setView={setView} setSelectedDay={setSelectedDay} />}
      {view === "badges" && <BadgesPage />}
    </div>
  );
}
