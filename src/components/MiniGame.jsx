import { useEffect, useRef, useState } from 'react';
import { Day2Game } from './games/DayGames_A.jsx';
import { Day3Game } from './games/DayGames_A.jsx';
import { Day4Game } from './games/DayGames_A.jsx';
import { Day5Game } from './games/DayGames_B.jsx';
import { Day6Game } from './games/DayGames_B.jsx';
import { Day7Game } from './games/DayGames_B.jsx';
import { Day8Game } from './games/DayGames_C.jsx';
import { Day9Game } from './games/DayGames_C.jsx';
import { Day10Game } from './games/DayGames_C.jsx';
import { Day11Game } from './games/DayGames_C.jsx';
import { Day12Game } from './games/DayGames_C.jsx';

// ─────────────────────────────────────────────────────────────────────────────
//  Day 1 — ROBOT MAZE TERMINAL (exact match to robot-maze.py)
// ─────────────────────────────────────────────────────────────────────────────
const MAZE_TEMPLATE = [
  "###########",
  "#R   # G  #",
  "# # # ### #",
  "# #   #   #",
  "# ##### # #",
  "#       # #",
  "# ##### # #",
  "#   #     #",
  "###########",
];
const MOVES_LIMIT = 30;
const GOAL_X = 7, GOAL_Y = 1;
const START_X = 1, START_Y = 1;
const DIR  = { N:[0,-1], S:[0,1], E:[1,0], W:[-1,0] };
const DN   = { N:'North ↑', S:'South ↓', E:'East →', W:'West ←' };
const L    = (s, t='output') => ({ s, t });
const rnd  = (lo,hi) => Math.floor(Math.random()*(hi-lo+1))+lo;

function isWall(x,y){ const r=MAZE_TEMPLATE[y]; return !r||x<0||x>=r.length||r[x]==='#'; }
function renderMaze(rx,ry){ return MAZE_TEMPLATE.map((row,ry2)=>{ let l=''; for(let cx=0;cx<row.length;cx++){ const c=row[cx]; l+=cx===rx&&ry2===ry?'🤖':c==='G'?'🚪':c==='#'?'██':'  '; } return L('  '+l,'maze'); }); }
function dist(x,y){ return Math.abs(x-GOAL_X)+Math.abs(y-GOAL_Y); }

