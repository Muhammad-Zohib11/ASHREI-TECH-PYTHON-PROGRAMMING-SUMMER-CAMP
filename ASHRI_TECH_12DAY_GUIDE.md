# ASHRI TECH — AI & Python Programming
## Instructor Teaching Guide · Full 12-Day Bootcamp
> **Program:** AI & Python Programming | **Audience:** Beginners | **Format:** 12-Day Bootcamp

---

## 📋 QUICK REFERENCE — All 12 Days

| Day | Topic | Key Concepts | Badge | Mini-Game | XP |
|-----|-------|-------------|-------|-----------|-----|
| 1 | Input & Output | `print()`, `input()`, Variables, Comments | 🚀 First Program | 🤖 Robot Maze | 150 |
| 2 | Variables & Data | Variables, Strings, Integers, f-strings | 💎 Variable Explorer | 💰 Coin Collector | 200 |
| 3 | Math & Operators | Arithmetic, `int()`/`float()`, `math` module | ⚡ Math Wizard | ⚔️ Battle Calculator | 220 |
| 4 | Conditions | `if`/`elif`/`else`, Comparisons, Boolean logic | 🧠 Condition Commander | ✊ Rock Paper Scissors | 250 |
| 5 | Loops | `for`, `while`, `range()`, `break`/`continue` | 🔄 Loop Master | 🧱 Falling Blocks | 275 |
| 6 | Functions | `def`, Parameters, Return, Defaults | 🧙 Function Wizard | ⚡ Reaction Speed | 300 |
| 7 | Lists | Creation, Indexing, `append/remove`, Loops | 🐍 Array Warrior | 🐍 Snake Lite | 325 |
| 8 | Random | `randint`, `choice`, `shuffle`, Probability | 🎲 Randomness Ninja | ☄️ Meteor Dodge | 350 |
| 9 | Pygame Foundations | Setup, Game Loop, Drawing, Physics | 🪟 Pygame Pioneer | 🪟 Window Builder | 400 |
| 10 | Flappy Bird | Bird Physics, Pipes, Collision, Score | 🐦 Flappy Legend | 🐦 Flappy Bird | 500 |
| 11 | Space Shooter Pt.1 | Player, Bullets, Enemies, Movement | 🚀 Space Cadet | 🔫 Shooter Core | 600 |
| 12 | Space Shooter Pt.2 + Showcase | Menus, Polish, HUD, Presentation | 🏆 Python Legend | 🚀 Space Shooter | 1000 |

**Total XP Available: 4,570 XP**

---

# DAY 1 — How Computers Understand Humans
**Subtitle:** Input & Output | **Mission Tag:** FIRST CONTACT

### 🎯 Learning Objectives
By the end of Day 1, students can:
- Display text on screen using `print()`
- Accept user input using `input()`
- Store data in a variable
- Write comments to explain their code

### 📖 Story Hook (Read to Class)
> *"Welcome, Code Recruit! 🚀 You are about to learn something INCREDIBLE. Python is the exact language used to build real video games, command flying robots, and create AI. Starting TODAY — you can make a computer do ANYTHING you say. You just need to learn its language. One line of code. That is all it takes to begin. Are you ready to speak the language of machines?"*

---

### 🛠️ SETUP FOR TODAY — Day 1

> No extra installations needed today! Pure Python only. 🎉

**Step 1 — Check Python is installed**

Open VS Code, press **Ctrl + `** to open the Terminal, then type:
```bash
python --version
```
You should see `Python 3.x.x`. If you see an error, see Troubleshooting below.

**Step 2 — Create your file**

1. In VS Code, press **Ctrl + N** to create a new file
2. Press **Ctrl + Shift + S** and save it as **`day1.py`**
3. Type your code in the file and you are ready!

**Step 3 — Run your code**

Click the **▶ Run Python File** button in the top right of VS Code, OR type in the Terminal:
```bash
python day1.py
```

| Requirement | Details |
|------------|----------|
| Python version | 3.8 or higher |
| Extra packages | **None!** Pure Python today 🎉 |
| VS Code extension | Python (by Microsoft) |

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| `'python' is not recognized` | Open Microsoft Store → search **"Python 3.11"** → Install → restart VS Code |
| VS Code shows "Select Interpreter" | Press `Ctrl+Shift+P` → type "Python: Select Interpreter" → choose Python 3.x |
| Code runs but nothing appears | Check you saved the file first (`Ctrl+S`) |
| Red squiggles everywhere | Check your quotes: `print("hello")` not `print(hello)` |

---

### 📚 LESSON 1 — Say Hello to the World

**Concept:** `print()` displays text on screen.

```python
print("Hello, Game World!")
print("I am learning Python!")
print("Let the adventure begin!")
```

**Output:**
```
Hello, Game World!
I am learning Python!
Let the adventure begin!
```

**💬 Explain to students:**
- Think of `print()` as your game's **LOUDSPEAKER** 📢 — whatever you put inside the brackets gets displayed on the screen
- The text must be inside **quotes** `" "` or `' '` — this tells Python it is a message to display, not a command
- Each `print()` automatically jumps to a new line, like pressing Enter

**🔥 WOW MOMENT:** Type `print(Hello)` *without* quotes and run it. Python shows a red error! Ask students: *"Why did it crash?"* Answer: Python thought `Hello` was a variable name — not a message. The quotes are what tells Python: *"This is text to show on screen."* Fix it together.

**✏️ Try This:** Change the message to include YOUR name and add your favourite emoji!

---

### 📚 LESSON 2 — Listen to the Player

**Concept:** `input()` collects what the player types.

```python
name = input("Enter your hero name: ")
print("Welcome,", name, "!")
print("Your quest begins NOW.")
```

**Output:**
```
Enter your hero name: Alex
Welcome, Alex !
Your quest begins NOW.
```

**💬 Explain to students:**
- Think of `input()` as a **PAUSE BUTTON** ⏸️ — it freezes the whole program and waits for the player to type something
- Whatever they type gets saved into the variable — like writing a player's name on a scoreboard so you can look it up later
- Without `name =` at the front, Python would forget the answer instantly — gone forever!

**🔥 WOW MOMENT:** Delete `name =` so the line just reads `input("Enter your hero name: ")`. Run it — type a name — then try to print it. *It is gone!* Put `name =` back. Now the variable acts as the game's memory, holding what the player typed so you can use it anywhere in the program.

**✏️ Try This:** Ask the player for their favourite game, then print it back!

---

### 📚 LESSON 3 — Comments Like a Pro

**Concept:** Comments are notes — Python ignores them.

```python
# This is a comment - Python ignores it!
# Use comments to explain your thinking

print("Score: 0")    # Starting score
print("Lives: 3")    # Starting lives
print("Level: 1")    # Starting level
```

**Output:**
```
Score: 0
Lives: 3
Level: 1
```

**💬 Explain to students:**
- A `#` makes the rest of the line a comment
- Comments don't run — they're for humans only
- Real developers comment their code constantly

---

### 🧪 CHALLENGE — Day 1
**Mission: Build the ASHRI TECH Player Registration Terminal!**

Create a registration program that asks 3 questions and builds a personalised welcome card:
1. Ask for the player's **name** using `input()`
2. Ask for their **favourite colour** using `input()`
3. Ask what their **superpower** would be using `input()`
4. Print all three together in a formatted welcome message

**Example output:**
```
Enter your name: Alex
Enter your favourite colour: Blue
Enter your superpower: invisibility
============================
Welcome, Alex!
Hero colour: Blue
Superpower: invisibility
============================
```

> **🏆 Stretch Mission:** Print the name in ALL CAPS using `name.upper()` — try it and see what happens!

> **💡 Fun Experiment:** Change the question text in `input()` to anything you like — `"What is your SECRET CODE NAME? "` still works perfectly, because Python only cares about the variable storing the answer, not what the question says!

---

### ❓ CLASSROOM QUESTIONS — Day 1

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | What does `print()` do? | Displays text/output on the screen |
| Q2 | What does `input()` do? | Pauses program and waits for user to type |
| Q3 | What is a variable? | A named container that stores data |
| Q4 | How do you write a comment in Python? | Start the line with `#` |
| Q5 | What happens if you forget the quotes in `print()`? | Error — Python thinks it's a variable name |

---

### 🎮 MINI-GAME — Robot Maze Explorer 🤖
**Unlocked after:** Completing all 3 challenge missions

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | Use `print()` to display your name | 30 XP |
| Mission 2 | Ask for hero name using `input()` | 40 XP |
| Mission 3 | Print a welcome message using the `name` variable | 50 XP |

**Game:** Navigate ROBO-1 through a text maze using N/S/E/W commands. The robot obeys your `input()` commands — exactly what you built today!

**Controls:** `N` = North, `S` = South, `E` = East, `W` = West, `MAP` = view maze, `RESET` = restart

---

### 🐍 PYTHON VERSION — Run It Yourself! (Day 1)

> **Save as:** `day1_robot_maze.py` | **Run:** `python day1_robot_maze.py`

This is the same game as the website — but written in Python! After completing the web missions, students run this file locally in VS Code. Both versions use `input()` to receive commands and `print()` to show the maze — exactly what today's lessons taught.

```python
# =================================================
# 🤖  DAY 1 PYTHON MINI-GAME:  Robot Maze Explorer
# =================================================
# Concepts used today:
#   print()   → show text on screen
#   input()   → ask the player for a command
#   variables → store the robot's position
#   comments  → notes for YOU (Python ignores them!)
#
# How to run:  python  day1_robot_maze.py
# Python:      3.8 or higher
# Packages:    None — pure Python!
# =================================================

# ── TITLE SCREEN ──────────────────────────────────
print("=" * 45)
print("  🤖   ROBOT MAZE EXPLORER")
print("  ASHRI Tech  ·  Day 1  ·  Python Academy")
print("=" * 45)
print()

# Ask the player for their name — this is input()!
# The answer gets STORED in the variable called 'name'
name = input("🎮  Enter your hero name, Recruit: ")

# Use an f-string to greet them with their name
print()
print(f"  Welcome, {name}!  You control ROBO-1. 🤖")
print("  Mission: guide the robot to the EXIT portal 🚪")
print("  Watch out for walls!  You have 30 moves.")
print()

# ── THE MAZE ──────────────────────────────────────
# The maze is stored as a list of strings (one string per row)
# '#' = wall    ' ' = empty floor    'G' = exit goal
MAZE = [
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

# ── GAME VARIABLES ────────────────────────────────
# These variables track where the robot is right now
robot_x = 1   # Column number — 0 is the left edge
robot_y = 1   # Row number    — 0 is the top edge

# The exit portal lives at this fixed position
GOAL_X = 7
GOAL_Y = 1

MOVE_LIMIT = 30   # Max moves before the robot runs out of energy
moves_used = 0    # Starts at zero, goes up each time the player moves

# ── HELPER FUNCTIONS ──────────────────────────────
def show_maze(rx, ry):
    """Draws the maze with the robot at position (rx, ry)."""
    print()
    for row_num, row in enumerate(MAZE):
        line = ""
        for col_num, cell in enumerate(row):
            if col_num == rx and row_num == ry:
                line += "🤖"   # The robot is HERE
            elif cell == "G":
                line += "🚪"   # Exit portal
            elif cell == "#":
                line += "██"   # Wall — can't walk through!
            else:
                line += "  "   # Empty floor
        print(line)
    print()

def steps_to_goal(rx, ry):
    """How many steps away is the exit? (counts horizontal + vertical, no diagonal)"""
    return abs(rx - GOAL_X) + abs(ry - GOAL_Y)

# ── SHOW THE STARTING MAZE ────────────────────────
show_maze(robot_x, robot_y)
print(f"  📍 Robot starts at:  column {robot_x}, row {robot_y}")
print(f"  🚪 Exit is at:       column {GOAL_X}, row {GOAL_Y}")
print(f"  📏 Distance to exit: {steps_to_goal(robot_x, robot_y)} steps")
print(f"  👣 Moves left:       {MOVE_LIMIT}")
print()
print("  Commands:  N = North ↑    S = South ↓")
print("             E = East  →    W = West  ←")
print("             MAP = show maze     QUIT = give up")
print()

# Each direction changes the robot's x or y coordinate by 1
# Format:  command → (change_in_x, change_in_y, display_label)
DIRECTIONS = {
    "N": ( 0, -1, "North ↑"),   # Up   = row number decreases
    "S": ( 0,  1, "South ↓"),   # Down = row number increases
    "E": ( 1,  0, "East  →"),   # Right = column number increases
    "W": (-1,  0, "West  ←"),   # Left  = column number decreases
}

# ── MAIN GAME LOOP ────────────────────────────────
# Keep asking for commands until the player runs out of moves
while moves_used < MOVE_LIMIT:

    # Ask the player what to do — input() in action!
    cmd = input("  🤖 ROBO-1 command: ").upper().strip()

    # ── SPECIAL COMMANDS ──────────────────────────
    if cmd == "QUIT":
        print(f"\n  Goodbye, {name}! ROBO-1 will wait. 👋")
        break

    if cmd == "MAP":
        show_maze(robot_x, robot_y)
        print(f"  👣 Moves left: {MOVE_LIMIT - moves_used}")
        continue   # Jump back to top of loop — don't count this as a move

    # ── MOVEMENT COMMANDS ─────────────────────────
    if cmd not in DIRECTIONS:
        print(f"  ❌ Unknown command '{cmd}'.")
        print("     Use:  N  S  E  W  MAP  QUIT")
        continue

    # Unpack the direction: x-change, y-change, and a label for display
    dx, dy, label = DIRECTIONS[cmd]
    new_x = robot_x + dx
    new_y = robot_y + dy

    # Check if the new spot is a wall or outside the maze
    if (new_y < 0 or new_y >= len(MAZE) or
            new_x < 0 or new_x >= len(MAZE[new_y]) or
            MAZE[new_y][new_x] == "#"):
        print(f"  🚫  WALL BLOCKED!  ROBO-1 can't go {label}.")
        continue

    # ── MOVE THE ROBOT ────────────────────────────
    robot_x = new_x   # Update the x variable!
    robot_y = new_y   # Update the y variable!
    moves_used += 1   # Add 1 to the move counter (same as moves_used = moves_used + 1)

    print(f"  ✅  ROBO-1 moved {label}!   (Move {moves_used} of {MOVE_LIMIT})")

    # ── WIN CHECK ─────────────────────────────────
    if robot_x == GOAL_X and robot_y == GOAL_Y:
        show_maze(robot_x, robot_y)
        print("=" * 45)
        print(f"  🎉  MISSION COMPLETE, {name}!")
        print(f"  🤖  ROBO-1 escaped the maze!")
        print(f"  👣  Total moves used: {moves_used}")
        print()
        # Star rating based on how efficiently the player navigated
        if moves_used <= 15:
            print("  ⭐⭐⭐  SPEED RUNNER!  Incredible efficiency!")
        elif moves_used <= 22:
            print("  ⭐⭐    Great route!  Well navigated!")
        else:
            print("  ⭐     You made it!  Try for fewer moves next time!")
        print("=" * 45)
        break

    # Show the updated maze and status after each move
    show_maze(robot_x, robot_y)
    print(f"  📍 Position:   column {robot_x}, row {robot_y}")
    print(f"  🎯 Goal:       {steps_to_goal(robot_x, robot_y)} steps away")
    print(f"  👣 Moves left: {MOVE_LIMIT - moves_used}")
    print()

else:
    # Runs when the while loop ends naturally — moves ran out
    print()
    print("=" * 45)
    print("  ⏰  OUT OF MOVES!  ROBO-1 shut down.")
    print("  💡  Restart to try a different route!")
    print("  💡  Tip: type MAP first to plan your path!")
    print("=" * 45)

# =================================================
# 🎨  MAKE IT YOUR OWN!
# =================================================
# • Change MOVE_LIMIT = 20 to make it harder!
# • Change MOVE_LIMIT = 50 to make it easier!
# • Edit the rows in MAZE to design your own level!
#   Use '#' for walls and put 'G' somewhere reachable.
# • Add a 'HINT' command that prints steps_to_goal()
# =================================================
```

**🎨 Customise It:**
- Change `MOVE_LIMIT = 30` to `20` for harder, `50` for easier
- Edit the rows in `MAZE` to design your own level — just keep `#` as walls and put `G` somewhere reachable
- Add a `HINT` command that prints `steps_to_goal(robot_x, robot_y)`

---
---

# DAY 2 — Variables & The Power of Names
**Subtitle:** Data Storage | **Mission Tag:** DATA WIZARD

### 🎯 Learning Objectives
- Create and name variables correctly
- Understand string vs integer types
- Use `+=` to update values
- Display live data using f-strings

### 📖 Story Hook
> *"Every great game in the world stores data. Player health, coin count, speed, score, lives — it is ALL variables! Without variables, games forget EVERYTHING the instant it happens. Think about Minecraft — your coordinates, your inventory, your health — all stored in variables. You are about to become a Data Wizard. Learn to name and store data today and you will control EVERY game you ever build."*

---

### 🛠️ SETUP FOR TODAY — Day 2

> Still no extra installations! Pure Python only 🎉

**Quick reminder — create and run your file:**
1. Open VS Code → Create a new file called **`day2.py`** (`Ctrl+N` then `Ctrl+Shift+S`)
2. Run it with the **▶** button or `python day2.py` in the terminal

