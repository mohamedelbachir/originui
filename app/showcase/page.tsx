import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowRightIcon,
  CheckIcon,
  LightbulbIcon,
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

export const metadata: Metadata = {
  title: "Component Showcase - Origin UI",
  description: "Browse all components in a showcase view.",
}

type Props = {
  searchParams: Promise<{ category?: string }>
}

const Cross = () => (
  <div className="relative h-6 w-6">
    <div className="bg-border absolute left-3 h-6 w-px" />
    <div className="bg-border absolute top-3 h-px w-6" />
    <PlusIcon
      size={20}
      className="text-muted-foreground/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  </div>
)

const WideSection = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <section className="w-full">
    <div className="relative mx-auto max-w-[1600px] px-0 sm:px-6">
      <div className={cn("border-border sm:border-x", className)}>
        {children}
      </div>
      {/* <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
        <Cross />
      </div>
      <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
        <Cross />
      </div> */}
    </div>
  </section>
)

export default async function ShowcasePage({ searchParams }: Props) {
  const categorySlug = (await searchParams).category || categories[0].slug
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
    <WideSection className="grid min-h-screen divide-y border-b lg:grid-cols-4 lg:divide-x lg:divide-y-0">
      {/* Left Column: Category List */}
      <div className="bg-background relative hidden lg:col-span-1 lg:block">
        <div className="sticky top-[64px] flex h-[calc(100vh-64px)] flex-col gap-4 p-6">
          <div className="mb-2 flex items-center justify-between text-lg font-semibold">
            <span>Categories</span>
            <span className="text-muted-foreground bg-muted rounded-full px-2 py-0.5 text-xs font-normal">
              {categories.length}
            </span>
          </div>
          <nav className="custom-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto pr-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/showcase?category=${c.slug}`}
                className={cn(
                  "hover:bg-muted group flex items-center justify-between rounded-md px-3 py-2.5 text-sm transition-all",
                  c.slug === categorySlug
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
            ))}
          </nav>
        </div>
      </div>

      {/* Middle Column: Component Display */}
      <div className="bg-muted/30 relative min-h-screen lg:col-span-2">
        <div className="flex h-full flex-col p-4 lg:p-8">
          <MobileCategories />

          <div className="mb-10 flex flex-col gap-3">
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

          <div className="flex-1 space-y-8">
            {components.map((component) => (
              <div key={component.name} className="scroll-mt-24">
                <ComponentCard
                  component={component}
                  className="bg-background rounded-xs border shadow-sm transition-shadow"
                >
                  <div className="bg-grid-zinc-100/50 dark:bg-grid-zinc-900/50 w-full overflow-x-hidden p-4 pt-10 sm:p-10 sm:pt-12">
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
              <Link href={`/showcase?category=${nextCategory.slug}`}>
                Next Category: {nextCategory.name}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column: Tips */}
      <div className="bg-background hidden sm:block lg:col-span-1">
        <div className="custom-scrollbar sticky top-[64px] flex h-[calc(100vh-64px)] flex-col overflow-y-auto p-6">
          <Prose>
            <div className="mb-6 flex items-center gap-2 text-amber-500">
              <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-900/30">
                <LightbulbIcon className="h-5 w-5" />
              </div>
              <span className="text-foreground text-lg font-bold">
                Showcase Tips
              </span>
            </div>

            <div className="space-y-8">
              <div className="group">
                <h4 className="group-hover:text-primary mb-3 flex items-center gap-2 text-sm font-semibold transition-colors">
                  <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                  Quick Copy
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Click the "Code" button on any component to instantly copy the
                  implementation. All components use Tailwind CSS for styling.
                </p>
              </div>

              <div className="bg-primary/5 border-primary/10 relative overflow-hidden rounded-xl border p-5">
                <div className="bg-primary/5 absolute top-0 right-0 -mt-8 -mr-8 h-16 w-16 rounded-bl-full" />
                <h4 className="text-primary mb-3 flex items-center gap-2 text-sm font-bold">
                  <CheckIcon className="h-4 w-4" />
                  Theming
                </h4>
                <p className="text-muted-foreground relative z-10 text-xs leading-relaxed">
                  Our components are built with CSS variables. They
                  automatically adapt to your theme's primary color and border
                  radius settings.
                </p>
              </div>

              <div>
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
                  <div className="bg-primary h-1.5 w-1.5 rounded-full" />
                  Responsiveness
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every component is fully responsive. You can test how they
                  look on different screens by resizing your browser.
                </p>
              </div>

              <div className="border-t border-dashed pt-6">
                <h4 className="mb-3 text-sm font-semibold">Resources</h4>
                <ul className="text-muted-foreground space-y-2 text-xs">
                  <li className="flex items-center gap-2">
                    <ArrowRightIcon className="h-3 w-3" />
                    Tailwind CSS Documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRightIcon className="h-3 w-3" />
                    Lucide Icons Library
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 mt-10 rounded-lg p-4 text-center">
              <p className="text-muted-foreground text-[11px] font-medium tracking-widest uppercase">
                Scroll down to see more
              </p>
            </div>
          </Prose>
        </div>
      </div>
    </WideSection>
  )
}
