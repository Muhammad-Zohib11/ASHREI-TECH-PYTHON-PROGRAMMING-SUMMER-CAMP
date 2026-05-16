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
> *"Welcome, Code Recruit! Today you take your first step into Python — the language that powers games, robots, and AI. You will make the computer LISTEN to you. Every legend starts with a single line of code. Are you ready to speak the language of machines?"*

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
- `print()` is a built-in Python function
- Text must go inside **quotes** `" "` or `' '`
- Each `print()` starts a new line automatically

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
- `input()` pauses the program and waits for the user to type
- Whatever they type is stored in the variable (`name`)
- The variable holds the data so we can use it later

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
Build a **Player Registration** screen:
1. Ask the player for their name using `input()`
2. Ask the player for their favourite colour using `input()`
3. Print a personalised welcome message with both pieces of information

**Example output:**
```
Enter your name: Alex
Enter your favourite colour: Blue
Welcome, Alex! Your hero colour is Blue. Let's go!
```

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
---

# DAY 2 — Variables & The Power of Names
**Subtitle:** Data Storage | **Mission Tag:** DATA WIZARD

### 🎯 Learning Objectives
- Create and name variables correctly
- Understand string vs integer types
- Use `+=` to update values
- Display live data using f-strings

### 📖 Story Hook
> *"Every great game stores data. Player health, coins, speed, score — it is ALL variables! Without variables, games forget everything the instant it happens. You are about to become a data wizard. Name your data wisely and it will serve you forever."*

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

**💬 Explain:** Variables have a **name** (left side), `=` (assignment), and a **value** (right side). Strings use quotes, integers don't.

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

**💬 Explain:** `+=` is the shorthand operator. `coins += 10` means "add 10 to coins and save it back."

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

**💬 Explain:** f-strings start with `f"..."`. Variables go inside `{}` curly braces. The value is inserted automatically at runtime.

---

### 🧪 CHALLENGE — Day 2
Create a **full player stats card**:
1. Variables: `name`, `health = 100`, `coins = 0`, `speed = 5`, `level = 1`
2. Use `+=` to collect 3 coins worth 20 each
3. Print final stats using an f-string

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
---

# DAY 3 — Operations & Typecasting
**Subtitle:** Math Magic | **Mission Tag:** MATH MAGIC

### 🎯 Learning Objectives
- Use arithmetic operators: `+`, `-`, `*`, `/`, `//`, `%`
- Understand order of operations
- Convert types with `int()` and `float()`
- Use the `math` module

### 📖 Story Hook
> *"Games calculate EVERYTHING. Damage dealt, distance traveled, score multipliers, enemy health. Today you teach Python to crunch numbers like a real game engine. Math is the secret power behind every game ever made."*

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

---

### 📚 LESSON 2 — Type Conversion — Always Convert!

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

---

### 📚 LESSON 3 — The Math Module

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

---

### ❓ CLASSROOM QUESTIONS — Day 3

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
---

# DAY 4 — Conditions: Games That Think
**Subtitle:** Decision Making | **Mission Tag:** BRAIN POWER

### 🎯 Learning Objectives
- Write `if`, `elif`, `else` chains
- Use comparison operators: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Combine conditions with `and`, `or`, `not`
- Write nested conditions

### 📖 Story Hook
> *"Today we teach your game to THINK. Should the enemy attack or run? Did the player win or lose? Conditions are the BRAIN of every game ever made. Without if/else, programs are just calculators. With it — they become intelligent."*

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

**💬 Explain:** Python checks conditions top-to-bottom and stops at the **first True** one. `else` catches anything that didn't match.

---

### 📚 LESSON 2 — Rock Paper Scissors Logic

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

---

### 📚 LESSON 3 — Nested Conditions

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

---

### ❓ CLASSROOM QUESTIONS — Day 4

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
---

# DAY 5 — Loops: Infinite Power
**Subtitle:** Repetition | **Mission Tag:** INFINITE LOOP

