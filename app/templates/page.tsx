import type { Metadata } from "next"

import { templates } from "@/config/templates"
import { TemplateCategoryContent } from "@/components/template-category-content"

export const metadata: Metadata = {
  title: "Templates - Woilasoft UI",
  description: "Complete page templates and dashboard layouts.",
}

export default function TemplatesPage() {
  return <TemplateCategoryContent categorySlug={templates[0].slug} />
}
