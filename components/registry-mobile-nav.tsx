"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

interface Category {
  slug: string
  name: string
  isNew?: boolean
}

interface RegistryMobileNavProps {
  categories: Category[]
  currentCategorySlug: string
  basePath: string
}

export function RegistryMobileNav({
  categories,
  currentCategorySlug,
  basePath,
}: RegistryMobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  // Close when category changes
  React.useEffect(() => {
    setIsOpen(false)
  }, [currentCategorySlug])

  const currentCategory = categories.find((c) => c.slug === currentCategorySlug)

  return (
    <div className="mb-4 lg:hidden">
      <Button
        variant="outline"
        className="w-full justify-between"
        onClick={() => setIsOpen(true)}
      >
        <span className="font-medium">
          Current: {currentCategory?.name || "Select Category"}
        </span>
        <Menu className="ml-2 h-4 w-4" />
      </Button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          className="bg-background/80 fixed inset-0 z-50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer Content */}
      <div
        className={cn(
          "bg-background fixed inset-y-0 left-0 z-50 h-full w-[300px] border-r p-4 shadow-lg transition-transform duration-300 ease-in-out sm:max-w-sm",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Categories</h2>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <nav className="flex h-[calc(100vh-100px)] flex-col gap-1 overflow-y-auto pr-2">
          {categories.map((c) => {
            let href = ""
            if (basePath.includes("?")) {
              const [path, query] = basePath.split("?")
              const params = new URLSearchParams(query)
              params.set("category", c.slug)
              href = `${path}?${params.toString()}`
            } else {
              href = `${basePath}/${c.slug}`
            }

            return (
              <Link
                key={c.slug}
                href={href}
                className={cn(
                  "hover:bg-muted group flex items-center justify-between rounded-md px-3 py-2.5 text-sm transition-all",
                  c.slug === currentCategorySlug
                    ? "bg-primary/10 text-primary font-semibold"
                    : "text-muted-foreground"
                )}
              >
                <span className="truncate">{c.name}</span>
                {c.isNew && (
                  <span className="ml-2 rounded-[4px] bg-amber-500 px-1.5 py-0.5 text-[10px] leading-none font-bold tracking-wider text-white uppercase">
                    New
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
