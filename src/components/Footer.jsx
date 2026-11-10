import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react'
import { profile, socials } from '../data/socialLinks.js'

export default function Footer() {
  const links = [[Github, socials.github, 'GitHub'], [Linkedin, socials.linkedin, 'LinkedIn'], [Code2, socials.leetcode, 'LeetCode'], [Mail, socials.email, 'Email']]
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display font-semibold">{profile.name}</p>
          <p className="text-sm text-muted">{profile.tagline}</p>
          <p className="mt-1 text-xs text-muted">&copy; {new Date().getFullYear()} {profile.name}</p>
        </div>
        <div className="flex items-center gap-3">
          {links.map(([I, href, label]) => (
            <a key={label} href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-muted hover:text-accent"><I size={20} /></a>
          ))}
          <a href="#home" aria-label="Back to top" className="ml-2 rounded-full border border-line p-2 hover:border-accent hover:text-accent"><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  )
}