function TerminalRobotMaze({ color }) {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState('');
  const [robotX,setRobotX]=useState(START_X); const [robotY,setRobotY]=useState(START_Y);
  const [moves, setMoves] =useState(0);
  const [phase, setPhase] =useState('name');
  const [playerName,setPlayerName]=useState('');
  const [gameKey,setGameKey]=useState(0);
  const outRef=useRef(null); const inRef=useRef(null);
  const push=(...ls)=>setLines(p=>[...p,...ls]);

  useEffect(()=>{ if(outRef.current) outRef.current.scrollTop=outRef.current.scrollHeight; },[lines]);
  useEffect(()=>{ inRef.current?.focus(); },[phase,gameKey]);

  useEffect(()=>{
    setLines([L('════════════════════════════════════════════','border'),L('   🤖  ROBOT MAZE EXPLORER','title'),L('   ASHRI Tech Game Academy — Day 1','subtitle'),L('════════════════════════════════════════════','border'),L('')]);
    setPhase('name'); setRobotX(START_X); setRobotY(START_Y); setMoves(0); setInput('');
  },[gameKey]);

  const pushMaze=(rx,ry)=>push(...renderMaze(rx,ry));
  const pushStats=(rx,ry,m)=>push(L(''),L(`  📍 Position : (${rx}, ${ry})`,'info'),L(`  🎯 Goal     : (${GOAL_X}, ${GOAL_Y})  — ${dist(rx,ry)} steps away`,'info'),L(`  👣 Moves    : ${m} / ${MOVES_LIMIT}`,'info'),L(''));

  const submit=()=>{
    const cmd=input.trim(); setInput('');
    if(phase==='name'){
      const n=cmd||'Recruit'; setPlayerName(n);
      push(L(`  > ${n}`,'input'),L(''),L(`  Welcome, ${n}! You control ROBO-1.`,'success'),L('  Navigate the maze and find the exit portal 🚪'),L(''),L('  Controls:'),L('    N = Move North (up)    S = Move South (down)'),L('    E = Move East (right)  W = Move West (left)'),L('    MAP = Show maze  RESET = Restart  QUIT = Exit'),L(''));
      pushMaze(START_X,START_Y); pushStats(START_X,START_Y,0);
      push(L(`  > Move [N/S/E/W] or command:`,'prompt')); setPhase('playing'); return;
    }
    if(phase==='won'||phase==='lost'){ push(L(`  > ${cmd}`,'input')); if(cmd.toUpperCase()==='Y'||cmd.toUpperCase()==='RESET') setGameKey(k=>k+1); else push(L(`  Thanks for playing, ${playerName}! See you next mission 🚀`,'success')); return; }
    const up=cmd.toUpperCase();
    push(L(`  > ${cmd}`,'input'));
    if(up==='QUIT'){ push(L(`  Goodbye, ${playerName}! ROBO-1 will wait. 👋`)); setPhase('lost'); return; }
    if(up==='MAP'){ pushMaze(robotX,robotY); pushStats(robotX,robotY,moves); push(L(`  > Move [N/S/E/W] or command:`,'prompt')); return; }
    if(up==='RESET'){ setGameKey(k=>k+1); return; }
    if(!DIR[up]){ push(L(`  ❌ Unknown: '${cmd}'. Use N, S, E, W, MAP, RESET, or QUIT.`,'error'),L(''),L(`  > Move [N/S/E/W] or command:`,'prompt')); return; }
    const[dx,dy]=DIR[up]; const nx=robotX+dx,ny=robotY+dy;
    if(isWall(nx,ny)){ push(L(`  🚫 WALL BLOCKED! Can't move ${DN[up]}.`,'error'),L(''),L(`  > Move [N/S/E/W] or command:`,'prompt')); return; }
    const nm=moves+1; setRobotX(nx); setRobotY(ny); setMoves(nm);
    push(L(`  ✅ ROBO-1 moved ${DN[up]}!`,'success')); pushMaze(nx,ny);
    if(nx===GOAL_X&&ny===GOAL_Y){
      push(L('  '+'═'.repeat(41),'border'),L(`  🎉  MISSION COMPLETE, ${playerName}!`,'title'),L(`  🤖  ROBO-1 escaped the maze!`,'success'),L(`  👣  You used ${nm} moves.`,'info'),L(nm<=15?'  ⭐  SPEED RUNNER! Incredible efficiency!':nm<=22?'  🔥  Great navigation!':'  💪  You did it! Try again for a better score.','success'),L('  '+'═'.repeat(41),'border'),L(''),L('  Play again? [Y/N]:','prompt'));
      setPhase('won'); return;
    }
    pushStats(nx,ny,nm);
    if(nm>=MOVES_LIMIT){ push(L('  '+'═'.repeat(41),'border'),L('  ⏰  OUT OF MOVES! ROBO-1 is stuck.','error'),L('  💡  Type RESET to try again!','warn'),L('  '+'═'.repeat(41),'border'),L(''),L('  Play again? [Y/N]:','prompt')); setPhase('lost'); return; }
    push(L(`  > Move [N/S/E/W] or command:`,'prompt'));
  };

  const C={output:'rgba(200,230,255,0.75)',info:'rgba(100,200,255,0.9)',success:'#10b981',error:'#f87171',border:`${color}80`,title:color,subtitle:'rgba(255,255,255,0.5)',maze:'rgba(220,240,255,0.92)',input:'rgba(255,255,255,0.5)',prompt:`${color}cc`,warn:'#f59e0b'};
  const promptLabel=phase==='name'?'  Enter your name, Recruit:':null;

  return (
    <div style={{width:'100%',borderRadius:12,overflow:'hidden',border:`1px solid ${color}30`,background:'#060a12'}}>
      <div style={{padding:'8px 14px',background:'rgba(255,255,255,0.04)',borderBottom:`1px solid ${color}20`,display:'flex',gap:6,alignItems:'center'}}>
        {['#ff5f57','#febc2e','#28c840'].map((c,i)=><div key={i} style={{width:11,height:11,borderRadius:'50%',background:c}}/>)}
        <span style={{color:'rgba(255,255,255,0.3)',fontSize:11,marginLeft:8}}>🤖 robot-maze.py — Terminal</span>
        <button onClick={()=>setGameKey(k=>k+1)} style={{marginLeft:'auto',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.12)',borderRadius:6,color:'rgba(255,255,255,0.45)',fontSize:11,padding:'2px 10px',cursor:'pointer',fontFamily:'inherit'}}>↺ Reset</button>
      </div>
      <div ref={outRef} style={{height:380,overflowY:'auto',padding:'10px 0',fontFamily:'var(--font-code)',fontSize:13,lineHeight:1.65}}>
        {lines.map((l,i)=><div key={i} style={{color:C[l.t]||'rgba(255,255,255,0.7)',whiteSpace:'pre',paddingLeft:4,fontWeight:l.t==='title'?800:400}}>{l.s}</div>)}
        {promptLabel&&<div style={{color:C.prompt,paddingLeft:4,fontFamily:'var(--font-code)',fontSize:13}}>{promptLabel}</div>}
      </div>
      <div style={{padding:'8px 12px',borderTop:`1px solid ${color}20`,display:'flex',gap:8,alignItems:'center',background:'rgba(0,0,0,0.3)'}}>
        <span style={{color,fontFamily:'var(--font-code)',fontSize:13}}>{'>'}</span>
        <input ref={inRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&submit()} placeholder={phase==='name'?'Enter your name...':'N / S / E / W / MAP / RESET / QUIT'} style={{flex:1,background:'transparent',border:'none',outline:'none',color:'#e2e8f0',fontFamily:'var(--font-code)',fontSize:13,caretColor:color}} autoComplete="off" spellCheck={false}/>
        <button onClick={submit} style={{background:`${color}20`,border:`1px solid ${color}40`,borderRadius:6,color,fontSize:12,padding:'4px 12px',cursor:'pointer',fontFamily:'inherit',fontWeight:700}}>Enter ↵</button>
      </div>
    </div>
  );
}

// ── Game router ───────────────────────────────────────────────────────────────
const GAME_MAP = { 1:TerminalRobotMaze, 2:Day2Game, 3:Day3Game, 4:Day4Game, 5:Day5Game, 6:Day6Game, 7:Day7Game, 8:Day8Game, 9:Day9Game, 10:Day10Game, 11:Day11Game, 12:Day12Game };
const TITLES   = { 1:'robot-maze.py', 2:'coin-collector.py', 3:'battle-calculator.py', 4:'rock-paper-scissors.py', 5:'falling-blocks.py', 6:'reaction-game.py', 7:'snake-lite.py', 8:'meteor-dodge.py', 9:'window-builder.py — Pygame Canvas', 10:'flappy-bird.py — Pygame Canvas', 11:'shooter-core.py — Space Shooter Pt1', 12:'space-shooter.py — Full Game' };

// ── Main export ───────────────────────────────────────────────────────────────
export default function MiniGame({ dayId, dayColor, autoPlay = false }) {
  const GameComponent = GAME_MAP[dayId];
  const title         = TITLES[dayId] || `day${dayId}-game.py`;

  return (
    <div style={{ marginBottom: autoPlay ? 0 : 28 }}>
      {!autoPlay && (
        <div style={{ color:'#fff', fontWeight:800, fontSize:18, marginBottom:14 }}>🕹️ Mini Game</div>
      )}
      <div style={{ borderRadius:16, overflow:'hidden', border:`1px solid ${dayColor}25` }}>
        {/* Window chrome */}
        <div style={{ background:'rgba(255,255,255,0.04)', padding:'10px 18px', display:'flex', gap:8, alignItems:'center', borderBottom:`1px solid ${dayColor}15` }}>
          {['#ff5f57','#febc2e','#28c840'].map((c,i)=><div key={i} style={{width:12,height:12,borderRadius:'50%',background:c}}/>)}
          <span style={{ color:'rgba(255,255,255,0.35)', fontSize:12, marginLeft:8 }}>🕹️ {title}</span>
          {autoPlay && <span style={{ marginLeft:'auto', background:'rgba(16,185,129,0.15)', border:'1px solid rgba(16,185,129,0.3)', borderRadius:99, padding:'2px 10px', color:'#10b981', fontSize:10, fontWeight:800 }}>▶ LIVE</span>}
        </div>
        <div style={{ background:'#060a12', padding: dayId<=8 ? 0 : '20px' }}>
          {GameComponent
            ? <GameComponent color={dayColor} />
            : <div style={{padding:40,textAlign:'center',color:'rgba(255,255,255,0.4)'}}>Game coming soon!</div>
          }
        </div>
      </div>
    </div>
  );
}
