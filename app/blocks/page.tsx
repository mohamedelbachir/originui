import { blocks } from "@/config/blocks"
import { BlockCategoryContent } from "@/components/block-category-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blocks - Origin UI",
  description: "Beautiful and functional sections for your website.",
}

export default function BlocksPage() {
  return <BlockCategoryContent categorySlug={blocks[0].slug} />
}