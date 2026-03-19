export type ProductStatus = 'Production' | 'Pilot' | 'Internal' | 'Concept';
export type ProductCategory = 'Featured Products' | 'Product Archive' | 'Concept Products / R&D';

export interface ProductCaseStudySection {
  title: string;
  body: string;
  bullets?: string[];
}

export interface ProductRecord {
  slug: string;
  name: string;
  type: string;
  category: ProductCategory;
  shortSummary: string;
  industryDomain: string;
  targetUsers: string[];
  problemSolved: string;
  businessValue: string;
  techStack: string[];
  architectureStyle: string;
  rolePlayed: string;
  status: ProductStatus;
  year: number;
  screenshots: string[];
  keyFeatures: string[];
  metrics: string[];
  timeline: string;
  teamSize: string;
  clientType: string;
  liveDemoLink?: string;
  githubLink?: string;
  caseStudySections: ProductCaseStudySection[];
}

export interface BlogPostRecord {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  body: {
    heading: string;
    paragraphs: string[];
  }[];
}

export interface RepositoryRecord {
  name: string;
  href: string;
  category: string;
  summary: string;
  qualitySignals: string[];
  stack: string[];
}

export interface LabsRecord {
  slug: string;
  title: string;
  summary: string;
  status: 'Active' | 'Exploration' | 'Reusable Pattern';
  focus: string;
  outputs: string[];
}

export interface ArchitectureDocRecord {
  title: string;
  type: string;
  summary: string;
  highlights: string[];
}

export const companyProfile = {
  brandName: 'Dawilly Gene',
  studioName: 'GeneLabs Software Tz',
  headline: 'Software Engineer building secure, scalable digital products for real business operations.',
  subheadline:
    'A product engineering studio focused on business platforms, operational tooling, and high-trust software systems for teams that need reliability from day one.',
  location: 'Dodoma, Tanzania',
  email: 'contact@dawillygene.com',
  phone: '+255 753 225 961',
  availability: 'Available for product engineering, consulting, and senior software roles',
  primaryCta: { label: 'View Products', href: '/products' },
  secondaryCta: { label: 'View Case Studies', href: '/products/sheria-kiganjani' },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/dawillygene' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/elia-william-mariki/' },
    { label: 'Instagram', href: 'https://www.instagram.com/dawillygene/' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@dawilly_gene' },
  ],
};

export const primaryNavigation = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/standards', label: 'Engineering Standards' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export const trustSignals = [
  { label: 'Products designed for real operations', value: '8+' },
  { label: 'Core stacks used across delivery', value: '10+' },
  { label: 'Industries addressed', value: '5' },
  { label: 'Delivery focus', value: 'Security, scale, clarity' },
];

export const executiveSummary = [
  {
    title: 'Operational product thinking',
    body: 'Solutions are scoped around real workflows: approvals, reporting, permissions, data accuracy, and maintainability after launch.',
  },
  {
    title: 'Engineering discipline',
    body: 'Delivery emphasizes structured APIs, resilient data design, access control, testable modules, and production-readiness instead of demo-only builds.',
  },
  {
    title: 'Business-aware execution',
    body: 'Every system is framed around measurable business value such as lower manual effort, clearer reporting, faster turnaround time, and more reliable decision-making.',
  },
];

export const productStrategy = [
  'Start with the operating problem, decision bottlenecks, and the stakeholders who feel them.',
  'Translate requirements into modules, permissions, data flows, and delivery phases before coding begins.',
  'Prioritize maintainability, measurable outcomes, and handover quality alongside feature delivery.',
];

export const domainsServed = [
  'Business operations and internal platforms',
  'Legal information and civic access tools',
  'Education and learning systems',
  'Field and mobile-connected workflows',
  'Reporting-heavy administrative software',
];

export const deliveryProcess = [
  'Discovery',
  'Requirements analysis',
  'Architecture design',
  'Implementation',
  'Testing',
  'Deployment',
  'Monitoring',
  'Support and iteration',
];

export const securityAndReliability = [
  'Role-based access control and least-privilege workflows',
  'Input validation and structured error handling',
  'Audit trail thinking for sensitive operational actions',
  'Secure authentication and guarded administrative surfaces',
  'Logging, backup planning, and recovery-aware delivery',
];

