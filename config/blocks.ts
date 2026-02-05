export interface BlockItem {
  slug: string
  name: string
  description?: string
  previewUrl?: string
  repoUrl?: string
  cmd?: string
  isPaid?: boolean
  price?: number
  isPrivate?: boolean
  registryName?: string // if it exists in registry.json
}

export interface BlockCategory {
  slug: string
  name: string
  blocks: BlockItem[]
  isNew?: boolean
}

export const blocks: BlockCategory[] = [
  {
    slug: "header",
    name: "Header",
    blocks: [
      {
        slug: "simple-header",
        name: "Simple Header",
        description: "A clean and minimalist header for any website.",
        registryName: "header-01",
        isPaid: false,
      },
      {
        slug: "sticky-header",
        name: "Sticky Header",
        description:
          "Header that stays at the top of the page while scrolling.",
        previewUrl: "https://originui.com",
        repoUrl: "https://github.com/origin-space/originui",
        isPaid: true,
        price: 9,
      },
    ],
  },
  {
    slug: "hero",
    name: "Hero",
    blocks: [
      {
        slug: "centered-hero",
        name: "Centered Hero",
        description: "A centered hero section with a call to action.",
        previewUrl: "https://originui.com",
        repoUrl: "https://github.com/origin-space/originui",
        isPaid: false,
      },
    ],
  },
  {
    slug: "footer",
    name: "Footer",
    blocks: [],
  },
  {
    slug: "about-section",
    name: "About Section",
    blocks: [],
  },
  {
    slug: "feature",
    name: "Feature",
    blocks: [],
  },
  {
    slug: "contact",
    name: "Contact",
    blocks: [],
  },
  {
    slug: "pricing",
    name: "Pricing",
    blocks: [
      {
        slug: "premium-pricing",
        name: "Premium Pricing",
        description: "Multi-plan pricing section with payment integration.",
        registryName: "pricing-section",
        isPaid: false,
      },
    ],
  },
]

export function getBlockCategory(slug: string): BlockCategory | undefined {
  return blocks.find((block) => block.slug === slug)
}

export function getBlockItem(
  categorySlug: string,
  itemSlug: string
): BlockItem | undefined {
  const category = getBlockCategory(categorySlug)
  return category?.blocks.find((item) => item.slug === itemSlug)
}
