// Project data configuration file
// Used to manage data for the project display page

export interface Project {
  id: string
  title: string
  description: string
  image: string
  category: "web" | "mobile" | "desktop" | "other"
  techStack: string[]
  status: "completed" | "in-progress" | "planned"
  liveDemo?: string
  sourceCode?: string
  startDate: string
  endDate?: string
  featured?: boolean
  tags?: string[]
  visitUrl?: string // 添加前往项目链接字段
}

export const projectsData: Project[] = [
  {
    id: "delta-comic",
    title: "Delta Comic",
    description:
      "✨ Delta Comic — 一个以体验为先的多源漫画聚合客户端（Tauri/Android）。 📚 插件驱动 · 🔍 多站整合（Bika / PicaCG / JMComic / 18comic / e-hentai 等） · 🌓 现代化 UI · ⚡ 轻量、默认无广告体验 · 开源可扩展 🚀",
    image: "https://raw.githubusercontent.com/delta-comic/delta-comic/main/public/favicon.png",
    category: "mobile",
    techStack: ["Vue", "TypeScript", "Tailwind CSS", "Sqlite", "Vite"],
    status: "in-progress",
    sourceCode: "https://github.com/delta-comic/delta-comic", // 更改为GitHub链接
    visitUrl: "https://github.com/delta-comic/delta-comic", // 添加前往项目链接
    startDate: "2022-01-01",
    featured: true,
    tags: ["Comic", "R18", "Open Source"],
  }
]

// Get project statistics
export const getProjectStats = () => {
  const total = projectsData.length
  const completed = projectsData.filter(
    (p) => p.status === "completed",
  ).length
  const inProgress = projectsData.filter(
    (p) => p.status === "in-progress",
  ).length
  const planned = projectsData.filter((p) => p.status === "planned").length

  return {
    total,
    byStatus: {
      completed,
      inProgress,
      planned,
    },
  }
}

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
  if (!category || category === "all") {
    return projectsData
  }
  return projectsData.filter((p) => p.category === category)
}

// Get featured projects
export const getFeaturedProjects = () => {
  return projectsData.filter((p) => p.featured)
}

// Get all tech stacks
export const getAllTechStack = () => {
  const techSet = new Set<string>()
  projectsData.forEach((project) => {
    project.techStack.forEach((tech) => {
      techSet.add(tech)
    })
  })
  return Array.from(techSet).sort()
}
