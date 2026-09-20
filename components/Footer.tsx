import Link from 'next/link';
export default function Footer(){ return <footer className="footer"><div className="container footer-grid">
  <div><div className="brand"><span className="mark">X</span><span>HUMAN-X INTERACTION LAB</span></div><p>University of Calgary · Schulich School of Engineering<br/>Electrical and Software Engineering · Calgary, Canada<br/>© 2021–2026 HXI Lab.</p></div>
  <div className="footer-links"><Link href="/research">Research</Link><Link href="/publications">Publications</Link><Link href="/team">Team</Link><Link href="/join">Join</Link></div>
</div></footer> }
