import cyberGameImg from '../assets/images/project_3d_cyber_game_1790836025084.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Website' | 'Web App' | 'Game';
  featuredSpan: 'large' | 'normal' | 'wide';
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  technologies: string[];
  image: string;
  liveDemoUrl: string;
  githubUrl?: string;
  isPlayableGame?: boolean;
  isSamplePlaceholder?: boolean;
  year: string;
}

export interface ServiceItem {
  number: string;
  id: string;
  title: string;
  description: string;
  features: string[];
  accentColor: 'lime' | 'purple' | 'cyan' | 'emerald';
  deliveryNote: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  accent: 'lime' | 'purple' | 'cyan' | 'white';
  skills: {
    name: string;
    detail: string;
    iconKey: string;
  }[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  organization: string;
  quote: string;
  projectType: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'UDAYVEER',
    displayName: 'Udayveer',
    portraitUrl: 'https://cdn.phototourl.com/member/2026-10-01-68b569d3-fe35-4c02-aefd-822e04dc9609.png',
    age: 18,
    location: 'India',
    roles: ['Website Developer', 'Game Developer'],
    primaryPromise: 'Your website, delivered in just 5 days.',
    availability: 'Available for new projects',
    greeting: "Hey, I'm",
    heroHeadline: {
      line1: 'I BUILD WEBSITES.',
      line2: 'I CREATE GAMES.',
      line3: 'I TURN IDEAS INTO DIGITAL EXPERIENCES.',
    },
    heroDescription:
      'I’m Udayveer, an 18-year-old website and game developer focused on creating modern websites, interactive experiences and engaging digital products.',
    heroSubline:
      'From idea to launch — I turn concepts into experiences people remember.',
    fastDeliveryBanner: 'Fast delivery — websites completed in just 5 days.',
    aboutHeading: 'ABOUT ME',
    aboutSubheading: 'CREATIVE MIND. TECHNICAL BUILDER.',
    aboutParagraphs: [
      'Hi, I’m Udayveer — an 18-year-old website and game developer who loves turning ideas into interactive digital experiences.',
      'I work on modern websites, web applications and games, combining clean engineering with functional technology.',
      'My goal is simple: understand the idea, build it properly and deliver an experience that feels fast, modern and memorable.',
    ],
    extendedAbout: [
      'Based in India, I bridge the gap between high-conversion web engineering and engaging 2D game development. Whether architecting a responsive Next.js website that ships in 5 days or crafting a fast-paced 2D game in Unity and HTML5 Canvas, I focus on crisp visual hierarchy, smooth 60 FPS performance, and clean maintainable code.',
      'Every project is handled directly by me from initial planning to final deployment — ensuring zero communication bottlenecks and rapid iteration.',
    ],
    personalityTraits: [
      { label: 'Creative', detail: 'Original concepts & interactive 2D worlds', accent: 'lime' },
      { label: 'Technical', detail: 'Clean architecture & 60 FPS code', accent: 'cyan' },
      { label: 'Fast', detail: '5-day streamlined website delivery', accent: 'purple' },
      { label: 'Curious', detail: 'Exploring 2D mechanics & modern web', accent: 'lime' },
      { label: 'Problem Solver', detail: 'Turning complex ideas into clean code', accent: 'cyan' },
    ],
    email: 'veer.ud.1012@gmail.com',
    emailNote: 'Direct contact email',
    socials: [
      {
        name: 'GitHub',
        handle: '@veerud1012-rgb',
        url: 'https://github.com/veerud1012-rgb',
        logoUrl: 'https://cdn.phototourl.com/member/2026-10-01-c8765de6-dd90-4b13-996a-175f76107c53.png',
        glowColor: 'lime',
        placeholder: false,
      },
      {
        name: 'Twitter / X',
        handle: '@Udayveer1012',
        url: 'https://x.com/Udayveer1012',
        logoUrl: 'https://cdn.phototourl.com/member/2026-10-01-6346c95b-03a9-4974-960f-1e93e7169b9b.png',
        glowColor: 'cyan',
        placeholder: false,
      },
      {
        name: 'Discord',
        handle: 'discord.gg/3r46nyMDQ',
        url: 'https://discord.gg/3r46nyMDQ',
        logoUrl: 'https://cdn.phototourl.com/member/2026-10-01-bece2d25-679e-48bc-8c1c-65f47a88ee74.png',
        glowColor: 'purple',
        placeholder: false,
      },
      {
        name: 'LinkedIn',
        handle: '/in/udayveer',
        url: '#contact',
        logoUrl: '',
        glowColor: 'cyan',
        placeholder: true,
      },
      {
        name: 'Instagram',
        handle: '@udayveer.creates',
        url: '#contact',
        logoUrl: '',
        glowColor: 'purple',
        placeholder: true,
      },
      {
        name: 'YouTube',
        handle: '@udayveergamedev',
        url: '#contact',
        logoUrl: '',
        glowColor: 'lime',
        placeholder: true,
      },
    ],
  },

