import Reveal from './Reveal.jsx'
import { timeline } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <h2 className="h2">Experience &amp; learning</h2>
        <p className="-mt-6 mb-10 text-muted">Education, self-directed learning and personal projects. No employment history is listed here.</p>
        <ol className="relative ml-3 border-l border-line">
          {timeline.map((t) => (
            <li key={t.title} className="mb-8 ml-6">
              <span aria-hidden="true" className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]" />
              <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-accent">{t.type}</span>
              <h3 className="mt-2 font-semibold">{t.title}</h3>
              <p className="text-sm text-muted">{t.place}</p>
              <p className="mt-1 text-muted">{t.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}
