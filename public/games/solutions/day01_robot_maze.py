# ============================================================
#  ASHRI Tech Game Academy — Day 1
#  ROBOT MAZE EXPLORER
#  Concepts: print(), input(), variables, comments
# ============================================================
#  This file produces IDENTICAL output to the website game.
#  Maze layout, rendering, commands, and win/lose conditions
#  are pixel-perfect matches to the browser terminal.
# ============================================================
#  HOW TO USE IN LECTURE:
#    python robot-maze.py
#
#  CONTROLS:
#    N = North   S = South   E = East   W = West
#    MAP   = show the maze again
#    RESET = restart from beginning
#    QUIT  = exit
# ============================================================

import os

# ── Settings (try changing these in class!) ──────────────────
robot_name  = "ROBO-1"   # ← change this to name your robot
moves_limit = 30          # ← change this to make it harder

# ── Maze layout — MUST match the website exactly ─────────────
#  # = wall    R = robot start    G = goal    (space) = path
MAZE_TEMPLATE = [
    "###########",
    "#R   # G  #",   # G is at column 7, row 1
    "# # # ### #",
    "# #   #   #",
    "# ##### # #",
    "#       # #",
    "# ##### # #",
    "#   #     #",
    "###########",
]

# Robot start and goal — must match the website constants
START_X, START_Y = 1, 1
GOAL_X,  GOAL_Y  = 7, 1

# Directions
MOVES    = { 'N': (0,-1), 'S': (0,1), 'E': (1,0), 'W': (-1,0) }
DIR_NAMES = { 'N': 'North ↑', 'S': 'South ↓', 'E': 'East →', 'W': 'West ←' }


# ── Utility: clear terminal ───────────────────────────────────
def clear():
    os.system('cls' if os.name == 'nt' else 'clear')


# ── Check if position is a wall ──────────────────────────────
def is_wall(x, y):
    if y < 0 or y >= len(MAZE_TEMPLATE): return True
    row = MAZE_TEMPLATE[y]
    if x < 0 or x >= len(row): return True
    return row[x] == '#'


# ── Render maze — IDENTICAL to website terminal output ───────
def draw_maze(robot_x, robot_y):
    print()
    for row_idx, row in enumerate(MAZE_TEMPLATE):
        display = ""
        for col_idx, cell in enumerate(row):
            if col_idx == robot_x and row_idx == robot_y:
                display += "🤖"      # robot
            elif cell == 'G':
                display += "🚪"      # goal
            elif cell == '#':
                display += "██"      # wall
            else:
                display += "  "      # path (R starting cell also clears)
        print("  " + display)
    print()


# ── Print stats — matches website info panel ─────────────────
def print_stats(robot_x, robot_y, moves):
    dist = abs(robot_x - GOAL_X) + abs(robot_y - GOAL_Y)
    print(f"  📍 Position : ({robot_x}, {robot_y})")
    print(f"  🎯 Goal     : ({GOAL_X}, {GOAL_Y})  — {dist} steps away")
    print(f"  👣 Moves    : {moves} / {moves_limit}")
    print()


# ── Main game ─────────────────────────────────────────────────
def run_game():
    clear()
    print("════════════════════════════════════════════")
    print("   🤖  ROBOT MAZE EXPLORER")
    print("   ASHRI Tech Game Academy — Day 1")
    print("════════════════════════════════════════════")
    print()

    player_name = input("  Enter your name, Recruit: ").strip() or "Recruit"
    print()
    print(f"  Welcome, {player_name}! You control {robot_name}.")
    print("  Navigate the maze and find the exit portal 🚪")
    print()
    print("  Controls:")
    print("    N = Move North (up)    S = Move South (down)")
    print("    E = Move East (right)  W = Move West (left)")
    print("    MAP = Show maze  RESET = Restart  QUIT = Exit")
    print()

    robot_x, robot_y = START_X, START_Y
    moves = 0

    draw_maze(robot_x, robot_y)
    print_stats(robot_x, robot_y, moves)

    while True:
        print("  > Move [N/S/E/W] or command:", end=" ")
        cmd = input().strip().upper()
        print()

        # ── Special commands ──────────────────────────────────
        if cmd == 'QUIT':
            print(f"  Goodbye, {player_name}! {robot_name} will wait. 👋")
            break

        if cmd == 'MAP':
            draw_maze(robot_x, robot_y)
            print_stats(robot_x, robot_y, moves)
            continue

        if cmd == 'RESET':
            print("  🔄 Resetting...\n")
            run_game()
            return

        # ── Movement ─────────────────────────────────────────
        if cmd not in MOVES:
            print(f"  ❌ Unknown: '{cmd}'. Use N, S, E, W, MAP, RESET, or QUIT.\n")
            print("  > Move [N/S/E/W] or command:", end=" ")
            continue

        dx, dy = MOVES[cmd]
        nx     = robot_x + dx
        ny     = robot_y + dy

        if is_wall(nx, ny):
            print(f"  🚫 WALL BLOCKED! Can't move {DIR_NAMES[cmd]}.\n")
            print("  > Move [N/S/E/W] or command:", end=" ")
            continue

        # Valid move
        robot_x = nx
        robot_y = ny
        moves  += 1

        print(f"  ✅ {robot_name} moved {DIR_NAMES[cmd]}!")
        draw_maze(robot_x, robot_y)

        # ── Win condition ─────────────────────────────────────
        if robot_x == GOAL_X and robot_y == GOAL_Y:
            print("  " + "═" * 41)
            print(f"  🎉  MISSION COMPLETE, {player_name}!")
            print(f"  🤖  {robot_name} escaped the maze!")
            print(f"  👣  You used {moves} moves.")
            if moves <= 15:
                print("  ⭐  SPEED RUNNER! Incredible efficiency!")
            elif moves <= 22:
                print("  🔥  Great navigation!")
            else:
                print("  💪  You did it! Try to beat your move count!")
            print("  " + "═" * 41)

            print()
            again = input("  Play again? [Y/N]: ").strip().upper()
            if again == 'Y':
                run_game()
            else:
                print(f"\n  Thanks for playing, {player_name}! See you next mission 🚀\n")
            return

        print_stats(robot_x, robot_y, moves)

        # ── Lose condition ────────────────────────────────────
        if moves >= moves_limit:
            print("  " + "═" * 41)
            print(f"  ⏰  OUT OF MOVES! {robot_name} is stuck.")
            print("  💡  Type RESET to try again!")
            print("  " + "═" * 41)
            print()
            again = input("  Play again? [Y/N]: ").strip().upper()
            if again == 'Y':
                run_game()
            return


# ── Entry point ───────────────────────────────────────────────
if __name__ == "__main__":
    run_game()
