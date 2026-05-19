// ╔══════════════════════════════════════════════════════════════╗
// ║  GAME TEMPLATES — Code Detective Mode                       ║
// ║  Full Python source for each day with ___ blanks            ║
// ║  RULE: each day adds MORE blanks than the last,             ║
// ║        and also reviews concepts from previous days!        ║
// ╚══════════════════════════════════════════════════════════════╝

// ─── DAY 1 — ROBOT MAZE ───────────────────────────────────────────────────────
// Concepts: print(), input(), variables, f-strings
// 10 blanks — all Day 1 concepts

export const DAY1_TEMPLATE = `# ============================================================
#  ASHRI Tech Game Academy — Day 1
#  ROBOT MAZE EXPLORER
#  Concepts: print(), input(), variables, f-strings
# ============================================================

import os

# ── Settings ──────────────────────────────────────────────────
# 👇 A VARIABLE stores a value. Give the robot a name!
___ = "ROBO-1"         # ← What should we call the robot? (name the variable!)

# 👇 Another VARIABLE — how many moves before game over?
___ = 30               # ← What should we call the move limit? (name the variable!)

# ── Maze layout ───────────────────────────────────────────────
MAZE_TEMPLATE = [
    "###########",
    "#R   # G  #",
    "# # # ### #",
    "# #   #   #",
    "# ##### # #",
    "#       # #",
    "# ##### # #",
    "#   #     #",
    "###########",
]

START_X, START_Y = 1, 1
GOAL_X,  GOAL_Y  = 7, 1
MOVES     = { 'N': (0,-1), 'S': (0,1), 'E': (1,0), 'W': (-1,0) }
DIR_NAMES = { 'N': 'North ↑', 'S': 'South ↓', 'E': 'East →', 'W': 'West ←' }

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def is_wall(x, y):
    if y < 0 or y >= len(MAZE_TEMPLATE): return True
    row = MAZE_TEMPLATE[y]
    if x < 0 or x >= len(row): return True
    return row[x] == '#'

def draw_maze(robot_x, robot_y):
    print()
    for row_idx, row in enumerate(MAZE_TEMPLATE):
        display = ""
        for col_idx, cell in enumerate(row):
            if col_idx == robot_x and row_idx == robot_y:
                display += "🤖"
            elif cell == 'G':
                display += "🚪"
            elif cell == '#':
                display += "██"
            else:
                display += "  "
        print("  " + display)
    print()

def print_stats(robot_x, robot_y, moves):
    dist = abs(robot_x - GOAL_X) + abs(robot_y - GOAL_Y)
    print(f"  📍 Position : ({robot_x}, {robot_y})")
    print(f"  🎯 Goal     : ({GOAL_X}, {GOAL_Y})  — {dist} steps away")
    # 👇 f-string: put the move limit variable inside {  }
    print(f"  👣 Moves    : {moves} / {___}")   # ← which variable is the move limit?
    print()

def run_game():
    clear()
    print("════════════════════════════════════════════")
    print("   🤖  ROBOT MAZE EXPLORER — Day 1")
    print("════════════════════════════════════════════")
    print()
    # 👇 input() is the magic function that reads what you TYPE on the keyboard!
    player_name = ___("  Enter your name, Recruit: ").strip() or "Recruit"
    #             ↑ Which Python function reads keyboard input?

    print()
    # 👇 f-string: type the variable names inside {  } to show their values!
    print(f"  Welcome, {___}! You control {___}.")
    #                   ↑ player variable   ↑ robot variable
    print("  Navigate the maze and find the exit portal 🚪")
    print()

    robot_x, robot_y = START_X, START_Y
    moves = 0
    draw_maze(robot_x, robot_y)
    print_stats(robot_x, robot_y, moves)

    while True:
        print("  > Move [N/S/E/W] or command:", end=" ")
        cmd = input().strip().upper()
        print()

        if cmd == 'QUIT':
            print(f"  Goodbye, {player_name}! {robot_name} will wait. 👋")
            break
        if cmd == 'MAP':
            draw_maze(robot_x, robot_y)
            print_stats(robot_x, robot_y, moves)
            continue
        if cmd == 'RESET':
            run_game(); return
        if cmd not in MOVES:
            print(f"  ❌ Unknown: '{cmd}'. Use N, S, E, W, MAP, RESET, or QUIT.")
            continue

        dx, dy = MOVES[cmd]
        nx, ny = robot_x + dx, robot_y + dy

        if is_wall(nx, ny):
            print(f"  🚫 WALL BLOCKED! Can't move {DIR_NAMES[cmd]}.")
            continue

        robot_x, robot_y = nx, ny
        moves += 1
        print(f"  ✅ {robot_name} moved {DIR_NAMES[cmd]}!")
        draw_maze(robot_x, robot_y)

        if robot_x == GOAL_X and robot_y == GOAL_Y:
            # 👇 f-string in the WIN message — use the player's name!
            print(f"  🎉  MISSION COMPLETE, {___}!")   # ← player name variable
            # 👇 f-string — how many moves did the player use?
            print(f"  👣  You used {___} moves.")       # ← moves variable
            again = input("  Play again? [Y/N]: ").strip().upper()
            if again == 'Y': run_game()
            return

        print_stats(robot_x, robot_y, moves)

        if moves >= moves_limit:
            print(f"  ⏰  OUT OF MOVES! {robot_name} is stuck.")
            again = input("  Play again? [Y/N]: ").strip().upper()
            if again == 'Y': run_game()
            return

if __name__ == "__main__":
    run_game()`;

export const DAY1_BLANKS = [
  "robot_name",  // settings var name
  "moves_limit", // settings var name
  "moves_limit", // f-string in print_stats
  "input",       // keyboard input function
  "player_name", // f-string: welcome message
  "robot_name",  // f-string: welcome message
  "player_name", // f-string: win message
  "moves",       // f-string: move count
];

export const DAY1_HINTS = [
  "A variable that stores the robot's name — call it something like robot_name",
  "A variable that stores how many moves the player gets — call it moves_limit",
  "In the f-string {___}, type the move limit variable you created above",
  "The Python function that reads what you type on the keyboard is called input()",
  "In the f-string, type the variable holding what the player typed for their name",
  "In the same f-string, type the variable holding the robot's name",
  "In the win message, show the player's name using the variable you named earlier",
  "How many moves did the player use? There's a variable called... moves!",
];


// ─── DAY 2 — COIN COLLECTOR ───────────────────────────────────────────────────
// NEW concepts: variables (= with a value), += operator, f-strings on HUD
// REVIEW from Day 1: variable naming, f-string syntax
// 14 blanks