export const performanceAndScale = [
  'Pagination and filtering for data-heavy interfaces',
  'Query optimization and indexing discipline',
  'Modular system boundaries for long-term growth',
  'Background processing patterns where throughput matters',
  'Asset optimization and lean frontend delivery',
];

export const documentationAndHandover = [
  'API endpoint references and request-response contracts',
  'Admin guidance for operational tasks and support workflows',
  'Deployment notes, environment expectations, and rollback awareness',
  'Technical documentation for architecture, modules, and maintenance',
];

export const featuredTestimonials = [
  {
    quote:
      'He approaches software like a systems thinker, not just a coder. The result is software that feels ready for real operations.',
    author: 'Technical collaborator',
  },
  {
    quote:
      'Strong attention to structure, documentation, and delivery quality. The handover quality stood out as much as the implementation itself.',
    author: 'Project stakeholder',
  },
];

export const codeCredibility = {
  intro:
    'The site now makes code credibility explicit through selected repositories, reusable patterns, architecture notes, and documentation-focused artifacts rather than relying on a generic GitHub link alone.',
  qualityRules: [
    'Feature repositories that communicate structure and intent clearly',
    'Prefer projects with clean README direction and maintainable code organization',
    'Highlight authorization, architecture, and operational depth where relevant',
    'Use labs and documentation artifacts to show engineering maturity, not just output count',
  ],
};

