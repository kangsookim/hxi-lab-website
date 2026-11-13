'use client';
import {useEffect, useState} from 'react';

type Item = {kind:'Gallery'|'Press'; date:string; title:string; image:string; href:string; subtitle:string};

export default function InsideHXIL({items}:{items:Item[]}){
  const [index,setIndex] = useState(0);
  const [visible,setVisible] = useState(3);
  const [touchStart,setTouchStart] = useState<number|null>(null);
  useEffect(()=>{
    const update=()=>setVisible(window.innerWidth<=640?1:window.innerWidth<=950?2:3);
    update();window.addEventListener('resize',update);
    return()=>window.removeEventListener('resize',update);
  },[]);
  if(!items.length)return null;
  const move=(step:number)=>setIndex(i=>(i+step+items.length)%items.length);
  return <section className="home-inside-section">
    <div className="wrap">
      <div className="home-inside-head">
        <div><div className="eyebrow">Life &amp; Impact</div><h2>Inside HXIL</h2><p>A glimpse into our research, people, and impact.</p></div>
        <div className="home-inside-actions">
  <div className="home-inside-links">
    <a href="/news/gallery">View gallery →</a>
    <a href="/news/press">View press →</a>
  </div>

  <div className="home-inside-nav">
    <span className="home-inside-count">
      {index + 1} / {items.length}
    </span>
    <button
      type="button"
      onClick={() => move(-1)}
      aria-label="Previous highlight"
    >
      ‹
    </button>
    <button
      type="button"
      onClick={() => move(1)}
      aria-label="Next highlight"
    >
      ›
    </button>
  </div>
</div>
      </div>
      <div className="home-inside-grid" style={{gridTemplateColumns:`repeat(${visible},minmax(0,1fr))`}} onTouchStart={e=>setTouchStart(e.touches[0].clientX)} onTouchEnd={e=>{if(touchStart===null)return;const delta=e.changedTouches[0].clientX-touchStart;if(Math.abs(delta)>45)move(delta<0?1:-1);setTouchStart(null);}}>
        {Array.from({length:Math.min(visible,items.length)},(_,offset)=>{
          const item=items[(index+offset)%items.length];
          return <a className="home-inside-card" href={item.href} key={item.kind+item.title} target={item.kind==='Press'?'_blank':undefined} rel={item.kind==='Press'?'noopener noreferrer':undefined}>
            <div className="home-inside-image"><img src={item.image} alt={item.title} loading="lazy"/></div>
            <div className="home-inside-meta"><span>{item.kind}</span><time>{item.date}</time></div>
            <h3>{item.title}</h3>
          </a>;
        })}
      </div>
    </div>
  </section>;
}
