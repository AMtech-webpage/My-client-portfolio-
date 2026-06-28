import { Skill, Project, TimelineStage, Certification, Achievement, GalleryItem, Testimonial, FutureGoal } from './types';

export const FOUNDER_INFO = {
  name: 'Ahmed Abdulsalam',
  brandName: 'HOLANREWAJU TALENTED',
  role: 'Founder of Alpha Technologies',
  titles: [
    'Founder | Alpha Technologies',
    'Graphic Designer',
    'Future Engineering Technologist',
    'Student'
  ],
  country: 'Nigeria',
  tagline: 'Engineering Tomorrow. Building Today.',
  biography: `I am an ambitious, self-driven technology innovator, designer, and student based in Nigeria. Guided by a profound passion for solving complex, real-world problems, I founded Alpha Technologies to merge the boundaries of engineering, computer science, and creative design. From crafting visual identities as HOLANREWAJU TALENTED to experimenting with robotics and embedded hardware, my journey is defined by a relentless curiosity and a commitment to continuous learning. I believe that engineering is more than a discipline—it is a powerful tool to uplift communities, foster educational equity, and engineer a sustainable, smarter tomorrow. My ultimate goal is to become a pioneering engineering technologist, building products that solve concrete problems in Africa and globally.`,
  mission: 'To create innovative technological solutions that improve lives through engineering, software, artificial intelligence, electronics, robotics, and creative design.',
  vision: 'To become one of Africa\'s leading technology companies, building products that have a global impact.',
  coreValues: [
    { name: 'Innovation', desc: 'Constantly challenging boundaries and pioneering new technological frontiers.' },
    { name: 'Excellence', desc: 'Delivering unmatched quality in every line of code, hardware design, and graphic layout.' },
    { name: 'Integrity', desc: 'Conducting our research, design, and business practices with absolute honesty and transparency.' },
    { name: 'Continuous Learning', desc: 'Embracing curiosity as a lifetime compass to absorb and master emerging technologies.' },
    { name: 'Creativity', desc: 'Blending strict engineering principles with elegant design aesthetics.' },
    { name: 'Leadership', desc: 'Empowering communities and demonstrating vision across all our STEM initiatives.' },
    { name: 'Collaboration', desc: 'Working across cross-functional spaces to bring complex technological dreams to reality.' }
  ]
};

export const SKILLS_DATA: Skill[] = [
  // Programming
  { name: 'HTML', level: 95, category: 'Programming', description: 'Semantic structure, accessibility, SEO optimization.' },
  { name: 'CSS', level: 90, category: 'Programming', description: 'Modern Tailwind CSS, responsive design, animations.' },
  { name: 'JavaScript', level: 85, category: 'Programming', description: 'ES6+, DOM manipulation, dynamic interactions, React hooks.' },
  { name: 'Python', level: 80, category: 'Programming', description: 'Data structures, scripting, basic AI, and backend logic.' },
  { name: 'C++', level: 70, category: 'Programming', description: 'Hardware level programming, memory management, Arduino scripts.' },
  
  // Engineering
  { name: 'Electronics', level: 85, category: 'Engineering', description: 'Circuit analysis, schematic design, PCB concepts, active components.' },
  { name: 'Embedded Systems', level: 78, category: 'Engineering', description: 'Microcontrollers, sensors calibration, bus communication.' },
  { name: 'Robotics', level: 72, category: 'Engineering', description: 'Actuators, motor drivers, sensor feedback control loops.' },
  
  // Creative
  { name: 'Graphic Design', level: 92, category: 'Creative', description: 'Typography, layouts, photo manipulation, branding.' },
  { name: 'Brand Identity', level: 88, category: 'Creative', description: 'Logo suites, brand guidelines, color theory, asset packs.' },
  { name: 'UI Design', level: 85, category: 'Creative', description: 'Figma wireframes, dynamic interactive prototyping, usability design.' },
  
  // Soft Skills
  { name: 'Critical Thinking', level: 95, category: 'Soft Skills', description: 'Deconstructing complex engineering problems step-by-step.' },
  { name: 'Leadership', level: 90, category: 'Soft Skills', description: 'Directing peer group projects and coordinating science clubs.' },
  { name: 'Communication', level: 88, category: 'Soft Skills', description: 'Articulating technical concepts clearly to diverse audiences.' },
  { name: 'Problem Solving', level: 92, category: 'Soft Skills', description: 'Overcoming coding hurdles and hardware debugging creatively.' },
  { name: 'Creativity', level: 95, category: 'Soft Skills', description: 'Ideating novel solutions and design patterns.' },
  { name: 'Learning Agility', level: 95, category: 'Soft Skills', description: 'Rapidly absorbing and applying complex frameworks.' }
];

