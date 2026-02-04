import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRightIcon,
  CheckIcon,
  LayoutGridIcon,
  LightbulbIcon,
  ListIcon,
  PlusIcon,
} from "lucide-react"

import { categories, getCategory } from "@/config/components"
import { cn, getComponentsByNames } from "@/lib/utils"
import ComponentCard from "@/components/component-card"
import ComponentDetails from "@/components/component-details"
import ComponentLoader from "@/components/component-loader-server"
import { Prose } from "@/components/prose"
import { Button } from "@/registry/default/ui/button"

import { MobileCategories } from "./mobile-categories"

import { RegistryLayout } from "@/components/registry-layout"

export const metadata: Metadata = {
  title: "Component Showcase - Woilasoft UI",
  description: "Browse all components in a showcase view.",
}

type Props = {
  params: Promise<any>
  searchParams: Promise<{ category?: string; view?: "grid" | "list" }>
}

export default async function ShowcasePage({ searchParams }: Props) {
  const sParams = await searchParams
  const categorySlug = sParams.category || categories[0].slug
  const view = sParams.view || "list"
  const category = getCategory(categorySlug)

  if (!category) {
    notFound()
  }

  const components = getComponentsByNames(
    category.components.map((item) => item.name)
  )

  const currentIndex = categories.findIndex((c) => c.slug === category.slug)
  const nextCategory = categories[(currentIndex + 1) % categories.length]

  return (
    <RegistryLayout
      categories={categories}
      currentCategorySlug={categorySlug}
      basePath={`/showcase?view=${view}`}
      sidebarTitle="Categories"
    >
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight">
              {category.name}
            </h1>
            {category.isNew && (
              <span className="rounded-md bg-amber-500 px-2 py-1 text-xs font-bold text-white uppercase">
                New Category
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-lg">
            {components.length}{" "}
            {components.length === 1
              ? "beautifully crafted component"
              : "beautifully crafted components"}{" "}
            available.
          </p>
        </div>

        <div className="flex items-center gap-1 rounded-lg border bg-background p-1 shadow-sm">
          <Button
            asChild
            variant={view === "list" ? "secondary" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Link
              href={`/showcase?category=${categorySlug}&view=list`}
              title="List View"
            >
              <ListIcon size={16} />
            </Link>
          </Button>
          <Button
            asChild
            variant={view === "grid" ? "secondary" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Link
              href={`/showcase?category=${categorySlug}&view=grid`}
              title="Grid View"
            >
              <LayoutGridIcon size={16} />
            </Link>
          </Button>
        </div>
      </div>

      <div
        className={cn(
          "flex-1",
          view === "grid"
            ? "grid grid-cols-1 gap-6 md:grid-cols-2"
            : "space-y-8"
        )}
      >
        {components.map((component) => (
          <div key={component.name} className="scroll-mt-24">
            <ComponentCard
              component={component}
              className="bg-background rounded-xs border shadow-sm transition-shadow"
            >
              <div
                className={cn(
                  "bg-grid-zinc-100/50 dark:bg-grid-zinc-900/50 w-full overflow-x-hidden",
                  view === "grid" ? "p-4 pt-8" : "p-4 pt-10 sm:p-10 sm:pt-12"
                )}
              >
                <ComponentLoader component={component} />
              </div>
              <ComponentDetails component={component} />
            </ComponentCard>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center border-t border-dashed py-6">
        <Button
          asChild
          size="lg"
          className="h-14 rounded-full px-10 text-lg shadow-xl transition-all hover:shadow-2xl"
        >
          <Link href={`/showcase?category=${nextCategory.slug}&view=${view}`}>
            Next Category: {nextCategory.name}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </RegistryLayout>
  )
}
