import { ArrowUpRight, BookOpen, ExternalLink, Github, Linkedin, Mail, ShieldCheck } from 'lucide-react'

type Project = {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  note?: string
}

const projects: Project[] = [
  {
    title: 'AniCard Battle',
    description: 'Collectible card game built with Flutter and Firebase, featuring authentication, persistent progression, deck management, battles, rankings, missions and rewards.',
    tags: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore'],
    github: 'https://github.com/AndreyRodr/AnicardBattle',
    demo: 'https://anicard-battle.web.app',
    note: 'Live',
  },
  {
    title: 'Aegis',
    description: 'Cybersecurity research project combining Wazuh SIEM and Isolation Forest to detect anomalies and web threats using server logs.',
    tags: ['Python', 'Wazuh', 'Docker', 'Elasticsearch', 'Machine Learning'],
    github: 'https://github.com/AndreyRodr/Aegis-Projeto-IC',
  },
  {
    title: 'Cook & Tea',
    description: 'Full stack recipe-sharing platform with authentication, route protection, REST APIs and user-generated content.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/AndreyRodr/Cook-and-Tea',
  },
  {
    title: 'HandTracker',
    description: 'LIBRAS recognition project using computer vision and deep learning for static and dynamic gesture classification.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'LSTM'],
    github: 'https://github.com/AndreyRodr/HandTracker',
  },
  {
    title: 'TCG CardManager',
    description: 'Card catalog manager focused on CRUD, authentication, filtering, uploads and backend security practices.',
    tags: ['PHP', 'MySQL', 'PDO', 'CSRF', 'Vanilla JS'],
    github: 'https://github.com/AndreyRodr/TCG-CardManager',
  },
]

const groups = [
  { title: 'Software', items: ['React', 'TypeScript', 'Node.js', 'Flutter'] },
  { title: 'Backend & Data', items: ['Python', 'SQL', 'PostgreSQL', 'Firebase'] },
  { title: 'Cybersecurity', items: ['Wazuh', 'Docker', 'ELK', 'Nginx'] },
  { title: 'AI & Data', items: ['Pandas', 'Scikit-learn', 'TensorFlow', 'OpenCV'] },
]

function App() {
  return (
    <div className='site-shell'>
      <header className='nav-wrap'>
        <nav className='nav container'>
          <a className='brand' href='#top' aria-label='Back to top'>AR</a>
          <div className='nav-links'>
            <a href='#projects'>Projects</a>
            <a href='#research'>Research</a>
            <a href='#contact'>Contact</a>
          </div>
        </nav>
      </header>

      <main id='top'>
        <section className='hero container'>
          <div className='hero-copy'>
            <span className='eyebrow'>Software • Cybersecurity • Applied AI</span>
            <h1>Hi, I&apos;m <span>Andrey Rodrigues.</span></h1>
            <p className='hero-role'>Software Developer & Cybersecurity Researcher</p>
            <p className='hero-text'>I build software and explore security through research, data and machine learning. Currently finishing my degree in Systems Analysis and Development at IFSP.</p>
            <div className='hero-actions'>
              <a className='button primary' href='#projects'>View Projects <ArrowUpRight size={17} /></a>
              <a className='button ghost' href='https://github.com/AndreyRodr' target='_blank' rel='noreferrer'><Github size={17} /> GitHub</a>
              <a className='button ghost' href='https://www.linkedin.com/in/andreyrodrigues-dev' target='_blank' rel='noreferrer'><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>

          <aside className='status-card'>
            <div className='status-icon'><ShieldCheck size={24} /></div>
            <p className='status-label'>Currently</p>
            <div className='status-list'>
              <div><strong>ADS — IFSP</strong><span>Final semester</span></div>
              <div><strong>Aegis</strong><span>Scientific research in cybersecurity</span></div>
              <div><strong>RECIMA21</strong><span>Published research, 2026</span></div>
            </div>
          </aside>
        </section>

        <section className='section container' id='projects'>
          <div className='section-heading'>
            <div><span className='eyebrow'>Selected work</span><h2>Projects</h2></div>
            <p>Projects that combine software engineering, cybersecurity, data and applied machine learning.</p>
          </div>
          <div className='project-grid'>
            {projects.map((project, index) => (
              <article className={`project-card ${index === 0 ? 'featured' : ''}`} key={project.title}>
                <div className='project-topline'>
                  <span className='project-number'>0{index + 1}</span>
                  {project.note && <span className='live-badge'>{project.note}</span>}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='tag-list'>{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className='project-links'>
                  {project.demo && <a href={project.demo} target='_blank' rel='noreferrer'>Live Demo <ExternalLink size={15} /></a>}
                  {project.github && <a href={project.github} target='_blank' rel='noreferrer'>GitHub <Github size={15} /></a>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className='section container split-section' id='research'>
          <div>
            <span className='eyebrow'>Research</span>
            <h2>Aegis</h2>
            <p className='large-copy'>A hybrid threat-detection architecture combining a SIEM with unsupervised machine learning for anomaly detection in web traffic.</p>
            <div className='metric-grid'>
              <div><strong>99.30%</strong><span>Accuracy</span></div>
              <div><strong>73.86%</strong><span>F1-Score</span></div>
              <div><strong>170,366</strong><span>Requests evaluated</span></div>
            </div>
          </div>
          <div className='research-card'>
            <BookOpen size={26} />
            <p className='research-kicker'>Published in RECIMA21 • 2026</p>
            <h3>Predictive Analysis of Vulnerabilities in Web Applications Using Server Logs</h3>
            <p>Presented at ERMAC Regional 8 at INPE, São José dos Campos, with external validation using CIC-IDS2017.</p>
            <a href='https://doi.org/10.47820/recima21.v7i8.8820' target='_blank' rel='noreferrer'>Read publication <ExternalLink size={15} /></a>
          </div>
        </section>

        <section className='section container'>
          <div className='section-heading'><div><span className='eyebrow'>Technical toolkit</span><h2>Skills</h2></div></div>
          <div className='skill-grid'>
            {groups.map((group) => (
              <div className='skill-card' key={group.title}>
                <h3>{group.title}</h3>
                <div className='skill-items'>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section className='contact-section' id='contact'>
          <div className='container contact-inner'>
            <div>
              <span className='eyebrow'>Get in touch</span>
              <h2>Let&apos;s build something useful.</h2>
              <p>I&apos;m interested in junior software development and cybersecurity opportunities.</p>
            </div>
            <div className='contact-links'>
              <a href='mailto:andreyrm.dev@gmail.com'><Mail size={18} /> andreyrm.dev@gmail.com</a>
              <a href='https://www.linkedin.com/in/andreyrodrigues-dev' target='_blank' rel='noreferrer'><Linkedin size={18} /> LinkedIn</a>
              <a href='https://github.com/AndreyRodr' target='_blank' rel='noreferrer'><Github size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className='footer container'>
        <span>© 2026 Andrey Rodrigues</span>
        <a href='#top'>Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App