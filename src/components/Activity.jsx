import Reveal from './Reveal.jsx'
import { Github, Code2 } from 'lucide-react'
import { socials } from '../data/socialLinks.js'
import { projects } from '../data/projects.js'

// Profile links only. No stats are shown because no verified API is connected.
export default function Activity() {
  return (
    <section id="activity" className="section pt-0 md:pt-0">
      <Reveal>
        <h2 className="h2">GitHub &amp; LeetCode</h2>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="panel">
            <h3 className="flex items-center gap-2 font-semibold"><Github size={18} /> GitHub</h3>
            <p className="mt-2 text-muted">Source code for my data, machine learning and web projects.</p>
            <ul className="mt-3 space-y-1 text-sm">
              {projects.filter((p) => p.github.includes('Price')).map((p) => (
                <li key={p.title}><a className="text-accent hover:underline" href={p.github} target="_blank" rel="noreferrer">{p.title}</a></li>
              ))}
            </ul>
            <a className="btn btn-ghost mt-5" href={socials.github} target="_blank" rel="noreferrer">Open GitHub profile</a>
          </div>
          <div className="panel">
            <h3 className="flex items-center gap-2 font-semibold"><Code2 size={18} /> LeetCode</h3>
            <p className="mt-2 text-muted">Regular practice on data structures, algorithms and problem solving.</p>
            <a className="btn btn-ghost mt-5" href={socials.leetcode} target="_blank" rel="noreferrer">Open LeetCode profile</a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
