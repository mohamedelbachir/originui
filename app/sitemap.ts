import type { MetadataRoute } from "next"

import { categories } from "@/config/components"

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: "https://ui.woilasoft.com",
  }
  const search = {
    url: "https://ui.woilasoft.com/search",
  }
  const easings = {
    url: "https://ui.woilasoft.com/easings",
  }
  const categoryPages = categories.map((category) => ({
    url: `https://ui.woilasoft.com/${category.slug}`,
  }))

  return [home, ...categoryPages, search, easings]
}