export const products: ProductRecord[] = [
  {
    slug: 'sheria-kiganjani',
    name: 'Sheria Kiganjani',
    type: 'Legal information platform',
    category: 'Featured Products',
    shortSummary:
      'A product-focused legal access platform designed to make Tanzanian law and legal guidance easier to search, understand, and use.',
    industryDomain: 'LegalTech',
    targetUsers: ['Citizens', 'Students', 'Paralegals', 'Legal researchers'],
    problemSolved:
      'Reliable legal information can be fragmented, difficult to search, and inaccessible to non-specialists.',
    businessValue:
      'Creates a scalable foundation for legal content distribution, trust-building, and public-facing digital service delivery.',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Search-driven UI'],
    architectureStyle: 'Frontend-led platform with content and search-oriented service boundaries',
    rolePlayed: 'Product architect, full-stack engineer, UX and content systems lead',
    status: 'Production',
    year: 2025,
    screenshots: ['Search-first legal explorer', 'Article detail with categorized guidance', 'Structured topic navigation'],
    keyFeatures: ['Search and category browsing', 'Readable content hierarchy', 'Mobile-first legal access', 'Editorial update workflow'],
    metrics: ['Reduced friction in finding key legal topics', 'Designed for public mobile access', 'Structured for future content expansion'],
    timeline: '12 weeks initial build and content structuring',
    teamSize: 'Solo founder-led execution',
    clientType: 'Founder product',
    liveDemoLink: 'https://dawillygene.com',
    caseStudySections: [
      {
        title: 'Project Overview',
        body: 'Sheria Kiganjani was shaped as a serious public-facing product rather than a simple content site. The goal was to create a stable legal access experience that balances clarity, trust, and future extensibility.',
      },
      {
        title: 'The Problem',
        body: 'Legal information is often difficult to navigate for non-specialists, especially in mobile-first contexts where search and reading experience matter.',
        bullets: [
          'Content discovery was a primary challenge.',
          'Users needed confidence that information was organized and credible.',
          'The interface had to work well on low-friction mobile journeys.',
        ],
      },
      {
        title: 'System Design',
        body: 'The product architecture centered on structured content organization, reusable presentation components, and future-friendly indexing patterns.',
      },
      {
        title: 'Engineering Challenges',
        body: 'The biggest challenge was translating dense legal subject matter into approachable UI and information architecture without making the experience feel shallow.',
      },
      {
        title: 'Results / Impact',
        body: 'The product now serves as a flagship example of domain-focused product building: clear information hierarchy, stronger trust posture, and a foundation for scale.',
      },
      {
        title: 'Future Roadmap',
        body: 'Planned expansions include richer document linking, legal topic cross-references, improved search relevance, and structured publishing workflows.',
      },
    ],
  },
  {
    slug: 'ops-board',
    name: 'OpsBoard Suite',
    type: 'Business operations platform',
    category: 'Featured Products',
    shortSummary:
      'A modular admin dashboard system for approvals, records, reporting, and operational oversight across internal teams.',
    industryDomain: 'Business Operations',
    targetUsers: ['Operations teams', 'Super admins', 'Managers'],
    problemSolved:
      'Operational data often lives across spreadsheets, messaging apps, and disconnected tools, creating delays and reporting gaps.',
    businessValue:
      'Improves visibility, speeds up internal decisions, and reduces manual coordination overhead for day-to-day workflows.',
    techStack: ['Next.js', 'Node.js', 'MySQL', 'Role-based access control', 'Analytics dashboards'],
    architectureStyle: 'Modular dashboard architecture with explicit permission and reporting layers',
    rolePlayed: 'System designer, backend engineer, dashboard UX lead',
    status: 'Production',
    year: 2024,
    screenshots: ['Executive operations overview', 'Approval workflow dashboard', 'Role-aware reporting panels'],
    keyFeatures: ['RBAC', 'Approval queues', 'Audit-friendly records', 'KPI reporting'],
    metrics: ['Reduced manual reporting effort', 'Improved admin visibility', 'Supports multi-role workflows'],
    timeline: '16 weeks across planning, implementation, and rollout',
    teamSize: 'Small engineering collaboration',
    clientType: 'Internal business platform / client delivery',
    githubLink: 'https://github.com/dawillygene',
    caseStudySections: [
      {
        title: 'Project Overview',
        body: 'OpsBoard Suite was designed as a company-grade internal system for teams who need visibility, approval controls, and structured operational reporting.',
      },
      {
        title: 'Users / Audience',
        body: 'The primary users were operations managers, administrators, and leadership stakeholders needing timely insight into workflow status and team activity.',
      },
      {
        title: 'Requirements',
        body: 'Core requirements centered on permissions, reporting consistency, task traceability, and a clean administrative experience.',
      },
      {
        title: 'Solution',
        body: 'A modular admin experience was built around reusable workflow components, role-aware navigation, and reporting views designed for quick decision-making.',
      },
      {
        title: 'Results / Impact',
        body: 'The product reduced fragmented communication and gave teams a clearer source of truth for operational follow-through.',
      },
    ],
  },
  {
    slug: 'fieldflow-mobile',
    name: 'FieldFlow Mobile',
    type: 'Mobile-connected workflow system',
    category: 'Featured Products',
    shortSummary:
      'A field operations platform connecting mobile data capture with backend supervision, reporting, and issue tracking.',
    industryDomain: 'Field Operations',
    targetUsers: ['Field officers', 'Coordinators', 'Supervisors'],
    problemSolved:
      'Field teams need reliable data capture and reporting without depending on slow, manual back-office consolidation.',
    businessValue:
      'Enables faster reporting, better visibility into field activity, and cleaner downstream records for operations teams.',
    techStack: ['React', 'Next.js', 'Firebase', 'REST APIs', 'Offline-aware workflows'],
    architectureStyle: 'Mobile-connected workflow architecture with sync-aware data flow',
    rolePlayed: 'Full-stack engineer and workflow designer',
    status: 'Pilot',
    year: 2025,
    screenshots: ['Field submission workflow', 'Supervisor task board', 'Issue review dashboard'],
    keyFeatures: ['Mobile-first forms', 'Supervisor review flows', 'Status tracking', 'Operational reporting'],
    metrics: ['Improved reporting turnaround', 'Better remote visibility', 'Supports distributed teams'],
    timeline: '10 weeks pilot delivery',
    teamSize: 'Solo with stakeholder feedback loops',
    clientType: 'Pilot deployment',
    caseStudySections: [
      {
        title: 'The Problem',
        body: 'Field teams often send updates through ad hoc communication channels, making reporting inconsistent and hard to audit.',
      },
      {
        title: 'Goals and Objectives',
        body: 'The objective was to create one structured pipeline from field entry to review, escalation, and reporting.',
      },
      {
        title: 'Tech Stack and Why',
        body: 'The stack was selected for fast iteration, mobile-friendly UI, and an accessible hosting and data model for early-stage rollout.',
      },
      {
        title: 'Lessons Learned',
        body: 'Offline behavior, sync feedback, and staff training loops matter just as much as interface polish in field software.',
      },
    ],
  },
  {
    slug: 'inventory-core',
    name: 'Inventory Core',
    type: 'Inventory and records system',
    category: 'Product Archive',
    shortSummary:
      'A records and stock visibility platform for teams needing organized inventory tracking, transaction history, and reporting.',
    industryDomain: 'Operations / Inventory',
    targetUsers: ['Storekeepers', 'Account teams', 'Operations managers'],
    problemSolved:
      'Inventory decisions become error-prone when records are distributed, outdated, or poorly searchable.',
    businessValue:
      'Improves stock visibility, supports reporting accuracy, and lowers manual reconciliation effort.',
    techStack: ['Laravel', 'MySQL', 'Blade', 'REST APIs'],
    architectureStyle: 'CRUD-heavy operational platform with reporting and transaction records',
    rolePlayed: 'Backend engineer and database designer',
    status: 'Production',
    year: 2023,
    screenshots: ['Stock overview', 'Transaction history', 'Inventory alerts'],
    keyFeatures: ['Item records', 'Stock movement logs', 'Reports', 'Administrative controls'],
    metrics: ['Reduced stock ambiguity', 'Improved reporting quality'],
    timeline: '8 weeks',
    teamSize: 'Small delivery team',
    clientType: 'Client system',
    caseStudySections: [
      {
        title: 'Project Overview',
        body: 'Inventory Core focused on reliability, data cleanliness, and practical reporting for day-to-day operations.',
      },
    ],
  },
  {
    slug: 'labs-auth-kit',
    name: 'Labs Auth Kit',
    type: 'Reusable authentication blueprint',
    category: 'Concept Products / R&D',
    shortSummary:
      'A reusable auth and authorization starter focused on RBAC, session flows, and administrative guardrails for business systems.',
    industryDomain: 'Engineering Infrastructure',
    targetUsers: ['Engineering teams', 'Startup founders', 'Internal platform builders'],
    problemSolved:
      'Teams repeatedly rebuild authentication, permissions, and admin protections with inconsistent quality.',
    businessValue:
      'Accelerates delivery while raising the baseline for security-sensitive foundations.',
    techStack: ['Next.js', 'TypeScript', 'Middleware', 'Role policies'],
    architectureStyle: 'Starter architecture with secure entry points and reusable permission boundaries',
    rolePlayed: 'Systems engineer and architecture author',
    status: 'Concept',
    year: 2026,
    screenshots: ['RBAC matrix', 'Protected admin flows', 'Session lifecycle notes'],
    keyFeatures: ['Permission map', 'Role guards', 'Protected routes', 'Reusable patterns'],
    metrics: ['Shortens setup time for new admin systems'],
    timeline: 'Ongoing R&D',
    teamSize: 'Solo',
    clientType: 'Internal lab',
    caseStudySections: [
      {
        title: 'Future Roadmap',
        body: 'The next step is packaging the blueprint into a stronger reusable starter with examples, tests, and implementation guides.',
      },
    ],
  },
];