  quickStats: [
    {
      value: '5 DAYS',
      label: 'Fast Website Delivery',
      context: 'Streamlined concept-to-launch workflow',
      accent: 'lime',
    },
    {
      value: '18',
      label: 'Young Developer',
      context: 'Modern web & 2D game engineering',
      accent: 'purple',
    },
    {
      value: 'WEB + 2D GAME',
      label: 'Development Focus',
      context: 'Full-stack web apps & 2D games',
      accent: 'cyan',
    },
    {
      value: '24/7',
      label: 'Project Communication',
      context: 'Direct updates at every milestone',
      accent: 'lime',
    },
  ],

  services: [
    {
      number: '01',
      id: 'website-dev',
      title: 'Website Development',
      description:
        'Modern, responsive and high-performance websites designed around your brand, audience and goals.',
      features: [
        'Business websites',
        'Portfolio websites',
        'Landing pages',
        'E-commerce websites',
        'Web applications',
        'Responsive development',
      ],
      accentColor: 'lime',
      deliveryNote: 'Eligible for 5-Day Express Delivery',
    },
    {
      number: '02',
      id: 'game-dev',
      title: '2D Game Development',
      description:
        'Interactive 2D game experiences with engaging gameplay, polished visuals and responsive controls.',
      features: [
        '2D platformer & action games',
        '2D arcade games',
        'Mobile 2D games',
        'Browser 2D games',
        '2D game prototypes',
        'Interactive experiences',
      ],
      accentColor: 'purple',
      deliveryNote: 'Custom playable 2D builds & prototypes',
    },
    {
      number: '03',
      id: 'website-redesign',
      title: 'Website Redesign',
      description:
        'Transform outdated websites into modern, responsive and engaging digital experiences.',
      features: [
        'Complete visual & code overhaul',
        'Mobile responsiveness upgrade',
        'Speed & Core Web Vitals optimization',
        'Modern interactive features',
        'Conversion-focused restructuring',
      ],
      accentColor: 'cyan',
      deliveryNote: 'Complete transformation in 5 days',
    },
  ] as ServiceItem[],

