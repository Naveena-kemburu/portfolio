import { Icon } from '@iconify/react'
import useScrollReveal from '../hooks/useScrollReveal'

const categories = [
  {
    title: 'Frontend',
    icon: 'mdi:monitor-shimmer',
    color: '#6366f1',
    skills: [
      { name: 'HTML', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'React', icon: 'logos:react' },
      { name: 'Next.js', icon: 'logos:nextjs-icon' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Framer Motion', icon: 'logos:framer' },
    ],
  },
  {
    title: 'Tools & Design',
    icon: 'mdi:tools',
    color: '#8b5cf6',
    skills: [
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
      { name: 'GitHub', icon: 'mdi:github' },
      { name: 'Vercel', icon: 'logos:vercel-icon' },
    ],
  },
  {
    title: 'Backend & DB',
    icon: 'mdi:server',
    color: '#38bdf8',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      { name: 'REST APIs', icon: 'mdi:api' },
      { name: 'Firebase', icon: 'logos:firebase' },
    ],
  },
]

export default function Skills() {
  useScrollReveal()
  return (
    <section id="skills" style={{
      width: '100%', padding: '80px 0',
      background: 'linear-gradient(180deg, transparent, rgba(99,102,241,0.04) 50%, transparent)',
    }}>
      <div className="section-container">
        <div className="section-label"><span>Skills</span></div>
        <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: 'white', marginBottom: 40 }}>
          Technologies I work with
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: 20 }}>
          {categories.map((cat, i) => (
            <div key={cat.title} className="card fade-up" style={{ padding: 24, transitionDelay: `${i * 0.1}s` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: `${cat.color}18`, border: `1px solid ${cat.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon icon={cat.icon} color={cat.color} width={18} />
                </div>
                <span style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>{cat.title}</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {cat.skills.map(skill => (
                  <div key={skill.name} className="skill-chip">
                    <Icon icon={skill.icon} width={20} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
