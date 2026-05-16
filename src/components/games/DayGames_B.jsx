import { useState, useRef, useEffect } from 'react';
import { TerminalShell, L, rnd, pick } from './TerminalShell.jsx';

const BOOT = (title, sub) => [
  L('════════════════════════════════════════════', 'border'),
  L(`   ${title}`, 'title'),
  L(`   ASHRI Tech Game Academy — ${sub}`, 'subtitle'),
  L('════════════════════════════════════════════', 'border'),
  L(''),
];

// ── DAY 5 — FALLING BLOCKS (Canvas) ──────────────────────────────────────────
// Catch good blocks, avoid bombs. Concepts: loops, counters, conditionals.
export function Day5Game({ color }) {
  const canvasRef = useRef(null);
  const gameRef   = useRef(null);
  const rafRef    = useRef(null);
  const keysRef   = useRef({});
  const [status, setStatus] = useState('idle');

  const W=380, H=460, PW=72, PH=14;

  const BLOCKS = [
    { icon:'🟩', label:'Normal',  pts:10, life:0,  w:36, h:36 },
    { icon:'🥇', label:'Gold',    pts:30, life:0,  w:36, h:36 },
    { icon:'💎', label:'Diamond', pts:60, life:0,  w:36, h:36 },
    { icon:'💣', label:'Bomb',    pts:0,  life:-1, w:36, h:36 },
    { icon:'❤️', label:'Heart',   pts:0,  life:1,  w:36, h:36 },
  ];

  const initGame = (hs=0) => ({
    px:W/2-PW/2, py:H-40, pspeed:7,
    blocks:[], score:0, lives:3, level:1,
    caught:0, spawnT:0, spawnInterval:60,
    fallSpeed:2.2, frame:0, hs,
  });

  const spawnBlock = (g) => {
    const r = Math.random();
    let t;
    if (r < 0.12) t = BLOCKS[3]; // bomb
    else if (r < 0.18) t = BLOCKS[4]; // heart
    else if (r < 0.35) t = BLOCKS[2]; // diamond
    else if (r < 0.55) t = BLOCKS[1]; // gold
    else t = BLOCKS[0]; // normal
    g.blocks.push({ x:rnd(20,W-56), y:-40, type:t });
  };

  const drawGame = (ctx, g, stat) => {
    // BG gradient
    const grad = ctx.createLinearGradient(0,0,0,H);
    grad.addColorStop(0,'#04080f'); grad.addColorStop(1,'#060a18');
    ctx.fillStyle=grad; ctx.fillRect(0,0,W,H);
    // Grid lines
    ctx.strokeStyle='rgba(255,255,255,0.03)'; ctx.lineWidth=1;
    for(let x=0;x<W;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}

    // Blocks
    ctx.font='26px serif'; ctx.textAlign='center'; ctx.textBaseline='middle';
    g.blocks.forEach(b => {
      // glow for specials
      if (b.type.pts>=30||b.type.life>0) {
        ctx.shadowColor = b.type.life>0?'#ef4444':b.type.pts>=60?'#00f5ff':'#f59e0b';
        ctx.shadowBlur = 10;
      }
      ctx.fillText(b.type.icon, b.x+18, b.y+18);
      ctx.shadowBlur=0; ctx.shadowColor='transparent';
    });

    // Platform
    ctx.shadowColor=color; ctx.shadowBlur=12;
    ctx.fillStyle=color;
    ctx.beginPath(); ctx.roundRect(g.px,g.py,PW,PH,7); ctx.fill();
    ctx.shadowBlur=0; ctx.shadowColor='transparent';
    ctx.fillStyle=`${color}60`;
    ctx.beginPath(); ctx.roundRect(g.px+4,g.py+3,PW-8,PH-6,4); ctx.fill();

    // HUD
    ctx.textAlign='left'; ctx.fillStyle='white'; ctx.font='bold 14px Arial'; ctx.textBaseline='top';
    ctx.fillText(`Score: ${g.score}`,10,8);
    let hx=10;
    for(let i=0;i<g.lives&&i<5;i++){ctx.font='14px Arial';ctx.fillText('❤️',hx,28);hx+=22;}
    ctx.fillStyle=color; ctx.textAlign='right'; ctx.font='bold 13px Arial';
    ctx.fillText(`Lv ${g.level}`,W-10,8);
    ctx.fillStyle='#facc15'; ctx.font='11px Arial';
    ctx.fillText(`Best: ${g.hs}`,W-10,26);

    // Legend
    ctx.fillStyle='rgba(255,255,255,0.25)'; ctx.font='10px Arial'; ctx.textAlign='center';
    ctx.fillText('🟩+10  🥇+30  💎+60  💣-life  ❤️+life',W/2,H-8);

    if (stat==='idle') {
      ctx.fillStyle='rgba(0,0,0,0.62)'; ctx.fillRect(0,0,W,H);
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillStyle=color; ctx.font='bold 28px Arial'; ctx.fillText('🧱 FALLING BLOCKS',W/2,H/2-65);
      ctx.fillStyle='white'; ctx.font='16px Arial'; ctx.fillText('Catch blocks, avoid 💣 bombs!',W/2,H/2-25);
      ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.font='14px Arial'; ctx.fillText('A/D  or  ← →  to move',W/2,H/2+10);
      ctx.fillStyle=color; ctx.font='bold 16px Arial'; ctx.fillText('Press ENTER or click Play',W/2,H/2+46);
      ctx.fillStyle='rgba(255,255,255,0.25)'; ctx.font='12px Arial'; ctx.fillText('Day 5 — Loops & Conditionals',W/2,H/2+72);
    }
    if (stat==='dead') {
      ctx.fillStyle='rgba(0,0,0,0.72)'; ctx.fillRect(0,0,W,H);
      ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillStyle='#ef4444'; ctx.font='bold 32px Arial'; ctx.fillText('GAME OVER',W/2,H/2-62);
      ctx.fillStyle='white'; ctx.font='20px Arial'; ctx.fillText(`Score: ${g.score}`,W/2,H/2-20);
      ctx.fillStyle='#facc15'; ctx.font='16px Arial'; ctx.fillText(`Best: ${g.hs}`,W/2,H/2+12);
      ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.font='14px Arial'; ctx.fillText(`Blocks caught: ${g.caught}`,W/2,H/2+40);
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
      if((k['ArrowLeft']||k['a']||k['A'])&&g.px>0)       g.px-=g.pspeed;
      if((k['ArrowRight']||k['d']||k['D'])&&g.px+PW<W)   g.px+=g.pspeed;
      g.spawnT++;
      if(g.spawnT>=g.spawnInterval){spawnBlock(g);g.spawnT=0;}
      g.blocks.forEach(b=>{b.y+=g.fallSpeed;});
      g.blocks.forEach(b=>{
        if(b.y+18>=g.py&&b.y-18<=g.py+PH&&b.x+18>=g.px&&b.x-18<=g.px+PW){
          b.caught=true;
          if(b.type.life<0)       g.lives=Math.max(0,g.lives+b.type.life);
          else if(b.type.life>0)  g.lives=Math.min(5,g.lives+b.type.life);
          else                   {g.score+=b.type.pts*g.level;g.caught++;if(g.score>g.hs)g.hs=g.score;}
        }
      });
      g.blocks=g.blocks.filter(b=>!b.caught&&b.y<H+50);
      const lv=Math.floor(g.caught/12)+1;
      if(lv>g.level){g.level=lv;g.fallSpeed=2.2+(lv-1)*0.35;g.spawnInterval=Math.max(25,60-(lv-1)*5);}
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
        style={{borderRadius:12,border:`2px solid ${color}40`,outline:'none',cursor:'pointer',display:'block'}}/>
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
      <div style={{color:'rgba(255,255,255,0.4)',fontSize:12}}>Click canvas · A/D or ← → to move · ❤️ adds life · 💣 removes life</div>
    </div>
  );
}

// ── DAY 6 — REACTION SPEED TESTER ────────────────────────────────────────────
function rateMs(ms) {
  if (ms<150)  return 'LEGENDARY ⚡';
  if (ms<250)  return 'EXCELLENT 🔥';
  if (ms<400)  return 'GOOD 👍';
  if (ms<600)  return 'AVERAGE 😐';
  return 'KEEP TRAINING 💪';
}

export function Day6Game({ color }) {
  const [lines, setLines]     = useState([...BOOT('⚡  REACTION SPEED TESTER','Day 6'), L('  Your name:','prompt')]);
  const [input, setInput]     = useState('');
  const [phase, setPhase]     = useState('name');
  const [st, setSt]           = useState({ name:'', round:0, results:[] });
  const [key, setKey]         = useState(0);
  const signalRef             = useRef(null);
  const timerRef              = useRef(null);

  const push = (...ls) => setLines(p=>[...p,...ls]);

  useEffect(() => () => { clearTimeout(signalRef.current); }, []);

  const startReady = (state) => {
    const rnd = state.round + 1;
    push(L(`--- Round ${rnd} / 3 ---`,'border'), L('  Get ready...','output'));
    setPhase('waiting');
    const delay = 1500 + Math.random() * 2500;
    signalRef.current = setTimeout(() => {
      push(L(''), L('  ⚡⚡⚡  PRESS ENTER NOW!  ⚡⚡⚡','title'));
      timerRef.current = Date.now();
      setPhase('react');
    }, delay);
  };

  const submit = () => {
    const cmd = input.trim(); setInput('');
    if (phase==='name') {
      const n=cmd||'Player';
      push(L(`  > ${n}`,'input'), L(''), L(`  3 rounds, ${n}. React as fast as you can!`,'success'), L(''));
      setSt({name:n, round:0, results:[]});
      push(L('  Press ENTER when ready for Round 1...','prompt'));
      setPhase('ready');
    } else if (phase==='ready') {
      push(L(`  > [enter]`,'input'));
      startReady(st);
    } else if (phase==='waiting') {
      push(L(`  > ${cmd}`,'input'), L('  ⚠️  Too early! Wait for the signal.','error'), L(''));
      clearTimeout(signalRef.current);
      setTimeout(() => startReady(st), 800);
    } else if (phase==='react') {
      const ms  = Date.now() - timerRef.current;
      const rate = rateMs(ms);
      push(L(`  > [enter]`,'input'), L(`  Round ${st.round+1}: ${ms}ms — ${rate}`,'success'), L(''));
      setSt(s => {
        const results = [...s.results, ms];
        const ns = { ...s, round: s.round+1, results };
        if (ns.round >= 3) {
          const best = Math.min(...results), worst = Math.max(...results);
          const avg  = Math.round(results.reduce((a,b)=>a+b,0)/results.length);
          push(L('════════════════════════════════════════════','border'),
            L(`  Results for ${s.name}:`,'title'),
            L(`    Best    : ${best}ms  — ${rateMs(best)}`,'success'),
            L(`    Worst   : ${worst}ms`,'info'),
            L(`    Average : ${avg}ms  — ${rateMs(avg)}`,'info'),
            L('════════════════════════════════════════════','border'), L(''), L('  Play again? [Y/N]:','prompt'));
          setPhase('again');
        } else {
          push(L(`  Press ENTER for Round ${ns.round+1}...`,'prompt'));
          setPhase('ready');
        }
        return ns;
      });
    } else if (phase==='again') {
      push(L(`  > ${cmd}`,'input'));
      cmd.toUpperCase()==='Y' ? setKey(k=>k+1) : (push(L('  See you next mission! 🚀','success')), setPhase('done'));
    }
  };

  if (key>0) return <Day6Game color={color} key={key}/>;
  const ph = { name:'Enter name...', ready:'Press ENTER to start round...', waiting:'Waiting for signal...', react:'PRESS ENTER!', again:'Y or N' };
  return <TerminalShell color={color} title="⚡ reaction-game.py — Terminal" lines={lines} input={input} onInput={setInput} onSubmit={submit} placeholder={ph[phase]||'...'} onReset={()=>setKey(k=>k+1)} disabled={phase==='done'} />;
}

// ── DAY 7 — SNAKE LITE ────────────────────────────────────────────────────────
const SN_GRID = 12;
const SN_DIR  = { W:[0,-1], S:[0,1], A:[-1,0], D:[1,0] };

function newFood(snake) {
  while (true) {
    const p = [rnd(1,SN_GRID-2), rnd(1,SN_GRID-2)];
    if (!snake.find(s=>s[0]===p[0]&&s[1]===p[1])) return p;
  }
}
function drawGrid(snake, food) {
  const SN_EMPTY='  ', SN_WALL='██', SN_BODY='🟩', SN_HEAD='🐍', SN_FOOD='🍎';
  const rows = [];
  for (let r=0; r<SN_GRID; r++) {
    let line='';
    for (let c=0; c<SN_GRID; c++) {
      if (r===0||r===SN_GRID-1||c===0||c===SN_GRID-1) line+=SN_WALL;
      else if (c===snake[0][0]&&r===snake[0][1]) line+=SN_HEAD;
      else if (snake.find(s=>s[0]===c&&s[1]===r)) line+=SN_BODY;
      else if (c===food[0]&&r===food[1]) line+=SN_FOOD;
      else line+=SN_EMPTY;
    }
    rows.push(L('  '+line,'maze'));
  }
  return rows;
}

export function Day7Game({ color }) {
  const [key, setKey] = useState(0);
  return <Day7Inner color={color} key={key} onReset={()=>setKey(k=>k+1)} />;
}

function Day7Inner({ color, onReset }) {
  const initSnake = [[6,6],[5,6],[4,6]];
  const initFood  = newFood(initSnake);
  const [lines, setLines] = useState([
    ...BOOT('🐍  SNAKE LITE','Day 7'),
    L('  Player name:','prompt'),
  ]);
  const [input, setInput] = useState('');
  const [phase, setPhase] = useState('name');
  const [snake, setSnake] = useState(initSnake);
  const [food,  setFood]  = useState(initFood);
  const [score, setScore] = useState(0);
  const [name,  setName]  = useState('');
  const push = (...ls) => setLines(p=>[...p,...ls]);

  const showGrid = (sn, fd) => push(...drawGrid(sn, fd));

  const submit = () => {
    const cmd = input.trim().toUpperCase(); setInput('');
    if (phase==='name') {
      const n=input.trim()||'Player'; setName(n);
      push(L(`  > ${n}`,'input'), L(''), L(`  Control ${n}'s snake — eat 🍎 to grow!`,'success'),
        L('  W=Up  S=Down  A=Left  D=Right  Q=Quit','info'), L(''));
      showGrid(snake, food);
      push(L(`  Length: ${snake.length}  Score: 0`,'info'), L('  Move [W/A/S/D] or Q:','prompt'));
      setPhase('play'); return;
    }
    if (phase!=='play') return;
    push(L(`  > ${cmd}`,'input'));
    if (cmd==='Q') { push(L(`  ${name} quit! Score: ${score}`,'warn')); setPhase('done'); return; }
    if (!SN_DIR[cmd]) { push(L('  ❌ Use W A S D to move.','error'), L('  Move [W/A/S/D] or Q:','prompt')); return; }
    const [dx,dy]=SN_DIR[cmd];
    const [hx,hy]=snake[0];
    const nx=hx+dx, ny=hy+dy;
    if (nx<=0||nx>=SN_GRID-1||ny<=0||ny>=SN_GRID-1) {
      push(L('  💥 Hit the wall! Game over.','error'), L(`  Final score: ${score}`,'info'), L('  Play again? [Y/N]:','prompt'));
      setPhase('again'); return;
    }
    if (snake.find(s=>s[0]===nx&&s[1]===ny)) {
      push(L('  💥 Hit yourself! Game over.','error'), L(`  Final score: ${score}`,'info'), L('  Play again? [Y/N]:','prompt'));
      setPhase('again'); return;
    }
    const newHead=[nx,ny]; let nSnake, nfood=food, nScore=score;
    if (nx===food[0]&&ny===food[1]) {
      nSnake=[newHead,...snake]; nScore+=10; nfood=newFood(nSnake);
      push(L(`  🍎 Ate food! Score: ${nScore} | Length: ${nSnake.length}`,'success'));
      setFood(nfood);
    } else {
      nSnake=[newHead,...snake.slice(0,-1)];
    }
    setSnake(nSnake); setScore(nScore);
    showGrid(nSnake, nfood);
    push(L(`  Length: ${nSnake.length}  Score: ${nScore}`,'info'), L('  Move [W/A/S/D] or Q:','prompt'));
    if (nScore>=100) { push(L(`  🏆 ${name} reached 100 points! WINNER!`,'title'), L('  Play again? [Y/N]:','prompt')); setPhase('again'); }
  };

  if (phase==='again') {
    return <TerminalShell color={color} title="🐍 snake-lite.py — Terminal" lines={lines} input={input} onInput={v=>setInput(v)} onSubmit={()=>{ const c=input.trim(); setInput(''); if(c.toUpperCase()==='Y') onReset(); else { setLines(p=>[...p,L('  See you next mission! 🚀','success')]); setPhase('done'); } }} placeholder="Y or N" onReset={onReset} disabled={false} />;
  }
  return <TerminalShell color={color} title="🐍 snake-lite.py — Terminal" lines={lines} input={input} onInput={setInput} onSubmit={submit} placeholder={phase==='name'?'Enter name...':'W/A/S/D to move, Q to quit'} onReset={onReset} disabled={phase==='done'} />;
}
