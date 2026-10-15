// src/data.js
// Portfolio data for Albert F. Flores.
// Every project: { id, name, kind, status, stack, desc, features }
// Optional: flow, hardware, image, gallery
//
// NOTE: Projects.jsx expects PROJECTS[0] and PROJECTS[1] to be the featured
// pair, and looks up the other projects by id (civil, gad, floodguard,
// felsci, nutrimeal, afterfootball, captain, jtour, boracay, iot).

// ─────────────────────────────────────────────────────────────────
//   LOGO SLUGS — display name → Simple Icons slug
// ─────────────────────────────────────────────────────────────────
export const LOGO_SLUGS = {
    Laravel: 'laravel', PHP: 'php', MySQL: 'mysql', PostgreSQL: 'postgresql',
    NeonDB: 'neon', 'Mongo DB': 'mongodb', MongoDB: 'mongodb',
    'Vue 3': 'vuedotjs', Vue: 'vuedotjs', 'Inertia.js': 'inertia',
    React: 'react', 'Next.js': 'nextdotjs',
    JavaScript: 'javascript', TypeScript: 'typescript',
    HTML5: 'html5', CSS3: 'css3',
    'Tailwind CSS': 'tailwindcss', Bootstrap: 'bootstrap',
    'Node.js': 'nodedotjs', 'Express.js': 'express', Go: 'go', Java: 'openjdk',
    Git: 'git', GitHub: 'github', Composer: 'composer', NPM: 'npm',
    Vite: 'vite', Figma: 'figma', Docker: 'docker',
    Linux: 'linux', Windows: 'windows', Apache: 'apache',
    Laragon: null, Filament: 'laravel',
    Claude: 'anthropic', Anthropic: 'anthropic',
    DeepSeek: 'deepseek', Gemini: 'googlegemini',
    ChatGPT: 'openai', OpenAI: 'openai',
    Copilot: 'githubcopilot', Cursor: 'cursor',
    Arduino: 'arduino', 'C++': 'cplusplus',
    'UI/UX': null, Wireframing: null, Prototyping: null,
    IoT: null, Sensors: null, SQL: null,
};

// ─────────────────────────────────────────────────────────────────
//   BRAND COLORS
// ─────────────────────────────────────────────────────────────────
export const BRAND_COLORS = {
    Laravel: '#FF2D20', PHP: '#777BB4', MySQL: '#4479A1', PostgreSQL: '#4169E1',
    NeonDB: '#00E599', 'Mongo DB': '#47A248', MongoDB: '#47A248',
    'Vue 3': '#4FC08D', Vue: '#4FC08D', 'Inertia.js': '#9553E9',
    React: '#61DAFB', 'Next.js': '#000000',
    JavaScript: '#F7DF1E', TypeScript: '#3178C6',
    HTML5: '#E34F26', CSS3: '#1572B6',
    'Tailwind CSS': '#06B6D4', Bootstrap: '#7952B3',
    'Node.js': '#5FA04E', 'Express.js': '#000000', Go: '#00ADD8', Java: '#F89820',
    Git: '#F05032', GitHub: '#181717', Composer: '#885630', NPM: '#CB3837',
    Vite: '#646CFF', Figma: '#F24E1E', Docker: '#2496ED',
    Linux: '#FCC624', Windows: '#0078D4', Apache: '#D22128',
    Filament: '#FDAE4B', Arduino: '#00878F', 'C++': '#00599C',
    Claude: '#D97757', Anthropic: '#D97757', DeepSeek: '#4D6BFE',
    Gemini: '#8E75B2', ChatGPT: '#10A37F', OpenAI: '#10A37F',
    Copilot: '#000000', Cursor: '#000000',
};

export const BRAND_COLORS_DARK_OVERRIDE = {
    'Next.js': '#FFFFFF', 'Express.js': '#FFFFFF', GitHub: '#FFFFFF',
    Copilot: '#FFFFFF', Cursor: '#FFFFFF',
};