export const services = [
  {
    title: 'Backend API Engineering',
    description: 'Production-focused APIs with clear contracts, permission checks, structured errors, and maintainable service boundaries.',
    capabilities: ['REST API design', 'Filtering and pagination', 'RBAC enforcement', 'Business logic modeling'],
  },
  {
    title: 'System Architecture',
    description: 'Architecture planning for products that need clarity across data flow, modules, scaling expectations, and delivery phases.',
    capabilities: ['Domain modeling', 'Module boundaries', 'Architecture reviews', 'Technical decision support'],
  },
  {
    title: 'Admin Dashboard Systems',
    description: 'Administrative platforms for approvals, reporting, records, and multi-role internal operations.',
    capabilities: ['Dashboard UX', 'Operational reporting', 'Approval flows', 'Audit-aware admin surfaces'],
  },
  {
    title: 'Business Management Platforms',
    description: 'Custom internal platforms that replace spreadsheet-heavy operations with structured, searchable systems.',
    capabilities: ['Workflow mapping', 'Records systems', 'Process automation', 'Role-aware interfaces'],
  },
  {
    title: 'Authentication and Authorization',
    description: 'Secure access patterns for products that require role separation, guarded actions, and resilient session handling.',
    capabilities: ['Role policies', 'Protected routes', 'Permission matrices', 'Session design'],
  },
  {
    title: 'Reporting and Analytics',
    description: 'Data views and reporting layers that help teams monitor activity, review exceptions, and make faster operational decisions.',
    capabilities: ['KPI dashboards', 'Summary views', 'Export-friendly models', 'Decision support interfaces'],
  },
  {
    title: 'Testing and Deployment',
    description: 'Practical quality and release discipline so systems can be shipped with confidence and maintained over time.',
    capabilities: ['Test planning', 'Deployment readiness', 'Rollback awareness', 'Documentation and handover'],
  },
];