export const ROADMAP_DATA: TimelineStage[] = [
  {
    id: 'stage-1',
    period: 'Early Days',
    title: 'Secondary School',
    subtitle: 'Nurturing the Engineering Spark',
    description: 'Began exploring science, physics, and basic mathematics, which built a solid analytical foundation. Joined local STEM clubs and started taking apart appliances to study circuitry.',
    details: [
      'Discovered passion for logical design and physical sciences.',
      'Achieved distinction in STEM subjects.',
      'Led the secondary school science representation club.'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'stage-2',
    period: 'The Foundation',
    title: 'Learning Programming',
    subtitle: 'Deciphering the Code of the Future',
    description: 'Dived into software development. Learned HTML, CSS, JavaScript for the web, and Python for general purpose programming. Started understanding how software controls hardware.',
    details: [
      'Mastered fundamentals of web architecture.',
      'Built custom static websites from scratch.',
      'Completed multiple algorithm challenges in Python.'
    ],
    icon: 'Code'
  },
  {
    id: 'stage-3',
    period: 'Application',
    title: 'Building Real Projects',
    subtitle: 'Connecting Bits and Atoms',
    description: 'Transitioned from exercises to tangible creations. Developed IoT prototypes, graphic designs under "HOLANREWAJU TALENTED", and software tools. Practiced hardware-software interface designs.',
    details: [
      'Created custom microcontroller setups with sensors.',
      'Delivered brand identities for several local projects.',
      'Maintained GitHub repositories for personal utilities.'
    ],
    icon: 'Cpu'
  },
  {
    id: 'stage-4',
    period: 'Current Stage',
    title: 'Engineering Technologist',
    subtitle: 'Advanced Systems and Tech Mastery',
    description: 'Advancing studies and practical research into complex technology stacks. Focusing on Artificial Intelligence integration, embedded robotics, and premium user experience systems.',
    details: [
      'Studying advanced electronics theory and system controls.',
      'Integrating modern React frameworks for dynamic control dashboards.',
      'Prototyping responsive automation units.'
    ],
    icon: 'Settings'
  },
  {
    id: 'stage-5',
    period: 'Medium Term',
    title: 'Technology Entrepreneur',
    subtitle: 'Founding Alpha Technologies commercially',
    description: 'Aiming to establish Alpha Technologies as a registered corporate entity in Africa. Intending to hire core talented developers, designers, and hardware tinkerers to build enterprise scale solutions.',
    details: [
      'Drafting business strategies for localized technology hardware.',
      'Fostering relationships with technology incubators.',
      'Expanding graphic and product styling models into full-scale agency systems.'
    ],
    icon: 'Briefcase'
  },
  {
    id: 'stage-6',
    period: 'Long Term',
    title: 'Global Innovator',
    subtitle: 'Global Solutions for Human Improvement',
    description: 'Developing technologies that achieve international recognition. Leading initiatives that bring clean renewable energy solutions, robotic assistants, and educational technology to underserved global regions.',
    details: [
      'Speaking at international technological conventions.',
      'Publishing research papers on affordable robotics.',
      'Deploying enterprise solutions across continents.'
    ],
    icon: 'Globe'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Alpha Technologies Platform',
    description: 'The premium digital ecosystem showcasing our futuristic engineering marvels and digital brand portfolio, fully responsive and dark-centric.',
    longDescription: 'A fully custom built ecosystem using React, Tailwind CSS, and Motion. It acts as both the corporate hub of Alpha Technologies and a secure terminal highlightingAhmed Abdulsalam\'s creative portfolios. Implements premium glassmorphism, fluid interactive filters, dynamic canvas simulations, and dark/light modes.',
    category: 'Software',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    status: 'Completed',
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: 'portfolio'
  },
  {
    id: 'proj-2',
    title: 'HOLANREWAJU Graphic Portfolio',
    description: 'A curated collection of branding suites, custom typography layouts, logos, and advertising graphics demonstrating visual storytelling.',
    longDescription: 'Under the creator brand "HOLANREWAJU TALENTED", this collection illustrates comprehensive identity systems. Each project is crafted with precise color palettes, vector typography, and grid-aligned visual hierarchy to create memorable, professional, and distinctive business expressions.',
    category: 'Design',
    techStack: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy', 'UI/UX'],
    status: 'Completed',
    demoUrl: '#',
    imageUrl: 'graphic'
  },
  {
    id: 'proj-3',
    title: 'Smart Automation Hub',
    description: 'A Python-driven IoT control system for remote device management, featuring telemetry visualizations and real-time triggers.',
    longDescription: 'A micro-automation script bundle and hardware schema utilizing Python socket connections. It coordinates small relays, logs temperature fluctuations from sensor nodes, and presents a responsive dashboard for terminal controls.',
    category: 'Software',
    techStack: ['Python', 'MQTT', 'Flask', 'JSON Telemetry'],
    status: 'Beta',
    githubUrl: '#',
    imageUrl: 'python'
  },
  {
    id: 'proj-4',
    title: 'IoT Micro-Grid Schematic',
    description: 'An advanced circuit design focusing on renewable solar charging and battery management systems for low-power smart nodes.',
    longDescription: 'A theoretical schematic and breadboard prototyping concept for a modular green energy management unit. It leverages low-draw voltage sensors to prevent over-discharging of batteries and safely diverts unused current to auxiliary modules.',
    category: 'Electronics',
    techStack: ['Circuit Design', 'Microcontrollers', 'Solar Telemetry', 'Protocols'],
    status: 'Concept',
    imageUrl: 'electronics'
  },
  {
    id: 'proj-5',
    title: 'LLM Cognitive Co-Pilot',
    description: 'An interactive chatbot terminal integrating natural language processing APIs to support hardware design troubleshooting.',
    longDescription: 'An API-driven laboratory tool designed to help engineering students troubleshoot hardware errors. It accepts descriptions of broken circuits or code, accesses tailored databases of component datasheets, and replies with structured fixes.',
    category: 'Future',
    techStack: ['Gemini API', 'React', 'Node.js', 'Vector Search'],
    status: 'In Progress',
    githubUrl: '#',
    demoUrl: '#',
    imageUrl: 'ai'
  },
  {
    id: 'proj-6',
    title: 'Modular Autonomous Rover',
    description: 'A sensor-driven obstacle avoidance robotic system prototype utilizing infrared/ultrasonic telemetry and smart pathfinding.',
    longDescription: 'A robotic model built using C++ and Arduino microcontrollers. The model integrates dual motor controllers, ultrasonic rangers, and optical encoders, executing real-time obstacle avoidance algorithms to navigate simple mazes.',
    category: 'Robotics',
    techStack: ['C++', 'Arduino', 'Actuators', 'Sensors Integration'],
    status: 'In Progress',
    githubUrl: '#',
    imageUrl: 'robotics'
  }
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'ach-1',
    value: '15+',
    label: 'Projects Built',
    icon: 'Cpu',
    description: 'Functional software programs, IoT experiments, and engineering prototypes developed.'
  },
  {
    id: 'ach-2',
    value: '10+',
    label: 'Tech Stacks Learned',
    icon: 'BookOpen',
    description: 'Proficiency in frontend frameworks, hardware architectures, and programming languages.'
  },
  {
    id: 'ach-3',
    value: '120+',
    label: 'Designs Created',
    icon: 'Palette',
    description: 'High-quality graphic designs, logos, and visual assets designed under HOLANREWAJU TALENTED.'
  },
  {
    id: 'ach-4',
    value: '1,500+',
    label: 'Hours of Learning',
    icon: 'Clock',
    description: 'Dedicated to self-education, reading documentations, tutorials, and practical engineering labs.'
  },
  {
    id: 'ach-5',
    value: '5+',
    label: 'Certificates Earned',
    icon: 'Award',
    description: 'Verified qualifications in computer science, design, and systems engineering fields.'
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-1',
    title: 'Google AI Essentials',
    issuer: 'Google (via Coursera)',
    date: 'June 2025',
    credentialId: 'GG-AI-9021X',
    verificationUrl: '#',
    imageUrl: 'cert_google'
  },
  {
    id: 'cert-2',
    title: 'Responsive Web Design Certificate',
    issuer: 'freeCodeCamp',
    date: 'January 2025',
    credentialId: 'FCC-WEB-7721A',
    verificationUrl: '#',
    imageUrl: 'cert_fcc'
  },
  {
    id: 'cert-3',
    title: 'Introduction to Embedded Systems',
    issuer: 'Alpha Tech Academy',
    date: 'April 2025',
    credentialId: 'ATA-EMB-883',
    verificationUrl: '#',
    imageUrl: 'cert_embedded'
  },
  {
    id: 'cert-4',
    title: 'Graphic Design Masterclass',
    issuer: 'HOLANREWAJU TALENTED Design Lab',
    date: 'September 2024',
    credentialId: 'HRT-DSN-01',
    verificationUrl: '#',
    imageUrl: 'cert_design'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Robotics Workshop Prototyping',
    category: 'moment',
    imageUrl: 'workshop',
    description: 'Ahmed testing circuit responses of the ultrasonic sensor module on the rover breadboard.'
  },
  {
    id: 'gal-2',
    title: 'Cyberpunk Brand Identity System',
    category: 'graphic',
    imageUrl: 'branding_cyberpunk',
    description: 'A modern, futuristic brand guideline concept developed under HOLANREWAJU TALENTED.'
  },
  {
    id: 'gal-3',
    title: 'Alpha OS Web Interface Concept',
    category: 'screenshot',
    imageUrl: 'alpha_os',
    description: 'A mock operating system interface designed to control smart home systems via a web browser.'
  },
  {
    id: 'gal-4',
    title: 'First Place - Local STEM Hackathon',
    category: 'award',
    imageUrl: 'award_stem',
    description: 'Award certificate presented for the autonomous disaster response concept model.'
  },
  {
    id: 'gal-5',
    title: 'Smart Solar Battery Charger PCB',
    category: 'screenshot',
    imageUrl: 'pcb_charging',
    description: 'A render of our proprietary 3D PCB layout for low-power node battery charge controller.'
  },
  {
    id: 'gal-6',
    title: 'Nigeria STEM Education Drive',
    category: 'moment',
    imageUrl: 'stem_drive',
    description: 'Ahmed tutoring junior high students on fundamentals of electrical logic gates.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Samuel Olawale',
    role: 'Senior STEM Advisor & Lecturer',
    company: 'Federal Tech Association',
    text: 'Ahmed exhibits a rare combination of pure engineering intellect and artistic creativity. His approach to problem-solving and rapid learning of complex embedded system architectures is outstanding. Alpha Technologies is indeed the future.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Sarah Adebayo',
    role: 'Creative Director',
    company: 'Apex Media Solutions',
    text: 'Collaborating with Ahmed (HOLANREWAJU TALENTED) was an absolute pleasure. He revamped our brand identity with a clean, high-concept modern aesthetic that instantly resonated with our clients. Excellent attention to visual detail!',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Engr. David Okafor',
    role: 'Robotics Research Lead',
    company: 'African Innovators Hub',
    text: 'I have mentored several students, but Ahmed\'s drive to learn is exceptional. He easily translates theoretical math and algorithms into real Python and Arduino code. He is bound to make an impressive mark as an engineering technologist.',
    rating: 5
  }
];

