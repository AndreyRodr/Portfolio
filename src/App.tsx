import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ServerCog,
  ShieldCheck,
} from 'lucide-react'

type Language = 'en' | 'pt'
type SectionId = 'work' | 'research' | 'about' | 'contact'

const profileImage = 'https://avatars.githubusercontent.com/u/134998417?v=4'
const anicardVisual = 'https://raw.githubusercontent.com/AndreyRodr/AnicardBattle/main/assets/images/AniCard%20Icon.png'
const cookVisual = 'https://raw.githubusercontent.com/AndreyRodr/Cook-and-Tea/main/frontend-app/src/assets/images/logo.png'
const handVisual = 'https://raw.githubusercontent.com/AndreyRodr/HandTracker/main/Est%C3%A1tico/metrics_output/training_history.png'

const copy = {
  en: {
    metaTitle: 'Andrey Rodrigues | Software Developer & Cybersecurity Researcher',
    metaDescription:
      'Portfolio of Andrey Rodrigues — software development, cybersecurity research and applied AI.',
    nav: {
      work: 'Work',
      research: 'Research',
      about: 'About',
      contact: 'Contact',
      top: 'Back to top',
      language: 'Language',
    },
    hero: {
      eyebrow: 'Software Development • Cybersecurity • Applied AI',
      role: 'Software Developer & Cybersecurity Researcher.',
      text:
        'I build software and investigate security problems through research, data and machine learning. I am currently finishing my degree in Systems Analysis and Development at IFSP.',
      work: 'View my work',
      profilePhoto: 'Profile photo',
      githubProfile: 'GitHub profile',
    },
    facts: {
      educationTitle: 'ADS @ IFSP',
      educationText: 'Final semester',
      researchTitle: 'Cybersecurity Research',
      researchText: 'Aegis scientific initiation',
      opportunityTitle: 'Open to Opportunities',
      opportunityText: 'Software development & cybersecurity',
    },
    work: {
      eyebrow: 'Featured work',
      title: 'Projects with depth.',
      intro:
        'A smaller selection of projects that best represents how I work across security, software engineering and applied AI.',
      aegisKicker: 'Cybersecurity + Machine Learning',
      aegisDescription:
        'Hybrid threat-detection architecture combining Wazuh SIEM with Isolation Forest to correlate rule-based alerts and anomalous web traffic.',
      f1: 'F1-Score',
      precision: 'Precision',
      falsePositives: 'False positives',
      publishedArticle: 'Published article',
      anicardDescription:
        'Collectible card game with authentication, deck building, battles, rankings, missions, rewards and persistent player progression.',
      live: 'Live',
      liveDemo: 'Live Demo',
      selectedEyebrow: 'Selected projects',
      selectedTitle: 'More of my work',
      viewGithub: 'View on GitHub',
      cookKicker: 'Full Stack Web',
      cookDescription:
        'Recipe-sharing platform with role-based user flows, REST APIs, JWT authentication, PostgreSQL persistence and cloud image storage.',
      handKicker: 'AI & Computer Vision',
      handDescription:
        'LIBRAS recognition project combining static image classification and dynamic gesture recognition with computer vision and deep learning.',
      scientificInitiation: 'Scientific Initiation @ IFSP',
      teamProject: 'Team Project',
    },
    research: {
      eyebrow: 'Published research',
      title: 'Security research with measurable results.',
      intro:
        'My scientific initiation at IFSP investigates a hybrid architecture for web threat detection using server logs, SIEM correlation and unsupervised machine learning.',
      publicationTitle:
        'Predictive Analysis of Vulnerabilities in Web Applications Using Server Logs: A Hybrid Architecture',
      publicationText:
        'Validated on 170,366 CIC-IDS2017 requests and presented at ERMAC Regional 8 at INPE, São José dos Campos.',
      read: 'Read publication',
      authors: 'Andrey Rodrigues Moreira · Olavo Olimpio de Matos Junior',
    },
    experience: {
      eyebrow: 'Experience & education',
      title: 'A path built through software and research.',
      researchPeriod: 'Mar 2026 — Nov 2026',
      researchTitle: 'Scientific Initiation Researcher',
      researchOrg: 'IFSP — Jacareí Campus',
      researchText:
        'Research and development of the Aegis hybrid architecture for web threat detection using SIEM, machine learning and security telemetry.',
      degreePeriod: 'Feb 2024 — Dec 2026',
      degreeTitle: 'Systems Analysis and Development',
      degreeOrg: 'IFSP — Jacareí Campus',
      degreeText:
        'Technology degree focused on software development, databases, web systems, security, data and software engineering.',
      volunteerPeriod: 'Sep 2024 — Present',
      volunteerTitle: 'Director of Events — Volunteer',
      volunteerOrg: 'Associação Atlética Acadêmica Maiara Barreto',
      volunteerText:
        'Planning and coordination of sports and social events, including schedules, budgets, suppliers, negotiation and volunteer team leadership.',
    },
    about: {
      eyebrow: 'About me',
      title: 'Building software with a security mindset.',
      p1:
        'I am a Systems Analysis and Development student at IFSP with experience across web and mobile development, data, machine learning and cybersecurity research.',
      p2:
        'I enjoy projects where software engineering meets real-world constraints: authentication, infrastructure, data quality, security controls and measurable outcomes.',
      languages: 'Languages & Core',
      webMobile: 'Frontend & Mobile',
      backend: 'Backend & Databases',
      cyber: 'Cybersecurity & Infrastructure',
      data: 'Data & Applied AI',
      spokenLanguages: 'Languages',
      spokenLanguagesText: 'Portuguese · Native  /  English · Intermediate–Advanced  /  Spanish · Basic',
    },
    contact: {
      eyebrow: 'Get in touch',
      title: "Let's build something useful.",
      text:
        "I'm interested in junior opportunities in software development and cybersecurity.",
    },
    footer: {
      back: 'Back to top ↑',
    },
  },
  pt: {
    metaTitle: 'Andrey Rodrigues | Desenvolvedor de Software & Pesquisador em Cibersegurança',
    metaDescription:
      'Portfólio de Andrey Rodrigues — desenvolvimento de software, pesquisa em cibersegurança e IA aplicada.',
    nav: {
      work: 'Projetos',
      research: 'Pesquisa',
      about: 'Sobre',
      contact: 'Contato',
      top: 'Voltar ao início',
      language: 'Idioma',
    },
    hero: {
      eyebrow: 'Desenvolvimento de Software • Cibersegurança • IA Aplicada',
      role: 'Desenvolvedor de Software & Pesquisador em Cibersegurança.',
      text:
        'Desenvolvo software e investigo problemas de segurança por meio de pesquisa, dados e machine learning. Atualmente estou concluindo o curso de Análise e Desenvolvimento de Sistemas no IFSP.',
      work: 'Ver meus projetos',
      profilePhoto: 'Foto de perfil',
      githubProfile: 'Perfil no GitHub',
    },
    facts: {
      educationTitle: 'ADS @ IFSP',
      educationText: 'Último semestre',
      researchTitle: 'Pesquisa em Cibersegurança',
      researchText: 'Iniciação científica — Aegis',
      opportunityTitle: 'Aberto a Oportunidades',
      opportunityText: 'Desenvolvimento de software & cibersegurança',
    },
    work: {
      eyebrow: 'Projetos em destaque',
      title: 'Projetos com profundidade.',
      intro:
        'Uma seleção menor de projetos que representa melhor meu trabalho em segurança, engenharia de software e IA aplicada.',
      aegisKicker: 'Cibersegurança + Machine Learning',
      aegisDescription:
        'Arquitetura híbrida de detecção de ameaças que combina o Wazuh SIEM com Isolation Forest para correlacionar alertas baseados em regras e tráfego web anômalo.',
      f1: 'F1-Score',
      precision: 'Precisão',
      falsePositives: 'Falsos positivos',
      publishedArticle: 'Artigo publicado',
      anicardDescription:
        'Jogo de cartas colecionáveis com autenticação, montagem de deck, batalhas, ranking, missões, recompensas e progressão persistente do jogador.',
      live: 'Online',
      liveDemo: 'Testar projeto',
      selectedEyebrow: 'Projetos selecionados',
      selectedTitle: 'Outros trabalhos',
      viewGithub: 'Ver no GitHub',
      cookKicker: 'Full Stack Web',
      cookDescription:
        'Plataforma de compartilhamento de receitas com fluxos por perfil de usuário, APIs REST, autenticação JWT, persistência em PostgreSQL e armazenamento de imagens em nuvem.',
      handKicker: 'IA & Visão Computacional',
      handDescription:
        'Projeto de reconhecimento de LIBRAS que combina classificação de imagens estáticas e reconhecimento de gestos dinâmicos com visão computacional e deep learning.',
      scientificInitiation: 'Iniciação Científica @ IFSP',
      teamProject: 'Projeto em Equipe',
    },
    research: {
      eyebrow: 'Pesquisa publicada',
      title: 'Pesquisa em segurança com resultados mensuráveis.',
      intro:
        'Minha iniciação científica no IFSP investiga uma arquitetura híbrida para detecção de ameaças web utilizando logs de servidor, correlação com SIEM e machine learning não supervisionado.',
      publicationTitle:
        'Análise Preditiva de Vulnerabilidades em Aplicações Web Usando Logs de Servidor: Uma Arquitetura Híbrida',
      publicationText:
        'Validado em 170.366 requisições do CIC-IDS2017 e apresentado no ERMAC Regional 8, no INPE, em São José dos Campos.',
      read: 'Ler publicação',
      authors: 'Andrey Rodrigues Moreira · Olavo Olimpio de Matos Junior',
    },
    experience: {
      eyebrow: 'Experiência & formação',
      title: 'Uma trajetória construída entre software e pesquisa.',
      researchPeriod: 'Mar 2026 — Nov 2026',
      researchTitle: 'Bolsista de Iniciação Científica',
      researchOrg: 'IFSP — Câmpus Jacareí',
      researchText:
        'Pesquisa e desenvolvimento da arquitetura híbrida Aegis para detecção de ameaças web utilizando SIEM, machine learning e telemetria de segurança.',
      degreePeriod: 'Fev 2024 — Dez 2026',
      degreeTitle: 'Análise e Desenvolvimento de Sistemas',
      degreeOrg: 'IFSP — Câmpus Jacareí',
      degreeText:
        'Curso superior de tecnologia com foco em desenvolvimento de software, bancos de dados, sistemas web, segurança, dados e engenharia de software.',
      volunteerPeriod: 'Set 2024 — Atual',
      volunteerTitle: 'Diretor de Eventos — Voluntariado',
      volunteerOrg: 'Associação Atlética Acadêmica Maiara Barreto',
      volunteerText:
        'Planejamento e coordenação de eventos esportivos e sociais, incluindo cronogramas, orçamentos, fornecedores, negociação e liderança de equipes voluntárias.',
    },
    about: {
      eyebrow: 'Sobre mim',
      title: 'Desenvolvendo software com uma mentalidade de segurança.',
      p1:
        'Sou estudante de Análise e Desenvolvimento de Sistemas no IFSP, com experiência em desenvolvimento web e mobile, dados, machine learning e pesquisa em cibersegurança.',
      p2:
        'Gosto de projetos em que engenharia de software encontra restrições do mundo real: autenticação, infraestrutura, qualidade de dados, controles de segurança e resultados mensuráveis.',
      languages: 'Linguagens & Core',
      webMobile: 'Frontend & Mobile',
      backend: 'Backend & Bancos de Dados',
      cyber: 'Cibersegurança & Infraestrutura',
      data: 'Dados & IA Aplicada',
      spokenLanguages: 'Idiomas',
      spokenLanguagesText: 'Português · Nativo  /  Inglês · Intermediário-avançado  /  Espanhol · Básico',
    },
    contact: {
      eyebrow: 'Entre em contato',
      title: 'Vamos construir algo útil.',
      text:
        'Tenho interesse em oportunidades júnior nas áreas de desenvolvimento de software e cibersegurança.',
    },
    footer: {
      back: 'Voltar ao início ↑',
    },
  },
} as const

