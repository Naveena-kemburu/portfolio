import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer style={{
      width: '100%', borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '32px 0',
    }}>
      <div className="section-container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <p style={{ fontSize: 13, color: '#1e293b' }}>
          © {new Date().getFullYear()} Kemburu Naveena
        </p>
        <p style={{ fontSize: 12, color: '#1e293b' }}>
          Built with React + Vite
        </p>
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { icon: 'mdi:github', href: 'https://github.com/Naveena-kemburu', label: 'GitHub' },
            { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/naveena-kemburu-409224291/', label: 'LinkedIn' },
            { icon: 'mdi:email-outline', href: 'mailto:naveenakemburu@gmail.com', label: 'Email' },
          ].map(({ icon, href, label }) => (
            <a key={label} href={href} aria-label={label}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{ color: '#1e293b', transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'}
              onMouseLeave={e => e.currentTarget.style.color = '#1e293b'}
            >
              <Icon icon={icon} width={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
