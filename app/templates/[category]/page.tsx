import { templates, getTemplateCategory } from "@/config/templates"
import { TemplateCategoryContent } from "@/components/template-category-content"
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
  return <TemplateCategoryContent categorySlug={categorySlug} />
}
