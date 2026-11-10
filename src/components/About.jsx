import Reveal from './Reveal.jsx'
import { profile } from '../data/socialLinks.js'

export default function About() {
  const status = profile.status === 'Graduate' ? 'graduate' : 'student'
  const facts = [
    ['Education', 'B.Tech in Computer Science & Engineering, AKTU'],
    ['Career interests', 'Data Analytics, Data Science, AI and Machine Learning roles'],
    ['Technical interests', 'Python, data visualization, predictive modeling, web development'],
    ['Learning mindset', 'Learning by building: every concept gets a hands-on project'],
    ['Problem-solving approach', 'Break the problem down, test small, and practice regularly on LeetCode'],
  ]
  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="h2">About me</h2>
        <p className="max-w-3xl text-lg text-muted">
          I am a Computer Science and Engineering {status} from Dr. A.P.J. Abdul Kalam Technical University (AKTU), passionate about Data Analytics, Data Science, Artificial Intelligence, and Machine Learning. I enjoy working with data, discovering patterns, creating insightful visualizations, and developing practical technology solutions. I continuously improve my programming, analytical, and problem-solving skills through hands-on projects and coding practice.
        </p>
        <dl className="mt-10 grid gap-4 md:grid-cols-2">
          {facts.map(([k, v]) => (
            <div key={k} className="panel"><dt className="font-display font-semibold text-accent">{k}</dt><dd className="mt-1 text-muted">{v}</dd></div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
