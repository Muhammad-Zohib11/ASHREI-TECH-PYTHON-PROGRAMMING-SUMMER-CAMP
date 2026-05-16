import { useState, useRef, useEffect } from 'react';
import { rnd } from './TerminalShell.jsx';

// ── DAY 9 — WINDOW BUILDER (Canvas demo: shapes + moving box) ────────────────
export function Day9Game({ color }) {
  const cvRef = useRef(null), rafRef = useRef(null), kRef = useRef({});
  const [started, setStarted] = useState(false);
  const W = 380, H = 420;
  let bx = W/2-20, by = H/2-20, frame = 0;

  const drawScene = (ctx, bx, by, fr, overlay) => {
    // Background
    ctx.fillStyle = '#04080f'; ctx.fillRect(0,0,W,H);
    // Stars
    for(let i=0;i<60;i++){
      ctx.fillStyle=`rgba(255,255,255,${0.2+((i*37)%5)/15})`;
      ctx.fillRect((i*127)%W,(i*83)%H,1,1);
    }
    // Rectangle
    ctx.fillStyle='rgba(0,200,255,0.85)';
    ctx.fillRect(40,60,70,70);
    // Circle
    ctx.fillStyle='rgba(255,107,0,0.85)';
    ctx.beginPath();ctx.arc(W/2,80,35,0,Math.PI*2);ctx.fill();
    // Triangle (polygon)
    ctx.fillStyle='rgba(34,197,94,0.85)';
    ctx.beginPath();ctx.moveTo(W-80,50);ctx.lineTo(W-110,110);ctx.lineTo(W-50,110);ctx.closePath();ctx.fill();
    // Diagonal line
    ctx.strokeStyle='rgba(255,255,255,0.3)';ctx.lineWidth=1.5;
    ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(W,H);ctx.stroke();
    // Moving player box
    ctx.shadowColor=color;ctx.shadowBlur=12;
    ctx.fillStyle=color;ctx.fillRect(bx,by,40,40);
    ctx.shadowBlur=0;
    // HUD labels
    ctx.fillStyle='rgba(255,255,255,0.35)';ctx.font='10px monospace';ctx.textAlign='left';
    ctx.fillText('pygame.draw.rect',44,140);
    ctx.fillText('pygame.draw.circle',W/2-42,125);
    ctx.fillText('pygame.draw.polygon',W-115,130);
    ctx.fillStyle=color;ctx.fillText('← YOU (arrow keys)',bx+42,by+26);
    // Overlay
    if(overlay){
      ctx.fillStyle='rgba(0,0,0,0.6)';ctx.fillRect(0,0,W,H);
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillStyle=color;ctx.font='bold 24px Arial';ctx.fillText('🪟 WINDOW BUILDER',W/2,H/2-50);
      ctx.fillStyle='white';ctx.font='15px Arial';ctx.fillText('See all Pygame drawing commands!',W/2,H/2-12);
      ctx.fillStyle='rgba(255,255,255,0.55)';ctx.font='13px Arial';ctx.fillText('Arrow Keys / WASD to move the box',W/2,H/2+18);
      ctx.fillStyle=color;ctx.font='bold 15px Arial';ctx.fillText('Press ENTER or click Play ▶',W/2,H/2+50);
      ctx.fillStyle='rgba(255,255,255,0.3)';ctx.font='11px Arial';ctx.fillText('Day 9 — Pygame Foundations',W/2,H/2+76);
    }
  };

  useEffect(()=>{
    const cv=cvRef.current; if(!cv) return;
    const ctx=cv.getContext('2d');
    drawScene(ctx, W/2-20, H/2-20, 0, true);
    let lbx=W/2-20, lby=H/2-20, lf=0, running=false;
    const onKey=e=>{
      kRef.current[e.key]=e.type==='keydown';
      if(e.type==='keydown'&&e.key==='Enter'){running=true;setStarted(true);}
    };
    cv.addEventListener('keydown',onKey); cv.addEventListener('keyup',onKey);
    const loop=()=>{
      if(running){
        const k=kRef.current;
        if((k['ArrowLeft']||k['a']||k['A'])&&lbx>0) lbx-=4;
        if((k['ArrowRight']||k['d']||k['D'])&&lbx<W-40) lbx+=4;
        if((k['ArrowUp']||k['w']||k['W'])&&lby>0) lby-=4;
        if((k['ArrowDown']||k['s']||k['S'])&&lby<H-40) lby+=4;
        lf++;
        drawScene(ctx, lbx, lby, lf, false);
      }
      rafRef.current=requestAnimationFrame(loop);
    };
    rafRef.current=requestAnimationFrame(loop);
    return()=>{cancelAnimationFrame(rafRef.current);cv.removeEventListener('keydown',onKey);cv.removeEventListener('keyup',onKey);};
  },[]);

  const startGame=()=>{setStarted(true);cvRef.current?.focus();};
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12}}>
      <canvas ref={cvRef} width={W} height={H} tabIndex={0} onClick={startGame} style={{borderRadius:12,border:`2px solid ${color}40`,outline:'none',cursor:'crosshair',display:'block'}}/>
      <div style={{display:'flex',gap:6,flexWrap:'wrap',justifyContent:'center'}}>
        {[['▲','ArrowUp'],['◀','ArrowLeft'],['▼','ArrowDown'],['▶','ArrowRight']].map(([l,k])=>(
          <button key={k} onMouseDown={()=>{kRef.current[k]=true;setStarted(true);}} onMouseUp={()=>{kRef.current[k]=false;}} style={{padding:'6px 12px',borderRadius:8,border:`1px solid ${color}40`,background:`${color}15`,color,fontSize:13,cursor:'pointer',fontFamily:'inherit',fontWeight:700}}>{l}</button>
        ))}
        <button onClick={startGame} style={{padding:'6px 14px',borderRadius:8,border:`1px solid ${color}40`,background:`${color}25`,color,fontSize:13,cursor:'pointer',fontFamily:'inherit',fontWeight:700}}>{started?'↺ Reset':'▶ Play'}</button>
      </div>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:12}}>Arrow Keys / WASD — move the glowing box!</div>
    </div>
  );
}


