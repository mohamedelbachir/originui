import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { QuoteIcon } from "lucide-react";

export default function CTAWithTestimonial() {
  return (
    <>
      {/* CTA with Testimonial Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join thousands of satisfied customers
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Our platform has helped businesses of all sizes achieve their
                goals. Start your journey today and see the difference.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="#">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="#">View Case Studies</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative rounded-xl border bg-background p-6 shadow-sm">
                <QuoteIcon className="h-10 w-10 text-primary/20 absolute top-4 left-4" />
                <blockquote className="space-y-2">
                  <p className="text-lg font-medium leading-relaxed text-foreground pl-6 pt-4">
                    &ldquo;This platform has completely transformed how we
                    operate. We&apos;ve seen a 40% increase in productivity and
                    our customers love the results.&rdquo;
                  </p>
                  <footer className="flex items-center gap-4 pt-4 border-t">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                        alt="Sarah Johnson, CEO"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Sarah Johnson
                      </p>
                      <p className="text-sm text-muted-foreground">
                        CEO, TechInnovate
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End CTA with Testimonial Section */}
    </>
  );
}
