import PageHeader from '@/components/PageHeader';
import FundingSubnav from '@/components/FundingSubnav';
import { collaboratorLogos, funding, fundingAgencyLogos } from '@/data/site';

export default function Page() {
  return <>
    <PageHeader
      eyebrow="Funding & Collaborators"
      title="Research enabled by partnership"
      copy="HXIL research is supported by competitive funding and strengthened by collaborations across healthcare, engineering, computing, industry, and international research communities."
    />

    <section className="section">
      <div className="wrap">
        <FundingSubnav active="current" />

        <div className="section-title funding-section-title">
          <div>
            <div className="eyebrow">Funding</div>
            <h2>Current research support</h2>
            <p>Selected active research programs supporting HXIL's work across XR, AI, healthcare, social interaction, and digital twins.</p>
          </div>
        </div>

        <div className="funding-list funding-list-editorial">
          {funding.map(f => <article key={`${f.title}-${f.period}-${f.agency}`}>
            <div className="fund-year">{f.period}</div>
            <div className="funding-copy">
              <h3>{f.title}</h3>
              <p className="fund-agency">{f.agency}</p>
              <p className="fund-description">{f.description}</p>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section soft">
      <div className="wrap">
        <div className="section-title">
          <div>
            <div className="eyebrow">Funding agencies</div>
            <h2>Organizations supporting our research</h2>
            <p>We gratefully acknowledge the organizations that have supported HXIL research since 2021.</p>
          </div>
        </div>
        <div className="logo-wall funding-agency-wall">
          {fundingAgencyLogos.map(a => (
            <div key={a.name} className={!a.image ? 'logo-card logo-card-pending' : 'logo-card'}>
              {a.image ? (
                <img src={a.image} alt={`${a.name} logo`} />
              ) : (
                <div className="logo-placeholder">
                  <strong>{a.name}</strong>
                  <span>Logo to add</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="wrap">
        <div className="section-title">
          <div>
            <div className="eyebrow">Research collaborators</div>
            <h2>Working across institutions and disciplines</h2>
            <p>We collaborate with researchers and organizations across engineering, computing, healthcare, and the social sciences.</p>
          </div>
        </div>
        <div className="logo-wall collaborator-wall">
          {collaboratorLogos.map(l => (
            <div key={l.name} className="logo-card">
              <a
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${l.name}`}
                className="collaborator-link"
              >
                <img src={l.image} alt={`${l.name} logo`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>;
}
