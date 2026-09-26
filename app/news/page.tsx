import PageHeader from '@/components/PageHeader';
import NewsExplorer from '@/components/NewsExplorer';
import NewsSubnav from '@/components/NewsSubnav';
export default function Page(){return <><PageHeader eyebrow="News" title="News & events" copy="Research updates, awards, people, talks, visits, conferences, and milestones from HXIL."/><section className="section"><div className="wrap"><NewsSubnav active="news"/><NewsExplorer/></div></section></>}
