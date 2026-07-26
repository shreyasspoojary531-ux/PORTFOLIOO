export const SITE = {
  name: 'Shreyas',
  title: 'Shreyas — Product Engineer & Architect',
  role: 'Product Engineer & Systems Architect',
  tagline: 'Designing systems, building products, and refining software craft.',
};

export const ABOUT = {
  headline: 'I design and engineer products that eliminate friction and embody quiet precision.',
  paragraphs: [
    'Most software is cluttered by excess — superfluous UI elements, arbitrary abstractions, and performance overhead. My approach focuses on reduction: discovering the purest architectural model and bringing it to life with zero noise.',
    'I bridge the gap between design philosophy and backend rigor. Code and interface are not separate disciplines; they are two sides of the same artifact. A system\'s elegance is defined as much by its API design as its typography scale.',
    'Craft is intentionality. It is the refusal to accept defaults, the discipline of spacing, and the commitment to building software that feels inevitable from the moment you interact with it.',
  ],
};

export const PROJECTS = [
  {
    id: '01',
    title: 'Aether OS',
    category: 'System Architecture & Interface',
    year: '2025',
    description: 'A minimalist spatial workstation designed for zero-latency thought capture and knowledge orchestration.',
    tags: ['Systems Design', 'TypeScript', 'WebGPU', 'Rust'],
    aspectRatio: '16/9',
  },
  {
    id: '02',
    title: 'Kinetix Engine',
    category: 'Graphics & Performance Framework',
    year: '2025',
    description: 'Ultra-low overhead animation engine providing deterministic frame scheduling for web-native interfaces.',
    tags: ['Animation Engine', 'C++', 'WebAssembly', 'Performance'],
    aspectRatio: '4/3',
  },
  {
    id: '03',
    title: 'Monolith Protocol',
    category: 'Distributed Infrastructure',
    year: '2024',
    description: 'Decentralized state synchronization primitive guaranteeing instant consistency across edge nodes.',
    tags: ['Distributed Systems', 'Go', 'gRPC', 'Edge Computing'],
    aspectRatio: '16/9',
  },
  {
    id: '04',
    title: 'Verve Studio',
    category: 'Editorial Publishing Platform',
    year: '2024',
    description: 'Next-generation publishing system combining typographic rigor with real-time collaborative editing.',
    tags: ['Product Engineering', 'React', 'CRDTs', 'Design System'],
    aspectRatio: '4/3',
  },
];

export const GITHUB = {
  username: 'shreyas-architect',
  stats: {
    repositories: 54,
    contributions: 3142,
    streak: 186,
    stars: 840,
  },
  pinnedRepos: [
    {
      name: 'hyper-canvas',
      description: 'Zero-dependency WebGL canvas renderer built for 120fps UI micro-interactions.',
      language: 'TypeScript',
      stars: 382,
      forks: 41,
    },
    {
      name: 'synapse-crdt',
      description: 'Lightweight collaborative state engine with conflict-free vector clocks.',
      language: 'Rust',
      stars: 264,
      forks: 29,
    },
    {
      name: 'editorial-tokens',
      description: 'Automated typography scale generator supporting fluid clamp mathematical curves.',
      language: 'JavaScript',
      stars: 194,
      forks: 18,
    },
  ],
  recentActivity: [
    { type: 'commit', repo: 'hyper-canvas', message: 'Refactor transform pipeline for offscreen canvas worker', time: '2h ago' },
    { type: 'pr', repo: 'synapse-crdt', message: 'Merge PR #42: Add optimistic undo/redo delta buffer', time: '6h ago' },
    { type: 'release', repo: 'editorial-tokens', message: 'Published v3.1.0 — Added automatic contrast ratio validator', time: '1d ago' },
    { type: 'commit', repo: 'hyper-canvas', message: 'Optimize matrix multiplication utilizing SIMD instructions', time: '3d ago' },
  ],
};

