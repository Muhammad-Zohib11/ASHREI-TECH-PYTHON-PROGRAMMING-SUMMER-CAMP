// Downloadable Python game content per day
export const GAME_FILES = {

1: `# ==============================================
# DAY 1 MINI GAME: Robot Maze Explorer
# Concepts: print(), input(), variables
# Run: python day1_robot_maze.py
# ==============================================

print("=" * 40)
print("   🤖 ROBOT MAZE EXPLORER")
print("=" * 40)

# Get the player's name
name = input("Enter your hero name: ")
print(f"\\nWelcome, {name}! You control the robot.")
print("Navigate the maze using directions.\\n")

# Simple text-based maze
maze = [
    "##########",
    "#R . . . #",
    "# ##### .#",
    "# .   . .#",
    "### ### .#",
    "#       .#",
    "# ##### G#",
    "##########",
]

for row in maze:
    print(row)

print("\\nDirections: N=North, S=South, E=East, W=West")
print("Find the G (Goal) from R (Robot)!")

# Simple movement tracker
x, y = 1, 1  # starting position
moves = 0

directions = {"N": (0,-1), "S": (0,1), "E": (1,0), "W": (-1,0)}

while True:
    move = input(f"\\nMove #{moves+1} [N/S/E/W or Q to quit]: ").upper()
    if move == "Q":
        print(f"\\nGame over! You made {moves} moves.")
        break
    if move in directions:
        moves += 1
        dx, dy = directions[move]
        print(f"Robot moved {move}! Position: ({x+dx}, {y+dy})")
        x += dx
        y += dy
        if x == 8 and y == 6:
            print(f"\\n🎉 YOU WIN! {name} escaped the maze in {moves} moves!")
            break
    else:
        print("Invalid direction! Use N, S, E, W")
`,

2: `# ==============================================
# DAY 2 MINI GAME: Coin Collector Dash
# Concepts: variables, f-strings, integers
# Run: python day2_coin_collector.py
# ==============================================

import random

print("=" * 40)
print("   💰 COIN COLLECTOR DASH")
print("=" * 40)

player_name = input("Enter your name: ")
coins = 0
health = 100
level = 1
score = 0

print(f"\\nWelcome, {player_name}!")
print(f"Collect coins, avoid traps!\\n")

for round_num in range(1, 6):
    print(f"--- Round {round_num} / 5 ---")
    event = random.randint(1, 4)

    if event == 1:
        gained = random.randint(5, 20) * level
        coins += gained
        score += gained
        print(f"💰 Found {gained} coins! Total: {coins}")
    elif event == 2:
        bonus = random.randint(10, 30)
        coins += bonus
        score += bonus * 2
        print(f"⭐ BONUS CHEST! +{bonus} coins! Score bonus x2!")
    elif event == 3:
        damage = random.randint(5, 15)
        health -= damage
        print(f"🪤 Trap! -{damage} HP. Health: {health}")
        if health <= 0:
            print("💀 You ran out of health!")
            break
    else:
        level += 1
        print(f"🆙 Level UP! Now level {level}")

    print(f"   Stats: Coins={coins} | HP={health} | Lv={level}")

print(f"\\n{'='*40}")
print(f"FINAL SCORE for {player_name}: {score}")
print(f"Coins collected: {coins} | Final HP: {health}")
print(f"{'='*40}")
`,

3: `# ==============================================
# DAY 3 MINI GAME: Battle Calculator
# Concepts: arithmetic, int(), math module
# Run: python day3_battle_calc.py
# ==============================================

import math
import random

print("=" * 40)
print("   ⚔️  BATTLE CALCULATOR")
print("=" * 40)

hero_name = input("Enter your hero name: ")
hero_hp = 100
enemy_hp = 100
round_num = 0

print(f"\\n{hero_name} vs The Dragon!")
print("Each round you choose your attack power.\\n")

while hero_hp > 0 and enemy_hp > 0:
    round_num += 1
    print(f"--- Round {round_num} ---")
    print(f"Your HP: {hero_hp} | Dragon HP: {enemy_hp}")

    try:
        attack = int(input("Your attack power (1-50): "))
        attack = max(1, min(50, attack))
    except ValueError:
        print("Invalid number! Using 10.")
        attack = 10

    defense = random.randint(5, 15)
    damage = max(0, attack - defense)

    if damage > 30:
        damage = math.floor(damage * 1.5)
        print(f"💥 CRITICAL HIT! Defense={defense} | Damage={damage}")
    else:
        print(f"⚔️  Hit! Defense={defense} | Damage={damage}")

    enemy_hp -= damage

    if enemy_hp > 0:
        counter = random.randint(8, 22)
        hero_hp -= counter
        print(f"🐉 Dragon attacks! -{counter} HP")

print()
if hero_hp > 0:
    print(f"🏆 {hero_name} WINS after {round_num} rounds!")
else:
    print(f"💀 The Dragon wins after {round_num} rounds. Try again!")
`,

4: `# ==============================================
# DAY 4 MINI GAME: Rock Paper Scissors Duel
# Concepts: if/elif/else, comparison, boolean
# Run: python day4_rps_duel.py
# ==============================================

import random

print("=" * 40)
print("   ✊ ROCK PAPER SCISSORS DUEL")
print("=" * 40)

name = input("Enter your name: ")
player_score = 0
computer_score = 0
choices = ["rock", "paper", "scissors"]
icons  = {"rock": "✊", "paper": "✋", "scissors": "✌️"}

print(f"\\nFirst to 3 wins, {name}!\\n")

while player_score < 3 and computer_score < 3:
    player = input("Choose [rock/paper/scissors]: ").lower().strip()
    if player not in choices:
        print("Invalid choice! Try again.")
        continue

    computer = random.choice(choices)
    print(f"  {icons[player]} {player} vs {icons[computer]} {computer}")

    if player == computer:
        print("  TIE!")
    elif (player=="rock" and computer=="scissors") or \
         (player=="scissors" and computer=="paper") or \
         (player=="paper" and computer=="rock"):
        player_score += 1
        print(f"  🎉 YOU WIN! Score: {player_score}-{computer_score}")
    else:
        computer_score += 1
        print(f"  🤖 Computer wins! Score: {player_score}-{computer_score}")

print()
if player_score == 3:
    print(f"🏆 {name} is the CHAMPION!")
else:
    print(f"🤖 Computer wins this time. Better luck next round!")
`,

5: `# ==============================================
# DAY 5 MINI GAME: Falling Blocks Frenzy
# Concepts: for loops, while loops, range()
# Run: python day5_falling_blocks.py
# ==============================================

import random
import time

print("=" * 40)
print("   🧱 FALLING BLOCKS FRENZY")
print("=" * 40)

name = input("Player name: ")
score = 0
lives = 3
speed = 1.0

print(f"\\nCatch the blocks, {name}! You have {lives} lives.\\n")

for wave in range(1, 6):
    print(f"=== WAVE {wave} ===")
    blocks = wave * 2

    for block in range(1, blocks + 1):
        kind = random.choice(["normal","bonus","trap"])
        if kind == "bonus":
            pts = random.randint(20, 50)
            score += pts
            print(f"  Block {block}: ⭐ BONUS +{pts} pts!")
        elif kind == "trap":
            lives -= 1
            print(f"  Block {block}: 💣 TRAP! -{1} life. Lives: {lives}")
            if lives <= 0:
                break
        else:
            pts = random.randint(5, 15) * wave
            score += pts
            print(f"  Block {block}: 🟦 Caught! +{pts} pts")

        time.sleep(0.2)

    if lives <= 0:
        print("\\n💀 No lives left!")
        break

    speed += 0.3
    print(f"Wave clear! Speed increasing to {speed:.1f}x\\n")

print(f"\\n{'='*40}")
print(f"FINAL: {name} scored {score} points!")
if score > 200:
    print("⭐ LEGENDARY performance!")
elif score > 100:
    print("🔥 Great run!")
else:
    print("💪 Keep practicing!")
`,

6: `# ==============================================
# DAY 6 MINI GAME: Reaction Speed Tester
# Concepts: def, parameters, return values
# Run: python day6_reaction_game.py
# ==============================================

import time
import random

def wait_and_signal():
    """Wait a random time then signal GO."""
    delay = random.uniform(1.5, 4.0)
    time.sleep(delay)
    print("\\n⚡⚡⚡  PRESS ENTER NOW!  ⚡⚡⚡")
    return time.time()

def measure_reaction():
    """Measure how fast the player reacts. Returns ms."""
    print("Get ready...")
    signal_time = wait_and_signal()
    input()
    return round((time.time() - signal_time) * 1000)

def rate_reaction(ms):
    """Return a rating string based on reaction time."""
    if ms < 150:   return "LEGENDARY ⚡"
    elif ms < 250: return "EXCELLENT 🔥"
    elif ms < 400: return "GOOD 👍"
    elif ms < 600: return "AVERAGE 😐"
    else:          return "KEEP TRAINING 💪"

print("=" * 40)
print("   ⚡ REACTION SPEED TESTER")
print("=" * 40)

name = input("Your name: ")
results = []

print(f"\\n3 rounds, {name}. React as fast as you can!\\n")

for i in range(1, 4):
    print(f"--- Round {i}/3 ---")
    ms = measure_reaction()
    rating = rate_reaction(ms)
    results.append(ms)
    print(f"Reaction: {ms}ms — {rating}\\n")

avg = round(sum(results) / len(results))
best = min(results)
print(f"{'='*40}")
print(f"Results for {name}:")
print(f"  Best:    {best}ms")
print(f"  Average: {avg}ms — {rate_reaction(avg)}")
print(f"{'='*40}")
`,

7: `# ==============================================
# DAY 7 MINI GAME: Snake Lite
# Concepts: lists, indexing, append(), loops
# Run: python day7_snake_lite.py
# ==============================================

import random

print("=" * 40)
print("   🐍 SNAKE LITE — TEXT VERSION")
print("=" * 40)

GRID = 10
snake = [(5, 5), (4, 5), (3, 5)]
food  = (random.randint(0, GRID-1), random.randint(0, GRID-1))
score = 0
moves = {"W":(0,-1),"S":(0,1),"A":(-1,0),"D":(1,0)}

name = input("Your name: ")
print(f"\\nGuide {name}'s snake to the food! WASD to move.")
print(f"Snake length: {len(snake)} | Food at {food}\\n")

for turn in range(1, 21):
    head = snake[0]
    print(f"Turn {turn}: Head at {head} | Food at {food} | Length: {len(snake)}")
    move = input("Move [W/A/S/D] or Q to quit: ").upper()

    if move == "Q":
        print("Quit!")
        break
    if move not in moves:
        print("Invalid! W=Up A=Left S=Down D=Right")
        continue

    dx, dy = moves[move]
    new_head = (head[0]+dx, head[1]+dy)

    # Wall check
    if not (0 <= new_head[0] < GRID and 0 <= new_head[1] < GRID):
        print("💥 Hit the wall! Game over.")
        break

    # Self check
    if new_head in snake:
        print("💥 Hit yourself! Game over.")
        break

    snake.insert(0, new_head)

    if new_head == food:
        score += 10
        print(f"🍎 Ate food! Score: {score}")
        food = (random.randint(0,GRID-1), random.randint(0,GRID-1))
    else:
        snake.pop()

print(f"\\nFinal score: {score} | Snake length: {len(snake)}")
`,

8: `# ==============================================
# DAY 8 MINI GAME: Meteor Dodge
# Concepts: random, randint, choice, shuffle
# Run: python day8_meteor_dodge.py
# ==============================================

import random
import time

print("=" * 40)
print("   ☄️  METEOR DODGE")
print("=" * 40)

name = input("Pilot name: ")
shield = 100
score  = 0
round_num = 0

print(f"\\nDodge the meteors, {name}! Shield: {shield}\\n")

def spawn_meteor():
    return {
        "x":    random.randint(0, 800),
        "speed": random.randint(3, 12),
        "size":  random.choice(["Tiny","Small","Medium","LARGE","HUGE"]),
        "damage": random.randint(5, 30),
    }

while shield > 0 and round_num < 10:
    round_num += 1
    meteors = [spawn_meteor() for _ in range(random.randint(1, 4))]
    print(f"--- Wave {round_num} ---")

    for m in meteors:
        # 30% chance to dodge based on size
        dodge_chance = {"Tiny":80,"Small":60,"Medium":40,"LARGE":20,"HUGE":5}
        roll = random.randint(1, 100)
        if roll <= dodge_chance.get(m["size"], 40):
            score += m["speed"] * 2
            print(f"  ✅ DODGED {m['size']} meteor! +{m['speed']*2} pts")
        else:
            shield -= m["damage"]
            print(f"  💥 HIT by {m['size']} meteor! -{m['damage']} shield")

    print(f"   Shield: {max(0,shield)} | Score: {score}\\n")
    time.sleep(0.3)

print(f"{'='*40}")
if shield > 0:
    print(f"🏆 {name} survived! Score: {score}")
else:
    print(f"💀 Ship destroyed! Final score: {score}")
`,

9: `# ==============================================
# DAY 9 MINI GAME: Flappy Bird (Pygame)
# Concepts: pygame, physics, collision, game loop
# Run: python day9_flappy_bird.py
# Requires: pip install pygame
# ==============================================

import pygame, sys, random

pygame.init()

W, H   = 400, 600
FPS    = 60
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption("Flappy Bird — ASHRI Tech Day 9")
clock  = pygame.time.Clock()

# Colors
BG     = (10, 20, 40)
CYAN   = (0, 200, 255)
GREEN  = (34, 197, 94)
YELLOW = (245, 158, 11)
WHITE  = (255, 255, 255)
RED    = (239, 68, 68)

# Fonts
font_big = pygame.font.SysFont("Arial", 48, bold=True)
font_med = pygame.font.SysFont("Arial", 24)
font_sm  = pygame.font.SysFont("Arial", 18)

def show_menu():
    while True:
        screen.fill(BG)
        t = font_big.render("FLAPPY BIRD", True, CYAN)
        s = font_med.render("Press SPACE to Start", True, WHITE)
        screen.blit(t, t.get_rect(center=(W//2, H//2 - 60)))
        screen.blit(s, s.get_rect(center=(W//2, H//2 + 10)))
        pygame.display.flip()
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                return

def run_game():
    # Bird
    bird_x, bird_y = 80, H // 2
    bird_vel       = 0
    GRAVITY        = 0.45
    JUMP           = -9

    # Pipes
    PIPE_W = 65
    GAP    = 155
    pipe_x = W
    pipe_gap_y = random.randint(160, H - 180)
    score  = 0
    best   = 0

    running = True
    while running:
        clock.tick(FPS)
        screen.fill(BG)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return score
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                bird_vel = JUMP

        # Physics
        bird_vel += GRAVITY
        bird_y   += bird_vel

        # Pipe movement
        pipe_x -= 4
        if pipe_x < -PIPE_W:
            pipe_x = W
            pipe_gap_y = random.randint(160, H - 180)
            score += 1

        # Draw pipes
        pygame.draw.rect(screen, GREEN, (pipe_x, 0, PIPE_W, pipe_gap_y - GAP//2))
        pygame.draw.rect(screen, GREEN, (pipe_x, pipe_gap_y + GAP//2, PIPE_W, H))
        # Pipe caps
        pygame.draw.rect(screen, (20,160,70), (pipe_x-4, pipe_gap_y-GAP//2-16, PIPE_W+8, 18))
        pygame.draw.rect(screen, (20,160,70), (pipe_x-4, pipe_gap_y+GAP//2, PIPE_W+8, 18))

        # Draw bird
        pygame.draw.circle(screen, CYAN, (bird_x, int(bird_y)), 18)
        pygame.draw.circle(screen, WHITE, (bird_x+8, int(bird_y)-6), 6)
        pygame.draw.circle(screen, (0,0,0), (bird_x+10, int(bird_y)-6), 3)

        # HUD
        s = font_med.render(f"Score: {score}", True, WHITE)
        screen.blit(s, (10, 10))

        # Collisions
        bird_rect = pygame.Rect(bird_x-16, int(bird_y)-16, 32, 32)
        top_pipe  = pygame.Rect(pipe_x, 0, PIPE_W, pipe_gap_y - GAP//2)
        bot_pipe  = pygame.Rect(pipe_x, pipe_gap_y+GAP//2, PIPE_W, H)
        if bird_rect.colliderect(top_pipe) or bird_rect.colliderect(bot_pipe):
            running = False
        if bird_y > H - 18 or bird_y < 0:
            running = False

        pygame.display.flip()
    return score

# Main loop
show_menu()
while True:
    final = run_game()
    # Game over screen
    screen.fill(BG)
    t = font_big.render("GAME OVER", True, RED)
    s = font_med.render(f"Score: {final}", True, WHITE)
    r = font_sm.render("Press SPACE to play again | Q to quit", True, WHITE)
    screen.blit(t, t.get_rect(center=(W//2, H//2 - 60)))
    screen.blit(s, s.get_rect(center=(W//2, H//2)))
    screen.blit(r, r.get_rect(center=(W//2, H//2 + 50)))
    pygame.display.flip()
    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_SPACE:
                    waiting = False
                if event.key == pygame.K_q:
                    pygame.quit(); sys.exit()
`,

10: `# ==============================================
# DAY 10 MINI GAME: Space Shooter (Complete)
# Concepts: game polish, menus, full build
# Run: python day10_space_shooter.py
# Requires: pip install pygame
# ==============================================

import pygame, sys, random

pygame.init()

W, H   = 800, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption("Space Shooter — ASHRI Tech COMPLETE")
clock  = pygame.time.Clock()

BG    = (4, 8, 15)
CYAN  = (0, 200, 255)
RED   = (220, 38, 38)
GREEN = (34, 197, 94)
WHITE = (255, 255, 255)
GOLD  = (245, 158, 11)

font_big = pygame.font.SysFont("Arial", 52, bold=True)
font_med = pygame.font.SysFont("Arial", 26, bold=True)
font_sm  = pygame.font.SysFont("Arial", 18)

def draw_stars(stars):
    for (sx, sy, br) in stars:
        pygame.draw.circle(screen, (br,br,br), (sx,sy), 1)

def show_menu(stars, high_score):
    while True:
        screen.fill(BG)
        draw_stars(stars)
        t  = font_big.render("SPACE SHOOTER", True, CYAN)
        s1 = font_med.render("Press ENTER to Launch", True, WHITE)
        s2 = font_sm.render("ARROWS: Move  |  SPACE: Shoot", True, (150,150,150))
        hs = font_sm.render(f"High Score: {high_score}", True, GOLD)
        screen.blit(t,  t.get_rect(center=(W//2, H//2-90)))
        screen.blit(s1, s1.get_rect(center=(W//2, H//2-10)))
        screen.blit(s2, s2.get_rect(center=(W//2, H//2+40)))
        screen.blit(hs, hs.get_rect(center=(W//2, H//2+80)))
        pygame.display.flip()
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN and event.key == pygame.K_RETURN:
                return

stars = [(random.randint(0,W), random.randint(0,H), random.randint(40,180)) for _ in range(120)]
high_score = 0

while True:
    show_menu(stars, high_score)

    player     = pygame.Rect(W//2-25, H-90, 50, 50)
    p_speed    = 6
    health     = 100
    score      = 0
    bullets    = []
    enemies    = []
    e_timer    = 0
    shoot_cool = 0
    running    = True

    while running:
        clock.tick(60)
        screen.fill(BG)
        draw_stars(stars)
        e_timer += 1
        shoot_cool = max(0, shoot_cool - 1)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE and shoot_cool == 0:
                bullets.append(pygame.Rect(player.centerx-3, player.top, 6, 18))
                shoot_cool = 10

        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT]  and player.left > 0:   player.x -= p_speed
        if keys[pygame.K_RIGHT] and player.right < W:  player.x += p_speed
        if keys[pygame.K_UP]    and player.top > H//2: player.y -= p_speed
        if keys[pygame.K_DOWN]  and player.bottom < H: player.y += p_speed

        if e_timer >= max(20, 60 - score//30):
            enemies.append(pygame.Rect(random.randint(0,W-40),-40,40,40))
            e_timer = 0

        bullets = [b for b in bullets if b.top > 0]
        for b in bullets: b.y -= 12
        for e in enemies: e.y += 3 + score//100

        for b in bullets[:]:
            for e in enemies[:]:
                if b.colliderect(e):
                    bullets.remove(b); enemies.remove(e)
                    score += 10; break

        for e in enemies[:]:
            if e.colliderect(player):
                enemies.remove(e); health -= 20
            elif e.top > H:
                enemies.remove(e)

        if health <= 0: running = False

        # Draw player (triangle shape)
        pts = [(player.centerx, player.top),
               (player.left, player.bottom),
               (player.right, player.bottom)]
        pygame.draw.polygon(screen, CYAN, pts)
        pygame.draw.polygon(screen, WHITE, pts, 2)

        for b in bullets:
            pygame.draw.rect(screen, GREEN, b, border_radius=3)
        for e in enemies:
            pygame.draw.rect(screen, RED, e, border_radius=6)
            pygame.draw.rect(screen, (255,80,80), e, 2, border_radius=6)

        # HUD
        screen.blit(font_med.render(f"Score: {score}", True, WHITE), (10,10))
        hp_c = GREEN if health > 50 else RED
        screen.blit(font_med.render(f"HP: {health}", True, hp_c), (10,42))
        if high_score > 0:
            screen.blit(font_sm.render(f"Best: {high_score}", True, GOLD), (W-120,10))
        pygame.display.flip()

    if score > high_score:
        high_score = score

    screen.fill(BG)
    t  = font_big.render("GAME OVER", True, RED)
    s  = font_med.render(f"Score: {score}", True, WHITE)
    hs = font_sm.render(f"High Score: {high_score}", True, GOLD)
    r  = font_sm.render("ENTER to play again  |  Q to quit", True, (150,150,150))
    if score == high_score and score > 0:
        nb = font_sm.render("🏆 NEW HIGH SCORE!", True, GOLD)
        screen.blit(nb, nb.get_rect(center=(W//2, H//2-110)))
    screen.blit(t,  t.get_rect(center=(W//2, H//2-70)))
    screen.blit(s,  s.get_rect(center=(W//2, H//2-10)))
    screen.blit(hs, hs.get_rect(center=(W//2, H//2+30)))
    screen.blit(r,  r.get_rect(center=(W//2, H//2+70)))
    pygame.display.flip()
    waiting = True
    while waiting:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_RETURN: waiting = False
                if event.key == pygame.K_q:
                    pygame.quit(); sys.exit()
`,
};
