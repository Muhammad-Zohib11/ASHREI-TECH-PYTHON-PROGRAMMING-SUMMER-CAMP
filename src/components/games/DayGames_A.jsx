import { useState, useRef, useEffect } from 'react';
import { TerminalShell, L, rnd, pick } from './TerminalShell.jsx';

const BOOT = (title, subtitle) => [
  L('════════════════════════════════════════════', 'border'),
  L(`   ${title}`, 'title'),
  L(`   ASHRI Tech Game Academy — ${subtitle}`, 'subtitle'),
  L('════════════════════════════════════════════', 'border'),
  L(''),
];

// ── DAY 2 — COIN COLLECTOR (Canvas) ──────────────────────────────────────────
// Skill-based: catch falling coins with a basket. A/D or ← → to move.
// Mirrors Python concepts: score variable, lives variable, += / -=, speed
export function Day2Game({ color }) {
  const canvasRef = useRef(null);
  const gameRef   = useRef(null);
  const rafRef    = useRef(null);
  const keysRef   = useRef({});
  const [status, setStatus] = useState('idle');

  const W = 380, H = 440, BW = 64, BH = 16;
  const ITEM_TYPES = [
    { icon:'💰', pts:10,  life: 0 },
    { icon:'⭐', pts:25,  life: 0 },
    { icon:'💎', pts:50,  life: 0 },
    { icon:'💣', pts:0,   life:-1 },
  ];

  const initGame = (hs=0) => ({
    bx:W/2-BW/2, by:H-36, bspeed:6,
    items:[], score:0, lives:3, level:1,
    caught:0, spawnT:0, spawnInterval:70,
    fallSpeed:2.5, frame:0, hs,
  });

  const spawnItem = (g) => {
    const bomb = Math.random() < 0.15;
    const t = bomb ? ITEM_TYPES[3] : ITEM_TYPES[Math.floor(Math.random()*3)];
    g.items.push({ x:rnd(24,W-44), y:-30, type:t });
  };

  const drawGame = (ctx, g, stat) => {
    ctx.fillStyle='#04080f'; ctx.fillRect(0,0,W,H);
    for (let i=0;i<50;i++) {
      ctx.fillStyle=`rgba(255,255,255,${0.05+((i*37)%5)/60})`;
      ctx.fillRect((i*127+g.frame/4)%W,(i*83)%H,1,1);
    }
    ctx.strokeStyle=`${color}25`; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(0,H-20); ctx.lineTo(W,H-20); ctx.stroke();

    ctx.font='22px serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    g.items.forEach(it => ctx.fillText(it.type.icon, it.x, it.y));

    ctx.fillStyle=color;
    ctx.beginPath(); ctx.roundRect(g.bx,g.by,BW,BH,6); ctx.fill();
    ctx.fillStyle=`${color}50`;
    ctx.beginPath(); ctx.roundRect(g.bx+4,g.by+3,BW-8,BH-5,4); ctx.fill();
    ctx.fillStyle='#04080f'; ctx.font='bold 8px Arial'; ctx.textAlign='center'; ctx.textBaseline='middle';
    ctx.fillText('BASKET', g.bx+BW/2, g.by+BH/2);

    ctx.textAlign='left'; ctx.fillStyle='white'; ctx.font='bold 14px Arial'; ctx.textBaseline='top';
    ctx.fillText(`Score: ${g.score}`,10,8);
    ctx.fillStyle='#ef4444'; ctx.font='13px Arial'; ctx.fillText('❤️'.repeat(g.lives),10,28);
    ctx.fillStyle=color; ctx.textAlign='right'; ctx.font='bold 13px Arial';
    ctx.fillText(`Lv ${g.level}`,W-10,8);
    ctx.fillStyle='#facc15'; ctx.font='11px Arial';
    ctx.fillText(`Best: ${g.hs}`,W-10,26);

    if (stat==='idle') {
      ctx.fillStyle='rgba(0,0,0,0.6)'; ctx.fillRect(0,0,W,H);
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillStyle=color; ctx.font='bold 28px Arial'; ctx.fillText('💰 COIN COLLECTOR',W/2,H/2-60);
      ctx.fillStyle='white'; ctx.font='16px Arial'; ctx.fillText('Catch coins, avoid 💣 bombs!',W/2,H/2-20);
      ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.font='14px Arial'; ctx.fillText('A/D  or  ← →  to move basket',W/2,H/2+10);
      ctx.fillStyle=color; ctx.font='bold 16px Arial'; ctx.fillText('Press ENTER or click Play',W/2,H/2+46);
      ctx.fillStyle='rgba(255,255,255,0.25)'; ctx.font='12px Arial'; ctx.fillText('Day 2 — Variables & f-strings',W/2,H/2+72);
    }
    if (stat==='dead') {
      ctx.fillStyle='rgba(0,0,0,0.7)'; ctx.fillRect(0,0,W,H);
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillStyle='#ef4444'; ctx.font='bold 32px Arial'; ctx.fillText('GAME OVER',W/2,H/2-60);
      ctx.fillStyle='white'; ctx.font='20px Arial'; ctx.fillText(`Score: ${g.score}`,W/2,H/2-18);
      ctx.fillStyle='#facc15'; ctx.font='16px Arial'; ctx.fillText(`Best: ${g.hs}`,W/2,H/2+12);
      ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.font='14px Arial'; ctx.fillText(`Level reached: ${g.level}`,W/2,H/2+40);
      ctx.fillStyle=color; ctx.font='bold 15px Arial'; ctx.fillText('ENTER to play again',W/2,H/2+68);
    }
  };

  const startGame = () => {
    const canvas=canvasRef.current; if(!canvas) return;
    const ctx=canvas.getContext('2d');
    const hs=gameRef.current?.hs||0;
    gameRef.current=initGame(hs);
    setStatus('playing');
    cancelAnimationFrame(rafRef.current);
    const loop=()=>{
      const g=gameRef.current; g.frame++;
      const k=keysRef.current;
      if((k['ArrowLeft']||k['a']||k['A'])&&g.bx>0)      g.bx-=g.bspeed;
      if((k['ArrowRight']||k['d']||k['D'])&&g.bx+BW<W)  g.bx+=g.bspeed;
      g.spawnT++;
      if(g.spawnT>=g.spawnInterval){spawnItem(g);g.spawnT=0;}
      g.items.forEach(it=>{it.y+=g.fallSpeed;});
      g.items.forEach(it=>{
        if(it.y+12>=g.by&&it.y-12<=g.by+BH&&it.x>=g.bx-12&&it.x<=g.bx+BW+12){
          it.caught=true;
          if(it.type.life<0){g.lives=Math.max(0,g.lives+it.type.life);}
          else{g.score+=it.type.pts;g.caught++;if(g.score>g.hs)g.hs=g.score;}
        }
      });
      g.items=g.items.filter(it=>!it.caught&&it.y<H+40);
      const lv=Math.floor(g.caught/10)+1;
      if(lv>g.level){g.level=lv;g.fallSpeed=2.5+(lv-1)*0.4;g.spawnInterval=Math.max(28,70-(lv-1)*6);}
      const dead=g.lives<=0;
      drawGame(ctx,g,dead?'dead':'playing');
      if(dead){setStatus('dead');return;}
      rafRef.current=requestAnimationFrame(loop);
    };
    rafRef.current=requestAnimationFrame(loop);
  };

  useEffect(()=>{
    const canvas=canvasRef.current; if(!canvas) return;
    gameRef.current=initGame(0);
    drawGame(canvas.getContext('2d'),gameRef.current,'idle');
    const onKey=e=>{
      keysRef.current[e.key]=e.type==='keydown';
      if(e.type==='keydown'&&e.key==='Enter') startGame();
    };
    canvas.addEventListener('keydown',onKey); canvas.addEventListener('keyup',onKey);
    return()=>{cancelAnimationFrame(rafRef.current);canvas.removeEventListener('keydown',onKey);canvas.removeEventListener('keyup',onKey);};
  },[]);

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:12}}>
      <canvas ref={canvasRef} width={W} height={H} tabIndex={0} onClick={()=>canvasRef.current?.focus()}
        style={{borderRadius:12,border:`2px solid ${color}40`,outline:'none',cursor:'pointer',display:'block'}} />
      <div style={{display:'flex',gap:8}}>
        {[['◀ A','ArrowLeft'],['D ▶','ArrowRight']].map(([lbl,k])=>(
          <button key={k} onMouseDown={()=>{keysRef.current[k]=true;}} onMouseUp={()=>{keysRef.current[k]=false;}}
            onTouchStart={e=>{e.preventDefault();keysRef.current[k]=true;}} onTouchEnd={()=>{keysRef.current[k]=false;}}
            style={{padding:'9px 24px',borderRadius:8,border:`1px solid ${color}40`,background:`${color}15`,color,fontSize:14,cursor:'pointer',fontFamily:'inherit',fontWeight:700,userSelect:'none'}}>
            {lbl}
          </button>
        ))}
        <button onClick={startGame}
          style={{padding:'9px 18px',borderRadius:8,border:`1px solid ${color}50`,background:`${color}20`,color,fontSize:13,cursor:'pointer',fontFamily:'inherit',fontWeight:700}}>
          {status==='idle'?'▶ Play':'↺ Restart'}
        </button>
      </div>
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:12}}>Click canvas · A/D or ← → to move · catch coins, dodge bombs</div>
    </div>
  );
}