export const DAY2_TEMPLATE = `# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 2 — COIN COLLECTOR DASH                            ║
# ║  NEW: variables, += operator, f-strings                 ║
# ║  REVIEW: naming variables (from Day 1!)                 ║
# ╚══════════════════════════════════════════════════════════╝

import pygame, random, sys

pygame.init()

WIDTH, HEIGHT = 480, 540
FPS           = 60
BASKET_W      = 64
BASKET_H      = 16
BASKET_SPEED  = 6

COIN_TYPES = [
    {"icon": "💰", "pts": 10,  "color": (250, 204, 21)},
    {"icon": "⭐", "pts": 25,  "color": (255, 255, 100)},
    {"icon": "💎", "pts": 50,  "color": (147, 197, 253)},
    {"icon": "💣", "pts":  0,  "color": (239,  68,  68), "bomb": True},
]

# ── VARIABLES — name them! (Day 1 + Day 2 concept) ──────────
# 👇 The score counter — starts at ZERO (give it a good name!)
___ = ___          # ← blank 1: variable name | blank 2: starting value (0 or 3?)

# 👇 How many lives does the player start with? (give it a name!)
___ = ___          # ← blank 3: variable name | blank 4: starting value (0 or 3?)

level  = 1         # already named for you — level starts at 1
caught = 0         # already named for you — caught coins = 0

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Coin Collector Dash — Day 2")
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 36, bold=True)

def spawn_coin():
    kind = random.choices(COIN_TYPES, weights=[40, 30, 20, 10])[0]
    return {
        "x":    random.randint(20, WIDTH - 44),
        "y":    -30,
        "kind": kind,
        "speed": 2.5 + level * 0.4,
    }

# 👇 HUD = Heads Up Display — the score and lives shown on screen!
def draw_hud(coins, lives, level):
    # f-strings display the variable values — Day 1 review! 🔁
    screen.blit(font.render(f"Score: {___}", True, (255, 255, 255)), (10, 8))
    #                                  ↑ which variable holds the score?
    screen.blit(font.render(f"❤️ x{___}",   True, (239,  68,  68)), (10, 32))
    #                               ↑ which variable holds the lives?
    lv = font.render(f"Lv {___}", True, (200, 255, 200))
    #                       ↑ which variable holds the level number?
    screen.blit(lv, (WIDTH - lv.get_width() - 10, 8))

def game_loop():
    global coins, lives, level, caught
    coins = 0; lives = 3; level = 1; caught = 0
    basket_x    = WIDTH // 2 - BASKET_W // 2
    items       = []
    spawn_timer = 0

    while True:
        clock.tick(FPS)
        screen.fill((4, 8, 15))

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()

        keys = pygame.key.get_pressed()
        if (keys[pygame.K_LEFT] or keys[pygame.K_a]) and basket_x > 0:
            basket_x -= BASKET_SPEED
        if (keys[pygame.K_RIGHT] or keys[pygame.K_d]) and basket_x + BASKET_W < WIDTH:
            basket_x += BASKET_SPEED

        # 👇 The spawn timer ticks up every frame using +=
        spawn_timer ___ 1     # ← use += to add 1 to spawn_timer each frame!

        interval = max(30, 70 - level * 5)
        if spawn_timer >= interval:
            items.append(spawn_coin())
            spawn_timer = 0

        for item in items[:]:
            item["y"] += item["speed"]
            bx = basket_x; by = HEIGHT - 40
            if (bx < item["x"] < bx + BASKET_W) and (by < item["y"] < by + BASKET_H + 20):
                items.remove(item)
                if item["kind"].get("bomb"):
                    # 👇 A bomb! Take away a life using -=
                    lives ___ 1   # ← use -= to subtract 1 from lives (ouch!)
                else:
                    pts = item["kind"]["pts"]
                    # 👇 A coin! Add the points to the score using +=
                    ___ ___ pts   # ← blank 1: score variable | blank 2: += operator
                    caught += 1
                    if caught % 8 == 0:
                        level += 1
                continue
            if item["y"] > HEIGHT + 20:
                items.remove(item)
                # 👇 Missed a coin! Lose a life
                lives ___ 1       # ← -= again! (this is the "missed" penalty)

        for item in items:
            c = item["kind"]["color"]
            pygame.draw.circle(screen, c, (item["x"], int(item["y"])), 14)

        pygame.draw.rect(screen, (100, 200, 255),
                         (basket_x, HEIGHT - 40, BASKET_W, BASKET_H), border_radius=6)
        draw_hud(coins, lives, level)

        if lives <= 0:
            screen.blit(big.render("GAME OVER", True, (239, 68, 68)),
                        (WIDTH//2 - 90, HEIGHT//2 - 30))
            # 👇 f-string in the Game Over screen — Day 1 review! 🔁
            screen.blit(font.render(f"Final Score: {___}", True, (255, 255, 255)),
            #                                        ↑ which variable has the score?
                        (WIDTH//2 - 60, HEIGHT//2 + 20))
            pygame.display.flip()
            pygame.time.wait(3000)
            return

        pygame.display.flip()

game_loop()`;

export const DAY2_BLANKS = [
  "coins", "0",          // var name + starting value
  "lives", "3",          // var name + starting value
  "coins",               // HUD f-string: score
  "lives",               // HUD f-string: lives
  "level",               // HUD f-string: level
  "+=",                  // spawn_timer += 1
  "-=",                  // lives -= 1 (bomb)
  "coins", "+=",         // coins += pts
  "-=",                  // lives -= 1 (missed)
  "coins",               // final score f-string
];

export const DAY2_HINTS = [
  "The score variable — a short name like 'coins' or 'score' works great!",
  "Score starts at zero — so the value is the number 0",
  "The lives variable — 'lives' is a perfect name for it!",
  "Players usually start with 3 lives — so the value is 3",
  "Day 1 review: f-string {___} — which variable stores the score? (you named it above!)",
  "Day 1 review: f-string {___} — which variable stores the lives?",
  "f-string {___} — which variable stores the level number? (already named 'level')",
  "+= is the shortcut for spawn_timer = spawn_timer + 1. The operator is: +=",
  "-= subtracts: lives -= 1 means 'take away one life'. The operator is: -=",
  "Which variable stores the score? Type its name here (you named it in blanks 1!)",
  "+= adds to it: coins += pts means 'add pts to coins'. The operator is: +=",
  "-= again! lives -= 1 for a missed coin too",
  "Day 1 review: f-string — which variable has the final score?",
];


// ─── DAY 3 — BATTLE CALCULATOR ───────────────────────────────────────────────
// NEW: def, arithmetic operators (+ - * / //), int(), math.floor()
// REVIEW Day 1: variable naming, input(), f-strings
// REVIEW Day 2: variables (= value), += / -= operators
// 16 blanks

export const DAY3_TEMPLATE = `# ============================================================
#  ASHRI Tech Game Academy — Day 3
#  BATTLE CALCULATOR
#  NEW: def, int(), arithmetic operators, math.floor()
#  REVIEW: variables (Day 1-2), input() (Day 1), += (Day 2)
# ============================================================

import math
import random

# 👇 'def' creates a function — a named block of code we can reuse!
___ print_banner():        # ← def starts every function definition!
    print("════════════════════════════════════════════")
    print("   ⚔️   BATTLE CALCULATOR — Day 3")
    print("════════════════════════════════════════════")

# 👇 This function converts typed TEXT into a whole NUMBER using int()
___ get_int(prompt, lo=1, hi=100):
    while True:
        try:
            # int() converts "35" (text) → 35 (number)
            # input() reads the keyboard — Day 1 review! 🔁
            val = ___(___( prompt ))  # ← blank 1: int()  blank 2: input()
            return max(lo, min(hi, val))
        except ValueError:
            print("  ⚠️  Please type a whole number!")

# 👇 This function CALCULATES damage using arithmetic operators
___ calc_damage(attack, defense):
    # 👇 Arithmetic! attack MINUS defense = how much gets through
    raw   = attack ___ defense     # ← which operator SUBTRACTS? (hint: 10 minus 3 = 7)

    # 👇 math.floor() rounds DOWN to the nearest whole number (like 7.8 → 7)
    bonus = math.___(raw * 1.5)   # ← math.WHAT() rounds down to whole number?

    # 👇 > is the "greater than" comparison operator
    crit  = raw ___ 30             # ← which symbol means "greater than"?
    return bonus if crit else raw, crit

# 👇 The main game function!
___ run_game():
    print_banner()
    print()

    # 👇 Day 1 review: input() reads keyboard text! 🔁
    hero = ___("  Enter your hero name: ").strip() or "Hero"
    #      ↑ which function reads what you type?

    # 👇 Day 2 review: variables with starting values! 🔁
    hero_hp   = ___    # ← what HP should the hero start with? (100 is fair!)
    dragon_hp = ___    # ← same for the dragon!

    round_num = 0

    while hero_hp > 0 and dragon_hp > 0:
        round_num ___ 1   # ← Day 2 review: use += to count rounds! 🔁

        print(f"--- Round {round_num} ---")
        # 👇 Day 1 review: f-strings show variable values! 🔁
        print(f"  Your HP: {hero_hp}  |  Dragon HP: {dragon_hp}")
        #                  ↑ these f-strings already filled in — see the pattern?

        attack  = get_int("  Your attack power (1-50): ", 1, 50)
        defense = random.randint(5, 15)
        damage, crit = calc_damage(attack, defense)

        # 👇 -= means SUBTRACT — the dragon takes damage!
        dragon_hp ___ damage    # ← -= subtracts damage from dragon_hp

        if crit:
            print(f"  💥 CRITICAL HIT! Defense={defense} | Damage={damage}")
        else:
            print(f"  ⚔️  Hit! Defense={defense} | Damage={damage}")

        if dragon_hp > 0:
            counter = random.randint(8, 22)
            # 👇 The dragon fights back! -= again!
            hero_hp ___ counter    # ← -= subtracts counter-attack from hero_hp
            print(f"  🐉 Dragon attacks! -{counter} HP")

        # 👇 Division / to calculate percentage remaining
        dragon_pct = max(0, dragon_hp) ___ 100 * 100  # ← which operator DIVIDES?
        # 👇 f-string with formatting — {variable:.1f} shows 1 decimal place
        print(f"  Dragon HP remaining: {___:.1f}%")   # ← which variable has the %?
        print()

    print("════════════════════════════════════════════")
    if hero_hp > 0:
        print(f"  🏆 {hero} WINS after {round_num} rounds!")
    else:
        print(f"  💀 The Dragon wins after {round_num} rounds.")
    print("════════════════════════════════════════════")

    again = input("  Play again? [Y/N]: ").strip().upper()
    if again == 'Y':
        run_game()

if __name__ == "__main__":
    run_game()`;

