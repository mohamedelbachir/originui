import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import Image from "next/image";

export default function HeroSectionWithProductScreenshots() {
  return (
    <>
      {/* Hero */}
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        <div className="relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              New Features Released
            </Badge>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              Design faster than ever
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our intuitive interface and powerful components help you build
              beautiful websites in record time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg">
                Try it Free
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>
          </div>

          {/* Screenshots Grid */}
          <div className="relative">
            {/* Main Screenshot */}
            <div className="rounded-xl border bg-card shadow-2xl">
              <Image
                src="https://placehold.co/1200x600.jpeg"
                alt="Dashboard Screenshot"
                width={1200}
                height={600}
                className="rounded-xl"
              />
            </div>

            {/* Floating Screenshots */}
            <div className="absolute -right-8 -top-12 w-72 rotate-3 transform hover:rotate-0 transition-transform duration-300">
              <div className="rounded-lg border bg-card shadow-lg">
                <Image
                  src="https://placehold.co/300x200.jpeg"
                  alt="Feature Screenshot 1"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div className="absolute -left-8 top-1/4 w-64 -rotate-3 transform hover:rotate-0 transition-transform duration-300">
              <div className="rounded-lg border bg-card shadow-lg">
                <Image
                  src="https://placehold.co/300x200.jpeg"
                  alt="Feature Screenshot 2"
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="grid sm:grid-cols-3 gap-8 mt-16">
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Easy to Use</h3>
                <p className="text-sm text-muted-foreground">
                  Intuitive interface that anyone can use
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for speed and performance
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Global CDN</h3>
                <p className="text-sm text-muted-foreground">
                  Deployed worldwide for fast access
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
