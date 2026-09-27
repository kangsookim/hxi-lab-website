import PageHeader from '@/components/PageHeader';
import FundingSubnav from '@/components/FundingSubnav';
import { pastFunding } from '@/data/site';

export default function Page() {
  return <>
    <PageHeader
      eyebrow="Funding & Collaborators"
      title="Past research support"
      copy="Selected completed research funding that has helped shape HXIL's research program, collaborations, and infrastructure."
    />

    <section className="section">
      <div className="wrap">
        <FundingSubnav active="past" />

        <div className="section-title funding-section-title">
          <div>
            <div className="eyebrow">Funding archive</div>
            <h2>Selected past research support</h2>
            <p>Completed grants and research programs are shown in a compact archive, with a brief note on the work they supported.</p>
          </div>
        </div>

        <div className="funding-list past-funding-list">
          {pastFunding.map(f => <article key={`${f.title}-${f.period}-${f.agency}`}>
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
  </>;
}
