export interface ProductItem {
  id: string;
  name: string;
  category: "templates" | "toolkits" | "enterprise";
  price: number;
  badge?: string;
  shortDescription: string;
  longDescription: string;
  deliverySLA: string;
  deliverables: string[];
  creemCheckoutUrl: string;
  features: string[];
}

export const PRODUCTS_CATALOG: ProductItem[] = [
  // --- DEVELOPER ASSETS & DESIGN KITS ---
  {
    id: "ui-icon-pack",
    name: "UI Icon & Vector Asset Pack",
    category: "toolkits",
    price: 12,
    badge: "Instant Download",
    shortDescription: "300+ hand-crafted SVG and vector UI icons organized for modern developer workflows.",
    longDescription: "A comprehensive developer and designer icon library containing 300+ customizable vector glyphs in SVG, PNG, and ready-to-import Figma components.",
    deliverySLA: "Instant Digital Download via Email",
    deliverables: ["SVG Source Files (300+ items)", "Figma Library (.fig)", "Optimized React Icon Components"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-12",
    features: [
      "Pixel-perfect 24x24 grid",
      "Compatible with Tailwind CSS & Lucide styles",
      "Lifetime updates and commercial license",
      "Instant ZIP download after payment"
    ]
  },
  {
    id: "dev-cheatsheets-kit",
    name: "Developer Architecture & Cheatsheet Kit",
    category: "toolkits",
    price: 22,
    badge: "New Release",
    shortDescription: "High-resolution architecture blueprints, API design patterns, and CLI reference guides.",
    longDescription: "Curated reference posters, system architecture templates, and clean PDF cheatsheets covering database indexing, caching strategies, and REST API conventions.",
    deliverySLA: "Instant Digital Download via Email",
    deliverables: ["High-Res Architecture Vector Graphics", "Developer Reference Cheatsheets (PDF)", "Print-Ready Vector Posters"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-22",
    features: [
      "Vector-based architecture diagrams",
      "Covers Docker, SQL indexing, and HTTP status flows",
      "Editable Figma diagram sources included",
      "Instant digital PDF and SVG download"
    ]
  },
  {
    id: "notion-launch-os",
    name: "Productivity & Launch OS Template",
    category: "toolkits",
    price: 24,
    badge: "Best Seller",
    shortDescription: "Complete Notion operating system for managing product roadmaps, sprints, and launches.",
    longDescription: "Structured Notion workspace with sprint boards, milestone tracking, automated release checklists, and team onboarding templates.",
    deliverySLA: "Instant One-Click Duplicate Link",
    deliverables: ["Notion OS Duplicate URL", "Quickstart Implementation Guide (PDF)", "Workflow Walkthrough Guide"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-24",
    features: [
      "Agile sprint planner & backlog",
      "Pre-configured project dashboard views",
      "Automated task progress calculations",
      "Works on free personal Notion accounts"
    ]
  },
  {
    id: "tailwind-block-library",
    name: "Tailwind UI Responsive Block Library",
    category: "templates",
    price: 38,
    badge: "UI Toolkit",
    shortDescription: "50+ modular, copy-paste Tailwind CSS UI sections (Hero, Pricing, Testimonials, Footers).",
    longDescription: "Hand-coded, semantic HTML and Tailwind CSS components designed for instant copy-paste into Next.js, React, or standard HTML projects.",
    deliverySLA: "Instant Code Library Access",
    deliverables: ["Copy-Paste Component Library", "React / JSX Snippets", "Dark Mode Classes & Tokens"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-38",
    features: [
      "50+ accessible Tailwind CSS section components",
      "Fully responsive across mobile, tablet, and desktop",
      "Zero extra dependencies or external CSS",
      "Clean semantic markup ready for Next.js"
    ]
  },
  {
    id: "figma-design-system",
    name: "Figma Component Design System",
    category: "toolkits",
    price: 39,
    badge: "Design Toolkit",
    shortDescription: "Over 120+ modern UI components, color variables, typography scales, and responsive frames.",
    longDescription: "Production-ready Figma component architecture with auto-layout v5, responsive breakpoints, accessible contrast tokens, and dark/light modes.",
    deliverySLA: "Instant Figma File Access",
    deliverables: ["Figma Design Library (.fig)", "Typography & Color Tokens Guide", "Component Documentation"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-39",
    features: [
      "120+ production-grade components",
      "Auto-layout 5.0 with responsive constraints",
      "WCAG 2.1 AA accessible contrast ratios",
      "Full commercial resale & project license"
    ]
  },
  {
    id: "landing-page-template",
    name: "High-Converting Landing Page Template",
    category: "templates",
    price: 44,
    badge: "Popular Code Kit",
    shortDescription: "Clean, responsive Next.js 14 and Tailwind CSS landing page built for modern tech products.",
    longDescription: "A turnkey landing page codebase complete with hero variations, social proof grids, pricing tables, FAQ accordions, and SEO meta tags.",
    deliverySLA: "Instant GitHub Repo & ZIP Access",
    deliverables: ["Clean Next.js 14 Source Code", "Tailwind CSS Configuration", "Vercel Deploy Configuration"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-44",
    features: [
      "100/100 Google Lighthouse performance score",
      "Zero third-party bloat or tracking scripts",
      "Mobile-first responsive architecture",
      "Pre-configured for 1-click Vercel deploy"
    ]
  },
  {
    id: "multi-page-saas-template",
    name: "Multi-Page SaaS Web Template",
    category: "templates",
    price: 66,
    badge: "Full Frontend",
    shortDescription: "Complete multi-page web application frontend with marketing, pricing, blog, and app shell.",
    longDescription: "An expansive 8-page website template containing blog layouts, detailed feature pages, customer case studies, comparison tables, and user dashboard layouts.",
    deliverySLA: "Instant Download & Repo Access",
    deliverables: ["Full Multi-Page Next.js Codebase", "Markdown/MDX Blog Setup", "Documentation & Guide"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-66",
    features: [
      "8 polished page templates ready for production",
      "Built-in MDX blogging system",
      "Dark and light mode with theme switcher",
      "Clean TypeScript definitions throughout"
    ]
  },
  {
    id: "auth-database-starter",
    name: "Full-Stack API & Auth Starter Kit",
    category: "templates",
    price: 76,
    badge: "Backend Boilerplate",
    shortDescription: "Robust backend boilerplate with JWT authentication, database schemas, and billing routes.",
    longDescription: "Production-ready backend architecture featuring secure session management, role-based access control (RBAC), Prisma ORM migrations, and webhook handlers.",
    deliverySLA: "Instant GitHub Access & Archive",
    deliverables: ["Node.js / Next.js API Routes", "Prisma Database Schemas", "Security & Deployment Documentation"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-76",
    features: [
      "Session-based and JWT token authentication",
      "PostgreSQL and SQLite database schemas",
      "Webhook signature verification utilities",
      "Security hardened against OWASP Top 10"
    ]
  },
  {
    id: "all-in-one-bundle",
    name: "All-in-One Design + Code Suite",
    category: "enterprise",
    price: 88,
    badge: "Best Value Bundle",
    shortDescription: "The complete bundle: Figma Design System, Next.js Templates, and Icon Library combined.",
    longDescription: "Everything you need to conceptualize, design, and ship web applications. Includes the full Figma design system, the multi-page template, and the icon bundle.",
    deliverySLA: "Instant Master Archive Download",
    deliverables: ["Complete Master ZIP (All Code + Design Files)", "Figma Master File", "VIP Documentation"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-88",
    features: [
      "Includes $180+ worth of standalone assets",
      "Synchronized design tokens matching code classes",
      "Unlimited project commercial license",
      "Free future updates included forever"
    ]
  },

  // --- ADVANCED DIGITAL TOOLKITS & ENTERPRISE BOILERPLATES (100% DOWNLOADABLE DIGITAL PRODUCTS) ---
  {
    id: "performance-seo-toolkit",
    name: "Website Performance & SEO Optimization Master Toolkit",
    category: "toolkits",
    price: 98,
    badge: "Developer Toolkit",
    shortDescription: "Automated Core Web Vitals benchmark scripts, Next.js speed configs, and SEO JSON-LD schema suite.",
    longDescription: "A complete pre-built engineering toolkit designed to maximize web speed and SEO indexing. Includes automated node.js Lighthouse benchmark scripts, image optimization pipelines, server cache presets, and comprehensive PDF implementation blueprints.",
    deliverySLA: "Instant Digital Download via Email",
    deliverables: ["Automated Performance Benchmark Scripts", "JSON-LD Rich Snippet Schemas", "Core Web Vitals Remediation Guide (PDF)", "Next.js Speed Config Templates"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-98",
    features: [
      "Complete automated Core Web Vitals benchmark scripts",
      "Drop-in Next.js and Tailwind speed configs",
      "Structured schema markup templates for Google SEO",
      "Instant ZIP download with commercial license"
    ]
  },
  {
    id: "security-architecture-suite",
    name: "Production Security & Code Architecture Boilerplate Suite",
    category: "enterprise",
    price: 116,
    badge: "Security Boilerplate",
    shortDescription: "Pre-hardened secure backend architecture template, OWASP security configs, and CI/CD pipelines.",
    longDescription: "A production-grade software security template featuring OWASP-hardened HTTP headers, automated GitHub Actions CI/CD vulnerability scanning workflows, JWT encryption utilities, and API rate-limiting middleware.",
    deliverySLA: "Instant GitHub Repo & ZIP Access",
    deliverables: ["Security Architecture Codebase", "GitHub Actions Security Workflows", "API Rate-Limiting & Guard Modules", "OWASP Compliance Verification Checklist"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-116",
    features: [
      "Pre-configured OWASP security defense rules",
      "Automated secret scanning and dependency verification",
      "Robust API key and JWT session management",
      "Full commercial use license and instant repo access"
    ]
  },
  {
    id: "saas-deployment-kit",
    name: "Full-Stack SaaS Platform & Multi-Tenant Deployment Kit",
    category: "enterprise",
    price: 142,
    badge: "Turnkey Codebase",
    shortDescription: "Complete multi-tenant SaaS codebase pre-configured for instant 1-click Vercel and Supabase deployment.",
    longDescription: "A turnkey multi-tenant web application codebase ready for instant deployment. Includes pre-wired user authentication, database migration scripts, environment presets, webhook listeners, and a 45-minute video walkthrough guide.",
    deliverySLA: "Instant GitHub Repo & ZIP Access",
    deliverables: ["Full SaaS Architecture Codebase", "Database Migration & Seed Scripts", "Vercel & Supabase Deployment Configs", "Step-by-Step Video Setup Guide (MP4)"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-142",
    features: [
      "Turnkey multi-tenant app ready for Vercel deployment",
      "Automated Supabase & PostgreSQL schema migrations",
      "Stripe and Creem checkout webhook integration ready",
      "Instant private GitHub repository transfer"
    ]
  },
  {
    id: "enterprise-master-bundle",
    name: "Ultimate Enterprise Developer & Agency Master Suite",
    category: "enterprise",
    price: 229,
    badge: "All-Access Suite",
    shortDescription: "The all-inclusive software archive containing every template, Figma system, and agency license.",
    longDescription: "Our flagship master digital software library. Grants instant access to every single codebase, the complete Figma design system (120+ components), security templates, performance scripts, and an Extended Multi-Client Agency License permitting unlimited client deliverables.",
    deliverySLA: "Instant Master Archive Download",
    deliverables: ["Master ZIP Archive (All Codebases & Assets)", "Complete Figma Master Library (.fig)", "Extended Agency Commercial License", "Lifetime Version Updates"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-229",
    features: [
      "Access to all 12 other software kits in one package",
      "Extended Agency License (unlimited client deliverables)",
      "Lifetime updates to all future component releases",
      "Instant automated master archive download"
    ]
  }
];