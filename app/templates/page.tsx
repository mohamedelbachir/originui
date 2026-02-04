import { templates } from "@/config/templates"
import { RedirectToFirstCategory } from "@/components/redirect-to-first-category"

export default function TemplatesPage() {
  return <RedirectToFirstCategory basePath="/templates" firstCategorySlug={templates[0].slug} />
}
