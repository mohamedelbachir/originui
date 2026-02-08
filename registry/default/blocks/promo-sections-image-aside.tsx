import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";

export default function ImageAsidePromo() {
  return (
    <div className="overflow-hidden bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          {/* Image Section */}
          <div className="px-6 md:px-0 lg:pr-4 lg:pt-4">
            <div className="relative mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1000&auto=format&fit=crop"
                  alt="Aerial view from a drone flying above mountains"
                  width={1000}
                  height={800}
                  className="object-cover"
                />
              </div>
              {/* Decorative Shape */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-primary/10"
                aria-hidden="true"
              />
              {/* Background Gradient */}
              <svg
                viewBox="0 0 1090 1090"
                aria-hidden="true"
                className="absolute -top-10 left-1/2 -z-10 h-[68.125rem] w-[68.125rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              >
                <ellipse
                  cx={545}
                  cy={545}
                  rx={545}
                  ry={545}
                  fill="url(#drone-promo-gradient)"
                  fillOpacity="0.3"
                />
                <defs>
                  <radialGradient id="drone-promo-gradient">
                    <stop stopColor="hsl(var(--primary))" />
                    <stop offset={1} stopColor="hsl(var(--accent))" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-6 md:px-0 lg:pl-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <Badge variant="default" className="mb-2">
                New Technology
              </Badge>
              <h2 className="text-base font-semibold leading-7 text-primary">
                Capture Stunning Views
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Aerial Photography Drone
              </p>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Elevate your content with breathtaking aerial shots. Our latest
                drone features a 4K camera, intelligent flight modes, and
                extended battery life for the ultimate creative freedom.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-muted-foreground lg:max-w-none">
                <div className="relative">
                  <dt className="inline font-semibold text-foreground">
                    4K HDR Video:
                  </dt>{" "}
                  <dd className="inline">
                    Capture cinematic footage with incredible detail and dynamic
                    range.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="inline font-semibold text-foreground">
                    Obstacle Avoidance:
                  </dt>{" "}
                  <dd className="inline">
                    Fly with confidence thanks to advanced sensors on all sides.
                  </dd>
                </div>
                <div className="relative">
                  <dt className="inline font-semibold text-foreground">
                    30-Min Flight Time:
                  </dt>{" "}
                  <dd className="inline">
                    Spend more time in the air and less time charging.
                  </dd>
                </div>
              </dl>
              <div className="mt-10 flex flex-col items-center gap-x-6 gap-y-3 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="#">Explore the Drone</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#">Watch Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
