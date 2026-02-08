import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import { Trophy, Award, Star } from "lucide-react";

export default function AwardsCTA() {
  const awards = [
    {
      icon: <Trophy className="h-10 w-10 text-amber-500" />,
      title: "Product of the Year",
      organization: "SaaS Awards 2023",
      description: "Recognized for innovation and exceptional user experience.",
    },
    {
      icon: <Award className="h-10 w-10 text-blue-500" />,
      title: "Customer Support Excellence",
      organization: "CX Summit",
      description:
        "Top-rated customer support team with 98% satisfaction rate.",
    },
    {
      icon: <Star className="h-10 w-10 text-purple-500" />,
      title: "Best Enterprise Solution",
      organization: "Tech Excellence Awards",
      description: "Leading solution for enterprise-scale implementations.",
    },
  ];

  return (
    <>
      {/* Awards CTA Section */}
      <div className="py-16 md:py-24 border-t border-b">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <Badge variant="outline" className="px-3.5 py-1.5">
                Award-Winning Excellence
              </Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Industry recognition for our platform
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Our commitment to quality and innovation has earned us
                  recognition from leading industry organizations.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-lg border bg-card transition-all hover:shadow-md"
                >
                  <div className="rounded-full bg-background p-3 border mb-4">
                    {award.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{award.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {award.organization}
                  </p>
                  <p className="text-muted-foreground mb-4">
                    {award.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t">
              <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">
                    Join our award-winning platform
                  </h3>
                  <p className="text-muted-foreground">
                    Experience the quality that industry experts recognize.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="#">Start Free Trial</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="#">View Case Studies</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 hidden sm:flex items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <div className="relative h-24 w-32">
                  <Image
                    src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Award Logo 1"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative h-16 w-32">
                  <Image
                    src="https://images.unsplash.com/photo-1649180556628-9ba704115795?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Award Logo 2"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative h-20 w-32">
                  <Image
                    src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                    alt="Award Logo 3"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Awards CTA Section */}
    </>
  );
}
