import type { Metadata } from "next"

import { blocks } from "@/config/blocks"
import { BlockCategoryContent } from "@/components/block-category-content"

export const metadata: Metadata = {
  title: "Blocks - Woilasoft UI",
  description: "Beautiful and functional sections for your website.",
}

export default function BlocksPage() {
  return <BlockCategoryContent categorySlug={blocks[0].slug} />
}
