import { STARS } from '../data/showcase.js';

export default function StarField() {
  return (
    <div style={{ position:'fixed', inset:0, overflow:'hidden', pointerEvents:'none', zIndex:0 }}>
      {STARS.map((s, i) => (
        <div key={i} style={{
          position:'absolute', borderRadius:'50%', background:'#fff',
          width:s.size+'px', height:s.size+'px',
          left:s.x+'%', top:s.y+'%', opacity:s.opacity,
          animation:`twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
      <div style={{ position:'absolute', width:700, height:700, borderRadius:'50%', background:'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)', top:'5%', right:'0%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:600, height:600, borderRadius:'50%', background:'radial-gradient(circle, rgba(0,245,255,0.05) 0%, transparent 70%)', bottom:'15%', left:'5%', pointerEvents:'none' }} />
      <div style={{ position:'absolute', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%)', top:'50%', left:'40%', pointerEvents:'none' }} />
    </div>
  );
}
