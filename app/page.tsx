import Link from 'next/link';
import { publications } from '@/data/publications';
import { newsItems } from '@/data/news';
import HomeHero from '@/components/HomeHero';
import InsideHXIL from '@/components/InsideHXIL';
import {galleryItems} from '@/data/gallery';
import {pressItems} from '@/data/press';

function shortVenue(venue:string){
  return venue
    .replace('Proceedings of the ','')
    .replace('Proceedings of ','')
    .replace(/, 2026.*$/,'')
    .replace(/, 2025.*$/,'');
}

export default function Home(){
  const latestPubs = publications.slice(0,4);
  const latest = newsItems.slice(0,4);
  const highlights = [
    ...[...galleryItems].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4).map(g=>({kind:'Gallery' as const,date:g.date,title:g.title,image:g.images[0],href:`/news/gallery?event=${encodeURIComponent(g.date+'|'+g.title)}`,subtitle:g.tags.join(' · ')})),
    ...[...pressItems].sort((a,b)=>new Date(b.date).getTime()-new Date(a.date).getTime()).slice(0,2).map(p=>({kind:'Press' as const,date:new Date(p.date).toISOString().slice(0,10),title:p.title,image:p.image,href:p.url,subtitle:p.source}))
  ].sort((a,b)=>b.date.localeCompare(a.date));
  return <>
    <HomeHero />

    <section className="home-section home-updates home-updates-minimal">
      <div className="wrap home-update-grid">
        <div>
          <div className="home-section-head compact"><div><div className="eyebrow">Publications</div><h2>Latest Publications</h2><p>Recent papers from our lab.</p></div><Link href="/publications" className="text-link">View all publications →</Link></div>
          <div className="home-list">{latestPubs.map(p=><div className="home-list-row" key={p.year+p.title}><div className="home-year">{p.year}</div><div className="home-list-copy"><strong>{p.title}</strong><span>{shortVenue(p.venue)}</span></div></div>)}</div>
        </div>
        <div>
          <div className="home-section-head compact"><div><div className="eyebrow">News</div><h2>Latest News</h2><p>Updates from our lab.</p></div><Link href="/news" className="text-link">View all news →</Link></div>
          <div className="home-list">{latest.map(n=><div className="home-list-row news" key={n.date+n.title}><time>{new Date(n.date+'T00:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}).toUpperCase()}</time><div className="home-list-copy"><strong>{n.title}</strong><span>{n.category}</span></div></div>)}</div>
        </div>
      </div>
    </section>

    <InsideHXIL items={highlights} />

    <section className="home-join"><div className="wrap"><div><div className="eyebrow light">Join HXIL</div><h2>Work with us to build a more human future.</h2><p>We welcome students, researchers, and collaborators who want to explore what X can become—and what it should mean for people.</p></div><Link className="btn primary" href="/join">Explore Opportunities →</Link></div></section>
  </>;
}
