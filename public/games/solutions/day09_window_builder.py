# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 9 — WINDOW BUILDER (pygame intro)                  ║
# ║  Concepts: pygame.init, surfaces, draw, event loop      ║
# ╚══════════════════════════════════════════════════════════╝

import pygame
import sys

pygame.init()

# ── Window & colours ─────────────────────────────────────
WIDTH, HEIGHT = 600, 500
TITLE         = "Window Builder — Day 9"
BG_COLOR      = (10, 15, 30)

# Glow colours for your shapes
COLORS = {
    "cyan":   (0,   245, 255),
    "purple": (168, 85,  247),
    "green":  (16,  185, 129),
    "orange": (251, 146, 60),
    "pink":   (236, 72,  153),
}

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption(TITLE)
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 32, bold=True)

# ── Moving box (uses variables from previous days) ────────
box = {
    "x": WIDTH  // 2 - 30,
    "y": HEIGHT // 2 - 30,
    "w": 60, "h": 60,
    "speed": 5,
    "color": COLORS["cyan"],
}

# ── Shapes to draw on screen ──────────────────────────────
def draw_background_shapes():
    """Draw decorative shapes — practice with pygame.draw"""
    # Rectangle
    pygame.draw.rect(screen, COLORS["purple"], (50, 50, 120, 80), border_radius=12)
    # Circle
    pygame.draw.circle(screen, COLORS["green"], (WIDTH - 100, 80), 50)
    # Line
    pygame.draw.line(screen, COLORS["orange"], (0, HEIGHT - 60), (WIDTH, HEIGHT - 60), 4)
    # Ellipse
    pygame.draw.ellipse(screen, COLORS["pink"], (200, 350, 160, 80))
    # Triangle (polygon)
    pygame.draw.polygon(screen, COLORS["cyan"], [(WIDTH//2, 80), (WIDTH//2 - 50, 160), (WIDTH//2 + 50, 160)])

def draw_hud():
    screen.blit(font.render(f"Box: ({box['x']}, {box['y']})", True, (200, 200, 200)), (10, HEIGHT - 30))
    screen.blit(font.render("WASD / Arrow Keys to move", True, (100, 100, 150)), (WIDTH//2 - 100, HEIGHT - 30))

def main():
    running = True

    while running:   # ← pygame event loop
        clock.tick(60)
        screen.fill(BG_COLOR)

        # ── Event handling ────────────────────────────────
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    running = False
                # Change colour on C key
                if event.key == pygame.K_c:
                    import random
                    box["color"] = random.choice(list(COLORS.values()))

        # ── Move the box ──────────────────────────────────
        keys = pygame.key.get_pressed()
        if (keys[pygame.K_LEFT]  or keys[pygame.K_a]) and box["x"] > 0:
            box["x"] -= box["speed"]
        if (keys[pygame.K_RIGHT] or keys[pygame.K_d]) and box["x"] + box["w"] < WIDTH:
            box["x"] += box["speed"]
        if (keys[pygame.K_UP]    or keys[pygame.K_w]) and box["y"] > 0:
            box["y"] -= box["speed"]
        if (keys[pygame.K_DOWN]  or keys[pygame.K_s]) and box["y"] + box["h"] < HEIGHT:
            box["y"] += box["speed"]

        # ── Draw everything ───────────────────────────────
        draw_background_shapes()

        # Draw the moving box with a glow effect
        pygame.draw.rect(screen, box["color"],
                         (box["x"] - 4, box["y"] - 4, box["w"] + 8, box["h"] + 8),
                         border_radius=14)
        pygame.draw.rect(screen, (255, 255, 255),
                         (box["x"], box["y"], box["w"], box["h"]),
                         border_radius=10)

        # Title
        title = big.render("WINDOW BUILDER", True, COLORS["cyan"])
        screen.blit(title, (WIDTH//2 - title.get_width()//2, 12))

        draw_hud()
        pygame.display.flip()

    pygame.quit()
    sys.exit()

main()
