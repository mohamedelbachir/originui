import type { MetadataRoute } from "next"

import { blocks } from "@/config/blocks"
import { categories } from "@/config/components"

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: "https://ui.woilasoft.com",
  }
  const easings = {
    url: "https://ui.woilasoft.com/easings",
  }
  const categoryPages = categories.map((category) => ({
    url: `https://ui.woilasoft.com/${category.slug}`,
  }))

  const blockcategoryPages = blocks.map((category) => ({
    url: `https://ui.woilasoft.com/blocks?categorie=${category.slug}`,
  }))

  return [home, ...categoryPages, ...blockcategoryPages, easings]
}
