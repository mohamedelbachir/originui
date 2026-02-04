export interface TemplateItem {
  slug: string
  name: string
  description?: string
  previewUrl?: string // demoUrl
  repoUrl?: string
  cmd?: string
  isPaid?: boolean
  price?: number
  isPrivate?: boolean
  imgHeight?: number
  id?: number // for legacy support with layouts
}

export interface TemplateCategory {
  slug: string
  name: string
  templates: TemplateItem[]
  isNew?: boolean
}

export const templates: TemplateCategory[] = [
  {
    slug: "landingpage",
    name: "Landing Page",
    templates: [
      {
        slug: "schema-visualizer",
        name: "Schema Visualizer",
        previewUrl: "https://crafted.is/exp7",
        repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-07",
        cmd: "npx shadcn init https://ui-experiment-07.vercel.app/r/experiment-07.json",
        imgHeight: 700,
        id: 7,
        isPaid: false,
      },
      {
        slug: "event-calendar-template",
        name: "Event Calendar Template",
        previewUrl: "https://crafted.is/exp6",
        repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-06",
        cmd: "npx shadcn init https://ui-experiment-06.vercel.app/r/experiment-06.json",
        imgHeight: 688,
        id: 6,
        isPaid: true,
        price: 29,
      },
    ],
  },
  {
    slug: "dashboard",
    name: "Dashboard",
    templates: [
      {
        slug: "saas-dashboard",
        name: "SaaS Dashboard",
        previewUrl: "https://crafted.is/exp3",
        repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-03",
        cmd: "npx shadcn init https://ui-experiment-03.vercel.app/r/experiment-03.json",
        imgHeight: 829,
        id: 3,
        isPaid: false,
      },
      {
        slug: "crypto-wallet",
        name: "Crypto Wallet",
        previewUrl: "https://crafted.is/exp4",
        repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-04",
        cmd: "npx shadcn init https://ui-experiment-04.vercel.app/r/experiment-04.json",
        imgHeight: 894,
        id: 4,
        isPaid: false,
      },
    ],
  },
  {
    slug: "charts",
    name: "Charts & Visualizations",
    templates: [
      {
        slug: "candlestick-chart",
        name: "Candlestick Chart",
        previewUrl: "https://crafted.is/exp5",
        repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-05",
        cmd: "npx shadcn init https://ui-experiment-05.vercel.app/r/experiment-05.json",
        imgHeight: 770,
        id: 5,
        isPaid: false,
      },
    ],
  },
  {
    slug: "ai",
    name: "AI Applications",
    templates: [
      {
        slug: "ai-chat",
        name: "AI Chat",
        previewUrl: "https://crafted.is/exp2",
        repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-02",
        cmd: "npx shadcn init https://ui-experiment-02.vercel.app/r/experiment-02.json",
        imgHeight: 700,
        id: 2,
        isPaid: false,
      },
    ],
  },
  {
    slug: "tables",
    name: "Data Tables",
    templates: [
      {
        slug: "dark-table",
        name: "Dark Table",
        previewUrl: "https://crafted.is/exp1",
        repoUrl: "https://github.com/origin-space/ui-experiments/tree/main/apps/experiment-01",
        cmd: "npx shadcn init https://ui-experiments-green.vercel.app/r/experiment-01.json",
        imgHeight: 894,
        id: 1,
        isPaid: false,
      },
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    templates: [],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    templates: [],
  },
]

export function getTemplateCategory(slug: string): TemplateCategory | undefined {
  return templates.find((template) => template.slug === slug)
}

export function getTemplateItem(categorySlug: string, itemSlug: string): TemplateItem | undefined {
  const category = getTemplateCategory(categorySlug)
  return category?.templates.find((item) => item.slug === itemSlug)
}

export function getAllTemplates(): (TemplateItem & { categorySlug: string })[] {
  return templates.flatMap((category) => 
    category.templates.map((template) => ({
      ...template,
      categorySlug: category.slug,
    }))
  )
}