**🔧 If you get a `NameError`:** You used a variable name without creating it first. Check spelling — `coins` and `Coins` are two different variables!

---

### 📚 LESSON 1 — Player Stats Board

```python
player_name = "Alex"
health = 100
coins = 0
speed = 5

print(f"Player: {player_name}")
print(f"Health: {health} | Coins: {coins} | Speed: {speed}")
```

**Output:**
```
Player: Alex
Health: 100 | Coins: 0 | Speed: 5
```

**💬 Explain to students:**
- A variable is like a **labelled box** 📦 — you put a value inside it and give the box a name so you can find it later
- Strings (words/text) go inside quotes: `player_name = "Alex"`
- Integers (whole numbers) have no quotes: `health = 100`
- Use `=` to put a value INTO the box (this is called *assignment*, not equals in maths!)

**🔥 WOW MOMENT:** Run the stats print. Then change `health = 100` to `health = 9999` and run again. The output changes instantly — because `health` is just a variable! *"Every number in a game is just a variable someone changed."* Then ask: *"What happens if I change `player_name = "Alex"` to your own name?"*

**✏️ Try This:** Add a `level` variable set to 1 and print it in the stats line.

---

### 📚 LESSON 2 — Collect Coins!

```python
coins = 0
print(f"Start: {coins} coins")

coins = coins + 10
print(f"Coin collected! {coins} coins")

coins += 5   # Shortcut for coins = coins + 5
print(f"Another one! {coins} coins total!")
```

**Output:**
```
Start: 0 coins
Coin collected! 10 coins
Another one! 15 coins total!
```

**💬 Explain to students:**
- `coins = coins + 10` means: take the current value, add 10, and store it back in `coins`
- `coins += 10` is the shortcut — they do EXACTLY the same thing
- Think of `+=` as the game's **COLLECT** action — the basket picks up a coin, the score goes up, and it remembers the new total

**🔥 WOW MOMENT:** Try `coins = coins + 10` WITHOUT saving it: type just `coins + 10` on a line (no assignment). Run it. The coins stay at 0! Python calculated the answer but threw it away. The `= ` is what makes Python *remember* the new value.

**✏️ Try This:** Collect 3 more coins worth 25 each using `+=`, then print the total.

---

### 📚 LESSON 3 — f-Strings: Your Display HUD

```python
player = "Alex"
health = 85
score = 1250
level = 3

hud = f"[{player}] HP:{health} | Score:{score} | Lv{level}"
print(hud)
print(f"You are on Level {level}. Keep going!")
```

**Output:**
```
[Alex] HP:85 | Score:1250 | Lv3
You are on Level 3. Keep going!
```

**💬 Explain to students:**
- An f-string is a **message with live holes in it** — the `{}` curly braces are holes where Python inserts the variable's current value
- The `f` at the very start tells Python: *"This string has live variables inside it"*
- Think of it like a **game HUD** — the display always shows the current value, not the old one

**🔥 WOW MOMENT:** Add `score = 0` then `score += 500` between the setup and the f-string. Add `score` to the HUD line. Run it — the HUD updates automatically. *"This is EXACTLY how a game score display works. One variable, one f-string, always current."*

---

### 🧪 CHALLENGE — Day 2
**Mission: Build the ASHRI TECH Player Stats Terminal!**

1. Create these variables: `name`, `health = 100`, `coins = 0`, `speed = 5`, `level = 1`, `score = 0`
2. Use `input()` to ask for the player's name
3. Use `+=` to collect 3 coins worth 20 each (coins should end at 60)
4. Add `score += coins * 10` to calculate the score
5. Print ALL stats in a single formatted f-string card

**Example output:**
```
============================
  PLAYER: Alex
  Level 1  |  HP: 100
  Coins: 60  |  Score: 600
============================
```

> **🏆 Stretch Mission:** Add a `rank` variable. If `coins >= 50`, set `rank = "Gold"`, otherwise `rank = "Silver"`. Print it in the card!

> **💡 Fun Experiment:** Change `health = 100` to `health = 9999` and rerun. The card updates instantly — because it reads the variable, not a fixed number!

---

### ❓ CLASSROOM QUESTIONS — Day 2

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | What's the difference between `"100"` and `100`? | One is a string (text), one is an integer (number) |
| Q2 | What does `+=` do? | Adds a value to the variable and saves the result |
| Q3 | What does `f"Hello {name}"` do? | Inserts the value of `name` into the string |
| Q4 | Can a variable name have spaces? | No — use underscores: `player_name` |
| Q5 | What is the output of `x = 5; x += 3; print(x)`? | `8` |

---

### 🎮 MINI-GAME — Coin Collector Dash 💰
**Unlocked after:** Completing all 3 challenge missions

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | Create variable `coins = 0` | 30 XP |
| Mission 2 | Use `+=` to add 10 coins | 40 XP |
| Mission 3 | Print score using f-string `f"Coins: {coins}"` | 50 XP |

**Game:** Canvas-based catching game. Catch falling 💰 coins, ⭐ stars, 💎 gems — avoid 💣 bombs. Move with A/D or arrow keys. Score uses the exact variables students built today!

---

### 🐍 PYTHON VERSION — Run It Yourself! (Day 2)

> **Save as:** `day2_coin_collector.py` | **Run:** `python day2_coin_collector.py`

This text-based version uses ONLY what you learned today: variables, `+=`, and f-strings. The basket moves left and right, coins and bombs fall, and your score is a live variable on every line. On Day 9 (when we learn pygame) you can turn this exact same logic into an animated game!

```python
# =================================================
# 💰  DAY 2 PYTHON MINI-GAME:  Coin Collector Dash
# =================================================
# Concepts used today:
#   variables   → coins, lives, score, level
#   +=          → collecting coins and taking damage
#   f-strings   → the live stats display
#
# How to run:  python  day2_coin_collector.py
# Python:      3.8 or higher
# Packages:    None — pure Python!
# =================================================

import random   # We learn this properly on Day 8 — for now it's magic!

# ── TITLE SCREEN ────────────────────────────────
print("=" * 45)
print("  💰   COIN COLLECTOR DASH")
print("  ASHRI Tech  ·  Day 2  ·  Python Academy")
print("=" * 45)
print()

# Ask for the player's name (we learned input() yesterday!)
name = input("🎮  Enter your name, Data Wizard: ")
print()

# ── GAME VARIABLES ──────────────────────────────
# These are the player's stats — all variables!
coins  = 0     # How many coins collected
lives  = 3     # How many lives remaining
score  = 0     # Total score
level  = 1     # Current level
rounds = 0     # How many rounds played

# The playing field is 11 slots wide (positions 0 to 10)
FIELD_WIDTH = 11
basket_pos  = 5   # Basket starts in the middle

print(f"  Welcome, {name}! Catch coins, dodge bombs.")
print(f"  ❤️  Lives: {lives}   💰 Coins: {coins}   Level: {level}")
print()
print("  HOW TO PLAY:")
print("    • A number (0–10) moves your basket to that position")
print("    • Press Enter to stay in place")
print("    • Catch 💰 (+10) and ⭐ (+25). Dodge 💣 (-1 life)!")
print()

# ── MAIN GAME LOOP ──────────────────────────────
while lives > 0:
    rounds += 1

    # Decide what falls this round
    # More bombs fall as the level increases!
    item_choices = ["  💰", "  💰", "  ⭐ ", "  💣"] + ["  💣"] * (level - 1)
    item      = random.choice(item_choices).strip()
    item_pos  = random.randint(0, FIELD_WIDTH - 1)

    # Draw the falling item on the field
    field_row = ["  · "] * FIELD_WIDTH
    field_row[item_pos] = f"  {item} "
    print("  " + "".join(field_row))

    # Draw the position numbers
    print("  " + "".join(f"  {i} " if i < 10 else f" {i} " for i in range(FIELD_WIDTH)))
    print()

    # Draw the basket at its current position
    basket_row = [" __ "] * FIELD_WIDTH
    basket_row[basket_pos] = "🧲  "
    print("  " + "".join(basket_row))
    print()

    # Ask the player to move the basket
    raw = input(f"  Move basket (0–10) or Enter to stay at {basket_pos}: ").strip()
    if raw.isdigit():
        new_pos = int(raw)
        basket_pos = max(0, min(FIELD_WIDTH - 1, new_pos))  # Stay in bounds

    # ── CHECK IF BASKET CAUGHT THE ITEM ────────────
    if basket_pos == item_pos:
        if item == "💰":
            coins  += 10          # += in action! Collect the coin.
            score  += 10
            print(f"  ✅ COIN CAUGHT! +10 coins")
        elif item == "⭐":
            coins  += 25          # Stars worth more!
            score  += 25
            print(f"  ⭐ STAR CAUGHT! +25 coins")
        elif item == "💣":
            lives  -= 1           # -= subtracts and saves back
            print(f"  💥 BOMB HIT! -1 life")
    else:
        print(f"  Miss! The {item} fell at {item_pos}, basket was at {basket_pos}.")

    # Level up every 5 rounds
    if rounds % 5 == 0:
        level += 1
        print(f"  🆙 LEVEL UP! Now Level {level} — more bombs incoming!")

    # Show live stats using f-strings — the values update every round!
    print()
    print(f"  ❤️ Lives: {lives}   💰 Coins: {coins}   🌟 Score: {score}   Level: {level}")
    print()

    if lives <= 0:
        break

# ── GAME OVER ──────────────────────────────────
print("=" * 45)
print(f"  GAME OVER, {name}!")
print(f"  Final Score:  {score}")
print(f"  Coins caught: {coins}")
print(f"  Rounds:       {rounds}")
print()
if score >= 200:
    print("  🏆 COIN MASTER! Incredible run!")
elif score >= 100:
    print("  🔥 Great collecting!")
else:
    print("  💪 Good effort! Run again to beat your score!")
print("=" * 45)

# =================================================
# 🎨  MAKE IT YOUR OWN!
# =================================================
# • Change the coin values: try coins += 50 for mega-coins!
# • Add a '💎' gem that gives +100 coins
# • Add a '❤️' heart that restores 1 life
# • Change FIELD_WIDTH = 15 for a wider field
# • On Day 9 (pygame), this becomes an animated game!
# =================================================
```

**🎨 Customise It:**
- Change coin/star values with `+= 50` or `+= 100`
- Add a `'💎'` gem that gives `+100` score
- Change `FIELD_WIDTH = 15` for a wider playing field
- When you reach Day 9, revisit this game and make it animated with pygame!

---
---

# DAY 3 — Operations & Typecasting
**Subtitle:** Math Magic | **Mission Tag:** MATH MAGIC

### 🎯 Learning Objectives
- Use arithmetic operators: `+`, `-`, `*`, `/`, `//`, `%`
- Understand order of operations
- Convert types with `int()` and `float()`
- Use the `math` module

### 📖 Story Hook
> *"Games calculate EVERYTHING behind the scenes. Every time an enemy hits you, Python runs a damage formula. Every time you level up, Python multiplies your XP. Every falling coin, every speed boost, every explosion — it's ALL math! Today you become the game engine. You will make Python crunch numbers like a REAL battle system."*

---

### 🛠️ SETUP FOR TODAY — Day 3

> Pure Python only — one special import today: `import math` (already built in!)

**Create your file:** Save as **`day3.py`** and run with `python day3.py`

**Today you will use `import math` at the top of your file.** This loads Python's built-in maths toolkit — no installation needed!

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| `ValueError: invalid literal for int()` | You typed a letter where a number was expected — try again with a number like `5` |
| `ZeroDivisionError` | You divided by zero! Check your formula for a ` / 0` somewhere |
| `NameError: math is not defined` | Add `import math` as the very first line of your file |

---

### 📚 LESSON 1 — Battle Damage Calculator

```python
attack = 35
defense = 12
critical_hit = True

damage = attack - defense

if critical_hit:
    damage = damage * 2
    print("CRITICAL HIT!")

print(f"Damage dealt: {damage}")
print(f"Enemy health: {100 - damage}")
```

**Output:**
```
CRITICAL HIT!
Damage dealt: 46
Enemy health: 54
```

**💬 Explain to students:**
- Arithmetic operators are the maths you already know: `+` add, `-` subtract, `*` multiply, `/` divide
- `damage = attack - defense` is just `35 - 12 = 23` — stored in a variable
- Multiplying by 2 for a critical hit is EXACTLY how every RPG game does it

**🔥 WOW MOMENT:** Change `attack = 35` to `attack = 100` and run again. Damage jumps to 176! Then try `defense = 50` — it shrinks back. Students feel the variables like game sliders. *"This is how every RPG adjusts difficulty — just different numbers."*

**✏️ Try This:** Add a `level` variable. Multiply `damage` by `level / 2` for a level bonus. Try Level 1 vs Level 5.

```python
# input() always gives TEXT, not numbers!
level_str = input("Enter your level (1-10): ")
level = int(level_str)   # Convert text to number!

bonus_xp = level * 150
health_bonus = level * 20

print(f"Level {level} bonuses:")
print(f"  XP Bonus:     +{bonus_xp}")
print(f"  Health Bonus: +{health_bonus}")
```

> ⚠️ **Key Rule:** `input()` ALWAYS returns a string. Use `int()` or `float()` before doing math!

**🔥 WOW MOMENT:** Delete `level = int(level_str)` and just write `level = level_str`. Then run and enter `5`. Python will print `Level 5` but when you try `level * 150` it crashes with `TypeError`! The error says Python can't multiply a string by a number. Add `int()` back — fixed! *"This is the #1 bug beginners hit. Now you know the fix forever."*

**✏️ Try This:** Ask for the player's ATTACK and DEFENSE as inputs, convert both to `int()`, then calculate and print `damage = attack - defense`.

```python
import math

speed = 7.8
distance = 142.5

print(f"Speed (rounded): {round(speed)}")
print(f"Distance ceiling: {math.ceil(distance)}")
print(f"Square root of 64: {math.sqrt(64)}")

score = math.floor(distance * speed * 1.5)
print(f"Final Score: {score}")
```

**💬 Explain to students:**
- `import math` loads Python's built-in maths toolkit — think of it like picking up a calculator
- `math.sqrt(64)` = 8.0 (square root)
- `math.floor(3.9)` = 3 (always round DOWN)
- `math.ceil(3.1)` = 4 (always round UP)
- `round(7.8)` = 8 (round to nearest)

**🔥 WOW MOMENT:** Type `print(math.sqrt(attack * 1000))` where `attack = 35`. Show that Python handles huge maths instantly. Then show `math.pi` — Python knows Pi to 15 decimal places! Ask: *"Where do you think Pi shows up in games?"* (Answer: circles! Enemy radius, explosion range, wheel rotation.)

---

### 🧪 CHALLENGE — Day 3
**Mission: Build the ASHRI TECH Battle Stat Calculator!**

1. Use `input()` to ask for `attack` and `defense` (convert both with `int()`)
2. Calculate: `damage = attack - defense` (minimum 1)
3. Calculate: `crit_damage = damage * 2`
4. Use `math.floor()` to calculate: `score = math.floor(attack * defense * 1.5)`
5. Use `math.sqrt()` to show: `power_level = math.sqrt(attack + defense)`
6. Print a full battle stats card with all 5 values

**Example output:**
```
Enter attack power:  40
Enter defense power: 15

  ⚔️  BATTLE STATS
  Damage:       25
  Crit damage:  50
  Score:        900
  Power level:  7.42
```

> **🏆 Stretch Mission:** Add a `level = int(input("Level: "))`. Multiply the final score by `level` and print the result. Try level 1 vs level 10!

> **💡 Fun Experiment:** Try `int("hello")` in your code and run it. Read the error message. What does Python call this type of error? (Hint: it starts with "Value".)

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | What does `int()` do? | Converts a value to a whole number |
| Q2 | Why must we convert `input()` results? | Because `input()` always returns a string |
| Q3 | What is `10 % 3`? | `1` (remainder of 10 ÷ 3) |
| Q4 | What does `//` do? | Integer (floor) division — drops the decimal |
| Q5 | What's the difference between `round()` and `math.floor()`? | `round()` rounds normally; `floor()` always rounds down |

---

### 🎮 MINI-GAME — Battle Calculator ⚔️

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | Create `attack = 35` and `defense = 12` | 30 XP |
| Mission 2 | Calculate `damage = attack - defense` and print it | 50 XP |
| Mission 3 | Write `level = int(input("Level: "))` | 60 XP |

**Game:** Interactive terminal battle. Type your attack power, see damage calculated in real-time. Uses the exact arithmetic students learned today!

---

### 🐍 PYTHON VERSION — Run It Yourself! (Day 3)

> **Save as:** `day3_battle_calculator.py` | **Run:** `python day3_battle_calculator.py`

You design your hero's stats, choose your attacks, and Python calculates EVERYTHING using the arithmetic and `math` module from today's lesson. Every number you see comes from a formula you now understand!

