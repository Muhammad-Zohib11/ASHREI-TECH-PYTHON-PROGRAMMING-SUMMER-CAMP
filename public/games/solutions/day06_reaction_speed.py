# ============================================================
#  ASHRI Tech Game Academy — Day 6
#  REACTION SPEED TESTER
#  Concepts: def, parameters, return values, function calls
# ============================================================
#  python reaction-game.py
# ============================================================

import time
import random

def print_banner():
    """Function with no parameters — Day 6 concept."""
    print("════════════════════════════════════════════")
    print("   ⚡  REACTION SPEED TESTER")
    print("   ASHRI Tech Game Academy — Day 6")
    print("════════════════════════════════════════════")

def wait_and_signal():
    """Waits a random time then fires the signal. Returns signal time."""
    delay = random.uniform(1.5, 4.0)
    time.sleep(delay)
    print("\n  ⚡⚡⚡  PRESS ENTER NOW!  ⚡⚡⚡")
    return time.time()                    # return value — Day 6 concept

def measure_reaction():
    """Measures reaction time in milliseconds. Returns int."""
    print("  Get ready...")
    signal_time = wait_and_signal()      # calling a function — Day 6
    input()
    elapsed_ms = round((time.time() - signal_time) * 1000)
    return elapsed_ms                    # return value

def rate_reaction(ms):
    """Takes ms parameter, returns a rating string."""
    if ms < 150:   return "LEGENDARY ⚡"
    elif ms < 250: return "EXCELLENT 🔥"
    elif ms < 400: return "GOOD 👍"
    elif ms < 600: return "AVERAGE 😐"
    else:          return "KEEP TRAINING 💪"

def print_result(round_num, ms):
    """Displays one round result — uses multiple parameters."""
    rating = rate_reaction(ms)           # calling function with argument
    print(f"  Round {round_num}: {ms}ms — {rating}\n")

def run_game():
    print_banner()
    print()

    name    = input("  Your name: ").strip() or "Player"
    rounds  = 3
    results = []                         # list to collect results

    print(f"\n  {rounds} rounds, {name}. React as fast as you can!\n")
    time.sleep(0.8)

    for i in range(1, rounds + 1):
        print(f"--- Round {i} / {rounds} ---")
        ms = measure_reaction()          # function call, store return value
        results.append(ms)
        print_result(i, ms)

    # Calculate stats using functions
    best    = min(results)               # built-in functions
    worst   = max(results)
    average = round(sum(results) / len(results))

    print("════════════════════════════════════════════")
    print(f"  Results for {name}:")
    print(f"    Best    : {best}ms  — {rate_reaction(best)}")
    print(f"    Worst   : {worst}ms")
    print(f"    Average : {average}ms  — {rate_reaction(average)}")
    print("════════════════════════════════════════════")
    print()

    again = input("  Play again? [Y/N]: ").strip().upper()
    if again == 'Y':
        run_game()

if __name__ == "__main__":
    run_game()
