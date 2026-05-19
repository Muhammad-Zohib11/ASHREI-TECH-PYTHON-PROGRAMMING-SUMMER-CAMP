import { Suspense, lazy, useState, useEffect, useRef } from 'react';

/**
 * HeroSplineBackground
 * ─────────────────────────────────────────────────────────────────────────────
 * Renders the Cyber Mannequin Spline 3D scene as a fullscreen animated
 * background layer. Designed to sit BEHIND all hero content.
 *
 * Z-index:  0  (absolute, inside a position:relative hero section)
 * pointer-events: none — scene never blocks clicks/interactions
 *
 * Scene URL:
 *   Currently uses the my.spline.design share URL.
 *   ► For production, publish the scene in Spline:
 *     File → Export → Web → Code → copy the prod.spline.design URL
 *     and replace SCENE_URL below.
 */

// Lazy-load the heavy Spline bundle — won't block the initial page paint
const Spline = lazy(() => import('@splinetool/react-spline'));

// ── Scene URL ─────────────────────────────────────────────────────────────────
// Replace with your prod.spline.design URL once you publish from Spline Export
const SCENE_URL =
  'https://my.spline.design/cybermannequin-TkpEookEZulTAId4uezLepvv/scene.splinecode';

export default function HeroSplineBackground() {
  const [loaded,  setLoaded]  = useState(false);
  const [failed,  setFailed]  = useState(false);
  const [mounted, setMounted] = useState(false);
  const isMobile = useRef(typeof window !== 'undefined' && window.innerWidth < 768);

  // Defer mounting by 400ms so the first paint/LCP isn't blocked
  useEffect(() => {
    // Skip Spline entirely on all mobile — too heavy (8.6MB), causes FPS drops
    if (isMobile.current) {
      return; // stay unmounted → shows CSS fallback only
    }
    const id = setTimeout(() => setMounted(true), 400);
    return () => clearTimeout(id);
  }, []);

  return (
    /* Absolutely fills the parent position:relative hero section */
    <div
      aria-hidden="true"
      style={{
        position:      'absolute',
        inset:         0,
        zIndex:        0,
        overflow:      'hidden',
        pointerEvents: 'none',
      }}
    >
      {/* ── 1. CSS ambient fallback — always visible ───────────────────────── */}
      {/* Shows when Spline is loading, failed, or on low-end devices */}
      <div style={{
        position: 'absolute',
        inset:    0,
        background: `
          radial-gradient(ellipse 55% 70% at 72% 42%, rgba(255,107,0,0.13) 0%, transparent 65%),
          radial-gradient(ellipse 40% 55% at 28% 65%, rgba(0,245,255,0.07) 0%, transparent 58%),
          radial-gradient(ellipse 30% 40% at 85% 75%, rgba(124,58,237,0.08) 0%, transparent 55%)
        `,
      }} />

      {/* ── 2. Spline canvas — lazy loaded, fades in when ready ────────────── */}
      {mounted && !failed && (
        <div style={{
          position:   'absolute',
          inset:      0,
          opacity:    loaded ? 1 : 0,
          transition: 'opacity 1.4s ease',
        }}>
          <Suspense fallback={null}>
            <Spline
              scene={SCENE_URL}
              onLoad={() => setLoaded(true)}
              onError={() => setFailed(true)}
              style={{
                width:         '100%',
                height:        '100%',
                pointerEvents: 'none', // never block clicks
              }}
            />
          </Suspense>
        </div>
      )}

      {/* ── 3. Readability gradient — text always legible ─────────────────── */}
      <div style={{
        position:      'absolute',
        inset:         0,
        background:    'linear-gradient(to right, rgba(8,12,24,0.88) 0%, rgba(8,12,24,0.55) 45%, rgba(8,12,24,0.15) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
