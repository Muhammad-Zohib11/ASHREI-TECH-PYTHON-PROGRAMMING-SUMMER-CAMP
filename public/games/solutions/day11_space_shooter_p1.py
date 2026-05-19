# ╔══════════════════════════════════════════════════════════╗
# ║  DAY 11 — SPACE SHOOTER PART 1                          ║
# ║  Concepts: classes, objects, OOP basics                 ║
# ╚══════════════════════════════════════════════════════════╝

import pygame
import random
import sys

pygame.init()

WIDTH, HEIGHT = 480, 560
FPS           = 60

screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Space Shooter Pt.1 — Day 11")
clock  = pygame.time.Clock()
font   = pygame.font.SysFont("Arial", 20, bold=True)
big    = pygame.font.SysFont("Arial", 36, bold=True)

# ── CLASSES (today's lesson!) ────────────────────────────

class Player:
    def __init__(self, color=(100, 200, 255)):
        self.x      = WIDTH  // 2 - 20
        self.y      = HEIGHT - 80
        self.w      = 40
        self.h      = 50
        self.speed  = 5
        self.color  = color
        self.shoot_cd = 0

    def update(self, keys):
        if (keys[pygame.K_LEFT]  or keys[pygame.K_a]) and self.x > 0:
            self.x -= self.speed
        if (keys[pygame.K_RIGHT] or keys[pygame.K_d]) and self.x + self.w < WIDTH:
            self.x += self.speed
        if (keys[pygame.K_UP]    or keys[pygame.K_w]) and self.y > HEIGHT // 2:
            self.y -= self.speed
        if (keys[pygame.K_DOWN]  or keys[pygame.K_s]) and self.y + self.h < HEIGHT:
            self.y += self.speed
        self.shoot_cd = max(0, self.shoot_cd - 1)

    def shoot(self):
        if self.shoot_cd == 0:
            self.shoot_cd = 12
            return Bullet(self.x + self.w // 2 - 2, self.y - 10, self.color)
        return None

    def draw(self, surface):
        pygame.draw.polygon(surface, self.color, [
            (self.x + self.w // 2, self.y),
            (self.x + 6,           self.y + self.h),
            (self.x + self.w - 6,  self.y + self.h),
        ])


class Bullet:
    def __init__(self, x, y, color):
        self.x     = x
        self.y     = y
        self.speed = 13
        self.color = color
        self.alive = True

    def update(self):
        self.y -= self.speed
        if self.y < 0:
            self.alive = False

    def draw(self, surface):
        pygame.draw.rect(surface, self.color, (self.x, self.y, 4, 14))


class Enemy:
    def __init__(self, score):
        tier        = 1 + score // 200
        self.x      = random.randint(10, WIDTH - 50)
        self.y      = -40
        self.w      = 40
        self.h      = 36
        self.speed  = 2 + score // 100
        self.tier   = min(tier, 3)
        self.hp     = self.tier
        self.pts    = 10 * self.tier
        self.alive  = True
        self.colors = [(239, 68, 68), (245, 158, 11), (139, 92, 246)]

    @property
    def color(self):
        return self.colors[self.tier - 1]

    def update(self):
        self.y += self.speed
        if self.y > HEIGHT:
            self.alive = False

    def hit(self):
        self.hp -= 1
        if self.hp <= 0:
            self.alive = False
            return self.pts
        return 0

    def draw(self, surface):
        pygame.draw.rect(surface, self.color, (self.x, self.y, self.w, self.h), border_radius=6)
        lbl = pygame.font.SysFont("Arial", 12, bold=True).render(str(self.tier), True, (255,255,255))
        surface.blit(lbl, (self.x + self.w//2 - 4, self.y + self.h//2 - 6))


def main():
    player  = Player()
    bullets = []
    enemies = []
    score   = 0
    lives   = 3
    high    = 0
    spawn_t = 0
    frame   = 0

    while True:
        clock.tick(FPS)
        screen.fill((4, 8, 15))
        frame += 1

        # Starfield
        for i in range(60):
            pygame.draw.circle(screen, (20, 20, 50), ((i * 127) % WIDTH, (i * 83 + frame // 3) % HEIGHT), 1)

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit(); sys.exit()

        keys = pygame.key.get_pressed()
        player.update(keys)

        # Shoot on SPACE
        if keys[pygame.K_SPACE]:
            b = player.shoot()
            if b:
                bullets.append(b)

        # Spawn enemies
        spawn_t += 1
        interval = max(35, 75 - score // 50)
        if spawn_t >= interval:
            enemies.append(Enemy(score))
            spawn_t = 0

        # Update bullets
        for b in bullets[:]:
            b.update()
            if not b.alive:
                bullets.remove(b)

        # Update enemies + collision
        for e in enemies[:]:
            e.update()
            if not e.alive:
                enemies.remove(e)
                lives -= 1
                continue
            for b in bullets[:]:
                if (b.x > e.x and b.x < e.x + e.w and
                        b.y > e.y and b.y < e.y + e.h):
                    pts = e.hit()
                    b.alive = False
                    if pts:
                        score += pts
                        if score > high: high = score

        # Draw everything using OOP draw() methods
        for b in bullets: b.draw(screen)
        for e in enemies: e.draw(screen)
        player.draw(screen)

        # HUD
        screen.blit(font.render(f"Score: {score}", True, (255,255,255)), (10, 8))
        screen.blit(font.render(f"❤️ x{lives}",   True, (239, 68, 68)),  (10, 32))
        hi = font.render(f"Best: {high}", True, (250, 204, 21))
        screen.blit(hi, (WIDTH - hi.get_width() - 10, 8))

        if lives <= 0:
            screen.blit(big.render("GAME OVER", True, (239,68,68)), (WIDTH//2-90, HEIGHT//2-20))
            pygame.display.flip(); pygame.time.wait(2500)
            # Reset
            player=Player(); bullets=[]; enemies=[]; score=0; lives=3; spawn_t=0; frame=0

        pygame.display.flip()

main()
