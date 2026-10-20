import { useState } from 'react'
import projects from '../data/projects.json'

function Row({ p, reveal, delay }) {
  return (
    <a
      className={'row' + (reveal ? ' reveal' : '')}
      href={p.live || p.repo}
      target="_blank"
      rel="noopener noreferrer"
      style={delay != null ? { animationDelay: `${delay}ms` } : undefined}
    >
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <div className="tags">{p.tags?.map((t) => <em key={t}>{t}</em>)}</div>
    </a>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(false)
  // Projects marked "featured": true in projects.json are always visible.
  // If none are marked, the first three are used.
  const flagged = projects.filter((p) => p.featured)
  const featured = flagged.length ? flagged : projects.slice(0, 3)
  const rest = projects.filter((p) => !featured.includes(p))

  return (
    <section id="projects">
      <div className="wrap">
        <h2 className="reveal">Selected projects</h2>
        <p className="lead reveal">A few things I’ve shipped. Each one links to its source code.</p>
        <div className="log">
          {featured.map((p) => <Row key={p.title} p={p} reveal />)}
          {rest.length > 0 && (
            <div className={'more' + (open ? ' open' : '')}>
              <div>
                {rest.map((p, i) => <Row key={p.title} p={p} delay={i * 70} />)}
              </div>
            </div>
          )}
        </div>
        {rest.length > 0 && (
          <div className="more-wrap">
            <button className="btn ghost" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? 'Show fewer projects' : `See ${rest.length} more projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
