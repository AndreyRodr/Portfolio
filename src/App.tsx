import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ServerCog,
  ShieldCheck,
} from 'lucide-react'

const profileImage = 'https://avatars.githubusercontent.com/u/134998417?v=4'

const secondaryProjects = [
  {
    title: 'Cook & Tea',
    eyebrow: 'Full Stack Web',
    description:
      'Recipe-sharing platform with role-based user flows, REST APIs, JWT authentication, PostgreSQL persistence and cloud image storage.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'AWS S3'],
    github: 'https://github.com/AndreyRodr/Cook-and-Tea',
  },
  {
    title: 'HandTracker',
    eyebrow: 'AI & Computer Vision',
    description:
      'LIBRAS recognition project combining static image classification and dynamic gesture recognition with computer vision and deep learning.',
    tags: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'MobileNetV2', 'LSTM'],
    github: 'https://github.com/AndreyRodr/HandTracker',
  },
]

const skillGroups = [
  {
    title: 'Software Engineering',
    icon: Code2,
    items: ['React', 'TypeScript', 'Node.js', 'Express', 'Flutter', 'REST APIs'],
  },
  {
    title: 'Cybersecurity & Infrastructure',
    icon: ShieldCheck,
    items: ['Wazuh', 'Docker', 'Elasticsearch', 'Logstash', 'Nginx', 'Linux'],
  },
  {
    title: 'Data & Applied AI',
    icon: BrainCircuit,
    items: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'OpenCV', 'MediaPipe'],
  },
]

