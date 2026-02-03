import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRightIcon, CheckIcon, LightbulbIcon, PlusIcon } from "lucide-react"

import { categories, getCategory } from "@/config/components"
import { getComponentsByNames, cn } from "@/lib/utils"
import ComponentCard from "@/components/component-card"
import ComponentDetails from "@/components/component-details"
import ComponentLoader from "@/components/component-loader-server"
import { Prose } from "@/components/prose"
import { Button } from "@/registry/default/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Component Showcase - Origin UI",
  description: "Browse all components in a showcase view.",
}

type Props = {
  searchParams: Promise<{ category?: string }>
}

const Cross = () => (
  <div className="relative h-6 w-6">
    <div className="absolute left-3 h-6 w-px bg-border" />
    <div className="absolute top-3 h-px w-6 bg-border" />
    <PlusIcon size={20} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/50" />
  </div>
);

const WideSection = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <section className="w-full">
    <div className="mx-auto max-w-[1600px] px-4 sm:px-6 relative">
      <div className={cn('sm:border-x border-border', className)}>{children}</div>
      <div className="-bottom-3 -left-3 absolute z-10 hidden h-6 sm:block">
        <Cross />
      </div>
      <div className="-bottom-3 -right-3 -translate-x-px absolute z-10 hidden h-6 sm:block">
        <Cross />
      </div>
    </div>
  </section>
);

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
    <WideSection className="grid divide-y border-b lg:grid-cols-4 lg:divide-x lg:divide-y-0 min-h-screen">
      {/* Left Column: Category List */}
      <div className="bg-background lg:col-span-1">
        <div className="flex flex-col gap-4 p-6 sticky top-[64px] h-[calc(100vh-64px)]">
          <div className="font-semibold text-lg mb-2 flex items-center justify-between">
            <span>Categories</span>
            <span className="text-xs font-normal text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {categories.length}
            </span>
          </div>
          <nav className="flex flex-col gap-1 overflow-y-auto pr-2 flex-1 custom-scrollbar">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/showcase?category=${c.slug}`}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm transition-all hover:bg-muted flex items-center justify-between group",
                  c.slug === categorySlug
                    ? "bg-primary/10 text-primary font-semibold shadow-sm"
                    : "text-muted-foreground"
                )}
              >
                <span className="truncate">{c.name}</span>
                {c.isNew && (
                  <span className="ml-2 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-500 text-white rounded-[4px] leading-none">
                    New
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Middle Column: Component Display */}
      <div className="bg-muted/30 lg:col-span-2 relative min-h-screen">
        <div className="flex h-full flex-col p-6 lg:p-10">
          <div className="mb-10 flex flex-col gap-3">
            <div className="flex items-center gap-2">
               <h1 className="text-4xl font-bold tracking-tight">{category.name}</h1>
               {category.isNew && (
                  <span className="px-2 py-1 text-xs font-bold uppercase bg-amber-500 text-white rounded-md">
                    New Category
                  </span>
               )}
            </div>
            <p className="text-lg text-muted-foreground">
              {components.length} {components.length === 1 ? 'beautifully crafted component' : 'beautifully crafted components'} available.
            </p>
          </div>

          <div className="flex-1 space-y-16">
            {components.map((component) => (
              <div key={component.name} className="scroll-mt-24">
                <ComponentCard
                  component={component}
                  className="border bg-background shadow-md rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <div className="p-6 sm:p-10 bg-grid-zinc-100/50 dark:bg-grid-zinc-900/50">
                    <ComponentLoader component={component} />
                  </div>
                  <ComponentDetails component={component} />
                </ComponentCard>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center py-12 border-t border-dashed">
            <Button asChild size="lg" className="rounded-full px-10 h-14 text-lg shadow-xl hover:shadow-2xl transition-all">
              <Link href={`/showcase?category=${nextCategory.slug}`}>
                Next Category: {nextCategory.name}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Right Column: Tips */}
      <div className="bg-background lg:col-span-1">
        <div className="flex flex-col p-6 sticky top-[64px] h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
          <Prose>
            <div className="flex items-center gap-2 mb-6 text-amber-500">
                <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg">
                    <LightbulbIcon className="h-5 w-5" />
                </div>
                <span className="font-bold text-lg text-foreground">Showcase Tips</span>
            </div>
            
            <div className="space-y-8">
                <div className="group">
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Quick Copy
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Click the "Code" button on any component to instantly copy the implementation. All components use Tailwind CSS for styling.
                    </p>
                </div>

                <div className="bg-primary/5 p-5 rounded-xl border border-primary/10 relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
                     <h4 className="text-sm font-bold mb-3 flex items-center gap-2 text-primary">
                        <CheckIcon className="h-4 w-4" />
                        Theming
                     </h4>
                     <p className="text-xs text-muted-foreground leading-relaxed relative z-10">
                        Our components are built with CSS variables. They automatically adapt to your theme's primary color and border radius settings.
                     </p>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                         Responsiveness
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Every component is fully responsive. You can test how they look on different screens by resizing your browser.
                    </p>
                </div>

                <div className="pt-6 border-t border-dashed">
                    <h4 className="text-sm font-semibold mb-3">Resources</h4>
                    <ul className="text-xs space-y-2 text-muted-foreground">
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
            
            <div className="mt-10 p-4 bg-muted/50 rounded-lg text-center">
                <p className="text-[11px] text-muted-foreground uppercase tracking-widest font-medium">
                    Scroll down to see more
                </p>
            </div>
          </Prose>
        </div>
      </div>
    </WideSection>
  )
}
