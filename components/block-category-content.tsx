import { notFound } from "next/navigation"
import { ConstructionIcon } from "lucide-react"

import { blocks, getBlockCategory } from "@/config/blocks"
import { getComponentsByNames } from "@/lib/utils"
import ComponentCard from "@/components/component-card"
import ComponentDetails from "@/components/component-details"
import ComponentLoader from "@/components/component-loader-server"
import RegistryItemCard from "@/components/registry-item-card"
import { RegistryLayout } from "@/components/registry-layout"

export function BlockCategoryContent({
  categorySlug,
}: {
  categorySlug: string
}) {
  const category = getBlockCategory(categorySlug)

  if (!category) {
    notFound()
  }

  // Split blocks into registry-based and external
  const registryBlocks = category.blocks.filter((b) => b.registryName)
  const externalBlocks = category.blocks.filter((b) => !b.registryName)

  const components = getComponentsByNames(
    registryBlocks.map((item) => item.registryName!)
  )

  return (
    <RegistryLayout
      categories={blocks}
      currentCategorySlug={categorySlug}
      basePath="/blocks"
      sidebarTitle="Block Categories"
    >
      <div className="mb-10 flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
        <p className="text-muted-foreground text-lg">
          {category.blocks.length}{" "}
          {category.blocks.length === 1
            ? "beautifully crafted block"
            : "beautifully crafted blocks"}{" "}
          available.
        </p>
      </div>

      <div className="space-y-16">
        {/* Local Registry Blocks */}
        {components.length > 0 && (
          <div className="space-y-12">
            {components.map((component) => (
              <div key={component.name} className="scroll-mt-24">
                <ComponentCard
                  component={component}
                  className="bg-background rounded-xs border shadow-sm transition-shadow"
                >
                  <div className="bg-grid-zinc-100/50 dark:bg-grid-zinc-900/50 w-full overflow-x-hidden p-4 pt-10 sm:p-10 sm:pt-12">
                    <ComponentLoader component={component} />
                  </div>
                  <ComponentDetails component={component} />
                </ComponentCard>
              </div>
            ))}
          </div>
        )}

        {/* External Blocks */}
        {externalBlocks.length > 0 && (
          <div className="space-y-12">
            {externalBlocks.map((block) => (
              <RegistryItemCard
                key={block.slug}
                item={block}
                //basePath={`/blocks/${category.slug}`}
              />
            ))}
          </div>
        )}

        {category.blocks.length === 0 && (
          <div className="my-12 flex flex-1 flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 text-center">
            <div className="bg-muted mb-4 rounded-full p-6">
              <ConstructionIcon
                size={48}
                className="text-muted-foreground opacity-50"
              />
            </div>
            <h2 className="text-2xl font-bold">Coming Soon</h2>
            <p className="text-muted-foreground mt-2 max-w-sm">
              We&apos;re currently crafting beautiful{" "}
              {category.name.toLowerCase()} blocks. Check back soon for new
              updates!
            </p>
          </div>
        )}
      </div>
    </RegistryLayout>
  )
}
