import { useEffect } from 'react'
import profile from './data/profile.json'
import Sky from './components/Sky.jsx'
import Projects from './components/Projects.jsx'

// Pointer parallax, scroll progress, spotlight glow, reveal-on-scroll and active nav link.
function useSpace() {
  useEffect(() => {
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hero = document.querySelector('.system')
    const neb = document.querySelector('.nebula')
    const bar = document.querySelector('.progress')

    const onMove = (e) => {
      const el = e.target.closest?.('.row,.facts')
      if (el) {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--sx', e.clientX - r.left + 'px')
        el.style.setProperty('--sy2', e.clientY - r.top + 'px')
      }
      if (still) return
      const px = e.clientX / window.innerWidth - 0.5
      const py = e.clientY / window.innerHeight - 0.5
      neb.style.setProperty('--mx2', px * 40)
      hero.style.setProperty('--px', px)
      hero.style.setProperty('--py', py)
    }
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      bar.style.transform = `scaleX(${h > 0 ? Math.min(1, window.scrollY / h) : 0})`
      if (!still) {
        neb.style.setProperty('--sy', window.scrollY * 0.04)
        hero.style.setProperty('--sy', window.scrollY)
      }
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const reveal = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); reveal.unobserve(e.target) } }),
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el, i) => {
      el.style.transitionDelay = (i % 5) * 60 + 'ms'
      reveal.observe(el)
    })

    const links = document.querySelectorAll('nav a')
    const spy = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle('on', a.getAttribute('href') === '#' + e.target.id))
      }),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => spy.observe(s))

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', onScroll)
      reveal.disconnect(); spy.disconnect()
    }
  }, [])
}

export default function App() {
  useSpace()
  const { name, github, headline, intro, about, facts, stack, contact } = profile

  return (
    <>
      <Sky />
      <div className="nebula" aria-hidden="true">
        <i className="blob b1" /><i className="blob b2" /><i className="blob b3" />
      </div>

      <header>
        <div className="wrap">
          <a className="logo" href="#top"><i />{name}</a>
          <nav aria-label="Main">
            <a href="#about">About</a><a href="#projects">Projects</a>
            <a href="#stack">Stack</a><a href="#contact">Contact</a>
          </nav>
        </div>
        <div className="progress" />
      </header>

      <main id="top">
        <div className="hero">
          <div className="wrap">
            <div>
              <h1>{headline}</h1>
              <p>{intro}</p>
              <div className="cta">
                <a className="btn main" href="#projects">See my work</a>
                <a className="btn ghost" href={github} target="_blank" rel="noopener noreferrer">GitHub profile</a>
              </div>
            </div>
            <div className="system" aria-hidden="true">
              <div className="tilt">
                <div className="ring r3"><b /></div>
                <div className="ring r2"><b /></div>
                <div className="ring r1"><b /></div>
                <div className="core" />
              </div>
            </div>
          </div>
        </div>

        <section id="about">
          <div className="wrap about">
            <div className="reveal">
              <h2>{about.title}</h2>
              {about.paragraphs.map((t, i) => (
                <p key={i} className="lead" style={{ marginBottom: 18 }}>{t}</p>
              ))}
            </div>
            <div className="facts reveal">
              {facts.map((f) => (
                <div key={f.label}><span>{f.label}</span><strong>{f.value}</strong></div>
              ))}
            </div>
          </div>
        </section>

        <Projects />

        <section id="stack">
          <div className="wrap">
            <h2 className="reveal">Tools I work with</h2>
            <p className="lead reveal">The stack behind my projects and this portfolio.</p>
            <div className="stack reveal">{stack.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="wrap">
            <h2 className="reveal">{contact.title}</h2>
            <p className="lead reveal">{contact.text}</p>
            <div className="cta reveal">
              <a className="btn main" href={contact.href} target="_blank" rel="noopener noreferrer">{contact.button}</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© {new Date().getFullYear()} {name}. Built with React and a lot of stars.</div>
      </footer>
    </>
  )
}
