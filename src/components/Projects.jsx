import { Icon } from '@iconify/react'
import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'SQL Database Engine',
    description: 'Built a mini in-memory SQL engine in Python that parses and executes SQL queries (SELECT, WHERE, COUNT) on CSV data. Simulates core database operations like query parsing, filtering, and aggregation without any external database.',
    tech: ['Python', 'CSV Handling', 'CLI / REPL'],
    github: 'https://github.com/Naveena-kemburu/sql-database-engine',
    demo: null,
    accent: '#6366f1',
    tag: 'Backend',
    icon: 'mdi:database',
  },
  {
    title: 'Personalized Dashboard',
    description: 'A customizable dashboard with draggable and resizable widgets using Zustand for global state management. Integrated Weather, To-Do, and Notes widgets with full state persistence, responsive design, and comprehensive testing.',
    tech: ['React', 'Zustand', 'Tailwind CSS', 'Jest', 'React Testing Library'],
    github: 'https://github.com/Naveena-kemburu/my-dashboard',
    demo: null,
    accent: '#8b5cf6',
    tag: 'Frontend',
    icon: 'mdi:view-dashboard-outline',
  },
  {
    title: 'Offline Support Chatbot',
    description: 'A fully offline AI chatbot for e-commerce customer support using Ollama and Llama 3.2. Implemented zero-shot and one-shot prompt engineering and evaluated model performance across 20+ queries based on relevance, coherence, and helpfulness.',
    tech: ['Python', 'Ollama', 'Llama 3.2', 'Prompt Engineering', 'REST API'],
    github: 'https://github.com/Naveena-kemburu/Offline-Customer-Support-Chatbot',
    demo: null,
    accent: '#10b981',
    tag: 'AI / ML',
    icon: 'mdi:robot-outline',
  },
  {
    title: 'Video Streaming Platform',
    description: 'A high-performance video streaming platform using adaptive bitrate streaming (HLS) to dynamically adjust quality based on network conditions. Features subtitles, playback speed control, Picture-in-Picture, and persistent watch history with strong accessibility and responsive design.',
    tech: ['React', 'TypeScript', 'HLS.js', 'Video.js', 'Zustand', 'Tailwind CSS', 'Jest'],
    github: 'https://github.com/Naveena-kemburu/high-performance-video-streaming-platform',
    demo: null,
    accent: '#f59e0b',
    tag: 'Full Stack',
    icon: 'mdi:play-circle-outline',
  },
]

export default function Projects() {
  useScrollReveal()
  return (
    <section id="projects" style={{ width: '100%', padding: '80px 0' }}>
      <div className="section-container">
        <div className="section-label"><span>Projects</span></div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 52 }}>
          <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: 'white' }}>
            Things I&apos;ve built
          </h2>
          <a href="https://github.com/Naveena-kemburu" target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = '#475569'}
          >
            View all on GitHub <Icon icon="mdi:arrow-right" width={14} />
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {projects.map((project, i) => (
            <article key={project.title} className="card fade-up" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', transitionDelay: `${i * 0.1}s` }}>
              <div style={{ height: 2, background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: `${project.accent}18`, border: `1px solid ${project.accent}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon icon={project.icon} color={project.accent} width={18} />
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 6,
                      background: `${project.accent}15`, color: project.accent,
                      border: `1px solid ${project.accent}25`,
                    }}>
                      {project.tag}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                      style={{ width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'white'}
                      onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                    >
                      <Icon icon="mdi:github" width={18} />
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
                        style={{ width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8, color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'white'}
                        onMouseLeave={e => e.currentTarget.style.color = '#475569'}
                      >
                        <Icon icon="mdi:open-in-new" width={17} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 10 }}>{project.title}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.75, flex: 1, marginBottom: 20 }}>{project.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
