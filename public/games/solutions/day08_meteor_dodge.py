# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 8 — METEOR DODGE                                   ║
# ║  Concepts: dictionaries, .get(), .keys(), .items()      ║
# ╚══════════════════════════════════════════════════════════╝

import pygame
import random
import sys

pygame.init()

WIDTH, HEIGHT = 480, 560
FPS           = 60
PLAYER_W      = 48
PLAYER_H      = 48
PLAYER_SPEED  = 5

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Meteor Dodge — Day 8")
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 36, bold=True)

# ── DICTIONARIES (today's lesson!) ───────────────────────
METEOR_TYPES = {
    "small":  {"size": 18, "speed": 3.5, "pts": 5,  "color": (200, 150, 100)},
    "medium": {"size": 30, "speed": 2.5, "pts": 10, "color": (180, 100, 60)},
    "large":  {"size": 44, "speed": 1.5, "pts": 20, "color": (220, 80, 40)},
}

POWER_UPS = {
    "shield": {"color": (100, 200, 255), "duration": 5000, "icon": "🛡️"},
    "slow":   {"color": (255, 220, 50),  "duration": 4000, "icon": "⏱️"},
}

def spawn_meteor(level):
    # Pick a type from the dictionary
    kind_name = random.choices(
        list(METEOR_TYPES.keys()),
        weights=[50, 35, 15]
    )[0]
    kind = METEOR_TYPES[kind_name]   # .get() alternative: METEOR_TYPES.get(kind_name)
    return {
        "x":     random.randint(20, WIDTH - 20),
        "y":     -kind["size"],
        "size":  kind["size"],
        "speed": kind["speed"] + level * 0.3,
        "pts":   kind["pts"],
        "color": kind["color"],
        "name":  kind_name,
    }

def draw_player(px, py, shield_on):
    color = (100, 200, 255) if shield_on else (150, 220, 255)
    pygame.draw.polygon(screen, color, [
        (px + PLAYER_W//2, py),
        (px + 6, py + PLAYER_H),
        (px + PLAYER_W - 6, py + PLAYER_H),
    ])
    if shield_on:
        pygame.draw.circle(screen, (100, 200, 255, 80), (px + PLAYER_W//2, py + PLAYER_H//2), 36, 3)

def game():
    px = WIDTH // 2 - PLAYER_W // 2
    py = HEIGHT - 80
    score  = 0
    lives  = 3
    level  = 1
    high   = 0
    meteors = []
    timer  = 0
    shield_end = 0

    while True:
        now = pygame.time.get_ticks()
        clock.tick(FPS)
        screen.fill((4, 8, 15))

        # Starfield
        for i in range(60):
            pygame.draw.circle(screen, (30, 30, 60), ((i * 97) % WIDTH, (i * 73) % HEIGHT), 1)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()

        # Movement (dictionary key lookup for direction)
        keys = pygame.key.get_pressed()
        move = {
            "left":  keys[pygame.K_LEFT]  or keys[pygame.K_a],
            "right": keys[pygame.K_RIGHT] or keys[pygame.K_d],
            "up":    keys[pygame.K_UP]    or keys[pygame.K_w],
            "down":  keys[pygame.K_DOWN]  or keys[pygame.K_s],
        }
        if move["left"]  and px > 0:             px -= PLAYER_SPEED
        if move["right"] and px + PLAYER_W < WIDTH: px += PLAYER_SPEED
        if move["up"]    and py > HEIGHT // 2:   py -= PLAYER_SPEED
        if move["down"]  and py + PLAYER_H < HEIGHT: py += PLAYER_SPEED

        # Spawn
        timer += 1
        if timer >= max(25, 60 - level * 4):
            meteors.append(spawn_meteor(level))
            timer = 0

        # Update + collision
        shield_on = now < shield_end
        for m in meteors[:]:
            m["y"] += m["speed"]
            # Collision check
            cx, cy = px + PLAYER_W//2, py + PLAYER_H//2
            if abs(m["x"] - cx) < m["size"] + 16 and abs(m["y"] - cy) < m["size"] + 16:
                if shield_on:
                    meteors.remove(m)
                else:
                    lives -= 1
                    meteors.remove(m)
                    if lives <= 0:
                        screen.blit(big.render("GAME OVER", True, (239,68,68)), (WIDTH//2-90, HEIGHT//2-30))
                        pygame.display.flip(); pygame.time.wait(2500)
                        return
                continue
            if m["y"] > HEIGHT + 20:
                meteors.remove(m)
                score += m["pts"]
                # Level up
                if score > 0 and score % 100 == 0:
                    level += 1

        # Draw meteors
        for m in meteors:
            pygame.draw.circle(screen, m["color"], (int(m["x"]), int(m["y"])), m["size"])

        draw_player(px, py, shield_on)

        # HUD — iterate dict .items() to show all power-ups
        screen.blit(font.render(f"Score: {score}", True, (255,255,255)), (10, 8))
        screen.blit(font.render(f"❤️ x{lives}", True, (239,68,68)),      (10, 32))
        lv = font.render(f"Lv {level}", True, (150,255,150))
        screen.blit(lv, (WIDTH - lv.get_width() - 10, 8))

        pygame.display.flip()

game()
