import { Icon } from '@iconify/react'
import useScrollReveal from '../hooks/useScrollReveal'

const stats = [
  { value: '4th year', label: 'Undergraduate', icon: 'mdi:school' },
  { value: '15+', label: 'Projects Built', icon: 'mdi:rocket-launch' },
  { value: '2000+', label: 'LinkedIn Followers', icon: 'mdi:linkedin' },
  { value: '550+', label: 'Contributions', icon: 'mdi:source-branch' },
]

const tags = ['Html', 'CSS', 'Github', 'Javascript', 'Figma']

export default function About() {
  useScrollReveal()
  return (
    <section id="about" style={{ width: '100%', padding: '80px 0' }}>
      <div className="section-container">
        <div className="section-label"><span>About</span></div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 72, alignItems: 'center',
        }}>
          {/* Left */}
          <div className="fade-up">
            {/* Avatar */}
            <div style={{ position: 'relative', width: 'fit-content', marginBottom: 44 }}>
              <div style={{
                width: 240, height: 240, borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <img
                  src="/avatar.jpg"
                  alt="Kemburu Naveena"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                />
                <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon icon="mdi:account" color="#2a2a3d" width={130} />
                </div>
              </div>
              <div style={{
                position: 'absolute', bottom: -10, right: -10,
                width: 240, height: 240, borderRadius: 20,
                border: '1px solid rgba(99,102,241,0.2)', zIndex: -1,
              }} />
              <div style={{
                position: 'absolute', bottom: -14, left: 16,
                padding: '6px 14px', borderRadius: 8,
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                color: 'white', fontSize: 11, fontWeight: 600,
                boxShadow: '0 4px 20px rgba(99,102,241,0.4)',
              }}>
                ✦ Open to work
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {stats.map(({ value, label, icon }) => (
                <div key={label} style={{
                  padding: 20, borderRadius: 14,
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  textAlign: 'center',
                }}>
                  <Icon icon={icon} color="#818cf8" width={22} style={{ marginBottom: 8 }} />
                  <p style={{ fontSize: 28, fontWeight: 800, color: 'white', lineHeight: 1 }}>{value}</p>
                  <p style={{ fontSize: 11, color: '#475569', marginTop: 4 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: 20, transitionDelay: '0.15s' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: 'white', lineHeight: 1.25 }}>
              Passionate about building{' '}
              <span className="gradient-text">great user experiences</span>
            </h2>

            <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: 15 }}>
              Hi, I&apos;m Naveena — a frontend developer who loves turning ideas into polished, performant web products. I care deeply about the details: smooth animations, clean layouts, and code that&apos;s easy to maintain.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: 15 }}>
              I specialize in React, Tailwind CSS, and modern animation libraries. Currently focused on building accessible, high-performance interfaces and deepening my knowledge of design systems.
            </p>
            <p style={{ color: '#64748b', lineHeight: 1.8, fontSize: 15 }}>
              When I&apos;m not coding, I&apos;m exploring UI design trends, contributing to open source, or learning something new in the frontend ecosystem.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  padding: '6px 14px', borderRadius: 8, fontSize: 12, fontWeight: 500,
                  background: 'rgba(99,102,241,0.1)', color: '#a5b4fc',
                  border: '1px solid rgba(99,102,241,0.2)',
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 16 }}>
              {[
                { icon: 'mdi:github', href: 'https://github.com/Naveena-kemburu', label: 'GitHub' },
                { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/naveena-kemburu-409224291/', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 14, textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'white'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                >
                  <Icon icon={icon} width={18} /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
