import PageHero from '@/components/PageHero';
import { news } from '@/data/site';
export default function News(){ return <main><PageHero kicker="News" title="What’s happening at HXI." copy="Recent publications, new members, awards, conference activity, and lab milestones."/><section className="section"><div className="container"><div className="news-list">{news.map(n=><div className="news-row" key={n.date+n.text}><div className="date">{n.date}</div><div className="category">{n.category}</div><div className="text">{n.text}</div></div>)}</div></div></section></main> }
