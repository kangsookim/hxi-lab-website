import PageHeader from '@/components/PageHeader';
import GalleryExplorer from '@/components/GalleryExplorer';
import NewsSubnav from '@/components/NewsSubnav';
export default function Page(){return <><PageHeader eyebrow="News" title="Gallery" copy="A visual history of HXIL — conferences, presentations, visitors, celebrations, events, and everyday lab life."/><section className="section"><div className="wrap"><NewsSubnav active="gallery"/><GalleryExplorer/></div></section></>}
