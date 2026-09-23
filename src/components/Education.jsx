import { education, certifications } from '../data.js'

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="section__head">
        <p className="eyebrow">Education &amp; certifications</p>
        <h2>Background.</h2>
      </div>
      <div className="edu-grid">
        <div className="edu-card">
          <h3>{education.degree}</h3>
          <p className="edu-card__school">{education.school}</p>
          <p className="edu-card__meta">{education.period} · {education.detail}</p>
        </div>
        <div className="cert-card">
          <h3>Certifications</h3>
          <ul>
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