export const EXPERTISE_NODES = [
  {
    id: 'product',
    label: 'Product',
    x: 50,
    y: 50,
    isCenter: true,
  },
  {
    id: 'design',
    label: 'Design',
    x: 20,
    y: 22,
    description: 'Form and function merged into a singular intent. Interface design grounded in visual hierarchy and restraint.',
    technologies: [
      { name: 'Typography & Layout', detail: 'Editorial scale, grid geometry, fluid clamp math' },
      { name: 'Systemic Design', detail: 'Tokens, component primitives, micro-interaction states' },
      { name: 'Product Prototyping', detail: 'High-fidelity motion & interactive feel validation' },
      { name: 'Design Systems', detail: 'Scalable multi-platform component specifications' },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    x: 80,
    y: 22,
    description: 'Pixel-perfect rendering, 60+ FPS motion, and zero-layout-shift web architecture.',
    technologies: [
      { name: 'React & Next.js', detail: 'Server components, streaming UI, isolated client leaves' },
      { name: 'Motion & Framer', detail: 'Spring physics, layout transitions, GPU acceleration' },
      { name: 'Tailwind CSS v4', detail: 'CSS-first @theme token systems, zero utility slop' },
      { name: 'TypeScript', detail: 'Strict type safety, generic domain contracts' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    x: 15,
    y: 58,
    description: 'Resilient APIs, deterministic execution engines, and sub-millisecond query paths.',
    technologies: [
      { name: 'Node.js & Go', detail: 'High-concurrency microservices, async event loops' },
      { name: 'PostgreSQL & SQL', detail: 'Complex queries, indexed schemas, transaction safety' },
      { name: 'Redis & Caching', detail: 'Pub/Sub mechanisms, memory-mapped data structures' },
      { name: 'GraphQL & REST', detail: 'Schema-first API design with strict validation' },
    ],
  },
  {
    id: 'ai',
    label: 'AI Systems',
    x: 85,
    y: 58,
    description: 'Empowering software with intelligent agents, vector embeddings, and contextual reasoning.',
    technologies: [
      { name: 'LLM Orchestration', detail: 'Agentic workflows, tool invocation, structured outputs' },
      { name: 'Vector Databases', detail: 'Embedding semantic search, hybrid retrieval pipelines' },
      { name: 'Fine-Tuning & RAG', detail: 'Domain-adapted models with low-rank adaptation' },
      { name: 'Python ML Stack', detail: 'PyTorch models, HuggingFace transformers integration' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud Infra',
    x: 30,
    y: 88,
    description: 'Reliable, automated cloud orchestration designed for seamless global availability.',
    technologies: [
      { name: 'AWS & GCP', detail: 'Serverless compute, VPC networking, IAM security' },
      { name: 'Docker & K8s', detail: 'Containerization, cluster management, horizontal scaling' },
      { name: 'Terraform', detail: 'Declarative infrastructure as code pipelines' },
      { name: 'Edge Networks', detail: 'Edge worker execution, CDN caching strategies' },
    ],
  },
  {
    id: 'deployment',
    label: 'Deployment',
    x: 70,
    y: 88,
    description: 'Continuous integration, zero-downtime deployments, and end-to-end observability.',
    technologies: [
      { name: 'CI/CD Automation', detail: 'GitHub Actions, automated test suites, release taggers' },
      { name: 'Vercel Platform', detail: 'Edge function routing, preview environments' },
      { name: 'Observability', detail: 'OpenTelemetry, log aggregation, real-user monitoring' },
      { name: 'Security Auditing', detail: 'Static code analysis, vulnerability scanning' },
    ],
  },
];

export const LIFE_FRAMES = [
  { id: 1, title: 'Architectural Clarity', caption: 'Designing systems where every element serves an undeniable purpose.', size: 'large' },
  { id: 2, title: 'Micro-Interactions', caption: 'Focusing on the 100ms transitions that make software feel alive.', size: 'medium' },
  { id: 3, title: 'Editorial Rigor', caption: 'Bringing typographic tradition into contemporary web products.', size: 'medium' },
  { id: 4, title: 'Engineering Velocity', caption: 'Shipping clean code rapidly without compromising foundational quality.', size: 'large' },
  { id: 5, title: 'Continuous Iteration', caption: 'Refining and paring down until only what matters remains.', size: 'small' },
  { id: 6, title: 'System Synthesis', caption: 'Where user experience and backend logic operate as one.', size: 'small' },
  { id: 7, title: 'Quiet Craft', caption: 'Building software that works flawlessly without needing to boast.', size: 'medium' },
  { id: 8, title: 'Future Primitives', caption: 'Exploring new interaction metaphors for spatial and AI interfaces.', size: 'small' },
];

export const CONTACT = {
  headline: 'Let\'s create something exceptional.',
  email: 'hello@shreyas.dev',
  links: [
    { label: 'GitHub', url: 'https://github.com' },
    { label: 'LinkedIn', url: 'https://linkedin.com' },
    { label: 'Twitter / X', url: 'https://x.com' },
    { label: 'Resume', url: '#resume' },
    { label: 'ReadCV', url: 'https://read.cv' },
  ],
};
