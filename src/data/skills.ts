// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
  id: string
  name: string
  description: string
  icon: string // Iconify icon name
  category: "frontend" | "backend" | "database" | "tools" | "other"
  level: "beginner" | "intermediate" | "advanced" | "expert"
  experience: {
    years: number
    months: number
  }
  projects?: string[] // Related project IDs
  certifications?: string[]
  color?: string // Skill card theme color
}

const thisYear = new Date().getFullYear()

export const skillsData: Skill[] = [
  // Frontend Skills
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "Modern JavaScript development, including ES6+ syntax, asynchronous programming, and modular development.",
    icon: "logos:javascript",
    category: "frontend",
    level: "advanced",
    experience: { years: thisYear - 2021, months: 6 },
    projects: [

    ],
    color: "#F7DF1E",
  },
  {
    id: "typescript",
    name: "TypeScript",
    description:
      "A type-safe superset of JavaScript that enhances code quality and development efficiency.",
    icon: "logos:typescript-icon",
    category: "frontend",
    level: "advanced",
    experience: { years: thisYear - 2022, months: 8 },
    projects: ["delta-comic", "delta-comic-core"],
    color: "#3178C6",
  },
  {
    id: "vue",
    name: "Vue.js",
    description:
      "A progressive JavaScript framework that is easy to learn and use, suitable for rapid development.",
    icon: "logos:vue",
    category: "frontend",
    level: "advanced",
    experience: { years: thisYear - 2022, months: 8 },
    projects: ["delta-comic"],
    color: "#4FC08D",
  },
  {
    id: "astro",
    name: "Astro",
    description:
      "A modern static site generator supporting multi-framework integration and excellent performance.",
    icon: "logos:astro-icon",
    category: "frontend",
    level: "beginner",
    experience: { years: 0, months: 1 },
    projects: ["wenxig"],
    color: "#FF5D01",
  },
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework for rapidly building modern user interfaces.",
    icon: "logos:tailwindcss-icon",
    category: "frontend",
    level: "advanced",
    experience: { years: thisYear - 2024, months: 0 },
    projects: ["delta-comic"],
    color: "#06B6D4",
  },
  {
    id: "sass",
    name: "Sass/SCSS",
    description:
      "A CSS preprocessor providing advanced features like variables, nesting, and mixins.",
    icon: "logos:sass",
    category: "frontend",
    level: "beginner",
    experience: { years: 0, months: 3 },
    projects: [],
    color: "#CF649A",
  },
  {
    id: "vite",
    name: "Vite",
    description:
      "Next-generation frontend build tool with fast cold starts and hot updates.",
    icon: "logos:vitejs",
    category: "frontend",
    level: "intermediate",
    experience: { years: thisYear - 2022, months: 2 },
    projects: [],
    color: "#646CFF",
  },

  // Backend Skills
  {
    id: "nodejs",
    name: "Node.js",
    description:
      "A JavaScript runtime based on Chrome V8 engine, used for server-side development.",
    icon: "logos:nodejs-icon",
    category: "backend",
    level: "intermediate",
    experience: { years: 1, months: 3 },
    projects: ["delta-comic"],
    color: "#339933",
  },
  {
    id: "rust",
    name: "Rust",
    description:
      "A systems programming language focusing on safety, speed, and concurrency, with no garbage collector.",
    icon: "logos:rust",
    category: "backend",
    level: "beginner",
    experience: { years: 0, months: 3 },
    projects: ["system-tool", "performance-critical-app"],
    color: "#CE422B",
  },

  // Database Skills
  {
    id: "sqlite",
    name: "SQLite",
    description:
      "A lightweight embedded relational database, suitable for mobile applications and small projects.",
    icon: "simple-icons:sqlite",
    category: "database",
    level: "beginner",
    experience: { years: 0, months: 3 },
    projects: ["delta-comic"],
    color: "#003B57",
  },

  // Tools
  {
    id: "git",
    name: "Git",
    description:
      "A distributed version control system, an essential tool for code management and team collaboration.",
    icon: "logos:git-icon",
    category: "tools",
    level: "intermediate",
    experience: { years: thisYear - 2023, months: 0 },
    color: "#F05032",
  },
  {
    id: "vscode",
    name: "VS Code",
    description:
      "A lightweight but powerful code editor with a rich plugin ecosystem.",
    icon: "logos:visual-studio-code",
    category: "tools",
    level: "intermediate",
    experience: { years: thisYear - 2021, months: 6 },
    color: "#007ACC",
  },
  {
    id: "docker",
    name: "Docker",
    description:
      "A containerization platform that simplifies application deployment and environment management.",
    icon: "logos:docker-icon",
    category: "tools",
    level: "beginner",
    experience: { years: 0, months: 1 },
    color: "#2496ED",
  },
]

// Get skill statistics
export const getSkillStats = () => {
  const total = skillsData.length
  const byLevel = {
    beginner: skillsData.filter((s) => s.level === "beginner").length,
    intermediate: skillsData.filter((s) => s.level === "intermediate")
      .length,
    advanced: skillsData.filter((s) => s.level === "advanced").length,
    expert: skillsData.filter((s) => s.level === "expert").length,
  }
  const byCategory = {
    frontend: skillsData.filter((s) => s.category === "frontend").length,
    backend: skillsData.filter((s) => s.category === "backend").length,
    database: skillsData.filter((s) => s.category === "database").length,
    tools: skillsData.filter((s) => s.category === "tools").length,
    other: skillsData.filter((s) => s.category === "other").length,
  }

  return { total, byLevel, byCategory }
}

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
  if (!category || category === "all") {
    return skillsData
  }
  return skillsData.filter((s) => s.category === category)
}

// Get advanced skills
export const getAdvancedSkills = () => {
  return skillsData.filter(
    (s) => s.level === "advanced" || s.level === "expert",
  )
}

// Calculate total years of experience
export const getTotalExperience = () => {
  const totalMonths = skillsData.reduce((total, skill) => {
    return total + skill.experience.years * 12 + skill.experience.months
  }, 0)
  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  }
}
