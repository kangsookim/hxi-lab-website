'use client';

import { useEffect, useState } from 'react';

const slides = [
  '/assets/home/hero/01-research.webp',
  '/assets/home/hero/02-collaboration.webp',
  '/assets/home/hero/03-presentation.webp',
  '/assets/home/hero/04-research-dissemination.webp',
  '/assets/home/hero/05-presentation-community.webp',
  '/assets/home/hero/06-lab.webp',
];

export default function HomeHero(){
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive(i => (i + 1) % slides.length), 8000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home-hero home-hero-split">
      <div className="home-hero-rotator" aria-hidden="true">
        {slides.map((src, i) => (
          <img key={src} className={`hero-slide hero-slide-${i + 1}${active === i ? ' is-active' : ''}`} src={src} alt="" />
        ))}
      </div>
      <div className="home-hero-blend" aria-hidden="true" />
      <div className="wrap home-hero-inner">
        <div className="home-hero-copy">
          <div className="eyebrow light">Human-X Interaction Lab · University of Calgary</div>
          <h1>Augmenting human <br/>capability through <em>XR + AI.</em></h1>
          <p>HXIL (pronounced "<em>hexyl</em>") designs and studies immersive, intelligent, and human-centered technologies that transform how people interact, learn, collaborate, and make decisions.</p>
          <div className="home-hero-dots" role="group" aria-label="Choose hero image">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={active === i ? 'is-active' : ''}
                aria-label={`Show hero image ${i + 1}`}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
