import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'background 0.3s, backdrop-filter 0.3s',
      }}
    >
      <div style={{
        maxWidth: 1152, margin: '0 auto', padding: '0 24px',
        height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ color: 'white', fontWeight: 700, fontSize: 16, textDecoration: 'none', letterSpacing: '0.05em' }}
        >
          KN<span style={{ color: '#818cf8' }}>.</span>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="hidden md:flex">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                padding: '8px 16px', background: 'none', border: 'none', cursor: 'pointer',
                color: '#64748b', fontSize: 14, fontWeight: 500, borderRadius: 8,
                transition: 'color 0.2s, background 0.2s',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={e => { e.target.style.color = 'white'; e.target.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { e.target.style.color = '#64748b'; e.target.style.background = 'none' }}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex" style={{ gap: 12, alignItems: 'center' }}>
          <a href="mailto:naveenakemburu@gmail.com" className="btn-primary" style={{ padding: '8px 20px' }}>
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          aria-label="Toggle menu"
        >
          <Icon icon={menuOpen ? 'mdi:close' : 'mdi:menu'} color="white" width={22} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(10,10,16,0.97)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '12px 24px 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {links.map(link => (
                <button
                  key={link}
                  onClick={() => scrollTo(link)}
                  style={{
                    textAlign: 'left', padding: '10px 0', background: 'none', border: 'none',
                    color: '#94a3b8', fontSize: 15, fontWeight: 500, cursor: 'pointer',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {link}
                </button>
              ))}
              <a href="mailto:naveenakemburu@gmail.com" className="btn-primary" style={{ marginTop: 8, justifyContent: 'center' }}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
