'use client';
import {useMemo,useState} from 'react';
import {galleryItems} from '@/data/gallery';
const categories=['All','Conferences','Presentations','Events','Visitors','Lab Life'] as const;
export default function GalleryExplorer(){
 const [category,setCategory]=useState<(typeof categories)[number]>('All');
 const [year,setYear]=useState('All');
 const years=useMemo(()=>Array.from(new Set(galleryItems.map(g=>g.year))).sort((a,b)=>b-a),[]);
 const filtered=galleryItems.filter(g=>(category==='All'||g.category===category)&&(year==='All'||g.year===Number(year)));
 return <>
   <div className="gallery-controls"><div className="chips">{categories.map(c=><button key={c} className={category===c?'active':''} onClick={()=>setCategory(c)}>{c}</button>)}</div>
   <select value={year} onChange={e=>setYear(e.target.value)} aria-label="Filter gallery by year"><option>All</option>{years.map(y=><option key={y}>{y}</option>)}</select></div>
   <div className="gallery-count">{filtered.length} photos</div>
   <div className="gallery-grid">{filtered.map((g,i)=><figure className="gallery-card" key={g.date+g.title+i}><img src={g.image} alt={g.title}/><figcaption><span>{g.category} · {g.date}</span><strong>{g.title}</strong></figcaption></figure>)}</div>
 </>;
}
