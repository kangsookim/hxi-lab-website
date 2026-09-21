import Link from 'next/link';
const items=[['Research','/research'],['Projects','/projects'],['Team','/team'],['Publications','/publications'],['News','/news'],['Funding & Collaborators','/funding-collaborators']];
export default function Nav(){return <header className="nav"><div className="wrap nav-inner"><Link className="brand" href="/"><img src="/assets/brand/hxi-logo-horizontal-white.svg" alt="HXI Lab — Human-X Interaction Lab"/></Link><nav>{items.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}<Link className="join-pill" href="/join">Join Us</Link></nav></div></header>}
