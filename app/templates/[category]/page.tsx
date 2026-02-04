import { notFound } from "next/navigation"
import { templates, getTemplateCategory } from "@/config/templates"
import { RegistryLayout } from "@/components/registry-layout"
import RegistryItemCard from "@/components/registry-item-card"
import { ConstructionIcon } from "lucide-react"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ category: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getTemplateCategory((await params).category)
  if (!category) return {}
  return {
    title: `${category.name} Templates - Origin UI`,
    description: `Complete ${category.name.toLowerCase()} templates built with React and Tailwind CSS.`,
  }
}

export async function generateStaticParams() {
  return templates.map((template) => ({
    category: template.slug,
  }))
}

export default async function Page({ params }: Props) {
  const categorySlug = (await params).category
  const category = getTemplateCategory(categorySlug)

  if (!category) {
    notFound()
  }

  return (
    <RegistryLayout
      categories={templates}
      currentCategorySlug={categorySlug}
      basePath="/templates"
      sidebarTitle="Template Categories"
    >
      <div className="mb-10 flex flex-col gap-3">
        <h1 className="text-4xl font-bold tracking-tight">
          {category.name}
        </h1>
        <p className="text-muted-foreground text-lg">
          {category.templates.length}{" "}
          {category.templates.length === 1
            ? "beautifully crafted template"
            : "beautifully crafted templates"}{" "}
          available.
        </p>
      </div>

      {category.templates.length > 0 ? (
        <div className="space-y-12">
          {category.templates.map((template) => (
            <RegistryItemCard 
              key={template.slug} 
              item={template} 
              basePath={`/templates/${category.slug}`} 
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
            We're currently crafting beautiful {category.name.toLowerCase()} templates. 
            Check back soon for new updates!
          </p>
        </div>
      )}
    </RegistryLayout>
  )
}