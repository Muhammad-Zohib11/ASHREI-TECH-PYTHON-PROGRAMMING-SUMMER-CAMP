# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 5 — FALLING BLOCKS FRENZY                          ║
# ║  Concepts: for loops, while loops, range(), break       ║
# ╚══════════════════════════════════════════════════════════╝

import pygame
import random
import sys

pygame.init()

WIDTH, HEIGHT = 480, 560
FPS           = 60
BLOCK_W       = 48
BASKET_W      = 72
BASKET_H      = 14

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Falling Blocks Frenzy — Day 5")
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 38, bold=True)

COLORS = [(100,200,255),(255,150,50),(100,255,150),(255,80,80),(200,100,255)]

def make_block(level):
    return {
        "x":     random.randint(10, WIDTH - BLOCK_W - 10),
        "y":     -BLOCK_W,
        "speed": 2 + level * 0.5,
        "color": random.choice(COLORS),
        "pts":   10 * level,
    }

def game():
    score   = 0
    lives   = 3
    level   = 1
    caught  = 0
    basket  = WIDTH // 2 - BASKET_W // 2
    blocks  = []
    timer   = 0
    high    = 0

    while True:   # ← main while loop (keeps game running)
        clock.tick(FPS)
        screen.fill((4, 8, 15))

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()

        # Move basket
        keys = pygame.key.get_pressed()
        if (keys[pygame.K_LEFT]  or keys[pygame.K_a]) and basket > 0:
            basket -= 6
        if (keys[pygame.K_RIGHT] or keys[pygame.K_d]) and basket + BASKET_W < WIDTH:
            basket += 6

        # Spawn a new block using for loop logic
        timer += 1
        spawn_rate = max(20, 60 - level * 4)
        if timer >= spawn_rate:
            # for loop: add multiple blocks at higher levels
            for _ in range(1 if level < 4 else 2):
                blocks.append(make_block(level))
            timer = 0

        # Move and check blocks
        for block in blocks[:]:
            block["y"] += block["speed"]
            bx = basket;  by = HEIGHT - 44
            # Catch!
            if (bx < block["x"] + BLOCK_W//2 < bx + BASKET_W) and (by <= block["y"] + BLOCK_W <= by + BASKET_H + 24):
                blocks.remove(block)
                score  += block["pts"]
                caught += 1
                # Level up every 8 catches
                if caught % 8 == 0:
                    level += 1
                continue
            # Missed
            if block["y"] > HEIGHT:
                blocks.remove(block)
                lives -= 1

        # Draw blocks (range example)
        for i in range(len(blocks)):
            b = blocks[i]
            pygame.draw.rect(screen, b["color"], (b["x"], b["y"], BLOCK_W, BLOCK_W), border_radius=8)

        # Draw basket
        pygame.draw.rect(screen, (150, 220, 255), (basket, HEIGHT - 44, BASKET_W, BASKET_H), border_radius=6)

        # HUD
        screen.blit(font.render(f"Score: {score}", True, (255,255,255)), (10, 8))
        screen.blit(font.render(f"❤️ x{lives}", True, (239,68,68)),      (10, 32))
        lv = font.render(f"Lv {level}", True, (150,255,150))
        screen.blit(lv, (WIDTH - lv.get_width() - 10, 8))

        if lives <= 0:
            if score > high: high = score
            screen.blit(big.render("GAME OVER", True, (239,68,68)), (WIDTH//2-100, HEIGHT//2-20))
            screen.blit(font.render(f"Score: {score}  Best: {high}", True, (255,255,255)), (WIDTH//2-80, HEIGHT//2+30))
            pygame.display.flip()
            pygame.time.wait(3000)
            # Reset (using break + restart pattern)
            score=0; lives=3; level=1; caught=0; basket=WIDTH//2-BASKET_W//2; blocks=[]; timer=0

        pygame.display.flip()

game()
