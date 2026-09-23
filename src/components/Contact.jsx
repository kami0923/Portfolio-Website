import { profile } from '../data.js'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section__head">
        <p className="eyebrow">Contact</p>
        <h2>Let's build something.</h2>
      </div>
      <p className="contact__lead">
        Open to full-stack, backend-focused, or React roles — remote or based in Islamabad.
        The fastest way to reach me is email.
      </p>
      <div className="contact__links">
        <a href={`mailto:${profile.email}`} className="btn btn--filled">{profile.email}</a>
        <a href={`tel:${profile.phone}`} className="btn btn--outline">{profile.phone}</a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn--outline">LinkedIn ↗</a>
      </div>
    </section>
  )
}