```python
# =================================================
# ⚔️  DAY 3 PYTHON MINI-GAME:  Battle Calculator
# =================================================
# Concepts used today:
#   arithmetic   → +, -, *, /, //, %
#   int()        → convert input text to numbers
#   math module  → sqrt, floor, ceil
#   f-strings    → live battle stats display
#
# How to run:  python  day3_battle_calculator.py
# Python:      3.8 or higher
# Packages:    None — pure Python!
# =================================================

import math

# ── TITLE SCREEN ────────────────────────────────
print("=" * 50)
print("  ⚔️   BATTLE CALCULATOR")
print("  ASHRI Tech  ·  Day 3  ·  Python Academy")
print("=" * 50)
print()

# Get hero name
name = input("🎮  Enter your hero name: ")
print()

# ── HERO CREATION ──────────────────────────────
print("  [HERO CREATION]")
attack_raw  = input("  Enter your ATTACK power  (1–100): ")
defense_raw = input("  Enter your DEFENSE power (1–100): ")

# Convert text to numbers with int()
# input() ALWAYS returns a string — int() turns it into a real number
attack  = int(attack_raw)
defense = int(defense_raw)

# Keep stats inside valid range
attack  = max(1, min(100, attack))
defense = max(1, min(100, defense))

# Calculate hero stats using arithmetic and the math module!
max_health  = 100 + (defense * 2)          # More defense = more health
crit_bonus  = math.floor(attack * 0.5)      # Crit damage bonus
level       = (attack + defense) // 20      # Integer division gives a clean level
speed       = math.ceil(attack / 10)        # Higher attack = faster

print()
print("  ╔═══════════════════════════════╗")
print(f"  ║  HERO: {name:<23}║")
print(f"  ║  ATK: {attack:<5}  DEF: {defense:<16}║")
print(f"  ║  HP:  {max_health:<5}  Level: {level:<13}║")
print(f"  ║  Crit Bonus: {crit_bonus:<4}  Speed: {speed:<6}║")
print("  ╚═══════════════════════════════╝")
print()

# ── THE ENEMY ─────────────────────────────────
enemy_name    = "SHADOW TROLL"
enemy_hp      = 100
enemy_attack  = 22
enemy_defense = 8

print(f"  👺  {enemy_name} appears!")
print(f"  Enemy HP: {enemy_hp}  |  ATK: {enemy_attack}  |  DEF: {enemy_defense}")
print()

# ── BATTLE ROUNDS ─────────────────────────────
hero_hp   = max_health
round_num = 0

# We'll learn while loops properly on Day 5 — just watch how this works!
while hero_hp > 0 and enemy_hp > 0:
    round_num += 1
    print(f"  ─── ROUND {round_num} ────────────────────────────")
    print(f"  {name}: {hero_hp} HP   {enemy_name}: {enemy_hp} HP")
    print()

    choice = input("  [1] Normal Attack   [2] Power Strike   [3] Defend: ").strip()

    if choice == "1":
        # Normal: damage = your attack minus enemy defense (minimum 1)
        dmg = max(1, attack - enemy_defense)
        enemy_hp -= dmg
        print(f"  ⚔️  Normal attack! You deal {dmg} damage.")

    elif choice == "2":
        # Power Strike: triple attack! But costs 15 HP
        dmg = max(1, attack * 3 - enemy_defense) + crit_bonus
        enemy_hp -= dmg
        hero_hp  -= 15
        print(f"  💥 POWER STRIKE! {dmg} damage! (-15 HP cost)")

    elif choice == "3":
        # Defend: skip attack, recover some HP
        heal = defense // 3
        hero_hp = min(max_health, hero_hp + heal)
        dmg = 0
        print(f"  🛡️  You defend! Recovered {heal} HP.")

    else:
        dmg = max(1, attack - enemy_defense)
        enemy_hp -= dmg
        print(f"  ⚔️  Attack! You deal {dmg} damage.")

    # Did we win?
    if enemy_hp <= 0:
        print(f"\n  {enemy_name} is DEFEATED!")
        break

    # Enemy counterattack
    enemy_dmg = max(1, enemy_attack - defense)
    hero_hp  -= enemy_dmg
    print(f"  👹 {enemy_name} hits you for {enemy_dmg} damage!")
    print()

# ── FINAL RESULTS ───────────────────────────────
print()
print("=" * 50)
print(f"  ⚔️  BATTLE COMPLETE — {name}")
print()
if hero_hp <= 0:
    print("  💀 DEFEATED! The Troll wins this round.")
    print("  💡 Tip: increase DEFENSE to survive longer!")
else:
    # XP formula using math module
    xp     = math.floor(100 * (1 + attack / 50))
    gold   = max(10, 100 - enemy_hp)
    print(f"  🎉 VICTORY, {name}!")
    print(f"  ⭐ XP earned:    {xp}")
    print(f"  💰 Gold earned:   {gold}")
    print(f"  ❤️  HP remaining:  {hero_hp}")
    print(f"  Rounds fought: {round_num}")
print()
if round_num <= 3 and hero_hp > 0:
    print("  🏆 SPEED WARRIOR! 3 rounds or fewer!")
elif hero_hp > 0:
    print("  🔥 Strong finish!")
else:
    print("  💪 Adjust your stats and try again!")
print("=" * 50)

# =================================================
# 🎨  MAKE IT YOUR OWN!
# =================================================
# • Change enemy_attack/defense to make it harder or easier
# • Try Power Strike: change attack * 3 to attack * 5
# • Add a HEAL option: hero_hp += 30 (no attack that round)
# • Change enemy_hp = 200 for a boss fight!
# =================================================
```

**🎨 Customise It:**
- Change `enemy_attack` and `enemy_defense` to tune the difficulty
- Try `attack * 5` in the Power Strike for a mega hit
- Set `enemy_hp = 200` for an epic boss fight
- Add a HEAL action: `hero_hp += 30` (skip your attack)

---
---

# DAY 4 — Conditions: Games That Think
**Subtitle:** Decision Making | **Mission Tag:** BRAIN POWER

### 🎯 Learning Objectives
- Write `if`, `elif`, `else` chains
- Use comparison operators: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Combine conditions with `and`, `or`, `not`
- Write nested conditions

### 📖 Story Hook
> *"Today we teach your game to THINK. Every game decision — should the enemy attack or run? Did the player win or lose? Should the door unlock? — is an `if` statement! Without conditions, programs are just calculators that do the same thing every time. With conditions, they become INTELLIGENT. You are about to give your programs a brain."*

---

### 🛠️ SETUP FOR TODAY — Day 4

> Pure Python only — no installations needed!

**Create your file:** Save as **`day4.py`** and run with `python day4.py`

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| `IndentationError` | Code inside `if` must be indented (4 spaces or 1 Tab). All lines in the same block must match |
| `if player = "rock"` crashes | Use `==` for comparing, not `=`. One `=` is assignment, two `==` is comparison! |
| `elif` without `if` crashes | Every `elif` or `else` must follow an `if` block |

---

### 📚 LESSON 1 — Health Check System

```python
health = 45

if health > 80:
    print("Status: HEALTHY 💚")
elif health > 50:
    print("Status: DAMAGED 🟡")
elif health > 20:
    print("Status: CRITICAL 🔴")
else:
    print("Status: DEAD 💀")
    print("Game Over!")
```

**Output:** `Status: CRITICAL 🔴`

**💬 Explain to students:**
- Python reads `if` conditions **top to bottom** and stops at the FIRST one that is True
- Once Python finds a matching condition, it skips all the remaining `elif`/`else` blocks
- `else` is the safety net — it catches everything that didn't match any condition above it
- Indentation (the spaces before the print) is NOT optional — it tells Python which lines belong to which condition

**🔥 WOW MOMENT:** Change `health = 45` to `health = 5`. Run it — now BOTH death lines print! Then change to `health = 95`. Now the HEALTHY line prints. Then `health = 51` — it's DAMAGED not CRITICAL. Students feel the exact tipping points. *"Every game's health bar is just an if/elif chain like this one."*

```python
player = "rock"
computer = "scissors"

if player == computer:
    print("TIE! Try again.")
elif (player == "rock"     and computer == "scissors") or \
     (player == "scissors" and computer == "paper")   or \
     (player == "paper"    and computer == "rock"):
    print(f"YOU WIN! {player} beats {computer}! 🎉")
else:
    print(f"COMPUTER WINS! {computer} beats {player}! 🤖")
```

**Output:** `YOU WIN! rock beats scissors! 🎉`

**💬 Explain to students:**
- `==` checks if two things are the SAME (two equals signs! one `=` is for saving a value)
- `and` means BOTH conditions must be true at the same time — like needing BOTH a key AND a code to open a door
- `or` means AT LEAST ONE condition must be true — like unlocking a door with either a key OR a fingerprint
- The `\` at the end of a line just means "this line continues below" — it keeps long conditions readable

**🔥 WOW MOMENT:** Change `player = "rock"` to `player = "ROCK"` (uppercase). Run it — Python says it's a TIE or COMPUTER WINS because `"ROCK" != "rock"`! Python is case-sensitive. Add `.lower()` after the variable and show it fixes the problem. *"This exact bug trips up beginners on Day 1 of a real Python job."*

```python
score = 850
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
    print("Keep practicing. You'll get there!")
```

**Output:** `Great combo! You're on fire! 🔥`

**💬 Explain to students:**
- Nested conditions are `if` statements INSIDE other `if` statements — like locked doors inside a building
- The outer `if` checks the big condition first ("Are you even in the right score range?")
- The inner `if` checks a smaller detail ("AND do you also have a streak?")
- Only if both are True does the special message appear

**🔥 WOW MOMENT:** Change `streak = 5` to `streak = 3`. The message changes to "Good score. Build your streak!" even though the score didn't change. Then change `score = 600` and `streak = 12` — students have to trace through the logic themselves to predict what prints before running it. First person to get it right wins a point!

---

### 🧪 CHALLENGE — Day 4
**Mission: Build the ASHRI TECH Character Power Checker!**

1. Ask the player for `health`, `attack`, and `shield` using `input()` (convert with `int()`)
2. Check health and print a status: LEGENDARY (≥ 150), STRONG (≥ 100), DAMAGED (≥ 50), CRITICAL (< 50)
3. If attack > 80 AND shield > 60 — print "UNSTOPPABLE WARRIOR!"
4. If attack < 20 OR shield < 20 — print "WARNING: You are vulnerable!"
5. Print a summary card showing all stats and status

**Example output:**
```
Enter health: 75
Enter attack: 90
Enter shield: 25

  Status: STRONG
  WARNING: You are vulnerable! (low shield)
  ATK: 90  |  SHIELD: 25  |  HP: 75
```

> **🏆 Stretch Mission:** Add a `level = (health + attack + shield) // 60` formula and print the player's computed level!

> **💡 Fun Experiment:** Set `health = 0, attack = 0, shield = 0` — does your code handle all zeros correctly? What prints?

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | What's the difference between `=` and `==`? | `=` assigns a value; `==` compares two values |
| Q2 | When does `elif` run? | Only when all previous `if`/`elif` conditions were False |
| Q3 | What does `and` require? | BOTH conditions must be True |
| Q4 | What does `or` require? | At least ONE condition must be True |
| Q5 | If `health = 0`, what prints? | `Status: DEAD 💀` and `Game Over!` |

---

### 🎮 MINI-GAME — Rock Paper Scissors Duel ✊

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | Write `if health > 50: print("Healthy!")` | 40 XP |
| Mission 2 | Add `elif` and `else` branches | 50 XP |
| Mission 3 | Use `and` to combine: `if x == 'rock' and y == 'scissors'` | 60 XP |

**Game:** Terminal RPS against AI. First to 3 wins. Uses the exact if/elif/else logic from today's lesson!

---

### 🐍 PYTHON VERSION — Run It Yourself! (Day 4)

> **Save as:** `day4_rock_paper_scissors.py` | **Run:** `python day4_rock_paper_scissors.py`

The computer picks a random move. Python's `if/elif/else` decides who wins each round — the SAME logic from Lesson 2. First to 3 wins takes the championship!

```python
# =================================================
# ✊  DAY 4 PYTHON MINI-GAME:  Rock Paper Scissors
# =================================================
# Concepts used today:
#   if / elif / else  → decides who wins
#   ==, and, or       → comparison and logic
#   nested if         → special end-of-match messages
#
# How to run:  python  day4_rock_paper_scissors.py
# Python:      3.8 or higher
# Packages:    None — pure Python!
# =================================================

import random   # We learn this on Day 8 — picks the computer's move!

# ── TITLE SCREEN ────────────────────────────────
print("=" * 45)
print("  ✊  ROCK PAPER SCISSORS DUEL")
print("  ASHRI Tech  ·  Day 4  ·  Python Academy")
print("=" * 45)
print()

name = input("🎮  Enter your name, Champion: ")
print()

# ── GAME SETUP ─────────────────────────────────
WINS_NEEDED   = 3            # First to 3 wins the match!
VALID_CHOICES = ["rock", "paper", "scissors"]

player_wins   = 0
computer_wins = 0
ties          = 0

print(f"  Welcome, {name}! First to {WINS_NEEDED} wins is the champion!")
print()

# ── MATCH LOOP ─────────────────────────────────
# Keep playing rounds until someone reaches WINS_NEEDED
while player_wins < WINS_NEEDED and computer_wins < WINS_NEEDED:
    round_num = player_wins + computer_wins + ties + 1
    print(f"  ─── ROUND {round_num} ────────────────────────────")
    print(f"  {name}: {player_wins}  |  Computer: {computer_wins}  |  Ties: {ties}")
    print()

    # Get the player's move (and validate it!)
    player = input("  Your move (rock / paper / scissors): ").lower().strip()

    if player not in VALID_CHOICES:
        print(f"  ❌ '{player}' is not valid! Type rock, paper, or scissors.")
        continue   # Ask again — don't count this as a round

    # Computer picks a random move
    computer = random.choice(VALID_CHOICES)
    print(f"  You chose: {player}   Computer chose: {computer}")
    print()

    # ── THE DECISION — this is TODAY'S if/elif/else lesson! ──
    if player == computer:
        # Same move = tie
        print("  🤝 TIE! Same move — nobody scores.")
        ties += 1

    elif (player == "rock"     and computer == "scissors") or \
         (player == "scissors" and computer == "paper")   or \
         (player == "paper"    and computer == "rock"):
        # Player wins if any of these 3 combinations are true
        print(f"  ✅ YOU WIN the round! {player.capitalize()} beats {computer}!")
        player_wins += 1

    else:
        # If it's not a tie and the player didn't win, computer wins
        print(f"  ❌ COMPUTER WINS the round! {computer.capitalize()} beats {player}!")
        computer_wins += 1

    print()

# ── MATCH RESULT ───────────────────────────────
print("=" * 45)
print("  🏆  MATCH OVER!")
print()
print(f"  {name}: {player_wins} wins")
print(f"  Computer:  {computer_wins} wins")
print(f"  Ties:      {ties}")
print()

# Nested if for special championship messages!
if player_wins >= WINS_NEEDED:
    if computer_wins == 0:
        print(f"  🌟 FLAWLESS VICTORY, {name}! No rounds lost!")
    else:
        print(f"  🎉 CHAMPION, {name}! Well played!")
else:
    if player_wins == 0:
        print("  🤖 CLEAN SWEEP for the computer. Rematch?")
    else:
        print("  🤖 Computer takes the match. Run the file to rematch!")

print("=" * 45)

# =================================================
# 🎨  MAKE IT YOUR OWN!
# =================================================
# • Change WINS_NEEDED = 5 for a best-of-5 match
# • Add 'lizard' and 'spock' for a 5-weapon version
# • Count total rounds played and show at the end
# • Add a running taunt message when you win 2 in a row!
# =================================================
```

**🎨 Customise It:**
- Change `WINS_NEEDED = 5` for a longer match
- Add `"lizard"` and `"spock"` to `VALID_CHOICES` and extend the `elif` logic
- Track the player's current winning streak and print a taunt at 3-in-a-row

---
---

# DAY 5 — Loops: Infinite Power
**Subtitle:** Repetition | **Mission Tag:** INFINITE LOOP

### 🎯 Learning Objectives
- Use `for` loops with `range()`
- Use `while` loops for game loops
- Control loops with `break` and `continue`
- Understand the game loop pattern

### 📖 Story Hook
> *"Every single game on the planet runs in a loop. Right now, Minecraft is running a loop 20 times per second. Fortnite is running a loop 60 times per second. Enemies spawn in loops. Bullets travel in loops. Score builds in loops. Today you master the ENGINE behind ALL games. After today, you will never look at a game the same way again."*

---

### 🛠️ SETUP FOR TODAY — Day 5

> Pure Python only — no installations needed!

**Create your file:** Save as **`day5.py`** and run with `python day5.py`

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| Program never stops | You have an infinite loop! Press `Ctrl + C` to force-stop it, then add a `break` condition |
| `IndentationError` inside loop | All code inside the loop must be indented by 4 spaces |
| Loop runs 0 times | Check `range(1, 6)` — is the start bigger than the end? `range(6, 1)` gives nothing! |

---

### 📚 LESSON 1 — For Loop: Spawn Enemies

```python
for wave in range(1, 6):
    enemies = wave * 3
    print(f"Wave {wave}: {enemies} enemies incoming!")

print("All waves complete. BOSS INCOMING! 👾")
```

**Output:**
```
Wave 1: 3 enemies incoming!
Wave 2: 6 enemies incoming!
Wave 3: 9 enemies incoming!
Wave 4: 12 enemies incoming!
Wave 5: 15 enemies incoming!
All waves complete. BOSS INCOMING! 👾
```

**💬 Explain to students:**
- A `for` loop is like a vending machine — you put in `range(1, 6)` and it gives you 1, then 2, then 3, then 4, then 5, one at a time
- `range(1, 6)` means "start at 1, stop BEFORE 6" — so it never actually gives you 6!
- The loop variable (`wave`) is automatically updated each time — you don't have to do anything
- Everything INDENTED inside the loop runs once for each number