export const DAY3_BLANKS = [
  "def",   // print_banner
  "def",   // get_int
  "int", "input",  // int(input())
  "def",   // calc_damage
  "-",     // subtraction
  "floor", // math.floor
  ">",     // greater than
  "def",   // run_game
  "input", // hero = input()
  "100", "100",  // hero_hp = 100, dragon_hp = 100
  "+=",    // round_num += 1
  "-=",    // dragon_hp -= damage
  "-=",    // hero_hp -= counter
  "/",     // division operator
  "dragon_pct",  // f-string
];

export const DAY3_HINTS = [
  "def is the keyword that CREATES a function in Python — always starts with def!",
  "def again — every function starts with def, then the name, then ():",
  "int() converts text like '35' into the number 35 — it wraps around input()",
  "Day 1 review: which function reads what you type on the keyboard?",
  "def appears before EVERY function — what's the keyword?",
  "attack MINUS defense — the subtraction sign in Python is just a minus symbol",
  "math.floor() rounds DOWN — the word after math. is: floor",
  "> means 'greater than' — raw > 30 asks 'is raw bigger than 30?'",
  "def before every function — you're getting it now!",
  "Day 1 review: which function reads keyboard input for the hero's name?",
  "Hero HP starts at 100 — type the number 100",
  "Dragon HP also starts at 100 — type 100 again",
  "Day 2 review: += adds 1 to round_num each round",
  "Day 2 review: -= subtracts — dragon_hp -= damage takes away the damage",
  "Day 2 review: -= again — hero_hp -= counter takes away the counter-attack",
  "Division in Python uses / — dragon_hp divided by 100 gives a percentage",
  "Which variable stores the dragon's HP percentage? It was named 3 lines above!",
];


// ─── DAY 4 — ROCK PAPER SCISSORS DUEL ────────────────────────────────────────
// NEW: if / elif / else, comparison operators (==, !=, >, <), boolean
// REVIEW Day 3: def, arithmetic operators
// REVIEW Day 2: variables, +=
// REVIEW Day 1: input(), f-strings
// 16 blanks

export const DAY4_TEMPLATE = `# ============================================================
#  ASHRI Tech Game Academy — Day 4
#  ROCK PAPER SCISSORS DUEL
#  NEW: if / elif / else, comparison operators, booleans
#  REVIEW: def (Day 3), variables + += (Day 2), input + f-strings (Day 1)
# ============================================================

import random

CHOICES = ["rock", "paper", "scissors"]
ICONS   = {"rock": "✊", "paper": "✋", "scissors": "✌️"}

# 👇 Day 3 review: def creates a function! 🔁
___ print_banner():          # ← def starts a function
    print("════════════════════════════════════════════")
    print("   ✊  ROCK PAPER SCISSORS DUEL — Day 4")
    print("════════════════════════════════════════════")

# 👇 Day 3 review: def again! 🔁
___ get_choice():
    while True:
        # 👇 Day 1 review: input() reads keyboard! 🔁
        pick = ___("  Choose [rock / paper / scissors]: ").lower().strip()
        #      ↑ which function reads what you type?
        if pick in CHOICES:
            return pick
        print("  ❌ Invalid choice! Try again.")

# 👇 This function DECIDES who won — it uses if / elif / else!
___ determine_winner(player, computer):
    # 👇 if starts the FIRST condition check
    ___ player == computer:         # ← what keyword STARTS a condition chain?
        return "tie"
    # 👇 elif means "else if" — the SECOND check
    ___ (player == "rock"     and computer == "scissors") or \
         (player == "scissors" and computer == "paper")    or \
         (player == "paper"    and computer == "rock"):    # ← "else if" keyword?
        return "player"
    # 👇 else catches EVERYTHING that didn't match above — no condition needed!
    ___:                             # ← the final catch-all keyword?
        return "computer"

# 👇 Day 3 review: def again! 🔁
___ run_game():
    print_banner()
    print()

    # 👇 Day 1 review: input() for the player's name! 🔁
    name = ___("  Enter your name: ").strip() or "Player"

    # 👇 Day 2 review: variables starting at 0! 🔁
    player_score   = ___   # ← scores start at what number?
    computer_score = ___   # ← same for computer

    print(f"\n  First to 3 wins, {name}!\n")

    while player_score < 3 and computer_score < 3:
        player   = get_choice()
        computer = random.choice(CHOICES)

        # 👇 Day 1 review: f-string showing the choices! 🔁
        print(f"\n  {ICONS[player]} {player}  vs  {ICONS[computer]} {computer}")

        result = determine_winner(player, computer)   # call the function above!

        # 👇 if / elif / else again — checking the RESULT!
        ___ result == "tie":        # ← same keyword from above: starts with 'i'
            print("  ➖ TIE!")
        ___ result == "player":     # ← same "else if" keyword: starts with 'e'
            # 👇 Day 2 review: += adds 1 to the score! 🔁
            player_score ___ 1      # ← += adds 1 to player_score
            print(f"  ✅ YOU WIN this round!")
        ___:                        # ← the catch-all keyword: no condition
            computer_score ___ 1    # ← += adds 1 to computer_score
            print(f"  🤖 Computer wins this round!")

        # 👇 Day 1 review: f-string showing the scores! 🔁
        print(f"  Score: {name} {player_score}  —  Computer {computer_score}\n")

    print("════════════════════════════════════════════")
    if player_score ___ 3:          # ← which comparison means "is equal to"?
        print(f"  🏆 {name} is the CHAMPION!")
    else:
        print("  🤖 Computer wins the duel!")
    print("════════════════════════════════════════════")

    again = input("  Play again? [Y/N]: ").strip().upper()
    if again == 'Y':
        run_game()

if __name__ == "__main__":
    run_game()`;

export const DAY4_BLANKS = [
  "def",              // print_banner
  "def",              // get_choice
  "input",            // keyboard input — Day 1 review
  "def",              // determine_winner
  "if",               // first condition
  "elif",             // second condition
  "else",             // catch-all
  "def",              // run_game
  "input",            // player name — Day 1 review
  "0", "0",           // scores start at 0 — Day 2 review
  "if",               // result == "tie"
  "elif",             // result == "player"
  "+=",               // player_score += 1 — Day 2 review
  "else",             // computer wins
  "+=",               // computer_score += 1 — Day 2 review
  "==",               // comparison: player_score == 3
];

