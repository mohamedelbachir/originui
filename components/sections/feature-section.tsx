"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Section } from "@/components/section";
import { 
  ComponentIcon, 
  GithubIcon, 
  LayoutIcon, 
  ZapIcon, 
  MousePointer2Icon,
  MoveRightIcon,
  GlobeIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react";
import AutoScroll from "embla-carousel-auto-scroll";
import Link from "next/link";

const features = [
  {
    icon: <ZapIcon className="size-6 text-primary" />,
    title: "Fast Performance",
    description: "Highly optimized components for the best user experience.",
  },
  {
    icon: <ComponentIcon className="size-6 text-primary" />,
    title: "600+ Components",
    description: "Extensive collection of ready-to-use UI elements.",
  },
  {
    icon: <LayoutIcon className="size-6 text-primary" />,
    title: "Beautiful Layouts",
    description: "Modern bento and grid layouts for your applications.",
  },
  {
    icon: <MousePointer2Icon className="size-6 text-primary" />,
    title: "Interactive",
    description: "Built with React Aria for superior accessibility.",
  },
  // {
  //   icon: <GithubIcon className="size-6 text-primary" />,
  //   title: "Open Source",
  //   description: "Free to use and open for community contributions.",
  // },
  {
    icon: <GlobeIcon className="size-6 text-primary" />,
    title: "Global Reach",
    description: "Supporting multi-language and RTL layouts out of the box.",
  },
];

export function FeatureSection() {
  return (
    <Section className="py-0 overflow-hidden border-border border-t !pr-0">
        <div className="grid items-center gap-20 md:grid-cols-2">
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            <span className="inline-flex items-center -space-x-4">
              <Avatar className="size-11 border-2 border-background lg:size-16">
                <AvatarImage
                  src="/avatar-80-01.jpg"
                  alt="User 1"
                />
              </Avatar>
              <Avatar className="size-11 border-2 border-background lg:size-16">
                <AvatarImage
                  src="/avatar-80-02.jpg"
                  alt="User 2"
                />
              </Avatar>
              <Avatar className="size-11 border-2 border-background lg:size-16">
                <AvatarImage
                  src="/avatar-80-03.jpg"
                  alt="User 3"
                />
              </Avatar>
            </span>
            <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl tracking-tight">
              Explore New Frontiers in Digital Innovation with Us
            </h1>
            <p className="text-muted-foreground md:text-lg max-w-md">
              Join our journey to craft highly optimized web experiences with our comprehensive UI library.
            </p>
            <Button size="lg" className="w-fit gap-2 rounded-full h-12 px-6" asChild>
              <Link href="/showcase">
                View Features <MoveRightIcon className="h-auto w-5" />
              </Link>
            </Button>
            <div className="grid grid-cols-2 justify-between gap-4 pt-10 text-left md:gap-20">
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold md:text-5xl">85%</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Conversion boost
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold md:text-5xl">25k+</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid gap-4 lg:grid-cols-2 relative h-[600px] bg-background px-4">
            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                AutoScroll({
                  speed: 0.7,
                }),
              ]}
              orientation="vertical"
              className="pointer-events-none  relative"
            >
              <CarouselContent className="h-[600px]">
                {features.map((feature, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div className="flex flex-col rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                      <div className="mb-4 rounded-lg bg-primary/5 p-2 w-fit">
                        {feature.icon}
                      </div>
                      <h3 className="mb-2 font-bold text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <Carousel
              opts={{
                loop: true,
                align: "start",
              }}
              plugins={[
                AutoScroll({
                  speed: 0.7,
                  stopOnInteraction: false,
                  direction: "backward"
                }),
              ]}
              orientation="vertical"
              className="pointer-events-none relative hidden lg:block"
            >
              <CarouselContent className="h-[600px]">
                {[...features].reverse().map((feature, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div className="flex flex-col rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                      <div className="mb-4 rounded-lg bg-primary/5 p-2 w-fit">
                        {feature.icon}
                      </div>
                      <h3 className="mb-2 font-bold text-lg">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
          </div>
        </div>
    </Section>
  );
}