export const repositories: RepositoryRecord[] = [
  {
    name: 'dawillygene',
    href: 'https://github.com/dawillygene',
    category: 'Portfolio / Product Studio',
    summary: 'The current Next.js portfolio codebase, now structured around products, case studies, standards, resume, blog, labs, docs, and conversion paths.',
    qualitySignals: ['Multi-page information architecture', 'Static generation', 'Structured metadata and sitemap', 'Reusable content-driven sections'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'OpsBoard Patterns',
    href: 'https://github.com/dawillygene',
    category: 'Architecture-focused repos',
    summary: 'Repository direction centered on admin platforms, role-aware dashboards, and operational reporting structures.',
    qualitySignals: ['RBAC-oriented design', 'Operational workflows', 'Maintainable admin structures', 'Business-aware system modeling'],
    stack: ['Node.js', 'MySQL', 'Admin dashboards', 'REST APIs'],
  },
  {
    name: 'Labs Auth Kit',
    href: 'https://github.com/dawillygene',
    category: 'Utility / Reusable package references',
    summary: 'A reusable authentication and authorization blueprint for products that need protected admin surfaces and clear permission boundaries.',
    qualitySignals: ['Reusable foundation', 'Security-sensitive scope', 'Architecture-first documentation', 'Startup acceleration potential'],
    stack: ['Next.js', 'TypeScript', 'Middleware', 'Role policies'],
  },
];

export const labsProjects: LabsRecord[] = [
  {
    slug: 'auth-kit',
    title: 'Labs Auth Kit',
    summary: 'Reusable auth starter for protected admin systems, role-aware navigation, and permission-driven product surfaces.',
    status: 'Reusable Pattern',
    focus: 'Authentication and Authorization',
    outputs: ['Role matrix patterns', 'Protected route conventions', 'Admin guardrails', 'Session flow notes'],
  },
  {
    slug: 'reporting-blueprints',
    title: 'Reporting Blueprints',
    summary: 'A collection of dashboard and reporting interface patterns for products that need operational visibility and executive summaries.',
    status: 'Active',
    focus: 'Reporting and Analytics',
    outputs: ['KPI layouts', 'Exception review flows', 'Table and filter patterns', 'Decision-support summaries'],
  },
  {
    slug: 'workflow-foundations',
    title: 'Workflow Foundations',
    summary: 'Experiments in turning approvals, escalations, and internal operations into maintainable product modules.',
    status: 'Exploration',
    focus: 'Business Workflow Systems',
    outputs: ['Approval states', 'Audit-aware action logs', 'Role transitions', 'Operational handover notes'],
  },
];

export const architectureDocs: ArchitectureDocRecord[] = [
  {
    title: 'RBAC Architecture Matrix',
    type: 'Pattern Library',
    summary: 'A documentation artifact that maps user roles to capabilities, sensitive actions, and administrative visibility.',
    highlights: ['Action-level permissions', 'Least-privilege defaults', 'Admin escalation thinking', 'Audit trail boundaries'],
  },
  {
    title: 'Operational Dashboard Information Model',
    type: 'System Diagram',
    summary: 'A structural guide for shaping dashboard modules around records, approvals, exceptions, and reporting flows.',
    highlights: ['Summary to detail drill-down', 'Queue states', 'Cross-role visibility', 'Metric-friendly data boundaries'],
  },
  {
    title: 'API Contract and Error Response Guide',
    type: 'Documentation Standard',
    summary: 'A practical guide for consistent request handling, pagination, filtering, auth enforcement, and structured errors.',
    highlights: ['Contract predictability', 'Error shape consistency', 'Version-aware design', 'Developer handover quality'],
  },
  {
    title: 'Deployment and Recovery Notes',
    type: 'Operations Document',
    summary: 'An operations-minded document describing environment expectations, rollback thinking, and post-release validation.',
    highlights: ['Release checks', 'Rollback awareness', 'Critical path validation', 'Support readiness'],
  },
];

export const standards = [
  {
    title: 'API Design Standards',
    items: [
      'Consistent resource naming and predictable endpoint structure',
      'Stable request-response contracts and explicit validation rules',
      'Pagination, filtering, and sorting conventions for data-heavy endpoints',
      'Structured error payloads with actionable failure states',
      'Version-awareness and backward compatibility thinking',
    ],
  },
  {
    title: 'Database Design Standards',
    items: [
      'Clear naming conventions and relational consistency',
      'Practical normalization with denormalization only when justified',
      'Indexing strategy for reporting and transactional flows',
      'Soft delete, audit, and uniqueness rules where business-critical',
      'Migration safety and transaction-aware change planning',
    ],
  },
  {
    title: 'Authentication and Authorization Approach',
    items: [
      'Role-based access control with explicit permissions',
      'Protected administrative surfaces and least-privilege defaults',
      'Session and auth flow design aligned with system risk',
      'Security-sensitive actions treated as auditable operations',
    ],
  },
  {
    title: 'Testing Strategy',
    items: [
      'Unit tests around domain logic and fragile utility boundaries',
      'Integration tests for permissions, data flows, and business rules',
      'End-to-end coverage for critical operational journeys',
      'Security-sensitive flows treated as mandatory test candidates',
      'Race conditions and edge cases reviewed before release',
    ],
  },
  {
    title: 'Logging and Monitoring',
    items: [
      'Meaningful event logging around operationally important actions',
      'Actionable monitoring signals for failures and degraded workflows',
      'Error reporting that supports fast diagnosis and rollback decisions',
    ],
  },
  {
    title: 'Security Practices',
    items: [
      'Input validation across boundaries',
      'Rate limiting and abuse-awareness for exposed surfaces',
      'Sensitive data handling and practical encryption strategy',
      'Administrative actions designed with audit and recovery in mind',
    ],
  },
  {
    title: 'Scalability Planning',
    items: [
      'Query review and indexing for growth paths',
      'Service boundaries where complexity justifies them',
      'Caching and background processing considerations',
      'Frontend and asset efficiency to protect real-world performance',
    ],
  },
  {
    title: 'Documentation Standards',
    items: [
      'Architecture notes for maintainers',
      'Deployment and environment setup guidance',
      'Admin guides for support and operations teams',
      'Readable API and technical handover artifacts',
    ],
  },
  {
    title: 'Deployment Standards',
    items: [
      'Environment parity awareness',
      'Config review before release',
      'Rollback thinking for risky changes',
      'Post-release validation on critical workflows',
    ],
  },
  {
    title: 'Backup and Recovery Thinking',
    items: [
      'Data recovery considered during design, not after failure',
      'Operational actions evaluated for reversibility where possible',
      'Critical data stores and admin actions treated with recovery discipline',
    ],
  },
];

export const resumeSummary = {
  intro:
    'Software engineer focused on secure business systems, operational tooling, and full-stack product delivery. Works across frontend, backend, data design, and architecture communication with a strong emphasis on production quality.',
  achievements: [
    'Designed and shipped company-style product experiences instead of portfolio-only demos',
    'Built systems around RBAC, reporting, and operational visibility',
    'Comfortable translating business requirements into technical modules and delivery plans',
    'Balances implementation speed with maintainability, documentation, and trust signals',
  ],
  timeline: [
    {
      period: '2024 - Present',
      role: 'Founder & Lead Software Engineer',
      organization: 'GeneLabs Software Tz',
      summary:
        'Leading product direction, architecture, and engineering delivery for custom systems, public-facing platforms, and internal operational tools.',
    },
    {
      period: '2022 - 2024',
      role: 'Full-Stack Software Engineer',
      organization: 'Independent and collaborative delivery',
      summary:
        'Built backend APIs, dashboards, data models, and workflow systems for operational use cases across multiple domains.',
    },
    {
      period: 'Earlier',
      role: 'Engineer, builder, and technical mentor',
      organization: 'Academic, community, and early-stage projects',
      summary:
        'Developed practical foundations in product building, problem analysis, and turning ideas into usable systems.',
    },
  ],
  education: ['Bachelor-level engineering and applied software development foundation', 'Continuous self-directed learning through real product delivery'],
  certifications: ['Practical experience-led portfolio of shipped systems', 'Ongoing specialization in secure web systems, operations platforms, and product architecture'],
  techGroups: {
    Languages: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'SQL'],
    Frontend: ['Next.js', 'React', 'Tailwind CSS', 'Responsive UI systems'],
    Backend: ['Laravel', 'Express.js', 'Spring Boot', 'REST API design'],
    Databases: ['MySQL', 'MongoDB', 'Redis', 'Firebase'],
    Tooling: ['Git', 'Docker', 'Postman', 'Linux', 'CI/CD thinking'],
  },
};

