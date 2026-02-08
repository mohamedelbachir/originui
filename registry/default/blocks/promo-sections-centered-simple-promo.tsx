import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";

export default function CenteredSimplePromo() {
  return (
    <div className="relative isolate overflow-hidden bg-background py-16 sm:py-24">
      {/* Background Pattern */}
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#gradient-pattern)"
          fillOpacity="0.2"
        />
        <defs>
          <radialGradient id="gradient-pattern">
            <stop stopColor="hsl(var(--primary))" />
            <stop offset={1} stopColor="hsl(var(--accent))" />
          </radialGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-4">
          Exclusive Access
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Join Our VIP Club
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
          Be the first to know about new arrivals, exclusive sales, and special
          events. Sign up today and receive a 15% discount on your next order.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" asChild>
            <Link href="#">Sign Up Now</Link>
          </Button>
          <Button size="lg" variant="ghost" asChild>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          By signing up, you agree to our Terms & Conditions.
        </p>
      </div>
    </div>
  );
}
