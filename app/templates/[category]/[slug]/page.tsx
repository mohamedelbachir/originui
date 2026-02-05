import { notFound } from "next/navigation"

import { getTemplateItem, templates } from "@/config/templates"
import CodeViewer from "@/components/code-viewer"
import Cta from "@/components/cta"
import PageHeader from "@/components/page-header"
import { Section } from "@/components/section"

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = []

  templates.forEach((category) => {
    category.templates.forEach((template) => {
      params.push({
        category: category.slug,
        slug: template.slug,
      })
    })
  })

  return params
}

export default async function Page({ params }: Props) {
  const { category: categorySlug, slug } = await params
  const item = getTemplateItem(categorySlug, slug)

  if (!item) {
    notFound()
  }

  return (
    <>
      <PageHeader title={item.name}>
        {item.description ||
          `A beautiful and functional template for your ${item.name.toLowerCase()} projects.`}
      </PageHeader>

      <Section className="py-12">
        <div className="h-[600px] overflow-hidden rounded-xl border shadow-sm">
          <CodeViewer item={item} />
        </div>
      </Section>

      <div className="mt-12">
        <Cta />
      </div>
    </>
  )
}
