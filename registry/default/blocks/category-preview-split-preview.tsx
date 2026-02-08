"use client";

import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

interface Category {
  name: string;
  description: string;
  image: string;
  productCount: number;
  rating: number;
  reviewCount: number;
  topBrands: string[];
  priceRange: string;
}

export default function SplitPreview() {
  const categories: Category[] = [
    {
      name: "Premium Collection",
      description:
        "Experience luxury at its finest with our handpicked selection of premium timepieces. Each watch is a masterpiece of precision engineering and sophisticated design.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productCount: 124,
      rating: 4.9,
      reviewCount: 856,
      topBrands: ["Rolex", "Patek Philippe", "Audemars Piguet"],
      priceRange: "$5,000 - $50,000+",
    },
    {
      name: "Professional Series",
      description:
        "Designed for the modern professional, these watches combine elegant aesthetics with practical functionality. Perfect for both business and casual occasions.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productCount: 96,
      rating: 4.8,
      reviewCount: 642,
      topBrands: ["Omega", "TAG Heuer", "IWC"],
      priceRange: "$2,000 - $10,000",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-12">
      {categories.map((category, index) => (
        <div
          key={category.name}
          className={`flex flex-col lg:flex-row gap-8 bg-card rounded-xl border overflow-hidden ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent lg:hidden" />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight mb-4">
                  {category.name}
                </h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(category.rating)
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                    <span className="ml-2 font-medium">{category.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {category.reviewCount} reviews
                  </p>
                </div>
                <div>
                  <div className="font-medium mb-1">Price Range</div>
                  <p className="text-sm text-muted-foreground">
                    {category.priceRange}
                  </p>
                </div>
                <div>
                  <div className="font-medium mb-1">Available Items</div>
                  <p className="text-sm text-muted-foreground">
                    {category.productCount} products
                  </p>
                </div>
              </div>

              {/* Top Brands */}
              <div>
                <div className="font-medium mb-2">Featured Brands</div>
                <div className="flex flex-wrap gap-2">
                  {category.topBrands.map((brand) => (
                    <Badge
                      key={brand}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {brand}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4">
                <Button className="group">
                  Explore Collection
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
