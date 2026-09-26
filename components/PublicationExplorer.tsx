'use client';

import { useMemo, useState } from 'react';
import { publications, theses } from '@/data/publications';

const cats = ['All', 'Journal', 'Conference', 'Workshop', 'Poster / EA', 'Book', 'Other'];

export default function PublicationExplorer() {
  const [cat, setCat] = useState('All');
  const [year, setYear] = useState('All');
  const [q, setQ] = useState('');

  const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return publications.filter((p) =>
      (cat === 'All' || p.category === cat) &&
      (year === 'All' || p.year === Number(year)) &&
      (!query || `${p.title} ${p.authors} ${p.venue} ${p.subtype}`.toLowerCase().includes(query))
    );
  }, [cat, year, q]);

  const grouped = useMemo(() => {
    const map = new Map<number, typeof filtered>();
    for (const p of filtered) {
      const list = map.get(p.year) ?? [];
      list.push(p);
      map.set(p.year, list);
    }
    return Array.from(map.entries()).sort((a, b) => b[0] - a[0]);
  }, [filtered]);

  return (
    <>
      <div className="pub-controls">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search title, author, venue…"
          aria-label="Search publications"
        />
        <div className="chips">
          {cats.map((c) => (
            <button onClick={() => setCat(c)} className={cat === c ? 'active' : ''} key={c}>
              {c}
            </button>
          ))}
        </div>
        <select value={year} onChange={(e) => setYear(e.target.value)} aria-label="Filter year">
          <option>All</option>
          {years.map((y) => <option key={y}>{y}</option>)}
        </select>
      </div>

      <div className="pub-count">
        {filtered.length} publication{filtered.length === 1 ? '' : 's'}
      </div>

      <div className="pub-year-groups">
        {grouped.map(([groupYear, pubs]) => (
          <section className="pub-year-group" key={groupYear}>
            <div className="pub-year-heading">
              <h2>{groupYear}</h2>
              <span>{pubs.length} publication{pubs.length === 1 ? '' : 's'}</span>
            </div>

            <div className="pub-list">
              {pubs.map((p, i) => (
                <article className="pub-row" key={`${p.title}-${i}`}>
                  <div className="pub-thumb">
                    {p.image ? <img src={p.image} alt="" /> : <span>{p.year}</span>}
                  </div>

                  <div className="pub-body">
                    <div className="pub-meta">
                      <span>{p.subtype}</span>
                      {p.status && <span className="status">{p.status}</span>}
                      {p.award && <span className="award">🏆 {p.award}</span>}
                    </div>
                    <h3>{p.title}</h3>
                    <p className="authors">{p.authors}</p>
                    <p className="venue">{p.venue}</p>
                    {p.doi && <a className="text-link" href={p.doi} target="_blank" rel="noreferrer">DOI ↗</a>}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {cat === 'All' && year === 'All' && !q.trim() && (
        <section className="thesis-section">
          <div className="pub-year-heading">
            <h2>Theses</h2>
            <span>{theses.length} MSc theses</span>
          </div>
          <div className="thesis-list">
            {theses.map((t) => (
              <article key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.author} · {t.degree} · {t.date}</p>
                {'note' in t && t.note && <small>{t.note}</small>}
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
