# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 2 — COIN COLLECTOR DASH                            ║
# ║  Concepts: variables, f-strings, integers, += operator  ║
# ╚══════════════════════════════════════════════════════════╝

import pygame
import random
import sys

pygame.init()

# ── Game Settings ────────────────────────────────────────
WIDTH, HEIGHT = 480, 540
FPS           = 60
BASKET_W      = 64
BASKET_H      = 16
BASKET_SPEED  = 6

COIN_TYPES = [
    {"icon": "💰", "pts": 10,  "color": (250, 204, 21)},
    {"icon": "⭐", "pts": 25,  "color": (255, 255, 100)},
    {"icon": "💎", "pts": 50,  "color": (147, 197, 253)},
    {"icon": "💣", "pts":  0,  "color": (239,  68,  68), "bomb": True},
]

# ── Variables (today's lesson!) ──────────────────────────
coins  = 0     # total score
lives  = 3     # remaining lives
level  = 1
caught = 0     # coins caught this level

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Coin Collector Dash — Day 2")
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 36, bold=True)
emoji  = pygame.font.SysFont("Segoe UI Emoji", 28)

def spawn_coin():
    kind = random.choices(COIN_TYPES, weights=[40, 30, 20, 10])[0]
    return {
        "x":    random.randint(20, WIDTH - 44),
        "y":    -30,
        "kind": kind,
        "speed": 2.5 + level * 0.4,
    }

def draw_hud(coins, lives, level):
    screen.blit(font.render(f"Score: {coins}", True, (255, 255, 255)), (10, 8))
    screen.blit(font.render(f"❤️ x{lives}", True, (239, 68, 68)),       (10, 32))
    lv_text = font.render(f"Lv {level}", True, (200, 255, 200))
    screen.blit(lv_text, (WIDTH - lv_text.get_width() - 10, 8))

def game_loop():
    global coins, lives, level, caught
    coins = 0; lives = 3; level = 1; caught = 0
    basket_x = WIDTH // 2 - BASKET_W // 2
    items     = []
    spawn_timer = 0

    while True:
        clock.tick(FPS)
        screen.fill((4, 8, 15))

        # Events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()

        # Basket movement (arrow keys or A/D)
        keys = pygame.key.get_pressed()
        if (keys[pygame.K_LEFT] or keys[pygame.K_a]) and basket_x > 0:
            basket_x -= BASKET_SPEED
        if (keys[pygame.K_RIGHT] or keys[pygame.K_d]) and basket_x + BASKET_W < WIDTH:
            basket_x += BASKET_SPEED

        # Spawn
        spawn_timer += 1
        interval = max(30, 70 - level * 5)
        if spawn_timer >= interval:
            items.append(spawn_coin())
            spawn_timer = 0

        # Move + catch
        for item in items[:]:
            item["y"] += item["speed"]
            bx = basket_x; by = HEIGHT - 40
            if (bx < item["x"] < bx + BASKET_W) and (by < item["y"] < by + BASKET_H + 20):
                items.remove(item)
                if item["kind"].get("bomb"):
                    lives -= 1
                else:
                    # f-string to display the score update!
                    pts     = item["kind"]["pts"]
                    coins  += pts
                    caught += 1
                    if caught % 8 == 0:
                        level += 1
                continue
            if item["y"] > HEIGHT + 20:
                items.remove(item)

        # Draw items
        for item in items:
            c = item["kind"]["color"]
            pygame.draw.circle(screen, c, (item["x"], int(item["y"])), 14)
            text = emoji.render(item["kind"]["icon"], True, c)
            screen.blit(text, (item["x"] - 10, item["y"] - 14))

        # Draw basket
        pygame.draw.rect(screen, (100, 200, 255), (basket_x, HEIGHT - 40, BASKET_W, BASKET_H), border_radius=6)

        draw_hud(coins, lives, level)

        if lives <= 0:
            screen.blit(big.render("GAME OVER", True, (239, 68, 68)), (WIDTH//2 - 90, HEIGHT//2 - 30))
            # f-string showing final score
            screen.blit(font.render(f"Final Score: {coins}", True, (255, 255, 255)), (WIDTH//2 - 60, HEIGHT//2 + 20))
            pygame.display.flip()
            pygame.time.wait(3000)
            return

        pygame.display.flip()

game_loop()
