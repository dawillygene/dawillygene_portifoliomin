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
  featured: boolean;
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
  image: string;
  imageAlt: string;
  platforms: string[];
  links: { label: string; href: string }[];
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
  secondaryCta: { label: 'View Case Studies', href: '/products/soko-mtaani' },
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
    slug: 'soko-mtaani',
    name: 'Soko Mtaani',
    type: 'Marketplace and delivery platform',
    category: 'Featured Products',
    featured: true,
    shortSummary:
      'A Tanzania-focused grocery marketplace spanning web, Android, and iPhone ordering for fresh food delivery from local markets to homes and businesses.',
    industryDomain: 'Commerce / Food Delivery',
    targetUsers: ['Households', 'Retail shops', 'Hotels', 'Schools', 'Universities', 'Restaurants'],
    problemSolved:
      'Busy households and businesses need a reliable way to order fresh food without spending time in the market or coordinating delivery manually.',
    businessValue:
      'Creates a more structured supply and delivery flow for raw food ordering while making local market shopping easier for consumers and commercial buyers.',
    techStack: ['Web commerce', 'Android app', 'iOS app', 'Digital payments', 'Location-aware delivery'],
    architectureStyle: 'Omnichannel commerce system with shared catalog, checkout, delivery routing, and customer account flows',
    rolePlayed: 'Product designer, full-stack engineer, and commerce experience builder',
    status: 'Production',
    year: 2026,
    screenshots: ['Mobile storefront', 'Category browsing', 'Cart and checkout', 'Order tracking', 'Delivery coverage selection'],
    keyFeatures: ['Website ordering', 'Android and iPhone apps', 'Fresh food categories', 'Delivery workflow', 'Digital payment support'],
    metrics: ['Official website plus mobile apps', 'Google Play and Apple App Store presence', 'Coverage called out for Zanzibar and Dar es Salaam'],
    timeline: 'Multi-phase launch across web, Android, and iOS',
    teamSize: 'Product delivery team',
    clientType: 'Consumer commerce platform',
    image: '/soko-mtaani.png',
    imageAlt: 'Soko Mtaani mobile shopping app displayed in a local market setting',
    platforms: ['Web', 'Android', 'iPhone'],
    links: [
      { label: 'Website', href: 'https://sokomtaani.co.tz/' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=tz.co.sokomtaani' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/soko-mtaani/id6590633354' },
    ],
    liveDemoLink: 'https://sokomtaani.co.tz/',
    caseStudySections: [
      {
        title: 'Overview',
        body: 'Soko Mtaani positions itself as a fresh-food e-commerce platform for Tanzania, connecting households and business buyers to market products through the web and native mobile apps.',
      },
      {
        title: 'What It Solves',
        body: 'The product removes the friction of physical market runs by giving customers one place to browse products, place orders, pay digitally, and receive doorstep delivery.',
        bullets: ['Home and business ordering', 'Fresh categories from grains to seafood', 'Structured ordering instead of ad hoc phone coordination'],
      },
      {
        title: 'Platform Reach',
        body: 'The public product footprint spans the main website, a Google Play listing, and an Apple App Store listing.',
        bullets: ['Google Play package: tz.co.sokomtaani', 'Apple App Store listing available', 'Official site references both app and web ordering'],
      },
      {
        title: 'Delivery Experience',
        body: 'Public product copy highlights a smooth supply chain, secure payments, and location-based delivery support for Zanzibar and Dar es Salaam.',
      },
    ],
  },
  {
    slug: 'leotap',
    name: 'LeoTap',
    type: 'Local services super app',
    category: 'Featured Products',
    featured: true,
    shortSummary:
      'A multi-service mobile product that brings food ordering, rides, shopping, and local delivery into a single customer-facing experience.',
    industryDomain: 'Mobility / Consumer Services',
    targetUsers: ['Urban consumers', 'Food customers', 'Riders', 'Local merchants'],
    problemSolved:
      'Customers often jump between separate apps and informal channels to order food, book transport, and coordinate small local deliveries.',
    businessValue:
      'Combines multiple high-frequency consumer actions into one product surface, improving convenience and making repeat usage easier.',
    techStack: ['Android app', 'iOS app', 'Realtime dispatch', 'Maps integration', 'Firebase-backed workflows'],
    architectureStyle: 'Mobile-first service marketplace with module-based flows for transport, food, shopping, and delivery',
    rolePlayed: 'Product architect, mobile workflow designer, and systems integrator',
    status: 'Production',
    year: 2026,
    screenshots: ['Home dashboard', 'Food module', 'Ride booking', 'Shopping flow', 'Delivery tracking'],
    keyFeatures: ['Customer super app', 'Food ordering', 'Ride-hailing', 'Shopping deals', 'Delivery requests'],
    metrics: ['Customer app package present as com.leotap.customer', 'Related food app package present as com.leotap.food', 'Shared brand system across service modules'],
    timeline: 'Iterative rollout across customer and food app surfaces',
    teamSize: 'Lean startup delivery team',
    clientType: 'Consumer services platform',
    image: '/leotap.png',
    imageAlt: 'LeoTap customer app with food, rides, shopping, and delivery modules',
    platforms: ['Android', 'iPhone'],
    links: [
      { label: 'Google Play Customer', href: 'https://play.google.com/store/apps/details?id=com.leotap.customer' },
      { label: 'Google Play Leo Food', href: 'https://play.google.com/store/apps/details?id=com.leotap.food' },
    ],
    caseStudySections: [
      {
        title: 'Overview',
        body: 'LeoTap is framed as a local services super app, combining consumer mobility and commerce journeys in one interface instead of splitting them across several disconnected tools.',
      },
      {
        title: 'Service Design',
        body: 'The product experience is organized around fast entry points for food delivery, ride-hailing, shopping, and package delivery.',
        bullets: ['Shared customer identity', 'Module-based navigation', 'Cross-service promotion opportunities'],
      },
      {
        title: 'App Footprint',
        body: 'The portfolio includes the customer app and a related Leo Food app, with package identifiers supplied as com.leotap.customer and com.leotap.food.',
      },
      {
        title: 'Why It Matters',
        body: 'Products like this are valuable because they reduce app-switching for users and create stronger repeat engagement across everyday urban services.',
      },
    ],
  },
  {
    slug: 'zanema',
    name: 'ZANEMA',
    type: 'Membership and employer services website',
    category: 'Featured Products',
    featured: true,
    shortSummary:
      'A public web platform for the Zanzibar Employers Association, presenting membership, labour relations support, consultations, and legal advisory services.',
    industryDomain: 'Association / Legal Services',
    targetUsers: ['Employers', 'Association members', 'Business owners', 'HR teams'],
    problemSolved:
      'Employer organizations need a clear digital presence that explains services, membership benefits, events, and support channels in a structured way.',
    businessValue:
      'Strengthens organizational credibility, simplifies service discovery, and creates a direct path into consultations, membership, and advisory engagement.',
    techStack: ['Responsive website', 'Service pages', 'Membership content', 'Consultation CTAs'],
    architectureStyle: 'Institutional website focused on trust, service discovery, and membership conversion',
    rolePlayed: 'Website strategist, UX planner, and frontend delivery lead',
    status: 'Production',
    year: 2024,
    screenshots: ['Homepage hero', 'Service blocks', 'Leadership section', 'Events area', 'Consultation CTA'],
    keyFeatures: ['Membership information', 'Legal advisory service pages', 'Consultation booking prompts', 'Events and resource visibility'],
    metrics: ['Officially presents membership, services, and consultation flows', 'Highlights 30+ members and 25+ years of operation', 'Public contact and office details available'],
    timeline: 'Institutional web rollout and content structuring',
    teamSize: 'Small website delivery team',
    clientType: 'Professional association',
    image: '/zanema.png',
    imageAlt: 'ZANEMA website homepage with employer services and membership content',
    platforms: ['Web'],
    links: [{ label: 'Live Website', href: 'https://www.zanema.org/' }],
    liveDemoLink: 'https://www.zanema.org/',
    caseStudySections: [
      {
        title: 'Overview',
        body: 'ZANEMA serves as the public digital face of the Zanzibar Employers Association, communicating who the organization serves and what support employers can access.',
      },
      {
        title: 'Public Value',
        body: 'The site makes advisory, legal, labour-relations, and membership services easier to understand for employers evaluating whether to engage.',
        bullets: ['Membership conversion', 'Employer trust-building', 'Clearer service positioning'],
      },
      {
        title: 'Information Design',
        body: 'The structure emphasizes association credibility through vision, mission, services, leadership, events, and consultation calls to action.',
      },
      {
        title: 'Outcome',
        body: 'A platform like this matters because institutional buyers need confidence before they contact an association for legal or labour support.',
      },
    ],
  },
  {
    slug: 'clickpesa-laravel',
    name: 'ClickPesa Laravel',
    type: 'Open-source payment integration plugin',
    category: 'Featured Products',
    featured: true,
    shortSummary:
      'An open-source Laravel package for integrating ClickPesa payments and disbursements with a developer-friendly install flow, config publishing, and transaction tooling.',
    industryDomain: 'Developer Tools / Fintech',
    targetUsers: ['Laravel developers', 'SaaS teams', 'E-commerce builders', 'Fintech integrators'],
    problemSolved:
      'Teams integrating ClickPesa into Laravel projects need a reusable package instead of rebuilding gateway logic, auth handling, payouts, and status checks from scratch.',
    businessValue:
      'Speeds up payment integration work, reduces repeated boilerplate, and gives Laravel teams a clearer package-based workflow for ClickPesa adoption.',
    techStack: ['Laravel package', 'Composer', 'ClickPesa API', 'JWT auth handling', 'Migrations', 'Facade API'],
    architectureStyle: 'Reusable Laravel package with published config, migrations, facades, and transaction persistence',
    rolePlayed: 'Package author and payment integration engineer',
    status: 'Production',
    year: 2026,
    screenshots: ['Package install flow', 'Config publishing', 'USSD push usage example', 'Card payment flow', 'Disbursement examples'],
    keyFeatures: ['USSD Push payments', 'Card payments', 'Mobile money payouts', 'Bank transfers', 'Status querying', 'Config and migration publishing'],
    metrics: ['Public GitHub repository', 'Composer install command documented', 'Supports sandbox and live environments', 'Includes transaction and webhook migrations'],
    timeline: 'Open-source package build and release cycle',
    teamSize: 'Solo open-source maintenance',
    clientType: 'Developer-facing package',
    image: '/clickpesa-laravel.png',
    imageAlt: 'ClickPesa Laravel plugin portfolio graphic with install commands and payment features',
    platforms: ['PHP', 'Laravel', 'Composer'],
    links: [
      { label: 'GitHub', href: 'https://github.com/dawillygene/clickpesa-laravel' },
      { label: 'Packagist Install', href: 'https://packagist.org/packages/dawilly/laravel-clickpesa' },
    ],
    liveDemoLink: 'https://github.com/dawillygene/clickpesa-laravel',
    caseStudySections: [
      {
        title: 'Overview',
        body: 'ClickPesa Laravel is an open-source package aimed at developers who need a cleaner way to integrate payments and disbursements into Laravel applications.',
      },
      {
        title: 'Installation Flow',
        body: 'The package is designed around a familiar Laravel installation path using Composer and vendor publishing.',
        bullets: ['composer require dawilly/laravel-clickpesa', 'php artisan vendor:publish --tag=clickpesa-config', 'Optional migrations publishing and migrate flow'],
      },
      {
        title: 'Core Coverage',
        body: 'The published README documents support for USSD push, card payments, mobile money payouts, bank transfers, payment status, and payout status tracking.',
      },
      {
        title: 'Why It Matters',
        body: 'Open-source infrastructure products like this help position the portfolio beyond client websites and into reusable engineering systems other teams can adopt.',
      },
    ],
  },
  {
    slug: 'sms-clone',
    name: 'SMS Clone',
    type: 'Android forensic acquisition and AI dataset preparation tool',
    category: 'Featured Products',
    featured: true,
    shortSummary:
      'A specialized Android application that extracts SMS and broader device artifacts into structured forensic datasets for LLM training, evidence handling, and longitudinal change tracking.',
    industryDomain: 'Forensics / AI Data Tooling',
    targetUsers: ['Developers', 'Researchers', 'Digital forensics analysts', 'OSINT teams', 'AI dataset builders'],
    problemSolved:
      'Teams preparing personal communication datasets or mobile evidence often need more than raw exports: they need clean threading, integrity verification, recoverability signals, and structured packaging.',
    businessValue:
      'Turns fragmented mobile records into reusable JSON datasets and forensic artifacts, reducing manual preprocessing while improving traceability, auditability, and evidence quality.',
    techStack: ['Kotlin', 'Kotlin Coroutines', 'WorkManager', 'Room', 'Material 3', 'Gson', 'SAF', 'SHA-256 hashing'],
    architectureStyle: 'Android forensic pipeline with acquisition services, shadow-mirror change tracking, structured export packaging, and background sync automation',
    rolePlayed: 'Product architect, Android engineer, and forensic workflow designer',
    status: 'Production',
    year: 2026,
    screenshots: ['SMS monitoring notification', 'Manual SMS export screen', 'Forensic export report'],
    keyFeatures: [
      'Forensic acquisition engine',
      'SMS safety net for inserts, updates, and deletions',
      'Intelligent threading by contact and thread ID',
      'EXIF metadata extraction',
      'SHA-256 integrity manifests',
      'HTML forensic reporting',
      'ZIP evidence packaging',
      'Daily WorkManager auto-backup',
    ],
    metrics: [
      'Public GitHub repository',
      'Supports SMS plus call logs, contacts, calendar events, browser history, and app usage artifacts',
      'Includes root-aware SQLite recovery hooks for deleted record recovery',
      'Exports JSON, JSONL, HTML reports, and compressed evidence bundles',
    ],
    timeline: 'Android product build focused on acquisition, monitoring, packaging, and repeatable dataset generation',
    teamSize: 'Solo product and engineering delivery',
    clientType: 'Open-source Android utility',
    image: '/sms-clone.svg',
    imageAlt: 'SMS Clone portfolio graphic showing Android forensic export, integrity, and AI dataset workflows',
    platforms: ['Android', 'Kotlin', 'SQLite', 'JSON'],
    links: [{ label: 'GitHub', href: 'https://github.com/dawillygene/SMS-FINE-TUNING' }],
    liveDemoLink: 'https://github.com/dawillygene/SMS-FINE-TUNING',
    githubLink: 'https://github.com/dawillygene/SMS-FINE-TUNING',
    caseStudySections: [
      {
        title: 'Overview',
        body: 'SMS Clone is designed to bridge mobile communication data and AI dataset preparation by extracting conversations and related artifacts into structured, portable forensic outputs.',
      },
      {
        title: 'What It Solves',
        body: 'The product groups fragmented SMS records into chronological, contact-specific threads while preserving operational signals around changes, integrity, and packaging.',
        bullets: ['Conversation-ready JSON output', 'Deleted-message safety net via realtime change logging', 'Cleaner training data for fine-tuning and analysis'],
      },
      {
        title: 'Forensic Depth',
        body: 'Beyond SMS, the app captures supporting mobile evidence such as call logs, contacts, calendar data, browser history, app usage, and media EXIF metadata.',
        bullets: ['SHA-256 hash generation for extracted artifacts', 'High-quality HTML forensic reports', 'Single ZIP evidence container for handoff'],
      },
      {
        title: 'Technical Direction',
        body: 'The implementation is centered on Kotlin, WorkManager, Room shadow mirroring, and Android storage APIs so the export pipeline can run safely in the foreground or on scheduled daily syncs.',
      },
    ],
  },
  {
    slug: 'salum-transports',
    name: 'Salum Transports',
    type: 'Logistics and transport company website',
    category: 'Product Archive',
    featured: false,
    shortSummary:
      'A logistics-focused company site presenting fuel supply, transportation, heavy hauling, crane services, and shuttle operations in Zanzibar and beyond.',
    industryDomain: 'Logistics / Transport',
    targetUsers: ['Corporate clients', 'Fuel buyers', 'Construction teams', 'Operations managers'],
    problemSolved:
      'Transport businesses with multiple service lines need a site that clearly communicates capability breadth, equipment readiness, and contact paths for quotes.',
    businessValue:
      'Improves trust with commercial buyers and makes it easier for prospects to understand the company’s service scope before making contact.',
    techStack: ['Marketing website', 'Service catalog', 'Visual fleet presentation', 'Lead generation contact flows'],
    architectureStyle: 'Service-heavy corporate website with strong category navigation and credibility sections',
    rolePlayed: 'Digital product designer and web implementation lead',
    status: 'Production',
    year: 2024,
    screenshots: ['Logistics homepage', 'Services overview', 'Fleet presentation', 'Quote call to action'],
    keyFeatures: ['Fuel service station content', 'Bulk fuel delivery', 'Projects cargo', 'Cranes and lifting', 'Domestic haulage'],
    metrics: ['Official site lists broad logistics service categories', 'Public service and contact information available', 'Strong fleet and one-stop logistics positioning'],
    timeline: 'Corporate website build and service content rollout',
    teamSize: 'Small delivery collaboration',
    clientType: 'Transport and logistics company',
    image: '/salum-transports.png',
    imageAlt: 'Salum Transports website showing logistics services, fleet, and transport operations',
    platforms: ['Web'],
    links: [{ label: 'Live Website', href: 'https://www.salumtransports.co.tz/' }],
    liveDemoLink: 'https://www.salumtransports.co.tz/',
    caseStudySections: [
      {
        title: 'Overview',
        body: 'Salum Transports needed a clearer web presence for its logistics, transportation, fuel, and heavy-equipment service portfolio.',
      },
      {
        title: 'Business Framing',
        body: 'The site is designed to reassure commercial clients that the company can handle varied logistics workloads, from bulk fuel delivery to out-of-gauge cargo.',
      },
      {
        title: 'Content Strategy',
        body: 'Service pages, fleet visibility, and contact prompts work together to reduce ambiguity around what the company can deliver.',
      },
      {
        title: 'Operational Signal',
        body: 'Transport buyers are risk-sensitive, so the site emphasizes reliability, safety, fleet readiness, and one-stop-service positioning.',
      },
    ],
  },
  {
    slug: 'gene-pharmacy-pos',
    name: 'Gene Pharmacy POS',
    type: 'Multi-tenant pharmacy POS and management system',
    category: 'Featured Products',
    featured: true,
    shortSummary:
      'A pharmacy management and point-of-sale platform built around secure dashboard access, tenant-aware operations, inventory workflows, and prescription-era retail controls.',
    industryDomain: 'Healthcare / Retail Operations',
    targetUsers: ['Pharmacy owners', 'Cashiers', 'Store managers', 'Branch operators'],
    problemSolved:
      'Pharmacies need more than a simple cashier screen: they need a system that handles branch access, inventory, user accounts, and daily retail operations in one place.',
    businessValue:
      'Centralizes pharmacy operations, supports better inventory control, and gives owners a stronger digital system for multi-branch or multi-user management.',
    techStack: ['Next.js frontend', 'POS workflows', 'Tenant-aware auth', 'Dashboard UI', 'Inventory and billing modules'],
    architectureStyle: 'Multi-tenant operational dashboard with secure login, pharmacy registration, and role-aware retail workflows',
    rolePlayed: 'Product architect and frontend systems builder',
    status: 'Production',
    year: 2026,
    screenshots: ['Login page', 'Dashboard access flow', 'Tenant registration prompt', 'Inventory and billing modules', 'Prescription-era workflow framing'],
    keyFeatures: ['Sign-in dashboard', 'Pharmacy registration', 'Multi-tenant structure', 'POS workflow foundation', 'Inventory and billing positioning'],
    metrics: ['Live hosted frontend', 'Public app metadata labels it as multi-tenant', 'Branded as Gene Pharmacy and powered by Genelabs Tanzania'],
    timeline: 'Active frontend delivery and product shaping',
    teamSize: 'Lean product build',
    clientType: 'Healthcare retail system',
    image: '/gene-pharmacy-pos.png',
    imageAlt: 'Gene Pharmacy POS portfolio graphic showing secure login and management workflow',
    platforms: ['Web', 'POS', 'Multi-tenant SaaS'],
    links: [{ label: 'Live App', href: 'https://gene-pharmacy-frontend.vercel.app/login' }],
    liveDemoLink: 'https://gene-pharmacy-frontend.vercel.app/login',
    caseStudySections: [
      {
        title: 'Overview',
        body: 'Gene Pharmacy is positioned as a pharmacy management system with a login-driven dashboard experience and onboarding for pharmacy owners.',
      },
      {
        title: 'Observed Product Signals',
        body: 'The live app metadata and public login UI point to a multi-tenant structure, dashboard-based access, and a registration path for new pharmacy owners.',
        bullets: ['Page title: Gene Pharmacy', 'Description: Multi-tenant pharmacy management system', 'Register your pharmacy flow visible on the login page'],
      },
      {
        title: 'Operational Direction',
        body: 'A pharmacy POS product like this typically needs secure access, tenant separation, inventory accuracy, and faster sales handling across staff roles.',
      },
      {
        title: 'Why It Belongs Here',
        body: 'This adds a healthcare-retail system to the portfolio and shows product work outside transport, membership, and consumer marketplace domains.',
      },
    ],
  },
  {
    slug: 'salum-portal',
    name: 'Salum Transports Portal',
    type: 'Operations dashboard portal',
    category: 'Product Archive',
    featured: false,
    shortSummary:
      'An operations-focused internal portal concept for tracking shipments, vehicles, drivers, fuel orders, and route performance in one dashboard.',
    industryDomain: 'Logistics Operations',
    targetUsers: ['Operations admins', 'Dispatch teams', 'Fleet managers', 'Support staff'],
    problemSolved:
      'Transport operations become hard to manage when shipment, fleet, fuel, and driver activity are split across informal trackers or disconnected tools.',
    businessValue:
      'Gives logistics teams a clearer operating picture with one place for shipment monitoring, exception handling, and performance review.',
    techStack: ['Admin dashboard', 'Analytics panels', 'Operational tables', 'Map views', 'Role-based access'],
    architectureStyle: 'Internal logistics command center with KPI panels, live records, and fleet visibility modules',
    rolePlayed: 'Dashboard designer and operations systems engineer',
    status: 'Internal',
    year: 2024,
    screenshots: ['Dashboard overview', 'Shipment table', 'Vehicle summary', 'Fuel order list', 'Route activity map'],
    keyFeatures: ['Shipment tracking', 'Vehicle management', 'Driver records', 'Fuel order monitoring', 'Operational analytics'],
    metrics: ['Dashboard designed around logistics KPIs', 'Combines shipment, fleet, and fuel workflows', 'Supports admin-focused daily operations'],
    timeline: 'Internal portal planning and interface delivery',
    teamSize: 'Focused internal product build',
    clientType: 'Private operational system',
    image: '/salum-portal.png',
    imageAlt: 'Salum Transports internal operations portal with shipment and fleet dashboards',
    platforms: ['Web portal'],
    links: [{ label: 'Portal URL', href: 'https://www.potal.salumtransports.co.tz/' }],
    caseStudySections: [
      {
        title: 'Overview',
        body: 'This portal extends the Salum transport ecosystem beyond the public website into internal operations, where managers need current shipment and fleet visibility.',
      },
      {
        title: 'Core Workflows',
        body: 'The interface is centered on day-to-day dispatch intelligence: active shipments, pending orders, fleet readiness, and recent movements.',
        bullets: ['Shipment records', 'Fleet status', 'Fuel order handling', 'Analytics for dispatch decisions'],
      },
      {
        title: 'Why an Internal Portal',
        body: 'Public websites win trust, but internal dashboards are what make transport execution more accountable and measurable.',
      },
    ],
  },
  {
    slug: 'rakiasa',
    name: 'RAKIASA',
    type: 'Community and NGO website',
    category: 'Product Archive',
    featured: false,
    shortSummary:
      'A community-focused website concept centered on empowerment programs, local participation, project visibility, and fundraising support.',
    industryDomain: 'NGO / Community Development',
    targetUsers: ['Community members', 'Volunteers', 'Donors', 'Program partners'],
    problemSolved:
      'Grassroots organizations need a clear digital home for explaining their mission, showcasing projects, and guiding supporters toward action.',
    businessValue:
      'Improves public visibility, helps communicate social impact, and gives supporters clearer paths to learn, volunteer, and donate.',
    techStack: ['Responsive website', 'Impact storytelling', 'Program showcase', 'Donation CTAs'],
    architectureStyle: 'Cause-driven website with strong storytelling, trust cues, and action-oriented landing sections',
    rolePlayed: 'Web designer and narrative-focused frontend builder',
    status: 'Production',
    year: 2023,
    screenshots: ['Mission hero', 'Impact statistics', 'Project cards', 'Community calls to action'],
    keyFeatures: ['Mission storytelling', 'Impact metrics', 'Project highlights', 'Volunteer and donation prompts'],
    metrics: ['Strong NGO-style content structure', 'Project and impact sections visible in the product concept', 'Designed around community engagement flows'],
    timeline: 'Cause-led website design and launch preparation',
    teamSize: 'Small mission-driven delivery team',
    clientType: 'Community organization',
    image: '/rakiasa.png',
    imageAlt: 'RAKIASA community website with impact statistics and featured projects',
    platforms: ['Web'],
    links: [{ label: 'Live Website', href: 'https://rakiasa.or.tz/' }],
    liveDemoLink: 'https://rakiasa.or.tz/',
    caseStudySections: [
      {
        title: 'Overview',
        body: 'RAKIASA is positioned as a community-focused organization site where storytelling and trust are as important as navigation and visual quality.',
      },
      {
        title: 'Audience Needs',
        body: 'Supporters, volunteers, and partners need to quickly understand the mission, see evidence of activity, and find clear ways to get involved.',
      },
      {
        title: 'Product Direction',
        body: 'The experience leans on warm visuals, impact counters, project cards, and direct action prompts to keep the mission tangible.',
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
    name: 'SMS-FINE-TUNING',
    href: 'https://github.com/dawillygene/SMS-FINE-TUNING',
    category: 'Open Source / Android Forensics',
    summary: 'Android forensic acquisition tool for exporting SMS conversations and broader device artifacts into structured datasets suitable for analysis, evidence packaging, and LLM fine-tuning workflows.',
    qualitySignals: ['Multi-artifact extraction scope', 'Integrity hashing and custody awareness', 'Background sync and change tracking', 'Structured export pipeline for AI-ready data'],
    stack: ['Kotlin', 'Android', 'Room', 'WorkManager'],
  },
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