// ─────────────────────────────────────────────────────────────────
//   PROJECTS
// ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
    {
        id: 'superapp',
        name: 'SuperApp',
        kind: 'Multi-tenant SaaS platform',
        status: 'building',
        stack: ['Laravel', 'PHP', 'Inertia.js', 'Vue 3', 'Tailwind CSS', 'MySQL'],
        desc: 'A multi-tenant SaaS platform on Laravel 12 with a modular architecture. The core foundation is in place: authentication, organizations, role-based access, and organization user management. Accounting and Inventory are the next business modules on the roadmap.',
        features: [
            'Modular architecture (core + business modules)',
            'Multi-tenancy with organization-scoped data',
            'Authentication and organization management',
            'RBAC across platform and organization roles',
            'Next up: accounting, then inventory modules',
        ],
    },
    {
        id: 'civil',
        name: 'Civil Registry Queue System',
        kind: 'Queue management system',
        status: 'built',
        stack: ['Node.js', 'Express.js', 'Go', 'PostgreSQL', 'Docker'],
        desc: 'A queue management application for a Civil Registry office. An Express.js API and a Go service handle ticketing and live queue state, backed by PostgreSQL and packaged with Docker.',
        flow: ['Kiosk / Tablet / Desktop', 'Express.js API', 'Go queue service', 'PostgreSQL'],
        features: [
            'Queue ticket dispenser for walk-in clients',
            'Staff call / serve / skip controls',
            'Live queue status across devices',
            'Containerized deployment with Docker',
        ],
    },
    {
        id: 'gad',
        name: 'MSWD GAD System',
        kind: 'Municipal social welfare information system',
        status: 'built',
        stack: ['Laravel', 'PHP', 'Inertia.js', 'Vue 3', 'Tailwind CSS'],
        desc: 'A management information system for a municipal social welfare and development office. Manages residents, PWDs, solo parents, senior citizens, barangay data, funds, and case studies, with filterable reports and exports.',
        features: [
            'Resident, PWD, solo parent, and senior records',
            'Barangay and resident management',
            'Report filters that adapt to the report type',
            'PDF, Word, and Excel exports',
            'Server-side filtered data tables',
            'Data privacy notice with acknowledgment gate',
        ],
    },
    {
        id: 'floodguard',
        name: 'FloodGuard',
        kind: 'Flood information & management system',
        status: 'built',
        stack: ['Laravel', 'PHP', 'Filament'],
        desc: 'A flood information and management system built with Laravel and a Filament admin panel. Delivered as a family of related FloodGuard apps and modules under one project.',
        features: [
            'Filament admin panel for managing flood data',
            'Flood information records and management',
            'Multiple modules grouped as one project family',
        ],
    },
    {
        id: 'felsci',
        name: 'FelSciLabventory',
        kind: 'Science laboratory inventory system',
        status: 'built',
        stack: ['Laravel', 'PHP', 'Inertia.js', 'Vue 3', 'Tailwind CSS'],
        desc: 'An inventory management system for a school science laboratory, with a dashboard overview and a searchable inventory index.',
        features: [
            'Dashboard overview of lab inventory',
            'Inventory index for laboratory items',
            'Item history and activity tracking',
        ],
    },
    {
        id: 'nutrimeal',
        name: 'Nutrimeal',
        kind: 'Full-stack web application',
        status: 'built',
        stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
        desc: 'An affordable meal-planning system built as a capstone. Generates personalized meal plans based on budget and nutrition goals, with per-meal info and saved user accounts.',
        features: [
            'Personalized meal plan generator',
            'Budget-based meal recommendations',
            'Nutritional info per meal',
            'User accounts and saved plans',
        ],
    },
    {
        id: 'afterfootball',
        name: 'AfterFootball',
        kind: 'UI/UX Design',
        status: 'built',
        stack: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping'],
        desc: 'UI/UX exploration for a football tournament and team management concept. Includes user flow mapping, low-fidelity wireframes, and a high-fidelity interactive Figma prototype.',
        features: [
            'User flow mapping for organizers',
            'Low-fidelity wireframes',
            'High-fidelity interactive prototype',
            'Reusable Figma component system',
        ],
    },
    {
        id: 'captain',
        name: 'Captain Barbers',
        kind: 'Frontend web development',
        status: 'built',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        desc: 'Marketing and booking front-end for a barbershop brand. Branded landing page, service listings with pricing, booking flow UI, and fully responsive layout.',
        features: [
            'Branded landing page',
            'Service listings with pricing',
            'Booking flow UI',
            'Fully responsive layout',
        ],
    },
    {
        id: 'jtour',
        name: 'J Tour Boracay',
        kind: 'Frontend web development',
        status: 'built',
        stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        desc: 'Tour booking front-end for a Boracay travel operator. Tour package listings, booking inquiry flow, destination gallery, and a mobile-first responsive layout.',
        features: [
            'Tour package listings',
            'Booking inquiry flow',
            'Gallery and destination highlights',
            'Mobile-first responsive layout',
        ],
    },
    {
        id: 'boracay',
        name: 'BoracayByJosephine',
        kind: 'Frontend web development',
        status: 'built',
        stack: ['React', 'Tailwind CSS', 'Vite'],
        desc: 'Promotional site for a Boracay accommodation and tour brand. Branded hero section, accommodation highlights, and a contact inquiry form, built with React + Vite.',
        features: [
            'Branded hero section',
            'Accommodation / tour highlights',
            'Contact and inquiry section',
            'Vite-powered fast build',
        ],
    },
    {
        id: 'iot',
        name: 'IoT Cat Feeding System',
        kind: 'IoT / hardware',
        status: 'built',
        stack: ['Arduino', 'C++', 'IoT', 'Sensors'],
        hardware: ['Arduino', 'Servo motor', 'RTC module', 'Load cell'],
        desc: 'IoT-based automated pet feeder with physical controls and a web interface. Schedules feedings, measures portions with a load cell, and reports low food levels.',
        features: [
            'Scheduled automatic feeding',
            'Portion control via load cell',
            'Physical button controls',
            'Web interface for scheduling',
        ],
    },
];

