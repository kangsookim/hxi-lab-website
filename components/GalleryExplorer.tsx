'use client';
import {useEffect,useMemo,useState} from 'react';
import {galleryItems,galleryTags} from '@/data/gallery';
import type {GalleryItem,GalleryTag} from '@/data/gallery';

export default function GalleryExplorer(){
  const [tag,setTag]=useState<'All'|GalleryTag>('All');
  const [year,setYear]=useState('All');
  const [selected,setSelected]=useState<GalleryItem|null>(null);
  const [photoIndex,setPhotoIndex]=useState(0);

  const years=useMemo(()=>Array.from(new Set(galleryItems.map(g=>g.year))).sort((a,b)=>b-a),[]);
  const filtered=galleryItems.filter(g=>(tag==='All'||g.tags.includes(tag))&&(year==='All'||g.year===Number(year)));
  const photoCount=filtered.reduce((sum,g)=>sum+g.images.length,0);

  const open=(item:GalleryItem,index=0)=>{setSelected(item);setPhotoIndex(index)};
  const close=()=>setSelected(null);
  const previous=()=>selected&&setPhotoIndex(i=>(i-1+selected.images.length)%selected.images.length);
  const next=()=>selected&&setPhotoIndex(i=>(i+1)%selected.images.length);

  useEffect(()=>{
    const onKey=(e:KeyboardEvent)=>{
      if(!selected)return;
      if(e.key==='Escape')close();
      if(e.key==='ArrowLeft')previous();
      if(e.key==='ArrowRight')next();
    };
    window.addEventListener('keydown',onKey);
    return()=>window.removeEventListener('keydown',onKey);
  },[selected]);

  return <>
    <div className="gallery-controls">
      <div className="chips">
        <button className={tag==='All'?'active':''} onClick={()=>setTag('All')}>All</button>
        {galleryTags.map(t=><button key={t} className={tag===t?'active':''} onClick={()=>setTag(t)}>{t}</button>)}
      </div>
      <select value={year} onChange={e=>setYear(e.target.value)} aria-label="Filter gallery by year">
        <option>All</option>{years.map(y=><option key={y}>{y}</option>)}
      </select>
    </div>

    <div className="gallery-count">{filtered.length} events · {photoCount} photos</div>

    <div className="gallery-grid">
      {filtered.map((g,i)=><figure className="gallery-card gallery-event-card" key={g.date+g.title+i}>
        <div className={`gallery-event-media count-${Math.min(g.images.length,3)}`}>
          {g.images.slice(0,3).map((src,j)=><button className="gallery-image-button" key={src+j} onClick={()=>open(g,j)} aria-label={`Open ${g.title}, photo ${j+1}`}><img src={src} alt={`${g.title}${g.images.length>1?` — photo ${j+1}`:''}`}/>{j===2&&g.images.length>3?<span className="gallery-more">+{g.images.length-3}</span>:null}</button>)}
        </div>
        <figcaption>
          <div className="gallery-tag-row">{g.tags.map(t=><span className="gallery-tag" key={t}>{t}</span>)}</div>
          <strong>{g.title}</strong>
          <span className="gallery-date">{g.date}{g.images.length>1?` · ${g.images.length} photos`:''}</span>
        </figcaption>
      </figure>)}
    </div>

    {selected?<div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={close}>
      <button className="gallery-lightbox-close" onClick={close} aria-label="Close gallery">×</button>
      <div className="gallery-lightbox-panel" onClick={e=>e.stopPropagation()}>
        <div className="gallery-lightbox-stage">
          {selected.images.length>1?<button className="gallery-lightbox-arrow prev" onClick={previous} aria-label="Previous photo">‹</button>:null}
          <img src={selected.images[photoIndex]} alt={`${selected.title} — photo ${photoIndex+1}`}/>
          {selected.images.length>1?<button className="gallery-lightbox-arrow next" onClick={next} aria-label="Next photo">›</button>:null}
        </div>
        <div className="gallery-lightbox-copy">
          <div><div className="gallery-tag-row">{selected.tags.map(t=><span className="gallery-tag" key={t}>{t}</span>)}</div><h3>{selected.title}</h3><p>{selected.date}{selected.images.length>1?` · ${photoIndex+1} of ${selected.images.length}`:''}</p></div>
          {selected.images.length>1?<div className="gallery-lightbox-thumbs">{selected.images.map((src,i)=><button key={src+i} className={i===photoIndex?'active':''} onClick={()=>setPhotoIndex(i)}><img src={src} alt=""/></button>)}</div>:null}
        </div>
      </div>
    </div>:null}
  </>;
}
