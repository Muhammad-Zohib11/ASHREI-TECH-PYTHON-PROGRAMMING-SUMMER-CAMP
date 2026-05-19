// Days 1-5 lesson data
export const DAYS_DATA_PART1 = [
  {
    id: 1, color: "#00f5ff",
    title: "How Computers Understand Humans", subtitle: "Input & Output",
    concepts: ["print()", "input()", "Variables", "Comments"],
    project: "Robot Maze", xp: 150, badge: "First Program", badgeIcon: "🚀",
    missionTag: "FIRST CONTACT",
    story: "Welcome, Code Recruit! 🚀 You are about to learn something INCREDIBLE. Python is the exact language used to build real video games, command flying robots, and create AI. Starting TODAY — you can make a computer do ANYTHING you say. You just need to learn its language. One line of code. That is all it takes to begin. Are you ready to speak the language of machines?",
    spaceFeature: "Game Window — your Space Shooter gets its screen today!",
    snippets: [
      {
        title: "Say Hello to the World",
        code: `print("Hello, Game World!")
print("I am learning Python!")
print("Let the adventure begin!")`,
        desc: "The print() function displays text on screen. Every game has a screen — this is yours.",
        tryThis: "Change the message to include YOUR name and add your favourite emoji at the end!",
        output: `Hello, Game World!\nI am learning Python!\nLet the adventure begin!`,
      },
      {
        title: "Listen to the Player",
        code: `name = input("Enter your hero name: ")
print("Welcome,", name, "!")
print("Your quest begins NOW.")`,
        desc: "input() collects what the player types. Now your program talks back!",
        tryThis: "Ask the player for their favourite game using input(), then print it back with a comment.",
        output: `Enter your hero name: Alex\nWelcome, Alex !\nYour quest begins NOW.`,
      },
      {
        title: "Add Comments Like a Pro",
        code: `# This is a comment - Python ignores it!
# Use comments to explain your thinking

print("Score: 0")    # Starting score
print("Lives: 3")    # Starting lives
print("Level: 1")    # Starting level`,
        desc: "Comments are notes for yourself and teammates. Professional game devs write them constantly.",
        tryThis: "Add a comment above each print() explaining what that line does in your game.",
        output: `Score: 0\nLives: 3\nLevel: 1`,
      },
    ],
    challenge: "Build a 'Player Registration' screen: ask the player for their name and favourite colour, then print a personalised welcome message with both!",
    gamePreviewIcon: "🤖",
    gamePreviewLines: ["▶ Robot Maze.py — Running...", ">>> Enter your name: Alex", ">>> Welcome to the Maze, Alex!"],
  },
  {
    id: 2, color: "#8b5cf6",
    title: "Variables & The Power of Names", subtitle: "Data Storage",
    concepts: ["Variables", "Strings", "Integers", "f-strings"],
    project: "Coin Collector", xp: 200, badge: "Variable Explorer", badgeIcon: "💎",
    missionTag: "DATA WIZARD",
    story: "Every great game in the world stores data. Player health, coin count, speed, score, lives — it is ALL variables! Without variables, games forget EVERYTHING the instant it happens. Think about Minecraft — your coordinates, your inventory, your health — all stored in variables. You are about to become a Data Wizard. Learn to name and store data today and you will control EVERY game you ever build.",
    spaceFeature: "Player Ship — your Space Shooter now has a controllable player variable!",
    snippets: [
      {
        title: "Player Stats Board",
        code: `player_name = "Alex"
health = 100
coins = 0
speed = 5

print(f"Player: {player_name}")
print(f"Health: {health} | Coins: {coins} | Speed: {speed}")`,
        desc: "Variables store your game's data. Name them clearly so you always know what they hold!",
        tryThis: "Add a 'level' variable set to 1 and print it in the stats line.",
        output: `Player: Alex\nHealth: 100 | Coins: 0 | Speed: 5`,
      },
      {
        title: "Collect Coins!",
        code: `coins = 0
print(f"Start: {coins} coins")

coins = coins + 10
print(f"Coin collected! {coins} coins")

coins += 5   # Shortcut for coins = coins + 5
print(f"Another one! {coins} coins total!")`,
        desc: "+= is the power shortcut. Every game uses it constantly to update scores and counters.",
        tryThis: "Make the player collect 3 more coins worth 25 each using +=, then print the total.",
        output: `Start: 0 coins\nCoin collected! 10 coins\nAnother one! 15 coins total!`,
      },
      {
        title: "f-Strings: Your Display HUD",
        code: `player = "Alex"
health = 85
score = 1250
level = 3

# f-strings let you embed variables directly in text
hud = f"[{player}] HP:{health} | Score:{score} | Lv{level}"
print(hud)
print(f"You are on Level {level}. Keep going!")`,
        desc: "f-strings (formatted strings) are how game HUDs display live data. Put variables in {} curly braces.",
        tryThis: "Add a 'wave' variable and include it in the HUD display.",
        output: `[Alex] HP:85 | Score:1250 | Lv3\nYou are on Level 3. Keep going!`,
      },
    ],
    challenge: "Create a full player stats card: name, health (100), coins (0), speed (5), level (1). Use += to collect 3 coins worth 20 each. Print the final stats using f-strings.",
    gamePreviewIcon: "💰",
    gamePreviewLines: ["▶ Coin Collector.py — Running...", ">>> [Alex] HP:100 | Score:0 | Lv1", ">>> Coin collected! Score: 10"],
  },
  {
    id: 3, color: "#ff6b35",
    title: "Operations & Typecasting", subtitle: "Math Magic",
    concepts: ["Arithmetic operators", "int() / float()", "Math module", "Order of operations"],
    project: "Health Battle Simulator", xp: 220, badge: "Math Wizard", badgeIcon: "⚡",
    missionTag: "MATH MAGIC",
    story: "Games calculate EVERYTHING behind the scenes. Every time an enemy hits you, Python runs a damage formula. Every time you level up, Python multiplies your XP. Every falling coin, every speed boost, every explosion — it's ALL math! Today you become the game engine. You will make Python crunch numbers like a REAL battle system.",
    spaceFeature: "Math Engine — Space Shooter calculates bullet speed and enemy damage!",
    snippets: [
      {
        title: "Battle Damage Calculator",
        code: `attack = 35
defense = 12
critical_hit = True

damage = attack - defense

if critical_hit:
    damage = damage * 2
    print("CRITICAL HIT!")

print(f"Damage dealt: {damage}")
print(f"Enemy health: {100 - damage}")`,
        desc: "Math operations power your game's entire combat system. +, -, *, / are your weapons.",
        tryThis: "Add a 'bonus_damage' variable of 5 and add it to the final damage total.",
        output: `CRITICAL HIT!\nDamage dealt: 46\nEnemy health: 54`,
      },
      {
        title: "Type Conversion — Always Convert!",
        code: `# input() always gives TEXT, not numbers!
level_str = input("Enter your level (1-10): ")
level = int(level_str)   # Convert text to number!

bonus_xp = level * 150
health_bonus = level * 20

print(f"Level {level} bonuses:")
print(f"  XP Bonus:     +{bonus_xp}")
print(f"  Health Bonus: +{health_bonus}")`,
        desc: "NEVER forget: input() gives you a string. Always convert with int() or float() before math!",
        tryThis: "Ask for the player's speed as a float input, then multiply it by 1.5 to get boosted speed.",
        output: `Enter your level (1-10): 5\nLevel 5 bonuses:\n  XP Bonus:     +750\n  Health Bonus: +100`,
      },
      {
        title: "The Math Module",
        code: `import math

speed = 7.8
distance = 142.5

# Round numbers properly
print(f"Speed (rounded): {round(speed)}")
print(f"Distance ceiling: {math.ceil(distance)}")
print(f"Square root of 64: {math.sqrt(64)}")

# Calculate game score
score = math.floor(distance * speed * 1.5)
print(f"Final Score: {score}")`,
        desc: "The math module gives you powerful tools: round(), ceil(), floor(), sqrt() and many more.",
        tryThis: "Calculate how many seconds it takes to travel 500 units at the given speed using division.",
        output: `Speed (rounded): 8\nDistance ceiling: 143\nSquare root of 64: 8.0\nFinal Score: 1601`,
      },
    ],
    challenge: "Build a Health Battle Simulator: ask the player for attack power (int), add a random defense (use 12), calculate damage = attack - defense. If damage > 20, print 'Critical!'. Show remaining enemy HP.",
    gamePreviewIcon: "⚔️",
    gamePreviewLines: ["▶ Health Battle.py — Running...", ">>> Enter attack power: 35", ">>> CRITICAL HIT! Damage: 46"],
  },
  {
    id: 4, color: "#10b981",
    title: "Conditions: Games That Think", subtitle: "Decision Making",
    concepts: ["if / elif / else", "Comparison operators", "Boolean logic", "Nested conditions"],
    project: "Rock Paper Scissors", xp: 250, badge: "Condition Commander", badgeIcon: "🧠",
    missionTag: "BRAIN POWER",
    story: "Today we teach your game to THINK. Every game decision — should the enemy attack or run? Did the player win or lose? Should the door unlock? — is an if statement! Without conditions, programs are just calculators that do the same thing every time. With conditions, they become INTELLIGENT. You are about to give your programs a brain.",
    spaceFeature: "Bullet Logic — Space Shooter fires bullets only WHEN the player presses SPACE!",
    snippets: [
      {
        title: "The Health Check System",
        code: `health = 45

if health > 80:
    print("Status: HEALTHY 💚")
elif health > 50:
    print("Status: DAMAGED 🟡")
elif health > 20:
    print("Status: CRITICAL 🔴")
else:
    print("Status: DEAD 💀")
    print("Game Over!")`,
        desc: "if/elif/else creates decision chains. Python checks each condition top to bottom and picks the first True one.",
        tryThis: "Change health to 15 and then to 95. See how the output changes each time!",
        output: `Status: CRITICAL 🔴`,
      },
      {
        title: "Rock Paper Scissors Logic",
        code: `player = "rock"
computer = "scissors"

if player == computer:
    print("TIE! Try again.")
elif (player == "rock"     and computer == "scissors") or \
     (player == "scissors" and computer == "paper")   or \
     (player == "paper"    and computer == "rock"):
    print(f"YOU WIN! {player} beats {computer}! 🎉")
else:
    print(f"COMPUTER WINS! {computer} beats {player}! 🤖")`,
        desc: "Boolean logic (and, or) lets you combine multiple conditions. This is the entire RPS brain!",
        tryThis: "Change player to 'scissors' and computer to 'rock'. Who wins?",
        output: `YOU WIN! rock beats scissors! 🎉`,
      },
      {
        title: "Nested Conditions: Difficulty Levels",
        code: `score = 850
streak = 5

if score >= 1000:
    if streak >= 10:
        print("LEGENDARY performance! 🏆")
    else:
        print("Excellent! Keep your streak up!")
elif score >= 500:
    if streak >= 5:
        print("Great combo! You're on fire! 🔥")
    else:
        print("Good score. Build your streak!")
else:
    print("Keep practicing. You'll get there!")`,
        desc: "You can put if statements INSIDE other if statements. This is called nesting — great for complex game logic.",
        tryThis: "Add a third condition: if lives == 0, always print 'Game Over!' regardless of score.",
        output: `Great combo! You're on fire! 🔥`,
      },
    ],
    challenge: "Build the full Rock Paper Scissors game: use input() to get the player's choice, hardcode the computer's choice, then use if/elif/else to print who won. Add a score counter for the winner.",
    gamePreviewIcon: "✊",
    gamePreviewLines: ["▶ Rock Paper Scissors.py — Running...", ">>> Enter choice (rock/paper/scissors): rock", ">>> YOU WIN! rock beats scissors! 🎉"],
  },
  {
    id: 5, color: "#f59e0b",
    title: "Loops: Infinite Power", subtitle: "Repetition",
    concepts: ["for loops", "while loops", "range()", "break / continue"],
    project: "Endless Falling Blocks", xp: 275, badge: "Loop Master", badgeIcon: "🔄",
    missionTag: "INFINITE LOOP",
    story: "Every single game on the planet runs in a loop. Right now, Minecraft is running a loop 20 times per second. Fortnite is running a loop 60 times per second. Enemies spawn in loops. Bullets travel in loops. Score builds in loops. Today you master the ENGINE behind ALL games. After today, you will never look at a game the same way again.",
    spaceFeature: "Enemy Spawner — Space Shooter now spawns enemies in a loop every few seconds!",
    snippets: [
      {
        title: "For Loop: Spawn Enemies",
        code: `# Spawn 5 enemy waves
for wave in range(1, 6):
    enemies = wave * 3
    print(f"Wave {wave}: {enemies} enemies incoming!")

print("All waves complete. BOSS INCOMING! 👾")`,
        desc: "for loops repeat a fixed number of times. range(1, 6) gives you 1, 2, 3, 4, 5 — perfect for waves!",
        tryThis: "Change range to spawn 10 waves. Print the total enemy count at the end using a variable.",
        output: `Wave 1: 3 enemies incoming!\nWave 2: 6 enemies incoming!\nWave 3: 9 enemies incoming!\nWave 4: 12 enemies incoming!\nWave 5: 15 enemies incoming!\nAll waves complete. BOSS INCOMING! 👾`,
      },
      {
        title: "While Loop: The Game Loop",
        code: `lives = 3
score = 0

while lives > 0:
    score += 100
    print(f"Score: {score} | Lives: {lives}")
    
    if score >= 300:
        print("Level complete! 🎉")
        break   # Exit the loop early
    
    lives -= 1  # Simulate taking damage

print(f"Final Score: {score}")`,
        desc: "while loops keep running AS LONG AS the condition is True. This IS the game loop pattern!",
        tryThis: "Change the winning condition to score >= 500. How many lives does it take?",
        output: `Score: 100 | Lives: 3\nScore: 200 | Lives: 2\nScore: 300 | Lives: 1\nLevel complete! 🎉\nFinal Score: 300`,
      },
      {
        title: "Falling Blocks with Speed",
        code: `# Endless falling blocks simulation
block_speed = 2
blocks_fallen = 0

for block in range(1, 11):
    block_speed += 0.5  # Speed increases each block
    blocks_fallen += 1
    
    if block % 3 == 0:  # Every 3rd block is special
        print(f"Block {block}: ⚡ SPEED BLOCK! Speed: {block_speed:.1f}")
    else:
        print(f"Block {block}: 🟦 Falling at speed {block_speed:.1f}")

print(f"\n{blocks_fallen} blocks fell. Max speed: {block_speed:.1f}")`,
        desc: "combine loops with math to simulate game mechanics. The modulo % operator finds every 3rd item.",
        tryThis: "Add a 'bonus_score' that adds 50 every time a speed block appears (block % 3 == 0).",
        output: `Block 1: 🟦 Falling at speed 2.5\nBlock 2: 🟦 Falling at speed 3.0\nBlock 3: ⚡ SPEED BLOCK! Speed: 3.5\n...`,
      },
    ],
    challenge: "Simulate 10 falling blocks. Each block falls faster by 1. Every 5th block gives a bonus life. Print each block's speed and whether it gave a bonus. Print total lives at the end.",
    gamePreviewIcon: "🧱",
    gamePreviewLines: ["▶ Falling Blocks.py — Running...", ">>> Block 1: 🟦 Speed: 2.5", ">>> Block 5: ⚡ BONUS BLOCK!"],
  },
];
