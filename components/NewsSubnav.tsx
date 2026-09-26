import Link from 'next/link';
export default function NewsSubnav({active}:{active:'news'|'gallery'}){return <div className="news-subnav"><Link className={active==='news'?'active':''} href="/news">News & Events</Link><Link className={active==='gallery'?'active':''} href="/news/gallery">Gallery</Link></div>}
