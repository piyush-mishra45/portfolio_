import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, Github, Linkedin, Code2 } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile, socials } from '../data/socialLinks.js'

const { VITE_EMAILJS_SERVICE_ID: SERVICE, VITE_EMAILJS_TEMPLATE_ID: TEMPLATE, VITE_EMAILJS_PUBLIC_KEY: KEY } = import.meta.env
const empty = { name: '', email: '', subject: '', message: '' }
const inputCls = 'w-full rounded-xl border border-line bg-bg p-3'

export default function Contact() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', text: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const validate = () => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.'
    if (form.subject.trim().length < 3) e.subject = 'Enter a subject.'
    if (form.message.trim().length < 10) e.message = 'Write at least 10 characters.'
    return e
  }

  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    if (!SERVICE || !TEMPLATE || !KEY) {
      return setStatus({ type: 'error', text: `Email service is not configured yet. Please write to ${profile.email} directly.` })
    }
    setStatus({ type: 'loading', text: 'Sending...' })
    try {
      await emailjs.send(SERVICE, TEMPLATE, { from_name: form.name, reply_to: form.email, subject: form.subject, message: form.message }, { publicKey: KEY })
      setForm(empty)
      setStatus({ type: 'success', text: 'Message sent. I will reply soon.' })
    } catch {
      setStatus({ type: 'error', text: 'Message failed to send. Try again or email me directly.' })
    }
  }

  const field = (k, label, props = {}) => (
    <div>
      <label htmlFor={k} className="mb-1 block text-sm text-muted">{label}</label>
      {k === 'message'
        ? <textarea id={k} rows="5" value={form[k]} onChange={set(k)} aria-invalid={!!errors[k]} className={inputCls} />
        : <input id={k} value={form[k]} onChange={set(k)} aria-invalid={!!errors[k]} className={inputCls} {...props} />}
      {errors[k] && <p role="alert" className="mt-1 text-sm text-red-400">{errors[k]}</p>}
    </div>
  )

  const links = [[Mail, socials.email, profile.email], [Linkedin, socials.linkedin, 'LinkedIn'], [Github, socials.github, 'GitHub'], [Code2, socials.leetcode, 'LeetCode']]

  return (
    <section id="contact" className="section">
      <Reveal>
        <h2 className="h2">Contact</h2>
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr]">
          <ul className="space-y-3">
            {links.map(([I, href, label]) => (
              <li key={label}><a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="panel flex items-center gap-3 py-4 hover:border-accent"><I size={18} className="text-accent" /> {label}</a></li>
            ))}
          </ul>
          <form onSubmit={submit} noValidate className="panel space-y-4">
            {field('name', 'Name', { autoComplete: 'name' })}
            {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
            {field('subject', 'Subject')}
            {field('message', 'Message')}
            <button className="btn btn-primary" disabled={status.type === 'loading'}>{status.type === 'loading' ? 'Sending...' : 'Send message'}</button>
            {status.text && <p role="status" className={status.type === 'success' ? 'text-accent' : status.type === 'error' ? 'text-red-400' : 'text-muted'}>{status.text}</p>}
          </form>
        </div>
      </Reveal>
    </section>
  )
}