export const DAY4_HINTS = [
  "def creates a function — it goes right before the function name",
  "def again — print_banner, get_choice, determine_winner, run_game all start with def",
  "Day 1 review: which function reads keyboard input?",
  "def before every function name!",
  "if starts the FIRST condition — it's a 2-letter keyword",
  "elif means 'else if' — for the second possible condition",
  "else catches everything else — no condition, just the word: else",
  "def before run_game too!",
  "Day 1 review: input() reads what the player types for their name",
  "Day 2 review: scores start at the number zero — type: 0",
  "Day 2 review: computer score also starts at 0",
  "if starts the result check — same keyword as blank 5",
  "elif for the second option — same keyword as blank 6",
  "Day 2 review: += adds 1 to player_score. What operator?",
  "else for the last option — same keyword as blank 7",
  "Day 2 review: += adds 1 to computer_score",
  "== checks if two things are EQUAL — it's a double equals sign",
];


// ─── DAY 5 — FALLING BLOCKS ───────────────────────────────────────────────────
// NEW: for loops, while loops, range()
// REVIEW Day 4: if / elif / else
// REVIEW Day 3: def, arithmetic operators
// REVIEW Day 2: variables, +=, -=
// REVIEW Day 1: f-strings
// 16 blanks

export const DAY5_TEMPLATE = `# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 5 — FALLING BLOCKS FRENZY                          ║
# ║  NEW: for loops, while loops, range()                   ║
# ║  REVIEW: if/elif (Day 4), def (Day 3), += (Day 2)       ║
# ╚══════════════════════════════════════════════════════════╝

import pygame, random, sys

pygame.init()

WIDTH, HEIGHT = 480, 560
FPS           = 60
BLOCK_W       = 48
BASKET_W      = 72
BASKET_H      = 14

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Falling Blocks Frenzy — Day 5")
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 38, bold=True)
COLORS = [(100,200,255),(255,150,50),(100,255,150),(255,80,80),(200,100,255)]

# 👇 Day 3 review: def creates a function! 🔁
___ make_block(level):        # ← def before every function!
    return {
        "x":     random.randint(10, WIDTH - BLOCK_W - 10),
        "y":     -BLOCK_W,
        "speed": 2 + level * 0.5,
        "color": random.choice(COLORS),
        "pts":   10 * level,
    }

___ game():                   # ← def again!
    # 👇 Day 2 review: variables with starting values! 🔁
    score  = ___     # ← what number does the score start at?
    lives  = ___     # ← how many lives does the player start with?
    level  = 1       # already filled — level starts at 1
    caught = 0
    basket = WIDTH // 2 - BASKET_W // 2
    blocks = []
    timer  = 0       # frame counter

    # 👇 while True is the GAME LOOP — it runs forever until we quit!
    ___ True:                 # ← what keyword starts a "keeps going" loop?
        clock.tick(FPS)
        screen.fill((4, 8, 15))

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()

        keys = pygame.key.get_pressed()
        if (keys[pygame.K_LEFT]  or keys[pygame.K_a]) and basket > 0:
            basket -= 6
        if (keys[pygame.K_RIGHT] or keys[pygame.K_d]) and basket + BASKET_W < WIDTH:
            basket += 6

        # 👇 Day 2 review: timer ticks up with += every frame! 🔁
        timer ___ 1             # ← which operator adds 1 each frame?

        spawn_rate = max(20, 60 - level * 4)
        # 👇 Day 4 review: if checks a condition! 🔁
        if timer ___ spawn_rate:   # ← which comparison means "greater than or equal"?
            # 👇 for loop repeats a block of code a set number of times!
            ___ _ in ___(1 if level < 4 else 2):
            # ↑ loop keyword      ↑ range() generates a sequence of numbers
                blocks.append(make_block(level))
            timer = 0

        # 👇 for loop goes through EVERY item in the blocks list
        ___ block in blocks[:]:   # ← loop keyword — what is it?
            block["y"] += block["speed"]
            bx = basket; by = HEIGHT - 44
            if (bx < block["x"] + BLOCK_W//2 < bx + BASKET_W) and \
               (by <= block["y"] + BLOCK_W <= by + BASKET_H + 24):
                blocks.remove(block)
                # 👇 Day 2 review: += adds the points! 🔁
                score ___ block["pts"]   # ← which operator adds to score?
                caught += 1
                if caught % 8 == 0:
                    level ___ 1          # ← Day 2 review: += adds 1 to level!
                continue
            if block["y"] > HEIGHT:
                blocks.remove(block)
                # 👇 Day 2 review: -= takes away a life! 🔁
                lives ___ 1              # ← -= removes 1 life when block is missed

        # 👇 for loop using range() to draw blocks by index position
        ___ i in ___(len(blocks)):  # ← loop keyword + range() function
            b = blocks[i]
            pygame.draw.rect(screen, b["color"],
                             (b["x"], b["y"], BLOCK_W, BLOCK_W), border_radius=8)

        pygame.draw.rect(screen, (150, 220, 255),
                         (basket, HEIGHT - 44, BASKET_W, BASKET_H), border_radius=6)
        # 👇 Day 1 review: f-strings display the variables! 🔁
        screen.blit(font.render(f"Score: {score}", True, (255,255,255)), (10, 8))
        screen.blit(font.render(f"❤️ x{lives}", True, (239,68,68)),      (10, 32))
        lv = font.render(f"Lv {level}", True, (150,255,150))
        screen.blit(lv, (WIDTH - lv.get_width() - 10, 8))

        if lives <= 0:
            screen.blit(big.render("GAME OVER", True, (239,68,68)),
                        (WIDTH//2-100, HEIGHT//2-20))
            screen.blit(font.render(f"Score: {score}", True, (255,255,255)),
                        (WIDTH//2-40, HEIGHT//2+30))
            pygame.display.flip()
            pygame.time.wait(3000)
            score=0; lives=3; level=1; caught=0
            basket=WIDTH//2-BASKET_W//2; blocks=[]; timer=0

        pygame.display.flip()

game()`;

export const DAY5_BLANKS = [
  "def",     // make_block
  "def",     // game
  "0",       // score = 0
  "3",       // lives = 3
  "while",   // while True game loop
  "+=",      // timer += 1
  ">=",      // timer >= spawn_rate
  "for", "range",   // for _ in range()
  "for",     // for block in blocks
  "+=",      // score += block["pts"]
  "+=",      // level += 1
  "-=",      // lives -= 1
  "for", "range",  // for i in range()
];

export const DAY5_HINTS = [
  "Day 3 review: def creates a function — it goes before make_block",
  "Day 3 review: def before game() too!",
  "Day 2 review: score starts at zero — the number is: 0",
  "Day 2 review: lives start at 3 — the number is: 3",
  "while True: is the game loop — it keeps running until quit. The keyword is: while",
  "Day 2 review: += adds 1 each frame — timer += 1. What operator?",
  "Day 4 review: >= means 'greater than or equal to' — timer >= spawn_rate",
  "for starts a loop — for _ in range(...):",
  "range() makes a sequence of numbers to repeat — range(3) means 3 times",
  "for starts a loop through the list — for block in blocks[:]:",
  "Day 2 review: += adds points — score += block['pts']. What operator?",
  "Day 2 review: += adds 1 to level when enough caught",
  "Day 2 review: -= removes 1 life — lives -= 1",
  "for starts a loop by index — for i in range(...):",
  "range(len(blocks)) makes indices 0, 1, 2... for each block",
];


// ─── DAY 6 — REACTION SPEED ───────────────────────────────────────────────────
// NEW: def with parameters, return values, calling functions
// REVIEW Day 5: for loops, while loops, range()
// REVIEW Day 4: if / elif / else
// REVIEW Day 3: def (basic), arithmetic
// REVIEW Day 2: variables, +=
// REVIEW Day 1: f-strings, input()
// 18 blanks

