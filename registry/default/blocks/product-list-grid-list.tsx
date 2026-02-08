import { Button } from "@/registry/default/ui/button";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

export default function GridList() {
  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Product Card */}
        {[...Array(8)].map((_, i) => (
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
                <Button size="sm" className="w-full">
                  Buy Now
                </Button>
                <Button size="sm" variant="outline" className="w-full">
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
