"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { cn } from "@/lib/utils";

export default function CarouselFeatureShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: 1,
      title: "Diamond-Cut Precision",
      description:
        "Each timepiece is meticulously crafted using state-of-the-art diamond-cutting techniques that create pristine edges and perfectly polished surfaces. Our 5-axis CNC machines achieve tolerances of just 0.01mm, ensuring every component fits together seamlessly.",
      image:
        "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?q=80&w=1974&auto=format&fit=crop",
      color: "bg-slate-100 dark:bg-slate-800",
      accent: "text-slate-900 dark:text-slate-100",
    },
    {
      id: 2,
      title: "Swiss Automatic Movement",
      description:
        "Powered by a Swiss-made automatic movement with 26 jewels, our watches offer exceptional accuracy and reliability. Each movement is meticulously assembled and regulated by master watchmakers, and features beautiful decoration including Geneva stripes and blue screws visible through the sapphire caseback.",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-amber-100 dark:bg-amber-900",
      accent: "text-amber-900 dark:text-amber-100",
    },
    {
      id: 3,
      title: "Sapphire Crystal",
      description:
        "We use only the highest grade sapphire crystal with anti-reflective coating on both sides for optimal clarity. With a hardness of 9 on the Mohs scale, it's virtually scratch-proof and provides crystal clear visibility of the dial from any angle.",
      image:
        "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?q=80&w=1920&auto=format&fit=crop",
      color: "bg-blue-100 dark:bg-blue-900",
      accent: "text-blue-900 dark:text-blue-100",
    },
    {
      id: 4,
      title: "Italian Leather Straps",
      description:
        "Our straps are hand-crafted from premium vegetable-tanned Italian leather, selected for its exceptional quality and comfort. Each strap is carefully stitched and finished, developing a beautiful patina over time that makes your timepiece truly unique.",
      image:
        "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1974&auto=format&fit=crop",
      color: "bg-amber-50 dark:bg-amber-800",
      accent: "text-amber-900 dark:text-amber-50",
    },
    {
      id: 5,
      title: "200M Water Resistance",
      description:
        "Engineered for reliability in any environment, our timepieces feature triple-sealed crowns and specially designed gaskets that ensure water resistance to 200 meters. Every watch undergoes rigorous pressure testing to guarantee performance even in demanding conditions.",
      image:
        "https://images.unsplash.com/photo-1517463700628-5103184eac47?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-sky-100 dark:bg-sky-900",
      accent: "text-sky-900 dark:text-sky-100",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === features.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? features.length - 1 : current - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col items-center text-center space-y-4 mb-8 md:mb-16">
          <Badge className="px-3.5 py-1.5">Craftsmanship</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Exceptional watchmaking
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed max-w-[700px]">
            Every detail of our timepieces is engineered with precision and
            crafted with passion.
          </p>
        </div>

        <div className="relative mt-10">
          {/* Main carousel */}
          <div className="relative overflow-hidden rounded-xl border dark:border-gray-700">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {features.map((feature) => (
                <div key={feature.id} className="w-full flex-shrink-0">
                  <div
                    className={cn("grid md:grid-cols-2 h-full", feature.color)}
                  >
                    <div className="relative aspect-square md:aspect-auto">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={activeIndex === 0}
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-10">
                      <div className="space-y-4">
                        <h3
                          className={cn(
                            "text-2xl md:text-3xl font-bold",
                            feature.accent
                          )}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground dark:text-gray-300">
                          {feature.description}
                        </p>
                        <div className="flex justify-start pt-4">
                          <Badge
                            variant="outline"
                            className="text-xs dark:border-gray-600 dark:text-gray-300"
                          >
                            Feature {feature.id} of {features.length}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-background dark:bg-gray-800/80 dark:border-gray-700 dark:hover:bg-gray-800"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-5 w-5 dark:text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full flex items-center justify-center bg-background/80 backdrop-blur-sm border shadow-sm hover:bg-background dark:bg-gray-800/80 dark:border-gray-700 dark:hover:bg-gray-800"
              aria-label="Next feature"
            >
              <ChevronRight className="h-5 w-5 dark:text-gray-300" />
            </button>
          </div>

          {/* Feature indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-1.5 transition-all duration-300 rounded-full",
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-4 bg-primary/30 dark:bg-primary/20"
                )}
                aria-label={`Go to feature ${index + 1}`}
              />
            ))}
          </div>

          {/* Feature thumbnails (visible on larger screens) */}
          <div className="hidden md:flex justify-center mt-6 gap-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "relative h-16 w-16 overflow-hidden rounded-lg border transition-all dark:border-gray-700",
                  index === activeIndex
                    ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900"
                    : "opacity-70 hover:opacity-100"
                )}
                aria-label={`Go to feature ${index + 1}`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-16 flex flex-col items-center justify-center space-y-4">
          <p className="text-muted-foreground text-center max-w-[600px] dark:text-gray-300">
            Discover the perfect timepiece that combines exceptional
            craftsmanship with timeless design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="dark:hover:bg-primary/90">
              <Link href="#">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <Link href="#">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
