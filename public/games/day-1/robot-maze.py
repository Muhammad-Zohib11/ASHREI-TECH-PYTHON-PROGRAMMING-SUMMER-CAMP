# ============================================================
#  ASHRI Tech Game Academy — Day 1 Mini Game
#  ROBOT MAZE EXPLORER
#  Concepts: print(), input(), variables, comments
# ============================================================
#  HOW TO PLAY:
#    - Type N, S, E, or W and press Enter to move the robot
#    - Navigate from R (Robot) to G (Goal)
#    - Avoid walls marked with #
#    - Type QUIT to exit
#    - Type MAP to see the maze again
#    - Type RESET to restart from the beginning
# ============================================================
#  MISSION GOAL:
#    Guide the robot through the maze and reach the exit!
# ============================================================
#  TIPS:
#    - Try changing robot_name to your own name
#    - Try changing the welcome message
#    - Change the 'moves_limit' to make it harder or easier
# ============================================================

import os

def clear():
    """Clear the terminal screen."""
    os.system('cls' if os.name == 'nt' else 'clear')

# ── Game settings (try changing these!) ──────────────────
robot_name   = "ROBO-1"     # Change this to name your robot!
moves_limit  = 30           # Max moves before game over
start_x, start_y = 1, 1    # Starting position (column, row)

# ── Maze layout ───────────────────────────────────────────
# '#' = Wall   ' ' = Path   'G' = Goal   'R' = Robot Start
MAZE_TEMPLATE = [
    "###########",
    "#R   # G  #",   # R=start (col 1, row 1), G=goal (col 6, row 1)
    "# # # ### #",
    "# #   #   #",
    "# ##### # #",
    "#       # #",
    "# ##### # #",
    "#   #     #",
    "###########",
]

# ── Direction map ─────────────────────────────────────────
MOVES = {
    'N': (0, -1),
    'S': (0,  1),
    'E': (1,  0),
    'W': (-1, 0),
}

DIR_NAMES = {'N': 'North ↑', 'S': 'South ↓', 'E': 'East →', 'W': 'West ←'}

def get_goal_pos():
    """Find the G position in the maze template."""
    for row_idx, row in enumerate(MAZE_TEMPLATE):
        col_idx = row.find('G')
        if col_idx != -1:
            return col_idx, row_idx
    return 9, 1  # fallback

def draw_maze(robot_x, robot_y):
    """Draw the maze with the robot's current position."""
    print()
    for row_idx, row in enumerate(MAZE_TEMPLATE):
        display_row = ""
        for col_idx, cell in enumerate(row):
            if col_idx == robot_x and row_idx == robot_y:
                display_row += "🤖"
            elif cell == 'G':
                display_row += "🚪"
            elif cell == '#':
                display_row += "██"
            elif cell == 'R':
                display_row += "  "   # clear start position
            else:
                display_row += "  "
        print("  " + display_row)
    print()

def is_wall(x, y):
    """Return True if the position is a wall or out of bounds."""
    rows = len(MAZE_TEMPLATE)
    cols = len(MAZE_TEMPLATE[0])
    if x < 0 or y < 0 or x >= cols or y >= rows:
        return True
    return MAZE_TEMPLATE[y][x] == '#'

def print_banner():
    """Print the game title banner."""
    print("=" * 45)
    print("   🤖  ROBOT MAZE EXPLORER  🤖")
    print("   ASHRI Tech Game Academy — Day 1")
    print("=" * 45)

def print_controls():
    """Print the controls reference."""
    print("  Controls:")
    print("    N = Move North (up)")
    print("    S = Move South (down)")
    print("    E = Move East (right)")
    print("    W = Move West (left)")
    print("    MAP   = Show the maze")
    print("    RESET = Restart")
    print("    QUIT  = Exit game")
    print()

def print_stats(robot_x, robot_y, moves, goal_x, goal_y):
    """Print robot's current stats."""
    dist = abs(robot_x - goal_x) + abs(robot_y - goal_y)
    print(f"  📍 Position : ({robot_x}, {robot_y})")
    print(f"  🎯 Goal     : ({goal_x}, {goal_y})  — {dist} steps away")
    print(f"  👣 Moves    : {moves} / {moves_limit}")
    print()

# ── Main game function ────────────────────────────────────
def run_game():
    clear()
    print_banner()
    print()

    # Get player name
    player_name = input("  Enter your name, Recruit: ").strip()
    if not player_name:
        player_name = "Recruit"

    print(f"\n  Welcome, {player_name}! You control {robot_name}.")
    print(f"  Navigate the maze and find the exit portal 🚪\n")
    print_controls()

    robot_x, robot_y = start_x, start_y
    goal_x, goal_y   = get_goal_pos()
    moves = 0

    draw_maze(robot_x, robot_y)
    print_stats(robot_x, robot_y, moves, goal_x, goal_y)

    # ── Game loop ──────────────────────────────────────────
    while True:
        command = input("  > Move [N/S/E/W] or command: ").strip().upper()
        print()

        # ── Special commands ──
        if command == 'QUIT':
            print(f"  Goodbye, {player_name}! {robot_name} will wait for you. 👋")
            break

        if command == 'MAP':
            draw_maze(robot_x, robot_y)
            print_stats(robot_x, robot_y, moves, goal_x, goal_y)
            continue

        if command == 'RESET':
            print("  🔄 Resetting robot to start position...\n")
            run_game()
            return

        # ── Movement ──
        if command not in MOVES:
            print(f"  ❌ Unknown command '{command}'. Use N, S, E, W, MAP, RESET, or QUIT.\n")
            continue

        dx, dy  = MOVES[command]
        new_x   = robot_x + dx
        new_y   = robot_y + dy

        if is_wall(new_x, new_y):
            print(f"  🚫 WALL BLOCKED! Can't move {DIR_NAMES[command]}.\n")
            continue

        # Valid move
        robot_x = new_x
        robot_y = new_y
        moves  += 1

        print(f"  ✅ {robot_name} moved {DIR_NAMES[command]}!")
        draw_maze(robot_x, robot_y)

        # ── Win condition ──
        if robot_x == goal_x and robot_y == goal_y:
            print("  " + "=" * 41)
            print(f"  🎉  MISSION COMPLETE, {player_name}!")
            print(f"  🤖  {robot_name} escaped the maze!")
            print(f"  👣  You used {moves} moves.")
            if moves <= 15:
                print("  ⭐  SPEED RUNNER! Incredible efficiency!")
            elif moves <= 22:
                print("  🔥  Great navigation!")
            else:
                print("  💪  You did it! Try to beat your move count!")
            print("  " + "=" * 41)
            break

        print_stats(robot_x, robot_y, moves, goal_x, goal_y)

        # ── Lose condition ──
        if moves >= moves_limit:
            print("  " + "=" * 41)
            print(f"  ⏰  OUT OF MOVES! {robot_name} is stuck.")
            print(f"  💡  Tip: Type RESET to try again!")
            print("  " + "=" * 41)
            again = input("\n  Play again? [Y/N]: ").strip().upper()
            if again == 'Y':
                run_game()
            return

    # ── Play again prompt ──
    print()
    again = input("  Play again? [Y/N]: ").strip().upper()
    if again == 'Y':
        run_game()
    else:
        print(f"\n  Thanks for playing, {player_name}!")
        print("  See you in the next mission! 🚀\n")

# ── Entry point ───────────────────────────────────────────
if __name__ == "__main__":
    run_game()
