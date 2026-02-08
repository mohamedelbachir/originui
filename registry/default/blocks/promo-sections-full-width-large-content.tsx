"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";

export default function FullWidthLargeContentPromo() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2400&auto=format&fit=crop"
          alt="Promotional background image featuring a premium tech product"
          fill
          className="h-full w-full object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0 bg-primary/60 dark:bg-primary-foreground/60 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <Badge className="mb-4 bg-primary-foreground dark:bg-primary text-primary dark:text-primary-foreground">
          Limited Edition
        </Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground dark:text-primary sm:text-5xl lg:text-6xl">
          The Ultimate Tech Companion
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-xl text-primary-foreground/80 dark:text-primary/80">
          Experience unparalleled performance and design. Pre-order now and
          receive exclusive early access benefits and a special gift.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="#">Pre-Order Now</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-primary-foreground/30 dark:border-primary/30 bg-transparent text-primary-foreground dark:text-primary hover:bg-primary-foreground/10 dark:hover:bg-primary/10 hover:text-primary-foreground dark:hover:text-primary sm:w-auto"
            asChild
          >
            <Link href="#">Learn More</Link>
          </Button>
        </div>
        <p className="mt-8 text-xs text-primary-foreground/60 dark:text-primary/60">
          Offer valid until October 31st. Terms and conditions apply.
        </p>
      </div>
    </div>
  );
}
