import { useEffect, useRef } from 'react'

// Canvas starfield: three depth layers, twinkle, pointer + scroll parallax, rare shooting star.
export default function Sky() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const x = c.getContext('2d')
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const readColor = () =>
      getComputedStyle(document.documentElement).getPropertyValue('--star').trim() || '255,255,255'
    let rgb = readColor(), W = 0, H = 0, stars = [], shoot = null, mx = 0, my = 0, raf = 0

    const size = () => {
      W = window.innerWidth; H = window.innerHeight
      c.width = W * dpr; c.height = H * dpr
      x.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(220, Math.floor((W * H) / 7000))
      stars = Array.from({ length: n }, () => {
        const z = Math.random()
        return { x: Math.random() * W, y: Math.random() * H, z, r: 0.4 + z * 1.4, t: Math.random() * 6.28, s: 0.4 + Math.random() * 1.2 }
      })
    }

    const draw = () => {
      x.clearRect(0, 0, W, H)
      for (const s of stars) {
        s.t += 0.02 * s.s
        const a = (0.35 + 0.5 * s.z) * (0.65 + 0.35 * Math.sin(s.t))
        const px = s.x + mx * s.z * 18
        let py = s.y + my * s.z * 18 - window.scrollY * s.z * 0.12
        py = ((py % H) + H) % H
        x.fillStyle = `rgba(${rgb},${a.toFixed(2)})`
        x.beginPath(); x.arc(px, py, s.r, 0, 6.283); x.fill()
        if (s.z > 0.75) {
          x.fillStyle = `rgba(${rgb},${(a * 0.14).toFixed(2)})`
          x.beginPath(); x.arc(px, py, s.r * 3.2, 0, 6.283); x.fill()
        }
      }
      if (!shoot && Math.random() < 0.004) shoot = { x: Math.random() * W * 0.8, y: Math.random() * H * 0.4, l: 0 }
      if (shoot) {
        shoot.x += 9; shoot.y += 4; shoot.l++
        const g = x.createLinearGradient(shoot.x, shoot.y, shoot.x - 90, shoot.y - 40)
        g.addColorStop(0, `rgba(${rgb},.9)`); g.addColorStop(1, `rgba(${rgb},0)`)
        x.strokeStyle = g; x.lineWidth = 1.5
        x.beginPath(); x.moveTo(shoot.x, shoot.y); x.lineTo(shoot.x - 90, shoot.y - 40); x.stroke()
        if (shoot.l > 70) shoot = null
      }
      if (!still) raf = requestAnimationFrame(draw)
    }

    const onResize = () => { size(); if (still) draw() }
    const onMove = (e) => { mx = e.clientX / W - 0.5; my = e.clientY / H - 0.5 }
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onScheme = () => setTimeout(() => { rgb = readColor() }, 50)

    window.addEventListener('resize', onResize)
    window.addEventListener('pointermove', onMove, { passive: true })
    mq.addEventListener('change', onScheme)
    size(); draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onMove)
      mq.removeEventListener('change', onScheme)
    }
  }, [])

  return <canvas id="sky" ref={ref} aria-hidden="true" />
}
