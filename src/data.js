// src/data.js
// Portfolio data for Albert F. Flores.
// Every project: { id, name, kind, status, stack, desc, features }
// Optional: flow, hardware, image, gallery

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
    Filament: '#FF2D20', Arduino: '#00878F', 'C++': '#00599C',
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
        desc: 'A multi-tenant SaaS platform with modular monolith architecture. Core module handles organizations, plans, RBAC, and platform admin. Accounting and Inventory ship as business modules.',
        features: [
            'Modular monolith (Core + business modules)',
            'Multi-tenancy with OrganizationScope',
            'Platform admin with impersonation',
            'RBAC across platform vs org roles',
        ],
    },
    {
        id: 'civil',
        name: 'Civil Registry Management System',
        kind: 'Queue management & records archiving',
        status: 'built',
        stack: ['Laravel', 'PHP', 'MySQL', 'Go', 'Tailwind CSS'],
        desc: 'A government information system covering records archiving and public queueing. Laravel + MySQL power the core; a Go service handles real-time queueing across mobile, tablet, and desktop.',
        flow: ['Mobile / Tablet / Desktop', 'Laravel (API)', 'Go queue service', 'MySQL', 'Archive & reports'],
        features: [
            'Citizen record archiving (birth, marriage, death)',
            'Kiosk queue dispenser (mobile-friendly)',
            'Staff call / serve / skip (tablet)',
            'Live admin dashboard with daily reports',
        ],
    },
    {
        id: 'gad',
        name: 'GAD Application',
        kind: 'Laravel web application',
        status: 'built',
        stack: ['Laravel', 'PHP', 'MySQL'],
        desc: 'A Laravel application for Gender and Development records and processes. Role-based access for staff and admins, with structured reports, exports, and searchable activity logs.',
        features: [
            'Gender and Development record management',
            'Role-based access for staff and admins',
            'Reports and structured data exports',
            'Searchable records with activity logs',
        ],
    },
    {
        id: 'floodguard',
        name: 'FloodGuard',
        kind: 'Flood monitoring & management system',
        status: 'built',
        stack: ['Laravel', 'PHP', 'Vue 3', 'Tailwind CSS', 'PostgreSQL', 'NeonDB'],
        desc: 'Flood monitoring built with Laravel and Vue 3, backed by serverless PostgreSQL on NeonDB. Tracks flood levels in real time and surfaces alerts on an interactive map.',
        features: [
            'Real-time flood level monitoring',
            'Interactive map of affected areas',
            'Automated alerts and notifications',
            'Historical data and trend reports',
        ],
    },
    {
        id: 'felsci',
        name: 'Felsci Laboratory Inventory System',
        kind: 'Laboratory inventory management',
        status: 'built',
        stack: ['Laravel', 'PHP', 'Vue 3', 'Tailwind CSS', 'PostgreSQL'],
        desc: 'Inventory system for laboratory reagents, equipment, and consumables. Includes expiry monitoring, reorder tracking, and role-based access for lab staff and managers.',
        features: [
            'Reagent and consumable tracking',
            'Equipment inventory management',
            'Expiry monitoring with alerts',
            'Stock level and reorder reports',
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
            ['Filament', 'Admin panels'],
        ],
    },
    { title: 'Backend', items: ['Node.js', 'Express.js', 'Go', 'Java'] },
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