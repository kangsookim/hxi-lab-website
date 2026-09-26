'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const items = [
  ['Home', '/'],
  ['Research', '/research'],
  ['Projects', '/projects'],
  ['Team', '/team'],
  ['Publications', '/publications'],
  ['News', '/news'],
  ['Funding & Collaborators', '/funding-collaborators'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/'
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <img src="/assets/brand/hxil-horizontal-dark.svg" alt="HXIL" />
        </Link>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {items.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className={isActive(href) ? 'active' : undefined}
              aria-current={isActive(href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {name}
            </Link>
          ))}
          <Link
            className={`join-pill${isActive('/join') ? ' active' : ''}`}
            href="/join"
            aria-current={isActive('/join') ? 'page' : undefined}
            onClick={() => setOpen(false)}
          >
            Join Us
          </Link>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