export function Day8Game({ color }) {
  const cvRef=useRef(null), gRef=useRef(null), rafRef=useRef(null), kRef=useRef({});
  const [st,setSt]=useState('idle');
  const W=380,H=460,PW=48,PH=48;

  const init=(hs=0)=>({px:W/2-PW/2,py:H-80,spd:5,meteors:[],score:0,lives:3,spawnT:0,spawnI:80,mspd:2,frame:0,hs,survived:0});

  const spawn=(g)=>{
    const sizes=[{r:14,pts:0,dmg:1},{r:20,pts:0,dmg:1},{r:28,pts:0,dmg:2}];
    const s=sizes[Math.floor(Math.random()*sizes.length)];
    g.meteors.push({x:rnd(s.r,W-s.r),y:-s.r*2,vy:g.mspd+Math.random()*1.5,vx:(Math.random()-0.5)*1.5,...s});
  };

  const draw=(ctx,g,stat)=>{
    const grad=ctx.createLinearGradient(0,0,0,H);
    grad.addColorStop(0,'#04080f');grad.addColorStop(1,'#08051a');
    ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);
    for(let i=0;i<60;i++){ctx.fillStyle=`rgba(255,255,255,${((i*37)%5)/30})`;ctx.fillRect((i*127)%W,(i*83+g.frame/5)%H,1,1);}

    // Meteors
    g.meteors.forEach(m=>{
      const grad2=ctx.createRadialGradient(m.x,m.y,0,m.x,m.y,m.r);
      grad2.addColorStop(0,'#ef4444');grad2.addColorStop(0.6,'#b91c1c');grad2.addColorStop(1,'#450a0a');
      ctx.fillStyle=grad2;ctx.beginPath();ctx.arc(m.x,m.y,m.r,0,Math.PI*2);ctx.fill();
      ctx.strokeStyle='#fca5a5';ctx.lineWidth=1;ctx.stroke();
    });

    // Ship
    const px=g.px,py=g.py;
    ctx.shadowColor=color;ctx.shadowBlur=16;
    ctx.fillStyle=color;
    ctx.beginPath();ctx.moveTo(px+PW/2,py);ctx.lineTo(px+4,py+PH);ctx.lineTo(px+PW-4,py+PH);ctx.closePath();ctx.fill();
    ctx.fillStyle='white';ctx.beginPath();ctx.ellipse(px+PW/2,py+PH/2,8,12,0,0,Math.PI*2);ctx.fill();
    ctx.shadowBlur=0;

    // HUD
    ctx.fillStyle='white';ctx.font='bold 14px Arial';ctx.textAlign='left';ctx.textBaseline='top';
    ctx.fillText(`Score: ${g.score}`,10,8);
    ctx.fillStyle='#ef4444';ctx.fillText('❤️'.repeat(g.lives),10,28);
    ctx.fillStyle=color;ctx.textAlign='right';ctx.fillText(`Best: ${g.hs}`,W-10,8);
    ctx.fillStyle='rgba(255,255,255,0.4)';ctx.font='11px Arial';ctx.fillText(`Survived: ${g.survived}s`,W-10,26);

    if(stat==='idle'){
      ctx.fillStyle='rgba(0,0,0,0.62)';ctx.fillRect(0,0,W,H);
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillStyle=color;ctx.font='bold 28px Arial';ctx.fillText('☄️ METEOR DODGE',W/2,H/2-65);
      ctx.fillStyle='white';ctx.font='16px Arial';ctx.fillText('Dodge ALL meteors to survive!',W/2,H/2-25);
      ctx.fillStyle='rgba(255,255,255,0.55)';ctx.font='14px Arial';ctx.fillText('W/A/S/D  or  Arrow Keys to move',W/2,H/2+10);
      ctx.fillStyle=color;ctx.font='bold 16px Arial';ctx.fillText('Press ENTER to Play',W/2,H/2+46);
      ctx.fillStyle='rgba(255,255,255,0.25)';ctx.font='12px Arial';ctx.fillText('Day 8 — Random & Collision Logic',W/2,H/2+72);
    }
    if(stat==='dead'){
      ctx.fillStyle='rgba(0,0,0,0.72)';ctx.fillRect(0,0,W,H);
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillStyle='#ef4444';ctx.font='bold 32px Arial';ctx.fillText('SHIP DESTROYED',W/2,H/2-62);
      ctx.fillStyle='white';ctx.font='20px Arial';ctx.fillText(`Score: ${g.score}`,W/2,H/2-20);
      ctx.fillStyle='#facc15';ctx.font='16px Arial';ctx.fillText(`Best: ${g.hs}`,W/2,H/2+12);
      ctx.fillStyle='rgba(255,255,255,0.55)';ctx.font='14px Arial';ctx.fillText(`Survived: ${g.survived}s`,W/2,H/2+40);
      ctx.fillStyle=color;ctx.font='bold 15px Arial';ctx.fillText('ENTER to play again',W/2,H/2+68);
    }
  };

  const start=()=>{
    const canvas=cvRef.current;if(!canvas)return;
    const ctx=canvas.getContext('2d');
    const hs=gRef.current?.hs||0;
    gRef.current=init(hs);setSt('playing');cancelAnimationFrame(rafRef.current);
    let lastSec=Date.now();
    const loop=()=>{
      const g=gRef.current;g.frame++;
      const k=kRef.current;
      if((k['a']||k['A']||k['ArrowLeft'])&&g.px>0)        g.px-=g.spd;
      if((k['d']||k['D']||k['ArrowRight'])&&g.px+PW<W)    g.px+=g.spd;
      if((k['w']||k['W']||k['ArrowUp'])&&g.py>0)          g.py-=g.spd;
      if((k['s']||k['S']||k['ArrowDown'])&&g.py+PH<H)     g.py+=g.spd;
      if(Date.now()-lastSec>=1000){g.survived++;g.score+=10*g.survived;if(g.score>g.hs)g.hs=g.score;lastSec=Date.now();}
      g.spawnT++;
      if(g.spawnT>=g.spawnI){spawn(g);g.spawnT=0;g.spawnI=Math.max(30,80-g.survived*3);g.mspd=2+g.survived*0.08;}
      g.meteors.forEach(m=>{m.y+=m.vy;m.x+=m.vx;});
      g.meteors.forEach(m=>{
        const dx=m.x-(g.px+PW/2),dy=m.y-(g.py+PH/2);
        if(Math.sqrt(dx*dx+dy*dy)<m.r+18){m.hit=true;g.lives=Math.max(0,g.lives-m.dmg);}
      });
      g.meteors=g.meteors.filter(m=>!m.hit&&m.y<H+50);
      const dead=g.lives<=0;
      draw(ctx,g,dead?'dead':'playing');
      if(dead){setSt('dead');return;}
      rafRef.current=requestAnimationFrame(loop);
    };
    rafRef.current=requestAnimationFrame(loop);
  };

  useEffect(()=>{
    const canvas=cvRef.current;if(!canvas)return;
    gRef.current=init(0);draw(canvas.getContext('2d'),gRef.current,'idle');
    const onKey=e=>{kRef.current[e.key]=e.type==='keydown';if(e.type==='keydown'&&e.key==='Enter')start();};
    canvas.addEventListener('keydown',onKey);canvas.addEventListener('keyup',onKey);
    return()=>{cancelAnimationFrame(rafRef.current);canvas.removeEventListener('keydown',onKey);canvas.removeEventListener('keyup',onKey);};
  },[]);

  const btnStyle=(bg)=>({padding:'8px 14px',borderRadius:8,border:`1px solid ${color}40`,background:bg,color,fontSize:13,cursor:'pointer',fontFamily:'inherit',fontWeight:700,userSelect:'none'});
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12}}>
      <canvas ref={cvRef} width={W} height={H} tabIndex={0} onClick={()=>cvRef.current?.focus()} style={{borderRadius:12,border:`2px solid ${color}40`,outline:'none',cursor:'crosshair',display:'block'}}/>
      <div style={{display:'flex',gap:6,flexWrap:'wrap',justifyContent:'center'}}>
        {[['▲','ArrowUp'],['◀','ArrowLeft'],['▼','ArrowDown'],['▶','ArrowRight']].map(([l,k])=>(
          <button key={k} onMouseDown={()=>{kRef.current[k]=true;}} onMouseUp={()=>{kRef.current[k]=false;}} style={btnStyle(`${color}15`)}>{l}</button>
        ))}
        <button onClick={start} style={btnStyle(`${color}25`)}>{st==='idle'?'▶ Play':'↺ Restart'}</button>
      </div>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:12}}>Click canvas · WASD or Arrows to dodge · survive as long as possible!</div>
    </div>
  );
}

