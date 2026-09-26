import Link from 'next/link';
import { projects } from '@/data/site';
import { publications } from '@/data/publications';
import { newsItems } from '@/data/news';

const researchAreas = [
  { title:'Pervasive XR', text:'Ubiquitous and context-aware XR technologies', image:'/assets/research/Research01.jpeg' },
  { title:'Perception & Cognition', text:'Understanding human perception, cognition, presence, and behavior', image:'/assets/research/Research02.jpeg' },
  { title:'Social Interaction', text:'Human-human and human-AI interaction in immersive environments', image:'/assets/research/App02.jpeg' },
  { title:'Multimodal Interfaces', text:'Natural interaction through gaze, voice, gesture, and physiology', image:'/assets/research/Research05.jpeg' },
  { title:'Augmented Human', text:'Enhancing human capabilities while preserving agency and control', image:'/assets/research/Research03.jpeg' },
  { title:'Metaverse & XR Twin', text:'Virtual worlds and digital twins for real-world impact', image:'/assets/research/Research06.jpeg' },
];

const xLabels = ['Human × XR','Human × AI','Human × Agents','Human × Healthcare','Human × Society'];

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
    <section className="home-hero">
      <div className="home-hero-media"><img src="/assets/research/Research01.jpeg" alt="Immersive XR interaction"/><div className="home-hero-shade"/></div>
      <div className="wrap home-hero-inner">
        <div className="home-hero-copy">
          <div className="eyebrow light">Human-X Interaction Lab · University of Calgary</div>
          <h1>Augmenting human capability through <em>XR + AI.</em></h1>
          <p>We design and study immersive, intelligent, and human-centered technologies that transform how people interact, learn, collaborate, and make decisions.</p>
          <div className="hero-actions"><Link className="btn primary" href="/research">Explore Our Research →</Link><Link className="btn ghost" href="/team">Meet the Team</Link></div>
        </div>
        <div className="home-x-menu" aria-label="Human-X research dimensions">
          {xLabels.map((x,i)=><div className={i===0?'active':''} key={x}>{x}</div>)}
        </div>
        <div className="home-hero-tagline">X is the variable. Human is the constant.</div>
      </div>
    </section>

    <section className="home-section home-research">
      <div className="wrap">
        <div className="home-section-head"><div><div className="eyebrow">Research Areas</div><h2>Our Research</h2><p>We explore the intersection of extended reality, artificial intelligence, and human-centered computing to augment human capability.</p></div><Link href="/research" className="text-link">View all research areas →</Link></div>
        <div className="home-research-grid">{researchAreas.map(r=><Link href="/research" className="home-research-card" key={r.title}><img src={r.image} alt=""/><h3>{r.title}</h3><p>{r.text}</p><span>→</span></Link>)}</div>
      </div>
    </section>

    <section className="home-section home-projects">
      <div className="wrap">
        <div className="home-section-head inverted"><div><div className="eyebrow light">Featured Projects</div><h2>Featured Projects</h2><p>From healthcare to social XR, our research creates real-world impact.</p></div><Link href="/projects" className="text-link light-link">View all projects →</Link></div>
        <div className="home-project-grid">{projects.slice(0,3).map(p=><Link href="/projects" className="home-project-card" key={p.title}><div className="home-project-image"><img src={p.image} alt=""/></div><div className="home-project-overlay"><small>{p.label}</small><h3>{p.title}</h3><p>{p.text}</p><span className="home-arrow">→</span></div></Link>)}</div>
      </div>
    </section>

    <section className="home-section home-updates">
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
