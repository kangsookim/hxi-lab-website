import Link from 'next/link';
import { publications } from '@/data/publications';
import { newsItems } from '@/data/news';

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
  return <>
    <section className="home-hero home-hero-plain">
      <div className="wrap home-hero-inner">
        <div className="home-hero-copy">
          <div className="eyebrow light">Human-X Interaction Lab · University of Calgary</div>
          <h1>Augmenting human capability through <em>XR + AI.</em></h1>
          <p>We design and study immersive, intelligent, and human-centered technologies that transform how people interact, learn, collaborate, and make decisions.</p>
          <div className="hero-actions"><Link className="btn primary" href="/research">Explore Our Research →</Link><Link className="btn ghost" href="/publications">View Publications</Link></div>
        </div>
      </div>
    </section>

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

    <section className="home-join"><div className="wrap"><div><div className="eyebrow light">Join HXIL</div><h2>Work with us to build a more human future.</h2><p>We welcome students, researchers, and collaborators who want to explore what X can become—and what it should mean for people.</p></div><Link className="btn primary" href="/join">Explore Opportunities →</Link></div></section>
  </>;
}
