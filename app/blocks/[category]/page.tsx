import type { Metadata } from "next"

import { blocks, getBlockCategory } from "@/config/blocks"
import { BlockCategoryContent } from "@/components/block-category-content"

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getBlockCategory((await params).category)
  if (!category) return {}
  return {
    title: `${category.name} Blocks - Woilasoft UI`,
    description: `A collection of beautiful and functional ${category.name.toLowerCase()} blocks.`,
  }
}

export async function generateStaticParams() {
  return blocks.map((block) => ({
    category: block.slug,
  }))
}

export default async function Page({ params }: Props) {
  const categorySlug = (await params).category
  return <BlockCategoryContent categorySlug={categorySlug} />
}
