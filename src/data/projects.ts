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
  category: 'fullstack' | 'ml' | 'frontend' | 'backend' | 'game' | 'mobile';
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  deepDiveContent?: DeepDiveContent;
  date: string; // New field for timeline grouping
}

export const projects: Project[] = [
  // CURRENT (Early 2026)
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
    date: "Current",
    deepDiveContent: {
      problemStatement: "Distributed caching often introduces complexity and consistency issues. This project aimed to build a high-performance, consistent-hashing based cache from first principles in C++.",
      architectureDiagramUrl: "/images/case-studies/distcache-1.png",
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
    id: 9,
    slug: "bounce-arena",
    title: "Bounce Arena",
    description: "A mobile auto-battler ball game built with JavaScript and Capacitor for cross-platform deployment. Features physics-based combat, weapon systems, and native iOS/Android builds via Vite's build pipeline.",
    technologies: ["JavaScript", "Capacitor", "Vite", "CSS", "Swift", "Java"],
    category: "game",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop", 
    githubUrl: "https://github.com/dSpringOnion/bounceArena",
    featured: true,
    date: "Current",
    deepDiveContent: {
      problemStatement: "Building a cross-platform mobile game without a heavyweight engine like Unity or Unreal. The goal was to create an engaging auto-battler experience using web technologies and Capacitor to bridge to native iOS and Android platforms.",
      architectureDiagramUrl: "/images/case-studies/bounce-arena-1.png",
      challengesOvercome: [
        "Implementing smooth physics-based ball combat with vanilla JavaScript.",
        "Bridging web gameplay to native mobile via Capacitor for iOS and Android.",
        "Designing a weapon and asset pipeline with custom processing scripts."
      ],
      outcomeMetrics: [
        "Cross-platform iOS & Android",
        "Lightweight web-native engine",
        "In active development"
      ]
    }
  },
  {
    id: 10,
    slug: "did-you-turn-off-your-stove",
    title: "Did You Turn Off Your Stove?",
    description: "A cross-platform mobile app helping users with OCD or anxiety verify daily safety checks. Features stove status tracking, timestamped photo verification, multi-appliance support, and Supabase-powered authentication.",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "Expo Router"],
    category: "mobile",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/didyouturnoffyourstove-",
    featured: true,
    date: "Current",
    deepDiveContent: {
      problemStatement: "People with OCD or general anxiety often experience intrusive doubts about whether they turned off appliances before leaving home. Existing reminder apps don't address this specific need — there's no way to capture visual proof and associate it with a specific appliance check.",
      architectureDiagramUrl: "/images/case-studies/stove-app-1.png",
      challengesOvercome: [
        "Designing a camera-based verification flow that stores timestamped photos linked to specific appliances.",
        "Implementing Supabase Auth with Expo Router for seamless cross-platform authentication.",
        "Architecting multi-appliance support with a PostgreSQL schema that scales per-user."
      ],
      outcomeMetrics: [
        "Cross-platform iOS & Android",
        "Supabase-powered backend",
        "In active development"
      ]
    }
  },

  // Dec 2025
  {
    id: 11,
    slug: "dsa-advent-calendar",
    title: "DSA Advent Calendar",
    description: "A 25-day FAANG interview prep platform with interactive algorithm visualizations, Python solutions, and step-by-step tutorials. Covers arrays to advanced DP, built with Next.js 14 and Framer Motion animations, containerized with Docker.",
    technologies: ["Next.js 14", "TypeScript", "Framer Motion", "Tailwind CSS", "Docker", "Python"],
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/dsaadvent",
    featured: true,
    date: "Dec 2025",
    deepDiveContent: {
      problemStatement: "LeetCode-style platforms are great for practice but lack guided progression and visual explanations. This project creates an advent calendar-style learning path from fundamentals (arrays, strings) through advanced topics (DP, backtracking, Union-Find) with interactive visualizations for each algorithm.",
      architectureDiagramUrl: "/images/case-studies/dsa-advent-1.png",
      challengesOvercome: [
        "Building interactive algorithm visualizations with Framer Motion for data structures like trees, graphs, and arrays.",
        "Importing Python solution files as static assets via webpack raw-loader for syntax-highlighted display.",
        "Structuring 25 interconnected projects with shared components while keeping each day self-contained."
      ],
      outcomeMetrics: [
        "25 DSA topics covered",
        "Interactive visualizations per day",
        "Dockerized local deployment"
      ]
    }
  },

  // Late Summer 2025
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
    date: "Late Summer 2025",
    deepDiveContent: {
      problemStatement: "The lottery is random, but humans love finding patterns. This project serves as an educational tool to demonstrate statistical analysis and pattern recognition techniques on large datasets.",
      architectureDiagramUrl: "/images/case-studies/powerball-1.png",
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

  // Mid 2025
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
    date: "Mid 2025",
    deepDiveContent: {
      problemStatement: "Setting up a production-ready e-commerce store is time-consuming and repetitive. Developers need a solid foundation that handles content, payments, and admin functions out of the box.",
      architectureDiagramUrl: "/images/case-studies/ecommerce-1.png",
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
    id: 8,
    slug: "expense-tracker",
    title: "Expense Tracker",
    description: "Full-stack multi-tenant expense tracking application with organization-based user management, JWT authentication, real-time analytics, and comprehensive budget management. Features recurring expenses automation and role-based access control.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth.js", "Tailwind CSS", "Radix UI"],
    category: "fullstack",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/expensetracker",
    featured: true,
    date: "Mid 2025",
    deepDiveContent: {
      problemStatement: "Organizations struggle to track shared expenses and manage budgets across multiple teams. Existing solutions are either too simple (personal finance) or too complex (enterprise ERPs).",
      architectureDiagramUrl: "/images/case-studies/expense-tracker-1.png",
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
    date: "Mid 2025",
    deepDiveContent: {
      problemStatement: "Most recipe sites are cluttered with ads and have poor search functionality. This project focused on a clean, user-centric experience with intelligent search and scaling.",
      architectureDiagramUrl: "/images/case-studies/recipe-blog-1.png",
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

  // Early 2025
  {
    id: 1,
    slug: "vision-based-vehicle-behavior-detector",
    title: "Vision-Based Vehicle Behavior Detector",
    description: "AI-powered system for detecting dangerous driving behaviors in real-time using YOLOv8 and computer vision. Features ML classification for safe/risky/dangerous behavior with modern React + TypeScript frontend.",
    technologies: ["Python", "Flask", "YOLOv8", "OpenCV", "React", "TypeScript", "Scikit-learn", "Tailwind CSS"],
    category: "ml",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/dSpringOnion/MLCBA",
    featured: true,
    date: "Early 2025",
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
    date: "Early 2025",
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
        "Deploying the Python ML model to a containerized Railway environment."
      ],
      outcomeMetrics: [
        "89.5% Test Accuracy",
        "<200ms Inference Latency",
        "Deployed to Railway"
      ]
    }
  }
];
