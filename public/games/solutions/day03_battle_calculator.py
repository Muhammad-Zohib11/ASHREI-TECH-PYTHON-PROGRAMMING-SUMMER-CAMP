# ============================================================
#  ASHRI Tech Game Academy — Day 3
#  BATTLE CALCULATOR
#  Concepts: arithmetic operators, int(), float(), math module
# ============================================================
#  python battle-calculator.py
# ============================================================

import math
import random

def print_banner():
    print("════════════════════════════════════════════")
    print("   ⚔️   BATTLE CALCULATOR")
    print("   ASHRI Tech Game Academy — Day 3")
    print("════════════════════════════════════════════")

def get_int(prompt, lo=1, hi=100):
    """Safe integer input with range clamp."""
    while True:
        try:
            val = int(input(prompt))    # int() — Day 3 concept
            return max(lo, min(hi, val))
        except ValueError:
            print("  ⚠️  Enter a whole number!")

def calc_damage(attack, defense):
    """Core damage formula — arithmetic operators."""
    raw    = attack - defense               # subtraction
    bonus  = math.floor(raw * 1.5)         # math.floor — Day 3
    crit   = raw > 30                       # comparison
    return bonus if crit else raw, crit

def run_game():
    print_banner()
    print()

    hero  = input("  Enter your hero name: ").strip() or "Hero"
    print()
    print(f"  ⚔️  {hero} vs The Dragon!\n")

    hero_hp   = 100
    dragon_hp = 100
    round_num = 0

    while hero_hp > 0 and dragon_hp > 0:
        round_num += 1
        print(f"--- Round {round_num} ---")
        print(f"  Your HP: {hero_hp}  |  Dragon HP: {dragon_hp}")
        print()

        # Player attack
        attack  = get_int("  Your attack power (1-50): ", 1, 50)
        defense = random.randint(5, 15)
        damage, crit = calc_damage(attack, defense)
        dragon_hp -= damage

        if crit:
            print(f"  💥 CRITICAL HIT! Defense={defense} | Damage={damage}")
        else:
            print(f"  ⚔️  Hit! Defense={defense} | Damage={damage}")

        # Dragon counter-attack
        if dragon_hp > 0:
            counter = random.randint(8, 22)
            hero_hp -= counter
            print(f"  🐉 Dragon attacks! -{counter} HP")

        # Float division — show percentage
        dragon_pct = max(0, dragon_hp) / 100 * 100
        print(f"  Dragon HP remaining: {dragon_pct:.1f}%")   # float format
        print()

    print("════════════════════════════════════════════")
    if hero_hp > 0:
        print(f"  🏆 {hero} WINS after {round_num} rounds!")
        print(f"  Dragon dealt: {100 - hero_hp} total damage")
        print(f"  {hero} HP remaining: {hero_hp}")
    else:
        print(f"  💀 The Dragon wins after {round_num} rounds.")
        print("  Tip: Use higher attack values next time!")
    print("════════════════════════════════════════════")
    print()

    again = input("  Play again? [Y/N]: ").strip().upper()
    if again == 'Y':
        run_game()

if __name__ == "__main__":
    run_game()
