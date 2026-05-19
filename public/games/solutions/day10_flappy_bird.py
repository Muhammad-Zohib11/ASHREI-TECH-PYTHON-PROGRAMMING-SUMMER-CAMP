# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 10 — FLAPPY BIRD                                   ║
# ║  Concepts: physics (gravity/velocity), collision detect ║
# ╚══════════════════════════════════════════════════════════╝

import pygame
import random
import sys

pygame.init()

WIDTH, HEIGHT = 480, 520
FPS           = 60
GRAVITY       = 0.5
JUMP_FORCE    = -9
PIPE_GAP      = 160
PIPE_WIDTH    = 56
PIPE_SPEED    = 3
BIRD_X        = 80

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Flappy Bird — Day 10")
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 24, bold=True)
big    = pygame.font.SysFont("Arial", 42, bold=True)
small  = pygame.font.SysFont("Arial", 16)

def make_pipe():
    gap_y = random.randint(120, HEIGHT - 150)
    return {
        "x":        WIDTH + 30,
        "gap_y":    gap_y,          # centre of the gap
        "passed":   False,
    }

def draw_pipe(p):
    top_h    = p["gap_y"] - PIPE_GAP // 2
    bottom_y = p["gap_y"] + PIPE_GAP // 2

    # Top pipe
    pygame.draw.rect(screen, (34, 197, 94), (p["x"], 0, PIPE_WIDTH, top_h))
    pygame.draw.rect(screen, (22, 163, 74), (p["x"] - 4, top_h - 20, PIPE_WIDTH + 8, 20), border_radius=4)

    # Bottom pipe
    pygame.draw.rect(screen, (34, 197, 94), (p["x"], bottom_y, PIPE_WIDTH, HEIGHT - bottom_y))
    pygame.draw.rect(screen, (22, 163, 74), (p["x"] - 4, bottom_y, PIPE_WIDTH + 8, 20), border_radius=4)

def draw_bird(y, velocity):
    import math
    angle_rad = math.atan2(velocity, 10)
    # Simple ellipse bird
    pygame.draw.ellipse(screen, (250, 204, 21), (BIRD_X - 14, y - 12, 28, 20))
    pygame.draw.circle(screen, (255, 255, 255), (BIRD_X + 6, y - 4), 7)
    pygame.draw.circle(screen, (10, 10, 10),    (BIRD_X + 8, y - 4), 4)

def check_collision(bird_y, pipes):
    """Return True if bird has hit a pipe or the ground/ceiling."""
    if bird_y > HEIGHT - 20 or bird_y < 0:
        return True
    for p in pipes:
        if BIRD_X + 14 > p["x"] and BIRD_X - 14 < p["x"] + PIPE_WIDTH:
            top_h    = p["gap_y"] - PIPE_GAP // 2
            bottom_y = p["gap_y"] + PIPE_GAP // 2
            if bird_y - 10 < top_h or bird_y + 10 > bottom_y:
                return True
    return False

def draw_screen(bird_y, pipes, score, high, state):
    screen.fill((10, 20, 40))
    # Stars
    for i in range(50):
        pygame.draw.circle(screen, (40, 40, 80), ((i * 127) % WIDTH, (i * 83) % HEIGHT), 1)

    for p in pipes:
        draw_pipe(p)

    draw_bird(bird_y, 0)

    # Score
    sc = font.render(str(score), True, (255, 255, 255))
    screen.blit(sc, (WIDTH // 2 - sc.get_width() // 2, 24))
    if high:
        hi = small.render(f"Best: {high}", True, (250, 204, 21))
        screen.blit(hi, (WIDTH - hi.get_width() - 10, 10))

    if state == "idle":
        overlay = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
        overlay.fill((0, 0, 0, 120))
        screen.blit(overlay, (0, 0))
        t = big.render("FLAPPY BIRD", True, (250, 204, 21))
        screen.blit(t, (WIDTH//2 - t.get_width()//2, HEIGHT//2 - 60))
        t2 = font.render("SPACE to flap", True, (255, 255, 255))
        screen.blit(t2, (WIDTH//2 - t2.get_width()//2, HEIGHT//2))

    elif state == "dead":
        overlay = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
        overlay.fill((0, 0, 0, 150))
        screen.blit(overlay, (0, 0))
        go = big.render("GAME OVER", True, (239, 68, 68))
        screen.blit(go, (WIDTH//2 - go.get_width()//2, HEIGHT//2 - 70))
        sc_t = font.render(f"Score: {score}", True, (255, 255, 255))
        screen.blit(sc_t, (WIDTH//2 - sc_t.get_width()//2, HEIGHT//2))
        hi_t = font.render(f"Best: {high}", True, (250, 204, 21))
        screen.blit(hi_t, (WIDTH//2 - hi_t.get_width()//2, HEIGHT//2 + 34))
        hint = small.render("SPACE to play again", True, (200, 200, 200))
        screen.blit(hint, (WIDTH//2 - hint.get_width()//2, HEIGHT//2 + 70))

def main():
    bird_y    = HEIGHT // 2
    velocity  = 0
    pipes     = [make_pipe()]
    score     = 0
    high      = 0
    state     = "idle"   # idle | playing | dead

    while True:
        clock.tick(FPS)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN and event.key == pygame.K_SPACE:
                if state == "idle" or state == "dead":
                    # Reset
                    bird_y   = HEIGHT // 2
                    velocity = 0
                    pipes    = [make_pipe()]
                    score    = 0
                    state    = "playing"
                elif state == "playing":
                    velocity = JUMP_FORCE  # FLAP!

        # Physics — only update when playing
        if state == "playing":
            velocity += GRAVITY    # gravity pulls bird down
            bird_y   += velocity   # position changes by velocity

            # Move pipes
            for p in pipes:
                p["x"] -= PIPE_SPEED

            # Score when pipe passes
            for p in pipes:
                if not p["passed"] and p["x"] + PIPE_WIDTH < BIRD_X:
                    p["passed"] = True
                    score += 1
                    if score > high:
                        high = score

            # Remove off-screen pipes, add new
            pipes = [p for p in pipes if p["x"] > -PIPE_WIDTH - 10]
            if pipes[-1]["x"] < WIDTH - 260:
                pipes.append(make_pipe())

            # Collision
            if check_collision(bird_y, pipes):
                state = "dead"

        draw_screen(bird_y, pipes, score, high, state)
        pygame.display.flip()

main()
