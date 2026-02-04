import * as React from "react"
import {
  ArrowRightIcon,
  CheckIcon,
  LightbulbIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Prose } from "@/components/prose"
import { RegistrySidebar } from "./registry-sidebar"
import { RegistryMobileNav } from "./registry-mobile-nav"

interface Category {
  slug: string
  name: string
  isNew?: boolean
}

interface RegistryLayoutProps {
  categories: Category[]
  currentCategorySlug: string
  basePath: string
  children: React.ReactNode
  rightColumn?: React.ReactNode
  sidebarTitle?: string
}

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
    </div>
  </section>
)

export function RegistryLayout({
  categories,
  currentCategorySlug,
  basePath,
  children,
  rightColumn,
  sidebarTitle,
}: RegistryLayoutProps) {
  return (
    <WideSection className="grid min-h-screen divide-y border-b lg:grid-cols-4 lg:divide-x lg:divide-y-0">
      {/* Left Column: Sidebar */}
      <RegistrySidebar
        categories={categories}
        currentCategorySlug={currentCategorySlug}
        basePath={basePath}
        title={sidebarTitle}
      />

      {/* Middle Column: Content */}
      <div className="bg-muted/30 relative min-h-screen lg:col-span-2">
        <div className="flex h-full flex-col p-4 lg:p-8">
          <RegistryMobileNav
            categories={categories}
            currentCategorySlug={currentCategorySlug}
            basePath={basePath}
          />
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>

      {/* Right Column: Tips or Custom Content */}
      <div className="bg-background hidden sm:block lg:col-span-1">
        <div className="custom-scrollbar sticky top-[64px] flex h-[calc(100vh-64px)] flex-col overflow-y-auto p-6">
          {rightColumn || <DefaultTips />}
        </div>
      </div>
    </WideSection>
  )
}

function DefaultTips() {
  return (
    <Prose>
      <div className="mb-6 flex items-center gap-2 text-amber-500">
        <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-900/30">
          <LightbulbIcon className="h-5 w-5" />
        </div>
        <span className="text-foreground text-lg font-bold">
          Quick Tips
        </span>
      </div>

      <div className="space-y-8">
        <div className="group">
          <h4 className="group-hover:text-primary mb-3 flex items-center gap-2 text-sm font-semibold transition-colors">
            <div className="bg-primary h-1.5 w-1.5 rounded-full" />
            Easy Implementation
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Copy and paste these components directly into your project. All styles are handled via Tailwind CSS.
          </p>
        </div>

        <div className="bg-primary/5 border-primary/10 relative overflow-hidden rounded-xl border p-5">
          <div className="bg-primary/5 absolute top-0 right-0 -mt-8 -mr-8 h-16 w-16 rounded-bl-full" />
          <h4 className="text-primary mb-3 flex items-center gap-2 text-sm font-bold">
            <CheckIcon className="h-4 w-4" />
            Fully Responsive
          </h4>
          <p className="text-muted-foreground relative z-10 text-xs leading-relaxed">
            Every component and block is optimized for all screen sizes, from mobile to desktop.
          </p>
        </div>

        <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <div className="bg-primary h-1.5 w-1.5 rounded-full" />
            Theming Support
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Supports both light and dark modes out of the box using CSS variables.
          </p>
        </div>
      </div>

      <div className="bg-muted/50 mt-10 rounded-lg p-4 text-center">
        <p className="text-muted-foreground text-[11px] font-medium tracking-widest uppercase">
          Explore our collection
        </p>
      </div>
    </Prose>
  )
}