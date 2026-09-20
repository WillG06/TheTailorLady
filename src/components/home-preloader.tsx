import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
export function HomePreloader() {
  const [count,setCount]=useState(0); const [done,setDone]=useState(false); const reduce=useReducedMotion();
  useEffect(()=>{ if(reduce){setDone(true);return;} const seen=sessionStorage.getItem("ttl-intro"); if(seen){setDone(true);return;} const id=window.setInterval(()=>setCount(v=>{if(v>=100){window.clearInterval(id); window.setTimeout(()=>{sessionStorage.setItem("ttl-intro","1");setDone(true)},650);return 100;} return Math.min(100,v+2)}),22); return()=>window.clearInterval(id)},[reduce]);
  if (reduce && done) return null;
  return <AnimatePresence>{!done && <motion.div className="fixed inset-0 z-[100] flex text-primary-foreground" exit={{pointerEvents:"none"}}>
    <motion.div className="absolute inset-y-0 left-0 w-1/2 bg-ink" exit={{x:"-100%"}} transition={{duration:1,ease:[.76,0,.24,1]}}/><motion.div className="absolute inset-y-0 right-0 w-1/2 bg-ink" exit={{x:"100%"}} transition={{duration:1,ease:[.76,0,.24,1]}}/>
    <div className="relative z-10 m-auto text-center">{count<100?<p className="font-display text-6xl tabular-nums md:text-8xl" aria-live="polite">{count}<span className="text-2xl">%</span></p>:<motion.div initial={{opacity:0}} animate={{opacity:1}} className="flex items-center gap-5 font-display text-3xl md:text-5xl"><span>The Tailor Lady</span><span className="h-16 w-px bg-accent" aria-hidden="true"/><span className="text-lg font-sans uppercase tracking-[.2em]">Tailors</span></motion.div>}</div>
  </motion.div>}</AnimatePresence>;
}
