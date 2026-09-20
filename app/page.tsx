import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { researchAreas, projects, news } from '@/data/site';

export default function Home(){ return <main>
  <section className="hero"><div className="container hero-grid">
    <div><div className="eyebrow">University of Calgary · Human-X Interaction Lab</div><h1>Augmenting human capability <span className="gradient-text">through XR + AI.</span></h1><p className="lead">We design immersive and intelligent technologies that enhance how people perceive, interact, learn, collaborate, and make decisions—while preserving human judgment and agency.</p><div className="actions"><Link className="btn btn-primary" href="/research">Explore our research <ArrowRight size={16}/></Link><Link className="btn btn-secondary" href="/team">Meet the team</Link></div></div>
    <div className="hero-card"><div className="eyebrow">What does X mean?</div><div className="xword">HUMAN <span className="x">×</span> XR</div><div className="xword">HUMAN <span className="x">×</span> AI</div><div className="xword">HUMAN <span className="x">×</span> AGENTS</div><p>HXI explores the changing relationships between humans, intelligent systems, virtual environments, and one another.</p><div className="orbit"/></div>
  </div></section>

  <section className="section"><div className="container"><div className="section-kicker">Research</div><h2 className="section-title">Human-centred convergence research.</h2><p className="section-intro">Our work sits at the intersection of immersive computing, artificial intelligence, human factors, and real-world impact.</p><div className="grid-3">{researchAreas.map(r=><div className="card" key={r.title}><div className="iconbox">{r.icon}</div><div className="sub">{r.subtitle}</div><h3>{r.title}</h3><p>{r.text}</p></div>)}</div></div></section>

  <section className="section"><div className="container"><div className="section-kicker">Featured projects</div><h2 className="section-title">Research that moves between lab and world.</h2><div className="grid-3">{projects.slice(0,6).map(p=><article className="card project-card" key={p.title}><div><span className="tag">{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p></div><div className="meta">{p.meta}</div></article>)}</div><div style={{marginTop:28}}><Link className="btn btn-secondary" href="/projects">View all projects <ArrowRight size={16}/></Link></div></div></section>

  <section className="section"><div className="container split"><div><div className="section-kicker">Latest</div><h2 className="section-title">News from HXI.</h2><p className="section-intro">Publications, people, awards, events, and lab milestones.</p><Link className="btn btn-secondary" href="/news">All news <ArrowRight size={16}/></Link></div><div className="news-list">{news.slice(0,5).map(n=><div className="news-row" key={n.date+n.text}><div className="date">{n.date}</div><div className="category">{n.category}</div><div className="text">{n.text}</div></div>)}</div></div></section>

  <section className="section"><div className="container"><div className="section-kicker">Join HXI</div><h2 className="section-title">Build the next generation of human-centred XR + AI.</h2><p className="section-intro">We welcome motivated students and researchers interested in immersive technology, intelligent agents, human-AI interaction, healthcare, and socially meaningful computing.</p><Link className="btn btn-primary" href="/join">Opportunities at HXI <ArrowRight size={16}/></Link></div></section>
</main> }
