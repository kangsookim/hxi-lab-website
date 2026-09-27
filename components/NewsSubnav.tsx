import Link from 'next/link';

export default function NewsSubnav({active}:{active:'news'|'gallery'|'press'}){
  return <div className="news-subnav">
    <Link className={active==='news'?'active':''} href="/news">News</Link>
    <Link className={active==='gallery'?'active':''} href="/news/gallery">Gallery</Link>
    <Link className={active==='press'?'active':''} href="/news/press">Press</Link>
  </div>
}
