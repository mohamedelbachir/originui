"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import { PlusCircle, ChevronRight } from "lucide-react";

export default function ImageHotspotFeatures() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);

  const hotspots = [
    {
      id: 1,
      x: 25, // percentage from left
      y: 20, // percentage from top
      title: "Full-Grain Leather",
      description: "Premium Italian leather for durability and classic look",
    },
    {
      id: 2,
      x: 60,
      y: 30,
      title: "Lightweight Construction",
      description:
        "Advanced materials reduce weight without compromising durability",
    },
    {
      id: 3,
      x: 75,
      y: 60,
      title: "Breathable Mesh",
      description: "Strategic ventilation keeps feet cool and comfortable",
    },
    {
      id: 4,
      x: 40,
      y: 70,
      title: "Carbon Fiber Plate",
      description: "Enhanced stability and energy return with every step",
    },
    {
      id: 5,
      x: 15,
      y: 55,
      title: "Responsive Cushioning",
      description: "Proprietary foam provides superior comfort and rebound",
    },
  ];

  const additionalFeatures = [
    {
      title: "Water-Resistant Coating",
      description: "Repels light moisture while maintaining breathability",
    },
    {
      title: "Reinforced Lace System",
      description: "Provides custom fit and secure lockdown during movement",
    },
    {
      title: "Grippy Outsole",
      description:
        "Multi-directional traction pattern for reliable grip on various surfaces",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left side - Interactive image */}
          <div className="relative">
            <div className="relative aspect-square rounded-lg overflow-hidden border bg-muted/50">
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
                alt="Premium athletic shoe with feature highlights"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Hotspots */}
              {hotspots.map((hotspot) => (
                <div
                  key={hotspot.id}
                  className="absolute"
                  style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                  onMouseEnter={() => setActiveHotspot(hotspot.id)}
                  onMouseLeave={() => setActiveHotspot(null)}
                >
                  <button
                    className={`flex items-center justify-center h-8 w-8 rounded-full transition-all duration-300 z-10 ${
                      activeHotspot === hotspot.id
                        ? "bg-primary text-primary-foreground scale-125"
                        : "bg-white text-primary"
                    }`}
                    aria-label={`Feature: ${hotspot.title}`}
                  >
                    <PlusCircle className="h-6 w-6" />
                  </button>

                  {/* Feature tooltip */}
                  <div
                    className={`absolute z-20 w-48 p-3 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg border transition-all duration-200 ${
                      activeHotspot === hotspot.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2 pointer-events-none"
                    } ${
                      hotspot.x > 50 ? "right-full mr-2" : "left-full ml-2"
                    } ${hotspot.y > 50 ? "bottom-0" : "top-0"}`}
                  >
                    <h4 className="font-medium">{hotspot.title}</h4>
                    <p className="text-xs text-muted-foreground">
                      {hotspot.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Accent decorative elements */}
              <div className="absolute top-0 right-0 h-16 w-16 bg-primary/20 blur-2xl rounded-full"></div>
              <div className="absolute bottom-0 left-0 h-16 w-16 bg-primary/20 blur-2xl rounded-full"></div>
            </div>

            <div className="mt-4 text-center text-sm text-muted-foreground">
              <p>Hover over the markers to explore features</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <Badge className="px-3.5 py-1.5">Engineered Performance</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Advanced features in every detail
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Our premium athletic footwear combines cutting-edge technology
                with performance-driven design.
              </p>
            </div>

            <div className="space-y-4">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex p-4 rounded-lg border bg-card text-card-foreground transition-colors hover:bg-muted/50"
                >
                  <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4 overflow-hidden">
                  <div className="inline-block h-10 w-10 rounded-full border-2 border-background z-30">
                    <Image
                      src="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=2072&auto=format&fit=crop"
                      alt="Running on track"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full border-2 border-background z-20">
                    <Image
                      src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=2070&auto=format&fit=crop"
                      alt="Road running"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="inline-block h-10 w-10 rounded-full border-2 border-background z-10">
                    <Image
                      src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop"
                      alt="Trail running"
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Tested by professional athletes</p>
                  <p className="text-muted-foreground">
                    Trusted by runners worldwide
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link href="#">Shop Collection</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">Product Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
