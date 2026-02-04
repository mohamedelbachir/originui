import { notFound } from "next/navigation"
import { blocks, getBlockCategory } from "@/config/blocks"
import { RegistryLayout } from "@/components/registry-layout"
import RegistryItemCard from "@/components/registry-item-card"
import { ConstructionIcon } from "lucide-react"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getBlockCategory((await params).category)
  if (!category) return {}
  return {
    title: `${category.name} Blocks - Origin UI`,
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
  const category = getBlockCategory(categorySlug)

  if (!category) {
    notFound()
  }

  return (
    <RegistryLayout
      categories={blocks}
      currentCategorySlug={categorySlug}
      basePath="/blocks"
      sidebarTitle="Block Categories"
    >
      <div className="mb-10 flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tight">
          {category.name}
        </h1>
        <p className="text-muted-foreground text-lg">
          {category.blocks.length}{" "}
          {category.blocks.length === 1
            ? "beautifully crafted block"
            : "beautifully crafted blocks"}{" "}
          available.
        </p>
      </div>

      {category.blocks.length > 0 ? (
        <div className="space-y-12">
          {category.blocks.map((block) => (
            <RegistryItemCard 
              key={block.slug} 
              item={block} 
              basePath={`/blocks/${category.slug}`} 
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 text-center my-12">
          <div className="mb-4 rounded-full bg-muted p-6">
            <ConstructionIcon size={48} className="text-muted-foreground opacity-50" />
          </div>
          <h2 className="text-2xl font-bold">Coming Soon</h2>
          <p className="text-muted-foreground mt-2 max-w-sm">
            We're currently crafting beautiful {category.name.toLowerCase()} blocks. 
            Check back soon for new updates!
          </p>
        </div>
      )}
    </RegistryLayout>
  )
}