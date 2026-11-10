import { Github, ExternalLink } from 'lucide-react'

// Reusable card. GitHub and demo links render only when provided.
export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <article className="panel flex flex-col transition duration-300 hover:-translate-y-1 hover:border-accent">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 flex-1 text-muted">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => <li key={t} className="rounded-md bg-bg px-2 py-1 text-xs text-accent">{t}</li>)}
      </ul>
      <div className="mt-5 flex gap-4 text-sm">
        {github && <a className="flex items-center gap-1.5 hover:text-accent" href={github} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
        {demo && <a className="flex items-center gap-1.5 hover:text-accent" href={demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
      </div>
    </article>
  )
}
