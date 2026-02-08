import { Button } from "@/registry/default/ui/button";
import { Heart, Star } from "lucide-react";
import Image from "next/image";

export default function CompactList() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="space-y-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="group flex gap-4 items-center bg-card border rounded-lg p-2 hover:bg-accent/50 transition-colors"
          >
            {/* Product Image */}
            <div className="relative h-24 aspect-square bg-muted rounded-md overflow-hidden shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
                alt="Product image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 96px"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0 grid sm:grid-cols-3 gap-4 items-center">
              <div className="min-w-0">
                <h3 className="font-medium truncate">Classic Leather Watch</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-sm">4.9</span>
                  <span className="text-sm text-muted-foreground">(128)</span>
                </div>
              </div>

              <div className="sm:text-center">
                <div className="text-sm text-muted-foreground">Price</div>
                <div className="font-medium">$299</div>
                <div className="text-sm text-muted-foreground line-through">
                  $399
                </div>
              </div>

              <div className="flex items-center gap-2 sm:justify-end">
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Add to Cart
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="shrink-0 h-8 w-8"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
