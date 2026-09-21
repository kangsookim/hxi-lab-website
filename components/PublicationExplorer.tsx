'use client';
import {useMemo,useState} from 'react';
import {publications} from '@/data/site';
const cats=['All','Journal','Conference','Workshop','Poster / EA','Book','Other'];
export default function PublicationExplorer(){
 const [cat,setCat]=useState('All'); const [year,setYear]=useState('All'); const [q,setQ]=useState('');
 const years=Array.from(new Set(publications.map(p=>p.year))).sort((a,b)=>b-a);
 const filtered=useMemo(()=>publications.filter(p=>(cat==='All'||p.category===cat)&&(year==='All'||p.year===Number(year))&&(`${p.title} ${p.authors} ${p.venue} ${p.subtype}`.toLowerCase().includes(q.toLowerCase()))),[cat,year,q]);
 return <>
 <div className="pub-controls"><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search title, author, venue…" aria-label="Search publications"/><div className="chips">{cats.map(c=><button onClick={()=>setCat(c)} className={cat===c?'active':''} key={c}>{c}</button>)}</div><select value={year} onChange={e=>setYear(e.target.value)} aria-label="Filter year"><option>All</option>{years.map(y=><option key={y}>{y}</option>)}</select></div>
 <div className="pub-count">{filtered.length} publication{filtered.length===1?'':'s'}</div>
 <div className="pub-list">{filtered.map((p,i)=><article className="pub-row" key={`${p.title}-${i}`}>
  <div className="pub-thumb">{p.image?<img src={p.image} alt=""/>:<span>{p.year}</span>}</div>
  <div className="pub-body"><div className="pub-meta"><span>{p.category}</span><span>{p.year}</span>{p.status&&<span className="status">{p.status}</span>}{p.award&&<span className="award">🏆 {p.award}</span>}</div><h3>{p.title}</h3><p className="authors">{p.authors}</p><p className="venue">{p.venue}</p>{p.doi&&<a className="text-link" href={p.doi} target="_blank">DOI ↗</a>}</div>
 </article>)}</div>
 </>}