### 🎯 Learning Objectives
- Use `for` loops with `range()`
- Use `while` loops for game loops
- Control loops with `break` and `continue`
- Understand the game loop pattern

### 📖 Story Hook
> *"Every game runs in a LOOP. The screen redraws 60 times per second. Enemies spawn in loops. Players keep playing until they die — that is a while loop! Today you master the engine of ALL games."*

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

**💬 Explain:** `range(1, 6)` gives numbers 1, 2, 3, 4, 5. The loop variable (`wave`) takes each value in turn.

---

### 📚 LESSON 2 — While Loop: The Game Loop

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

**💬 Explain:** `while` keeps looping AS LONG AS the condition is True. `break` exits immediately. **This IS the game loop pattern** used in every real game!

---

### 📚 LESSON 3 — Falling Blocks with Speed

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

---

### 🧪 CHALLENGE — Day 5
Simulate 10 falling blocks:
1. Each block falls 1 unit faster than the last
2. Every 5th block gives a bonus life
3. Print each block's speed and whether it gave a bonus
4. Print total lives at the end

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
---

# DAY 6 — Functions: Your Custom Powers
**Subtitle:** Reusable Superpowers | **Mission Tag:** SUPERPOWER FORGE

### 🎯 Learning Objectives
- Define functions with `def`
- Pass data in using parameters
- Send data back using `return`
- Set default argument values

### 📖 Story Hook
> *"Functions are your reusable superpowers. Define once, call everywhere. Professional developers THINK in functions. Today you stop writing scripts and start writing real programs."*

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

**💬 Explain:** `def` creates the function. You define it once and call it as many times as you need. No repetition!

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

**💬 Explain:** `return` sends a value back to the caller. Default arguments (`is_critical=False`) are optional.

---

### 📚 LESSON 3 — Reaction Speed Game

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

---

### 🧪 CHALLENGE — Day 6
Build a 3-function damage system: `calculate_damage(attack, defense)` → `apply_critical(damage, is_crit)` → `show_battle_result(player_hp, enemy_hp)`. Call them in order.

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
---

# DAY 7 — Lists: Armies of Data
**Subtitle:** Collections | **Mission Tag:** DATA ARMY

### 🎯 Learning Objectives
- Create and access lists
- Use indexing and negative indexing
- Add/remove items with `append()`, `pop()`, `remove()`
- Loop through lists, use `enumerate()`

### 📖 Story Hook
> *"A Snake game IS a list of positions. High scores ARE a list. Enemy waves ARE a list. Lists are the backbone of every game ever made. Today you command armies of data."*

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

---

### 📚 LESSON 2 — High Score Leaderboard

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

**💬 Explain:** `enumerate()` gives index AND value. `sort(reverse=True)` puts highest first.

---

### 📚 LESSON 3 — Enemy Wave Manager

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

---

### ❓ CLASSROOM QUESTIONS — Day 7

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
> *"What makes games ADDICTIVE? SURPRISE! Random meteor positions, random loot, random enemy behaviour. Today you add the element of chaos that keeps players hooked forever."*

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

---

### 📚 LESSON 2 — Random Loot Drops (Probability)

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

**💬 Explain:** Roll 1–100 and check ranges. 1–5 = 5% chance. This is exactly how loot tables work in real RPGs!

---

### 📚 LESSON 3 — Shuffle a Card Deck

```python
import random

suits  = ["♠️","♥️","♦️","♣️"]
values = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
deck   = [f"{v}{s}" for s in suits for v in values]

random.shuffle(deck)
print(f"Player 1: {' '.join(deck[:5])}")
print(f"Player 2: {' '.join(deck[5:10])}")
```

---

### ❓ CLASSROOM QUESTIONS — Day 8

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

### 📚 LESSON 1 — Open Your First Window

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

### 📚 LESSON 1 — Window & Bird Setup

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

### 📚 LESSON 1 — Window, Stars & Player

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

### 📚 LESSON 1 — Collision Detection: Bullets vs Enemies

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
