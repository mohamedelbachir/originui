import Link from "next/link"
import { ViewAnimation } from "@/providers/view-animation"

import { cn } from "@/lib/utils"

interface Category {
  slug: string
  name: string
  isNew?: boolean
}

interface RegistrySidebarProps {
  categories: Category[]
  currentCategorySlug: string
  basePath: string
  title?: string
}

export function RegistrySidebar({
  categories,
  currentCategorySlug,
  basePath,
  title = "Categories",
}: RegistrySidebarProps) {
  return (
    <div className="bg-background relative hidden lg:col-span-1 lg:block">
      <div className="sticky top-[64px] flex h-[calc(100vh-64px)] flex-col gap-4 p-6">
        <div className="mb-2 flex items-center justify-between text-lg font-semibold">
          <span>{title}</span>
          <span className="text-muted-foreground bg-muted rounded-full px-2 py-0.5 text-xs font-normal">
            {categories.length}
          </span>
        </div>
        <nav className="custom-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto pr-2">
          {categories.map((c, index) => {
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
              <ViewAnimation
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                delay={index * 0.1}
                key={index}
              >
                <Link
                  key={c.slug}
                  href={href}
                  className={cn(
                    "hover:bg-muted group flex items-center justify-between rounded-md px-3 py-2.5 text-sm transition-all",
                    c.slug === currentCategorySlug
                      ? "bg-primary/10 text-primary font-semibold shadow-sm"
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
              </ViewAnimation>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
