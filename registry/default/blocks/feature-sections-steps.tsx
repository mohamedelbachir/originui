"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const features = [
  {
    title: "Project Setup",
    description:
      "Get started in minutes with our streamlined setup process. No complex configuration required.",
    image: "https://placehold.co/1024x768/jpeg?text=Setup",
    benefits: [
      "One-click installation",
      "Pre-configured templates",
      "Development environment ready",
      "Instant deployment setup",
    ],
  },
  {
    title: "Development",
    description:
      "Write code efficiently with modern tools and frameworks that boost your productivity.",
    image: "https://placehold.co/1024x768/jpeg?text=Development",
    benefits: [
      "Hot reload support",
      "TypeScript integration",
      "Component library",
      "Developer tools",
    ],
  },
  {
    title: "Testing",
    description:
      "Ensure quality with comprehensive testing tools and automated workflows.",
    image: "https://placehold.co/1024x768/jpeg?text=Testing",
    benefits: [
      "Unit testing framework",
      "Integration tests",
      "E2E testing tools",
      "Performance testing",
    ],
  },
  {
    title: "Deployment",
    description:
      "Deploy your applications with confidence using our robust deployment pipeline.",
    image: "https://placehold.co/1024x768/jpeg?text=Deployment",
    benefits: [
      "One-click deployment",
      "Rollback support",
      "Environment management",
      "Deployment monitoring",
    ],
  },
];

export default function FeatureSectionSteps() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          From idea to production
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Follow our proven process to build and deploy your applications with
          confidence.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr,2fr] gap-8 lg:gap-12 items-start">
        <div className="space-y-4">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setActiveFeature(index)}
              className={cn(
                "w-full text-left px-4 py-4 rounded-lg transition-colors",
                activeFeature === index
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                    activeFeature === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted-foreground/20 text-muted-foreground"
                  )}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p
                    className={cn(
                      "text-sm",
                      activeFeature === index
                        ? "text-primary/80"
                        : "text-muted-foreground"
                    )}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden bg-muted">
          <Image
            src={features[activeFeature].image}
            alt={features[activeFeature].title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0 p-6 flex items-end">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Key Benefits</h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {features[activeFeature].benefits.map((benefit) => (
                  <li key={benefit} className="text-sm flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
