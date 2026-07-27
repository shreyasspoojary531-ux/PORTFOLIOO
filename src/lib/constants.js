export const SITE = {
  name: 'Shreyas',
  fullName: 'Shreyas S Poojary',
  title: 'Shreyas S Poojary — Full Stack Developer & AI Engineer',
  role: 'Full Stack Developer & AI Systems Specialist',
  tagline: 'Architecting modern web applications, intelligent AI systems, and agentic workflows through relentless craft.',
};

export const ABOUT = {
  headline: 'I bridge design intuition, full-stack engineering, and agentic AI systems to craft high-impact software.',
  paragraphs: [
    'My name is Shreyas S Poojary, a Full Stack Developer, UI/UX Designer, and AI Specialist currently pursuing my 1st year BCA. My coding journey started in 10th grade with fundamental HTML & CSS, rapidly expanding into advanced JavaScript, React.js, Redux Toolkit, Next.js, Tailwind CSS, TypeScript, Python, C, Linux, and Google Cloud Platform.',
    'I excel in advanced vibe coding leveraging cutting-edge LLMs—including Claude Code, OpenAI Codex, Google Antigravity, and open-source models across CLI and GUI workflows. By orchestrating MCP (Model Context Protocol) servers, agent skills, RAG architectures, and LangChain primitives, I rapidly transform architectural visions into production-grade systems.',
    'For me, software craft is intentionality: eliminating unnecessary friction, maintaining geometric layout rigor, and building full-stack applications that perform with zero latency.',
  ],
};

export const PROJECTS = [
  {
    id: '01',
    title: 'Arise',
    subtitle: 'Solo Leveling System',
    category: 'Full Stack & Gamified Systems',
    year: '2025',
    description: 'A gamified solo-leveling tracking system empowering individuals to level up real-world skills through interactive quests and stat progressions.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase Auth', 'Supabase DB'],
    githubUrl: 'https://github.com/shreyasspoojary531-ux/ARISE.git',
    liveUrl: '#',
    aspectRatio: '16/9',
  },
  {
    id: '02',
    title: 'Chatbot Aquavern',
    subtitle: 'Maritime Fleet Supply & Emergency Bot',
    category: 'AI Logistics & Communication',
    year: '2025',
    description: 'An emergency and operational chatbot for maritime ships at sea to request fuel, provisions, and critical supplies with automated dispatch routing.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB Auth', 'MongoDB DB'],
    githubUrl: 'https://github.com/shreyasspoojary531-ux/CHATBOT-AQUAVERN.git',
    liveUrl: '#',
    aspectRatio: '4/3',
  },
  {
    id: '03',
    title: 'Crowdliner',
    subtitle: 'Real-time Crowd Control & Mapping Platform',
    category: 'Real-time Spatial Systems',
    year: '2025',
    description: 'An intelligent crowd management system featuring live map updates, dynamic density tracking, and real-time telemetry for event safety.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Realtime WebSockets', 'Live Mapping'],
    githubUrl: 'https://github.com/shreyasspoojary531-ux/CROWDLINER.git',
    liveUrl: '#',
    aspectRatio: '16/9',
  },
];

export const GITHUB = {
  username: 'shreyasspoojary531-ux',
  stats: {
    repositories: 3,
    contributions: 540,
  },
  pinnedRepos: [
    {
      name: 'ARISE',
      description: 'Solo leveling gamified personal tracking system built with Next.js, TypeScript, Tailwind, and Supabase.',
      language: 'TypeScript',
      stars: 12,
      forks: 4,
      url: 'https://github.com/shreyasspoojary531-ux/ARISE.git',
    },
    {
      name: 'CHATBOT-AQUAVERN',
      description: 'Mid-ocean ship fuel & supply emergency chatbot built with React, Tailwind CSS, and MongoDB.',
      language: 'JavaScript',
      stars: 8,
      forks: 2,
      url: 'https://github.com/shreyasspoojary531-ux/CHATBOT-AQUAVERN.git',
    },
    {
      name: 'CROWDLINER',
      description: 'Real-time crowd control system featuring live spatial map updates and crowd density tracking.',
      language: 'TypeScript',
      stars: 15,
      forks: 5,
      url: 'https://github.com/shreyasspoojary531-ux/CROWDLINER.git',
    },
  ],
};

