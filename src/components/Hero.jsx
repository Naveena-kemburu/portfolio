import { useEffect } from 'react'
import { Icon } from '@iconify/react'

export default function Hero() {
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const orb1 = document.getElementById('orb1')
      const orb2 = document.getElementById('orb2')
      if (orb1) orb1.style.transform = `translateY(${scrollY * 0.3}px)`
      if (orb2) orb2.style.transform = `translateY(${scrollY * -0.2}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero" style={{
      position: 'relative', width: '100%', minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Parallax background orbs */}
      <div id="orb1" className="parallax-orb" style={{
        position: 'absolute', width: 600, height: 600, top: '-10%', left: '-8%',
        borderRadius: '50%', background: 'rgba(99,102,241,0.1)', filter: 'blur(100px)', pointerEvents: 'none',
      }} aria-hidden="true" />
      <div id="orb2" className="parallax-orb" style={{
        position: 'absolute', width: 500, height: 500, bottom: '-10%', right: '-8%',
        borderRadius: '50%', background: 'rgba(139,92,246,0.08)', filter: 'blur(100px)', pointerEvents: 'none',
      }} aria-hidden="true" />

      {/* Dot grid */}
      <div className="dot-grid" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} aria-hidden="true" />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        width: '100%', maxWidth: 820,
        margin: '0 auto', padding: '96px 24px 64px',
        textAlign: 'center',
      }}>
        {/* Name */}
        <h1 style={{
          fontSize: 'clamp(42px, 9vw, 80px)',
          fontWeight: 800, color: 'white',
          lineHeight: 1.05, letterSpacing: '-0.03em',
          marginBottom: 16,
        }}>
          Hi, I&apos;m <span className="gradient-text">Naveena</span>
        </h1>

        {/* Role */}
        <p style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: '#818cf8', fontWeight: 400, marginBottom: 24 }}>
          Frontend Developer
        </p>

        {/* Tagline */}
        <p style={{
          fontSize: 16, color: '#475569', lineHeight: 1.8,
          maxWidth: 520, margin: '0 auto 44px',
        }}>
          I craft fast, accessible, and visually refined web experiences — focused on clean code, smooth interactions, and pixel-perfect UI.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
          <button
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
            <Icon icon="mdi:arrow-right" width={16} />
          </button>
          <a href="mailto:naveenakemburu@gmail.com" className="btn-secondary">
            <Icon icon="mdi:email-outline" width={16} />
            Get In Touch
          </a>
        </div>

        {/* Socials */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
          {[
            { icon: 'mdi:github', href: 'https://github.com/Naveena-kemburu', label: 'GitHub' },
            { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/naveena-kemburu-409224291/', label: 'LinkedIn' },
            { icon: 'mdi:email-outline', href: 'mailto:naveenakemburu@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)', color: '#64748b',
                textDecoration: 'none', transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
            >
              <Icon icon={icon} width={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