export const DAY6_TEMPLATE = `# ============================================================
#  ASHRI Tech Game Academy — Day 6
#  REACTION SPEED TESTER
#  NEW: def with parameters, return values, calling functions
#  REVIEW: for/while (Day 5), if/elif (Day 4), def (Day 3)
# ============================================================

import time, random

# 👇 def creates a function — no parameters this time (empty brackets)
___ print_banner():           # ← def keyword before every function!
    print("════════════════════════════════════════════")
    print("   ⚡  REACTION SPEED TESTER — Day 6")
    print("════════════════════════════════════════════")

# 👇 This function waits, then returns the time of the signal
___ wait_and_signal():
    delay = random.uniform(1.5, 4.0)
    time.sleep(delay)
    print("\n  ⚡⚡⚡  PRESS ENTER NOW!  ⚡⚡⚡")
    # 👇 return sends a VALUE back to whoever called the function!
    ___ time.time()            # ← which keyword SENDS a value back?

# 👇 This function MEASURES reaction time in milliseconds
___ measure_reaction():
    print("  Get ready...")
    signal_time = wait_and_signal()    # calling a function from a function!
    input()
    elapsed_ms = round((time.time() - signal_time) * 1000)
    # 👇 return sends elapsed_ms back to whoever called measure_reaction()
    ___ elapsed_ms             # ← same keyword: sends the value back!

# 👇 This function takes a PARAMETER: ms (the milliseconds)
___ rate_reaction(ms):        # ← def + function name + (parameter)
    # 👇 Day 4 review: if/elif/else decides which rating to give! 🔁
    ___ ms < 150:             # ← what keyword starts the first check?
        ___ "LEGENDARY ⚡"    # ← return the rating string!
    ___ ms < 250:             # ← what keyword for the second check?
        ___ "EXCELLENT 🔥"
    ___ ms < 400:             # ← another elif
        ___ "GOOD 👍"
    ___:                      # ← last keyword: catches everything else
        ___ "KEEP TRAINING 💪"

# 👇 Two parameters: round_num AND ms
___ print_result(round_num, ms):
    # 👇 Calling rate_reaction() with ms as its argument
    rating = ___(ms)          # ← call the function above by its name!
    # 👇 Day 1 review: f-strings show variables! 🔁
    print(f"  Round {round_num}: {ms}ms — {rating}\n")

# 👇 The main game function
___ run_game():
    print_banner()             # calling print_banner — no argument needed
    # 👇 Day 1 review: input() reads the player's name! 🔁
    name    = ___("  Your name: ").strip() or "Player"
    rounds  = 3

    # 👇 Day 2 review: results list (empty at first, we'll add to it)
    results = []

    # 👇 Day 5 review: for loop with range()! 🔁
    ___ i in ___(1, rounds + 1):   # ← loop keyword + range()
        print(f"--- Round {i} / {rounds} ---")
        ms = measure_reaction()
        results.append(ms)
        print_result(i, ms)        # calling print_result with two arguments!

    best    = min(results)
    worst   = max(results)
    # 👇 Day 3 review: arithmetic! sum/len gives the average 🔁
    average = round(sum(results) ___ len(results))  # ← division operator

    print("════════════════════════════════════════════")
    print(f"  Best : {best}ms  — {rate_reaction(best)}")
    print(f"  Worst: {worst}ms")
    print(f"  Avg  : {average}ms  — {rate_reaction(average)}")
    print("════════════════════════════════════════════")

    again = input("  Play again? [Y/N]: ").strip().upper()
    # 👇 Day 4 review: if checks a condition! 🔁
    ___ again == 'Y':         # ← what keyword checks a condition?
        run_game()

if __name__ == "__main__":
    run_game()`;

export const DAY6_BLANKS = [
  "def",           // print_banner
  "def",           // wait_and_signal
  "return",        // return time.time()
  "def",           // measure_reaction
  "return",        // return elapsed_ms
  "def",           // rate_reaction
  "if",            // ms < 150
  "return",        // "LEGENDARY"
  "elif",          // ms < 250
  "return",        // "EXCELLENT"
  "elif",          // ms < 400
  "return",        // "GOOD"
  "else",          // catch-all
  "return",        // "KEEP TRAINING"
  "def",           // print_result
  "rate_reaction", // calling the function
  "def",           // run_game
  "input",         // player name — Day 1 review
  "for", "range",  // for loop — Day 5 review
  "/",             // division — Day 3 review
  "if",            // if again == 'Y'
];

export const DAY6_HINTS = [
  "def creates a function — it's the very first word!",
  "def before wait_and_signal too",
  "return sends a value back — time.time() is the value being sent",
  "def before measure_reaction",
  "return sends elapsed_ms back to the caller",
  "def before rate_reaction(ms) — ms is the parameter",
  "Day 4 review: if starts the first condition check",
  "return sends the rating string back — every branch needs one!",
  "Day 4 review: elif is the second condition check",
  "return sends 'EXCELLENT' back",
  "Day 4 review: elif for the third option",
  "return sends 'GOOD' back",
  "Day 4 review: else catches everything that didn't match",
  "return sends 'KEEP TRAINING' back",
  "def before print_result(round_num, ms)",
  "Call the function by its name: rate_reaction(ms) — just type the function name!",
  "def before run_game",
  "Day 1 review: input() reads what the player types",
  "Day 5 review: for starts a loop",
  "Day 5 review: range() makes the sequence of numbers to loop through",
  "Day 3 review: division uses / — sum divided by len gives the average",
  "Day 4 review: if checks a condition — if again == 'Y':",
];


// ─── DAY 7 — SNAKE LITE ───────────────────────────────────────────────────────
// NEW: lists, .insert(), .pop(), indexing, in operator, enumerate()
// REVIEW Day 6: def, return, function calls
// REVIEW Day 5: for, while, range()
// REVIEW Day 4: if / elif / else
// REVIEW Day 3: arithmetic
// REVIEW Day 2: variables, +=
// 18 blanks

export const DAY7_TEMPLATE = `# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 7 — SNAKE LITE (terminal version)                  ║
# ║  NEW: lists, .insert(), .pop(), indexing, 'in' operator  ║
# ║  REVIEW: def+return (Day 6), for/while (Day 5),          ║
# ║          if/elif (Day 4), += (Day 2)                    ║
# ╚══════════════════════════════════════════════════════════╝

import random, os, time, sys

COLS, ROWS = 20, 16
TICK       = 0.18
DIRS       = {"w": (-1, 0), "s": (1, 0), "a": (0, -1), "d": (0, 1)}
OPPOSITE   = {"w": "s", "s": "w", "a": "d", "d": "a"}

def clear():
    os.system("cls" if os.name == "nt" else "clear")

# 👇 Day 6 review: def + return! 🔁
___ rand_pos(snake):           # ← def keyword!
    """Returns a random cell NOT in the snake's body."""
    # 👇 Day 5 review: while loop! 🔁
    ___ True:                  # ← while loop runs until we find a free spot
        pos = (random.randint(0, ROWS-1), random.randint(0, COLS-1))
        # 👇 'in' checks if something EXISTS in a list!
        if pos not ___ snake:  # ← which 2-letter keyword checks list membership?
            ___ pos            # ← Day 6 review: return keyword sends pos back!

# 👇 Day 6 review: def! 🔁
___ draw(snake, food, score, high):
    clear()
    # 👇 Day 1 review: f-strings! 🔁
    print(f"  Score: {score}   Best: {high}   Length: {len(snake)}")
    print("  " + "─" * (COLS * 2 + 2))
    grid = [["  "] * COLS for _ in range(ROWS)]

    # 👇 Day 5 review: for loop + enumerate()! 🔁
    # enumerate() gives us BOTH the index i AND the item (r,c) at once
    ___ i, (r, c) in ___(snake):  # ← for keyword + enumerate() function
        grid[r][c] = "██" if i == 0 else "▓▓"

    fr, fc = food
    grid[fr][fc] = "🍎"

    ___ row in grid:           # ← for loop through each row
        print("  │" + "".join(row) + "│")
    print("  " + "─" * (COLS * 2 + 2))
    print("  WASD to move  |  Q to quit")

def play():
    # 👇 The snake's body is a LIST of (row, col) positions!
    ___ = [(ROWS//2, COLS//2), (ROWS//2, COLS//2 - 1), (ROWS//2, COLS//2 - 2)]
    #  ↑ What should we call this list variable? (it's the snake!)

    direction = "d"
    food      = rand_pos(snake)   # calling rand_pos — Day 6 review!
    # 👇 Day 2 review: variables starting at 0! 🔁
    score     = ___    # ← score starts at?
    high      = 0

    try:
        import msvcrt
        def get_key():
            if msvcrt.kbhit(): return msvcrt.getwch().lower()
            return None
    except ImportError:
        import tty, termios, select
        fd = sys.stdin.fileno()
        old = termios.tcgetattr(fd)
        tty.setraw(fd)
        def get_key():
            if select.select([sys.stdin], [], [], 0)[0]: return sys.stdin.read(1).lower()
            return None

    try:
        # 👇 Day 5 review: while True game loop! 🔁
        ___ True:              # ← while loop keyword
            draw(snake, food, score, high)
            time.sleep(TICK)

            key = get_key()
            # 👇 Day 4 review: if / elif / else! 🔁
            if key == "q": break
            if key ___ DIRS and key != OPPOSITE.get(direction):
            #       ↑ 'in' checks if key exists IN the DIRS dictionary
                direction = key

            dr, dc   = DIRS[direction]
            head     = snake[0]   # snake[0] is list INDEXING — gets the head!
            new_head = (head[0] + dr, head[1] + dc)

            # Wall collision check
            if not (0 <= new_head[0] < ROWS and 0 <= new_head[1] < COLS):
                print("\n  💀 Hit the wall! Game Over.")
                break

            # 👇 Self collision — is new_head already IN the list?
            if new_head ___ snake:   # ← 'in' checks list membership!
                print("\n  💀 Bit yourself! Game Over.")
                break

            # 👇 .insert(0, item) adds an item at position 0 = the FRONT!
            snake.___(0, new_head)   # ← .insert() adds at a specific position!

            if new_head == food:
                # 👇 Day 2 review: += adds points! 🔁
                score ___ 10         # ← which operator adds to score?
                if score > high: high = score
                food = rand_pos(snake)
                # Don't remove tail — snake GROWS when it eats!
            else:
                # 👇 .pop() removes the LAST item from the list (the tail!)
                snake.___()          # ← .pop() removes the last item (the tail)!

    finally:
        try: termios.tcsetattr(fd, termios.TCSADRAIN, old)
        except Exception: pass

    print(f"\n  Final score: {score}  |  Best: {high}")
    print(f"  Snake length reached: {len(snake)}")

play()`;

