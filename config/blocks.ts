export interface ComponentCategory {
  slug: string
  name: string
  components: { name: string; isPaid?: boolean }[]
  isNew?: boolean
}

export const blocks: ComponentCategory[] = []

export function getCategory(slug: string): ComponentCategory | undefined {
  return blocks.find((category) => category.slug === slug)
}
