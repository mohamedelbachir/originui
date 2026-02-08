"use client";

import { Button } from "@/registry/default/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Category {
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export default function ThreeColumnPreview() {
  const categories: Category[] = [
    {
      name: "Analog Watches",
      description: "Timeless classics with precision mechanics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productCount: 48,
    },
    {
      name: "Smart Watches",
      description: "Advanced technology on your wrist",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productCount: 32,
    },
    {
      name: "Sport Watches",
      description: "Durable timepieces for active lifestyles",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productCount: 24,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group relative bg-card rounded-xl border overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] bg-muted">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-xl font-semibold tracking-tight mb-2">
                {category.name}
              </h3>
              <p className="text-sm text-accent-foreground/80 mb-4">
                {category.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-accent-foreground/80">
                  {category.productCount} products
                </span>
                <Button
                  variant="ghost"
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                >
                  Shop now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