**🔥 WOW MOMENT:** Try `range(1, 100)` and watch 99 lines print instantly! Then change to `range(1, 1000000)` — Python counts to a million without breaking a sweat. Ask: *"How long would it take YOU to count to a million?"* Then try `range(0, 10, 2)` (counts by 2s: 0, 2, 4, 6, 8). The third number is the step size!

```python
lives = 3
score = 0

while lives > 0:
    score += 100
    print(f"Score: {score} | Lives: {lives}")
    
    if score >= 300:
        print("Level complete! 🎉")
        break
    
    lives -= 1

print(f"Final Score: {score}")
```

**Output:**
```
Score: 100 | Lives: 3
Score: 200 | Lives: 2
Score: 300 | Lives: 1
Level complete! 🎉
Final Score: 300
```

**💬 Explain to students:**
- `while` loops keep going AS LONG AS the condition stays True — like the game saying "keep playing until lives reach zero"
- `break` is the emergency exit — it stops the loop INSTANTLY, no matter what the condition says
- Without `break` or a condition that eventually becomes False, the loop runs FOREVER
- **This is the pattern every real game uses:** `while running: handle events, update, draw`

**🔥 WOW MOMENT:** Remove the `if score >= 300: break` block and run. The loop subtracts lives until it hits 0 and stops. Now put `break` back. Students see that `break` OVERRIDES the while condition — the game can end for reasons other than lives running out. *"Every single game over screen is triggered by a `break` or condition going False."*

```python
block_speed = 2
blocks_fallen = 0

for block in range(1, 11):
    block_speed += 0.5
    blocks_fallen += 1
    
    if block % 3 == 0:
        print(f"Block {block}: ⚡ SPEED BLOCK! Speed: {block_speed:.1f}")
    else:
        print(f"Block {block}: 🟦 Falling at speed {block_speed:.1f}")

print(f"\n{blocks_fallen} blocks fell. Max speed: {block_speed:.1f}")
```

**💬 Explain to students:**
- `block % 3 == 0` uses the **modulo** operator `%` which gives the REMAINDER after dividing
- `10 % 3 = 1` because 10 ÷ 3 = 3 remainder 1
- When the remainder is 0, it means the number divides perfectly — so `block % 3 == 0` means "every 3rd block"
- `{block_speed:.1f}` formats the number to 1 decimal place — `3.0` instead of `3.000000000001`

**🔥 WOW MOMENT:** Remove the `break` keyword from Lesson 2 so the while loop never stops. Run it. Press `Ctrl+C` to stop it. *"THAT is an infinite loop. Every frozen game you've ever played had one."* Now discuss: when is an infinite loop USEFUL? (Answer: the pygame game loop on Day 9 is intentionally infinite — `while running: ...`)
**Mission: Build the ASHRI TECH Wave Simulator!**

Simulate 10 falling blocks:
1. Each block falls 1 unit faster than the last (start at speed 2)
2. Every 5th block gives a **bonus life** — print `❤️ LIFE BONUS!`
3. If a block's speed exceeds 8, print `⚡ DANGER ZONE!` instead
4. Use `continue` to skip blocks numbered 7 (they malfunction)
5. Print total lives earned and final speed at the end

**Example output:**
```
Block 1: 🟦 Speed 3.0
Block 2: 🟦 Speed 3.5
...
Block 5: 💚 LIFE BONUS! Speed 4.5   ← (every 5th block)
...
Block 7: SKIPPED (malfunction)          ← (continue)
...
Block 10: 🟦 Speed 6.5
Blocks fell: 9  |  Bonus lives: 2  |  Final speed: 6.5
```

> **🏆 Stretch Mission:** Add a `DANGER ZONE` check: if `block_speed > 7`, print the warning AND `break` the loop early!

> **💡 Fun Experiment:** What is `range(10, 0, -1)`? Try it and see what prints. Can you make a countdown?

---

### ❓ CLASSROOM QUESTIONS — Day 5

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | What does `range(1, 6)` produce? | Numbers 1, 2, 3, 4, 5 (not 6) |
| Q2 | When does a `while` loop stop? | When its condition becomes False, or `break` is called |
| Q3 | What does `break` do? | Immediately exits the loop |
| Q4 | What does `continue` do? | Skips the rest of this iteration, goes to next |
| Q5 | What is `7 % 3`? | `1` — and `block % 5 == 0` detects every 5th block |

---

### 🎮 MINI-GAME — Falling Blocks Frenzy 🧱

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | Write a `for` loop with `range(1, 6)` | 40 XP |
| Mission 2 | Write `while lives > 0: lives -= 1` | 50 XP |
| Mission 3 | Use `break` to exit when `score >= 300` | 60 XP |

**Game:** Canvas catching game. Move platform left/right with A/D. Catch blocks for points, ❤️ adds a life, 💣 removes a life. Speed increases each level!

---

### 🐍 PYTHON VERSION — Run It Yourself! (Day 5)

> **Save as:** `day5_falling_blocks.py` | **Run:** `python day5_falling_blocks.py`

The outer `while lives > 0` is the game loop. The inner `for` loop generates each wave of blocks. `break` and `continue` control the action — EXACTLY the three concepts from today!

```python
# =================================================
# 🧱  DAY 5 PYTHON MINI-GAME:  Falling Blocks Frenzy
# =================================================
# Concepts used today:
#   for loop    → generate each wave of falling items
#   while loop  → outer game loop (keep playing!)
#   break       → end game when lives run out
#   continue    → skip invalid input
#
# How to run:  python  day5_falling_blocks.py
# Python:      3.8 or higher
# Packages:    None — pure Python!
# =================================================

import random   # We learn this properly on Day 8!

# ── TITLE SCREEN ────────────────────────────────
print("=" * 45)
print("  🧱   FALLING BLOCKS FRENZY")
print("  ASHRI Tech  ·  Day 5  ·  Python Academy")
print("=" * 45)
print()

name = input("🎮  Enter your name: ")
print()
print(f"  Welcome, {name}! Catch the blocks before they fall past!")
print("  Type a column number to position your catcher.")
print("  ❤️ = bonus life!   💣 = lose a life!   💰 = double points!")
print()

# ── GAME SETTINGS ──────────────────────────────
FIELD_WIDTH  = 7      # 7 columns: 0 to 6
WAVES        = 12     # Total waves to survive

# ── GAME VARIABLES ──────────────────────────────
lives        = 3
score        = 0
level        = 1
catcher_pos  = FIELD_WIDTH // 2    # Start in the middle
waves_played = 0

# ── MAIN GAME LOOP (while loop!) ──────────────────
while lives > 0:   # Keep playing as long as lives > 0
    waves_played += 1
    print(f"  ─── WAVE {waves_played} ──────────────────────────")

    # Generate the falling items using a for loop!
    # More items fall at higher levels
    items_this_wave = level      # Level 1 = 1 item, Level 2 = 2 items, etc.
    falling = []                 # This list holds (column, item) pairs
    used_columns = []            # Track which columns already have items

    for _ in range(items_this_wave):   # for loop generates each item
        # Pick a column not already used
        col = random.randint(0, FIELD_WIDTH - 1)
        while col in used_columns:
            col = random.randint(0, FIELD_WIDTH - 1)
        used_columns.append(col)

        # Pick what falls (more bombs at higher levels)
        roll = random.randint(1, 10)
        if roll <= level:
            item = "💣"    # Bomb — lose a life!
        elif roll == 10:
            item = "💰"    # Gold — double points!
        elif roll >= 9:
            item = "❤️ "   # Heart — extra life!
        else:
            item = "🟦"    # Regular block
        falling.append((col, item))

    # ── DRAW THE FALLING ITEMS ────────────────────
    field = [" · "] * FIELD_WIDTH
    for col, item in falling:
        field[col] = item
    print("  " + "  ".join(field))
    print("  " + "  ".join(f" {i} " for i in range(FIELD_WIDTH)))
    print()

    # ── DRAW THE CATCHER ─────────────────────────
    catcher = ["___"] * FIELD_WIDTH
    catcher[catcher_pos] = "🧲 "
    print("  " + "  ".join(catcher))
    print()

    # ── GET PLAYER INPUT ─────────────────────────
    raw = input(f"  Move catcher (0–{FIELD_WIDTH-1}) or Enter to stay at {catcher_pos}: ").strip()
    if raw == "":           # Player pressed Enter — don't move
        pass
    elif not raw.isdigit():    # Not a number — skip and ask again next wave
        print("  ❌ Type a number! Catcher didn't move.")
        continue               # continue skips the rest of this loop iteration!
    else:
        catcher_pos = max(0, min(FIELD_WIDTH - 1, int(raw)))

    # ── CHECK EACH FALLING ITEM ────────────────────
    # for loop checks every item that fell this wave
    for col, item in falling:
        if col == catcher_pos:    # Catcher is in the same column!
            if item == "💣":
                lives -= 1
                print(f"  💥 BOMB! -1 life. Lives left: {lives}")
            elif item == "❤️ ":
                lives += 1
                print(f"  ❤️  EXTRA LIFE! Lives: {lives}")
            elif item == "💰":
                score += 20
                print(f"  💰 GOLD! +20 points!")
            else:
                score += 10
                print(f"  ✅ Caught! +10 points")
        # If the column didn't match, the item fell past — it's just missed

    # Level up every 3 waves
    if waves_played % 3 == 0:
        level += 1
        print(f"  🆙 LEVEL UP! Now Level {level} — more items incoming!")

    # Show live stats
    print()
    print(f"  ❤️  Lives: {lives}   🏆 Score: {score}   Level: {level}")
    print()

    if lives <= 0:
        break   # break exits the while loop immediately!

    # Stop after enough waves
    if waves_played >= WAVES:
        print("  🎉 You survived all waves!")
        break

# ── GAME OVER ──────────────────────────────────
print("=" * 45)
print(f"  GAME OVER, {name}!")
print(f"  Final Score: {score}   Waves survived: {waves_played}")
print()
if lives > 0:
    print("  🏆 YOU SURVIVED!  Block-catching champion!")
elif score >= 80:
    print("  🔥 Great run!  Try again for a higher score!")
else:
    print("  💪 Keep going!  You get better every time!")
print("=" * 45)

# =================================================
# 🎨  MAKE IT YOUR OWN!
# =================================================
# • Change WAVES = 20 for a longer game
# • Change FIELD_WIDTH = 10 for a wider field
# • Add a '💥' special bomb that takes 2 lives
# • Make score += level * 10 (more points at higher levels)
# =================================================
```

**🎨 Customise It:**
- Change `WAVES = 20` for a longer challenge
- Change `FIELD_WIDTH = 10` for a wider field
- Make score scale with level: `score += level * 10`
- Add a `'💎'` gem worth 50 points

---
---

# DAY 6 — Functions: Your Custom Powers
**Subtitle:** Reusable Superpowers | **Mission Tag:** SUPERPOWER FORGE

### 🎯 Learning Objectives
- Define functions with `def`
- Pass data in using parameters
- Send data back using `return`
- Set default argument values

### 📖 Story Hook
> *"You have been writing scripts. Today, you write PROGRAMS. What is the difference? A program is ORGANIZED. Functions are your reusable superpowers — write a piece of code once, give it a name, and call it 1000 times without typing it again. Every game, every app, every AI model ever built is made of functions calling other functions. This is how professionals code. Starting today — this is how YOU code."*

---

### 🛠️ SETUP FOR TODAY — Day 6

> Uses `import time` and `import random` — both built-in to Python, no installation needed!

**Create your file:** Save as **`day6.py`** and run with `python day6.py`

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| Function runs immediately when I define it | You accidentally CALLED it (added `()`) while defining it. Just use `def my_func():` with no call below it |
| `None` prints instead of my value | You forgot `return`! Without `return`, functions give back `None` by default |
| `NameError` when calling the function | Make sure the `def` block is ABOVE the line where you call it |

---

### 📚 LESSON 1 — Your First Function

```python
def greet_player(name):
    print(f"Welcome, {name}!")
    print(f"Prepare for battle, {name}!")

greet_player("Alex")
greet_player("Luna")
greet_player("Zara")
```

**💬 Explain to students:**
- Think of a function like a **RECIPE** 🍕 — you write the recipe ONCE, then bake as many pizzas as you want by calling it
- `def` means "define" — you are creating the recipe but NOT baking yet
- The function only runs when you CALL it: `greet_player("Alex")` is the bake!
- Parameters (like `name`) are the INGREDIENTS — you pass in different values each call

**🔥 WOW MOMENT:** Count the lines in `greet_player()` — 2 lines. Then ask: *"If you have 30 students in class and you called this function 30 times, how many lines of code have you 'run'?"* Answer: 60. But you only wrote 2. That is the power of functions. Then add a THIRD print inside the function — instantly all 30 calls also get the third line. Change once, update everywhere.

**✏️ Try This:** Add a second parameter `level` and include it in the welcome message.

---

### 📚 LESSON 2 — Functions That Return Values

```python
def calculate_damage(attack, defense, is_critical=False):
    damage = attack - defense
    if is_critical:
        damage = damage * 2
    return damage

hit1 = calculate_damage(40, 10)
hit2 = calculate_damage(40, 10, is_critical=True)

print(f"Normal hit:   {hit1} damage")
print(f"Critical hit: {hit2} damage")
```

**Output:** `Normal hit: 30 damage` / `Critical hit: 60 damage`

**💬 Explain to students:**
- `return` sends a value BACK to whoever called the function — like a chef handing you a finished pizza
- Without `return`, the function does stuff internally but gives nothing back (like a chef eating the pizza themselves!)
- `is_critical=False` is a DEFAULT argument — if you don't provide it, Python uses `False` automatically
- The result can be stored in a variable: `hit1 = calculate_damage(40, 10)` — now `hit1` holds the returned value `30`

**🔥 WOW MOMENT:** Remove the `return damage` line and run again. Both prints show `None`! Python calculated the damage but threw it away because there was no `return`. Put it back. *"Every time you see `None` where you expected a number, you forgot `return` somewhere."*

```python
import time, random

def measure_reaction():
    time.sleep(random.uniform(1, 3))
    start = time.time()
    input("PRESS ENTER NOW! >>> ")
    return round((time.time() - start) * 1000)

def rate_reaction(ms):
    if ms < 150:   return "LEGENDARY ⚡"
    elif ms < 250: return "EXCELLENT 🔥"
    elif ms < 400: return "GOOD 👍"
    else:          return "KEEP TRAINING 💪"

ms = measure_reaction()
print(f"Reaction: {ms}ms — {rate_reaction(ms)}")
```

**💬 Explain to students:**
- `time.time()` gives the current time as a number (in seconds since 1970!)
- To measure reaction: record the time BEFORE, then AFTER, and subtract to get the gap
- `(time.time() - start) * 1000` converts seconds to milliseconds (1 second = 1000ms)
- `measure_reaction()` and `rate_reaction()` are TWO functions that CALL EACH OTHER — this is how ALL real programs are built!

**🔥 WOW MOMENT:** Call `measure_reaction()` in a loop 3 times and average the results. Students compete for the fastest reaction time in the class. The person who writes the averaging code first gets a bonus point.
**Mission: Build the ASHRI TECH 3-Function Battle Engine!**

Build THREE functions that call each other in sequence:
1. `calculate_damage(attack, defense)` → returns `attack - defense` (minimum 1)
2. `apply_critical(damage, is_crit=False)` → if `is_crit`, double the damage and return it
3. `show_battle_result(player_name, damage, enemy_hp)` → prints whether the enemy survived

Then call all three in order, storing results in variables:
```python
base   = calculate_damage(40, 10)
final  = apply_critical(base, is_crit=True)
show_battle_result("Alex", final, 100)
```

**Expected output:**
```
Base damage: 30
Critical hit! Final damage: 60
Enemy HP: 40 - still alive! Keep attacking!
```

> **🏆 Stretch Mission:** Add a fourth function `check_level_up(xp)` that returns `True` if `xp >= 100`, `False` if not. Call it and print a level-up message!

> **💡 Fun Experiment:** Call `calculate_damage(5, 20)` — what happens? Does your minimum-1 check work?

---

### ❓ CLASSROOM QUESTIONS — Day 6

| # | Question | Answer |
|---|----------|--------|
| Q1 | What keyword defines a function? | `def` |
| Q2 | What does `return` do? | Sends a value back to the caller |
| Q3 | What is a parameter? | A variable in the function's input list |
| Q4 | What is a default argument? | A parameter value used when none is provided |
| Q5 | When is a function actually executed? | Only when it is **called** (not when defined) |

---

### 🎮 MINI-GAME — Reaction Speed Tester ⚡

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | `def greet(name): print(f"Hello, {name}!")` | 50 XP |
| Mission 2 | Add `return damage` inside a function | 60 XP |
| Mission 3 | Call function and store result: `result = calc(40, 10)` | 70 XP |

**Game:** 3 rounds — wait for the signal, press ENTER as fast as you can. Calls `measure_reaction()` and `rate_reaction()` — exactly what students built!

---

### 🐍 PYTHON VERSION — Run It Yourself! (Day 6)

> **Save as:** `day6_reaction_speed.py` | **Run:** `python day6_reaction_speed.py`