function App() {
  return (
    <div className='site-shell'>
      <header className='nav-wrap'>
        <nav className='nav container'>
          <a className='brand' href='#top' aria-label='Back to top'>AR</a>

          <div className='nav-links'>
            <a href='#work'>Work</a>
            <a href='#research'>Research</a>
            <a href='#about'>About</a>
            <a href='#contact'>Contact</a>
          </div>
        </nav>
      </header>

      <main id='top'>
        <section className='hero container'>
          <div className='hero-copy'>
            <span className='eyebrow'>Software Development • Cybersecurity • Applied AI</span>
            <h1>
              Andrey Rodrigues
              <span>Software Developer & Cybersecurity Researcher.</span>
            </h1>
            <p className='hero-text'>
              I build software and investigate security problems through research, data and machine learning.
              I am currently finishing my degree in Systems Analysis and Development at IFSP.
            </p>

            <div className='hero-actions'>
              <a className='button primary' href='#work'>
                View my work <ArrowUpRight size={17} />
              </a>
              <a className='button ghost' href='https://github.com/AndreyRodr' target='_blank' rel='noreferrer'>
                <Github size={17} /> GitHub
              </a>
              <a className='button ghost' href='https://www.linkedin.com/in/andreyrodrigues-dev' target='_blank' rel='noreferrer'>
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>

          <aside className='portrait-wrap' aria-label='Profile photo'>
            <div className='portrait-glow' />
            <div className='portrait-card'>
              <img src={profileImage} alt='Andrey Rodrigues' className='portrait-image' />
              <div className='portrait-meta'>
                <div>
                  <strong>Andrey Rodrigues</strong>
                  <span>São José dos Campos, SP</span>
                </div>
                <a href='https://github.com/AndreyRodr' target='_blank' rel='noreferrer' aria-label='GitHub profile'>
                  <Github size={19} />
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className='quick-facts'>
          <div className='container facts-grid'>
            <div className='fact'>
              <GraduationCap size={18} />
              <div><strong>ADS @ IFSP</strong><span>Final semester</span></div>
            </div>
            <div className='fact'>
              <ShieldCheck size={18} />
              <div><strong>Cybersecurity Research</strong><span>Aegis scientific initiation</span></div>
            </div>
            <div className='fact'>
              <ServerCog size={18} />
              <div><strong>Open to Junior Opportunities</strong><span>Software development & cybersecurity</span></div>
            </div>
          </div>
        </section>

        <section className='section container' id='work'>
          <div className='section-heading'>
            <div>
              <span className='eyebrow'>Featured work</span>
              <h2>Projects with depth.</h2>
            </div>
            <p>
              A smaller selection of projects that best represents how I work across security, software engineering and applied AI.
            </p>
          </div>

          <div className='featured-grid'>
            <article className='feature-card aegis-card'>
              <div className='feature-card-top'>
                <span className='project-kicker'>Cybersecurity + Machine Learning</span>
                <ShieldCheck size={24} />
              </div>
              <div className='feature-copy'>
                <h3>Aegis</h3>
                <p>
                  Hybrid threat-detection architecture combining Wazuh SIEM with Isolation Forest to correlate rule-based alerts and anomalous web traffic.
                </p>
              </div>
              <div className='metrics-row'>
                <div><strong>73.86%</strong><span>F1-Score</span></div>
                <div><strong>70.27%</strong><span>Precision</span></div>
                <div><strong>35,190 → 718</strong><span>False positives</span></div>
              </div>
              <div className='feature-links'>
                <a href='https://github.com/AndreyRodr/Aegis-Projeto-IC' target='_blank' rel='noreferrer'>
                  GitHub <Github size={15} />
                </a>
                <a href='https://doi.org/10.47820/recima21.v7i8.8820' target='_blank' rel='noreferrer'>
                  Published article <ExternalLink size={15} />
                </a>
              </div>
            </article>

            <article className='feature-card anicard-card'>
              <div className='feature-card-top'>
                <span className='project-kicker'>Flutter + Firebase</span>
                <span className='live-badge'>Live</span>
              </div>
              <div className='feature-copy'>
                <h3>AniCard Battle</h3>
                <p>
                  Collectible card game with authentication, deck building, battles, rankings, missions, rewards and persistent player progression.
                </p>
              </div>
              <div className='stack-line'>
                <span>Flutter</span><span>Dart</span><span>Firebase Auth</span><span>Cloud Firestore</span>
              </div>
              <div className='feature-links'>
                <a className='live-link' href='https://anicard-battle.web.app' target='_blank' rel='noreferrer'>
                  Live Demo <ExternalLink size={15} />
                </a>
                <a href='https://github.com/AndreyRodr/AnicardBattle' target='_blank' rel='noreferrer'>
                  GitHub <Github size={15} />
                </a>
              </div>
            </article>
          </div>

          <div className='selected-heading'>
            <span className='eyebrow'>Selected projects</span>
            <h3>More of my work</h3>
          </div>

          <div className='selected-grid'>
            {secondaryProjects.map((project) => (
              <article className='selected-card' key={project.title}>
                <span className='project-kicker'>{project.eyebrow}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='tag-list'>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className='project-link' href={project.github} target='_blank' rel='noreferrer'>
                  View on GitHub <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className='research-section' id='research'>
          <div className='container research-layout'>
            <div className='research-intro'>
              <span className='eyebrow'>Published research</span>
              <h2>Security research with measurable results.</h2>
              <p>
                My scientific initiation at IFSP investigates a hybrid architecture for web threat detection using server logs, SIEM correlation and unsupervised machine learning.
              </p>
            </div>

            <article className='publication-card'>
              <BookOpen size={25} />
              <div className='publication-meta'>RECIMA21 • 2026</div>
              <h3>Predictive Analysis of Vulnerabilities in Web Applications Using Server Logs: A Hybrid Architecture</h3>
              <p>
                Validated on 170,366 CIC-IDS2017 requests and presented at ERMAC Regional 8 at INPE, São José dos Campos.
              </p>
              <div className='publication-footer'>
                <span>ERMAC Regional 8 • INPE</span>
                <a href='https://doi.org/10.47820/recima21.v7i8.8820' target='_blank' rel='noreferrer'>
                  Read publication <ExternalLink size={15} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className='section container about-section' id='about'>
          <div className='about-copy'>
            <span className='eyebrow'>About me</span>
            <h2>Building software with a security mindset.</h2>
            <p>
              I am a Systems Analysis and Development student at IFSP with experience across web and mobile development, data, machine learning and cybersecurity research.
            </p>
            <p>
              I enjoy projects where software engineering meets real-world constraints: authentication, infrastructure, data quality, security controls and measurable outcomes.
            </p>
          </div>

          <div className='skills-stack'>
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <article className='skill-group' key={title}>
                <div className='skill-heading'><Icon size={19} /><h3>{title}</h3></div>
                <div className='skill-items'>{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className='contact-section' id='contact'>
          <div className='container contact-inner'>
            <div>
              <span className='eyebrow'>Get in touch</span>
              <h2>Let&apos;s build something useful.</h2>
              <p>I&apos;m interested in junior opportunities in software development and cybersecurity.</p>
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