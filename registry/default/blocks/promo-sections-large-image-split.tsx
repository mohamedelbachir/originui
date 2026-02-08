import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import { Check } from "lucide-react";

export default function LargeImageSplitPromo() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        {/* Content Section */}
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <Badge variant="secondary" className="mb-4">
              Premium Quality
            </Badge>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Handcrafted Leather Goods
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover timeless style and durability with our collection of
              artisanal leather bags, wallets, and accessories. Made to last a
              lifetime.
            </p>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground"
            >
              <li className="flex gap-x-3 items-center">
                <Check
                  className="h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                Full-grain Italian leather
              </li>
              <li className="flex gap-x-3 items-center">
                <Check
                  className="h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                Expert craftsmanship
              </li>
              <li className="flex gap-x-3 items-center">
                <Check
                  className="h-5 w-5 flex-none text-primary"
                  aria-hidden="true"
                />
                Sustainable sourcing
              </li>
            </ul>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" asChild>
                <Link href="#">Shop Collection</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2">
          <Image
            className="aspect-[3/2] w-full bg-muted object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop"
            alt="Collection of handcrafted leather goods"
            width={900}
            height={600}
            priority
          />
        </div>
      </div>
    </div>
  );
}
