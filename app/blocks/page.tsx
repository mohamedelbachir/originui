import { blocks } from "@/config/blocks"
import { RedirectToFirstCategory } from "@/components/redirect-to-first-category"

export default function BlocksPage() {
  return <RedirectToFirstCategory basePath="/blocks" firstCategorySlug={blocks[0].slug} />
}