// ── DAY 10 — FLAPPY BIRD (Canvas) ────────────────────────────────────────────
export function Day10Game({ color }) {
  const canvasRef=useRef(null),stateRef=useRef(null),rafRef=useRef(null);
  const [status,setStatus]=useState('idle');
  const W=380,H=420,GAP=130,PIPE_W=52,SPEED=2.8,GRAVITY=0.38,JUMP=-7.5;

  const initState=()=>({by:H/2,bv:0,pipes:[{x:W+80,gy:rnd(120,H-150)}],score:0,hs:stateRef.current?.hs||0,frame:0});

  const draw=(ctx,s,status)=>{
    ctx.fillStyle='#04080f';ctx.fillRect(0,0,W,H);
    ctx.fillStyle='rgba(255,255,255,0.4)';
    for(let i=0;i<40;i++){ctx.beginPath();ctx.arc((i*97)%W,(i*73)%H,1,0,Math.PI*2);ctx.fill();}
    s.pipes.forEach(p=>{
      ctx.fillStyle='#22c55e';ctx.fillRect(p.x,0,PIPE_W,p.gy-GAP/2);ctx.fillRect(p.x,p.gy+GAP/2,PIPE_W,H);
      ctx.fillStyle='#16a34a';ctx.fillRect(p.x-4,p.gy-GAP/2-18,PIPE_W+8,18);ctx.fillRect(p.x-4,p.gy+GAP/2,PIPE_W+8,18);
    });
    ctx.fillStyle=color;ctx.beginPath();ctx.ellipse(80,s.by,18,13,Math.atan2(s.bv,10),0,Math.PI*2);ctx.fill();
    ctx.fillStyle='white';ctx.beginPath();ctx.arc(90,s.by-4,5,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='#060a12';ctx.beginPath();ctx.arc(92,s.by-4,3,0,Math.PI*2);ctx.fill();
    ctx.fillStyle='white';ctx.font='bold 22px Arial';ctx.textAlign='center';ctx.fillText(s.score,W/2,36);
    if(s.hs>0){ctx.font='13px Arial';ctx.fillStyle='#facc15';ctx.fillText(`Best: ${s.hs}`,W-50,20);}
    if(status==='idle'){
      ctx.fillStyle='rgba(0,0,0,0.5)';ctx.fillRect(0,0,W,H);
      ctx.fillStyle=color;ctx.font='bold 28px Arial';ctx.textAlign='center';ctx.fillText('FLAPPY BIRD',W/2,H/2-40);
      ctx.fillStyle='white';ctx.font='18px Arial';ctx.fillText('SPACE or tap to flap',W/2,H/2);
      ctx.fillStyle='rgba(255,255,255,0.4)';ctx.font='13px Arial';ctx.fillText('Day 9 — Pygame in the browser!',W/2,H/2+28);
    }
    if(status==='dead'){
      ctx.fillStyle='rgba(0,0,0,0.6)';ctx.fillRect(0,0,W,H);
      ctx.fillStyle='#ef4444';ctx.font='bold 30px Arial';ctx.textAlign='center';ctx.fillText('GAME OVER',W/2,H/2-50);
      ctx.fillStyle='white';ctx.font='20px Arial';ctx.fillText(`Score: ${s.score}`,W/2,H/2-10);
      ctx.fillStyle='#facc15';ctx.font='16px Arial';ctx.fillText(`Best: ${s.hs}`,W/2,H/2+20);
      ctx.fillStyle='rgba(255,255,255,0.7)';ctx.font='15px Arial';ctx.fillText('SPACE to play again',W/2,H/2+52);
    }
  };

  const startGame=()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    const ctx=canvas.getContext('2d');
    stateRef.current={...initState()};setStatus('playing');cancelAnimationFrame(rafRef.current);
    const loop=()=>{
      const s=stateRef.current;s.bv+=GRAVITY;s.by+=s.bv;s.frame++;
      s.pipes.forEach(p=>{p.x-=SPEED;});
      if(s.pipes[s.pipes.length-1].x<W-220)s.pipes.push({x:W+30,gy:rnd(120,H-150)});
      s.pipes=s.pipes.filter(p=>p.x>-PIPE_W);
      s.pipes.forEach(p=>{if(!p.passed&&p.x+PIPE_W<80){p.passed=true;s.score++;if(s.score>s.hs)s.hs=s.score;}});
      const dead=s.by>H-15||s.by<0||s.pipes.some(p=>80+16>p.x&&80-16<p.x+PIPE_W&&(s.by-11<p.gy-GAP/2||s.by+11>p.gy+GAP/2));
      draw(ctx,s,dead?'dead':'playing');
      if(dead){setStatus('dead');return;}
      rafRef.current=requestAnimationFrame(loop);
    };
    rafRef.current=requestAnimationFrame(loop);
  };

  const handleInput=(e)=>{
    if(e.type==='keydown'&&e.code!=='Space')return;e.preventDefault();
    if(status==='idle'||status==='dead'){startGame();return;}
    if(stateRef.current)stateRef.current.bv=JUMP;
  };

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    stateRef.current=initState();draw(canvas.getContext('2d'),stateRef.current,'idle');
    const ok=e=>{if(e.type==='keydown'&&e.code!=='Space')return;e.preventDefault();if(status==='idle'||status==='dead')startGame();else if(stateRef.current)stateRef.current.bv=JUMP;};
    canvas.addEventListener('keydown',ok);return()=>{cancelAnimationFrame(rafRef.current);canvas.removeEventListener('keydown',ok);};
  },[]);

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12}}>
      <canvas ref={canvasRef} width={W} height={H} tabIndex={0} onClick={handleInput} onKeyDown={handleInput} style={{borderRadius:12,border:`2px solid ${color}40`,outline:'none',cursor:'pointer',display:'block'}}/>
      <div style={{display:'flex',gap:8}}>
        <button onMouseDown={e=>{e.preventDefault();if(stateRef.current)stateRef.current.bv=JUMP;}} style={{padding:'8px 20px',borderRadius:8,border:`1px solid ${color}50`,background:`${color}15`,color,fontSize:14,cursor:'pointer',fontFamily:'inherit',fontWeight:700}}>🐦 FLAP</button>
        <button onMouseDown={()=>{cancelAnimationFrame(rafRef.current);const cv=canvasRef.current;const ctx=cv?.getContext('2d');stateRef.current={...initState(),hs:stateRef.current?.hs||0};if(ctx)draw(ctx,stateRef.current,'idle');setStatus('idle');}} style={{padding:'8px 16px',borderRadius:8,border:'1px solid rgba(255,255,255,0.15)',background:'rgba(255,255,255,0.04)',color:'rgba(255,255,255,0.5)',fontSize:14,cursor:'pointer',fontFamily:'inherit'}}>↺ Reset</button>
      </div>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:12}}>SPACE / Click / Tap to flap</div>
    </div>
  );
}