export const EXPERTISE_NODES = [
  {
    id: 'vibe',
    label: 'Vibe Coding',
    x: 50,
    y: 50,
    isCenter: true,
  },
  {
    id: 'ai',
    label: 'AI & Agents',
    x: 20,
    y: 22,
    description: 'Advanced generative AI, agentic workflows, and LLM context management across CLI and GUI environments.',
    technologies: [
      { name: 'AI Models & Coding Tools', detail: 'Claude Code, OpenAI Codex, Antigravity, Open-source LLMs' },
      { name: 'MCP & Context Management', detail: 'Custom MCP server integration, system prompt engineering' },
      { name: 'GenAI & RAG Systems', detail: 'LangChain, retrieval-augmented generation pipelines' },
      { name: 'Agentic Workflows', detail: 'Tool calling, autonomous coding, structured outputs' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    x: 80,
    y: 22,
    description: 'Responsive, pixel-perfect user interfaces built with modern component frameworks and typography scales.',
    technologies: [
      { name: 'React.js & Next.js', detail: 'App router, server components, hooks, high-performance rendering' },
      { name: 'Tailwind CSS v4 & DOM', detail: 'Modern styling systems, CSS-first tokens, DOM manipulation' },
      { name: 'Redux Toolkit & State', detail: 'Global state management, async thunks, predictable data flow' },
      { name: 'TypeScript & JavaScript', detail: 'Strict typing, ES6+ features, functional programming' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & DB',
    x: 15,
    y: 58,
    description: 'Reliable backend services, realtime database sync, and user authentication systems.',
    technologies: [
      { name: 'Supabase & Auth', detail: 'PostgreSQL schema, Row Level Security, instant Auth services' },
      { name: 'MongoDB & NoSQL', detail: 'Document databases, Mongoose ORM, query optimization' },
      { name: 'REST & WebSockets', detail: 'Real-time event streaming, live map updates, API routing' },
      { name: 'Node.js Systems', detail: 'Express servers, asynchronous event loops, middleware' },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    x: 85,
    y: 58,
    description: 'Foundational programming concepts, systems languages, and script execution engines.',
    technologies: [
      { name: 'JavaScript & TypeScript', detail: 'Advanced web logic, asynchronous patterns, type safety' },
      { name: 'Python', detail: 'AI script execution, data processing, automation scripts' },
      { name: 'C Language', detail: 'Memory management, low-level pointers, computational fundamentals' },
      { name: 'HTML5 & CSS3', detail: 'Semantic markup, responsive layouts, foundational craft since 10th grade' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & OS',
    x: 30,
    y: 88,
    description: 'Linux terminal environments, shell scripts, and cloud infrastructure management.',
    technologies: [
      { name: 'Google Cloud Platform', detail: 'Compute Engine, Cloud Storage, serverless functions' },
      { name: 'Linux System Admin', detail: 'Bash scripting, process management, environment setup' },
      { name: 'Environment Tooling', detail: 'Terminal CLI workflows, package managers, SSH keys' },
      { name: 'Web Hosting & Deployment', detail: 'Vercel, Netlify, edge routing configurations' },
    ],
  },
  {
    id: 'devops',
    label: 'Git & Workflows',
    x: 70,
    y: 88,
    description: 'Version control mastery, collaboration pipelines, and automated project workflows.',
    technologies: [
      { name: 'Git & GitHub', detail: 'Branching strategies, PR reviews, merge management' },
      { name: 'Vibe Engineering', detail: 'Rapid iteration, automated testing loops, continuous delivery' },
      { name: 'UI/UX Prototyping', detail: 'Visual hierarchy, spatial rhythm, high-contrast aesthetics' },
      { name: 'Code Quality', detail: 'Modular architecture, DRY principles, clean abstractions' },
    ],
  },
];

export const LIFE_FRAMES = [
  { id: 1, title: 'Architectural Clarity', caption: 'Designing systems where every element serves an undeniable purpose.', size: 'large' },
  { id: 2, title: 'Micro-Interactions', caption: 'Focusing on the 100ms transitions that make software feel alive.', size: 'medium' },
  { id: 3, title: 'Editorial Rigor', caption: 'Bringing typographic tradition into contemporary web products.', size: 'medium' },
  { id: 4, title: 'Engineering Velocity', caption: 'Shipping clean code rapidly with advanced vibe coding workflows.', size: 'large' },
  { id: 5, title: 'Continuous Iteration', caption: 'Refining and paring down until only what matters remains.', size: 'small' },
  { id: 6, title: 'System Synthesis', caption: 'Where user experience, AI intelligence, and backend logic operate as one.', size: 'small' },
  { id: 7, title: 'Quiet Craft', caption: 'Building software that works flawlessly without needing to boast.', size: 'medium' },
  { id: 8, title: 'Future Primitives', caption: 'Exploring new interaction metaphors for spatial and AI agent interfaces.', size: 'small' },
];

export const CONTACT = {
  headline: 'Let\'s build something extraordinary together.',
  email: 'shreyassoffical@gmail.com',
  links: [
    { label: 'GitHub', url: 'https://github.com/shreyasspoojary531-ux' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/shreyas-poojary-20b1653b1/' },
    { label: 'Instagram', url: 'https://www.instagram.com/shreyass_95?igsh=MWdoOG5iNHFoOXd2Zw==' },
  ],
};
