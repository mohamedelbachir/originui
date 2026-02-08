import Link from "next/link";
import { Button } from "@/registry/default/ui/button";

export default function SimpleBannerPromo() {
  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-primary-foreground/80">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex lg:ml-4 lg:mt-0 lg:flex-shrink-0">
          <Button size="lg" variant="secondary" asChild>
            <Link href="#">Get started</Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            asChild
            className="ml-3 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground"
          >
            <Link href="#">Learn more</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
