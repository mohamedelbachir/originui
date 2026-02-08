"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function RedirectToFirstCategory({
  basePath,
  firstCategorySlug,
}: {
  basePath: string
  firstCategorySlug: string
}) {
  const router = useRouter()

  useEffect(() => {
    router.replace(`${basePath}/${firstCategorySlug}`)
  }, [router, basePath, firstCategorySlug])

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="border-primary h-8 w-8 animate-spin rounded-full border-4 border-t-transparent" />
    </div>
  )
}
