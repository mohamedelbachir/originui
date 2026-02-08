import { Button } from "@/registry/default/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Customer-Centric",
    description:
      "We place our customers at the center of everything we do, designing products and services that solve real problems and create lasting value.",
  },
  {
    number: "02",
    title: "Innovation-Driven",
    description:
      "We continuously explore new ideas and technologies to push boundaries and create better solutions for evolving challenges.",
  },
  {
    number: "03",
    title: "Quality-Focused",
    description:
      "We are committed to excellence in every aspect of our work, from the products we build to the experiences we create and the support we provide.",
  },
  {
    number: "04",
    title: "Inclusive by Design",
    description:
      "We embrace diversity of thought, background, and perspective, creating solutions that work for everyone and building teams that reflect the communities we serve.",
  },
];

export default function AboutSectionMissionStatement() {
  return (
    <section className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="space-y-8">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Our Mission
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
            To empower people through technology that&apos;s intuitive,
            accessible, and transformative.
          </h2>

          <p className="text-xl text-muted-foreground">
            We believe technology should serve humanity, not the other way
            around. Our mission drives us to create solutions that enhance
            people&apos;s lives, expand their capabilities, and help them
            achieve their goals.
          </p>

          <div className="pt-2">
            <Button asChild className="group">
              <Link href="#" className="inline-flex items-center">
                See our impact
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className="relative border rounded-lg p-6 transition-colors hover:bg-accent/50"
            >
              <div className="text-3xl font-bold text-primary/20 absolute right-4 top-4">
                {principle.number}
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-xl">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 bg-accent rounded-lg p-8 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground mb-4">
              We envision a world where technology enhances human potential,
              enabling everyone to achieve more, connect meaningfully, and
              contribute to a better future. We strive to be the company that
              makes this vision a reality through thoughtful innovation and an
              unwavering commitment to our core principles.
            </p>
          </div>
          <div className="lg:col-span-1 flex justify-center lg:justify-end">
            <Button asChild size="lg" variant="outline" className="group">
              <Link href="#" className="inline-flex items-center">
                View our strategy
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
