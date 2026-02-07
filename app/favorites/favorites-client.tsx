"use client"

import { useMemo } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  ArrowRightIcon,
  Heart,
  LayoutGridIcon,
  ListIcon,
  Loader2Icon,
} from "lucide-react"

//import { categories, getCategory } from "@/config/components"
import { cn, getComponentsByNames } from "@/lib/utils"
import { useFavorites } from "@/hooks/use-favorites"
import ComponentCard from "@/components/component-card"
import ComponentDetails from "@/components/component-details"
import ComponentLoader from "@/components/component-loader-server"
import { RegistryLayout } from "@/components/registry-layout"
import { Section } from "@/components/section"
import { Button } from "@/registry/default/ui/button"

export default function ShowcasePageClient() {
  const favorites = useFavorites()
  const searchParams = useSearchParams()

  const categories = favorites.getCategories()
  const categorySlug = searchParams.get("category") || categories[0]
  const view = (searchParams.get("view") as "grid" | "list") || "list"

  const components = useMemo(
    () => getComponentsByNames(favorites.favorites[categorySlug] || []),
    [favorites.favorites, categorySlug]
  )
  if (!favorites.isLoaded) {
    return (
      <div className="py-20 text-center">
        <Loader2Icon className="text-muted-foreground mx-auto mb-4 h-8 w-8 animate-spin opacity-20" />
        <p className="text-muted-foreground">Loading favorites...</p>
      </div>
    )
  }

  if (favorites.isFavoritesEmpty()) {
    return (
      <Section className="w-full">
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
          <div className="bg-muted border-border flex h-20 w-20 items-center justify-center rounded-full border">
            <Heart size={40} className="text-muted-foreground/50" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">
            No favorites yet
          </h2>
          <p className="text-muted-foreground max-w-sm">
            Browse the showcase or search for components to add them to your
            favorites list.
          </p>
          <Button asChild>
            <a href="/showcase">Browse Components</a>
          </Button>
        </div>
      </Section>
    )
  }

  if (!categorySlug) return null

  const currentIndex = categories.findIndex((c) => c === categorySlug)
  const nextCategory = categories[(currentIndex + 1) % categories.length]

  return (
    <RegistryLayout
      categories={categories.map((slug) => ({ slug, name: slug }))}
      currentCategorySlug={categorySlug}
      basePath={`/showcase?view=${view}`}
      sidebarTitle="Categories"
    >
      {/* Header */}

      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold">{categorySlug}</h1>
          <p className="text-muted-foreground text-lg">
            {components.length} components available
          </p>
        </div>

        <div className="flex gap-1 rounded-lg border p-1">
          <Button
            asChild
            size="sm"
            variant={view === "list" ? "secondary" : "ghost"}
          >
            <Link href={`/showcase?category=${categorySlug}&view=list`}>
              <ListIcon size={16} />
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            variant={view === "grid" ? "secondary" : "ghost"}
          >
            <Link href={`/showcase?category=${categorySlug}&view=grid`}>
              <LayoutGridIcon size={16} />
            </Link>
          </Button>
        </div>
      </div>

      {/* Components */}

      <div
        className={cn(
          "flex-1",
          view === "grid"
            ? "grid grid-cols-1 gap-6 md:grid-cols-2"
            : "space-y-8"
        )}
      >
        {components.map((component) => (
          <ComponentCard
            key={component.name}
            component={component}
            className="bg-background border shadow-sm"
          >
            <div className="p-4">
              <ComponentLoader component={component} />
            </div>

            <ComponentDetails
              component={component}
              categorie={categorySlug}
              favorites={favorites}
            />
          </ComponentCard>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-10 flex justify-center border-t py-6">
        <Button asChild size="lg">
          <Link href={`/showcase?category=${nextCategory}&view=${view}`}>
            Next Category: {nextCategory}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </RegistryLayout>
  )
}
