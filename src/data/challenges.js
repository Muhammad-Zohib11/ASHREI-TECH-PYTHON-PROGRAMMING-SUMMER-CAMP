/**
 * challenges.js
 * Challenge engine data for all 10 days.
 * Each day has multiple sequential challenge steps.
 * Completing all steps unlocks the mini-game download.
 */

export const CHALLENGES_DATA = {

  1: {
    miniGame: {
      title: "Robot Maze Explorer",
      description: "Navigate a robot through a maze using Python logic! Type directions to guide the robot to the exit portal.",
      icon: "🤖", difficulty: 1,
      concepts: ["print()", "input()", "Variables"],
    },

    howToPlay: {
      objective: "Guide ROBO-1 through the maze and reach the exit portal 🚪 before running out of moves! The robot starts at position R and must navigate to G.",
      controls: [
        { key: "N", action: "Move North (up)" },
        { key: "S", action: "Move South (down)" },
        { key: "E", action: "Move East (right)" },
        { key: "W", action: "Move West (left)" },
        { key: "MAP", action: "Show the full maze" },
        { key: "RESET", action: "Restart from beginning" },
        { key: "QUIT", action: "Exit the game" },
      ],
      winCondition: "Reach the exit portal 🚪 before using all 30 moves.",
      loseCondition: "Run out of moves (30 move limit). Type RESET to try again!",
      mechanics: [
        "The maze is displayed in the terminal — # symbols are walls you cannot pass through",
        "Your current position and distance to goal is shown after each move",
        "Fewer moves = better rating: Under 15 = Speed Runner ⭐",
        "Try changing robot_name at the top of the file to personalise your robot!",
        "Try changing moves_limit to make the challenge harder or easier",
      ],
      tips: [
        "Before moving, type MAP to see the full maze and plan your route!",
        "Count the steps mentally before moving — efficiency matters for the Speed Runner badge.",
        "Try modifying the robot_name variable in the .py file to name your robot anything you want!",
        "Challenge: beat the maze in under 15 moves for the SPEED RUNNER rating!",
      ],
    },
    steps: [
      {
        id: "1a",
        instruction: "🎯 **Mission 1:** Use `print()` to display your name on screen.",
        example: 'print("Alex")',
        placeholder: 'print("Your Name")',
        xp: 30,
        validator: {
          type: "contains",
          tokens: ["print("],
          minLength: 5,
        },
        hints: [
          'Use print() with your name inside quotes: print("Alex")',
          'Make sure you have opening and closing parentheses: print("Name")',
        ],
        successMessage: "🚀 The robot hears you! Your name echoes through the maze...",
      },
      {
        id: "1b",
        instruction: "🎯 **Mission 2:** Ask the player for their hero name using `input()`.",
        example: 'name = input("Enter your hero name: ")',
        placeholder: 'name = input("...")',
        xp: 40,
        validator: {
          type: "contains",
          tokens: ["input(", "name"],
          minLength: 10,
        },
        hints: [
          'Store input() in a variable: name = input("Enter your hero name: ")',
          'The variable name comes first, then = , then input()',
        ],
        successMessage: "🤖 The robot registers your hero identity! Access granted...",
      },
      {
        id: "1c",
        instruction: "🎯 **Mission 3:** Print a welcome message using the `name` variable.",
        example: 'print("Welcome,", name)',
        placeholder: 'print("Welcome,", name)',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["print(", "name"],
          minLength: 10,
        },
        hints: [
          'Use print() with the variable: print("Welcome,", name)',
          'You can also use an f-string: print(f"Welcome, {name}!")',
        ],
        successMessage: "🏁 MAZE UNLOCKED! The robot welcomes its new commander!",
      },
    ],
  },

  2: {
    miniGame: {
      title: "Coin Collector Dash",
      description: "Collect coins on a grid! Each coin is stored as a variable — collect them all!",
      icon: "💰", difficulty: 1,
      concepts: ["Variables", "f-strings", "Integers"],
      fileName: "day2_coin_collector.py",
      password: "admin",
    },
    steps: [
      {
        id: "2a",
        instruction: "🎯 **Mission 1:** Create a variable `coins` and set it to `0`.",
        example: "coins = 0",
        placeholder: "coins = 0",
        xp: 30,
        validator: {
          type: "contains",
          tokens: ["coins", "=", "0"],
          minLength: 7,
        },
        hints: [
          'Variable syntax: name = value — so: coins = 0',
          'Make sure there are no quotes around 0 — it must be a number!',
        ],
        successMessage: "💰 Your coin counter is initialised! Ready to collect...",
      },
      {
        id: "2b",
        instruction: "🎯 **Mission 2:** Collect 10 coins! Use `+=` to add 10 to `coins`.",
        example: "coins += 10",
        placeholder: "coins += 10",
        xp: 40,
        validator: {
          type: "contains",
          tokens: ["coins", "+=", "10"],
          minLength: 8,
        },
        hints: [
          '"+=" is the shortcut for coins = coins + 10',
          'Write it exactly: coins += 10',
        ],
        successMessage: "🌟 10 coins collected! The counter ticks up!",
      },
      {
        id: "2c",
        instruction: "🎯 **Mission 3:** Print the score using an f-string: `f\"Coins: {coins}\"`",
        example: 'print(f"Coins: {coins}")',
        placeholder: 'print(f"Coins: {coins}")',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["print(", "f\"", "coins", "}"],
          minLength: 15,
        },
        hints: [
          'f-strings use curly braces: f"Coins: {coins}"',
          'Don\'t forget the f before the first quote!',
        ],
        successMessage: "🏆 HUD ACTIVATED! The score display lights up!",
      },
    ],
  },

  3: {
    miniGame: {
      title: "Battle Calculator",
      description: "Calculate attack damage in real-time! Enter attack and defense values to see the outcome.",
      icon: "⚔️", difficulty: 1,
      concepts: ["Arithmetic operators", "int()", "Math module"],
      fileName: "day3_battle_calc.py",
      password: "admin",
    },
    steps: [
      {
        id: "3a",
        instruction: "🎯 **Mission 1:** Create two variables: `attack = 35` and `defense = 12`.",
        example: "attack = 35\ndefense = 12",
        placeholder: "attack = 35\ndefense = 12",
        xp: 30,
        validator: {
          type: "contains",
          tokens: ["attack", "=", "defense"],
          minLength: 15,
        },
        hints: [
          'Two variables on two lines: attack = 35 then defense = 12',
          'Make sure both are whole numbers (integers), no quotes!',
        ],
        successMessage: "⚔️ Battle stats loaded! Combat calculations online...",
      },
      {
        id: "3b",
        instruction: "🎯 **Mission 2:** Calculate `damage = attack - defense` and print it.",
        example: "damage = attack - defense\nprint(damage)",
        placeholder: "damage = attack - defense\nprint(damage)",
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["damage", "attack", "-", "defense", "print"],
          minLength: 20,
        },
        hints: [
          'Subtract: damage = attack - defense',
          'Then print it: print(damage) or print(f"Damage: {damage}")',
        ],
        successMessage: "💥 CRITICAL CALCULATION! The battle engine fires up!",
      },
      {
        id: "3c",
        instruction: "🎯 **Mission 3:** Convert user input to int — write `level = int(input(\"Level: \"))`",
        example: 'level = int(input("Level: "))',
        placeholder: 'level = int(input("Level: "))',
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["int(", "input(", "level"],
          minLength: 15,
        },
        hints: [
          'Wrap input() inside int(): level = int(input("Level: "))',
          'int() converts the text from input() into a real number',
        ],
        successMessage: "🧮 TYPE CONVERSION MASTERED! The math engine is ready!",
      },
    ],
  },

  4: {
    miniGame: {
      title: "Rock Paper Scissors Duel",
      description: "Play RPS against the AI! The game uses the exact if/elif/else logic you learned today.",
      icon: "✊", difficulty: 2,
      concepts: ["if/elif/else", "Comparison operators", "Boolean logic"],
      fileName: "day4_rps_duel.py",
      password: "admin",
    },
    steps: [
      {
        id: "4a",
        instruction: "🎯 **Mission 1:** Write an `if` statement: if `health > 50`, print `\"Healthy!\"`",
        example: 'if health > 50:\n    print("Healthy!")',
        placeholder: 'if health > 50:\n    print("Healthy!")',
        xp: 40,
        validator: {
          type: "contains",
          tokens: ["if", ">", "print("],
          minLength: 15,
        },
        hints: [
          'if syntax: if condition: (colon at the end!)',
          'Indent the print() with 4 spaces: if health > 50:\\n    print("Healthy!")',
        ],
        successMessage: "🧠 Condition logic activated! The game now thinks!",
      },
      {
        id: "4b",
        instruction: "🎯 **Mission 2:** Add `elif` and `else` — check if health > 20 (damaged) or else (dead).",
        example: 'elif health > 20:\n    print("Damaged!")\nelse:\n    print("Dead!")',
        placeholder: 'elif health > 20:\n    print("Damaged!")\nelse:\n    print("Dead!")',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["elif", "else"],
          minLength: 20,
        },
        hints: [
          'elif goes between if and else',
          'else has no condition — it catches everything that didn\'t match above',
        ],
        successMessage: "🔮 Decision chain complete! The AI can now think in branches!",
      },
      {
        id: "4c",
        instruction: "🎯 **Mission 3:** Use `and` to combine two conditions: `if x == 'rock' and y == 'scissors'`",
        example: "if x == 'rock' and y == 'scissors':\n    print(\"Win!\")",
        placeholder: "if x == 'rock' and y == 'scissors':\n    print(\"Win!\")",
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["and", "==", "if"],
          minLength: 20,
        },
        hints: [
          '"and" combines two conditions — both must be True',
          'Use == (double equals) to compare: if x == "rock" and y == "scissors"',
        ],
        successMessage: "🎉 BOOLEAN POWER UNLOCKED! The RPS brain is wired!",
      },
    ],
  },

  5: {
    miniGame: {
      title: "Falling Blocks Frenzy",
      description: "Watch blocks fall faster each round — built with the exact for loop logic from today!",
      icon: "🧱", difficulty: 2,
      concepts: ["for loops", "while loops", "range()"],
      fileName: "day5_falling_blocks.py",
      password: "admin",
    },
    steps: [
      {
        id: "5a",
        instruction: "🎯 **Mission 1:** Write a `for` loop using `range(1, 6)` that prints each number.",
        example: "for i in range(1, 6):\n    print(i)",
        placeholder: "for i in range(1, 6):\n    print(i)",
        xp: 40,
        validator: {
          type: "contains",
          tokens: ["for", "range(", "print("],
          minLength: 20,
        },
        hints: [
          'for loop syntax: for i in range(1, 6):',
          'Indent print(i) with 4 spaces inside the loop',
        ],
        successMessage: "🔁 Loop engaged! Numbers fly across the screen!",
      },
      {
        id: "5b",
        instruction: "🎯 **Mission 2:** Write a `while` loop: while `lives > 0`, subtract 1 each time.",
        example: "lives = 3\nwhile lives > 0:\n    lives -= 1\n    print(lives)",
        placeholder: "lives = 3\nwhile lives > 0:\n    lives -= 1",
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["while", "lives", "-="],
          minLength: 25,
        },
        hints: [
          'while loop: while lives > 0: (the loop keeps going as long as this is True)',
          'Use -= to decrease: lives -= 1 subtracts 1 each loop',
        ],
        successMessage: "💫 GAME LOOP PATTERN MASTERED! Every game uses this!",
      },
      {
        id: "5c",
        instruction: "🎯 **Mission 3:** Use `break` to exit a loop early when `score >= 300`.",
        example: "if score >= 300:\n    break",
        placeholder: "if score >= 300:\n    break",
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["break", ">="],
          minLength: 15,
        },
        hints: [
          'break instantly exits the loop it\'s inside',
          'Put it inside an if: if score >= 300: then indented break',
        ],
        successMessage: "⚡ BREAK COMMAND LEARNED! You control the loop's destiny!",
      },
    ],
  },

  6: {
    miniGame: {
      title: "Reaction Speed Tester",
      description: "Test your reactions! The game calls functions to measure and rate your speed.",
      icon: "⚡", difficulty: 2,
      concepts: ["def", "Parameters", "Return values"],
      fileName: "day6_reaction_game.py",
      password: "admin",
    },
    steps: [
      {
        id: "6a",
        instruction: "🎯 **Mission 1:** Define a function called `greet` that takes a `name` parameter.",
        example: "def greet(name):\n    print(f\"Hello, {name}!\")",
        placeholder: "def greet(name):\n    print(f\"Hello, {name}!\")",
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["def ", "name", "print("],
          minLength: 20,
        },
        hints: [
          'def syntax: def function_name(parameter):',
          'The body must be indented: def greet(name):\\n    print(f"Hello, {name}!")',
        ],
        successMessage: "⚙️ FUNCTION DEFINED! A reusable superpower is born!",
      },
      {
        id: "6b",
        instruction: "🎯 **Mission 2:** Add a `return` statement — return the damage value from a function.",
        example: "def calc(attack, defense):\n    damage = attack - defense\n    return damage",
        placeholder: "def calc(attack, defense):\n    damage = attack - defense\n    return damage",
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["def ", "return"],
          minLength: 20,
        },
        hints: [
          'return sends a value back: return damage',
          'The return line must be inside the function (indented)',
        ],
        successMessage: "📤 RETURN VALUE MASTERED! Functions now send data back!",
      },
      {
        id: "6c",
        instruction: "🎯 **Mission 3:** Call your function and store the result: `result = calc(40, 10)`",
        example: "result = calc(40, 10)\nprint(result)",
        placeholder: "result = calc(40, 10)\nprint(result)",
        xp: 70,
        validator: {
          type: "contains",
          tokens: ["result", "=", "print("],
          minLength: 15,
        },
        hints: [
          'Call the function by name with arguments: result = calc(40, 10)',
          'Then print the result: print(result)',
        ],
        successMessage: "🚀 FUNCTION CALL COMPLETE! The superpower is activated!",
      },
    ],
  },

  7: {
    miniGame: {
      title: "Snake Lite",
      description: "Control a growing snake on a grid — the snake body IS a Python list!",
      icon: "🐍", difficulty: 3,
      concepts: ["List creation", "Indexing", "append()", "Looping through lists"],
      fileName: "day7_snake_lite.py",
      password: "admin",
    },
    steps: [
      {
        id: "7a",
        instruction: "🎯 **Mission 1:** Create a list called `enemies` with 3 enemy names.",
        example: 'enemies = ["Goblin", "Orc", "Dragon"]',
        placeholder: 'enemies = ["Goblin", "Orc", "Dragon"]',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["enemies", "=", "["],
          minLength: 15,
        },
        hints: [
          'List syntax: name = [item1, item2, item3]',
          'String items go in quotes: enemies = ["Goblin", "Orc", "Dragon"]',
        ],
        successMessage: "📋 Enemy army assembled! The list is ready for battle!",
      },
      {
        id: "7b",
        instruction: "🎯 **Mission 2:** Use `append()` to add a new enemy to your list.",
        example: 'enemies.append("Boss")',
        placeholder: 'enemies.append("Boss")',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["append("],
          minLength: 10,
        },
        hints: [
          'append() adds to the END of the list: enemies.append("Boss")',
          'Call it on your list variable: list_name.append(new_item)',
        ],
        successMessage: "➕ BOSS ADDED! The army grows stronger!",
      },
      {
        id: "7c",
        instruction: "🎯 **Mission 3:** Loop through the list and print each enemy: `for e in enemies:`",
        example: "for e in enemies:\n    print(e)",
        placeholder: "for e in enemies:\n    print(e)",
        xp: 60,
        validator: {
          type: "contains",
          tokens: ["for", "in enemies", "print("],
          minLength: 20,
        },
        hints: [
          'for loop on a list: for e in enemies:',
          'Then print each item: indent print(e) inside the loop',
        ],
        successMessage: "🐍 SNAKE AWAKENS! All enemies marching in formation!",
      },
    ],
  },

  8: {
    miniGame: {
      title: "Meteor Dodge",
      description: "Dodge randomly spawning meteors! Positions use randint() — just like today's lesson.",
      icon: "☄️", difficulty: 3,
      concepts: ["random module", "randint()", "choice()", "shuffle()"],
      fileName: "day8_meteor_dodge.py",
      password: "admin",
    },
    steps: [
      {
        id: "8a",
        instruction: "🎯 **Mission 1:** Import random and use `randint(1, 10)` to get a random number.",
        example: "import random\nnum = random.randint(1, 10)\nprint(num)",
        placeholder: "import random\nnum = random.randint(1, 10)",
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["import random", "randint("],
          minLength: 20,
        },
        hints: [
          'First line: import random',
          'Then use: num = random.randint(1, 10)',
        ],
        successMessage: "🎲 CHAOS UNLOCKED! Random numbers flow through the code!",
      },
      {
        id: "8b",
        instruction: "🎯 **Mission 2:** Use `random.choice()` to pick a random item from a list.",
        example: 'items = ["sword", "shield", "potion"]\npick = random.choice(items)\nprint(pick)',
        placeholder: 'items = ["sword", "shield", "potion"]\npick = random.choice(items)',
        xp: 50,
        validator: {
          type: "contains",
          tokens: ["random.choice(", "["],
          minLength: 20,
        },
        hints: [
          'Create a list first, then: pick = random.choice(my_list)',
          'choice() picks ONE random item from any list',
        ],
        successMessage: "🎰 RANDOM LOOT DROPS ACTIVATED!",
      },
      {
        id: "8c",
        instruction: "🎯 **Mission 3:** Spawn 3 meteors with random x positions using `randint(0, 800)`.",
        example: "for i in range(3):\n    x = random.randint(0, 800)\n    print(f\"Meteor at x={x}\")",
        placeholder: "for i in range(3):\n    x = random.randint(0, 800)\n    print(f\"Meteor at x={x}\")",
        xp: 70,
        validator: {
          type: "contains",
          tokens: ["for", "randint(", "print("],
          minLength: 30,
        },
        hints: [
          'Combine a for loop with randint: for i in range(3):',
          'Inside the loop: x = random.randint(0, 800)',
        ],
        successMessage: "☄️ METEOR STORM DEPLOYED! Random chaos is your weapon!",
      },
    ],
  },

  9: {
    miniGame: {
      title: "Window Builder",
      description: "Open a Pygame window, draw shapes, and move a rectangle with the keyboard!",
      icon: "??", difficulty: 3,
      concepts: ["pygame.init()", "set_mode()", "Game loop", "Drawing shapes"],
      fileName: "day9_window_builder.py",
      password: "admin",
    },
    steps: [
      { id: "9a", instruction: "?? **Mission 1:** Import pygame and call `pygame.init()`.",
        example: "import pygame\npygame.init()", placeholder: "import pygame\npygame.init()", xp: 60,
        validator: { type: "contains", tokens: ["import pygame", "pygame.init()"], minLength: 20 },
        hints: ['Two lines: import pygame then pygame.init()','pygame.init() must be called before anything else!'],
        successMessage: "?? PYGAME ONLINE! The game engine starts its engines!" },
      { id: "9b", instruction: "?? **Mission 2:** Create the window: `screen = pygame.display.set_mode((800, 600))`",
        example: "screen = pygame.display.set_mode((800, 600))", placeholder: "screen = pygame.display.set_mode((800, 600))", xp: 70,
        validator: { type: "contains", tokens: ["pygame.display.set_mode(", "screen"], minLength: 30 },
        hints: ['Double parentheses: set_mode((width, height))','Store in screen: screen = pygame.display.set_mode((800, 600))'],
        successMessage: "??? GAME WINDOW CREATED! The arena is ready!" },
      { id: "9c", instruction: "?? **Mission 3:** Add the game loop with `clock.tick(60)` and `pygame.display.flip()`.",
        example: "while running:\n    clock.tick(60)\n    screen.fill((10,20,40))\n    pygame.display.flip()", placeholder: "while running:\n    clock.tick(60)\n    ...\n    pygame.display.flip()", xp: 80,
        validator: { type: "contains", tokens: ["clock.tick", "display.flip()", "while running"], minLength: 40 },
        hints: ['clock.tick(60) caps at 60 FPS','pygame.display.flip() shows everything drawn each frame'],
        successMessage: "?? WINDOW BUILDER UNLOCKED! The game loop is alive!" },
    ],
  },

  10: {
    miniGame: {
      title: "Flappy Bird Clone",
      description: "A full Flappy Bird with physics, pipes, and collision � built with everything you learned!",
      icon: "??", difficulty: 4,
      concepts: ["Bird physics", "Gravity & velocity", "Pipe collision", "Score system"],
      fileName: "day10_flappy_bird.py",
      password: "admin",
    },
    steps: [
      { id: "10a", instruction: "?? **Mission 1:** Apply gravity � `bird_vel += 0.5` and `bird_y += bird_vel` each frame.",
        example: "bird_vel += 0.5\nbird_y += bird_vel", placeholder: "bird_vel += 0.5\nbird_y += bird_vel", xp: 80,
        validator: { type: "contains", tokens: ["bird_vel", "+=", "bird_y"], minLength: 20 },
        hints: ['bird_vel += 0.5 adds downward velocity each frame','bird_y += bird_vel moves the bird'],
        successMessage: "?? PHYSICS ACTIVE! The bird now falls with gravity!" },
      { id: "10b", instruction: "?? **Mission 2:** Detect pipe collision � `if bird_rect.colliderect(top_pipe): running = False`",
        example: "bird_rect = pygame.Rect(bird_x-15, int(bird_y)-15, 30, 30)\nif bird_rect.colliderect(top_pipe):\n    running = False", placeholder: "if bird_rect.colliderect(top_pipe):\n    running = False", xp: 100,
        validator: { type: "contains", tokens: ["colliderect(", "running = False"], minLength: 30 },
        hints: ['Create bird_rect with pygame.Rect()','colliderect() returns True if two Rects overlap'],
        successMessage: "?? COLLISION DETECTED! The pipe is now deadly!" },
      { id: "10c", instruction: "?? **Mission 3:** Add a game-over screen showing final score after the loop ends.",
        example: "screen.blit(font.render('GAME OVER', True, (220,38,38)), (100, 200))\npygame.display.flip()", placeholder: "screen.blit(font.render('GAME OVER', True, ...), (...))\npygame.display.flip()", xp: 120,
        validator: { type: "contains", tokens: ["render(", "blit(", "GAME OVER"], minLength: 30 },
        hints: ['font.render() creates text surface','blit() stamps it on screen � then flip() to display'],
        successMessage: "?? FLAPPY LEGEND UNLOCKED! Your first complete Pygame game!" },
    ],
  },

  11: {
    miniGame: {
      title: "Shooter Core",
      description: "WASD player ship + SPACE to fire bullets + enemies spawning from the top. The core shooter engine!",
      icon: "??", difficulty: 4,
      concepts: ["WASD movement", "Bullet list", "Enemy spawner", "List comprehension"],
      fileName: "day11_shooter_core.py",
      password: "admin",
    },
    steps: [
      { id: "11a", instruction: "?? **Mission 1:** Move the player with WASD � `if keys[pygame.K_a] and player.left > 0: player.x -= SPEED`",
        example: "keys = pygame.key.get_pressed()\nif keys[pygame.K_a] and player.left > 0:\n    player.x -= 6", placeholder: "keys = pygame.key.get_pressed()\nif keys[pygame.K_a] and player.left > 0:\n    player.x -= 6", xp: 80,
        validator: { type: "contains", tokens: ["pygame.K_a", "player", "get_pressed()"], minLength: 30 },
        hints: ['get_pressed() returns current key states','player.left > 0 prevents the ship going off the left edge'],
        successMessage: "??? PLAYER ONLINE! The ship responds to your commands!" },
      { id: "11b", instruction: "?? **Mission 2:** Fire a bullet on SPACE � `bullets.append(pygame.Rect(player.centerx-3, player.top, 6, 16))`",
        example: "if event.key == pygame.K_SPACE:\n    b = pygame.Rect(player.centerx-3, player.top, 6, 16)\n    bullets.append(b)", placeholder: "if event.key == pygame.K_SPACE:\n    bullets.append(pygame.Rect(...))", xp: 100,
        validator: { type: "contains", tokens: ["pygame.K_SPACE", "bullets.append(", "pygame.Rect("], minLength: 40 },
        hints: ['Use KEYDOWN event so each press fires exactly once','Bullet spawns at player.centerx-3, player.top (front of ship)'],
        successMessage: "?? WEAPONS HOT! Bullets fire from the ship!" },
      { id: "11c", instruction: "?? **Mission 3:** Clean up off-screen bullets: `bullets = [b for b in bullets if b.bottom > 0]`",
        example: "for b in bullets: b.y -= 10\nbullets = [b for b in bullets if b.bottom > 0]", placeholder: "bullets = [b for b in bullets if b.bottom > 0]", xp: 120,
        validator: { type: "contains", tokens: ["for b in bullets", "if b.bottom"], minLength: 30 },
        hints: ['List comprehension [item for item in list if condition]','b.bottom > 0 keeps only bullets still on screen'],
        successMessage: "?? SPACE CADET UNLOCKED! The battlefield is ready!" },
    ],
  },

  12: {
    miniGame: {
      title: "Space Shooter � Final Build",
      description: "Collision, health bar HUD, start screen, and game-over with restart. The complete game!",
      icon: "??", difficulty: 5,
      concepts: ["Bullet-enemy collision", "Health bar HUD", "Start screen", "Game-over + restart"],
      fileName: "day12_space_shooter.py",
      password: "admin",
    },
    steps: [
      { id: "12a", instruction: "?? **Final Mission 1:** Add bullet-enemy collision with `colliderect()` and `break` after removing.",
        example: "for b in bullets[:]:\n    for e in enemies[:]:\n        if b.colliderect(e):\n            bullets.remove(b); enemies.remove(e)\n            score += 10; break", placeholder: "for b in bullets[:]:\n    for e in enemies[:]:\n        if b.colliderect(e):\n            ...\n            break", xp: 150,
        validator: { type: "contains", tokens: ["colliderect(", "bullets.remove(", "break"], minLength: 50 },
        hints: ['Use bullets[:] safe copy so you can remove during the loop','break is CRITICAL � prevents ValueError on a removed bullet'],
        successMessage: "?? COLLISION SYSTEM LIVE! Bullets actually destroy enemies!" },
      { id: "12b", instruction: "?? **Final Mission 2:** Write `draw_hud()` showing a health bar that scales with health and a score label.",
        example: "def draw_hud(surface, health, score):\n    pygame.draw.rect(surface,(60,0,0),(10,10,200,20))\n    pygame.draw.rect(surface,(220,38,38),(10,10,int(200*health/100),20))", placeholder: "def draw_hud(surface, health, score):\n    ...", xp: 200,
        validator: { type: "contains", tokens: ["def draw_hud", "health", "score"], minLength: 40 },
        hints: ['def draw_hud(surface, health, score): � define as a function','int(200 * health / 100) scales bar width to health percentage'],
        successMessage: "??? HUD ONLINE! Health and score always visible!" },
      { id: "12c", instruction: "?? **LEGEND MISSION:** Describe ONE feature of your Space Shooter as a Python comment!",
        example: "# My Space Shooter has: bullet shooting, enemy spawning, health bar, and a start screen", placeholder: "# My game has: ...", xp: 150,
        validator: { type: "contains", tokens: ["#"], minLength: 15 },
        hints: ['A comment starts with # � describe your proudest feature!'],
        successMessage: "?? PYTHON LEGEND ACHIEVED! You are officially a game developer!" },
    ],
  },
};