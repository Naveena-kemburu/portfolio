import { useState } from 'react'
import { Icon } from '@iconify/react'
import useScrollReveal from '../hooks/useScrollReveal'

const contactLinks = [
  { icon: 'mdi:email-outline', label: 'Email', value: 'naveenakemburu@gmail.com', href: 'mailto:naveenakemburu@gmail.com' },
  { icon: 'mdi:github', label: 'GitHub', value: 'github.com/Naveena-kemburu', href: 'https://github.com/Naveena-kemburu' },
  { icon: 'mdi:linkedin', label: 'LinkedIn', value: 'linkedin.com/in/naveena-kemburu-409224291', href: 'https://www.linkedin.com/in/naveena-kemburu-409224291/' },
]

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  return (
    <section id="contact" style={{
      width: '100%', padding: '80px 0',
      background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.04) 50%, transparent)',
    }}>
      <div className="section-container" style={{ textAlign: 'center' }}>
        <div className="section-label"><span>Contact</span></div>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: 'white', marginBottom: 12 }}>
          Let&apos;s work together
        </h2>
        <p style={{ color: '#94a3b8', fontSize: 16, maxWidth: 520, marginBottom: 52, margin: '0 auto 52px' }}>
          I'm open to new opportunities and collaborations. Drop me a message and I'll get back to you within 24 hours.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {contactLinks.map(({ icon, label, value, href }) => (
              <a key={label} href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="card"
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, textDecoration: 'none', transition: 'border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}
              >
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon icon={icon} color="#818cf8" width={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontSize: 11, color: '#475569', marginBottom: 2 }}>{label}</p>
                  <p style={{ fontSize: 13, color: '#94a3b8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{value}</p>
                </div>
              </a>
            ))}
          </div>
          <div>
            {sent ? (
              <div className="card" style={{ minHeight: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
                <Icon icon="mdi:check-circle" color="#34d399" width={40} style={{ marginBottom: 16 }} />
                <h3 style={{ color: 'white', fontWeight: 600, marginBottom: 8 }}>Message sent!</h3>
                <p style={{ color: '#475569', fontSize: 14, marginBottom: 20 }}>Thanks for reaching out. I will get back to you soon.</p>
                <button onClick={() => setSent(false)} style={{ background: 'none', border: 'none', color: '#818cf8', fontSize: 14, cursor: 'pointer' }}>Send another</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  <div>
                    <label htmlFor="name" style={{ display: 'block', fontSize: 12, color: '#475569', marginBottom: 8 }}>Name</label>
                    <input id="name" type="text" required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="form-input" />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display: 'block', fontSize: 12, color: '#475569', marginBottom: 8 }}>Email</label>
                    <input id="email" type="email" required placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="form-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: 12, color: '#475569', marginBottom: 8 }}>Message</label>
                  <textarea id="message" required rows={6} placeholder="Tell me about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="form-input" style={{ resize: 'none' }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}




