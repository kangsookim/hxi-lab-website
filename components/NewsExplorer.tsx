'use client';
import {useMemo,useState} from 'react';
import {newsItems} from '@/data/news';

const categories = ['All','Research','Awards','People','Talks & Visits','Events'] as const;
export default function NewsExplorer(){
  const [category,setCategory]=useState<(typeof categories)[number]>('All');
  const [year,setYear]=useState('All');
  const years=useMemo(()=>Array.from(new Set(newsItems.map(n=>n.year))).sort((a,b)=>b-a),[]);
  const filtered=newsItems.filter(n=>(category==='All'||n.category===category)&&(year==='All'||n.year===Number(year)));
  const groups=years.map(y=>({year:y,items:filtered.filter(n=>n.year===y)})).filter(g=>g.items.length);
  return <>
    <div className="news-controls">
      <div className="chips">{categories.map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div>
      <select value={year} onChange={e=>setYear(e.target.value)} aria-label="Filter news by year"><option>All</option>{years.map(y=><option key={y}>{y}</option>)}</select>
    </div>
    <div className="news-count">{filtered.length} updates</div>
    <div className="news-year-groups">{groups.map(g=><section className="news-year-group" key={g.year}>
      <div className="news-year-heading"><h2>{g.year}</h2><span>{g.items.length} updates</span></div>
      <div className="news-list">{g.items.map((n,i)=><article className="news-item" key={n.date+n.title+i}>
        <div><span className="news-tag">{n.category}</span><time>{n.date}</time></div><h3>{n.title}</h3>
      </article>)}</div>
    </section>)}</div>
  </>;
}
