"use client";

import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Category {
  name: string;
  tagline: string;
  description: string;
  image: string;
  secondaryImage?: string;
  productCount: number;
  featured?: boolean;
  quote?: {
    text: string;
    author: string;
    role: string;
  };
  highlights: string[];
  cta: string;
}

export default function MagazinePreview() {
  const categories: Category[] = [
    {
      name: "Heritage Collection",
      tagline: "Timeless Elegance, Modern Innovation",
      description:
        "Discover our curated selection of classic timepieces that blend traditional craftsmanship with contemporary design. Each watch tells a story of heritage and innovation.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      secondaryImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productCount: 156,
      featured: true,
      quote: {
        text: "Our Heritage Collection represents the pinnacle of watchmaking tradition, reimagined for the modern connoisseur.",
        author: "James Anderson",
        role: "Master Watchmaker",
      },
      highlights: [
        "Hand-finished movements",
        "Limited edition pieces",
        "Exclusive complications",
        "Traditional techniques",
      ],
      cta: "Explore the Heritage",
    },
    {
      name: "Contemporary Series",
      tagline: "The Future of Time",
      description:
        "Bold designs meet cutting-edge technology in our Contemporary Series. These watches push the boundaries of modern horology while maintaining exceptional quality and style.",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      productCount: 89,
      highlights: [
        "Innovative materials",
        "Smart features",
        "Modern aesthetics",
        "Technical excellence",
      ],
      cta: "Discover Modern Time",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-24 py-16 relative">
      {categories.map((category) => (
        <div key={category.name} className="">
          {/* Featured Badge */}
          {category.featured && (
            <div className="absolute top-4 left-4">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary text-sm px-3 py-1"
              >
                Featured Collection
              </Badge>
            </div>
          )}

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">
                    {category.productCount} Exclusive Pieces
                  </h4>
                  <h2 className="text-4xl font-semibold tracking-tight mb-3">
                    {category.name}
                  </h2>
                  <p className="text-xl text-muted-foreground italic">
                    {category.tagline}
                  </p>
                </div>

                <div className="prose text-muted-foreground">
                  <p>{category.description}</p>
                </div>

                {/* Quote */}
                {category.quote && (
                  <blockquote className="border-l-2 border-primary pl-6 my-8">
                    <p className="text-lg italic mb-4">{category.quote.text}</p>
                    <footer>
                      <cite className="not-italic">
                        <span className="font-medium">
                          {category.quote.author}
                        </span>
                        <span className="text-muted-foreground">
                          {" "}
                          — {category.quote.role}
                        </span>
                      </cite>
                    </footer>
                  </blockquote>
                )}

                {/* Highlights */}
                <div>
                  <h3 className="text-sm font-medium mb-4">
                    Collection Highlights
                  </h3>
                  <ul className="grid grid-cols-2 gap-3">
                    {category.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="h-1 w-1 rounded-full bg-primary mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="group w-fit mt-4">
                  {category.cta}
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative">
              {category.secondaryImage ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="aspect-[3/4] relative rounded-xl overflow-hidden mt-12">
                    <Image
                      src={category.secondaryImage}
                      alt={`${category.name} detail`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ) : (
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/5 rounded-full -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full -z-10" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
