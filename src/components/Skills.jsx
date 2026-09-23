import { useState } from 'react'
import { stacks } from '../data.js'

export default function Skills() {
  const [active, setActive] = useState('dotnet')
  const current = stacks[active]

  return (
    <section id="stack" className="section section--alt">
      <div className="section__head">
        <p className="eyebrow">Skills</p>
        <h2>What I work with.</h2>
      </div>

      <div className="tabs" role="tablist">
        {Object.entries(stacks).map(([key, s]) => (
          <button
            key={key}
            role="tab"
            aria-selected={active === key}
            className={`tab ${active === key ? 'tab--active' : ''}`}
            onClick={() => setActive(key)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="skill-grid">
        {current.groups.map((g) => (
          <div key={g.title} className="skill-card">
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