// ── DAY 11/12 — SPACE SHOOTER — WASD + SPACE ────────────────────────────────
function SpaceShooterGame({ color }) {
  const canvasRef=useRef(null),gameRef=useRef(null),rafRef=useRef(null),keysRef=useRef({});
  const [status,setStatus]=useState('idle');
  const W=380,H=460;

  const initGame=(hs=0)=>({player:{x:W/2-20,y:H-80,w:40,h:50},bullets:[],enemies:[],score:0,lives:3,hs,shootCd:0,spawnT:0,frame:0});

  const drawGame=(ctx,g,stat)=>{
    const grad=ctx.createLinearGradient(0,0,0,H);grad.addColorStop(0,'#04080f');grad.addColorStop(1,'#060a18');
    ctx.fillStyle=grad;ctx.fillRect(0,0,W,H);
    for(let i=0;i<60;i++){ctx.fillStyle=`rgba(255,255,255,${0.1+((i*37)%5)/20})`;ctx.fillRect((i*127)%W,(i*83+g.frame/3)%H,1,1);}
    g.bullets.forEach(b=>{ctx.fillStyle='#86efac';ctx.fillRect(b.x,b.y,4,12);});
    g.enemies.forEach(e=>{
      const ec=['#ef4444','#f59e0b','#8b5cf6'][Math.min(e.tier-1,2)];
      ctx.fillStyle=ec;ctx.beginPath();ctx.roundRect(e.x,e.y,e.w,e.h,6);ctx.fill();
      ctx.fillStyle='white';ctx.font='bold 11px Arial';ctx.textAlign='center';ctx.fillText(e.tier,e.x+e.w/2,e.y+e.h/2+4);
    });
    const p=g.player;
    ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=10;
    ctx.beginPath();ctx.moveTo(p.x+p.w/2,p.y);ctx.lineTo(p.x+6,p.y+p.h);ctx.lineTo(p.x+p.w-6,p.y+p.h);ctx.closePath();ctx.fill();
    ctx.shadowBlur=0;ctx.strokeStyle='white';ctx.lineWidth=1.5;ctx.stroke();
    ctx.fillStyle='white';ctx.font='bold 14px Arial';ctx.textAlign='left';ctx.textBaseline='top';
    ctx.fillText(`Score: ${g.score}`,10,8);
    ctx.fillStyle='#ef4444';ctx.fillText('❤️'.repeat(g.lives),10,28);
    ctx.fillStyle='#facc15';ctx.font='12px Arial';ctx.textAlign='right';ctx.fillText(`Best: ${g.hs}`,W-10,8);

    const overlay=(txt1,c1,txt2,hint)=>{
      ctx.fillStyle='rgba(0,0,0,0.6)';ctx.fillRect(0,0,W,H);
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillStyle=c1;ctx.font='bold 26px Arial';ctx.fillText(txt1,W/2,H/2-50);
      ctx.fillStyle='white';ctx.font='17px Arial';ctx.fillText(txt2,W/2,H/2);
      ctx.fillStyle='rgba(255,255,255,0.6)';ctx.font='14px Arial';ctx.fillText(hint,W/2,H/2+30);
      ctx.fillStyle='rgba(255,255,255,0.3)';ctx.font='12px Arial';ctx.fillText('Day 10 — Flappy Bird | Physics + Collision',W/2,H/2+56);
    };
    if(stat==='idle') overlay('SPACE SHOOTER',color,'WASD to move  SPACE to shoot','Press ENTER to Launch');
    if(stat==='dead'){
      ctx.fillStyle='rgba(0,0,0,0.65)';ctx.fillRect(0,0,W,H);
      ctx.textAlign='center';ctx.textBaseline='middle';
      ctx.fillStyle='#ef4444';ctx.font='bold 28px Arial';ctx.fillText('GAME OVER',W/2,H/2-50);
      ctx.fillStyle='white';ctx.font='20px Arial';ctx.fillText(`Score: ${g.score}`,W/2,H/2-10);
      ctx.fillStyle='#facc15';ctx.font='16px Arial';ctx.fillText(`Best: ${g.hs}`,W/2,H/2+20);
      ctx.fillStyle='rgba(255,255,255,0.7)';ctx.font='14px Arial';ctx.fillText('ENTER to play again',W/2,H/2+52);
    }
  };

  const startGame=()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    const ctx=canvas.getContext('2d');
    const hs=gameRef.current?.hs||0;
    gameRef.current=initGame(hs);setStatus('playing');cancelAnimationFrame(rafRef.current);
    const loop=()=>{
      const g=gameRef.current;g.frame++;
      const k=keysRef.current,p=g.player;
      // WASD movement
      if((k['a']||k['A'])&&p.x>0)          p.x-=5;
      if((k['d']||k['D'])&&p.x+p.w<W)      p.x+=5;
      if((k['w']||k['W'])&&p.y>H/2)        p.y-=5;
      if((k['s']||k['S'])&&p.y+p.h<H)      p.y+=5;
      // SPACE to shoot
      g.shootCd=Math.max(0,g.shootCd-1);
      if((k[' ']||k['Space'])&&g.shootCd===0){g.bullets.push({x:p.x+p.w/2-2,y:p.y-10});g.shootCd=12;}
      g.bullets.forEach(b=>b.y-=13);g.bullets=g.bullets.filter(b=>b.y>0);
      g.spawnT++;const interval=Math.max(35,75-g.score/50);
      if(g.spawnT>=interval){const tier=1+Math.floor(g.score/200);g.enemies.push({x:rnd(10,W-50),y:-40,w:40,h:36,speed:2+Math.floor(g.score/100),tier,hp:tier});g.spawnT=0;}
      g.enemies.forEach(e=>e.y+=e.speed);g.enemies=g.enemies.filter(e=>{if(e.y>H){g.lives--;return false;}return true;});
      g.bullets.forEach(b=>{g.enemies.forEach(e=>{if(b.x>e.x&&b.x<e.x+e.w&&b.y>e.y&&b.y<e.y+e.h){e.hp--;b.done=true;if(e.hp<=0){e.dead=true;g.score+=10*e.tier;if(g.score>g.hs)g.hs=g.score;}}});});
      g.bullets=g.bullets.filter(b=>!b.done);g.enemies=g.enemies.filter(e=>!e.dead);
      const dead=g.lives<=0;drawGame(ctx,g,dead?'dead':'playing');
      if(dead){setStatus('dead');return;}
      rafRef.current=requestAnimationFrame(loop);
    };
    rafRef.current=requestAnimationFrame(loop);
  };

  useEffect(()=>{
    const canvas=canvasRef.current;if(!canvas)return;
    gameRef.current=initGame(0);drawGame(canvas.getContext('2d'),gameRef.current,'idle');
    const onKey=e=>{
      keysRef.current[e.key]=e.type==='keydown';
      if(e.code==='Space')e.preventDefault();
      if(e.type==='keydown'&&e.key==='Enter')startGame();
    };
    canvas.addEventListener('keydown',onKey);canvas.addEventListener('keyup',onKey);
    return()=>{cancelAnimationFrame(rafRef.current);canvas.removeEventListener('keydown',onKey);canvas.removeEventListener('keyup',onKey);};
  },[]);

  const bs=(extra={})=>({padding:'6px 12px',borderRadius:8,border:`1px solid ${color}40`,background:`${color}15`,color,fontSize:13,cursor:'pointer',fontFamily:'inherit',fontWeight:700,userSelect:'none',...extra});
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12}}>
      <canvas ref={canvasRef} width={W} height={H} tabIndex={0} onClick={()=>canvasRef.current?.focus()} style={{borderRadius:12,border:`2px solid ${color}40`,outline:'none',cursor:'crosshair',display:'block'}}/>
      <div style={{display:'flex',gap:6,flexWrap:'wrap',justifyContent:'center'}}>
        {[['◀ A','a'],['▲ W','w'],['▼ S','s'],['D ▶','d']].map(([l,k])=>(
          <button key={k} onMouseDown={()=>{keysRef.current[k]=true;}} onMouseUp={()=>{keysRef.current[k]=false;}} style={bs()}>{l}</button>
        ))}
        <button onMouseDown={()=>{keysRef.current[' ']=true;}} onMouseUp={()=>{keysRef.current[' ']=false;}} style={bs({background:`${color}25`,border:`1px solid ${color}60`})}>🔫 SHOOT</button>
        <button onClick={startGame} style={bs({background:`${color}20`})}>{status==='idle'?'▶ Launch':'↺ Restart'}</button>
      </div>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:12}}>Click canvas · WASD to move · SPACE to shoot</div>
    </div>
  );
}

// ── DAY 11 — SHOOTER CORE (same engine) ─────────────────────────────────────
export function Day11Game({ color }) {
  return <SpaceShooterGame color={color} />;
}

// ── DAY 12 — SPACE SHOOTER FULL (same engine) ────────────────────────────────
export function Day12Game({ color }) {
  return <SpaceShooterGame color={color} />;
}
