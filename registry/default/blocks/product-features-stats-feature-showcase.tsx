import Image from "next/image";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Badge } from "@/registry/default/ui/badge";
import { ArrowRight, Clock, Battery, Zap, Shield } from "lucide-react";

export default function StatsFeatureShowcase() {
  const keyStats = [
    {
      value: "24h",
      label: "Battery Life",
      description: "Full day of use on a single charge",
      icon: <Battery className="h-6 w-6" />,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      value: "95%",
      label: "Accuracy Rate",
      description: "Precision tracking of health metrics",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-amber-500/10 text-amber-500",
    },
    {
      value: "5ATM",
      label: "Water Resistance",
      description: "Suitable for swimming and showers",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-emerald-500/10 text-emerald-500",
    },
    {
      value: "2x",
      label: "Processing Speed",
      description: "Faster than previous generation",
      icon: <Clock className="h-6 w-6" />,
      color: "bg-purple-500/10 text-purple-500",
    },
  ];

  const features = [
    {
      title: "Advanced Health Monitoring",
      description:
        "Track blood oxygen, ECG, heart rate variability, and sleep patterns with clinical-grade accuracy. Our advanced algorithms provide personalized insights and early warning signs.",
      stats: [
        { label: "Sensors", value: "12" },
        { label: "Measurements/day", value: "1,440" },
        { label: "Accuracy", value: "98.7%" },
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      alt: "Health monitoring dashboard with statistics",
    },
    {
      title: "Smart Connectivity",
      description:
        "Seamlessly connect to your smartphone and smart home devices. Control music, respond to messages, make payments, and manage your connected devices right from your wrist.",
      stats: [
        { label: "Compatible Apps", value: "200+" },
        { label: "Response Time", value: "<100ms" },
        { label: "Device Range", value: "30m" },
      ],
      image:
        "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=2065&auto=format&fit=crop",
      alt: "Smart device connectivity illustration",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <Badge className="px-3.5 py-1.5">Performance Metrics</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Technology that delivers measurable results
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed max-w-[800px]">
            Our smartwatch combines cutting-edge technology with precision
            engineering to provide industry-leading performance in every
            category.
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
          {keyStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 rounded-xl border"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.color} mb-3`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="font-medium">{stat.label}</div>
              <p className="text-sm text-muted-foreground mt-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Comparison */}
        <div className="relative mt-24 p-4 sm:p-10 rounded-xl border bg-muted/30 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-primary/10 rounded-full blur-3xl"></div>

          <div className="relative grid gap-8 md:grid-cols-2 items-center">
            <div className="flex flex-col space-y-6">
              <div className="space-y-2">
                <Badge variant="outline">Industry Comparison</Badge>
                <h3 className="text-2xl font-bold tracking-tight">
                  How we compare to competitors
                </h3>
                <p className="text-muted-foreground">
                  Our technology consistently outperforms other devices in key
                  performance metrics.
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Battery Life</span>
                    <span className="text-muted-foreground">
                      24 hours vs. industry avg. 18 hours
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "133%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Sensor Accuracy</span>
                    <span className="text-muted-foreground">
                      98.7% vs. industry avg. 94%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "105%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Processing Power</span>
                    <span className="text-muted-foreground">
                      2x faster than industry avg.
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: "200%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="outline" asChild>
                  <Link href="#">View Full Comparison</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden border bg-background">
              <Image
                src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2070&auto=format&fit=crop"
                alt="Smartwatch performance comparison"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <p className="text-sm font-medium">
                    Independently verified by TechLabs Research, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Feature Sections */}
        <div className="mt-24 space-y-24">
          {features.map((feature, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div
                className={`order-2 ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div
                className={`order-1 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {feature.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="text-center p-3 rounded-lg border bg-card"
                      >
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
            Limited Time Offer
          </div>
          <h3 className="text-2xl font-bold">
            Experience the difference yourself
          </h3>
          <p className="mt-2 text-muted-foreground max-w-[600px] mx-auto">
            Try our smartwatch for 30 days with a money-back guarantee if
            you&apos;re not completely satisfied.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild>
              <Link href="#">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