// ── DAY 3 — BATTLE CALCULATOR ─────────────────────────────────────────────────
export function Day3Game({ color }) {
  const [lines, setLines] = useState([...BOOT('⚔️   BATTLE CALCULATOR','Day 3'), L('  Enter your hero name:','prompt')]);
  const [input, setInput] = useState('');
  const [phase, setPhase] = useState('name');
  const [st, setSt]       = useState({ name:'', heroHp:100, dragonHp:100, round:0 });
  const [key, setKey]     = useState(0);

  const push = (...ls) => setLines(p=>[...p,...ls]);

  const submit = () => {
    const cmd = input.trim(); setInput('');
    if (phase === 'name') {
      const n = cmd || 'Hero';
      push(L(`  > ${n}`,'input'), L(''), L(`  ⚔️  ${n} vs The Dragon!`,'success'), L(''));
      setSt(s=>({...s, name:n}));
      push(L(`--- Round 1 ---`,'border'), L(`  Your HP: 100  |  Dragon HP: 100`,'info'), L(''), L('  Your attack power (1-50):','prompt'));
      setPhase('attack');
    } else if (phase === 'attack') {
      const atk = Math.max(1, Math.min(50, parseInt(cmd)||10));
      push(L(`  > ${atk}`,'input'));
      setSt(s => {
        const defense = rnd(5, 15);
        const raw     = atk - defense;
        const crit    = raw > 30;
        const damage  = crit ? Math.floor(raw * 1.5) : Math.max(0, raw);
        const counter = rnd(8, 22);
        const newDragon = Math.max(0, s.dragonHp - damage);
        const newHero   = Math.max(0, s.heroHp - counter);
        const newRound  = s.round + 1;
        push(crit ? L(`  💥 CRITICAL HIT! Defense=${defense} | Damage=${damage}`,'success')
                  : L(`  ⚔️  Hit! Defense=${defense} | Damage=${damage}`,'output'));
        if (newDragon > 0) push(L(`  🐉 Dragon attacks! -${counter} HP`,'error'));
        push(L(`  Dragon HP remaining: ${Math.max(0,(newDragon/100*100)).toFixed(1)}%`,'info'), L(''));
        if (newDragon <= 0) {
          push(L('════════════════════════════════════════════','border'),
            L(`  🏆 ${s.name} WINS after ${newRound} rounds!`,'title'),
            L(`  Dragon dealt: ${100-newHero} total damage`,'info'), L(`  ${s.name} HP remaining: ${newHero}`,'info'),
            L('════════════════════════════════════════════','border'), L(''), L('  Play again? [Y/N]:','prompt'));
          setPhase('again');
        } else if (newHero <= 0) {
          push(L('════════════════════════════════════════════','border'),
            L(`  💀 The Dragon wins after ${newRound} rounds.`,'error'),
            L('  Tip: Use higher attack values next time!','warn'),
            L('════════════════════════════════════════════','border'), L(''), L('  Play again? [Y/N]:','prompt'));
          setPhase('again');
        } else {
          push(L(`--- Round ${newRound+1} ---`,'border'), L(`  Your HP: ${newHero}  |  Dragon HP: ${newDragon}`,'info'), L(''), L('  Your attack power (1-50):','prompt'));
          return { ...s, heroHp:newHero, dragonHp:newDragon, round:newRound };
        }
        return { ...s, heroHp:newHero, dragonHp:newDragon, round:newRound };
      });
    } else if (phase === 'again') {
      push(L(`  > ${cmd}`,'input'));
      if (cmd.toUpperCase()==='Y') setKey(k=>k+1);
      else { push(L('  See you next mission! 🚀','success')); setPhase('done'); }
    }
  };

  if (key > 0) return <Day3Game color={color} key={key} />;
  return <TerminalShell color={color} title="⚔️ battle-calculator.py — Terminal" lines={lines} input={input} onInput={setInput} onSubmit={submit} placeholder={phase==='name'?'Enter hero name...':'Enter attack power (1-50)'} onReset={()=>setKey(k=>k+1)} disabled={phase==='done'} />;
}

