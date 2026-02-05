import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import { getAllTemplates } from "@/config/templates"
import Card from "./card"

export const metadata: Metadata = {
  title: "UI Layouts built with Tailwind CSS and React - Origin UI",
  description:
    "Beautiful UI layouts built with Tailwind CSS and React to help you get started with your next project.",
}

export default function Page() {
  const allTemplates = getAllTemplates().sort((a, b) => (b.id || 0) - (a.id || 0))

  return (
    <>
      <PageHeader title="Layouts &amp; Experiments">
        Beautifully designed open-source layouts and UI experiments built with
        Origin UI and shadcn/ui.
      </PageHeader>

      {/* Cards */}
      <div className="space-y-16">
        {allTemplates.map((template) => (
          <Card key={`${template.categorySlug}-${template.slug}`} card={{
            id: template.id || 0,
            title: template.name,
            demoUrl: template.previewUrl,
            repoUrl: template.repoUrl,
            cmd: template.cmd,
            imgHeight: template.imgHeight || 700,
            categorySlug: template.categorySlug,
            slug: template.slug,
          }} />
        ))}
      </div>
    </>
  )
}