This IS the website mini-game — but written in pure Python! `measure_reaction()` and `rate_reaction()` are the SAME two functions from Lesson 3. The website measures CLICK speed; this measures ENTER key speed. Same idea!

```python
# =================================================
# ⚡  DAY 6 PYTHON MINI-GAME:  Reaction Speed Tester
# =================================================
# Concepts used today:
#   def       → define a reusable function
#   return    → send a value back from a function
#   parameters → pass different values in each call
#   default args → is_crit=False style optional inputs
#
# How to run:  python  day6_reaction_speed.py
# Python:      3.8 or higher
# Packages:    None — pure Python!
# =================================================

import time
import random

# ── FUNCTION DEFINITIONS ──────────────────────────
# Define first, call later — that's how functions work!

def measure_reaction():
    """Wait a random delay, then time how fast the player presses Enter."""
    # Random delay between 2 and 5 seconds — player must stay alert!
    delay = random.uniform(2, 5)
    time.sleep(delay)

    # Record the time BEFORE the player presses Enter
    start = time.time()
    input("  🟢 PRESS ENTER NOW! >>> ")
    # Record the time AFTER and calculate the gap in milliseconds
    end = time.time()
    ms = round((end - start) * 1000)   # * 1000 converts seconds to milliseconds
    return ms   # Send the result back to the caller!


def rate_reaction(ms):
    """Return a rating string based on reaction time in milliseconds."""
    if ms < 150:
        return "LEGENDARY ⚡"
    elif ms < 250:
        return "EXCELLENT 🔥"
    elif ms < 400:
        return "GOOD 👍"
    elif ms < 600:
        return "AVERAGE 😐"
    else:
        return "KEEP TRAINING 💪"


def show_round_result(round_num, ms, rating):
    """Print a formatted result for one round."""
    print(f"  Round {round_num}: {ms}ms  —  {rating}")


def calculate_average(times):
    """Return the average of a list of times."""
    total = 0
    for t in times:      # Loop through the list (preview of Day 7!)
        total += t
    return round(total / len(times))   # Divide total by number of rounds


# ── GAME START ───────────────────────────────────
# These lines call our functions — functions only run when called!

print("=" * 45)
print("  ⚡   REACTION SPEED TESTER")
print("  ASHRI Tech  ·  Day 6  ·  Python Academy")
print("=" * 45)
print()

name   = input("🎮  Enter your name: ")
ROUNDS = 3
print()
print(f"  Welcome, {name}! You have {ROUNDS} rounds.")
print("  When you see the green circle 🟢, press ENTER as fast as you can!")
print("  Watch out — there's a random delay before each signal.")
print()
print("  Press Enter when you're ready to start...")
input()

# ── RUN THE ROUNDS ──────────────────────────────
times = []   # We'll store all round times here (preview of Day 7 lists!)

for round_num in range(1, ROUNDS + 1):   # range(1, 4) gives 1, 2, 3
    print(f"  ─── ROUND {round_num} of {ROUNDS} ────────────────────")
    print("  Get ready...")

    ms     = measure_reaction()          # CALL the function
    rating = rate_reaction(ms)           # CALL another function with the result

    show_round_result(round_num, ms, rating)   # CALL a third function
    times.append(ms)                           # Save this round's time
    print()

# ── FINAL RESULTS ───────────────────────────────
avg_ms     = calculate_average(times)    # CALL function with the times list
best_ms    = min(times)                  # Built-in min() finds the fastest
avg_rating = rate_reaction(avg_ms)       # CALL rate_reaction() again!

print("=" * 45)
print(f"  ⚡  RESULTS:  {name}")
print()
for i, t in enumerate(times):            # Show each round (preview of Day 7!)
    print(f"  Round {i+1}: {t}ms")
print()
print(f"  Best:    {best_ms}ms")
print(f"  Average: {avg_ms}ms  —  {avg_rating}")
print()
if best_ms < 200:
    print("  🏆 LEGENDARY REFLEXES!")
elif avg_ms < 300:
    print("  🔥 Excellent reaction speed!")
else:
    print("  💪 Good effort! Run it again to beat your best!")
print("=" * 45)

# =================================================
# 🎨  MAKE IT YOUR OWN!
# =================================================
# • Change ROUNDS = 5 for more rounds
# • Change random.uniform(2, 5) to (0.5, 2) for harder timing
# • Add a FAKE signal: sometimes print the circle but don't actually measure
# • Add a penalty if they press too early (before the signal)
# =================================================
```

**🎨 Customise It:**
- Change `ROUNDS = 5` for more rounds
- Change `random.uniform(2, 5)` to `(0.5, 2)` for shorter, harder delays
- Make the rating thresholds stricter to increase the challenge
- Try to beat your own best time! Run the file again and compare

---
---

# DAY 7 — Lists: Armies of Data
**Subtitle:** Collections | **Mission Tag:** DATA ARMY

### 🎯 Learning Objectives
- Create and access lists
- Use indexing and negative indexing
- Add/remove items with `append()`, `pop()`, `remove()`
- Loop through lists, use `enumerate()`

### 📖 Story Hook
> *"The Snake game's body is LITERALLY a Python list. Every time the snake moves, the list updates. Bullet systems, enemy wave lists, high score boards, card decks, inventory slots — it's ALL lists! Today you command ARMIES of data. One list can hold hundreds of values, sort them instantly, and let you find anything in milliseconds. This is the data structure behind almost every program ever written."*

---

### 🛠️ SETUP FOR TODAY — Day 7

> Pure Python only — no installations needed!

**Create your file:** Save as **`day7.py`** and run with `python day7.py`

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| `IndexError: list index out of range` | You tried to access an index that doesn't exist! `list[5]` on a 3-item list crashes. Use `len(list)` to check first |
| `ValueError: list.remove(x)` | Tried to remove an item that isn't in the list. Use `if x in list: list.remove(x)` |
| List not changing | `sort()` and `append()` change the list IN PLACE — you don't need to assign the result back |

---

### 📚 LESSON 1 — Snake Body as a List

```python
snake = [(5,5), (4,5), (3,5)]

print(f"Length: {len(snake)}")
print(f"Head: {snake[0]}")
print(f"Tail: {snake[-1]}")

snake.insert(0, (6,5))
snake.pop()
print(f"After move: {snake}")
```

**💬 Explain to students:**
- A list stores multiple values in ORDER, all in one variable — like a row of lockers, each with a number
- `snake[0]` is the FIRST item (the head) — lists count from 0, not 1!
- `snake[-1]` is the LAST item (the tail) — negative indexing counts from the back
- To MOVE the snake: `insert(0, new_head)` adds the new head at the front, `pop()` removes the old tail at the back. The length stays the same!

