import PageHeader from '@/components/PageHeader';
import GalleryExplorer from '@/components/GalleryExplorer';
import NewsSubnav from '@/components/NewsSubnav';
export default function Page(){return <><PageHeader eyebrow="News" title="Gallery" copy="Research, conferences, presentations, visitors, celebrations, and everyday moments from HXIL."/><section className="section"><div className="wrap"><NewsSubnav active="gallery"/><GalleryExplorer/></div></section></>}
