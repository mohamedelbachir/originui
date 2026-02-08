"use client";

import { Button } from "@/registry/default/ui/button";
import { Heart, Star, ZoomIn, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  images: string[];
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
}

export default function GalleryList() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Classic Leather Watch",
      images: Array(4).fill(
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      ),
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 128,
      isNew: true,
    },
    {
      id: 2,
      name: "Premium Steel Watch",
      images: Array(4).fill(
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      ),
      price: 499,
      originalPrice: 599,
      rating: 4.8,
      reviews: 96,
    },
    {
      id: 3,
      name: "Smart Watch Pro",
      images: Array(4).fill(
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
      ),
      price: 399,
      originalPrice: 449,
      rating: 4.7,
      reviews: 256,
      isNew: true,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-card rounded-xl border shadow-sm overflow-hidden"
            onMouseEnter={() => setSelectedProduct(product.id)}
            onMouseLeave={() => setSelectedProduct(null)}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] bg-muted">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-10 w-10 rounded-full"
                  >
                    <ZoomIn className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              {/* New Badge */}
              {product.isNew && (
                <div className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-md">
                  New Arrival
                </div>
              )}
              {/* Quick Actions */}
              <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <ShoppingCart className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {selectedProduct === product.id && (
              <div className="absolute bottom-[72px] inset-x-0 p-2 bg-background/80 backdrop-blur-sm">
                <div className="flex gap-2 justify-center">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className="relative w-12 h-12 rounded-md bg-muted overflow-hidden ring-2 ring-offset-2 ring-background hover:ring-primary transition-all"
                    >
                      <Image
                        src={image}
                        alt={`${product.name} view ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Product Info */}
            <div className="p-4">
              <h3 className="font-medium truncate">{product.name}</h3>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-sm">{product.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
                <div className="text-sm font-medium">${product.price}</div>
                <div className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
