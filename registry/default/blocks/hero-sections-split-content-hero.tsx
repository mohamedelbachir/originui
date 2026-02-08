import Link from "next/link";
import Image from "next/image";
import { Button } from "@/registry/default/ui/button";
import { ChevronRight, ArrowRight, Check } from "lucide-react";

export default function SplitContentHero() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left content */}
          <div className="flex flex-col space-y-4">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
              <span>New Release 2.0</span>
              <ChevronRight className="ml-1 h-3.5 w-3.5" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Transform your workflow with our platform
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our all-in-one solution helps teams collaborate, manage projects,
              and deliver exceptional results with ease.
            </p>
            <div className="flex flex-col gap-3 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#">
                  Start for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#">Book a demo</Link>
              </Button>
            </div>
            <div className="pt-4 flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground ring-2 ring-background">
                  JL
                </div>
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground ring-2 ring-background">
                  SD
                </div>
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-muted text-muted-foreground ring-2 ring-background">
                  TK
                </div>
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground ring-2 ring-background">
                  +8
                </div>
              </div>
              <div className="text-muted-foreground">
                Join 10,000+ teams using our platform
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm">No credit card required</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm">Free 14-day trial</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm">Cancel anytime</div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <div className="text-sm">24/7 customer support</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative h-[450px] w-full max-w-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Team working on digital projects"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-md bg-white/90 dark:bg-gray-800/90 backdrop-blur p-3 shadow-lg">
                    <div className="text-xs text-muted-foreground">
                      Active Projects
                    </div>
                    <div className="text-xl font-bold text-foreground">86</div>
                  </div>
                  <div className="rounded-md bg-white/90 dark:bg-gray-800/90 backdrop-blur p-3 shadow-lg">
                    <div className="text-xs text-muted-foreground">
                      Team Members
                    </div>
                    <div className="text-xl font-bold text-foreground">32</div>
                  </div>
                  <div className="rounded-md bg-white/90 dark:bg-gray-800/90 backdrop-blur p-3 shadow-lg">
                    <div className="text-xs text-muted-foreground">
                      Completion
                    </div>
                    <div className="text-xl font-bold text-foreground">92%</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl -bottom-20 -right-20"></div>
            <div className="absolute -z-10 h-[200px] w-[200px] rounded-full bg-secondary/10 blur-2xl -top-10 right-10"></div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
    </div>
  );
}
