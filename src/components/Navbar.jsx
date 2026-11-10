import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  // Highlight the section currently in view.
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach((l) => { const el = document.getElementById(l.toLowerCase()); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Main">
        <a href="#home" className="font-display font-bold gradient-text">Piyush.</a>
        <ul className="hidden gap-1 md:flex">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} aria-current={active === l.toLowerCase() ? 'page' : undefined}
                className={`rounded-full px-3 py-1.5 text-sm transition ${active === l.toLowerCase() ? 'bg-card text-accent' : 'text-muted hover:text-fg'}`}>{l}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="rounded-full p-2 text-muted hover:text-accent">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="rounded-full p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="border-t border-line bg-bg px-5 py-3 md:hidden">
          {links.map((l) => (
            <li key={l}><a onClick={() => setOpen(false)} href={`#${l.toLowerCase()}`} className="block py-2 text-muted hover:text-accent">{l}</a></li>
          ))}
        </ul>
      )}
    </header>
  )
}
