import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="h2">Featured projects</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </Reveal>
    </section>
  )
}
