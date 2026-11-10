import Reveal from './Reveal.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <Reveal>
        <h2 className="h2">Technical skills</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="panel transition hover:border-accent">
              <h3 className="mb-4 font-semibold">{g.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((s) => <li key={s} className="rounded-full border border-line px-3 py-1 text-sm text-muted">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