export const DAY7_BLANKS = [
  "def",          // rand_pos
  "while",        // while True
  "in",           // pos not in snake
  "return",       // return pos — Day 6 review
  "def",          // draw
  "for", "enumerate",  // for i, (r,c) in enumerate(snake)
  "for",          // for row in grid
  "snake",        // list variable name
  "0",            // score = 0
  "while",        // while True game loop
  "in",           // key in DIRS
  "in",           // new_head in snake (collision)
  "insert",       // snake.insert(0, new_head)
  "+=",           // score += 10
  "pop",          // snake.pop()
];

export const DAY7_HINTS = [
  "Day 6 review: def creates a function — def rand_pos(snake):",
  "Day 5 review: while True keeps looping until we find a free spot",
  "'in' checks if something is IN a list — 2-letter keyword!",
  "Day 6 review: return sends pos back to whoever called rand_pos()",
  "Day 6 review: def before draw too",
  "for starts the loop — for i, (r, c) in enumerate(snake):",
  "enumerate() gives index AND item at the same time — that's the function name",
  "for starts another loop — for row in grid:",
  "The snake's body is a list — call the variable 'snake'!",
  "Day 2 review: score starts at zero — type: 0",
  "Day 5 review: while True is the game loop",
  "'in' checks membership: if key in DIRS (is the key one of the directions?)",
  "'in' again: if new_head in snake (is the new position already in the body?)",
  "insert(0, item) adds to position 0 — the front. The method is: insert",
  "Day 2 review: += adds 10 to score",
  "pop() removes the last item (the tail). The method is: pop",
];


// ─── DAY 8 — METEOR DODGE ─────────────────────────────────────────────────────
// NEW: dictionaries, .keys(), .values(), .get(), .items()
// REVIEW Day 7: lists, in, for loops
// REVIEW Day 6: def, return
// REVIEW Day 5: while, for, range
// REVIEW Day 4: if/elif/else
// REVIEW Day 3: arithmetic, math module
// REVIEW Day 2: variables, +=
// REVIEW Day 1: f-strings
// 18 blanks

export const DAY8_TEMPLATE = `# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 8 — METEOR DODGE                                   ║
# ║  NEW: dictionaries, .keys(), .get(), .items()           ║
# ║  REVIEW: lists (Day 7), for/while (Day 5), def (Day 6)  ║
# ╚══════════════════════════════════════════════════════════╝

import pygame, random, sys

pygame.init()

# 👇 Day 1-2 review: variables store values! Fill in the numbers!
WIDTH, HEIGHT = ___, ___   # ← window width=480, height=560
FPS           = ___        # ← frames per second? (hint: 60 is silky smooth)
PLAYER_W      = ___        # ← player width in pixels? (hint: 48)
PLAYER_SPEED  = ___        # ← pixels moved per frame? (hint: 5 feels responsive)

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Meteor Dodge — Day 8")
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 36, bold=True)

# ╔══════════════════════════════════════════════════════════╗
# ║  DICTIONARIES  — key: value pairs  (Day 8 concept!)     ║
# ╚══════════════════════════════════════════════════════════╝

# 👇 Day 8: A DICTIONARY stores data with KEY: VALUE pairs
# Give this dictionary a name! It stores meteor TYPE data.
___ = {
#  ↑ What should we call this dictionary? (hint: it stores METEOR types!)
    "small":  {"size": 18, "speed": 3.5, "pts": 5,  "color": (200, 150, 100)},
    "medium": {"size": 30, "speed": 2.5, "pts": 10, "color": (180, 100,  60)},
    "large":  {"size": 44, "speed": 1.5, "pts": 20, "color": (220,  80,  40)},
}

# 👇 Another dictionary — name it! It stores power-up data.
___ = {
#  ↑ What should we call this power-ups dictionary? (hint: POWER_UPS)
    "shield": {"color": (100, 200, 255), "duration": 5000, "icon": "🛡️"},
    "slow":   {"color": (255, 220,  50), "duration": 4000, "icon": "⏱️"},
}

# 👇 Day 6 review: def creates a function! 🔁
___ spawn_meteor(level):
    # 👇 Day 8: random.choices() picks from a list WITH weights (rare ones less likely!)
    kind_name = random.___(
        list(METEOR_TYPES.___()),   # ← .keys() returns all keys of a dictionary
        weights=[50, 35, 15]
    )[0]
    # 👇 Day 8: dictionary[key] looks up a value by its key!
    kind = ___[kind_name]           # ← which dictionary stores meteor data?
    return {
        # 👇 Day 8: random.randint(a, b) picks a random whole number between a and b!
        "x":     random.___(20, WIDTH - 20),
        "y":     -kind["___"],               # ← which key gives the meteor's size?
        "size":  kind["___"],               # ← same key again: the size
        "speed": kind["___"] + level * 0.3, # ← which key gives the speed?
        "pts":   kind["___"],               # ← which key gives the points value?
        "color": kind["color"],
        "name":  kind_name,
    }

# 👇 Day 6 review: def again — the main game function! 🔁
___ game():
    px     = WIDTH // 2 - PLAYER_W // 2
    py     = HEIGHT - 80
    # 👇 Day 2 review: starting values for score and lives! 🔁
    score  = ___    # ← score starts at what number?
    lives  = ___    # ← how many lives to start with? (usually 3)
    level  = 1
    # 👇 Day 7 review: empty LIST — we'll fill it with meteor dicts! 🔁
    meteors = []
    timer   = 0

    # 👇 Day 5 review: while True game loop runs forever until we stop it! 🔁
    ___ True:
        # 👇 Day 9 review: clock.tick() limits game speed to FPS! 🔁
        clock.___(FPS)
        screen.fill((4, 8, 15))

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()

        keys = pygame.key.get_pressed()
        move = {
            "left":  keys[pygame.K_LEFT]  or keys[pygame.K_a],
            "right": keys[pygame.K_RIGHT] or keys[pygame.K_d],
            "up":    keys[pygame.K_UP]    or keys[pygame.K_w],
            "down":  keys[pygame.K_DOWN]  or keys[pygame.K_s],
        }
        # 👇 Day 2 review: -= subtracts (move LEFT!), += adds (move RIGHT!) 🔁
        if move["left"]  and px > 0:                px ___ PLAYER_SPEED
        if move["right"] and px + PLAYER_W < WIDTH: px ___ PLAYER_SPEED
        if move["up"]    and py > HEIGHT // 2:      py -= PLAYER_SPEED
        if move["down"]  and py + PLAYER_W < HEIGHT:py += PLAYER_SPEED

        # 👇 Day 2 review: += increases timer by 1 every frame! 🔁
        timer ___ 1

        if timer >= max(25, 60 - level * 4):
            # 👇 Day 7 review: .append() adds a new item to a list! 🔁
            meteors.___(spawn_meteor(level))
            timer = 0

        # 👇 Day 7 review: for loop goes through every item in the list! 🔁
        for m in ___[:]:
            # 👇 Day 2 review: += moves the meteor DOWN by its speed each frame! 🔁
            m["y"] ___ m["speed"]
            cx, cy = px + PLAYER_W//2, py + PLAYER_W//2
            if abs(m["x"] - cx) < m["size"] + 16 and abs(m["y"] - cy) < m["size"] + 16:
                # 👇 Day 2 review: -= takes away one life on collision! 🔁
                lives ___ 1
                # 👇 Day 7 review: .remove() deletes an item from the list! 🔁
                meteors.___(m)
                # 👇 Day 4 review: compare lives to zero — game over check! 🔁
                if lives ___ 0:
                    screen.blit(big.render("GAME OVER", True, (239,68,68)),
                                (WIDTH//2-90, HEIGHT//2-30))
                    pygame.display.flip(); pygame.time.wait(2500)
                    return
                continue
            if m["y"] > HEIGHT + 20:
                meteors.remove(m)
                # 👇 Day 2 review: += adds the meteor's points to score! 🔁
                score ___ m["pts"]

        # 👇 Day 7 review: another for loop — draws every meteor on screen! 🔁
        for m in ___:
            # 👇 Day 9 review: draw.circle draws a filled circle! 🔁
            pygame.draw.___(screen, m["color"], (int(m["x"]), int(m["y"])), m["size"])

        # 👇 Day 9 review: draw.polygon draws any shape from a list of corner points! 🔁
        pygame.draw.___(screen, (150, 220, 255), [
            (px + PLAYER_W//2, py),
            (px + 6, py + PLAYER_W),
            (px + PLAYER_W - 6, py + PLAYER_W),
        ])

        # 👇 Day 1 review: f-strings put variables inside text with {}! 🔁
        screen.blit(font.render(f"Score: {___}", True, (255,255,255)), (10,  8))
        screen.blit(font.render(f"❤️ x{___}",   True, (239, 68, 68)), (10, 32))
        lv = font.render(f"Lv {level}", True, (150,255,150))
        screen.blit(lv, (WIDTH - lv.get_width() - 10, 8))
        # 👇 Day 9 review: flip() shows everything drawn this frame! 🔁
        pygame.display.___()

game()`;

