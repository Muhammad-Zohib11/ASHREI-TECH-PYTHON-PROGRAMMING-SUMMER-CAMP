# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 12 — SPACE SHOOTER COMPLETE (SHOWCASE)             ║
# ║  All concepts combined: OOP, files, sounds, high score  ║
# ╚══════════════════════════════════════════════════════════╝

import pygame
import random
import sys
import json
import os

pygame.init()
pygame.mixer.init()

WIDTH, HEIGHT = 480, 560
FPS           = 60
SAVE_FILE     = "highscore.json"

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Space Shooter — COMPLETE  ★ Day 12")
clock  = pygame.time.Clock()

# ── High Score (file I/O) ────────────────────────────────
def load_high():
    if os.path.exists(SAVE_FILE):
        try:
            with open(SAVE_FILE) as f:
                return json.load(f).get("high", 0)
        except Exception:
            pass
    return 0

def save_high(score):
    with open(SAVE_FILE, "w") as f:
        json.dump({"high": score}, f)

# ── Particle System (visual polish) ──────────────────────
class Particle:
    def __init__(self, x, y, color):
        self.x   = x + random.randint(-10, 10)
        self.y   = y + random.randint(-10, 10)
        self.vx  = random.uniform(-3, 3)
        self.vy  = random.uniform(-4, 0)
        self.life = random.randint(15, 30)
        self.color = color
        self.alive = True

    def update(self):
        self.x   += self.vx
        self.y   += self.vy
        self.vy  += 0.2
        self.life -= 1
        if self.life <= 0: self.alive = False

    def draw(self, surface):
        alpha = int(255 * self.life / 30)
        r, g, b = self.color
        pygame.draw.circle(surface, (min(r,255), min(g,255), min(b,255)), (int(self.x), int(self.y)), max(1, self.life // 8))


class Player:
    def __init__(self):
        self.x = WIDTH // 2 - 20
        self.y = HEIGHT - 80
        self.w = 40; self.h = 50
        self.speed    = 5
        self.shoot_cd = 0
        self.invincible = 0    # frames of invincibility after hit
        self.color    = (100, 200, 255)

    def update(self, keys):
        if (keys[pygame.K_LEFT]  or keys[pygame.K_a]) and self.x > 0:
            self.x -= self.speed
        if (keys[pygame.K_RIGHT] or keys[pygame.K_d]) and self.x + self.w < WIDTH:
            self.x += self.speed
        if (keys[pygame.K_UP]    or keys[pygame.K_w]) and self.y > HEIGHT // 2:
            self.y -= self.speed
        if (keys[pygame.K_DOWN]  or keys[pygame.K_s]) and self.y + self.h < HEIGHT:
            self.y += self.speed
        self.shoot_cd    = max(0, self.shoot_cd - 1)
        self.invincible  = max(0, self.invincible - 1)

    def shoot(self):
        if self.shoot_cd == 0:
            self.shoot_cd = 10
            return [Bullet(self.x + self.w // 2 - 2, self.y - 10, self.color)]
        return []

    def draw(self, surface, frame):
        if self.invincible > 0 and frame % 6 < 3:
            return   # blink when invincible
        pygame.draw.polygon(surface, self.color, [
            (self.x + self.w // 2, self.y),
            (self.x + 6,           self.y + self.h),
            (self.x + self.w - 6,  self.y + self.h),
        ])
        # Engine glow
        pygame.draw.rect(surface, (200, 150, 50),
                         (self.x + 10, self.y + self.h - 4, self.w - 20, 8), border_radius=4)


class Bullet:
    def __init__(self, x, y, color, speed=13):
        self.x = x; self.y = y; self.speed = speed
        self.color = color; self.alive = True

    def update(self):
        self.y -= self.speed
        if self.y < 0: self.alive = False

    def draw(self, surface):
        pygame.draw.rect(surface, self.color, (self.x, self.y, 4, 14), border_radius=2)


class Enemy:
    COLORS = [(239, 68, 68), (245, 158, 11), (139, 92, 246)]

    def __init__(self, score):
        tier       = min(3, 1 + score // 150)
        self.x     = random.randint(10, WIDTH - 50)
        self.y     = -40
        self.w     = 40; self.h = 36
        self.speed = 2 + score // 80
        self.tier  = tier
        self.hp    = tier
        self.pts   = 10 * tier
        self.alive = True

    @property
    def color(self): return self.COLORS[self.tier - 1]

    def update(self):
        self.y += self.speed
        if self.y > HEIGHT: self.alive = False   # missed → lose a life

    def hit(self):
        self.hp -= 1
        if self.hp <= 0:
            self.alive = False
            return self.pts
        return 0

    def draw(self, surface):
        pygame.draw.rect(surface, self.color, (self.x, self.y, self.w, self.h), border_radius=6)
        lbl = pygame.font.SysFont("Arial", 11, bold=True).render(str(self.tier), True, (255,255,255))
        surface.blit(lbl, (self.x + self.w//2 - 4, self.y + self.h//2 - 5))


def spawn_particles(particles, x, y, color, n=12):
    for _ in range(n):
        particles.append(Particle(x, y, color))


def draw_hud(surface, score, lives, high):
    font   = pygame.font.SysFont("Arial", 20, bold=True)
    small  = pygame.font.SysFont("Arial", 14)
    surface.blit(font.render(f"Score: {score}", True, (255,255,255)), (10, 8))
    surface.blit(font.render(f"❤️ x{lives}",   True, (239, 68, 68)),  (10, 32))
    hi = font.render(f"Best: {high}", True, (250, 204, 21))
    surface.blit(hi, (WIDTH - hi.get_width() - 10, 8))


def game_over_screen(surface, score, high):
    big  = pygame.font.SysFont("Arial", 40, bold=True)
    med  = pygame.font.SysFont("Arial", 22, bold=True)
    small = pygame.font.SysFont("Arial", 16)
    overlay = pygame.Surface((WIDTH, HEIGHT), pygame.SRCALPHA)
    overlay.fill((0, 0, 0, 170))
    surface.blit(overlay, (0, 0))
    go = big.render("GAME OVER", True, (239, 68, 68))
    surface.blit(go, (WIDTH//2 - go.get_width()//2, HEIGHT//2 - 80))
    sc = med.render(f"Score: {score}", True, (255,255,255))
    surface.blit(sc, (WIDTH//2 - sc.get_width()//2, HEIGHT//2 - 10))
    hi = med.render(f"Best:  {high}", True, (250, 204, 21))
    surface.blit(hi, (WIDTH//2 - hi.get_width()//2, HEIGHT//2 + 28))
    hint = small.render("Press ENTER to play again", True, (180,180,180))
    surface.blit(hint, (WIDTH//2 - hint.get_width()//2, HEIGHT//2 + 70))


def main():
    high      = load_high()
    player    = Player()
    bullets   = []
    enemies   = []
    particles = []
    score     = 0
    lives     = 3
    spawn_t   = 0
    frame     = 0
    state     = "playing"

    while True:
        clock.tick(FPS)
        screen.fill((4, 8, 15))

        # Stars
        for i in range(60):
            pygame.draw.circle(screen, (20, 25, 55),
                               ((i * 127) % WIDTH, (i * 83 + frame // 3) % HEIGHT), 1)

        frame += 1

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                save_high(high); pygame.quit(); sys.exit()
            if event.type == pygame.KEYDOWN and state == "dead":
                if event.key == pygame.K_RETURN:
                    player=Player(); bullets=[]; enemies=[]; particles=[]
                    score=0; lives=3; spawn_t=0; frame=0; state="playing"

        if state == "playing":
            keys = pygame.key.get_pressed()
            player.update(keys)

            if keys[pygame.K_SPACE]:
                new_bullets = player.shoot()
                bullets.extend(new_bullets)

            # Spawn enemies
            spawn_t += 1
            if spawn_t >= max(30, 70 - score // 50):
                enemies.append(Enemy(score)); spawn_t = 0

            for b in bullets[:]:
                b.update()
                if not b.alive: bullets.remove(b)

            for e in enemies[:]:
                e.update()
                if not e.alive:
                    enemies.remove(e)
                    lives -= 1
                    spawn_particles(particles, e.x + e.w//2, HEIGHT, (239, 68, 68), 6)
                    continue
                for b in bullets[:]:
                    if (b.x > e.x and b.x < e.x + e.w and b.y > e.y and b.y < e.y + e.h):
                        pts = e.hit()
                        b.alive = False
                        if pts:
                            score += pts
                            spawn_particles(particles, e.x + e.w//2, e.y + e.h//2, e.color)
                            if score > high:
                                high = score; save_high(high)

            for p in particles[:]:
                p.update()
                if not p.alive: particles.remove(p)

            if lives <= 0:
                state = "dead"

        # Draw
        for p in particles: p.draw(screen)
        for b in bullets:   b.draw(screen)
        for e in enemies:   e.draw(screen)
        player.draw(screen, frame)

        draw_hud(screen, score, lives, high)

        if state == "dead":
            game_over_screen(screen, score, high)

        pygame.display.flip()

main()
