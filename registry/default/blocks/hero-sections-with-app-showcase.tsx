import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import { Card } from "@/registry/default/ui/card";
import Image from "next/image";

{
  /* Add this to the global css file
@keyframes float {
    0% {
    transform: translateY(0px);
    }
    50% {
    transform: translateY(-10px);
    }
    100% {
    transform: translateY(0px);
    }
}
@keyframes float-slow {
    0% {
    transform: translateY(0px);
    }
    50% {
    transform: translateY(-15px);
    }
    100% {
    transform: translateY(0px);
    }
}
.animate-float {
    animation: float 3s ease-in-out infinite;
}
.animate-float-slow {
    animation: float-slow 4s ease-in-out infinite;
}
*/
}

export default function HeroSectionWithAppShowcase() {
  return (
    <>
      {/* Hero */}
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
        <div className="relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">
              Cross-Platform App
            </Badge>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              Your app, everywhere
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build beautiful, responsive applications that work seamlessly
              across all devices and platforms.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
              <Button size="lg">
                Download Now
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
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>

            {/* Platform Support */}
            <div className="flex items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span className="text-sm">Desktop</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12" y2="18" />
                </svg>
                <span className="text-sm">Mobile</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 11a9 9 0 0 1 9 9" />
                  <path d="M4 4a16 16 0 0 1 16 16" />
                  <circle cx="5" cy="19" r="1" />
                </svg>
                <span className="text-sm">Web</span>
              </div>
            </div>
          </div>

          {/* Device Showcase */}
          <div className="relative max-w-5xl mx-auto">
            {/* Desktop */}
            <Card className="overflow-hidden border-2 shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              <div className="aspect-[16/9] bg-muted">
                <Image
                  src="https://placehold.co/1920x1080.jpeg"
                  alt="Desktop App"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            {/* Mobile */}
            <Card className="absolute -right-8 top-1/2 w-72 overflow-hidden border-2 shadow-2xl">
              <div className="flex items-center justify-center py-3 bg-muted border-b">
                <div className="w-16 h-4 rounded-full bg-muted-foreground/20" />
              </div>
              <div className="aspect-[9/16] bg-muted">
                <Image
                  src="https://placehold.co/1080x1920.jpeg"
                  alt="Mobile App"
                  width={1080}
                  height={1920}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            {/* Tablet */}
            <Card className="absolute -left-8 top-1/4 w-80 overflow-hidden border-2 shadow-2xl rotate-[-8deg]">
              <div className="aspect-[4/3] bg-muted">
                <Image
                  src="https://placehold.co/1024x768.jpeg"
                  alt="Tablet App"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            {/* Feature Highlights */}
            <div className="absolute top-0 right-0 flex gap-4">
              <Card className="p-4 w-48 animate-float-slow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <p className="font-medium">Responsive</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Adapts perfectly to any screen size
                </p>
              </Card>
            </div>

            <div className="absolute bottom-0 left-0 flex gap-4">
              <Card className="p-4 w-48 animate-float">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    </svg>
                  </div>
                  <p className="font-medium">Modern UI</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Beautiful and intuitive design
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
