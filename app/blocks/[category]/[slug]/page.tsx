import { notFound } from "next/navigation"
import { blocks, getBlockItem } from "@/config/blocks"
import PageHeader from "@/components/page-header"
import { Section } from "@/components/section"
import CodeViewer from "@/components/code-viewer"
import Cta from "@/components/cta"

type Props = {
  params: Promise<{ category: string; slug: string }>
}

export async function generateStaticParams() {
  const params: { category: string; slug: string }[] = []
  
  blocks.forEach((category) => {
    category.blocks.forEach((block) => {
      params.push({
        category: category.slug,
        slug: block.slug,
      })
    })
  })

  return params
}

export default async function Page({ params }: Props) {
  const { category: categorySlug, slug } = await params
  const item = getBlockItem(categorySlug, slug)

  if (!item) {
    notFound()
  }

  return (
    <>
      <PageHeader title={item.name}>
        {item.description || `A beautiful and functional block for your ${item.name.toLowerCase()} section.`}
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
