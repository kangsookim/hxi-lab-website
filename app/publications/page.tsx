import PageHeader from '@/components/PageHeader';
import PublicationExplorer from '@/components/PublicationExplorer';

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Research outputs"
        copy="Browse HXI Lab publications by type and year, or search across titles, authors, and venues. Journal editorials are grouped with Journal; posters, extended abstracts, and doctoral-consortium posters are grouped under Poster / EA while retaining their individual publication types."
      />
      <section className="section">
        <div className="wrap">
          <PublicationExplorer />
        </div>
      </section>
    </>
  );
}
