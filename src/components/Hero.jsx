import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Download } from 'lucide-react'
import { profile, socials } from '../data/socialLinks.js'

const roles = ['Data Analyst', 'Data Scientist', 'AI/ML Enthusiast']

// Typewriter: types a role, pauses, deletes, moves to the next.
function useTyping(words) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const word = words[i]
    const full = !del && text === word
    const t = setTimeout(() => {
      if (full) return setDel(true)
      if (del && text === '') { setDel(false); return setI((i + 1) % words.length) }
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, full ? 1400 : del ? 40 : 80)
    return () => clearTimeout(t)
  }, [text, del, i, words])
  return text
}

const Icon = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-full border border-line p-2.5 text-muted transition hover:border-accent hover:text-accent">{children}</a>
)

export default function Hero() {
  const typed = useTyping(roles)
  return (
    <section id="home" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent2/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      <div className="section relative grid items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="mb-3 text-muted">Hi, I'm</p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl"><span className="gradient-text">{profile.name}</span></h1>
          <p className="mt-4 h-8 font-display text-xl md:text-2xl">
            <span className="sr-only">Data Analyst | Data Scientist | AI/ML Enthusiast</span>
            <span className="caret" aria-hidden="true">{typed}</span>
          </p>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Passionate about transforming raw data into meaningful insights and building intelligent solutions using Python, Data Analytics, Machine Learning, and modern web technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumePath} download className="btn btn-primary"><Download size={16} /> Download Resume</a>
            <a href="#projects" className="btn btn-ghost">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
          <div className="mt-8 flex gap-3">
            <Icon href={socials.github} label="GitHub"><Github size={20} /></Icon>
            <Icon href={socials.linkedin} label="LinkedIn"><Linkedin size={20} /></Icon>
            <Icon href={socials.leetcode} label="LeetCode"><Code2 size={20} /></Icon>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-accent to-accent2 p-1 shadow-[0_0_60px_-10px_var(--accent)]">
            {/* Replace public/profile.svg (or change profileImage in socialLinks.js) with your photo */}
            <img src={profile.profileImage} alt={`Portrait of ${profile.name}`} width="320" height="320" className="h-64 w-64 rounded-[22px] object-cover md:h-80 md:w-80" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