export const DAY8_BLANKS = [
  "480",           // WIDTH
  "560",           // HEIGHT
  "60",            // FPS
  "48",            // PLAYER_W
  "5",             // PLAYER_SPEED
  "METEOR_TYPES",  // dict variable name
  "POWER_UPS",     // dict variable name
  "def",           // def spawn_meteor — Day 6 review
  "choices",       // random.choices()
  "keys",          // .keys() method — Day 8 concept
  "METEOR_TYPES",  // dict lookup
  "randint",       // random.randint()
  "size",          // kind["size"] for y
  "size",          // kind["size"] for size field
  "speed",         // kind["speed"]
  "pts",           // kind["pts"]
  "def",           // def game() — Day 6 review
  "0",             // score = 0
  "3",             // lives = 3
  "while",         // while True — Day 5 review
  "tick",          // clock.tick(FPS) — Day 9 review
  "-=",            // px -= PLAYER_SPEED (move left)
  "+=",            // px += PLAYER_SPEED (move right)
  "+=",            // timer += 1
  "append",        // meteors.append() — Day 7 review
  "meteors",       // for m in meteors[:]
  "+=",            // m["y"] += m["speed"]
  "-=",            // lives -= 1
  "remove",        // meteors.remove(m) after collision
  "<=",            // lives <= 0 — Day 4 review
  "+=",            // score += m["pts"]
  "meteors",       // for m in meteors: (drawing loop)
  "circle",        // pygame.draw.circle — Day 9 review
  "polygon",       // pygame.draw.polygon — Day 9 review
  "score",         // f"Score: {score}" — Day 1 review
  "lives",         // f"❤️ x{lives}" — Day 1 review
  "flip",          // pygame.display.flip() — Day 9 review
];

export const DAY8_HINTS = [
  "Window WIDTH in pixels — the game is 480 wide",
  "Window HEIGHT in pixels — the game is 560 tall",
  "Frames per second — 60 keeps the game smooth",
  "Player width in pixels — 48px is a good size",
  "Pixels moved per frame — 5 feels responsive",
  "Name the meteor-types dictionary — hint: METEOR_TYPES",
  "Name the power-ups dictionary — hint: POWER_UPS",
  "Day 6 review: WHAT keyword defines a function? (def)",
  "random.WHAT() picks from a list with weights? (choices)",
  "Day 8: WHAT method returns all keys of a dictionary? (keys)",
  "We look up the kind inside which dictionary? (METEOR_TYPES)",
  "random.WHAT(a, b) picks a random whole number? (randint)",
  "The first inner key we need is the meteor's size — type: size",
  "Same key again for the size field — type: size",
  "Which key gives the meteor's speed? Look at the dict above! (speed)",
  "Which key gives the meteor's points value? (pts)",
  "Day 6 review: WHAT keyword defines the game function? (def)",
  "Day 2 review: score starts at which number? (0)",
  "Day 2 review: how many starting lives? (3)",
  "Day 5 review: WHAT keyword starts the game loop? (while)",
  "Day 9 review: clock.WHAT(60) limits FPS? (tick)",
  "Day 2 review: moving LEFT subtracts from px — which operator? (-=)",
  "Day 2 review: moving RIGHT adds to px — which operator? (+=)",
  "Day 2 review: WHAT operator adds 1 to timer each frame? (+=)",
  "Day 7 review: WHAT list method adds a new item? (append)",
  "Day 7 review: which list variable holds all the meteors? (meteors)",
  "Day 2 review: WHAT operator moves meteor down by its speed? (+=)",
  "Day 2 review: WHAT operator takes away one life? (-=)",
  "Day 7 review: WHAT list method deletes an item? (remove)",
  "Day 4 review: <= means less-than-or-equal — lives <= 0 means no lives left",
  "Day 2 review: WHAT operator adds the meteor's pts to score? (+=)",
  "Day 7 review: which list variable has all the meteors to draw? (meteors)",
  "Day 9 review: pygame.draw.WHAT draws a filled circle? (circle)",
  "Day 9 review: pygame.draw.WHAT draws any polygon shape? (polygon)",
  "Day 1 review: f-string — which variable has the score? (score)",
  "Day 1 review: f-string — which variable has the lives? (lives)",
  "Day 9 review: pygame.display.WHAT() shows everything each frame? (flip)",
];

// ─── DAY 9 — WINDOW BUILDER (Pygame Intro) ───────────────────────────────────
// Concepts: pygame.init, set_mode, set_caption, clock.tick, draw shapes,
//           get_pressed, event loop, display.flip
// 20 blanks — all Day 9 concepts + progressive review of Days 1–8