export const FUTURE_GOALS_DATA: FutureGoal[] = [
  {
    id: 'goal-1',
    title: 'Engineering Technology',
    description: 'Achieve formal professional accreditation in systems engineering, designing large-scale automated infrastructure systems.',
    timeline: '1-3 Years',
    icon: 'GraduationCap',
    color: 'from-purple-500/20 to-blue-500/20 border-purple-500/30'
  },
  {
    id: 'goal-2',
    title: 'Artificial Intelligence',
    description: 'Develop edge AI algorithms that process sensory telemetry directly on microchips, removing dependencies on cloud networks.',
    timeline: '2-4 Years',
    icon: 'Brain',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
  },
  {
    id: 'goal-3',
    title: 'Robotics',
    description: 'Build affordable, terrain-capable robots that can navigate agricultural fields to monitor crops and assist local Nigerian farmers.',
    timeline: '3-5 Years',
    icon: 'Cpu',
    color: 'from-cyan-500/20 to-purple-500/20 border-cyan-500/30'
  },
  {
    id: 'goal-4',
    title: 'Renewable Energy',
    description: 'Design self-healing smart microgrids optimized for rural communities, leveraging AI to allocate battery power dynamically.',
    timeline: '2-3 Years',
    icon: 'Zap',
    color: 'from-yellow-500/20 to-amber-500/20 border-yellow-500/30'
  },
  {
    id: 'goal-5',
    title: 'Embedded Systems',
    description: 'Launch customized, open-source development kits manufactured in Africa, designed specifically to introduce children to IoT coding.',
    timeline: '1-2 Years',
    icon: 'Microchip',
    color: 'from-red-500/20 to-purple-500/20 border-red-500/30'
  },
  {
    id: 'goal-6',
    title: 'Educational Tech',
    description: 'Scale "Alpha Academics" as an interactive, multilingual mobile hub delivering free offline robotics lessons to students across West Africa.',
    timeline: '2-5 Years',
    icon: 'School',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30'
  }
];
