export const profile = {
  name: "Kamran Ahmed",
  roles: [".NET Full-Stack Developer", "MERN Stack Developer", "Backend & API Engineer"],
  location: "Islamabad, Pakistan",
  phone: "0325-5128837",
  email: "kamranahmed0923@gmail.com",
  linkedin: "https://www.linkedin.com/in/kamran-ahmed-307896328/",
  bio: "I build full-stack applications end to end — from normalized SQL Server schemas and clean-architecture ASP.NET Core APIs, to React front-ends and MERN-based products. Comfortable moving between C# and JavaScript, I care about code that's secure, testable, and easy for the next developer to read.",
};

export const stacks = {
  dotnet: {
    label: ".NET Stack",
    groups: [
      { title: "Backend", items: ["C#", "ASP.NET Core Web API", "Entity Framework Core (Code-First)", "LINQ & IQueryable", "RESTful API Design", "Middleware Pipeline", "Dependency Injection"] },
      { title: "Architecture", items: ["Clean Architecture (Domain/Application/Infrastructure/API)", "Layered Architecture", "Repository & Service Pattern", "DTO Pattern"] },
      { title: "Frontend", items: ["React.js (Hooks, Vite, React Router)", "TypeScript", "JavaScript (ES6+)", "Bootstrap", "Axios"] },
      { title: "Database", items: ["SQL Server", "EF Core Migrations & Fluent API", "MongoDB"] },
      { title: "Security", items: ["JWT Authentication", "BCrypt Password Hashing", "Claims-Based Authorization", "IDOR Prevention", "File-Upload Security"] },
      { title: "Tools & Libraries", items: ["Visual Studio", "Git/GitHub", "Postman", "Swagger / Swashbuckle", "AutoMapper", "Framer Motion"] },
    ],
  },
  mern: {
    label: "MERN Stack",
    groups: [
      { title: "Frontend", items: ["React.js", "TypeScript", "JavaScript", "HTML & CSS", "Bootstrap"] },
      { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Middleware"] },
      { title: "Database", items: ["MongoDB"] },
      { title: "Tools & Libraries", items: ["Git/GitHub", "Postman", "VS Code", "Framer Motion", "Lucide Icons", "EmailJS", "SMTP Email"] },
    ],
  },
};

export const lookingForward = ["DevOps", "Cloud (Azure, AWS)", "Docker", "Vector Search / RAG Pipelines", "Next.js"];

export const projects = [
  {
    title: "AI-Powered Knowledge Base API",
    subtitle: "RAG Document Platform",
    stack: ["ASP.NET Core 9", "EF Core", "React 18 + Vite", "SQL Server"],
    description:
      "A full-stack RAG platform where users upload documents and query them in natural language. Built with Clean Architecture across Domain, Application, Infrastructure and API layers, JWT + BCrypt auth with claims-based authorization, row-level access control against IDOR, and a GUID-based file upload pipeline with MIME-type validation.",
    tags: ["Clean Architecture", "JWT & IDOR Defense", "RAG Roadmap"],
    live: null,
    featured: true,
  },
  {
    title: "Expense Management System",
    subtitle: "Full-Stack CRUD Application",
    stack: ["ASP.NET Core Web API", "EF Core", "SQL Server", "React"],
    description:
      "A layered Controller → Service → DTO backend with centralized exception-handling middleware, soft-delete and audit tracking via a shared base entity, and server-side filtering/sorting/pagination using deferred IQueryable execution. AutoMapper handles entity-to-DTO projection; the React front-end adds debounced search and paginated tables.",
    tags: ["AutoMapper", "Server-Side Pagination", "Swagger Documented"],
    live: null,
    featured: true,
  },
  {
    title: "Horain's Collection",
    subtitle: "E-Commerce Storefront",
    stack: ["React.js", "Framer Motion", "EmailJS"],
    description: "A responsive storefront with animated product interactions and an EmailJS-powered order flow — the main frontend showcase of the MERN side of my work.",
    tags: ["Animation", "E-Commerce"],
    live: "https://ecommerce-site-tawny-mu.vercel.app/",
    featured: true,
  },
  {
    title: "School SaaS Platform",
    subtitle: "In Progress",
    stack: ["React", "Node.js", "MongoDB"],
    description: "A multi-tenant school management product currently in active development — evolving from the standalone school website below into a reusable SaaS platform.",
    tags: ["In Progress", "Multi-Tenant"],
    live: "https://school-saas-platform-three.vercel.app/",
    featured: true,
  },
  {
    title: "Allama Iqbal School Website",
    subtitle: "AI-assisted build",
    stack: ["Node.js", "Express.js", "MongoDB", "SMTP"],
    description: "A full-stack school website with MongoDB-backed content and SMTP-driven contact notifications.",
    tags: ["MongoDB", "SMTP"],
    live: "https://vercel-frontend-topaz-omega.vercel.app/",
  },
  {
    title: "Currency Converter",
    subtitle: "React + Custom Hooks",
    stack: ["React.js", "Custom Hooks", "Currency API"],
    description: "A live currency-conversion app built around reusable custom hooks and a real-time exchange-rate API.",
    tags: ["Custom Hooks", "Live API"],
    live: "https://currency-converter-react-lime.vercel.app/",
  },
  {
    title: "Weather App",
    subtitle: "JavaScript + Weather API",
    stack: ["JavaScript", "Weather API", "DOM Manipulation"],
    description: "A real-time weather app with live API integration, async JS, and dynamic UI updates.",
    tags: ["Async JS", "Live API"],
    live: "https://js-projects-roan-gamma.vercel.app/",
  },
  {
    title: "Authentication System",
    subtitle: "Node.js + Express + JWT",
    stack: ["Node.js", "Express.js", "JWT"],
    description: "A standalone backend auth system with JWT issuance, custom middleware, and protected routes.",
    tags: ["JWT", "Middleware"],
    live: null,
  },
];

export const education = {
  school: "Bahria University Islamabad",
  degree: "BS Computer Science",
  period: "2024 — Present",
  detail: "CGPA 3.6 / 4.00",
};

export const certifications = [
  "IELTS — 6.5 Bands",
  "Presentation & Communication Certificate",
  "MS Office Certificate",
  "German Language (A1–B1)",
];