export const DAY9_TEMPLATE = `# ============================================================
#  ASHRI Tech Game Academy — Day 9
#  WINDOW BUILDER  (Pygame Intro)
#  Concepts: open a window, draw shapes, move a box with keys
# ============================================================

import ___, sys        # ← Day 9: the NEW library that makes game windows!
#      ↑ Hint: pip install it first, then type its name here

pygame.___()           # ← Day 9: ALWAYS call this FIRST to start Pygame!
#      ↑ Hint: the method that wakes up the whole Pygame engine

# ── Window settings ──────────────────────────────────────────
WIDTH, HEIGHT = 600, ___   # ← what is the window HEIGHT in pixels? (hint: 500)
TITLE         = "Window Builder — Day 9"
BG_COLOR      = (10, 15, 30)   # ← dark blue background  R, G, B

# ── Colour palette (Day 4-8 review: a dictionary!) ───────────
COLORS = {
    "cyan":   (0,   245, 255),
    "purple": (168,  85, 247),
    "green":  ( 16, 185, 129),
    "orange": (251, 146,  60),
    "pink":   (236,  72, 153),
}

# ── Pygame setup ─────────────────────────────────────────────
# 👇 Day 9: set_mode() CREATES the window — give it (width, height)
screen = pygame.display.___( (WIDTH, HEIGHT) )
# 👇 Day 9: set_caption() puts text in the window's title bar
pygame.display.___( TITLE )
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 32, bold=True)

# ── Moving box (Day 2-8 review: variables + dictionary!) ─────
box = {
    "x": WIDTH  // 2 - 30,
    "y": HEIGHT // 2 - 30,
    "w": 60, "h": 60,
    "speed": ___,       # ← how fast should the box move? (hint: 5 pixels per frame)
    "color": COLORS["cyan"],
}

# ── Functions ─────────────────────────────────────────────────
# 👇 Day 3+ review: def keyword DEFINES a reusable function!
___ draw_background_shapes():
    # Day 9: pygame.draw has many shape-drawing methods!
    pygame.draw.___(screen, COLORS["purple"], (50, 50, 120, 80), border_radius=12)
    #              ↑ draws a RECTANGLE — the method is 4 letters
    pygame.draw.___(screen, COLORS["green"],  (WIDTH - 100, 80), 50)
    #              ↑ draws a CIRCLE — the method is 6 letters
    pygame.draw.___(screen, COLORS["orange"], (0, HEIGHT - 60), (WIDTH, HEIGHT - 60), 4)
    #              ↑ draws a straight LINE — the method is 4 letters
    pygame.draw.ellipse(screen, COLORS["pink"],  (200, 350, 160, 80))
    pygame.draw.polygon(screen, COLORS["cyan"],  [(WIDTH//2, 80), (WIDTH//2-50, 160), (WIDTH//2+50, 160)])

# 👇 Day 3+ review: def again — another reusable function!
___ draw_hud():
    # Day 1-2 review: f-strings put variables inside text with {}
    screen.blit(font.render(f"Box: ({box['x']}, {box['___']})", True, (200, 200, 200)), (10, HEIGHT - 30))
    #                                              ↑ x shows horizontal — what variable shows vertical? (y)
    screen.blit(font.render("WASD / Arrow keys to move", True, (100, 100, 150)), (WIDTH//2 - 100, HEIGHT - 30))

# 👇 Day 3+ review: def one more time — the MAIN game function!
___ main():
    running = ___      # ← Day 5+ review: while loops need True to keep going!
    #           ↑ Hint: the loop runs while this is... what?

    # 👇 Day 5+ review: while loop — runs over and over until running = False
    ___ running:
        clock.___(60)  # ← Day 9: limits the game to 60 frames per second
        #        ↑ Hint: the method that controls FPS (4 letters: t-i-c-k)
        screen.fill(BG_COLOR)

        # ── Event handling ─────────────────────────────────
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    running = False
                if event.key == pygame.K_c:
                    import random
                    box["color"] = random.choice(list(COLORS.values()))

        # ── Move the box ────────────────────────────────────
        # 👇 Day 9: get_pressed() checks which keys are held DOWN right now!
        keys = pygame.key.___()
        #                  ↑ Hint: get_WHAT() returns currently pressed keys?

        # 👇 Day 2 review: -= SUBTRACTS — moving LEFT makes x SMALLER!
        if (keys[pygame.K_LEFT] or keys[pygame.K_a]) and box["x"] > 0:
            box["x"] ___ box["speed"]
        # 👇 Day 2 review: += ADDS — moving RIGHT makes x BIGGER!
        if (keys[pygame.K_RIGHT] or keys[pygame.K_d]) and box["x"] + box["w"] < WIDTH:
            box["x"] ___ box["speed"]
        if (keys[pygame.K_UP]   or keys[pygame.K_w]) and box["y"] > 0:
            box["y"] -= box["speed"]
        if (keys[pygame.K_DOWN] or keys[pygame.K_s]) and box["y"] + box["h"] < HEIGHT:
            box["y"] += box["speed"]

        # ── Draw everything ─────────────────────────────────
        draw_background_shapes()
        pygame.draw.rect(screen, box["color"],
                         (box["x"]-4, box["y"]-4, box["w"]+8, box["h"]+8),
                         border_radius=14)
        pygame.draw.rect(screen, (255, 255, 255),
                         (box["x"], box["y"], box["w"], box["h"]),
                         border_radius=10)

        title = big.render("WINDOW BUILDER", True, COLORS["cyan"])
        screen.blit(title, (WIDTH//2 - title.get_width()//2, 12))
        draw_hud()

        # 👇 Day 9: flip() shows EVERYTHING you drew on screen each frame!
        pygame.display.___()
        #               ↑ Hint: flip() flips the hidden canvas to the visible screen

    pygame.quit()
    sys.exit()

main()
`;

export const DAY9_BLANKS = [
  "pygame",        // import pygame
  "init",          // pygame.init()
  "500",           // HEIGHT = 500
  "set_mode",      // pygame.display.set_mode()
  "set_caption",   // pygame.display.set_caption()
  "5",             // "speed": 5
  "def",           // def draw_background_shapes():
  "rect",          // pygame.draw.rect
  "circle",        // pygame.draw.circle
  "line",          // pygame.draw.line
  "def",           // def draw_hud():
  "y",             // box['y'] in f-string
  "def",           // def main():
  "True",          // running = True
  "while",         // while running:
  "tick",          // clock.tick(60)
  "get_pressed",   // pygame.key.get_pressed()
  "-=",            // box["x"] -= box["speed"]  (LEFT)
  "+=",            // box["x"] += box["speed"]  (RIGHT)
  "flip",          // pygame.display.flip()
];

export const DAY9_HINTS = [
  "The NEW library for game windows — you installed it with pip! (pygame)",
  "Always call pygame.WHAT() first before any other pygame code? (init)",
  "The window is 600 pixels wide and how many pixels tall? (500)",
  "pygame.display.WHAT((width, height)) creates the window? (set_mode)",
  "pygame.display.WHAT(title) puts text in the window's title bar? (set_caption)",
  "How many pixels should the box move each frame? (5)",
  "Day 3+ review: WHAT keyword defines a function? (def)",
  "pygame.draw.WHAT draws a rectangle? 4 letters (rect)",
  "pygame.draw.WHAT draws a circle? 6 letters (circle)",
  "pygame.draw.WHAT draws a straight line? 4 letters (line)",
  "Day 3+ review: def again — what keyword defines a function? (def)",
  "f-string: box['x'] shows horizontal position — what key shows vertical? (y)",
  "Day 3+ review: def one more time — what keyword? (def)",
  "Day 5+ review: while loops run while this is True — running = ? (True)",
  "Day 5+ review: WHAT keyword starts the game loop? (while)",
  "Day 9: clock.WHAT(60) limits the game to 60 FPS? (tick)",
  "Day 9: pygame.key.WHAT() checks which keys are held down? (get_pressed)",
  "Day 2 review: moving LEFT makes x smaller — WHAT operator subtracts? (-=)",
  "Day 2 review: moving RIGHT makes x bigger — WHAT operator adds? (+=)",
  "Day 9: pygame.display.WHAT() shows everything drawn each frame? (flip)",
];
