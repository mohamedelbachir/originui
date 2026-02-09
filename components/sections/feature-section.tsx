"use client"

import Link from "next/link"
import { ViewAnimation } from "@/providers/view-animation"
import {
  ComponentIcon,
  GlobeIcon,
  LayoutIcon,
  MousePointer2Icon,
  MoveRightIcon,
  ZapIcon,
} from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Marquee from "@/components/ui/marquee"
import { Section } from "@/components/section"

const features = [
  {
    icon: <ZapIcon className="text-primary size-6" />,
    title: "Fast Performance",
    description: "Highly optimized components for the best user experience.",
  },
  {
    icon: <ComponentIcon className="text-primary size-6" />,
    title: "600+ Components",
    description: "Extensive collection of ready-to-use UI elements.",
  },
  {
    icon: <LayoutIcon className="text-primary size-6" />,
    title: "Beautiful Layouts",
    description: "Modern bento and grid layouts for your applications.",
  },
  {
    icon: <MousePointer2Icon className="text-primary size-6" />,
    title: "Interactive",
    description: "Built with React Aria for superior accessibility.",
  },
  // {
  //   icon: <GithubIcon className="size-6 text-primary" />,
  //   title: "Open Source",
  //   description: "Free to use and open for community contributions.",
  // },
  {
    icon: <GlobeIcon className="text-primary size-6" />,
    title: "Global Reach",
    description: "Supporting multi-language and RTL layouts out of the box.",
  },
]

export function FeatureSection() {
  return (
    <Section className="border-border overflow-hidden border-t py-8 sm:py-0 sm:!pr-0">
      <div className="grid items-center gap-20 md:grid-cols-2">
        <ViewAnimation
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <span className="inline-flex items-center -space-x-4">
              <Avatar className="border-background size-8 border-2 lg:size-12">
                <AvatarImage src="/avatar-80-01.jpg" alt="User 1" />
              </Avatar>
              <Avatar className="border-background size-8 border-2 lg:size-12">
                <AvatarImage src="/avatar-80-02.jpg" alt="User 2" />
              </Avatar>
              <Avatar className="border-background size-8 border-2 lg:size-12">
                <AvatarImage src="/avatar-80-03.jpg" alt="User 3" />
              </Avatar>
            </span>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Explore Beautiful shadcn components
            </h1>
            <p className="text-muted-foreground max-w-md md:text-lg">
              Join our journey to craft highly optimized web experiences with
              our comprehensive UI library.
            </p>
            <Button
              size="lg"
              className="h-12 w-fit gap-2 rounded-full px-6"
              asChild
            >
              <Link href="/showcase">
                View Components <MoveRightIcon className="h-auto w-5" />
              </Link>
            </Button>
            <div className="hidden grid-cols-2 justify-between gap-4 pt-10 text-left sm:grid md:gap-20">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold md:text-5xl">100+</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Components
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold md:text-5xl">5+</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Templates
                </p>
              </div>
            </div>
          </div>
        </ViewAnimation>
        <ViewAnimation
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          delay={0.2}
        >
          <div className="bg-background border-border relative hidden h-[300px] gap-4 border-l px-4 sm:grid sm:h-[600px] lg:grid-cols-2">
            <Marquee vertical pauseOnHover className="gap-2 [--duration:30s]">
              {features.map((feature, index) => (
                <div key={index} className="pb-4">
                  <div className="bg-background flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="bg-primary/5 mb-4 w-fit rounded-lg p-2">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </Marquee>

            <Marquee
              vertical
              reverse
              pauseOnHover
              className="hidden gap-2 [--duration:30s] lg:flex"
            >
              {[...features].reverse().map((feature, index) => (
                <div key={index} className="pb-4">
                  <div className="bg-background flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:shadow-md">
                    <div className="bg-primary/5 mb-4 w-fit rounded-lg p-2">
                      {feature.icon}
                    </div>
                    <h3 className="mb-2 text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </Marquee>

            <div className="from-background absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b to-transparent" />
            <div className="from-background absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t to-transparent" />
          </div>
        </ViewAnimation>
      </div>
    </Section>
  )
}
