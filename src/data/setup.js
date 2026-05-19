/**
 * Setup data for each lesson day.
 * Keyed by day ID (1–10).
 * Consumed by SetupBlock component in DayLesson.jsx.
 */
export const SETUP_DATA = {

  1: {
    pythonVersion: '3.8+',
    commands: [
      { cmd: 'python --version',              comment: 'confirm Python is installed' },
      { cmd: 'python',                         comment: 'open the Python interactive shell' },
      { cmd: 'print("Hello, Game World!")',    comment: 'type this inside the shell to test' },
      { cmd: 'exit()',                          comment: 'quit the Python shell' },
    ],
    packages: [],
    extensions: ['Python (Microsoft)', 'Pylance'],
    note: 'No extra packages needed today! Pure Python only.',
    troubleshooting: [
      { issue: '"python" is not recognized as a command', fix: 'Open the Microsoft Store and search "Python 3.11". Install it, then restart VS Code.' },
      { issue: 'VS Code says "Select Python Interpreter"', fix: 'Press Ctrl+Shift+P → "Python: Select Interpreter" → choose the Python 3.x version from the list.' },
      { issue: 'print() shows nothing / errors', fix: 'Make sure you are running the FILE (click ▶ Run), not typing in a terminal manually without the Python shell open.' },
    ],
  },

  2: {
    pythonVersion: '3.8+',
    commands: [
      { cmd: 'python --version',   comment: 'confirm Python 3.8+' },
      { cmd: 'python day2.py',     comment: 'run your variables script' },
    ],
    packages: [],
    extensions: ['Python (Microsoft)', 'Pylance', 'indent-rainbow'],
    note: 'Still no packages needed. Focus on getting comfortable with VS Code Run button (▶).',
    troubleshooting: [
      { issue: 'f-string gives SyntaxError', fix: 'f-strings require Python 3.6+. Run "python --version" to check. If you see 2.x, install Python 3.' },
      { issue: 'Variable name has spaces — SyntaxError', fix: 'Variable names cannot have spaces. Use underscore: player_name not "player name".' },
      { issue: 'TypeError: can only concatenate str (not "int") to str', fix: 'Use an f-string: f"Score: {score}" instead of "Score: " + score.' },
    ],
  },

  3: {
    pythonVersion: '3.8+',
    commands: [
      { cmd: 'python --version',          comment: 'check version' },
      { cmd: 'python -c "import math; print(math.pi)"', comment: 'test math module (built-in, no install needed)' },
      { cmd: 'python day3.py',            comment: 'run your math script' },
    ],
    packages: [],
    extensions: ['Python (Microsoft)', 'Pylance'],
    note: 'The math module is built into Python — no pip install needed!',
    troubleshooting: [
      { issue: 'ValueError: invalid literal for int()', fix: 'The user typed letters instead of a number. Add input validation: use a try/except block or ask again.' },
      { issue: 'ZeroDivisionError', fix: 'You tried to divide by zero. Add an if statement: if divisor != 0: before dividing.' },
      { issue: 'int() vs float() — when to use which?', fix: 'Use int() for whole numbers (lives, score, level). Use float() when decimals matter (speed, health %).' },
    ],
  },

  4: {
    pythonVersion: '3.8+',
    commands: [
      { cmd: 'python day4.py',   comment: 'run your conditions script' },
    ],
    packages: [],
    extensions: ['Python (Microsoft)', 'Pylance', 'indent-rainbow'],
    note: 'Indentation is CRITICAL in Python. Use 4 spaces (or Tab). Never mix them!',
    troubleshooting: [
      { issue: 'IndentationError: expected an indented block', fix: 'The code inside your if/elif/else must be indented with 4 spaces. Check that every line under if has a tab.' },
      { issue: '= vs == confusion', fix: '"=" assigns a value (x = 5). "==" checks equality (if x == 5). They are completely different!' },
      { issue: 'elif / else not being reached', fix: 'Check that your if condition is not always True. Add print() statements above each branch to debug.' },
    ],
  },

  5: {
    pythonVersion: '3.8+',
    commands: [
      { cmd: 'python day5.py',   comment: 'run your loops script' },
    ],
    packages: [],
    extensions: ['Python (Microsoft)', 'Pylance'],
    note: 'If your program seems stuck/frozen, it might be an infinite loop! Press Ctrl+C to stop it.',
    troubleshooting: [
      { issue: 'Program freezes / runs forever', fix: 'Press Ctrl+C in the terminal to stop. You likely have a while loop where the condition never becomes False. Add print() to debug.' },
      { issue: 'range() not including the last number', fix: 'range(1, 6) gives 1,2,3,4,5 — not 6. The end value is EXCLUDED. Use range(1, 11) for 1 through 10.' },
      { issue: 'break not working inside nested loops', fix: 'break only exits the innermost loop. To break outer loops, use a flag variable (found = True) and check it.' },
    ],
  },

  6: {
    pythonVersion: '3.8+',
    commands: [
      { cmd: 'python day6.py',   comment: 'run your functions script' },
    ],
    packages: [],
    extensions: ['Python (Microsoft)', 'Pylance', 'indent-rainbow'],
    note: 'Functions must be DEFINED before they are CALLED. Always write def at the top of your file.',
    troubleshooting: [
      { issue: 'NameError: name "my_function" is not defined', fix: 'Make sure you called the function AFTER the def block. Python reads top to bottom.' },
      { issue: 'Function returns None unexpectedly', fix: 'You forgot to add "return" at the end of your function. Without return, Python returns None by default.' },
      { issue: 'Wrong number of arguments error', fix: 'Count the parameters in your def line and make sure you pass the same number when calling it.' },
    ],
  },

  7: {
    pythonVersion: '3.8+',
    commands: [
      { cmd: 'python day7.py',   comment: 'run your lists script' },
    ],
    packages: [],
    extensions: ['Python (Microsoft)', 'Pylance'],
    note: 'Lists are zero-indexed: the first item is at index [0], NOT [1]!',
    troubleshooting: [
      { issue: 'IndexError: list index out of range', fix: 'You accessed an index that does not exist. If list has 3 items, valid indexes are 0, 1, 2. Check len(your_list).' },
      { issue: 'List not updating after append()', fix: 'Make sure you are calling append() on the LIST VARIABLE, not on a copy. Check your variable names.' },
      { issue: 'Iterating and modifying list at same time', fix: 'Never modify a list while looping over it. Build a new list instead, or loop over a copy: for item in my_list[:].' },
    ],
  },

  8: {
    pythonVersion: '3.8+',
    commands: [
      { cmd: 'python -c "import random; print(random.randint(1,10))"', comment: 'test random module' },
      { cmd: 'python day8.py', comment: 'run your random script' },
    ],
    packages: [],
    extensions: ['Python (Microsoft)', 'Pylance'],
    note: 'random is a built-in module — no pip install! Just "import random" at the top of your file.',
    troubleshooting: [
      { issue: 'Same random numbers every run', fix: 'If you used random.seed(42), remove it. Seeds make randomness predictable (useful for testing, bad for games).' },
      { issue: 'randint vs randrange', fix: 'randint(1, 10) includes BOTH 1 and 10. randrange(1, 10) excludes 10. Use randint for dice/game choices.' },
      { issue: 'random.choice() on empty list crashes', fix: 'Add a check: if len(my_list) > 0: before calling random.choice(my_list).' },
    ],
  },

  9: {
    pythonVersion: '3.9+',
    commands: [
      { cmd: 'pip install pygame',         comment: 'install Pygame — required for Days 9–12!' },
      { cmd: 'python -c "import pygame; print(\'Pygame\', pygame.version.ver, \'- OK!\')"', comment: 'verify Pygame installed correctly' },
      { cmd: 'python day9.py',             comment: 'run your Window Builder script' },
    ],
    packages: ['pygame'],
    extensions: ['Python (Microsoft)', 'Pylance'],
    note: 'Pygame opens a SEPARATE WINDOW — not output in the VS Code terminal. If nothing appears, check your taskbar! Run the verify command above first to confirm the install.',
    troubleshooting: [
      { issue: 'ModuleNotFoundError: No module named "pygame"', fix: 'Run: pip install pygame in the TERMINAL (not the Python shell). If pip is not found, try: python -m pip install pygame' },
      { issue: 'pip is not recognized as a command', fix: 'Use: python -m pip install pygame  instead of just pip.' },
      { issue: 'Pygame window opens but immediately closes', fix: 'You are missing the game loop. Add: while running:  with pygame.event.get() inside to keep the window alive.' },
      { issue: 'Black screen / shapes not visible', fix: 'Call pygame.display.flip() at the END of your game loop — without it nothing is shown on screen.' },
    ],
  },

  10: {
    pythonVersion: '3.9+',
    commands: [
      { cmd: 'python -c "import pygame; print(pygame.version.ver)"', comment: 'confirm Pygame is still installed from Day 9' },
      { cmd: 'python day10_flappy.py',      comment: 'run your Flappy Bird game' },
    ],
    packages: ['pygame'],
    extensions: ['Python (Microsoft)', 'Pylance'],
    note: 'Pygame was installed on Day 9. If you get ModuleNotFoundError, run: pip install pygame',
    troubleshooting: [
      { issue: 'Bird falls through the floor instantly', fix: 'Check GRAVITY = 0.5 is not too high. Also verify the floor check: if bird_y > HEIGHT: running = False is inside the game loop.' },
      { issue: 'SPACE key does not make the bird jump', fix: 'Check for event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE inside the for event in pygame.event.get() loop.' },
      { issue: 'Pipes never appear or scroll off instantly', fix: 'pipe_x must start at WIDTH (right edge of screen). Decrease it by 4 each frame INSIDE the game loop.' },
      { issue: 'colliderect() never fires / collision not working', fix: 'Both objects must be pygame.Rect — not plain tuples. Wrap coordinates: pygame.Rect(x, y, width, height).' },
    ],
  },

  11: {
    pythonVersion: '3.9+',
    commands: [
      { cmd: 'python -c "import pygame; print(pygame.version.ver)"', comment: 'verify Pygame is ready' },
      { cmd: 'python day11_shooter.py',     comment: 'run your Space Shooter Part 1' },
    ],
    packages: ['pygame'],
    extensions: ['Python (Microsoft)', 'Pylance'],
    note: 'Start from your Day 9 game loop skeleton — copy it as day11_shooter.py to save setup time.',
    troubleshooting: [
      { issue: 'ValueError: list.remove(x): x not in list', fix: 'Loop over a COPY of the list using [:]: for b in bullets[:] — this lets you safely remove items during the loop.' },
      { issue: 'Bullets not visible on screen', fix: 'Draw bullets INSIDE the game loop, AFTER screen.fill() and BEFORE pygame.display.flip(). Check drawing order.' },
      { issue: 'Enemies disappear immediately after spawning', fix: 'Check your cleanup condition: enemies = [e for e in enemies if e.top < H]. You may have it reversed (< vs >).' },
      { issue: 'Player ship moves off-screen', fix: 'Add boundary checks: if keys[K_a] and player.left > 0: player.x -= SPEED' },
    ],
  },

  12: {
    pythonVersion: '3.9+',
    commands: [
      { cmd: 'copy day11_shooter.py day12_shooter_final.py', comment: 'copy Day 11 file to protect your work (Windows)' },
      { cmd: 'python day12_shooter_final.py', comment: 'run your completed Space Shooter!' },
      { cmd: 'pip freeze > requirements.txt', comment: 'export project dependencies for sharing' },
    ],
    packages: ['pygame'],
    extensions: ['Python (Microsoft)', 'Pylance', 'GitLens'],
    note: 'Showcase day! Make sure your game runs from a FRESH terminal before presenting to the class.',
    troubleshooting: [
      { issue: 'Game crashes with ValueError on bullet-enemy collision', fix: 'Add break after bullets.remove(b). Without break, Python tries to check a bullet that no longer exists in the list.' },
      { issue: 'Restart button (R) does not fully reset', fix: 'ALL variables (bullets, enemies, score, health, player position) must be reset at the top of the outer while True: restart loop.' },
      { issue: 'HUD text appears behind game objects', fix: 'Draw the HUD LAST in the draw section — drawing order determines what appears on top.' },
      { issue: 'Sharing the game with friends', fix: 'They need Python + Pygame. Share your .py file + requirements.txt. They run: pip install -r requirements.txt' },
    ],
  },

};