**🔥 WOW MOMENT:** Print `snake` before and after adding a new head. Students see the list visually grow. Then print `len(snake)` before and after `pop()` to confirm the tail was removed. Ask: *"If the snake eats food, should we call `pop()` or not?"* (Answer: don't pop when eating — the snake grows!)

```python
scores = [1200, 850, 2100, 650, 1750]
scores.sort(reverse=True)

for i, score in enumerate(scores):
    medal = ["🥇","🥈","🥉","4.","5."][i]
    print(f"  {medal}  {score} pts")

scores.append(1900)
scores.sort(reverse=True)
print(f"New rank: #{scores.index(1900) + 1}")
```

```python
scores = [1200, 850, 2100, 650, 1750]
scores.sort(reverse=True)

for i, score in enumerate(scores):
    medal = ["🥇","🥈","🥉","4.","5."][i]
    print(f"  {medal}  {score} pts")

scores.append(1900)
scores.sort(reverse=True)
print(f"New rank: #{scores.index(1900) + 1}")
```

**💬 Explain to students:**
- `enumerate()` is a **TWO-FOR-ONE loop tool** — instead of just getting each item, you get the item's NUMBER too!
- `for i, score in enumerate(scores)` gives you `i` = the position (0, 1, 2...) and `score` = the actual value
- Without `enumerate()` you'd have to create a separate counter variable yourself
- `sort(reverse=True)` puts the BIGGEST number first — perfect for leaderboards!

**🔥 WOW MOMENT:** Remove `reverse=True` and run — the list sorts smallest first! Then add a NEW score of 9999 with `append()` and `sort()` again. The list instantly reorganises. *"This is the same algorithm every game leaderboard uses."*

```python
enemies = ["Goblin", "Orc", "Troll", "Dragon", "Slime"]

while len(enemies) > 0:
    defeated = enemies.pop(0)
    print(f"  ⚔️ Defeated: {defeated}!")
    if "Dragon" not in enemies and len(enemies) > 0:
        enemies.append("FINAL BOSS")
        break

print(f"Remaining: {enemies}")
```

**💬 Explain to students:**
- `pop(0)` removes the FIRST item from the list and gives it to you — like taking the front person out of a queue
- `"Dragon" not in enemies` checks if an item is NOT in the list — the `in` keyword works on lists!
- `len(enemies) > 0` checks if the list still has any items in it
- This is how enemy wave systems work: enemies are queued in a list, defeated one by one

**🔥 WOW MOMENT:** Print `len(enemies)` at the start of each while loop iteration. Students watch the number count DOWN as each enemy is defeated. When it hits 0, the loop stops automatically. *"Every enemy wave system in gaming history is basically this loop."*

---

### 🧪 CHALLENGE — Day 7
**Mission: Build the ASHRI TECH Snake Movement Simulator!**

1. Create a `snake = [(5,5), (4,5), (3,5)]` list
2. Create a `food = (8, 8)` position
3. Simulate 5 moves: add a new head position each turn (e.g., move right adds `(head_x + 1, head_y)`)
4. Only `pop()` the tail if the head DIDN'T land on the food position
5. If the snake eats the food, print `EAT!` and DON'T pop (snake grows)
6. Print the snake list and its length after every move

**Example output:**
```
Move 1: [(6,5), (5,5), (4,5)]  Length: 3
Move 2: [(7,5), (6,5), (5,5)]  Length: 3
Move 3: [(8,5), (7,5), (6,5)]  Length: 3
Move 4: EAT! Snake grows!
Move 4: [(8,6), (8,5), (7,5), (6,5)]  Length: 4
```

> **🏆 Stretch Mission:** Make the snake `pop()` from the front when moving onto a WALL (treat `x > 10` or `y > 10` as walls). Print `WALL HIT!` and reduce the snake length by 1.

> **💡 Fun Experiment:** Create a high score list: `scores = [500, 200, 800, 100]`. Use `scores.sort(reverse=True)` and `enumerate()` to print a gold/silver/bronze leaderboard!

| # | Question | Answer |
|---|----------|--------|
| Q1 | How do you get the first item in a list? | `list[0]` |
| Q2 | How do you get the last item? | `list[-1]` |
| Q3 | What does `append()` do? | Adds an item to the END of the list |
| Q4 | What does `pop(0)` do? | Removes and returns the FIRST item |
| Q5 | How do you check if "Dragon" is in a list? | `"Dragon" in enemies` |

---

### 🎮 MINI-GAME — Snake Lite 🐍

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | `enemies = ["Goblin", "Orc", "Dragon"]` | 50 XP |
| Mission 2 | `enemies.append("Boss")` | 50 XP |
| Mission 3 | `for e in enemies: print(e)` | 60 XP |

**Game:** Text-based Snake on a 12×12 grid. W/A/S/D to move. Snake body is literally a Python list!

---

### 🐍 PYTHON VERSION — Run It Yourself! (Day 7)

> **Save as:** `day7_snake.py` | **Run:** `python day7_snake.py`

The snake's body IS a Python list of `(row, col)` positions. Every move: `insert(0, new_head)` adds the new head, `pop()` removes the old tail. This is the EXACT same data structure the website Snake uses!

```python
# =================================================
# 🐍  DAY 7 PYTHON MINI-GAME:  Snake Lite
# =================================================
# Concepts used today:
#   list          → the snake body IS a list!
#   insert(0, x)  → add new head to front of list
#   pop()         → remove old tail from back of list
#   enumerate()   → loop with index and value
#   in            → check if position is in the list
#
# How to run:  python  day7_snake.py
# Python:      3.8 or higher
# Packages:    None — pure Python!
# =================================================

import random

# ── SETTINGS ──────────────────────────────────
GRID  = 12   # 12 x 12 grid

# Direction lookup: key → (row change, col change)
DIRS = {
    "W": (-1,  0),   # Up    = row decreases
    "S": ( 1,  0),   # Down  = row increases
    "A": ( 0, -1),   # Left  = col decreases
    "D": ( 0,  1),   # Right = col increases
}

# ── TITLE SCREEN ────────────────────────────────
print("=" * 45)
print("  🐍   SNAKE LITE")
print("  ASHRI Tech  ·  Day 7  ·  Python Academy")
print("=" * 45)
print()
name = input("🎮  Enter your name: ")
print()
print(f"  Welcome, {name}! The snake body is a Python list.")
print("  W = Up   S = Down   A = Left   D = Right")
print()

def draw_grid(snake, food):
    """Draw the 12x12 grid with the snake and food."""
    print("  +" + "-" * (GRID * 2) + "+")
    for row in range(GRID):
        line = "  |"
        for col in range(GRID):
            pos = (row, col)
            if pos == snake[0]:          # Head
                line += "🟢"             # Head = green circle
            elif pos in snake[1:]:       # Body (skip the head)
                line += "▪️"
            elif pos == food:
                line += "🍎"             # Food = apple
            else:
                line += "  "             # Empty
        line += "|"
        print(line)
    print("  +" + "-" * (GRID * 2) + "+")

# ── GAME SETUP ─────────────────────────────────
# The snake body IS a list of (row, col) positions!
snake = [(6, 5), (6, 4), (6, 3)]   # Head first, then body
direction = "D"                     # Starting direction: right
food  = (random.randint(1, GRID-2), random.randint(1, GRID-2))
score = 0

# ── MAIN GAME LOOP ──────────────────────────────
while True:
    draw_grid(snake, food)
    print(f"  Score: {score}  |  Length: {len(snake)}  |  Head: {snake[0]}")
    print()

    # Get player move
    raw = input("  WASD direction (or Enter to keep going): ").upper().strip()

    if raw in DIRS:
        # Prevent reversing into yourself
        dr, dc = DIRS[raw]
        hr, hc = snake[0]
        new_head = (hr + dr, hc + dc)
        # Only change direction if it doesn't collide immediately with body
        if new_head not in snake[1:3]:  # Allow it if not turning into neck
            direction = raw

    # Calculate the new head position from the current direction
    dr, dc    = DIRS[direction]
    head_row, head_col = snake[0]
    new_head  = (head_row + dr, head_col + dc)

    # ── COLLISION CHECKS ──────────────────────────
    # Hit a wall?
    if not (0 <= new_head[0] < GRID and 0 <= new_head[1] < GRID):
        print("  💥 WALL HIT! Game over!")
        break

    # Hit yourself?
    if new_head in snake:
        print("  💥 SELF COLLISION! Game over!")
        break

    # ── MOVE THE SNAKE ────────────────────────────
    snake.insert(0, new_head)   # Add new head to FRONT of list!

    if new_head == food:
        # Ate food — don't remove tail (snake grows!)
        score += 10
        print(f"  🍎 NOM! Snake grows! Score: {score}")
        # Place new food at a random empty spot
        food = (random.randint(1, GRID-2), random.randint(1, GRID-2))
        while food in snake:   # Make sure food isn't on the snake
            food = (random.randint(1, GRID-2), random.randint(1, GRID-2))
    else:
        snake.pop()   # Remove tail from BACK of list — snake slides forward!

    print()

# ── GAME OVER ──────────────────────────────────
print("=" * 45)
print(f"  🐍  SNAKE GAME OVER  —  {name}")
print(f"  Score:       {score}")
print(f"  Final length: {len(snake)}")
print()
if score >= 50:
    print("  🏆 SNAKE MASTER!")
elif score >= 20:
    print("  🔥 Great snake skills!")
else:
    print("  💪 Keep slithering! Run again to beat your score.")
print("=" * 45)

# =================================================
# 🎨  MAKE IT YOUR OWN!
# =================================================
# • Change GRID = 16 for a bigger playing field
# • Add a '💎' gem that gives +50 points
# • Add a '💣' bomb that ends the game instantly
# • Use enumerate() to print the snake's body positions
# =================================================
```

**🎨 Customise It:**
- Change `GRID = 16` for a bigger field
- Add `'💎'` gem food that gives 50 points
- Print the snake's full body positions using `enumerate(snake)`
- Add a speed-up: make the game add 2 food spots after score 50

---
---

# DAY 8 — Random: Chaos is Power
**Subtitle:** Randomness | **Mission Tag:** CHAOS MASTER

### 🎯 Learning Objectives
- Import and use the `random` module
- Generate random integers with `randint()`
- Pick from lists with `choice()`
- Shuffle lists with `shuffle()`
- Understand probability with percentages

### 📖 Story Hook
> *"What makes games ADDICTIVE? SURPRISE! Remove randomness from Minecraft and every world looks the same. Remove it from Fortnite and every match is identical. Remove it from any card game and there's no point playing twice. Today you crack open `import random` — the module that creates INFINITE replayability. Random meteor positions. Random loot. Random enemy spawns. Random card shuffles. After today, no two runs of your games will ever be the same."*

---

### 🛠️ SETUP FOR TODAY — Day 8

> Uses `import random` — built-in to Python, no installation needed!

**Create your file:** Save as **`day8.py`** and run with `python day8.py`

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| Results are the same every run | That's normal random! It's "pseudo-random" — to get truly different starts add `random.seed()` with no argument |
| `random.choice()` crashes on an empty list | Can't pick from nothing! Use `if len(my_list) > 0:` before calling `choice()` |
| `random.shuffle()` doesn't return a new list | `shuffle()` changes the list IN PLACE and returns `None`. Don't do `deck = random.shuffle(deck)` |

---

### 📚 LESSON 1 — Spawn Random Meteors

```python
import random

for i in range(1, 6):
    x_pos  = random.randint(0, 800)
    speed  = random.randint(3, 10)
    size   = random.choice(["Small", "Medium", "LARGE"])
    damage = random.randint(5, 25)
    print(f"Meteor {i}: x={x_pos} | Speed={speed} | {size} | -{damage}HP")
```

**💬 Explain to students:**
- `random.randint(0, 800)` picks a whole number (integer) between 0 and 800, INCLUSIVE — both endpoints are possible
- `random.choice([...])` picks ONE item from a list at random — give it a list, get back one item
- Every time you run this, you get different meteors! That's exactly what game engines do every second
- These two tools together can generate any random game object imaginable

**🔥 WOW MOMENT:** Run the code three times in a row. Students see completely different meteor data each time. Then change `random.randint(3, 10)` to `random.randint(1, 100)` — some meteors are blindingly fast, some are almost stopped. *"With ONE number change, the whole game difficulty changes."*

```python
import random

def get_loot(level):
    roll = random.randint(1, 100)
    if roll <= 5:      return "💎 LEGENDARY!", level * 50
    elif roll <= 20:   return "🗡️ Rare Dagger", level * 20
    elif roll <= 50:   return "🪙 Gold Coins",  level * 10
    else:              return "💨 Nothing...",   0

for lv in [1, 3, 5, 8]:
    item, gold = get_loot(lv)
    print(f"Lv{lv}: {item} (+{gold} gold)")
```

**💬 Explain to students:**
- Roll `1–100` and check which RANGE the number falls in — `1–5` is a 5% chance (5 numbers out of 100)
- This is EXACTLY how loot tables work in real RPGs: Fortnite, Minecraft, Diablo, Roblox games all use this pattern
- `return item, gold` returns TWO values at once — and `item, gold = get_loot(lv)` unpacks them both!
- The lower the number range, the RARER the item

**🔥 WOW MOMENT:** Change `roll <= 5` to `roll <= 90` so legendary drops 90% of the time. Run it — everyone gets legendaries! Change it back to `5`. Discuss: *"Game balance is literally adjusting these numbers."*

---

### 📚 LESSON 3 — Shuffle a Card Deck

```python
import random

suits  = ["\u2660\ufe0f","\u2665\ufe0f","\u2666\ufe0f","\u2663\ufe0f"]
values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
deck   = [f"{v}{s}" for s in suits for v in values]

random.shuffle(deck)
print(f"Player 1: {' '.join(deck[:5])}")
print(f"Player 2: {' '.join(deck[5:10])}")
```

**💬 Explain to students:**
- `random.shuffle(deck)` mixes the list IN PLACE — no need to assign the result, the original list IS shuffled
- The list comprehension `[f"{v}{s}" for s in suits for v in values]` builds all 52 cards automatically (Day 7 lists + today's tools combined!)
- `deck[:5]` gets the first 5 cards (slicing — a preview of a handy list trick!)
- Every time you run it, players get completely different cards

**🔥 WOW MOMENT:** Print `len(deck)` to confirm it's 52 cards. Then deal 10 cards to 5 players using slices `[0:10]`, `[10:20]`... Run it twice — different hands every time. *"This is exactly how every online card game shuffles your deck."*

---

### 🧪 CHALLENGE — Day 8
**Mission: Build the ASHRI TECH Random Adventure Generator!**

1. Create a `heroes` list: `["Warrior", "Mage", "Rogue", "Paladin"]`
2. Create a `bosses` list: `["Dragon", "Lich", "Demon", "Giant"]`
3. Use `random.choice()` to pick a random hero and a random boss
4. Generate random stats: `attack = random.randint(10, 50)`, `hp = random.randint(50, 200)`
5. Simulate a battle with a while loop: hero attacks boss each round, boss attacks hero
6. Print the result: who won and how many rounds it took!

**Example output:**
```
⚔️  Rogue vs Dragon
  Hero HP: 120 | Boss HP: 180
  Round 1: Rogue hits for 37! Dragon HP: 143
  Round 2: Dragon hits for 28! Rogue HP: 92
  ...
  Round 5: Rogue wins! Dragon defeated in 5 rounds.
```

> **🏆 Stretch Mission:** Implement a 5% chance that the hero lands a critical hit (does double damage). Use the loot drop pattern: `if random.randint(1,100) <= 5: damage *= 2`

> **💡 Fun Experiment:** Add `random.seed(42)` at the very top of your file. Run it 5 times. Same result every time! Remove the seed line. Different every time. *"Seeds = reproducible randomness. Game speedrunners abuse this!"*

| # | Question | Answer |
|---|----------|--------|
| Q1 | What does `random.randint(1, 6)` do? | Returns a random whole number from 1 to 6 |
| Q2 | What does `random.choice(["a","b","c"])` do? | Picks one random item from the list |
| Q3 | How do you simulate a 10% chance? | `random.randint(1, 100) <= 10` |
| Q4 | What does `random.shuffle(list)` do? | Randomises the list order in place |
| Q5 | What must you write before using `random`? | `import random` |

---

### 🎮 MINI-GAME — Meteor Dodge ☄️

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | `import random` then `random.randint(1, 10)` | 50 XP |
| Mission 2 | `random.choice(["sword","shield","potion"])` | 50 XP |
| Mission 3 | Loop 3 times: `x = random.randint(0, 800)` | 70 XP |

**Game:** Canvas game — dodge randomly spawning meteors with WASD/Arrow keys. Meteors use `randint()` for position and speed!

---

### 🐍 PYTHON VERSION — Run It Yourself! (Day 8)

> **Save as:** `day8_meteor_dodge.py` | **Run:** `python day8_meteor_dodge.py`

Meteors fall from the top of a 9-wide field. Your ship is at the bottom. Each round, a meteor is heading for a specific column — type a new column number to dodge it. Uses `random.randint()`, `random.choice()`, and the probability system from Lesson 2!

```python
# =================================================
# ☄️  DAY 8 PYTHON MINI-GAME:  Meteor Dodge
# =================================================
# Concepts used today:
#   random.randint()  → spawn meteor at random position/speed
#   random.choice()   → pick random meteor size/type
#   random.randint(1,100) → probability (loot / shield drop)
#
# How to run:  python  day8_meteor_dodge.py
# Python:      3.8 or higher
# Packages:    None — pure Python!
# =================================================

import random

# ── SETTINGS ─────────────────────────────────
FIELD_WIDTH = 9      # 9 columns, numbered 0-8
STARTING_LIVES = 3
METEORS_TO_DODGE = 8

METEOR_TYPES = [
    {"name": "Tiny Rock",  "icon": "⬛", "damage": 1},
    {"name": "Meteor",     "icon": "☄️",  "damage": 1},
    {"name": "HUGE ROCK",  "icon": "🟠", "damage": 2},
]

def draw_field(ship_col, meteor_col):
    """Draw the play field with the ship and incoming meteor."""
    row = ""
    for c in range(FIELD_WIDTH):
        if c == meteor_col:
            row += "☄️ "   # Meteor
        else:
            row += ".. "
    print(f"  Incoming: {row}")

    row = ""
    for c in range(FIELD_WIDTH):
        if c == ship_col:
            row += "🚀 "   # Ship
        else:
            row += ".. "
    print(f"  Your ship: {row}")

# ── TITLE SCREEN ──────────────────────────────
print("=" * 45)
print("  ☄️   METEOR DODGE")
print("  ASHRI Tech  ·  Day 8  ·  Python Academy")
print("=" * 45)
print()
name = input("🚀  Enter your name: ")
print()
print(f"  Welcome, {name}!")
print(f"  Columns: 0 to {FIELD_WIDTH - 1}   |   Lives: {STARTING_LIVES}")
print("  Type the column number to move your ship!")
print()

# ── GAME SETUP ──────────────────────────────
ship_col   = 4     # Start in the middle
lives      = STARTING_LIVES
score      = 0
shield     = False  # Power-up from loot drops!

# ── MAIN GAME LOOP ───────────────────────────
for wave in range(1, METEORS_TO_DODGE + 1):
    # Spawn a random meteor using today's tools!
    meteor_col  = random.randint(0, FIELD_WIDTH - 1)   # random position
    meteor_data = random.choice(METEOR_TYPES)           # random type
    damage      = meteor_data["damage"]
    icon        = meteor_data["icon"]
    mname       = meteor_data["name"]

    # Check for a random shield power-up drop (20% chance)
    loot_roll = random.randint(1, 100)
    if loot_roll <= 20 and not shield:
        shield = True
        print("  🛡️  SHIELD DROP! You have a shield for the next hit!")
        print()

    print("-" * 45)
    print(f"  Wave {wave}/{METEORS_TO_DODGE}  |  Lives: {'\u2764\ufe0f' * lives}  |  Score: {score}")
    print(f"  INCOMING: {icon} {mname} at column {meteor_col}!")
    print()
    draw_field(ship_col, meteor_col)
    print()

    # Get the player's move
    raw = input(f"  Move ship to column (0-{FIELD_WIDTH-1}), or press Enter to stay: ").strip()

    if raw.isdigit():
        new_col = int(raw)
        if 0 <= new_col <= FIELD_WIDTH - 1:
            ship_col = new_col
        else:
            print(f"  Out of range! Must be 0 to {FIELD_WIDTH - 1}.")
    elif raw != "":
        print("  Not a number — staying put!")

    # ── DID METEOR HIT? ───────────────────────
    print()
    if ship_col == meteor_col:
        if shield:
            # Shield absorbs the hit!
            shield = False
            print("  🛡️  SHIELD BLOCKED THE HIT! Phew!")
        else:
            lives -= damage
            print(f"  💥  HIT! -{damage} life! Lives remaining: {lives}")
        if lives <= 0:
            print("  🚀  SHIP DESTROYED! Game over!")
            break
    else:
        score += 10
        print(f"  🚀  DODGED! +10 points! Score: {score}")

    print()

# ── FINAL RESULTS ─────────────────────────────
print("=" * 45)
print(f"  ☄️  METEOR DODGE COMPLETE  —  {name}")
print(f"  Score:           {score}")
print(f"  Lives remaining: {lives}")
print()
if lives > 0 and score >= 60:
    print("  🏆 PILOT MASTER! Outstanding!")
elif lives > 0:
    print("  🚀 Mission survived! Run again to go for 80!")
else:
    print("  💥 Ship destroyed. Retry — you know the patterns now!")
print("=" * 45)

# =================================================
# 🎨  MAKE IT YOUR OWN!
# =================================================
# • Change METEORS_TO_DODGE = 15 for a longer run
# • Lower the shield drop chance from 20% to 10%
# • Add a second meteor per wave using a second randint()
# • Increase the field width for harder dodging
# =================================================
```

**🎨 Customise It:**
- Change `METEORS_TO_DODGE = 15` for a longer challenge
- Add a second simultaneous meteor per wave
- Change the shield drop rate from 20% to 5% to make the game harder
- Add a `💣 Bomb` meteor type that does 2 damage instantly!

---
---

# DAY 9 — Pygame Foundations
**Subtitle:** Building the Visual Engine | **Mission Tag:** PYGAME PIONEER

> 🔔 **Teacher Note:** This is the BIG transition day. Days 1–8 were terminal Python. From today, code comes ALIVE in a window. Show the finished Flappy Bird game first — full screen, no explanation. Let it run for 30 seconds. Then say: *"By Day 10, you built this."*

### 🎯 Learning Objectives
- Install and import Pygame
- Create a game window with `set_mode()`
- Understand and build the core game loop
- Draw shapes: rectangles, circles, polygons
- Handle events: keyboard and quit
- Understand FPS and `clock.tick()`

### 📖 Story Hook
> *"Eight days ago you made a computer print your name. Today you open a WINDOW. You draw shapes. You make things MOVE. Everything you've learned — variables, loops, conditions, functions, lists, random — all of it was building up to this moment. The visual era begins NOW."*

---

### �️ SETUP FOR TODAY — Day 9 (⚠️ Pygame Install Required!)

> **This day needs Pygame installed.** Run the install command BEFORE class and confirm every student's laptop has it working.

**Step 1 — Install Pygame:**
```bash
pip install pygame
```

**If that doesn't work, try:**
```bash
python -m pip install pygame
```

**Step 2 — Test it works (run in terminal):**
```bash
python -c "import pygame; print('Pygame', pygame.version.ver, '- OK!')"
```
You should see: `Pygame 2.x.x - OK!` — if so, you're good to go!

**Create your file:** Save as **`day9.py`** and run with `python day9.py`

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| `ModuleNotFoundError: No module named 'pygame'` | Pygame not installed. Run `pip install pygame` again. If pip isn't found, use `python -m pip install pygame` |
| `pip` is not recognised as a command | Use `python -m pip install pygame` instead |
| Window opens then immediately closes | Your game loop is missing `pygame.event.get()`. Add the event loop so the QUIT event can be caught |
| Black window, nothing draws | You're drawing BEFORE `screen.fill()` or AFTER `display.flip()`. Draw order matters! |

---

### �📚 LESSON 1 — Open Your First Window

**Concept:** Pygame setup skeleton — the foundation of every game you'll ever build.

```python
import pygame
import sys

pygame.init()   # Start all Pygame systems

WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("My First Game Window")
clock = pygame.time.Clock()

running = True
while running:               # THE GAME LOOP
    clock.tick(60)           # Lock to 60 FPS

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False  # X button clicked → stop

    screen.fill((10, 20, 40))    # Background colour (RGB)
    pygame.display.flip()        # Show everything drawn

pygame.quit()
sys.exit()
```

**💬 Explain to students:**
- `pygame.init()` starts the engine — always first
- `set_mode((WIDTH, HEIGHT))` opens the window
- The `while running` loop runs 60 times per second
- `event.get()` listens for player input (quit, keys, clicks)
- `screen.fill()` repaints the background every frame
- `display.flip()` pushes the frame to the screen — without it, nothing shows!

**🔥 WOW MOMENT:** Comment out `pygame.display.flip()` — run it. Screen goes black/frozen. Restore it. *"That one line makes everything visible."* Then comment out `clock.tick(60)` — the loop runs wild. Restore. Students feel FPS physically.

---

### 📚 LESSON 2 — Draw Shapes

**Concept:** Pygame has drawing tools for rectangles, circles, lines, and polygons.

```python
# Inside the game loop, AFTER screen.fill() and BEFORE display.flip():

# Rectangle: (surface, colour, (x, y, width, height))
pygame.draw.rect(screen, (0, 200, 255), (100, 200, 80, 80))

# Circle: (surface, colour, (centre_x, centre_y), radius)
pygame.draw.circle(screen, (255, 107, 0), (400, 300), 40)

# Triangle (polygon): list of (x,y) points
pygame.draw.polygon(screen, (34, 197, 94),
    [(400, 100), (370, 160), (430, 160)])

# Line: (surface, colour, start_point, end_point, thickness)
pygame.draw.line(screen, (255, 255, 255), (0, 0), (800, 600), 2)
```

**💬 Explain:**
- Pygame coordinates: (0,0) is **top-left**. X goes RIGHT, Y goes DOWN.
- RGB colours: `(255, 0, 0)` = red, `(0, 255, 0)` = green, `(0, 0, 255)` = blue
- Drawing ORDER matters — later draws appear ON TOP

**✏️ Try This:** Draw a "spaceship" using one triangle and two circles (cockpit + engine).

---

### 📚 LESSON 3 — Move a Shape with the Keyboard

**Concept:** Read keyboard state every frame and update position variables.

```python
# Setup (before game loop):
box_x = 400
box_y = 300
box_speed = 5

# Inside the game loop:
keys = pygame.key.get_pressed()

if keys[pygame.K_LEFT]  and box_x > 0:           box_x -= box_speed
if keys[pygame.K_RIGHT] and box_x < WIDTH - 40:  box_x += box_speed
if keys[pygame.K_UP]    and box_y > 0:           box_y -= box_speed
if keys[pygame.K_DOWN]  and box_y < HEIGHT - 40: box_y += box_speed

pygame.draw.rect(screen, (0, 200, 255), (box_x, box_y, 40, 40))
```

**💬 Explain:**
- `pygame.key.get_pressed()` returns the state of ALL keys at this exact frame
- The boundary checks (`box_x > 0` etc.) stop the shape leaving the screen
- The shape is redrawn at the new position every frame — that creates movement!

**🔥 WOW MOMENT:** Remove the boundary checks. The box flies off-screen. Students see WHY the checks exist.

---

### 🧪 CHALLENGE — Day 9
Build a **Moving Rectangle Scene**:
1. Open a window (800×600, dark background)
2. Draw a background: stars as small white circles using a `for` loop with `random`
3. Draw a player ship (triangle shape) that moves with arrow keys
4. Keep the ship inside the window boundaries
5. Add a title caption: `"Galaxy Defender — Day 9"`

> **Tip for teachers:** Pre-generate star positions in a list BEFORE the game loop. If you regenerate them inside the loop they flicker every frame!

```python
# Star positions — generate ONCE before the loop
import random
stars = [(random.randint(0, 800), random.randint(0, 600)) for _ in range(80)]

# Inside the loop — draw them every frame at the same positions
for sx, sy in stars:
    pygame.draw.circle(screen, (255, 255, 255), (sx, sy), 1)
```

---

### ❓ CLASSROOM QUESTIONS — Day 9

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | What does `pygame.init()` do? | Initialises all Pygame modules — always called first |
| Q2 | What is `clock.tick(60)` for? | Limits the game to 60 frames per second |
| Q3 | Where is (0, 0) in a Pygame window? | Top-left corner |
| Q4 | Why do we call `pygame.display.flip()` every frame? | To push everything drawn onto the actual screen |
| Q5 | What is the difference between `pygame.event.get()` and `pygame.key.get_pressed()`? | `event.get()` catches one-time events (key press); `get_pressed()` checks if a key is held right now |

---

### 🎮 MINI-GAME — Window Builder 🪟

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | `pygame.init()` → `screen = pygame.display.set_mode((800, 600))` | 60 XP |
| Mission 2 | Add the game loop with `clock.tick(60)` and `pygame.display.flip()` | 70 XP |
| Mission 3 | Draw a moving rectangle controlled by arrow keys | 80 XP |

**Game:** Students build and run the window live. The "mini-game" is their own moving rectangle on screen — a live reward for completing the setup.

---

### 📋 END-OF-DAY CHECKLIST — Day 9
By end of Day 9, every student has:
- [ ] A working Pygame window that opens and closes cleanly
- [ ] A dark star-field background
- [ ] A shape that moves with keyboard input without leaving the screen
- [ ] Understands the 5-part game loop: `tick → events → update → draw → flip`

---
---

# DAY 10 — Flappy Bird: Full Build
**Subtitle:** Physics, Pipes & Collision | **Mission Tag:** FLAPPY LEGEND

> 🔔 **Teacher Note:** Before coding anything, run the finished Flappy Bird. Full screen. Let students play for 2 minutes. Then say: *"Every line you write today is already in there. Let's build it."*

### 🎯 Learning Objectives
- Apply gravity using velocity
- Implement jump mechanic
- Scroll and respawn pipe obstacles
- Detect collision using `pygame.Rect.colliderect()`
- Build a score counter and game-over screen

### 📖 Story Hook
> *"Gravity. Momentum. Collision. These are physics — and you are about to code them from scratch. Flappy Bird sold 50 million downloads. It was built by ONE developer in two days. Today, you join that club."*

---

### �️ SETUP FOR TODAY — Day 10

> Pygame must already be installed from Day 9. Quick sanity check before class starts.

**Verify Pygame is still there:**
```bash
python -c "import pygame; print('Pygame OK -', pygame.version.ver)"
```

**Create your file:** Save as **`day10_flappy.py`** and run with `python day10_flappy.py`

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| `NameError: name 'GRAVITY' is not defined` | You defined constants inside the game loop. Move ALL constants to BEFORE `while running:` |
| Bird falls through the floor instantly | Check `GRAVITY = 0.5` — if it's too high the bird drops in 1 frame. Also check `bird_y > HEIGHT` is using the right variable |
| Pipes never reset | Make sure `pipe_x < -PIPE_W` is in the update section, not the draw section |
| `colliderect` not working | Both objects must be `pygame.Rect`. Check you didn't use plain tuples |

---

### �📚 LESSON 1 — Window & Bird Setup

```python
import pygame, sys, random
pygame.init()

WIDTH, HEIGHT = 400, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Flappy Bird — ASHRI Tech")
clock = pygame.time.Clock()

# Colours
SKY   = (10, 20, 60)
BIRD  = (255, 200, 0)
PIPE  = (34, 139, 34)
WHITE = (255, 255, 255)

# Bird state
bird_x   = 80
bird_y   = HEIGHT // 2
bird_vel = 0        # Current vertical speed
GRAVITY  = 0.5      # Pulls bird DOWN each frame
JUMP_VEL = -9       # Launched UP on jump (negative = up!)

running = True
```

**💬 Explain:**
- `bird_vel` is the bird's vertical speed. Starts at 0.
- Each frame: `bird_vel += GRAVITY` — pulls it down a little more
- On jump: `bird_vel = JUMP_VEL` — snaps velocity upward
- This is how EVERY 2D platformer's gravity works

---

### 📚 LESSON 2 — Physics & Jump

```python
# Full game loop with physics:
while running:
    clock.tick(60)

    # --- EVENTS ---
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                bird_vel = JUMP_VEL   # JUMP!

    # --- UPDATE ---
    bird_vel += GRAVITY        # Gravity pulls down
    bird_y   += bird_vel       # Move bird by velocity

    # Floor and ceiling = instant death
    if bird_y > HEIGHT or bird_y < 0:
        running = False

    # --- DRAW ---
    screen.fill(SKY)
    pygame.draw.circle(screen, BIRD, (bird_x, int(bird_y)), 18)
    pygame.display.flip()
```

**🔥 WOW MOMENT:** Remove `GRAVITY` — bird floats up forever. Set `GRAVITY = 3` — bird plummets instantly. Students feel the physics adjustment in real-time.

---

### 📚 LESSON 3 — Pipes, Collision & Score

```python
# Add BEFORE the game loop:
PIPE_W  = 70
GAP     = 160
pipe_x  = WIDTH
pipe_gap_y = random.randint(150, HEIGHT - 200)
score   = 0
font    = pygame.font.SysFont("Arial", 36, bold=True)

# Add INSIDE the game loop (in UPDATE section):
pipe_x -= 4

if pipe_x < -PIPE_W:          # Pipe passed off-screen
    pipe_x     = WIDTH         # Reset to right edge
    pipe_gap_y = random.randint(150, HEIGHT - 200)
    score     += 1             # Player survived!

# Collision rectangles
bird_rect    = pygame.Rect(bird_x - 15, int(bird_y) - 15, 30, 30)
top_pipe     = pygame.Rect(pipe_x, 0,            PIPE_W, pipe_gap_y - GAP // 2)
bottom_pipe  = pygame.Rect(pipe_x, pipe_gap_y + GAP // 2, PIPE_W, HEIGHT)

if bird_rect.colliderect(top_pipe) or bird_rect.colliderect(bottom_pipe):
    running = False            # Hit a pipe — game over!

# Add INSIDE the draw section (before display.flip()):
pygame.draw.rect(screen, PIPE, top_pipe)
pygame.draw.rect(screen, PIPE, bottom_pipe)
score_text = font.render(f"Score: {score}", True, WHITE)
screen.blit(score_text, (10, 10))
```

**💬 Explain:**
- `pygame.Rect` is a rectangle with `.colliderect()` — the fastest collision check in Pygame
- `blit()` stamps text (or images) onto the screen at a given position
- The pipe "respawns" by resetting its x to the right edge with a new random gap — efficient!

---

### 📚 LESSON 4 — Game Over Screen

```python
# After the game loop ends, add:
game_over_font  = pygame.font.SysFont("Arial", 52, bold=True)
score_font      = pygame.font.SysFont("Arial", 32)
restart_font    = pygame.font.SysFont("Arial", 24)

waiting = True
while waiting:
    screen.fill(SKY)

    over_text    = game_over_font.render("GAME OVER",    True, (220, 50, 50))
    score_text   = score_font.render(f"Score: {score}", True, WHITE)
    restart_text = restart_font.render("Press R to Restart or Q to Quit", True, (180, 180, 180))

    screen.blit(over_text,    over_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 - 80)))
    screen.blit(score_text,   score_text.get_rect(center=(WIDTH // 2, HEIGHT // 2)))
    screen.blit(restart_text, restart_text.get_rect(center=(WIDTH // 2, HEIGHT // 2 + 60)))

    pygame.display.flip()

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            waiting = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_q:
                waiting = False
            if event.key == pygame.K_r:
                # Restart — reset all variables
                bird_y, bird_vel, pipe_x, score = HEIGHT // 2, 0, WIDTH, 0
                running = True
                waiting = False
                # Re-enter the main game loop here (wrap in a function for Day 12!)

pygame.quit()
sys.exit()
```

---

### 🧪 CHALLENGE — Day 10
Add these features to your Flappy Bird:
1. **Animated wings** — alternate between two circle sizes for the bird every 10 frames
2. **Speed ramp** — every 5 points, increase pipe speed by 0.5
3. **Best score display** — track and show the highest score this session on the game over screen

---

### ❓ CLASSROOM QUESTIONS — Day 10

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | Why is `JUMP_VEL = -9` negative? | In Pygame, Y increases downward — negative Y moves UP |
| Q2 | How does gravity work in code? | `bird_vel += GRAVITY` every frame — velocity increases downward |
| Q3 | What does `colliderect()` return? | `True` if two Rect objects overlap, `False` if not |
| Q4 | Why do we reset `pipe_x` instead of making a new pipe? | Efficiency — one pipe object that teleports is simpler for a single-pipe game |
| Q5 | What does `screen.blit(surface, position)` do? | Stamps a surface (image or text) onto the screen at the given position |

---

### 🎮 MINI-GAME — Flappy Bird 🐦

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | `bird_vel += 0.5` and `bird_y += bird_vel` in the game loop | 80 XP |
| Mission 2 | Add pipe collision with `colliderect()` | 100 XP |
| Mission 3 | Add game-over screen that shows final score | 120 XP |

**End-of-Day Result:** A fully playable Flappy Bird with gravity, pipes, collision detection, score, and game-over screen. Each student plays their own game. High scores compared across the class.

---

### 📋 END-OF-DAY CHECKLIST — Day 10
By end of Day 10, every student has:
- [ ] Bird that falls with gravity and jumps on SPACE
- [ ] Scrolling pipes with a random gap
- [ ] Collision detection that triggers game over
- [ ] Score counter on screen
- [ ] Game-over screen with score display

---
---

# DAY 11 — Space Shooter Part 1: Player, Bullets & Enemies
**Subtitle:** Building the Core Systems | **Mission Tag:** SPACE CADET

> 🔔 **Teacher Note:** Show the finished Space Shooter BEFORE class begins. Full screen. Let students play for 3 minutes. Then say: *"You built Flappy Bird yesterday. Today, you start THIS. Tomorrow, you finish it."*

### 🎯 Learning Objectives
- Set up a larger game window with a star-field background
- Build a moveable player with 4-directional WASD controls
- Create a bullet system using a list of `pygame.Rect` objects
- Create an enemy spawn system using `random` and a timer
- Understand list comprehension for cleaning off-screen objects

### 📖 Story Hook
> *"Yesterday you controlled one thing: a bird. Today you build an entire battlefield. A player ship. Bullets that fire. Enemies that fall. This is a REAL game architecture — the same pattern used in Space Invaders, Galaga, and every shooter ever made."*

---

### �️ SETUP FOR TODAY — Day 11

> Pygame must already be installed. Copy yesterday's Day 10 window setup as your starting skeleton — it saves 10 minutes.

**Quick check:**
```bash
python -c "import pygame; print('Pygame ready!')"
```

**Create your file:** Save as **`day11_shooter.py`** and run with `python day11_shooter.py`

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| `ValueError: list.remove(x): x not in list` | A bullet or enemy was already removed in a previous iteration. Use `bullets[:]` (a copy!) when looping for removal |
| Bullets don't appear | Make sure you're drawing inside the `while running` loop, AFTER `screen.fill()` |
| Enemies spawn but instantly disappear | Check your list comprehension condition: `e.top < H` keeps enemies on screen. You might have it reversed |
| Game feels slow | Check `clock.tick(60)` is present. Without it, the loop is throttled by your machine |

---

### �📚 LESSON 1 — Window, Stars & Player

```python
import pygame, sys, random
pygame.init()

W, H = 800, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption("Space Shooter — ASHRI Tech")
clock = pygame.time.Clock()

# Colours
BG      = (4, 8, 15)
PLAYER  = (0, 200, 255)
BULLET  = (34, 197, 94)
ENEMY   = (220, 38, 38)
WHITE   = (255, 255, 255)
ORANGE  = (255, 107, 0)

# Star field — generated ONCE
stars = [(random.randint(0, W), random.randint(0, H)) for _ in range(100)]

# Player — a pygame.Rect is perfect: x, y, width, height
player = pygame.Rect(W // 2 - 25, H - 90, 50, 50)
PLAYER_SPEED = 6
```

**💬 Explain:**
- `pygame.Rect` stores position AND size together — great for movement AND collision later
- Stars are generated once and stored in a list — drawn each frame at the same positions

---

### 📚 LESSON 2 — Player Movement & Boundaries

```python
# Inside game loop — UPDATE section:
keys = pygame.key.get_pressed()

if keys[pygame.K_a] and player.left   > 0:      player.x -= PLAYER_SPEED
if keys[pygame.K_d] and player.right  < W:      player.x += PLAYER_SPEED
if keys[pygame.K_w] and player.top    > H // 2: player.y -= PLAYER_SPEED
if keys[pygame.K_s] and player.bottom < H:      player.y += PLAYER_SPEED

# Inside game loop — DRAW section:
for sx, sy in stars:
    pygame.draw.circle(screen, WHITE, (sx, sy), 1)

# Draw player as a triangle (ship shape)
pygame.draw.polygon(screen, PLAYER, [
    (player.centerx, player.top),           # Nose
    (player.left,    player.bottom),         # Left wing
    (player.right,   player.bottom)          # Right wing
])
# Engine glow
pygame.draw.circle(screen, ORANGE, (player.centerx, player.bottom), 6)
```

**💬 Explain:**
- `player.left`, `player.right`, `player.top`, `player.bottom` are built-in Rect properties
- The boundary `player.top > H // 2` keeps the player in the bottom half of the screen
- Drawing a polygon with 3 points makes a triangle ship shape

---

### 📚 LESSON 3 — Bullet System

```python
# Add BEFORE the game loop:
bullets = []       # List of bullet Rects
BULLET_SPEED = 10

# Add INSIDE events section (fires on SPACE key):
for event in pygame.event.get():
    if event.type == pygame.QUIT:
        running = False
    if event.type == pygame.KEYDOWN:
        if event.key == pygame.K_SPACE:
            # New bullet spawns at centre-top of player
            b = pygame.Rect(player.centerx - 3, player.top, 6, 16)
            bullets.append(b)

# Add INSIDE update section:
for b in bullets:
    b.y -= BULLET_SPEED

# Remove bullets that flew off-screen (list comprehension!)
bullets = [b for b in bullets if b.bottom > 0]
```

> **💡 List comprehension explained for kids:** `[b for b in bullets if b.bottom > 0]` means: *"Go through every bullet in the list. Keep it ONLY if its bottom edge is still on screen. Build a new list from the ones we keep."* It's a one-line loop that filters a list — you'll see this exact pattern in every game that ever has projectiles.

# Add INSIDE draw section:
for b in bullets:
    pygame.draw.rect(screen, BULLET, b, border_radius=3)
```

**💬 Explain:**
- Every bullet is a `pygame.Rect` stored in the `bullets` list
- Each frame, every bullet moves up by `BULLET_SPEED`
- The list comprehension `[b for b in bullets if b.bottom > 0]` rebuilds the list keeping ONLY bullets still on screen — removes the rest automatically

**🔥 WOW MOMENT:** Print `f"Bullets: {len(bullets)}"` each frame. Students watch the count go up when they shoot and drop when bullets leave the screen.

---

### 📚 LESSON 4 — Enemy Spawn System

```python
# Add BEFORE the game loop:
enemies      = []
enemy_timer  = 0
ENEMY_SPEED  = 3

# Add INSIDE the game loop (update section):
enemy_timer += 1
if enemy_timer >= 60:   # Spawn one enemy every 60 frames (= 1 second)
    e = pygame.Rect(random.randint(0, W - 40), -40, 40, 40)
    enemies.append(e)
    enemy_timer = 0

for e in enemies:
    e.y += ENEMY_SPEED

# Remove enemies that fell off the bottom
enemies = [e for e in enemies if e.top < H]

# Add INSIDE draw section:
for e in enemies:
    pygame.draw.rect(screen, ENEMY, e, border_radius=6)
```

**💬 Explain:**
- `enemy_timer` counts frames. At 60 frames (1 second at 60 FPS), spawn a new enemy
- Enemies start above the screen (`y = -40`) and fall down
- Same list comprehension pattern as bullets — students recognise it from bullets!

---

### 🧪 CHALLENGE — Day 11
Add these features to your Space Shooter core:
1. **Shoot cooldown** — only allow one bullet every 20 frames (prevents bullet spam)
2. **Enemy speed increase** — every 30 seconds (`enemy_timer % 1800 == 0`), increase `ENEMY_SPEED` by 0.5
3. **Triple shot** — hold SHIFT + SPACE to fire 3 bullets at once (left, centre, right)

```python
# Shoot cooldown example:
shoot_cooldown = 0

# In update:
if shoot_cooldown > 0:
    shoot_cooldown -= 1

# In events (SPACE):
if event.key == pygame.K_SPACE and shoot_cooldown == 0:
    bullets.append(pygame.Rect(player.centerx - 3, player.top, 6, 16))
    shoot_cooldown = 20
```

---

### ❓ CLASSROOM QUESTIONS — Day 11

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | Why do we use a list for bullets instead of one variable? | There can be many bullets on screen at once |
| Q2 | What does `b.y -= BULLET_SPEED` do? | Moves the bullet upward (negative Y = up) |
| Q3 | What does `[b for b in bullets if b.bottom > 0]` do? | Creates a new list containing only bullets still on screen |
| Q4 | Why do we use `event.type == KEYDOWN` for shooting but `get_pressed()` for movement? | Movement is continuous (held key); shooting fires once per press |
| Q5 | What does `enemy_timer % 60 == 0` check? | Whether the frame count is exactly divisible by 60 — i.e. every 60 frames |

---

### 🎮 MINI-GAME — Shooter Core 🔫

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | Player moves with WASD, stays in bottom half | 80 XP |
| Mission 2 | SPACE fires a bullet that travels upward | 100 XP |
| Mission 3 | Enemies spawn from the top and fall down | 120 XP |

---

### 📋 END-OF-DAY CHECKLIST — Day 11
By end of Day 11, every student has:
- [ ] A star-field background
- [ ] A player ship (triangle) that moves in all 4 directions with WASD
- [ ] Bullets that fire upward from the ship on SPACE
- [ ] Enemies that spawn randomly at the top and fall down
- [ ] Off-screen cleanup for both bullets and enemies using list comprehension

---
---

# DAY 12 — Space Shooter Part 2 + Final Showcase
**Subtitle:** Collision, HUD, Menus & Your Legend Moment | **Mission Tag:** PYTHON LEGEND

> 🔔 **Teacher Note:** Session split — **45 min** to complete the game → **30 min** to personalise → **30 min** showcase → **15 min** certificates + celebration. Start class by showing yesterday's game running. Students add the final systems to make it complete.

### 🎯 Learning Objectives
- Add bullet-enemy and player-enemy collision detection
- Build a HUD displaying health and score
- Create a start-screen function
- Create a game-over screen with restart logic
- Personalise and polish the game
- Present to an audience like a real developer

### 📖 Story Hook
> *"You made it, LEGEND. Today you finish what you started. Collision — so bullets actually destroy enemies. A score — so your victory is counted. A start screen — so it feels like a REAL game. Then you present it to the world. Every line of code, every badge, every challenge — it all led to THIS room, THIS moment. Show them what a Python developer looks like."*

---

### �️ SETUP FOR TODAY — Day 12 (CAPSTONE!)

> No new installs needed. Start from your Day 11 file and build on top of it.

**Recommended: copy and rename your file before class:**
```bash
copy day11_shooter.py day12_shooter_final.py
```
This protects Day 11's work and gives you a clean starting point.

**🔧 Troubleshooting:**

| Problem | Fix |
|---------|-----|
| `ValueError` when colliding | You forgot the `break` after `bullets.remove(b)` — without it Python tries to check a bullet that no longer exists |
| Restart button doesn't fully reset | Check that ALL variables (bullets, enemies, score, health, player position) are reset inside the outer `while True` loop |
| HUD text overlaps game objects | Draw the HUD LAST in the draw section, after all game objects |
| Game runs but the start screen skips instantly | `pygame.event.get()` inside `show_start_screen()` must be in a `while True` loop — if it's called once it returns immediately |

---

### � LESSON 1 — Collision Detection: Bullets vs Enemies

```python
# Add game state variables BEFORE the loop:
score  = 0
health = 100

# Add INSIDE the game loop (update section), AFTER moving bullets and enemies:

# Bullet hits enemy
for b in bullets[:]:              # [:] = safe copy so we can remove during loop
    for e in enemies[:]:
        if b.colliderect(e):
            bullets.remove(b)     # Bullet disappears
            enemies.remove(e)     # Enemy destroyed
            score += 10           # Player scores!
            break                 # CRITICAL — stop checking this bullet

# Enemy reaches player
for e in enemies[:]:
    if e.colliderect(player):
        enemies.remove(e)
        health -= 20              # Take damage!

    if e.top > H:                 # Enemy escaped off the bottom
        enemies.remove(e)

# Game over check
if health <= 0:
    running = False
```

**💬 Explain:**
- `bullets[:]` creates a COPY of the list — safe to remove from inside the loop
- `break` after removing bullet is CRITICAL — stops trying to check a bullet that no longer exists (causes `ValueError` without it!)
- This is the same nested loop collision pattern from the Galaxy Defender guide

**🔥 WOW MOMENT:** Remove the `break` — shoot an enemy. The game crashes with `ValueError`. Students see exactly WHY `break` exists. Fix it live.

---

### 📚 LESSON 2 — HUD (Heads-Up Display)

```python
# Add BEFORE the game loop:
font_hud = pygame.font.SysFont("Courier", 22, bold=True)

# Add INSIDE the draw section (draw LAST so it appears ON TOP):
def draw_hud(surface, health, score):
    # Health bar background
    pygame.draw.rect(surface, (60, 0, 0),    (10, 10, 200, 20))
    # Health bar fill (scales with health %)
    pygame.draw.rect(surface, (220, 38, 38), (10, 10, int(200 * health / 100), 20))

    # Text labels
    hp_text    = font_hud.render(f"HP: {health}", True, WHITE)
    score_text = font_hud.render(f"SCORE: {score}", True, (0, 200, 255))
    surface.blit(hp_text,    (220, 10))
    surface.blit(score_text, (10, 38))

# Call inside the draw section:
draw_hud(screen, health, score)
```

**💬 Explain:**
- The health bar is TWO rectangles: a dark background, then a coloured fill drawn over it
- `int(200 * health / 100)` scales the bar width to the health percentage
- Drawing the HUD LAST means it always appears on top of everything else

---

### 📚 LESSON 3 — Start Screen Function

```python
def show_start_screen(screen, W, H):
    font_title  = pygame.font.SysFont("Arial", 56, bold=True)
    font_prompt = pygame.font.SysFont("Arial", 28)
    font_sub    = pygame.font.SysFont("Courier", 18)

    # Star field for the menu
    menu_stars = [(random.randint(0, W), random.randint(0, H)) for _ in range(100)]

    while True:
        screen.fill(BG)

        for sx, sy in menu_stars:
            pygame.draw.circle(screen, WHITE, (sx, sy), 1)

        title  = font_title.render("SPACE SHOOTER",          True, (0, 200, 255))
        sub    = font_sub.render("ASHRI Tech · Python Bootcamp", True, (120, 128, 160))
        prompt = font_prompt.render("Press ENTER to Launch",  True, WHITE)

        screen.blit(title,  title.get_rect(center=(W // 2, H // 2 - 80)))
        screen.blit(sub,    sub.get_rect(center=(W // 2, H // 2 - 30)))
        screen.blit(prompt, prompt.get_rect(center=(W // 2, H // 2 + 40)))

        pygame.display.flip()
        clock.tick(60)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_RETURN:
                    return   # Exit menu → start game

# Call BEFORE the main game loop:
show_start_screen(screen, W, H)
```

---

### 📚 LESSON 4 — Game Over Screen & Restart

```python
def show_game_over(screen, W, H, score, clock):
    font_big  = pygame.font.SysFont("Arial", 52, bold=True)
    font_med  = pygame.font.SysFont("Arial", 32)
    font_sm   = pygame.font.SysFont("Arial", 22)

    while True:
        screen.fill(BG)

        over   = font_big.render("GAME OVER",               True, (220, 38, 38))
        sc     = font_med.render(f"Final Score: {score}",   True, WHITE)
        prompt = font_sm.render("R = Restart   Q = Quit",   True, (120, 128, 160))

        screen.blit(over,   over.get_rect(center=(W // 2, H // 2 - 80)))
        screen.blit(sc,     sc.get_rect(center=(W // 2, H // 2)))
        screen.blit(prompt, prompt.get_rect(center=(W // 2, H // 2 + 60)))

        pygame.display.flip()
        clock.tick(60)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                return "quit"
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_q: return "quit"
                if event.key == pygame.K_r: return "restart"

# After main game loop ends:
result = show_game_over(screen, W, H, score, clock)
if result == "quit":
    pygame.quit(); sys.exit()
# If "restart", the outer while True loop restarts the game
```

---

### 📚 LESSON 5 — Putting It All Together

Wrap the ENTIRE game in a restart loop so `R` actually restarts properly:

```python
import pygame, sys, random
pygame.init()

W, H   = 800, 600
screen = pygame.display.set_mode((W, H))
pygame.display.set_caption("Space Shooter — ASHRI Tech")
clock  = pygame.time.Clock()

# [Colour constants and font setup here]

show_start_screen(screen, W, H)   # Show menu once

while True:   # OUTER restart loop

    # Reset all game state
    player       = pygame.Rect(W // 2 - 25, H - 90, 50, 50)
    bullets      = []
    enemies      = []
    stars        = [(random.randint(0, W), random.randint(0, H)) for _ in range(100)]
    score        = 0
    health       = 100
    enemy_timer  = 0
    shoot_cd     = 0
    running      = True

    while running:   # INNER game loop
        clock.tick(60)
        screen.fill(BG)
        enemy_timer += 1
        if shoot_cd > 0: shoot_cd -= 1

        # [Events, Update, Draw — all lessons above]

        if health <= 0:
            running = False

    # Game over — let player choose
    result = show_game_over(screen, W, H, score, clock)
    if result == "quit":
        pygame.quit(); sys.exit()
    # result == "restart" → outer loop resets everything and runs again
```

**💬 Explain:** The outer `while True` loop is the restart manager. The inner `while running` is the actual game. This two-loop pattern is used in virtually every real game ever shipped.

---

### 🧪 PERSONALISATION TIME (30 minutes)
Students customise their game. Teacher circulates and helps. Redirect anyone trying to add new systems — polish what exists!

**Personalisation menu (pick 3):**
- Change ship colour and shape
- Change enemy colour and shape (try a diamond or hexagon polygon)
- Change background star density and colour
- Add a `wave` counter that increases every 10 kills
- Add `lives = 3` instead of a health bar
- Change the HUD font and layout
- Write their name on the start screen
- Adjust enemy speed and spawn rate for their preferred difficulty

---

### 🎤 SHOWCASE FORMAT (30 minutes)
Each student (or pair) stands up and:

1. **Introduce yourself:** Name + their pilot callsign
2. **Run the game** — live, in front of the class (60 seconds)
3. **Explain one thing:** "The most interesting code in my game is _____ because _____"
4. **Class applauds** — no exceptions

> **Teacher tip:** If a student's game crashes during the showcase, don't panic. Say: *"A crash is just a bug. Bugs are normal. Developers fix them. What do we do?"* — and fix it together live. It becomes the most memorable teaching moment of the bootcamp.

---

### 🏆 FINAL CHALLENGE — Certificate Unlock
To earn the Python Legend certificate, each student must explain:

| Requirement | Example Answer |
|------------|---------------|
| Name one variable they used | `health = 100` — stores how much HP I have |
| Explain the game loop | While running, we handle events, update positions, then draw |
| Name one list they used | `bullets` — stores every bullet currently on screen |
| Explain one condition | `if health <= 0: running = False` — ends the game when HP hits zero |
| Name their proudest feature | The triple-shot I added, or the wave counter, or my custom ship shape |

---

### ❓ CLASSROOM QUESTIONS — Day 12

| # | Question | Expected Answer |
|---|----------|----------------|
| Q1 | Why do we use `bullets[:]` instead of `bullets` when removing during a loop? | `[:]` creates a copy — removing from the original while iterating causes errors |
| Q2 | Why is `break` critical after a bullet-enemy collision? | The bullet is removed — keep looping and you try to check a deleted object → crash |
| Q3 | Why are there TWO while loops in the final game? | Outer loop = restart manager. Inner loop = single playthrough |
| Q4 | What does `draw_hud()` being a function give us? | Clean code — one call draws everything; easy to update in one place |
| Q5 | Name all 8 concepts used in Space Shooter | print/output, variables, math, conditions, loops, functions, lists, random |

---

### 🎮 MINI-GAME — Space Shooter 🚀

| Mission | Code Task | XP |
|---------|-----------|-----|
| Mission 1 | Add bullet-enemy collision with `colliderect()` and `break` | 150 XP |
| Mission 2 | Write `draw_hud()` function showing health bar and score | 200 XP |
| Mission 3 | Write a comment describing your proudest game feature | 150 XP |

**End-of-Day Result:** A fully playable, personalised Space Shooter. Start screen → flying ship with HUD → enemies, bullets, collisions → game over with restart. Each student's game looks different. Certificates awarded. They leave saying *"I made a game."*

---

### 📋 FINAL CHECKLIST — Day 12
By end of Day 12, every student has:
- [ ] Bullet-enemy collision that removes both and adds score
- [ ] Player-enemy collision that reduces health
- [ ] Health bar drawn on screen
- [ ] Score counter drawn on screen
- [ ] Start screen (function)
- [ ] Game over screen with R to restart, Q to quit
- [ ] Two-loop restart architecture
- [ ] At least one personalisation
- [ ] Presented their game to the class
- [ ] Received their Python Legend certificate 🏆

---
---

# 🏆 COMPLETE 12-DAY CURRICULUM OVERVIEW

## Concept → Game Connection Map

| Python Concept | Day Introduced | Used In Game |
|---------------|----------------|--------------|
| `print()` / `input()` | Day 1 | Robot Maze — robot obeys typed commands |
| Variables & f-strings | Day 2 | Coin Collector — score, lives stored as vars |
| Math & `int()` | Day 3 | Battle Calculator — damage formula |
| `if`/`elif`/`else` | Day 4 | RPS — win/lose logic |
| `for`/`while`/`break` | Day 5 | Falling Blocks — game loop, speed increase |
| Functions & `return` | Day 6 | Reaction Game — `measure()` + `rate()` |
| Lists & indexing | Day 7 | Snake — body is a list of positions |
| `random` module | Day 8 | Meteor Dodge — random spawn positions |
| Pygame setup & drawing | Day 9 | Window Builder — first visual program |
| Physics & collision | Day 10 | Flappy Bird — gravity, pipes, game over |
| Bullets & enemy systems | Day 11 | Space Shooter core — movement, shooting, spawning |
| HUD, menus, polish | Day 12 | Space Shooter complete — full production game |

## How the 12 Days Connect

```
Day 1  → print, input            ← First output
Day 2  → variables, f-strings    ← Store player data
Day 3  → math, int()             ← Calculate damage
Day 4  → if/elif/else            ← Game decisions
Day 5  → loops                   ← Game loop foundation
Day 6  → functions               ← Reusable code blocks
Day 7  → lists                   ← Store bullets, enemies
Day 8  → random                  ← Spawn positions, loot
Day 9  → pygame window & drawing ← Everything goes visual
Day 10 → Flappy Bird complete    ← Physics + collision
Day 11 → Space Shooter Part 1   ← Player + bullets + enemies
Day 12 → Space Shooter Part 2   ← Collision + HUD + menus + showcase
```

## XP & Badge System

| Day | Badge | XP Earned | Total XP |
|-----|-------|-----------|----------|
| 1 | 🚀 First Program | 150 | 150 |
| 2 | 💎 Variable Explorer | 200 | 350 |
| 3 | ⚡ Math Wizard | 220 | 570 |
| 4 | 🧠 Condition Commander | 250 | 820 |
| 5 | 🔄 Loop Master | 275 | 1,095 |
| 6 | 🧙 Function Wizard | 300 | 1,395 |
| 7 | 🐍 Array Warrior | 325 | 1,720 |
| 8 | 🎲 Randomness Ninja | 350 | 2,070 |
| 9 | 🪟 Pygame Pioneer | 400 | 2,470 |
| 10 | 🐦 Flappy Legend | 500 | 2,970 |
| 11 | 🚀 Space Cadet | 600 | 3,570 |
| 12 | 🏆 Python Legend | 1,000 | **4,570** |

## Common Errors & Quick Fixes — Pygame Days

| Error | Cause | Fix |
|-------|-------|-----|
| `pygame.error: No video mode set` | Drawing before `set_mode()` | Call `pygame.display.set_mode()` first |
| `ValueError: list.remove(x)` | Removing same item twice | Use `[:]` copy + `break` after remove |
| Window freezes instantly | Missing `pygame.event.get()` | Add event loop every frame |
| Black screen, nothing shows | Missing `pygame.display.flip()` | Call at end of each loop iteration |
| Ship flies off screen | No boundary check | Add `player.left > 0` style checks |
| Bullets fire every frame | `get_pressed()` used instead of event | Use `KEYDOWN` event for shooting |
| Game can't restart | No outer restart loop | Wrap game in `while True` outer loop |

## Instructor Tips

> **Starting each class:** Use the Story Hook as a 2-minute intro. It sets the emotional frame before a single line is written.

> **WOW MOments:** Each one is listed explicitly. Do them exactly as written — they create the memories students take home.

> **Code live:** Type every code snippet live with students, never paste. Mistakes are teaching moments.

> **Day 9–12 pacing:** These days are longer. Cut challenges short if needed — a working game is more motivating than a complete one that crashes.

> **Showcase format:** Even shy students present. Pair them if needed. The presentation IS the lesson — it builds developer identity.

> **Admin access:** Log in with `admin123` on the platform to skip missions and demo all games instantly.

---

*ASHRI Tech — AI & Python Programming · 12-Day Bootcamp · Complete Instructor Guide*
*Days 1–8: Foundation Python → Days 9–10: Flappy Bird → Days 11–12: Space Shooter + Showcase*