// ── DAY 4 — ROCK PAPER SCISSORS ───────────────────────────────────────────────
const RPS_CHOICES = ['rock','paper','scissors'];
const RPS_ICONS   = { rock:'✊', paper:'✋', scissors:'✌️' };
const RPS_WIN = (p,c) => (p==='rock'&&c==='scissors')||(p==='scissors'&&c==='paper')||(p==='paper'&&c==='rock');

export function Day4Game({ color }) {
  const [lines, setLines] = useState([...BOOT('✊  ROCK PAPER SCISSORS DUEL','Day 4'), L('  Enter your name:','prompt')]);
  const [input, setInput] = useState('');
  const [phase, setPhase] = useState('name');
  const [st, setSt]       = useState({ name:'', ps:0, cs:0 });
  const [key, setKey]     = useState(0);

  const push = (...ls) => setLines(p=>[...p,...ls]);

  const submit = () => {
    const cmd = input.trim(); setInput('');
    if (phase==='name') {
      const n=cmd||'Player';
      push(L(`  > ${n}`,'input'), L(''), L(`  First to 3 wins, ${n}!`,'success'), L(''),
        L('  Choose [rock / paper / scissors]:','prompt'));
      setSt(s=>({...s,name:n})); setPhase('choose');
    } else if (phase==='choose') {
      const p = cmd.toLowerCase();
      if (!RPS_CHOICES.includes(p)) { push(L(`  > ${cmd}`,'input'), L(`  ❌ Type: rock, paper, or scissors`,'error')); return; }
      const c = pick(RPS_CHOICES);
      push(L(`  > ${p}`,'input'), L(''), L(`  ${RPS_ICONS[p]} ${p}  vs  ${RPS_ICONS[c]} ${c}`,'output'));
      setSt(s=>{
        let ps=s.ps, cs=s.cs;
        if (p===c)        push(L('  ➖ TIE!','warn'));
        else if(RPS_WIN(p,c)){ ps++; push(L('  ✅ YOU WIN this round!','success')); }
        else                 { cs++; push(L('  🤖 Computer wins this round!','error')); }
        push(L(`  Score: ${s.name} ${ps}  —  Computer ${cs}`,'info'), L(''));
        const ns = {...s, ps, cs};
        if (ps>=3||cs>=3) {
          push(L('════════════════════════════════════════════','border'),
            ps>=3 ? L(`  🏆 ${s.name} is the CHAMPION!`,'title') : L('  🤖 Computer wins the duel!','error'),
            L('════════════════════════════════════════════','border'), L(''), L('  Play again? [Y/N]:','prompt'));
          setPhase('again');
        } else push(L('  Choose [rock / paper / scissors]:','prompt'));
        return ns;
      });
    } else if (phase==='again') {
      push(L(`  > ${cmd}`,'input'));
      if (cmd.toUpperCase()==='Y') setKey(k=>k+1);
      else { push(L('  See you next mission! 🚀','success')); setPhase('done'); }
    }
  };

  if (key>0) return <Day4Game color={color} key={key}/>;
  return <TerminalShell color={color} title="✊ rock-paper-scissors.py — Terminal" lines={lines} input={input} onInput={setInput} onSubmit={submit} placeholder={phase==='name'?'Enter name...':'rock / paper / scissors'} onReset={()=>setKey(k=>k+1)} disabled={phase==='done'} />;
}
