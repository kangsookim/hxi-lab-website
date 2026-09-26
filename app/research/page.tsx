import Link from 'next/link';
import { applicationAreas, projects, researchThemes } from '@/data/site';

export default function Page(){
  return <>
    <section className="research-hero">
      <div className="research-hero-media"><img src="/assets/research/concepts/research-hero.webp" alt="Human-centered XR and AI research"/><div className="research-hero-shade"/></div>
      <div className="wrap research-hero-content">
        <div className="eyebrow light">Research</div>
        <h1>Human-centered research at the intersection of XR and AI</h1>
        <p>We study how people perceive, interact, communicate, learn, and make decisions with emerging immersive and intelligent technologies.</p>
      </div>
    </section>

    <section className="section research-intro-section">
      <div className="wrap research-intro">
        <div>
          <div className="eyebrow">Human × X</div>
          <h2>Our focus remains human as technology evolves.</h2>
        </div>
        <div className="research-intro-copy">
          <p>At HXIL, “X” represents the evolving counterpart of human interaction—from extended reality and intelligent agents to machines, environments, and other people.</p>
          <p className="research-principle">X is the variable. Human is the constant.</p>
          <p>Across these changing forms of interaction, we design and study technologies that augment human capability while preserving human judgment, agency, and experience.</p>
        </div>
      </div>
    </section>

    <section className="section soft research-themes-section">
      <div className="wrap">
        <div className="section-title research-section-title">
          <div><div className="eyebrow">Research Themes</div><h2>What we study</h2><p>Six interconnected themes define our research across immersive computing, human-AI interaction, and intelligent environments.</p></div>
        </div>
        <div className="research-theme-grid">
          {researchThemes.map((r,i)=><article className="research-theme-card" key={r.title}>
            <div className="research-theme-image"><img src={r.image} alt=""/><span>0{i+1}</span></div>
            <div className="research-theme-copy"><small>{r.kicker}</small><h3>{r.title}</h3><p>{r.text}</p></div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section research-applications-section">
      <div className="wrap">
        <div className="section-title research-section-title"><div><div className="eyebrow">Application Domains</div><h2>Where our research creates impact</h2><p>We translate foundational interaction research into technologies for people, teams, and complex real-world settings.</p></div></div>
        <div className="research-domain-grid">{applicationAreas.map((a,i)=><article key={a.title}><span>0{i+1}</span><h3>{a.title}</h3><p>{a.text}</p></article>)}</div>
      </div>
    </section>

    <section className="section research-action-section">
      <div className="wrap">
        <div className="section-title research-section-title inverted"><div><div className="eyebrow light">Research in Action</div><h2>Ideas connected to real problems</h2><p>Selected projects show how our research themes come together across healthcare, social interaction, training, and intelligent environments.</p></div><Link href="/projects" className="text-link light-link">View all projects →</Link></div>
        <div className="research-action-grid">{projects.slice(0,4).map(p=><Link href="/projects" className="research-action-card" key={p.title}><img src={p.image} alt=""/><div><small>{p.label}</small><h3>{p.title}</h3><p>{p.text}</p></div></Link>)}</div>
      </div>
    </section>
  </>;
}
