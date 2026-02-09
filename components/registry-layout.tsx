"use client"

import * as React from "react"
import { Suspense } from "react"
import Image from "next/image"
import { ViewAnimation } from "@/providers/view-animation"
import Autoplay from "embla-carousel-autoplay"
import {
  ExternalLink,
  InfoIcon,
  LightbulbIcon,
  Loader2Icon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Prose } from "@/components/prose"

import { Illustration } from "./illustration"
import { RegistryMobileNav } from "./registry-mobile-nav"
import { RegistrySidebar } from "./registry-sidebar"

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
      {sidebarTitle && (
        <RegistrySidebar
          categories={categories}
          currentCategorySlug={currentCategorySlug}
          basePath={basePath}
          title={sidebarTitle}
        />
      )}

      {/* Middle Column: Content */}
      <div
        className={cn("bg-muted/30 relative min-h-screen lg:col-span-2", {
          "lg:col-span-3": !sidebarTitle,
        })}
      >
        <div className="flex h-full flex-col p-4 lg:p-8">
          <RegistryMobileNav
            categories={categories}
            currentCategorySlug={currentCategorySlug}
            basePath={basePath}
          />
          <div className="flex-1">
            <Suspense fallback={<LoadingContent />}>{children}</Suspense>
          </div>
        </div>
      </div>

      {/* Right Column: Tips or Custom Content */}
      <div className="bg-background hidden sm:block lg:col-span-1">
        <div className="custom-scrollbar sticky top-[64px] flex h-[calc(100vh-64px)] flex-col overflow-y-auto p-6">
          <ViewAnimation
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            delay={0.2}
            className="h-full"
          >
            <div className="flex-1">{rightColumn || <DefaultTips />}</div>
            <RegistryAd />
          </ViewAnimation>
        </div>
      </div>
    </WideSection>
  )
}

function LoadingContent() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <Loader2Icon className="text-muted-foreground h-8 w-8 animate-spin opacity-20" />
    </div>
  )
}

function DefaultTips() {
  return (
    <Prose>
      <div className="mb-6 flex items-center gap-2 text-amber-500">
        <div className="rounded-lg bg-amber-100 p-2 dark:bg-amber-900/30">
          <LightbulbIcon className="h-5 w-5" />
        </div>
        <span className="text-foreground text-lg font-bold">Quick Tips</span>
      </div>

      <div className="space-y-4">
        <div className="group">
          <h4 className="group-hover:text-primary mb-3 flex items-center gap-2 text-sm font-semibold transition-colors">
            <div className="bg-primary h-1.5 w-1.5 rounded-full" />
            Easy Implementation
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Copy and paste these components directly into your project. All
            styles are handled via Tailwind CSS.
          </p>
        </div>

        <div className="bg-primary/5 border-primary/10 relative overflow-hidden rounded-xl border p-5">
          <div className="bg-primary/5 absolute top-0 right-0 -mt-8 -mr-8 h-16 w-16 rounded-bl-full" />
          <h4 className="text-primary mb-3 flex items-center gap-2 text-sm font-bold">
            <InfoIcon className="h-4 w-4" />
            Notice
          </h4>
          <p className="text-muted-foreground relative z-10 text-xs leading-relaxed">
            Use cli installation to avoid missing dependency , instead of doing
            just copy paste.
          </p>
        </div>

        {/* <div>
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold">
            <div className="bg-primary h-1.5 w-1.5 rounded-full" />
            Theming Support
          </h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Supports both light and dark modes out of the box using CSS
            variables.
          </p>
        </div> */}
      </div>

      {/* <div className="bg-muted/50 mt-10 rounded-lg p-4 text-center">
        <p className="text-muted-foreground text-[11px] font-medium tracking-widest uppercase">
          Explore our collection
        </p>
      </div> */}
    </Prose>
  )
}

function RegistryAd() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  const ads = [
    {
      title: "Woilasoft Agency",
      description:
        "Woilasoft, your partner for custom digital solutions. We create the digital solutions ",
      link: "https://woilasoft.com",
      gradient: "from-indigo-500 to-purple-600",
      cta: "Learn more",
      textColor: "text-indigo-100/90",
      ctaColor: "text-indigo-600 hover:bg-indigo-50",
      image: "/brand/ogp.png",
    },
    {
      title: "Templify",
      description:
        "Create dynamic images programmatically, the canvas editor for automated design workflows.",
      link: "https://templify.woilasoft.com",
      gradient: "from-emerald-500 to-teal-600",
      cta: "Get started",
      textColor: "text-emerald-100/90",
      ctaColor: "text-emerald-600 hover:bg-emerald-50",
      image: "/brand/templify-logo.png",
    },
    {
      title: "Eventree",
      description:
        "An easy to use event management application for managing your events , start use it now !",
      link: "https://eventree.woilasoft.com",
      gradient: "from-pink-500 to-rose-600",
      cta: "Get started now",
      textColor: "text-pink-100/90",
      ctaColor: "text-pink-600 hover:bg-pink-50",
      image: "/brand/eventree.jpg",
    },
  ]

  return (
    <div className="mt-10 border-t pt-10">
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {ads.map((ad, index) => (
            <CarouselItem key={index}>
              <div
                // className={cn(
                //   "relative overflow-hidden rounded-2xl bg-gradient-to-br p-6 text-white shadow-xl transition-all hover:scale-[1.02]",
                //   ad.gradient
                // )}
                className="dark relative overflow-hidden rounded-xl bg-zinc-900 p-4"
              >
                <Illustration
                  className="absolute top-0 left-0 -translate-x-1/2"
                  aria-hidden="true"
                />
                <Illustration
                  className="absolute right-0 bottom-0 translate-x-1/4"
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="mb-4 overflow-hidden rounded-lg bg-white/20 shadow-sm">
                    <Image
                      src={ad.image}
                      alt={ad.title}
                      width={300}
                      height={150}
                      className="h-32 w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <span className="mb-2 inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase">
                    Sponsored
                  </span>
                  <h3 className="font-heading text-foreground mb-2 text-xl leading-tight">
                    {ad.title}
                  </h3>
                  <p
                    className={cn(
                      "text-foreground/80 mb-4 text-xs leading-relaxed"
                    )}
                  >
                    {ad.description}
                  </p>
                  <a
                    href={ad.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-black transition-colors"
                    )}
                  >
                    {ad.cta}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* <div className="mt-6 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop"
              alt="Mock Ad"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h5 className="text-xs font-semibold">Framer Motion Pro</h5>
            <p className="text-muted-foreground text-[10px]">
              Advanced animation course for developers.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1614850523296-e8c041de4398?w=80&h=80&fit=crop"
              alt="Mock Ad"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h5 className="text-xs font-semibold">Tailwind Templates</h5>
            <p className="text-muted-foreground text-[10px]">
              Beautifully crafted UI kits for Next.js.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  )
}
