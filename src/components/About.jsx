import { lookingForward } from '../data.js'

const facts = [
  { label: 'Base', value: 'Islamabad, Pakistan' },
  { label: 'Education', value: 'BS Computer Science, Bahria University' },
  { label: 'Primary stacks', value: '.NET / C# & MERN' },
  { label: 'Currently exploring', value: 'RAG pipelines, DevOps, Cloud' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__head">
        <p className="eyebrow">About</p>
        <h2>Two stacks, one way of building.</h2>
      </div>
      <div className="about__grid">
        <p className="about__lead">
          I split my work between two ecosystems on purpose. The .NET side gives me clean
          architecture, strongly-typed APIs, and disciplined data access with EF Core. The MERN
          side keeps me fast — Node, Express and React for products that need to ship quickly.
          Between the two, I've learned that the patterns transfer: layered services, thoughtful
          auth, and APIs designed for the front-end that actually consumes them.
        </p>
        <dl className="about__facts">
          {facts.map((f) => (
            <div key={f.label} className="about__fact">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="about__forward">
        <span className="about__forward-label">Looking forward to</span>
        <div className="chips">
          {lookingForward.map((item) => (
            <span key={item} className="chip">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
