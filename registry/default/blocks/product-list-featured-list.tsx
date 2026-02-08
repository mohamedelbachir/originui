import { Button } from "@/registry/default/ui/button";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

export default function FeaturedList() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Product */}
        <div className="md:col-span-2 group bg-card rounded-xl border overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Featured product"
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-2 left-2 px-2 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-md">
                Featured
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-6 flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold">
                  Premium Leather Watch
                </h2>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground">(128 reviews)</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Elevate your style with our premium leather watch. Featuring
                  Swiss-made movement, genuine leather strap, and sapphire
                  crystal glass.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold">$299</span>
                    <span className="text-muted-foreground line-through">
                      $399
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Save 25%
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <Button size="lg">Buy Now</Button>
                <Button size="lg" variant="outline">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Products */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="group bg-card rounded-xl border overflow-hidden"
          >
            <div className="relative aspect-square bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Product image"
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-medium truncate">
                    Classic Leather Watch
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="text-sm">4.9</span>
                    <span className="text-sm text-muted-foreground">(128)</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">$299</div>
                  <div className="text-sm text-muted-foreground line-through">
                    $399
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Button size="sm">Buy Now</Button>
                <Button size="sm" variant="outline">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
