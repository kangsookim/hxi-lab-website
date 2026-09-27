import PageHeader from '@/components/PageHeader';
import GalleryExplorer from '@/components/GalleryExplorer';
import NewsSubnav from '@/components/NewsSubnav';

export default function Page(){
  return <>
    <PageHeader eyebrow="News" title="News & Media" copy="Research updates, lab life, visual highlights, and media coverage from HXIL."/>
    <section className="section"><div className="wrap"><NewsSubnav active="gallery"/><GalleryExplorer/></div></section>
  </>
}
