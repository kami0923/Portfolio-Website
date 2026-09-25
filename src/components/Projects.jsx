import { projects } from '../data.js'

// Generates a live screenshot of a deployed site via Microlink's free screenshot API.
// No manual image uploads needed — it refreshes automatically whenever the live site changes.
function screenshotUrl(liveUrl) {
  const params = new URLSearchParams({
    url: liveUrl,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    'viewport.width': '1280',
    'viewport.height': '800',
  })
  return `https://api.microlink.io/?${params.toString()}`
}

function ProjectThumb({ live, title, skip }) {
  if (!live || skip) return null
  return (
    <div className="project-card__media">
      <img
        src={screenshotUrl(live)}
        alt={`${title} — live preview`}
        loading="lazy"
        onError={(e) => { e.currentTarget.parentElement.style.display = 'none' }}
      />
    </div>
  )
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="section">
      <div className="section__head">
        <p className="eyebrow">Selected work</p>
        <h2>Projects worth a closer look.</h2>
      </div>

      <div className="project-grid">
        {featured.map((p) => (
          <article key={p.title} className="project-card">
            <ProjectThumb live={p.live} title={p.title} skip={p.noScreenshot} />
            <div className="project-card__top">
              <div>
                <h3>{p.title}</h3>
                <p className="project-card__subtitle">{p.subtitle}</p>
              </div>
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-card__link">
                  Live ↗
                </a>
              )}
            </div>
            <p className="project-card__desc">{p.description}</p>
            <div className="project-card__stack">
              {p.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="project-card__tags">
              {p.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="project-list">
        {rest.map((p) => (
          <div key={p.title} className="project-row">
            {p.live && (
              <img
                className="project-row__thumb"
                src={screenshotUrl(p.live)}
                alt={`${p.title} — live preview`}
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            )}
            <div className="project-row__info">
              <h4>{p.title}</h4>
              <p>{p.subtitle} — {p.stack.join(', ')}</p>
            </div>
            {p.live ? (
              <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-row__link">Visit ↗</a>
            ) : (
              <span className="project-row__link project-row__link--muted">Backend project</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
