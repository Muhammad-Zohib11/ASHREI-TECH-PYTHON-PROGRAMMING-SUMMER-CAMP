# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 7 — SNAKE LITE (terminal version)                  ║
# ║  Concepts: lists, .append(), .pop(), indexing           ║
# ╚══════════════════════════════════════════════════════════╝

import random, os, time, sys

# ── Board Settings ───────────────────────────────────────
COLS, ROWS = 20, 16
TICK       = 0.18   # seconds per frame (decrease to go faster)

# Direction vectors stored in a dictionary (list of tuples)
DIRS = {"w": (-1, 0), "s": (1, 0), "a": (0, -1), "d": (0, 1)}
OPPOSITE = {"w": "s", "s": "w", "a": "d", "d": "a"}

def clear():
    os.system("cls" if os.name == "nt" else "clear")

def rand_pos(snake):
    """Return a random cell not occupied by the snake."""
    while True:
        pos = (random.randint(0, ROWS-1), random.randint(0, COLS-1))
        if pos not in snake:
            return pos

def draw(snake, food, score, high):
    clear()
    print(f"  Score: {score}   Best: {high}   Length: {len(snake)}")
    print("  " + "─" * (COLS * 2 + 2))
    grid = [["  "] * COLS for _ in range(ROWS)]

    # Place snake — snake is a LIST
    for i, (r, c) in enumerate(snake):
        grid[r][c] = "██" if i == 0 else "▓▓"   # head vs body

    # Place food
    fr, fc = food
    grid[fr][fc] = "🍎"

    for row in grid:
        print("  │" + "".join(row) + "│")
    print("  " + "─" * (COLS * 2 + 2))
    print("  WASD to move  |  Q to quit")

def play():
    # Snake starts as a list with 3 segments
    snake = [(ROWS//2, COLS//2), (ROWS//2, COLS//2 - 1), (ROWS//2, COLS//2 - 2)]
    direction = "d"
    food      = rand_pos(snake)
    score     = 0
    high      = 0

    # Try to get non-blocking input (works on Unix; Windows uses msvcrt)
    try:
        import msvcrt
        def get_key():
            if msvcrt.kbhit():
                return msvcrt.getwch().lower()
            return None
    except ImportError:
        import tty, termios, select
        fd = sys.stdin.fileno()
        old = termios.tcgetattr(fd)
        tty.setraw(fd)
        def get_key():
            if select.select([sys.stdin], [], [], 0)[0]:
                return sys.stdin.read(1).lower()
            return None

    try:
        while True:
            draw(snake, food, score, high)
            time.sleep(TICK)

            key = get_key()
            if key == "q":
                print("\n  Bye! 👋")
                break
            if key in DIRS and key != OPPOSITE.get(direction):
                direction = key

            # Calculate next head position
            dr, dc = DIRS[direction]
            head   = snake[0]
            new_head = (head[0] + dr, head[1] + dc)

            # Wall collision
            if not (0 <= new_head[0] < ROWS and 0 <= new_head[1] < COLS):
                print("\n  💀 Hit the wall! Game Over.")
                break

            # Self collision — check if new_head is already IN the list
            if new_head in snake:
                print("\n  💀 Bit yourself! Game Over.")
                break

            # Move: append new head to the FRONT of the list
            snake.insert(0, new_head)

            if new_head == food:
                score += 10
                if score > high: high = score
                food = rand_pos(snake)
                # Don't pop — snake grows!
            else:
                # Remove the tail with .pop()
                snake.pop()

    finally:
        try:
            termios.tcsetattr(fd, termios.TCSADRAIN, old)
        except Exception:
            pass

    print(f"\n  Final score: {score}  |  Best: {high}")
    print(f"  Snake length reached: {len(snake)}")

play()
