import { useEffect, useState } from 'react'
import { profile } from '../data.js'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = profile.roles[roleIndex]
    const speed = deleting ? 35 : 65
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = full.slice(0, text.length + 1)
        setText(next)
        if (next === full) setTimeout(() => setDeleting(true), 1400)
      } else {
        const next = full.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % profile.roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, roleIndex])

  return (
    <section id="home" className="section hero">
      <div className="hero__grid">
        <div className="hero__text">
          <p className="eyebrow">Available for new roles &amp; freelance work</p>
          <h1 className="hero__title">
            Kamran Ahmed builds<br />full-stack software.
          </h1>
          <p className="hero__role">
            <span className="hero__role-text">{text}</span>
            <span className="hero__cursor">_</span>
          </p>
          <p className="hero__bio">{profile.bio}</p>
          <div className="hero__cta">
            <a href="#work" className="btn btn--filled">See my work</a>
            <a href={`mailto:${profile.email}`} className="btn btn--outline">Hire me</a>
          </div>
          <div className="hero__meta">
            <span>{profile.location}</span>
            <span className="hero__meta-sep">·</span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
        </div>

        <div className="hero__panel" aria-hidden="true">
          <div className="terminal">
            <div className="terminal__bar">
              <span className="dot dot--r" /><span className="dot dot--y" /><span className="dot dot--g" />
              <span className="terminal__title">profile.json</span>
            </div>
            <pre className="terminal__body"><code>{`{
  "name": "Kamran Ahmed",
  "role": "Full-Stack Developer",
  "stacks": [".NET / C#", "MERN"],
  "focus": [
    "Clean Architecture",
    "REST APIs",
    "React front-ends"
  ],
  "location": "Islamabad, PK",
  "openTo": "opportunities"
}`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}
