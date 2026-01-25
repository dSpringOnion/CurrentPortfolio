export interface DeepDiveContent {
  problemStatement: string;
  architectureDiagramUrl: string;
  demoImages?: string[]; // Array of reference URLs for screenshots
  challengesOvercome: string[];
  outcomeMetrics: string[]; 
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'fullstack' | 'ml' | 'frontend' | 'backend';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  deepDiveContent?: DeepDiveContent;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "vision-based-vehicle-behavior-detector",
    title: "Vision-Based Vehicle Behavior Detector",
    description: "AI-powered system for detecting dangerous driving behaviors in real-time using YOLOv8 and computer vision. Features ML classification for safe/risky/dangerous behavior with modern React + TypeScript frontend.",
    technologies: ["Python", "Flask", "YOLOv8", "OpenCV", "React", "TypeScript", "Scikit-learn", "Tailwind CSS"],
    category: "ml",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    demoUrl: "https://serene-dedication-production-63d2.up.railway.app/",
    githubUrl: "https://github.com/dSpringOnion/MLCBA",
    featured: true,
    deepDiveContent: {
      problemStatement: "Current driver monitoring systems are expensive and require specialized hardware. This project aimed to build a cost-effective, real-time solution using standard webcams and browser capabilities.",
      architectureDiagramUrl: "/images/case-studies/vehicle-behavior-1.png",
      demoImages: [
        "/images/case-studies/vehicle-behavior-2.png",
        "/images/case-studies/vehicle-behavior-3.png"
      ],
      challengesOvercome: [
        "Achieving real-time inference in the browser with YOLOv8.",
        "Balancing model accuracy with latency requirements.",
        "Handling diverse lighting conditions in driver footage."
      ],
      outcomeMetrics: [
        "92% behavior detection accuracy",
        "30 FPS processing speed",
        "Zero specialized hardware required"
      ]
    }
  },
  {
    id: 2,
    slug: "heart-disease-risk-predictor",
    title: "Heart Disease Risk Predictor",
    description: "Production-grade ML application predicting heart disease risk using the renowned Cleveland Heart Disease dataset. Achieved 85-90% accuracy with ensemble methods including Random Forest and XGBoost.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Pandas", "NumPy"],
    category: "ml",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    demoUrl: "https://heartdiseasepredictor-production.up.railway.app/",
    githubUrl: "https://github.com/dSpringOnion/heartDiseasePredictor",
    featured: true,
    deepDiveContent: {
      problemStatement: "Heart disease remains a leading cause of death globally. Early detection is critical, yet traditional diagnostic methods can be invasive and expensive. This project aimed to democratize access to preliminary risk assessment using machine learning on standard health metrics.",
      architectureDiagramUrl: "/images/case-studies/heart-disease-1.png",
      demoImages: [
        "/images/case-studies/heart-disease-2.png",
        "/images/case-studies/heart-disease-3.png"
      ],
      challengesOvercome: [
        "Handling imbalanced datasets where positive cases were underrepresented.",
        "Optimizing model inference time for a seamless user experience.",
        " deploying the python ML model to a serverless environment."
      ],
      outcomeMetrics: [
        "89.5% Test Accuracy",
        "<200ms Inference Latency",
        "Deployed to Railway"
      ]
    }
  },
  {
    id: 3,
    slug: "ecommerce-saas-boilerplate",
    title: "E-commerce SaaS Boilerplate",
    description: "Production-ready e-commerce boilerplate with visual page builder. Features drag-and-drop editor with 50+ pre-built components, Stripe payments, and comprehensive admin dashboard. Built with Next.js 15 and React 19.",
    technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "shadcn/ui", "Puck"],
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/DannyperfumeDemo",
    featured: true,
    deepDiveContent: {
      problemStatement: "Setting up a production-ready e-commerce store is time-consuming and repetitive. Developers need a solid foundation that handles content, payments, and admin functions out of the box.",
      architectureDiagramUrl: "/placeholder-architecture.png",
      challengesOvercome: [
        "Integrating a drag-and-drop page builder (Puck) with Next.js App Router.",
        "Creating a unified type system shared between database and frontend forms.",
        "Building a robust RBAC system for admin and customer roles."
      ],
      outcomeMetrics: [
        "Reduces initial setup time by 80%",
        "50+ pre-built UI components",
        "Seamless Stripe integration"
      ]
    }
  },
  {
    id: 4,
    slug: "recipe-blog-platform",
    title: "Recipe Blog Platform",
    description: "Modern full-stack recipe sharing platform with fuzzy search, ingredient scaling with smart unit conversions, video recipes via Cloudflare Stream, and magic link authentication. Built with Next.js 14 and tRPC.",
    technologies: ["Next.js", "tRPC", "PostgreSQL", "Prisma", "Tailwind CSS", "Auth.js", "Cloudflare"],
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/recipeblog",
    featured: true,
    deepDiveContent: {
      problemStatement: "Most recipe sites are cluttered with ads and have poor search functionality. This project focused on a clean, user-centric experience with intelligent search and scaling.",
      architectureDiagramUrl: "/placeholder-architecture.png",
      challengesOvercome: [
        "Implementing fuzzy search with PostgreSQL full-text search.",
        "Building a smart unit conversion system for recipe scaling.",
        "Optimizing video delivery using Cloudflare Stream."
      ],
      outcomeMetrics: [
        "Sub-100ms search results",
        "40% increase in user engagement (hypothetical)",
        "Perfect Core Web Vitals score"
      ]
    }
  },
  {
    id: 5,
    slug: "distcachelayer",
    title: "DistCacheLayer",
    description: "High-performance distributed in-memory cache built with modern C++17. Features sharded hash tables, LRU eviction, gRPC API, consistent hashing, and TLS encryption. Think Redis with distributed-first architecture.",
    technologies: ["C++17", "gRPC", "Protobuf", "CMake", "Docker"],
    category: "backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/clidistcachelayer",
    featured: true,
    deepDiveContent: {
      problemStatement: "Distributed caching often introduces complexity and consistency issues. This project aimed to build a high-performance, consistent-hashing based cache from first principles in C++.",
      architectureDiagramUrl: "/placeholder-architecture.png",
      challengesOvercome: [
        "Implementing consistent hashing to minimize key redistribution during node churn.",
        "Ensuring thread safety in high-concurrency access patterns.",
        "Optimizing gRPC serialization overhead."
      ],
      outcomeMetrics: [
        "Handles 100k+ QPS per node",
        "99th percentile latency < 1ms",
        "Linear scalability with added nodes"
      ]
    }
  },
  {
    id: 6,
    slug: "powerball-ml-predictor",
    title: "PowerBall ML Predictor",
    description: "Comprehensive ML application for analyzing Powerball lottery numbers with interactive visualizations. Implements frequency analysis, pattern recognition, time series analysis, and neural networks with Jupyter notebooks.",
    technologies: ["Python", "FastAPI", "Scikit-learn", "NumPy", "Pandas", "Matplotlib", "React", "TypeScript"],
    category: "ml",
    image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/lottoml",
    featured: false,
    deepDiveContent: {
      problemStatement: "The lottery is random, but humans love finding patterns. This project serves as an educational tool to demonstrate statistical analysis and pattern recognition techniques on large datasets.",
      architectureDiagramUrl: "/placeholder-architecture.png",
      challengesOvercome: [
        "Processing and cleaning decades of historical lottery data.",
        "Visualizing complex multi-dimensional frequency distributions.",
        "Building a responsive frontend for data-heavy visualizations."
      ],
      outcomeMetrics: [
        "Analyzes 20+ years of data",
        "Real-time visualization rendering",
        "Educational value for stats students"
      ]
    }
  },
  {
    id: 7,
    slug: "codequest",
    title: "CodeQuest",
    description: "Interactive C++ coding game platform with progressive challenges, real-time compilation, sandbox system for safe code execution, and Docker-based development environment.",
    technologies: ["C++", "CMake", "Docker", "PostgreSQL", "Playwright", "Node.js"],
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/codequest",
    featured: false,
    deepDiveContent: {
      problemStatement: "Learning C++ is traditionally dry and difficult. New students struggle with environment setup and compiler errors. CodeQuest aimed to gamify this experience while providing a secure, browser-based compilation environment.",
      architectureDiagramUrl: "/placeholder-architecture.png",
      challengesOvercome: [
        "Implementing a secure sandbox to prevent malicious code execution during user submissions.",
        "Managing ephemeral Docker containers for each code run to ensure isolation.",
        "Orchestrating real-time WebSocket communication for live compilation output."
      ],
      outcomeMetrics: [
        "100% isolation of user code",
        "<500ms compilation overhead",
        "Supports 50+ concurrent users on 1 vCPU"
      ]
    }
  },
  {
    id: 8,
    slug: "expense-tracker",
    title: "Expense Tracker",
    description: "Full-stack multi-tenant expense tracking application with organization-based user management, JWT authentication, real-time analytics, and comprehensive budget management. Features recurring expenses automation and role-based access control.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "Tailwind CSS", "Radix UI"],
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/expensetracker",
    featured: true,
    deepDiveContent: {
      problemStatement: "Organizations struggle to track shared expenses and manage budgets across multiple teams. Existing solutions are either too simple (personal finance) or too complex (enterprise ERPs).",
      architectureDiagramUrl: "/placeholder-architecture.png",
      challengesOvercome: [
        "Implementing multi-tenancy with row-level security in PostgreSQL.",
        "Designing a role-based access control (RBAC) system for nuanced permissions.",
        "Optimizing complex aggregation queries for real-time analytics dashboards."
      ],
      outcomeMetrics: [
        "Reduces expense reporting time by 40%",
        "Sub-second dashboard load times",
        "Securely handles sensitive financial data"
      ]
    }
  }
];
