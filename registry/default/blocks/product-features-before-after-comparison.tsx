"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { cn } from "@/lib/utils";

interface ComparisonFeature {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  description: string;
  improvements: string[];
}

export default function BeforeAfterComparison() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const features: ComparisonFeature[] = [
    {
      id: "camera",
      title: "Enhanced Camera System",
      beforeImage:
        "https://images.unsplash.com/photo-1564466809058-bf4114d55352?q=80&w=2069&auto=format&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1584006682522-dc17d6c0d9ac?q=80&w=2073&auto=format&fit=crop",
      beforeLabel: "Previous Model",
      afterLabel: "New Model",
      description:
        "Experience a revolutionary leap in photography with our enhanced camera system, featuring improved low-light performance, higher resolution sensors, and advanced computational photography.",
      improvements: [
        "50% larger sensor captures more light for stunning low-light photos",
        "Improved optical stabilization reduces blur in action shots",
        "Enhanced portrait mode with depth mapping for professional-looking results",
        "Computational photography algorithms produce better colors and details",
      ],
    },
    {
      id: "design",
      title: "Refined Design & Materials",
      beforeImage:
        "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?q=80&w=2068&auto=format&fit=crop",
      beforeLabel: "Classic Design",
      afterLabel: "Modern Design",
      description:
        "We've completely reimagined our product's form factor with premium materials, improved ergonomics, and a sleeker profile that feels better in your hand while maintaining durability.",
      improvements: [
        "Aerospace-grade aluminum provides strength without added weight",
        "Improved ergonomic grip for extended comfortable use",
        "30% thinner profile without compromising battery life",
        "New matte finish resists fingerprints and scratches",
      ],
    },
    {
      id: "display",
      title: "Revolutionary Display Technology",
      beforeImage:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=10&w=1000&auto=format&fit=crop&blur=10",
      afterImage:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop",
      beforeLabel: "Standard Display",
      afterLabel: "ProMotion XDR",
      description:
        "Our new ProMotion XDR display delivers breathtaking color accuracy, incredible brightness, and smoother motion with adaptive refresh rate technology for an immersive viewing experience.",
      improvements: [
        "120Hz adaptive refresh rate for smoother scrolling and gameplay",
        "1000 nits of brightness for easy viewing in direct sunlight",
        "P3 wide color gamut with 10-bit color depth for true-to-life images",
        "Reduced blue light emission for comfortable extended viewing",
      ],
    },
  ];

  const handleSliderChange = (clientX: number) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;

    // Constrain between 0 and 100
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleMouseDown = (e: MouseEvent) => {
    isDragging.current = true;
    handleSliderChange(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging.current) {
      handleSliderChange(e.clientX);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: TouchEvent) => {
    isDragging.current = true;
    handleSliderChange(e.touches[0].clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging.current) {
      handleSliderChange(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const nextFeature = () => {
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    setSliderPosition(50); // Reset slider position
  };

  const prevFeature = () => {
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    setSliderPosition(50); // Reset slider position
  };

  const currentFeature = features[activeFeature];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col items-center text-center space-y-4 mb-8 md:mb-12">
          <Badge className="px-3.5 py-1.5">Next Generation</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            See the difference innovation makes
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[600px]">
            Compare our latest advancements with previous generations to
            experience the remarkable evolution of our products.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Feature Navigation */}
          <div className="lg:col-span-1 flex flex-col space-y-4 mb-6 lg:mb-0">
            <h3 className="text-lg font-medium mb-4">Innovation Highlights</h3>

            {features.map((feature, idx) => (
              <button
                key={feature.id}
                onClick={() => {
                  setActiveFeature(idx);
                  setSliderPosition(50);
                }}
                className={cn(
                  "text-left px-4 py-3 rounded-lg border transition-colors",
                  activeFeature === idx
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border hover:border-primary/50 hover:bg-muted"
                )}
              >
                <div className="font-medium">{feature.title}</div>
                <div className="text-sm text-muted-foreground mt-1 line-clamp-2">
                  {feature.description.substring(0, 80)}...
                </div>
              </button>
            ))}

            <div className="flex space-x-3 lg:hidden mt-4">
              <Button variant="outline" size="icon" onClick={prevFeature}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextFeature}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Comparison Slider */}
          <div className="lg:col-span-4 space-y-8">
            <div
              ref={sliderRef}
              className="relative w-full rounded-lg overflow-hidden border h-[400px] select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Before Image (full width) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={currentFeature.beforeImage}
                  alt={`Before: ${currentFeature.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-md text-sm font-medium">
                  {currentFeature.beforeLabel}
                </div>
              </div>

              {/* After Image (partial width based on slider) */}
              <div
                className="absolute inset-0 h-full overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <Image
                  src={currentFeature.afterImage}
                  alt={`After: ${currentFeature.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
                <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                  {currentFeature.afterLabel}
                </div>
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                style={{ left: `${sliderPosition}%`, marginLeft: "-0.5px" }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                    <div className="flex items-center space-x-0.5">
                      <ArrowLeft className="h-3 w-3 text-primary-foreground" />
                      <ArrowRight className="h-3 w-3 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Description */}
            <div className="bg-muted/50 rounded-lg p-6 border">
              <h3 className="text-2xl font-bold mb-4">
                {currentFeature.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {currentFeature.description}
              </p>

              <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                Key Improvements
              </h4>
              <ul className="space-y-2">
                {currentFeature.improvements.map((improvement, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="h-5 w-5 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-4 border-t flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="#">
                    Shop new model
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">Compare all models</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-center space-x-3 mt-8">
          <Button
            variant="outline"
            onClick={prevFeature}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous feature
          </Button>
          <Button
            variant="outline"
            onClick={nextFeature}
            className="flex items-center gap-2"
          >
            Next feature
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