export const blogPosts: BlogPostRecord[] = [
  {
    slug: 'designing-secure-apis-for-real-operations',
    title: 'Designing Secure APIs For Real Operations',
    excerpt:
      'Why consistent contracts, permissions, and structured failure handling matter more than flashy endpoint counts.',
    category: 'API Design',
    tags: ['Security', 'Backend', 'RBAC'],
    publishedAt: '2026-02-14',
    readingTime: '6 min read',
    body: [
      {
        heading: 'Operational APIs carry business risk',
        paragraphs: [
          'The API surface in a business system is not just a transport layer. It defines who can act, which records can be changed, and how failures are interpreted by humans and software.',
          'That means consistency is a business concern. Endpoint naming, validation behavior, permission checks, and error structure all shape reliability over time.',
        ],
      },
      {
        heading: 'The baseline should be boring and dependable',
        paragraphs: [
          'A good production API makes common actions predictable. It should paginate consistently, enforce auth the same way across modules, and return errors that support troubleshooting instead of confusion.',
        ],
      },
    ],
  },
  {
    slug: 'rbac-design-for-business-systems',
    title: 'RBAC Design For Business Systems',
    excerpt:
      'A practical approach to authorization when your product has admins, reviewers, operators, and stakeholders with different responsibilities.',
    category: 'Architecture',
    tags: ['Security', 'Architecture', 'Admin Systems'],
    publishedAt: '2026-01-22',
    readingTime: '7 min read',
    body: [
      {
        heading: 'Roles should map to real accountability',
        paragraphs: [
          'The most common authorization mistake is designing roles around UI convenience instead of operational accountability. Permissions should mirror who owns risk and who needs auditability.',
        ],
      },
      {
        heading: 'Guard actions, not just pages',
        paragraphs: [
          'Protected routes are necessary, but they are not enough. Sensitive write actions, escalations, approvals, and exports need their own permission checks and logs.',
        ],
      },
    ],
  },
  {
    slug: 'building-software-for-african-business-contexts',
    title: 'Building Software For African Business Contexts',
    excerpt:
      'Product choices become stronger when you account for connectivity, trust, support reality, and the workflows teams already use today.',
    category: 'Product Strategy',
    tags: ['Africa', 'Product', 'Delivery'],
    publishedAt: '2025-12-10',
    readingTime: '5 min read',
    body: [
      {
        heading: 'Context changes architecture',
        paragraphs: [
          'Software for local business environments needs more than translated interfaces. It needs realistic assumptions about devices, workflow maturity, support capacity, and how people recover when something goes wrong.',
        ],
      },
      {
        heading: 'Trust is part of the product',
        paragraphs: [
          'Readable interfaces, transparent states, clear records, and reliable contact paths all contribute to adoption. In many contexts, trust is a core feature rather than a marketing layer.',
        ],
      },
    ],
  },
];

export const contactProjectTypes = [
  'Product engineering',
  'Admin dashboard system',
  'Business management platform',
  'API/backend architecture',
  'Technical consulting',
  'Senior engineering role',
];

export const contactBudgetRanges = [
  '$1k - $5k',
  '$5k - $15k',
  '$15k - $40k',
  '$40k+',
  'Not sure yet',
];

export const contactTimelineRanges = ['ASAP', '2-4 weeks', '1-3 months', '3+ months', 'Flexible'];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