// ─────────────────────────────────────────────────────────────────
//   GROUPS
// ─────────────────────────────────────────────────────────────────
export const GROUPS = [
    {
        title: 'Primary stack',
        big: true,
        items: [
            ['Laravel', 'Primary application stack'],
            ['PHP', 'Backend development'],
            ['PostgreSQL', 'Relational database'],
            ['Vue 3', 'Frontend development'],
            ['Inertia.js', 'Full-stack architecture'],
            ['Tailwind CSS', 'UI development'],
        ],
    },
    { title: 'Backend', items: ['Node.js', 'Express.js', 'Go', 'Java', 'Filament'] },
    { title: 'Data', items: ['MySQL', 'PostgreSQL', 'NeonDB', 'Mongo DB'] },
    {
        title: 'Frontend',
        items: [
            'Vue 3', 'Inertia.js', 'React', 'Next.js',
            'JavaScript', 'TypeScript', 'HTML5', 'CSS3',
            'Tailwind CSS', 'Bootstrap',
        ],
    },
    { title: 'AI-driven development', items: ['Claude', 'DeepSeek', 'Gemini', 'ChatGPT', 'Copilot'] },
    { title: 'Tools & workflow', items: ['Git', 'GitHub', 'Composer', 'NPM', 'Vite', 'Figma'] },
    { title: 'Infrastructure', items: ['Docker', 'Linux', 'Windows', 'Laragon', 'Apache'] },
];

export const SYSTEMS = [
    'Full-stack web applications',
    'SaaS architecture',
    'Multi-tenant applications',
    'REST APIs',
    'RBAC',
    'Queue management systems',
    'Database-driven applications',
    'Modular architecture',
    'Containerized applications',
];

// ─────────────────────────────────────────────────────────────────
//   PERSONAL
// ─────────────────────────────────────────────────────────────────
export const PERSONAL = {
    name: 'Albert F. Flores',
    role: 'Full-Stack Developer',
    tagline: 'IT Professional',
    location: 'Aklan, Philippines',
    email: 'haeows@gmail.com',
    bio: 'I build practical web applications, business systems, and software platforms using Laravel and modern full-stack technologies. My experience spans SaaS platforms, administrative systems, queue management, database-driven applications, and modern web interfaces.',
    status: 'Currently building SuperApp',
    contacts: [
        {
            key: 'email',
            label: 'Email',
            value: 'haeows@gmail.com',
            href: 'mailto:haeows@gmail.com',
            icon: 'mail',
        },
        {
            key: 'github',
            label: 'GitHub',
            value: 'Albrtflrs',
            href: 'https://github.com/Albrtflrs',
            icon: 'github',
        },
        {
            key: 'linkedin',
            label: 'LinkedIn',
            value: 'albert-flores',
            href: 'https://www.linkedin.com/in/albert-flores-4397b0376',
            icon: 'linkedin',
        },
    ],
};