"use client";

import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Slider } from "@/registry/default/ui/slider";
import { Heart, Star, SlidersHorizontal, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  features: string[];
}

interface Filter {
  search: string;
  category: string;
  priceRange: [number, number];
  minRating: number;
  features: string[];
}

export default function FilterList() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<Filter>({
    search: "",
    category: "all",
    priceRange: [0, 1000],
    minRating: 0,
    features: [],
  });

  const categories = ["all", "Accessories", "Electronics", "Sports"];
  const features = [
    "Water Resistant",
    "Heart Rate Monitor",
    "GPS",
    "Sleep Tracking",
    "Notifications",
    "Leather Strap",
    "Steel Band",
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Classic Leather Watch",
      category: "Accessories",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 128,
      features: ["Water Resistant", "Leather Strap"],
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      category: "Electronics",
      price: 499,
      originalPrice: 599,
      rating: 4.8,
      reviews: 256,
      features: [
        "Heart Rate Monitor",
        "GPS",
        "Sleep Tracking",
        "Notifications",
      ],
    },
    {
      id: 3,
      name: "Sport Watch Elite",
      category: "Sports",
      price: 399,
      originalPrice: 449,
      rating: 4.7,
      reviews: 192,
      features: ["Water Resistant", "Heart Rate Monitor", "GPS"],
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesCategory =
      filters.category === "all" || product.category === filters.category;
    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];
    const matchesRating = product.rating >= filters.minRating;
    const matchesFeatures =
      filters.features.length === 0 ||
      filters.features.every((f) => product.features.includes(f));

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPrice &&
      matchesRating &&
      matchesFeatures
    );
  });

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div
          className={`lg:w-64 shrink-0 space-y-6 ${
            showFilters
              ? "fixed inset-0 z-50 bg-background p-6 lg:static lg:p-0"
              : "hidden lg:block"
          }`}
        >
          <div className="flex items-center justify-between lg:hidden">
            <h2 className="font-semibold">Filters</h2>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => setShowFilters(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Search</label>
              <Input
                placeholder="Search products..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Category</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {categories.map((category) => (
                  <Button
                    key={category}
                    size="sm"
                    variant={
                      filters.category === category ? "default" : "outline"
                    }
                    onClick={() =>
                      setFilters({ ...filters, category: category })
                    }
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Price Range</label>
              <div className="mt-4">
                <Slider
                  value={filters.priceRange}
                  min={0}
                  max={1000}
                  step={50}
                  onValueChange={(value: [number, number]) =>
                    setFilters({ ...filters, priceRange: value })
                  }
                />
                <div className="flex items-center justify-between mt-2 text-sm text-muted-foreground">
                  <span>${filters.priceRange[0]}</span>
                  <span>${filters.priceRange[1]}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Minimum Rating</label>
              <div className="mt-4">
                <Slider
                  value={[filters.minRating]}
                  min={0}
                  max={5}
                  step={0.5}
                  onValueChange={(value) =>
                    setFilters({ ...filters, minRating: value[0] })
                  }
                />
                <div className="flex items-center gap-1 mt-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm">{filters.minRating}</span>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Features</label>
              <div className="grid grid-cols-1 gap-2 mt-1">
                {features.map((feature) => (
                  <Button
                    key={feature}
                    size="sm"
                    variant={
                      filters.features.includes(feature) ? "default" : "outline"
                    }
                    onClick={() =>
                      setFilters({
                        ...filters,
                        features: filters.features.includes(feature)
                          ? filters.features.filter((f) => f !== feature)
                          : [...filters.features, feature],
                      })
                    }
                  >
                    {feature}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="text-muted-foreground">
              {filteredProducts.length} products found
            </div>
            <Button
              variant="outline"
              className="lg:hidden"
              onClick={() => setShowFilters(true)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col bg-card rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-square bg-muted">
                  <Image
                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="space-y-2 flex-1">
                    <div className="min-w-0">
                      <h3 className="font-medium">{product.name}</h3>
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md mt-1">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                        <span className="text-sm">{product.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <div className="font-medium">${product.price}</div>
                      <div className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-block px-2 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-md"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <Button size="sm" className="w-full">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
