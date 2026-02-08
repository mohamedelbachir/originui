import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import { Check } from "lucide-react";

export default function InteractiveFeatureTabs() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="space-y-2 max-w-[800px]">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
              Premium Quality
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Discover the exceptional features
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Our products combine craftsmanship, innovation, and sustainable
              materials to create something truly special.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="materials" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-lg grid-cols-3">
                <TabsTrigger value="materials">Materials</TabsTrigger>
                <TabsTrigger value="craftsmanship">Craftsmanship</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="materials" className="space-y-6">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">
                    Premium quality materials
                  </h3>
                  <p className="text-muted-foreground">
                    We source the finest materials from around the world to
                    ensure exceptional quality and durability.
                  </p>

                  <ul className="space-y-3 pt-4">
                    {[
                      "Full-grain Italian leather",
                      "Durable water-resistant canvas",
                      "Military-grade YKK zippers",
                      "Anti-microbial inner lining",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button asChild>
                      <Link href="#">Shop premium collection</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border bg-background shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=2080&auto=format&fit=crop"
                    alt="Premium leather materials"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="craftsmanship" className="space-y-6">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">
                    Artisanal craftsmanship
                  </h3>
                  <p className="text-muted-foreground">
                    Each product is handcrafted by skilled artisans with decades
                    of experience and attention to detail.
                  </p>

                  <ul className="space-y-3 pt-4">
                    {[
                      "Hand-stitched details",
                      "Edge painting technique",
                      "Custom hardware finishing",
                      "Multi-stage quality inspection",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button asChild>
                      <Link href="#">Learn about our process</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border bg-background shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1503560683205-acf61ac68a3b?q=80&w=2070&auto=format&fit=crop"
                    alt="Artisan crafting a leather product"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sustainability" className="space-y-6">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">Sustainable practices</h3>
                  <p className="text-muted-foreground">
                    We&apos;re committed to ethical manufacturing and
                    environmental responsibility in everything we create.
                  </p>

                  <ul className="space-y-3 pt-4">
                    {[
                      "Vegetable-tanned leather",
                      "Recycled packaging materials",
                      "Carbon-neutral shipping",
                      "1% for the Planet member",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-3 w-3 text-primary" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button asChild>
                      <Link href="#">Explore our impact</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden border bg-background shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1564419320461-6870880221ad?q=80&w=2069&auto=format&fit=crop"
                    alt="Sustainable manufacturing practices"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center rounded-lg border bg-background px-4 py-2">
            <span className="text-sm text-muted-foreground">
              Looking for more details?
            </span>
            <Button variant="link" asChild className="h-auto p-0 pl-1">
              <Link href="#">View product specifications</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
