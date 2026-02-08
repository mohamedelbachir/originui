import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Sparkles } from "lucide-react";

export default function GradientCTA() {
  return (
    <>
      {/* Gradient CTA Section */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-background"></div>
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-full bg-background/80 backdrop-blur-sm px-3 py-1 border shadow-sm">
              <div className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-medium">
                  New Features Available
                </span>
              </div>
            </div>
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Elevate your experience with our premium plan
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get access to advanced features, priority support, and powerful
                integrations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" className="shadow-md" asChild>
                <Link href="#">Upgrade Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/80 backdrop-blur-sm shadow-sm"
                asChild
              >
                <Link href="#">Compare Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* End Gradient CTA Section */}
    </>
  );
}
