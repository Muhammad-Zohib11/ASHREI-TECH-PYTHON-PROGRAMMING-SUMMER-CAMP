# ============================================================
#  ASHRI Tech Game Academy — Day 4
#  ROCK PAPER SCISSORS DUEL
#  Concepts: if / elif / else, comparison operators, boolean
# ============================================================
#  python rock-paper-scissors.py
# ============================================================

import random

CHOICES = ["rock", "paper", "scissors"]
ICONS   = {"rock": "✊", "paper": "✋", "scissors": "✌️"}

def print_banner():
    print("════════════════════════════════════════════")
    print("   ✊  ROCK PAPER SCISSORS DUEL")
    print("   ASHRI Tech Game Academy — Day 4")
    print("════════════════════════════════════════════")

def get_choice():
    while True:
        pick = input("  Choose [rock / paper / scissors]: ").lower().strip()
        if pick in CHOICES:
            return pick
        print("  ❌ Invalid choice! Try again.")

def determine_winner(player, computer):
    """Uses if/elif/else — Day 4 core concept."""
    if player == computer:
        return "tie"
    elif (player == "rock"     and computer == "scissors") or \
         (player == "scissors" and computer == "paper")    or \
         (player == "paper"    and computer == "rock"):
        return "player"
    else:
        return "computer"

def run_game():
    print_banner()
    print()

    name = input("  Enter your name: ").strip() or "Player"
    print(f"\n  First to 3 wins, {name}!\n")

    player_score   = 0
    computer_score = 0

    while player_score < 3 and computer_score < 3:
        player   = get_choice()
        computer = random.choice(CHOICES)

        print(f"\n  {ICONS[player]} {player}  vs  {ICONS[computer]} {computer}")

        result = determine_winner(player, computer)

        if result == "tie":
            print("  ➖ TIE!")
        elif result == "player":
            player_score += 1
            print(f"  ✅ YOU WIN this round!")
        else:
            computer_score += 1
            print(f"  🤖 Computer wins this round!")

        print(f"  Score: {name} {player_score}  —  Computer {computer_score}\n")

    print("════════════════════════════════════════════")
    if player_score == 3:
        print(f"  🏆 {name} is the CHAMPION!")
    else:
        print("  🤖 Computer wins the duel! Better luck next time.")
    print("════════════════════════════════════════════")
    print()

    again = input("  Play again? [Y/N]: ").strip().upper()
    if again == 'Y':
        run_game()

if __name__ == "__main__":
    run_game()
