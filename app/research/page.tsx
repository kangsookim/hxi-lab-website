import PageHeader from '@/components/PageHeader';
import { applicationAreas, researchThemes } from '@/data/site';

export default function Page(){
  return <>
    <PageHeader
      eyebrow="Research"
      title="Human-centered research at the intersection of XR and AI"
      copy="We study how people perceive, interact, communicate, learn, and make decisions with emerging immersive and intelligent technologies."
    />

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

  </>;
}
