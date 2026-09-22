export interface ProductItem {
  id: string;
  name: string;
  type: "digital_product" | "digital_service";
  price: number;
  badge?: string;
  shortDescription: string;
  longDescription: string;
  deliverySLA: string;
  deliverables: string[];
  creemCheckoutUrl: string; // Replace with your real Creem product checkout link
  features: string[];
}

export const PRODUCTS_CATALOG: ProductItem[] = [
  // --- DIGITAL PRODUCTS (INSTANT DOWNLOADS) ---
  {
    id: "ui-icon-pack",
    name: "UI Icon & Vector Asset Pack",
    type: "digital_product",
    price: 12,
    badge: "Instant Download",
    shortDescription: "300+ hand-crafted SVG and vector UI icons organized for modern developer workflows.",
    longDescription: "A comprehensive developer and designer icon library containing 300+ customizable vector glyphs in SVG, PNG, and ready-to-import Figma components.",
    deliverySLA: "Instant Download Link via Email",
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
    id: "notion-launch-os",
    name: "Productivity & Launch OS Template",
    type: "digital_product",
    price: 23,
    badge: "Best Seller",
    shortDescription: "Complete Notion operating system for managing product roadmaps, sprints, and launches.",
    longDescription: "Structured Notion workspace with sprint boards, milestone tracking, automated release checklists, and client onboarding templates.",
    deliverySLA: "Instant One-Click Duplicate Link",
    deliverables: ["Notion OS Duplicate URL", "Quickstart Implementation Guide (PDF)", "Video Walkthrough"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-23",
    features: [
      "Agile sprint planner & backlog",
      "Pre-configured client portal views",
      "Automated task progress calculations",
      "Works on free personal Notion accounts"
    ]
  },
  {
    id: "figma-design-system",
    name: "Figma Component Design System",
    type: "digital_product",
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
    type: "digital_product",
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
    type: "digital_product",
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
    type: "digital_product",
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
      "Security audited against OWASP Top 10"
    ]
  },
  {
    id: "all-in-one-bundle",
    name: "All-in-One Design + Code Suite",
    type: "digital_product",
    price: 88,
    badge: "Best Value Bundle",
    shortDescription: "The complete bundle: Figma Design System, Next.js Templates, and Icon Library combined.",
    longDescription: "Everything you need to conceptualize, design, and ship web applications. Includes the full Figma design system, the multi-page template, and the icon bundle.",
    deliverySLA: "Instant Master Archive Download",
    deliverables: ["Complete Master ZIP (All Code + Design Files)", "Figma Master File", "VIP Discord / Email Support"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-88",
    features: [
      "Includes $160+ worth of standalone assets",
      "Synchronized design tokens matching code classes",
      "Unlimited project commercial license",
      "Free future updates included forever"
    ]
  },

  // --- DIGITAL SERVICES (FIXED SCOPE & TURNAROUND SLA) ---
  {
    id: "speed-seo-audit",
    name: "Website Speed & SEO Technical Audit",
    type: "digital_service",
    price: 98,
    badge: "Service (24-48h SLA)",
    shortDescription: "In-depth technical report analyzing Core Web Vitals, bottlenecks, and on-page SEO errors.",
    longDescription: "A personalized manual review of your website performance. We identify server bottlenecks, render-blocking scripts, unoptimized assets, and technical search indexing issues.",
    deliverySLA: "24–48 Business Hours Delivery",
    deliverables: ["10-15 Page Comprehensive Audit PDF", "Prioritized Action Checklist", "Lighthouse & Network Waterfall Breakdown"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-98",
    features: [
      "Manual human analysis (no generic automated exports)",
      "Actionable code snippets for performance fixes",
      "Core Web Vitals remediation guide",
      "Direct follow-up email support for clarifying questions"
    ]
  },
  {
    id: "code-security-review",
    name: "Code Architecture & Security Review",
    type: "digital_service",
    price: 116,
    badge: "Service (48h SLA)",
    shortDescription: "Senior engineer review of your repository for security flaws, dependency risks, and refactoring.",
    longDescription: "A confidential review of up to 10,000 lines of code. We inspect dependency vulnerabilities, secret leakage, authentication pitfalls, and architectural bottlenecks.",
    deliverySLA: "48 Business Hours Delivery",
    deliverables: ["Executive Security & Architecture Summary", "Line-by-line GitHub PR / Code Annotations", "Dependency Health Matrix"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-116",
    features: [
      "Strict confidentiality (NDA compliant)",
      "Focus on auth, data validation & API security",
      "Actionable refactoring recommendations",
      "Delivered as structured PDF and annotated pull request"
    ]
  },
  {
    id: "turnkey-template-setup",
    name: "Turnkey Template Setup & Deployment",
    type: "digital_service",
    price: 142,
    badge: "Hands-On Service",
    shortDescription: "We configure, brand, and deploy your chosen web template directly to Vercel with custom domain DNS.",
    longDescription: "Skip the technical configuration. Our engineers will clone the template to your GitHub account, configure your environment variables, connect your custom domain DNS, and verify production deployment.",
    deliverySLA: "48–72 Business Hours Delivery",
    deliverables: ["Configured & Deployed Production URL", "Connected Custom Domain DNS", "Handoff Walkthrough Video"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-142",
    features: [
      "Full GitHub and Vercel setup handled end-to-end",
      "SSL certificate configuration & DNS verification",
      "Environment variable & analytics integration",
      "Personalized 5-minute video handoff"
    ]
  },
  {
    id: "complete-launch-package",
    name: "Complete Launch & Customization Package",
    type: "digital_service",
    price: 229,
    badge: "Flagship Service",
    shortDescription: "Full custom styling, copy integration, domain deployment, and post-launch technical verification.",
    longDescription: "Our flagship hands-on implementation service. Includes template setup, custom branding (logo, colors, typography), copy placement, contact form wiring, SEO setup, and live deployment on Vercel.",
    deliverySLA: "72 Business Hours Delivery",
    deliverables: ["Fully Branded Production Web Application", "Domain & Analytics Setup", "14-Day Post-Launch Bugfix Guarantee", "Dedicated Support Channel"],
    creemCheckoutUrl: "https://creem.io/checkout/placeholder-229",
    features: [
      "Complete custom visual theme applied to template",
      "Up to 5 pages populated with your provided content",
      "Contact forms & webhook notifications wired up",
      "Includes 14 days of dedicated post-launch support"
    ]
  }
];