const skills = {
  languages: {
    icon: Code2,
    items: ['JavaScript', 'TypeScript', 'Python', 'PHP', 'Dart', 'SQL'],
  },
  webMobile: {
    icon: Code2,
    items: ['React', 'Flutter', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  backend: {
    icon: ServerCog,
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MySQL', 'Firebase / Firestore', 'Prisma', 'PDO', 'JWT'],
  },
  cyber: {
    icon: ShieldCheck,
    items: ['Wazuh', 'Docker', 'Elasticsearch', 'Logstash', 'Nginx', 'Git / GitHub'],
  },
  data: {
    icon: BrainCircuit,
    items: ['Pandas', 'Scikit-learn', 'TensorFlow / Keras', 'OpenCV', 'MediaPipe', 'Isolation Forest'],
  },
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-language')
    return saved === 'pt' ? 'pt' : 'en'
  })
  const [activeSection, setActiveSection] = useState<SectionId>('work')

  const t = copy[language]

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.title = t.metaTitle

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', t.metaDescription)
  }, [language, t.metaDescription, t.metaTitle])

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionId)
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.2, 0.5, 0.8] },
    )

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    document.querySelectorAll<HTMLElement>('#work, #research, #about, #contact').forEach((section) => {
      sectionObserver.observe(section)
    })

    document.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
      revealObserver.observe(element)
    })

    return () => {
      sectionObserver.disconnect()
      revealObserver.disconnect()
    }
  }, [])

  const secondaryProjects = [
    {
      title: 'Cook & Tea',
      eyebrow: t.work.cookKicker,
      description: t.work.cookDescription,
      context: t.work.teamProject,
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'AWS S3'],
      github: 'https://github.com/AndreyRodr/Cook-and-Tea',
      visual: cookVisual,
      visualClass: 'cook-visual',
    },
    {
      title: 'HandTracker',
      eyebrow: t.work.handKicker,
      description: t.work.handDescription,
      context: t.work.teamProject,
      tags: ['Python', 'OpenCV', 'MediaPipe', 'TensorFlow', 'MobileNetV2', 'LSTM'],
      github: 'https://github.com/AndreyRodr/HandTracker',
      visual: handVisual,
      visualClass: 'hand-visual',
    },
  ]

  const skillGroups = [
    { title: t.about.languages, ...skills.languages },
    { title: t.about.webMobile, ...skills.webMobile },
    { title: t.about.backend, ...skills.backend },
    { title: t.about.cyber, ...skills.cyber },
    { title: t.about.data, ...skills.data },
  ]

  const navClass = (section: SectionId) => activeSection === section ? 'active' : ''

  return (
    <div className='site-shell'>
      <header className='nav-wrap'>
        <nav className='nav container'>
          <a className='brand' href='#top' aria-label={t.nav.top}>
            <img src='/bloub-teste.gif' alt='Andrey Rodrigues' />
          </a>

          <div className='nav-links'>
            <a className={navClass('work')} href='#work'>{t.nav.work}</a>
            <a className={navClass('research')} href='#research'>{t.nav.research}</a>
            <a className={navClass('about')} href='#about'>{t.nav.about}</a>
            <a className={navClass('contact')} href='#contact'>{t.nav.contact}</a>
          </div>

          <div className='language-switch' aria-label={t.nav.language}>
            <button
              type='button'
              className={language === 'pt' ? 'active' : ''}
              onClick={() => setLanguage('pt')}
              aria-pressed={language === 'pt'}
            >
              PT
            </button>
            <span aria-hidden='true'>/</span>
            <button
              type='button'
              className={language === 'en' ? 'active' : ''}
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
            >
              EN
            </button>
          </div>
        </nav>
      </header>

      <main id='top'>
        <section className='hero container'>
          <div className='hero-copy reveal is-visible'>
            <span className='eyebrow'>{t.hero.eyebrow}</span>
            <h1>
              Andrey Rodrigues
              <span>{t.hero.role}</span>
            </h1>
            <p className='hero-text'>{t.hero.text}</p>

            <div className='hero-actions'>
              <a className='button primary' href='#work'>
                {t.hero.work} <ArrowUpRight size={17} />
              </a>
              <a className='button ghost' href='https://github.com/AndreyRodr' target='_blank' rel='noreferrer'>
                <Github size={17} /> GitHub
              </a>
              <a className='button ghost' href='https://www.linkedin.com/in/andreyrodrigues-dev' target='_blank' rel='noreferrer'>
                <Linkedin size={17} /> LinkedIn
              </a>
            </div>
          </div>

          <aside className='portrait-wrap reveal is-visible' aria-label={t.hero.profilePhoto}>
            <div className='portrait-glow' />
            <div className='portrait-card'>
              <img src={profileImage} alt='Andrey Rodrigues' className='portrait-image' />
              <div className='portrait-meta'>
                <div>
                  <strong>Andrey Rodrigues</strong>
                  <span>São José dos Campos, SP</span>
                </div>
                <a href='https://github.com/AndreyRodr' target='_blank' rel='noreferrer' aria-label={t.hero.githubProfile}>
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
              <div><strong>{t.facts.educationTitle}</strong><span>{t.facts.educationText}</span></div>
            </div>
            <div className='fact'>
              <ShieldCheck size={18} />
              <div><strong>{t.facts.researchTitle}</strong><span>{t.facts.researchText}</span></div>
            </div>
            <div className='fact'>
              <ServerCog size={18} />
              <div><strong>{t.facts.opportunityTitle}</strong><span>{t.facts.opportunityText}</span></div>
            </div>
          </div>
        </section>

        <section className='section container' id='work'>
          <div className='section-heading reveal'>
            <div>
              <span className='eyebrow'>{t.work.eyebrow}</span>
              <h2>{t.work.title}</h2>
            </div>
            <p>{t.work.intro}</p>
          </div>

          <div className='featured-grid'>
            <article className='feature-card aegis-card reveal'>
              <div className='feature-card-top'>
                <div className='project-heading-meta'>
                  <span className='project-kicker'>{t.work.aegisKicker}</span>
                  <span className='project-context'>{t.work.scientificInitiation}</span>
                </div>
                <ShieldCheck size={24} />
              </div>

              <div className='aegis-visual' aria-hidden='true'>
                <span>Logs</span>
                <i />
                <span>Wazuh</span>
                <i />
                <span>Isolation Forest</span>
                <i />
                <strong>Aegis</strong>
              </div>

              <div className='feature-copy'>
                <h3>Aegis</h3>
                <p>{t.work.aegisDescription}</p>
              </div>
              <div className='metrics-row'>
                <div><strong>73.86%</strong><span>{t.work.f1}</span></div>
                <div><strong>70.27%</strong><span>{t.work.precision}</span></div>
                <div><strong>35,190 → 718</strong><span>{t.work.falsePositives}</span></div>
              </div>
              <div className='feature-links'>
                <a href='https://github.com/AndreyRodr/Aegis-Projeto-IC' target='_blank' rel='noreferrer'>
                  GitHub <Github size={15} />
                </a>
                <a href='https://doi.org/10.47820/recima21.v7i8.8820' target='_blank' rel='noreferrer'>
                  {t.work.publishedArticle} <ExternalLink size={15} />
                </a>
              </div>
            </article>

            <article className='feature-card anicard-card reveal'>
              <div className='feature-card-top'>
                <div className='project-heading-meta'>
                  <span className='project-kicker'>Flutter + Firebase</span>
                  <span className='project-context'>{t.work.teamProject}</span>
                </div>
                <span className='live-badge'>{t.work.live}</span>
              </div>

              <div className='project-hero-visual anicard-visual'>
                <img src={anicardVisual} alt='AniCard Battle' />
              </div>

              <div className='feature-copy'>
                <h3>AniCard Battle</h3>
                <p>{t.work.anicardDescription}</p>
              </div>
              <div className='stack-line'>
                <span>Flutter</span><span>Dart</span><span>Firebase Auth</span><span>Cloud Firestore</span>
              </div>
              <div className='feature-links'>
                <a className='live-link' href='https://anicard-battle.web.app' target='_blank' rel='noreferrer'>
                  {t.work.liveDemo} <ExternalLink size={15} />
                </a>
                <a href='https://github.com/AndreyRodr/AnicardBattle' target='_blank' rel='noreferrer'>
                  GitHub <Github size={15} />
                </a>
              </div>
            </article>
          </div>

          <div className='selected-heading reveal'>
            <span className='eyebrow'>{t.work.selectedEyebrow}</span>
            <h3>{t.work.selectedTitle}</h3>
          </div>

          <div className='selected-grid'>
            {secondaryProjects.map((project) => (
              <article className='selected-card reveal' key={project.title}>
                <div className={'selected-visual ' + project.visualClass}>
                  <img src={project.visual} alt={project.title} />
                </div>
                <span className='project-kicker'>{project.eyebrow}</span>
                <span className='project-context selected-context'>{project.context}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className='tag-list'>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a className='project-link' href={project.github} target='_blank' rel='noreferrer'>
                  {t.work.viewGithub} <ArrowUpRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className='research-section' id='research'>
          <div className='container research-layout'>
            <div className='research-intro reveal'>
              <span className='eyebrow'>{t.research.eyebrow}</span>
              <h2>{t.research.title}</h2>
              <p>{t.research.intro}</p>
            </div>

            <article className='publication-card reveal'>
              <BookOpen size={25} />
              <div className='publication-meta'>RECIMA21 • 2026</div>
              <h3>{t.research.publicationTitle}</h3>
              <div className='publication-authors'>{t.research.authors}</div>
              <p>{t.research.publicationText}</p>
              <div className='publication-footer'>
                <span>ERMAC Regional 8 • INPE</span>
                <a href='https://doi.org/10.47820/recima21.v7i8.8820' target='_blank' rel='noreferrer'>
                  {t.research.read} <ExternalLink size={15} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className='section container experience-section'>
          <div className='experience-heading reveal'>
            <span className='eyebrow'>{t.experience.eyebrow}</span>
            <h2>{t.experience.title}</h2>
          </div>

          <div className='timeline'>
            <article className='timeline-item reveal'>
              <div className='timeline-marker'><BriefcaseBusiness size={18} /></div>
              <div className='timeline-period'>{t.experience.researchPeriod}</div>
              <div className='timeline-content'>
                <h3>{t.experience.researchTitle}</h3>
                <strong>{t.experience.researchOrg}</strong>
                <p>{t.experience.researchText}</p>
              </div>
            </article>

            <article className='timeline-item reveal'>
              <div className='timeline-marker'><BriefcaseBusiness size={18} /></div>
              <div className='timeline-period'>{t.experience.volunteerPeriod}</div>
              <div className='timeline-content'>
                <h3>{t.experience.volunteerTitle}</h3>
                <strong>{t.experience.volunteerOrg}</strong>
                <p>{t.experience.volunteerText}</p>
              </div>
            </article>

            <article className='timeline-item reveal'>
              <div className='timeline-marker'><GraduationCap size={18} /></div>
              <div className='timeline-period'>{t.experience.degreePeriod}</div>
              <div className='timeline-content'>
                <h3>{t.experience.degreeTitle}</h3>
                <strong>{t.experience.degreeOrg}</strong>
                <p>{t.experience.degreeText}</p>
              </div>
            </article>
          </div>
        </section>

        <section className='section container about-section' id='about'>
          <div className='about-copy reveal'>
            <span className='eyebrow'>{t.about.eyebrow}</span>
            <h2>{t.about.title}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <div className='spoken-languages'>
              <strong>{t.about.spokenLanguages}</strong>
              <span>{t.about.spokenLanguagesText}</span>
            </div>
          </div>

          <div className='skills-stack reveal'>
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
            <div className='reveal'>
              <span className='eyebrow'>{t.contact.eyebrow}</span>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>
            </div>
            <div className='contact-links reveal'>
              <a href='mailto:andreyrm.dev@gmail.com'><Mail size={18} /> andreyrm.dev@gmail.com</a>
              <a href='https://www.linkedin.com/in/andreyrodrigues-dev' target='_blank' rel='noreferrer'><Linkedin size={18} /> LinkedIn</a>
              <a href='https://github.com/AndreyRodr' target='_blank' rel='noreferrer'><Github size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className='footer container'>
        <span>© 2026 Andrey Rodrigues</span>
        <a href='#top'>{t.footer.back}</a>
      </footer>
    </div>
  )
}

export default App
