import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import Image from "next/image";

export default function HeroSectionWith3DMockup() {
  return (
    <>
      {/* Hero */}
      <div className="">
        <div className="relative">
          {/* Radial gradient background */}
          <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
            <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
              <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-20 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
            <div>
              <Badge variant="outline" className="mb-4">
                Next Generation UI
              </Badge>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                Transform your design workflow
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the future of UI development with our revolutionary
                design system. Build faster, smarter, and more efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button size="lg">
                  Start Building
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
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-8 border-y">
                <div>
                  <p className="text-3xl font-bold">300+</p>
                  <p className="text-sm text-muted-foreground">Components</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">2M+</p>
                  <p className="text-sm text-muted-foreground">Developers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Satisfaction</p>
                </div>
              </div>
            </div>

            {/* 3D Mockup */}
            <div className="relative">
              {/* Main Device */}
              <div className="relative z-10 rounded-xl shadow-2xl transform perspective-1200 rotate-y-[-5deg] rotate-x-[5deg] translate-z-8">
                <div className="aspect-[1440/900] bg-card rounded-xl overflow-hidden border">
                  <Image
                    src="https://placehold.co/1440x900.jpeg"
                    alt="Dashboard Preview"
                    width={1440}
                    height={900}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-muted/80 backdrop-blur rounded-t-xl flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-1/4 -right-8 z-20 w-64 transform perspective-1200 rotate-y-[-15deg] rotate-x-[5deg] translate-z-32">
                <div className="bg-card rounded-lg shadow-xl p-4 border">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10" />
                    <div className="flex-1">
                      <div className="h-2 bg-muted-foreground/20 rounded w-3/4" />
                      <div className="h-2 bg-muted-foreground/20 rounded w-1/2 mt-2" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted-foreground/20 rounded" />
                    <div className="h-2 bg-muted-foreground/20 rounded" />
                    <div className="h-2 bg-muted-foreground/20 rounded w-2/3" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-1/4 -left-8 z-20 w-48 transform perspective-1200 rotate-y-[15deg] rotate-x-[-5deg] translate-z-16">
                <div className="bg-card rounded-lg shadow-xl p-4 border">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10" />
                    <div className="w-8 h-8 rounded-lg bg-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted-foreground/20 rounded" />
                    <div className="h-2 bg-muted-foreground/20 rounded w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
