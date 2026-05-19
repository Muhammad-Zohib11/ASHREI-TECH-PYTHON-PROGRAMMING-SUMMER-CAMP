// Days 6-12 lesson data
export const DAYS_DATA_PART2 = [
  {
    id: 6, color: "#ec4899",
    title: "Functions: Your Custom Powers", subtitle: "Code Superpowers",
    concepts: ["def keyword", "Parameters", "Return values", "Default arguments"],
    project: "Reaction Speed Game", xp: 300, badge: "Function Wizard", badgeIcon: "🧙",
    missionTag: "SUPERPOWER FORGE",
    story: "You have been writing scripts. Today, you write PROGRAMS. What is the difference? A program is ORGANIZED. Functions are your reusable superpowers — write a piece of code once, give it a name, and call it 1000 times without typing it again. Every game, every app, every AI model ever built is made of functions calling other functions. This is how professionals code. Starting today — this is how YOU code.",
    spaceFeature: "Power-Ups — Space Shooter now has a use_powerup() function that applies effects!",
    snippets: [
      {
        title: "Your First Function",
        code: `def greet_player(name):
    print(f"Welcome, {name}!")
    print(f"Prepare for battle, {name}!")

# Call the function (as many times as you want!)
greet_player("Alex")
greet_player("Luna")
greet_player("Zara")`,
        desc: "def creates a function. You define it once, then CALL it as many times as you need. No repetition!",
        tryThis: "Add a second parameter 'level' to greet_player and include it in the welcome message.",
        output: `Welcome, Alex!\nPrepare for battle, Alex!\nWelcome, Luna!\nPrepare for battle, Luna!\nWelcome, Zara!\nPrepare for battle, Zara!`,
      },
      {
        title: "Functions That Return Values",
        code: `def calculate_damage(attack, defense, is_critical=False):
    damage = attack - defense
    if is_critical:
        damage = damage * 2
    return damage   # Send the result back!

# Use the returned value
hit1 = calculate_damage(40, 10)
hit2 = calculate_damage(40, 10, is_critical=True)

print(f"Normal hit:   {hit1} damage")
print(f"Critical hit: {hit2} damage")`,
        desc: "return sends a value BACK to whoever called the function. This is how game engines share data.",
        tryThis: "Add a 'bonus' default parameter of 0. Include it in the damage calculation.",
        output: `Normal hit:   30 damage\nCritical hit: 60 damage`,
      },
      {
        title: "Reaction Speed Game",
        code: `import time
import random

def measure_reaction():
    wait = random.uniform(1, 3)
    print("Get ready...")
    time.sleep(wait)
    
    start = time.time()
    input("PRESS ENTER NOW! >>>")
    end = time.time()
    
    reaction = round((end - start) * 1000)
    return reaction

def rate_reaction(ms):
    if ms < 150:   return "LEGENDARY ⚡"
    elif ms < 250: return "EXCELLENT 🔥"
    elif ms < 400: return "GOOD 👍"
    else:          return "KEEP TRAINING 💪"

reaction_ms = measure_reaction()
rating = rate_reaction(reaction_ms)
print(f"Reaction: {reaction_ms}ms — {rating}")`,
        desc: "Functions work together as a team. measure_reaction() gets data, rate_reaction() judges it.",
        tryThis: "Call measure_reaction() 3 times, store each result, then print the average reaction time.",
        output: `Get ready...\nPRESS ENTER NOW! >>>\nReaction: 187ms — EXCELLENT 🔥`,
      },
    ],
    challenge: "Build a full damage system with 3 functions: calculate_damage(attack, defense), apply_critical(damage, is_crit), and show_battle_result(player_hp, enemy_hp). Call them in order and display the result.",
    gamePreviewIcon: "⚡",
    gamePreviewLines: ["▶ Reaction Game.py — Running...", ">>> Get ready...", ">>> PRESS ENTER NOW!", ">>> Reaction: 187ms — EXCELLENT 🔥"],
  },
  {
    id: 7, color: "#06b6d4",
    title: "Lists: Armies of Data", subtitle: "Collections",
    concepts: ["List creation", "Indexing", "append() / remove()", "Looping through lists"],
    project: "Snake Lite", xp: 325, badge: "Array Warrior", badgeIcon: "🐍",
    missionTag: "DATA ARMY",
    story: "The Snake game's body is LITERALLY a Python list. Every time the snake moves, the list updates. Bullet systems, enemy wave lists, high score boards, card decks, inventory slots — it's ALL lists! Today you command ARMIES of data. One list can hold hundreds of values, sort them instantly, and let you find anything in milliseconds. This is the data structure behind almost every program ever written.",
    spaceFeature: "Wave System — Space Shooter tracks all active enemies in a list and removes them when hit!",
    snippets: [
      {
        title: "Snake Body as a List",
        code: `# Snake body = list of (x, y) positions
snake = [(5, 5), (4, 5), (3, 5)]

print(f"Snake length: {len(snake)}")
print(f"Head position: {snake[0]}")
print(f"Tail position: {snake[-1]}")

# Snake moves: add new head, remove tail
new_head = (6, 5)
snake.insert(0, new_head)   # Add to front
snake.pop()                  # Remove from back

print(f"After move: {snake}")`,
        desc: "Lists store ordered data. snake[0] is the head, snake[-1] is the tail. This IS the Snake game core!",
        tryThis: "Make the snake eat food at (8, 5) by adding the new head but NOT removing the tail.",
        output: `Snake length: 3\nHead position: (5, 5)\nTail position: (3, 5)\nAfter move: [(6, 5), (5, 5), (4, 5)]`,
      },
      {
        title: "High Score Leaderboard",
        code: `scores = [1200, 850, 2100, 650, 1750]

# Sort from highest to lowest
scores.sort(reverse=True)

print("🏆 TOP SCORES:")
for i, score in enumerate(scores):
    medal = ["🥇", "🥈", "🥉", "4.", "5."][i]
    print(f"  {medal}  {score} pts")

# Add a new score
new_score = 1900
scores.append(new_score)
scores.sort(reverse=True)
print(f"\nNew score {new_score} entered!")
print(f"Your rank: #{scores.index(new_score) + 1}")`,
        desc: "sort() orders lists. enumerate() gives you both the index AND the value while looping.",
        tryThis: "Add 3 more scores and print only the Top 3 using scores[:3] (list slicing).",
        output: `🏆 TOP SCORES:\n  🥇  2100 pts\n  🥈  1750 pts\n  🥉  1200 pts\n  4.  850 pts\n  5.  650 pts`,
      },
      {
        title: "Enemy Wave Manager",
        code: `enemies = ["Goblin", "Orc", "Troll", "Dragon", "Slime"]

print(f"Enemies remaining: {len(enemies)}")

# Player defeats enemies one by one
while len(enemies) > 0:
    defeated = enemies.pop(0)   # Remove first enemy
    print(f"  ⚔️  Defeated: {defeated}!")
    
    if "Dragon" not in enemies and len(enemies) > 0:
        print("  🛡️  WARNING: Dragon is gone — Boss spawning!")
        enemies.append("FINAL BOSS")
        break

print(f"\nRemaining: {enemies}")`,
        desc: "pop(0) removes from the front. append() adds to the end. in checks if something exists in the list.",
        tryThis: "After defeating all enemies, print 'VICTORY!' and show how many enemies were defeated.",
        output: `Enemies remaining: 5\n  ⚔️  Defeated: Goblin!\n  ⚔️  Defeated: Orc!\n  ⚔️  Defeated: Troll!\n  🛡️  WARNING: Dragon is gone — Boss spawning!\n\nRemaining: ['Dragon', 'Slime', 'FINAL BOSS']`,
      },
    ],
    challenge: "Build Snake Lite: create a snake list of 3 positions. Loop 5 times: each turn, move the snake right by adding a new head (x+1, same y) and removing the tail. Print the snake after each move.",
    gamePreviewIcon: "🐍",
    gamePreviewLines: ["▶ Snake Lite.py — Running...", ">>> Snake: [(6,5),(5,5),(4,5)]", ">>> Ate food! Length: 4 🍎"],
  },
  {
    id: 8, color: "#8b5cf6",
    title: "Random: Chaos is Power", subtitle: "Randomness",
    concepts: ["random module", "randint()", "choice()", "shuffle()", "seed()"],
    project: "Meteor Dodge", xp: 350, badge: "Randomness Ninja", badgeIcon: "🎲",
    missionTag: "CHAOS MASTER",
    story: "What makes games ADDICTIVE? SURPRISE! Remove randomness from Minecraft and every world looks the same. Remove it from Fortnite and every match is identical. Remove it from any card game and there's no point playing twice. Today you crack open import random — the module that creates INFINITE replayability. Random meteor positions. Random loot. Random enemy spawns. Random card shuffles. After today, no two runs of your games will ever be the same.",
    spaceFeature: "Random Meteors — Space Shooter now spawns meteors at random positions with random speeds!",
    snippets: [
      {
        title: "Spawn Random Meteors",
        code: `import random

print("🌌 METEOR STORM INCOMING!")
print("-" * 35)

total_damage = 0

for i in range(1, 6):
    x_pos  = random.randint(0, 800)    # Random screen position
    speed  = random.randint(3, 10)     # Random fall speed
    size   = random.choice(["Small", "Medium", "LARGE"])
    damage = random.randint(5, 25)
    total_damage += damage
    
    print(f"Meteor {i}: x={x_pos} | Speed={speed} | {size} | -{damage}HP")

print(f"\nTotal damage incoming: {total_damage}HP")`,
        desc: "randint(a, b) picks a random whole number between a and b. choice() picks from a list randomly.",
        tryThis: "Add a 10% chance that a meteor is a 'Golden Meteor' worth +50 coins using random.randint(1,10) == 1.",
        output: `🌌 METEOR STORM INCOMING!\n-----------------------------------\nMeteor 1: x=342 | Speed=7 | Medium | -14HP\nMeteor 2: x=89  | Speed=4 | Small  | -8HP\n...`,
      },
      {
        title: "Random Loot Drops",
        code: `import random

def get_loot_drop(enemy_level):
    roll = random.randint(1, 100)
    
    if roll <= 5:      # 5% chance
        loot = "💎 LEGENDARY SWORD!"
        bonus = enemy_level * 50
    elif roll <= 20:   # 15% chance
        loot = "🗡️  Rare Dagger"
        bonus = enemy_level * 20
    elif roll <= 50:   # 30% chance
        loot = "🪙 Gold Coins"
        bonus = enemy_level * 10
    else:              # 50% chance
        loot = "💨 Nothing..."
        bonus = 0
    
    return loot, bonus

for enemy_lv in [1, 3, 5, 8]:
    item, gold = get_loot_drop(enemy_lv)
    print(f"Lv{enemy_lv} Enemy dropped: {item} (+{gold} gold)")`,
        desc: "Probability in games is just math! Roll 1-100 and check ranges. 1-5 = 5% chance of legendary loot.",
        tryThis: "Add a 1% chance (roll == 1) for an 'ULTRA LEGENDARY' item worth enemy_level * 200 gold.",
        output: `Lv1 Enemy dropped: 🪙 Gold Coins (+10 gold)\nLv3 Enemy dropped: 🗡️  Rare Dagger (+60 gold)\n...`,
      },
      {
        title: "Shuffle Deck — Card Game",
        code: `import random

# Build a deck of cards
suits  = ["♠️", "♥️", "♦️", "♣️"]
values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

deck = [f"{v}{s}" for s in suits for v in values]
print(f"Deck size: {len(deck)} cards")

# Shuffle the deck
random.shuffle(deck)
print("Deck shuffled! 🃏")

# Deal 5 cards to each player
player1_hand = deck[:5]
player2_hand = deck[5:10]

print(f"\nPlayer 1: {' '.join(player1_hand)}")
print(f"Player 2: {' '.join(player2_hand)}")`,
        desc: "shuffle() randomises a list in place. List comprehensions ([x for x in y]) build lists in one line.",
        tryThis: "Deal a third player's hand from the deck and print all three hands.",
        output: `Deck size: 52 cards\nDeck shuffled! 🃏\nPlayer 1: 7♠️ Q♥️ 3♦️ A♣️ 9♠️\nPlayer 2: K♦️ 5♥️ J♠️ 2♣️ 8♦️`,
      },
    ],
    challenge: "Build Meteor Dodge: spawn 5 meteors using randint for x position (0-800) and speed (3-10). Calculate total damage. If total damage > 60, print 'SHIELD BROKEN!' otherwise 'You survived!'",
    gamePreviewIcon: "☄️",
    gamePreviewLines: ["▶ Meteor Dodge.py — Running...", ">>> ☄️ Meteor at x=342, speed=7", ">>> SHIELD BROKEN! Total: 73HP"],
  },
  {
    id: 9, color: "#06b6d4",
    title: "Pygame Foundations", subtitle: "Building the Visual Engine",
    concepts: ["pygame.init()", "set_mode()", "Game loop", "Drawing shapes", "Keyboard input", "FPS"],
    project: "Window Builder", xp: 400, badge: "Pygame Pioneer", badgeIcon: "🪟",
    missionTag: "PYGAME PIONEER",
    story: "Eight days ago you made a computer print your name. Today you open a WINDOW. You draw shapes. You make things MOVE. Everything you've learned — variables, loops, conditions, functions, lists, random — all of it was building up to this moment. The visual era begins NOW.",
    spaceFeature: "The Window — your Space Shooter gets its very first game window and star-field background!",
    snippets: [
      {
        title: "Open Your First Window",
        code: `import pygame\nimport sys\n\npygame.init()\n\nWIDTH, HEIGHT = 800, 600\nscreen = pygame.display.set_mode((WIDTH, HEIGHT))\npygame.display.set_caption("My First Game Window")\nclock = pygame.time.Clock()\n\nrunning = True\nwhile running:           # THE GAME LOOP\n    clock.tick(60)       # Lock to 60 FPS\n\n    for event in pygame.event.get():\n        if event.type == pygame.QUIT:\n            running = False\n\n    screen.fill((10, 20, 40))   # Background colour (RGB)\n    pygame.display.flip()       # Show everything drawn\n\npygame.quit()\nsys.exit()`,
        desc: "This is the skeleton of EVERY Pygame game. init → window → game loop → events → fill → flip. Never changes.",
        tryThis: "Change (10, 20, 40) to (80, 0, 0) for a red background. Then try (0, 60, 0) for green.",
        output: "[Pygame window opens — 800×600 dark blue screen at 60 FPS]",
      },
      {
        title: "Draw Shapes",
        code: `# Inside the game loop, AFTER screen.fill() and BEFORE display.flip():\n\n# Rectangle: (surface, colour, (x, y, width, height))\npygame.draw.rect(screen, (0, 200, 255), (100, 200, 80, 80))\n\n# Circle: (surface, colour, (cx, cy), radius)\npygame.draw.circle(screen, (255, 107, 0), (400, 300), 40)\n\n# Triangle (polygon): list of (x,y) points\npygame.draw.polygon(screen, (34, 197, 94),\n    [(400, 100), (370, 160), (430, 160)])\n\n# Line: (surface, colour, start, end, thickness)\npygame.draw.line(screen, (255,255,255), (0,0), (800,600), 2)`,
        desc: "Pygame's coordinates: (0,0) is TOP-LEFT. X goes right, Y goes DOWN. RGB colours: (255,0,0) = red.",
        tryThis: "Draw a 'spaceship' using one triangle (body) and two circles (engines). Use orange + cyan.",
        output: "[Window shows a cyan square, orange circle, green triangle, and white diagonal line]",
      },
      {
        title: "Move a Shape with the Keyboard",
        code: `# Setup BEFORE the game loop:\nbox_x = 400\nbox_y = 300\nSPEED = 5\n\n# Inside the game loop:\nkeys = pygame.key.get_pressed()\n\nif keys[pygame.K_LEFT]  and box_x > 0:           box_x -= SPEED\nif keys[pygame.K_RIGHT] and box_x < WIDTH - 40:  box_x += SPEED\nif keys[pygame.K_UP]    and box_y > 0:           box_y -= SPEED\nif keys[pygame.K_DOWN]  and box_y < HEIGHT - 40: box_y += SPEED\n\npygame.draw.rect(screen, (0, 200, 255), (box_x, box_y, 40, 40))`,
        desc: "key.get_pressed() checks which keys are held RIGHT NOW. Boundary checks stop the shape leaving the screen.",
        tryThis: "Remove the boundary checks (the 'and box_x > 0' parts) and watch the box escape off-screen!",
        output: "[Blue square moves smoothly with arrow keys, stops at window edges]",
      },
    ],
    challenge: "Build a Moving Rectangle Scene: (1) open 800×600 dark window, (2) generate 80 random stars using a list + for loop, (3) draw a triangle ship that moves with arrow keys, (4) keep ship inside boundaries.",
    gamePreviewIcon: "🪟",
    gamePreviewLines: ["▶ Window Builder.py — Running...", ">>> [Pygame window: 800×600]", ">>> Moving rectangle with arrow keys", ">>> Stars: 80 | FPS: 60"],
  },
  {
    id: 10, color: "#ff6b35",
    title: "Flappy Bird: Full Build", subtitle: "Physics, Pipes & Collision",
    concepts: ["Bird physics", "Gravity & velocity", "Pipe collision", "Score system", "Game-over screen"],
    project: "Flappy Bird", xp: 500, badge: "Flappy Legend", badgeIcon: "🐦",
    missionTag: "FLAPPY LEGEND",
    story: "Gravity. Momentum. Collision. These are physics — and you are about to code them from scratch. Flappy Bird sold 50 million downloads. It was built by ONE developer in two days. Today, you join that club.",
    spaceFeature: "Score System + Game Over — Space Shooter now has a full score display and game over screen!",
    snippets: [
      {
        title: "Pygame Setup & Game Window",
        code: `import pygame
import sys

# Initialize Pygame
pygame.init()

# Game constants
WIDTH, HEIGHT = 400, 600
FPS = 60
WHITE  = (255, 255, 255)
BLACK  = (0,   0,   0)
CYAN   = (0,   200, 255)

# Create window
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Flappy Bird — ASHRI Tech")
clock = pygame.time.Clock()

# Game loop
running = True
while running:
    clock.tick(FPS)   # Limit to 60 FPS
    
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    
    screen.fill(BLACK)
    pygame.display.flip()

pygame.quit()
sys.exit()`,
        desc: "This is the foundation of EVERY Pygame game: init → window → game loop → event handling → draw → flip.",
        tryThis: "Change the background colour from BLACK to a dark blue: (10, 20, 40). Run it and see the sky!",
        output: `[Pygame window opens — 400×600 black screen at 60 FPS]`,
      },
      {
        title: "Bird Physics & Jump",
        code: `# Bird variables
bird_x  = 80
bird_y  = HEIGHT // 2
bird_vel = 0        # Current vertical velocity
GRAVITY  = 0.5      # Pulls bird down each frame
JUMP_FORCE = -9     # Negative = upward!

# Inside the game loop:
# --- Physics ---
bird_vel += GRAVITY         # Gravity pulls down
bird_y   += bird_vel        # Move bird by velocity

# --- Jump ---
for event in pygame.event.get():
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_SPACE:
            bird_vel = JUMP_FORCE   # Flap!

# --- Draw bird ---
pygame.draw.circle(screen, CYAN, (bird_x, int(bird_y)), 20)

# --- Floor collision ---
if bird_y > HEIGHT - 20:
    print("Game Over! Hit the floor.")
    running = False`,
        desc: "Gravity is just adding 0.5 to velocity each frame. Jump sets velocity to -9 (upward). Physics in 3 lines!",
        tryThis: "Change GRAVITY to 0.3 for a slower, floatier bird. See how it changes the feel!",
        output: `[Bird falls with gravity, jumps on SPACE key]`,
      },
      {
        title: "Pipes & Collision Detection",
        code: `import random

# Pipe variables
PIPE_WIDTH = 70
GAP_SIZE   = 160   # Space between top and bottom pipe
pipe_x     = WIDTH
pipe_gap_y = random.randint(150, HEIGHT - 200)

# Inside game loop:
# --- Move pipe ---
pipe_x -= 4   # Pipe scrolls left

# --- Respawn pipe ---
if pipe_x < -PIPE_WIDTH:
    pipe_x     = WIDTH
    pipe_gap_y = random.randint(150, HEIGHT - 200)
    score     += 1

# --- Draw pipes ---
GREEN = (34, 197, 94)
# Top pipe
pygame.draw.rect(screen, GREEN, (pipe_x, 0, PIPE_WIDTH, pipe_gap_y - GAP_SIZE//2))
# Bottom pipe
pygame.draw.rect(screen, GREEN, (pipe_x, pipe_gap_y + GAP_SIZE//2, PIPE_WIDTH, HEIGHT))

# --- Collision ---
bird_rect = pygame.Rect(bird_x - 18, int(bird_y) - 18, 36, 36)
top_pipe  = pygame.Rect(pipe_x, 0, PIPE_WIDTH, pipe_gap_y - GAP_SIZE//2)
bot_pipe  = pygame.Rect(pipe_x, pipe_gap_y + GAP_SIZE//2, PIPE_WIDTH, HEIGHT)

if bird_rect.colliderect(top_pipe) or bird_rect.colliderect(bot_pipe):
    running = False   # Game over!`,
        desc: "Rect.colliderect() is Pygame's collision detection. Two rectangles overlapping = True. One line of collision!",
        tryThis: "Add a high_score variable that saves the best score and displays it even after game over.",
        output: `[Pipes scroll left, bird must navigate through gaps]`,
      },
    ],
    challenge: "Add a high score system to Flappy Bird: save the best score in a variable, display it in the top-right corner, and show a 'NEW HIGH SCORE!' message on the game over screen when beaten.",
    gamePreviewIcon: "🐦",
    gamePreviewLines: ["▶ Flappy Bird.py — Running...", ">>> [Pygame Window: Flappy Bird]", ">>> Score: 7 | Best: 12", ">>> SPACE to flap!"],
  },
  {
    id: 11, color: "#8b5cf6",
    title: "Space Shooter Part 1", subtitle: "Building the Core Systems",
    concepts: ["pygame.Rect", "WASD movement", "Bullet list system", "Enemy spawner", "List comprehension cleanup"],
    project: "Shooter Core", xp: 600, badge: "Space Cadet", badgeIcon: "🔫",
    missionTag: "SPACE CADET",
    story: "Yesterday you controlled one thing: a bird. Today you build an entire battlefield. A player ship. Bullets that fire. Enemies that fall. This is a REAL game architecture — the same pattern used in Space Invaders, Galaga, and every shooter ever made.",
    spaceFeature: "The Full System — player + bullets + enemies working together for the first time!",
    snippets: [
      {
        title: "Window, Stars & Player",
        code: `import pygame, sys, random\npygame.init()\n\nW, H = 800, 600\nscreen = pygame.display.set_mode((W, H))\npygame.display.set_caption("Space Shooter — ASHRI Tech")\nclock = pygame.time.Clock()\n\nBG     = (4, 8, 15)\nPLAYER = (0, 200, 255)\nORANGE = (255, 107, 0)\n\n# Star field — generated ONCE before the loop\nstars = [(random.randint(0,W), random.randint(0,H)) for _ in range(100)]\n\n# Player — pygame.Rect stores position + size\nplayer = pygame.Rect(W//2-25, H-90, 50, 50)\nPLAYER_SPEED = 6`,
        desc: "pygame.Rect stores position AND size together — perfect for movement and collision. Stars generated once before the loop so they don't flicker.",
        tryThis: "Change range(100) to range(200) for a denser star field. Notice how it still doesn't slow down!",
        output: "[800×600 dark window with 100 white star dots and a cyan player ship]",
      },
      {
        title: "Player Movement & Boundaries",
        code: `# Inside game loop — UPDATE section:\nkeys = pygame.key.get_pressed()\n\nif keys[pygame.K_a] and player.left   > 0:      player.x -= PLAYER_SPEED\nif keys[pygame.K_d] and player.right  < W:      player.x += PLAYER_SPEED\nif keys[pygame.K_w] and player.top    > H // 2: player.y -= PLAYER_SPEED\nif keys[pygame.K_s] and player.bottom < H:      player.y += PLAYER_SPEED\n\n# DRAW section:\nfor sx, sy in stars:\n    pygame.draw.circle(screen, (255,255,255), (sx, sy), 1)\n\n# Triangle ship shape\npygame.draw.polygon(screen, PLAYER, [\n    (player.centerx, player.top),    # Nose\n    (player.left,    player.bottom), # Left wing\n    (player.right,   player.bottom)  # Right wing\n])\npygame.draw.circle(screen, ORANGE, (player.centerx, player.bottom), 6)`,
        desc: "player.left, player.right, player.top, player.bottom are built-in Rect properties. The boundary player.top > H//2 keeps the player in the bottom half.",
        tryThis: "Remove the boundary checks (the 'and player.left > 0' parts) and watch the ship fly off-screen!",
        output: "[Triangle ship moves with WASD, locked to bottom half, engine glow orange]",
      },
      {
        title: "Bullet System + Enemy Spawner",
        code: `# BEFORE loop:\nbullets = []; BULLET_SPEED = 10\nenemies = []; enemy_timer = 0; ENEMY_SPEED = 3\n\n# EVENTS — fire on SPACE (one-time press, not held):\nif event.type == pygame.KEYDOWN:\n    if event.key == pygame.K_SPACE:\n        b = pygame.Rect(player.centerx-3, player.top, 6, 16)\n        bullets.append(b)\n\n# UPDATE:\nfor b in bullets: b.y -= BULLET_SPEED\nbullets = [b for b in bullets if b.bottom > 0]  # Remove off-screen\n\nenemy_timer += 1\nif enemy_timer >= 60:  # Every 1 second at 60 FPS\n    e = pygame.Rect(random.randint(0, W-40), -40, 40, 40)\n    enemies.append(e); enemy_timer = 0\nfor e in enemies: e.y += ENEMY_SPEED\nenemies = [e for e in enemies if e.top < H]      # Remove fallen`,
        desc: "Every bullet and enemy is a Rect in a list. List comprehension [b for b if...] automatically removes off-screen objects — same pattern for both bullets AND enemies!",
        tryThis: "Print f'Bullets: {len(bullets)}' each frame. Watch the count go up when you shoot and drop when they leave the screen.",
        output: "[Green bullets fire upward, red enemies spawn from top and fall — lists clean themselves!]",
      },
    ],
    challenge: "Combine all three systems: WASD player + SPACE to shoot + enemies every second. Add a shoot cooldown of 20 frames (only one bullet per 20 frames) to prevent spam.",
    gamePreviewIcon: "🔫",
    gamePreviewLines: ["▶ Space Shooter Pt1.py — Running...", ">>> Player: WASD to move", ">>> SPACE to fire bullets", ">>> Enemies spawning every second..."],
  },
  {
    id: 12, color: "#f59e0b",
    title: "Space Shooter Part 2 + Showcase", subtitle: "Python Legend",
    concepts: ["Bullet-enemy collision", "Health bar HUD", "Start screen", "Game-over + restart", "Presentation"],
    project: "Space Shooter Complete", xp: 1000, badge: "Python Legend", badgeIcon: "🏆",
    missionTag: "PYTHON LEGEND",
    story: "You made it, LEGEND. Today you finish what you started. Collision — so bullets destroy enemies. A HUD — so health and score are always visible. A start screen — so it feels like a REAL game. Then you present it to the world. Every line of code, every badge — it all led to THIS moment.",
    spaceFeature: "COMPLETE — Collision + HUD + start screen + game-over with restart. Every concept used in one game!",
    snippets: [
      {
        title: "Bullet-Enemy Collision",
        code: `# Game state (add BEFORE the loop):\nscore  = 0\nhealth = 100\n\n# In UPDATE section — AFTER moving bullets & enemies:\nfor b in bullets[:]:          # [:] = safe copy\n    for e in enemies[:]:\n        if b.colliderect(e):\n            bullets.remove(b)\n            enemies.remove(e)\n            score += 10\n            break             # CRITICAL — stop checking removed bullet!\n\nfor e in enemies[:]:\n    if e.colliderect(player):\n        enemies.remove(e)\n        health -= 20\n    if e.top > H:\n        enemies.remove(e)\n\nif health <= 0:\n    running = False`,
        desc: "bullets[:] creates a SAFE COPY so we can remove during the loop. break is CRITICAL — without it, checking a removed bullet crashes the game.",
        tryThis: "Remove the break and shoot an enemy. The game crashes with ValueError. Put it back. Now you KNOW why it exists.",
        output: "[Bullets destroy enemies on hit, enemies reduce health on contact]",
      },
      {
        title: "Adding a Start Menu",
        code: `def show_menu(screen, W, H):
    font_big = pygame.font.SysFont("Arial", 56, bold=True)
    font_med = pygame.font.SysFont("Arial", 28)
    
    while True:
        screen.fill((4, 8, 15))
        
        # Title
        title = font_big.render("SPACE SHOOTER", True, (0, 200, 255))
        screen.blit(title, title.get_rect(center=(W//2, H//2 - 80)))
        
        # Prompt
        prompt = font_med.render("Press ENTER to Start", True, (255, 255, 255))
        screen.blit(prompt, prompt.get_rect(center=(W//2, H//2 + 20)))
        
        pygame.display.flip()
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_RETURN:
                    return  # Start the game!

# Call before game loop:
show_menu(screen, W, H)`,
        desc: "A menu function runs its own mini-loop waiting for ENTER. When pressed, it returns and the game starts.",
        tryThis: "Add an 'instructions' line to the menu: 'ARROWS: Move | SPACE: Shoot'",
        output: `[Menu screen: SPACE SHOOTER title + Press ENTER to Start]`,
      },
    ],
    challenge: "Add a draw_hud() function showing a health bar + score, a show_start_screen() menu function, and a show_game_over() screen with R=restart, Q=quit. Wrap the whole game in an outer while True loop for restart support.",
    gamePreviewIcon: "🚀",
    gamePreviewLines: ["▶ Space Shooter.py — Running...", ">>> Score: 120 | HP: 80", ">>> [Enemies spawning...]", ">>> GAME COMPLETE! 🏆"],
  },
];
