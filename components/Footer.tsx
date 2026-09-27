import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link href="/" className="footer-brand">
            <img
              src="/assets/brand/hxil-horizontal-dark.svg"
              alt="HXIL — Human-X Interaction Lab"
            />
          </Link>

          <p>
            Department of Electrical and Software Engineering
            <br />
            Schulich School of Engineering
          </p>

          <a
            href="https://www.ucalgary.ca/"
            className="footer-ucalgary"
            target="_blank"
            rel="noreferrer"
            aria-label="University of Calgary"
          >
            <img
              src="/assets/brand/ucalgary-horizontal-white.png"
              alt="University of Calgary"
            />
          </a>
        </div>

        <div>
          <b>Explore</b>
          <Link href="/research">Research</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/publications">Publications</Link>
        </div>

        <div>
          <b>Connect</b>
          <Link href="/team">Team</Link>
          <Link href="/news">News</Link>
          <Link href="/join">Join Us</Link>
        </div>

        <div>
          <b>Contact</b>
          <p>
            ICT 247 · 2500 University Drive NW
            <br />
            Calgary, AB T2N 1N4 · Canada
          </p>
          <a href="mailto:kangsoo.kim@ucalgary.ca">
            kangsoo.kim@ucalgary.ca
          </a>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© 2021–2026 HXIL.</span>
        <span>Designing immersive and intelligent technologies for people.</span>
      </div>
    </footer>
  );
}
