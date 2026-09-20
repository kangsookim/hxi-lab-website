import Link from 'next/link';

const links = [
  ['Research','/research'],['Projects','/projects'],['Team','/team'],['Publications','/publications'],['News','/news']
];
export default function Nav(){
  return <header className="nav"><div className="container nav-inner">
    <Link href="/" className="brand"><span className="mark">X</span><span>HXI LAB</span></Link>
    <nav className="nav-links">{links.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}</nav>
    <Link className="cta-small" href="/join">Join us</Link>
  </div></header>
}
