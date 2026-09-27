import PageHeader from '@/components/PageHeader';

type Study = {
  title: string;
  meta: string;
  image: string;
};

type ProjectProgram = {
  title: string;
  question: string;
  description: string;
  tags: string[];
  mainImage: string;
  mainTitle: string;
  mainMeta: string;
  studies: Study[];
};

const projectPrograms: ProjectProgram[] = [
  {
    title: 'Intelligent Virtual Agents & Social Connection',
    question: 'How can intelligent virtual agents support meaningful social connection?',
    description:
      'We investigate how intelligent virtual agents and immersive technologies can support social interaction, communication, and meaningful connections between people and virtual beings—and among people themselves.',
    tags: ['Virtual Agents', 'Social Presence', 'Agent Personality', 'Social Connection'],
    mainImage: '/assets/publications/Nam2025eoa.webp',
    mainTitle: 'AI-Powered Embodied Avatars',
    mainMeta: 'TVCG 2025 · Communication & social connection',
    studies: [
      {
        title: 'The Dominance Effect',
        meta: 'CHI 2026 · Agent behavior & decision-making',
        image: '/assets/publications/Kim2026tde.webp',
      },
      {
        title: 'Watch Buddy',
        meta: 'ISMAR 2024 · Expressive virtual agents',
        image: '/assets/publications/Nam2024wbe.webp',
      },
      {
        title: 'Touching the Virtual Dog',
        meta: 'ISMAR 2025 · Haptics & social bonding',
        image: '/assets/publications/Fouad2025ttv.webp',
      },
    ],
  },
  {
    title: 'Virtual Bodies, Identity & Embodiment',
    question: 'How do virtual bodies shape who we are and how we behave?',
    description:
      'We investigate how avatars and virtual bodies shape identity, self-perception, embodiment, behavior, interpersonal perception, and interaction across immersive environments.',
    tags: ['Avatars', 'Embodiment', 'Identity', 'Perception'],
    mainImage: '/assets/publications/Khan2026ioa.webp',
    mainTitle: 'Avatar Appearance & Locomotion',
    mainMeta: 'TVCG 2026 · Representation & movement',
    studies: [
      {
        title: 'Avatar–Locomotion Congruence',
        meta: 'TVCG / ISMAR 2025 · Identification & experience',
        image: '/assets/publications/Khan2025ill.webp',
      },
      {
        title: 'Human-to-Avatar Identity Representation',
        meta: 'TVCG / IEEE VR 2025 · Identity & personality',
        image: '/assets/publications/Kang2025hcc.webp',
      },
      {
        title: 'Avatar Face & Interpersonal Distance',
        meta: 'ISMAR 2024 · Realism & social presence',
        image: '/assets/publications/Kang2024gdi.webp',
      },
    ],
  },
  {
    title: 'Human-Aware & Adaptive XR',
    question: 'How can XR understand people and adapt to them?',
    description:
      'We develop XR systems that sense and model users—their behavior, emotion, physiology, preferences, and context—and adapt interfaces, agents, and interaction accordingly.',
    tags: ['User Modeling', 'Affective Computing', 'Multimodal Interaction', 'Adaptation'],
    mainImage: '/assets/publications/Zhang2026upa.webp',
    mainTitle: 'User Profiling & Modeling in XR',
    mainMeta: 'TVCG 2026 · Human-aware XR foundations',
    studies: [
      {
        title: 'Context-Aware Empathic MR Agents',
        meta: 'TVCG 2026 · Empathy & adaptive interaction',
        image: '/assets/publications/Chang2025epe.webp',
      },
      {
        title: 'When Senses Collide',
        meta: 'ISMAR 2025 · Multimodal task & notification design',
        image: '/assets/publications/Kaur2025wsc.webp',
      },
      {
        title: 'Personalized Facial Emotion Recognition under HMD Occlusion',
        meta: 'VRST 2026 · Emotion recognition & personalization',
        image: '/assets/publications/Lee2026agr.webp',
      },
    ],
  },
  {
    title: 'Intelligent XR for Healthcare',
    question: 'How can immersive intelligence support people in high-stakes care?',
    description:
      'We create intelligent XR systems for clinical decision support, team training, healthcare education, and culturally responsive simulation in complex, time-critical environments.',
    tags: ['Clinical Simulation', 'Decision Support', 'AI Guidance', 'Team Training'],
    mainImage: '/assets/publications/Kang2025ard.webp',
    mainTitle: 'AR Decision Support for Cardiopulmonary Arrest',
    mainMeta: 'IMSH 2025 · Clinical decision support',
    studies: [
      {
        title: 'AR-Guided Pediatric Resuscitation',
        meta: 'JAMA Network Open 2026 · Randomized clinical trial',
        image: '/assets/publications/Siebert2026arg.webp',
      },
      {
        title: 'Learning to Lead Under Stress',
        meta: 'CHI XR4CE 2026 · AI guidance for team leaders',
        image: '/assets/publications/Lee2026ltl.webp',
      },
      {
        title: 'Emotionally Responsive Virtual Parent',
        meta: 'ISMAR 2022 · Multimodal nursing simulation',
        image: '/assets/publications/Nam2022aer.webp',
      },
    ],
  },
  {
    title: 'Immersive Experiences for Wellbeing',
    question: 'How can immersive experiences support wellbeing, recovery, and reflection?',
    description:
      'We explore how immersive experiences can support restoration, emotional recovery, reflection, meaningful connection, culturally situated care, and engagement with places and memories.',
    tags: ['Wellbeing', 'Stress & Recovery', 'Nature', 'Memory & Reflection'],
    mainImage: '/assets/publications/Nam2026sra.webp',
    mainTitle: 'XR Companion Interaction',
    mainMeta: 'TVCG 2026 · Relational openness & reflection',
    studies: [
      {
        title: 'Immersive Virtual Nature',
        meta: 'TVCG 2025 · Wellbeing & nature connectedness',
        image: '/assets/publications/Kim2025eiv.webp',
      },
      {
        title: 'Bridging the Distance',
        meta: 'ISMAR XRAI-SCA 2026 · Culturally situated maternal-care VR',
        image: '/assets/publications/Fouad2026btd.webp',
      },
      {
        title: 'VR Activities for Stress Relief',
        meta: 'ISMAR 2023 · Stress relief & recovery',
        image: '/assets/publications/Han2023acs.webp',
      },
    ],
  },
  {
    title: 'XR + AI Digital Twins',
    question: 'How can people understand and act within complex physical systems?',
    description:
      'We combine XR, AI, and digital twins to help people monitor, navigate, understand, collaborate around, and interact with complex physical systems and intelligent environments.',
    tags: ['Digital Twins', 'Industrial XR', 'Spatial Interaction', 'Human-AI Collaboration'],
    mainImage: '/assets/publications/Marzban2025aid.webp',
    mainTitle: 'Immersive Digital Twin for Pipeline Monitoring',
    mainMeta: 'ISMAR XRAI-SCA 2025 · Leak simulation & monitoring',
    studies: [
      {
        title: 'SHAPE: XR + AI Digital Twin',
        meta: 'ISMAR XRAI-SCA 2026 · Hydrogen pipeline systems',
        image: '/assets/publications/Sarvesh2026f2a.webp',
      },
      {
        title: 'AVAGENTs for Knowledge Transfer',
        meta: 'ISMAR XRAI-SCA 2026 · Tacit knowledge & virtual agents',
        image: '/assets/publications/Nam2026aft.webp',
      },
      {
        title: 'XR & Digital Twins in Oil and Gas',
        meta: 'ISMAR 2024 · Applications, trends & directions',
        image: '/assets/publications/Sarvesh2024era.webp',
      },
    ],
  },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Research in action"
        copy="Our projects turn research questions into systems, studies, and experiences. Rather than organizing our work by individual grants, we group related studies into evolving research programs that show what we are building, investigating, and learning."
      />

      <section className="section projects-portfolio-intro">
        <div className="wrap projects-portfolio-intro-grid">
          <div>
            <div className="eyebrow">Project portfolio</div>
            <h2>From questions to working systems.</h2>
          </div>
          <p>
            Each program below brings together multiple studies and publications around a shared problem. The visuals are drawn from our actual research outputs—prototype screenshots, experimental conditions, study figures, and system demonstrations.
          </p>
        </div>
      </section>

      <section className="projects-portfolio">
        <div className="wrap">
          {projectPrograms.map((project, index) => (
            <article
              className={`project-program ${index % 2 === 1 ? 'project-program-reverse' : ''}`}
              key={project.title}
            >
              <div className="project-program-visual">
                <div className="project-program-main-image">
                  <img src={project.mainImage} alt="" />
                </div>
                <div className="project-program-main-info">
                  <strong>{project.mainTitle}</strong>
                  <small>{project.mainMeta}</small>
                </div>
              </div>

              <div className="project-program-copy">
                <div className="project-program-number">0{index + 1}</div>
                <h2>{project.title}</h2>
                <h3>{project.question}</h3>
                <p>{project.description}</p>

                <div className="project-program-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-selected-label">Selected studies</div>
                <div className="project-study-grid">
                  {project.studies.map((study) => (
                    <div className="project-study" key={study.title}>
                      <div className="project-study-image">
                        <img src={study.image} alt="" />
                      </div>
                      <strong>{study.title}</strong>
                      <small>{study.meta}</small>
                    </div>
                  ))}
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