  projects: [
    {
      id: 'attendix-web-app',
      title: 'Attendix — Smart Attendance & Management Web App',
      category: 'Web App',
      featuredSpan: 'large',
      shortDescription:
        'Modern attendance tracking and management web application built for fast daily logging, real-time insights, and responsive cross-device access.',
      fullDescription:
        'A live production web application built and deployed by Udayveer. Attendix streamlines attendance tracking and records management with an intuitive interface, real-time status tracking, and responsive performance across desktop and mobile.',
      deliverables: [
        'Full Responsive Web Application',
        'Real-Time Attendance Tracking & Dashboard',
        'Live Production Deployment on Vercel',
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
      image: 'https://cdn.phototourl.com/member/2026-10-01-f16f3fec-4d6f-4479-bff4-40906cacd465.png',
      liveDemoUrl: 'https://attendix-ez85wpg1n-veerud1012-rgbs-projects.vercel.app/',
      githubUrl: 'https://github.com/veerud1012-rgb',
      isSamplePlaceholder: false,
      year: '2026',
    },
    {
      id: 'aether-protocol-game',
      title: 'Aether Protocol — 2D Sci-Fi Action Prototype',
      category: 'Game',
      featuredSpan: 'normal',
      shortDescription:
        'Stylized 2D cyber-ruins level design and side-scrolling action prototype featuring parallax lighting and responsive combat controls.',
      fullDescription:
        'An original 2D world-building and gameplay systems showcase. Features multi-layer parallax backgrounds, glowing energy portals, custom 2D level design, and responsive movement mechanics.',
      deliverables: [
        '2D Level Design & Parallax Worlds',
        '2D Player Controller & Traversal Systems',
        'In-Game HUD & 2D Gameplay Mechanics',
      ],
      technologies: ['Unity 2D', '2D Level Design', 'JavaScript', 'Gameplay Systems'],
      image: cyberGameImg,
      liveDemoUrl: '#game-showcase',
      githubUrl: 'https://github.com/veerud1012-rgb',
      isPlayableGame: true,
      isSamplePlaceholder: true,
      year: '2026',
    },
    {
      id: 'neon-chat-ai',
      title: 'Neon Chat AI — Interactive AI Web Platform',
      category: 'Website',
      featuredSpan: 'normal',
      shortDescription:
        'Modern neon-themed conversational AI web platform featuring real-time responses, sleek dark interface, and responsive cross-device engineering.',
      fullDescription:
        'A live production web project built and deployed by Udayveer. Neon Chat AI delivers a fast, responsive conversational experience with custom neon dark-mode aesthetics, smooth interactions, and mobile-first ergonomics.',
      deliverables: [
        'Full Responsive Web Application',
        'Interactive Conversational Interface',
        'Live Production Deployment on Vercel',
      ],
      technologies: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
      image: 'https://cdn.phototourl.com/member/2026-10-01-26863897-de59-4bd0-9583-9d1c1c9cb762.png',
      liveDemoUrl: 'https://neonchatai.vercel.app/',
      githubUrl: 'https://github.com/veerud1012-rgb',
      isSamplePlaceholder: false,
      year: '2026',
    },
    {
      id: 'neon-drift-arcade',
      title: 'Neon Drift: Cyber Runner — Playable 2D Browser Game',
      category: 'Game',
      featuredSpan: 'wide',
      shortDescription:
        'Fast-paced 60 FPS browser-playable 2D arcade experience with custom particle physics, synth-inspired visual feedback, and controller-ready mechanics.',
      fullDescription:
        'Designed and coded to bridge web technologies with 2D game loop architecture. Features real-time 2D collision detection, dynamic obstacle spawning, score multiplier mechanics, and a sleek retro-futuristic HUD.',
      deliverables: [
        '60 FPS Custom 2D Canvas Game Loop',
        'Interactive Score & 2D Physics System',
        'Responsive Desktop & Touch Controls',
      ],
      technologies: ['JavaScript', 'React', '2D Gameplay Systems', 'HTML5 Canvas'],
      image: cyberGameImg,
      liveDemoUrl: '#game-showcase',
      githubUrl: 'https://github.com/veerud1012-rgb',
      isPlayableGame: true,
      isSamplePlaceholder: false,
      year: '2026',
    },
  ] as ProjectItem[],

  skillCategories: [
    {
      id: 'web',
      title: 'Web Development',
      subtitle: 'Fast, semantic, and responsive modern web applications',
      accent: 'lime',
      skills: [
        { name: 'HTML', detail: 'Semantic structure & SEO accessibility', iconKey: 'Code2' },
        { name: 'CSS', detail: 'Modern layouts, grid & fluid animations', iconKey: 'Layers' },
        { name: 'JavaScript', detail: 'ES6+, async logic & DOM interactivity', iconKey: 'Braces' },
        { name: 'React', detail: 'Component architecture & state hooks', iconKey: 'Atom' },
        { name: 'Next.js', detail: 'SSR, routing & production web apps', iconKey: 'Globe' },
        { name: 'Tailwind CSS', detail: 'Bespoke utility-first styling systems', iconKey: 'Palette' },
      ],
    },
    {
      id: 'game',
      title: '2D Game Development',
      subtitle: 'Interactive 2D worlds, arcade mechanics, and real-time 2D engines',
      accent: 'purple',
      skills: [
        { name: 'Unity 2D', detail: '2D cross-platform & arcade game creation', iconKey: 'Gamepad2' },
        { name: 'HTML5 Canvas', detail: '60 FPS browser-based 2D games', iconKey: 'Cpu' },
        { name: '2D Game Workflows', detail: 'Rapid prototyping to playable 2D build', iconKey: 'Workflow' },
        { name: '2D Level Design', detail: 'Tilemaps, parallax worlds & stage layout', iconKey: 'Box' },
        { name: 'In-Game HUDs', detail: 'Menus, overlays & 2D game telemetry', iconKey: 'MonitorPlay' },
        { name: 'Gameplay Systems', detail: '2D controls, physics & core loops', iconKey: 'Joystick' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Workflow',
      subtitle: 'Daily production environment and version control pipeline',
      accent: 'cyan',
      skills: [
        { name: 'Git', detail: 'Version control & clean commit history', iconKey: 'GitBranch' },
        { name: 'GitHub', detail: 'Repositories, CI workflows & releases', iconKey: 'Terminal' },
        { name: 'VS Code', detail: 'High-speed development environment', iconKey: 'Code' },
      ],
    },
  ] as SkillCategory[],

  techMarquee: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Git',
    'GitHub',
    'Unity 2D',
    'HTML5 Canvas',
    '2D Game Dev',
  ],

  processSteps: [
    {
      step: '01',
      title: 'DISCOVER',
      description: 'Understand the idea, requirements and goals.',
      detail: 'We align on your target audience, core features, visual direction, and project scope.',
      accent: 'lime',
    },
    {
      step: '02',
      title: 'ARCHITECT',
      description: 'Plan the structure, layout, and technical foundation.',
      detail: 'Structuring responsive layouts, component hierarchy, interactive states, and game mechanics.',
      accent: 'purple',
    },
    {
      step: '03',
      title: 'DEVELOP',
      description: 'Build the website/game with responsive and interactive functionality.',
      detail: 'Writing clean, modular code with fluid animations, responsive breakpoints, and fast load times.',
      accent: 'cyan',
    },
    {
      step: '04',
      title: 'LAUNCH',
      description: 'Test, polish and prepare the final product for launch.',
      detail: 'Cross-device QA, performance optimization, SEO metadata setup, and smooth deployment.',
      accent: 'lime',
    },
  ],

  fiveDayTimeline: [
    {
      day: 'DAY 01',
      title: 'Discovery & Planning',
      summary: 'Goals, sitemap, content structure, and technical architecture locked in.',
      deliverable: 'Project Blueprint & Layout Structure',
    },
    {
      day: 'DAY 02',
      title: 'Structure & Styling',
      summary: 'High-contrast styling, typography system, and core section layouts.',
      deliverable: 'Interactive Frontend Preview',
    },
    {
      day: 'DAY 03',
      title: 'Development',
      summary: 'Full frontend engineering in React/Next.js & Tailwind CSS with custom interactions.',
      deliverable: 'Live Staging Build Link',
    },
    {
      day: 'DAY 04',
      title: 'Testing & Refinement',
      summary: 'Mobile responsiveness, cross-browser checks, speed tuning, and feedback revisions.',
      deliverable: 'Optimized Multi-Device Release Candidate',
    },
    {
      day: 'DAY 05',
      title: 'Final Polish & Delivery',
      summary: 'Micro-interactions, SEO tags, final walkthrough, and production launch.',
      deliverable: 'Live Production Website + Full Source Handover',
    },
  ],

  whyWorkWithMe: [
    {
      number: '01',
      title: 'Fast Delivery',
      description: 'A focused 5-day workflow for standard websites so your idea goes live while momentum is high.',
      iconKey: 'Zap',
    },
    {
      number: '02',
      title: 'Modern Engineering',
      description: 'Bespoke dark and light visual systems with bold typography — never cookie-cutter templates.',
      iconKey: 'Sparkles',
    },
    {
      number: '03',
      title: 'Responsive Development',
      description: 'Engineered to look and perform effortlessly across 1440px desktops, tablets, and mobile screens.',
      iconKey: 'Smartphone',
    },
    {
      number: '04',
      title: 'Interactive Experiences',
      description: 'Game-developer sensibility applied to the web: purposeful motion, physics, and micro-interactions.',
      iconKey: 'Gamepad2',
    },
    {
      number: '05',
      title: 'Direct Communication',
      description: 'You work directly with Udayveer from Day 1 to launch — clear daily progress and zero agency bloat.',
      iconKey: 'MessageSquare',
    },
    {
      number: '06',
      title: 'Attention to Detail',
      description: 'From keyboard accessibility and SEO metadata to subtle hover states and clean code structure.',
      iconKey: 'Target',
    },
  ],

  testimonials: [] as TestimonialItem[],
};
