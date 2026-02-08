import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Timer,
  Smartphone,
  Zap,
  Droplet,
  Activity,
} from "lucide-react";
import { Badge } from "@/registry/default/ui/badge";
import { Button } from "@/registry/default/ui/button";
import { cn } from "@/lib/utils";

export default function FeatureTimeline() {
  const features = [
    {
      id: 1,
      title: "Advanced Health Monitoring",
      description:
        "Continuous heart rate tracking with abnormality alerts, blood oxygen saturation measurement, and stress level analysis with guided breathing exercises.",
      icon: <Heart className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?q=80&w=2070&auto=format&fit=crop",
      color: "bg-rose-50 text-rose-600 dark:bg-rose-950/20 dark:text-rose-400",
      position: "left",
      stats: [
        { value: "24/7", label: "Monitoring" },
        { value: "±1%", label: "Accuracy" },
        { value: "5min", label: "Intervals" },
      ],
    },
    {
      id: 2,
      title: "7-Day Battery Life",
      description:
        "Intelligent power management with smart display and processor optimization delivers a full week of use on a single charge, even with always-on display and activity tracking.",
      icon: <Zap className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop",
      color:
        "bg-amber-50 text-amber-600 dark:bg-amber-950/20 dark:text-amber-400",
      position: "right",
      stats: [
        { value: "7", label: "Days" },
        { value: "45min", label: "Full Charge" },
        { value: "2hrs", label: "Quick Charge" },
      ],
    },
    {
      id: 3,
      title: "Workout Intelligence",
      description:
        "Automatically detects 12 different exercise types and provides detailed metrics including cadence, pace, heart rate zones, and calories burned with personalized insights.",
      icon: <Activity className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=2070&auto=format&fit=crop",
      color:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20 dark:text-emerald-400",
      position: "left",
      stats: [
        { value: "12", label: "Activities" },
        { value: "30+", label: "Metrics" },
        { value: "GPS", label: "Tracking" },
      ],
    },
    {
      id: 4,
      title: "Smart Notifications",
      description:
        "Seamlessly receive and respond to messages, calls, and app notifications, with customizable quick replies and voice-to-text input for instant responses.",
      icon: <Smartphone className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?q=80&w=2065&auto=format&fit=crop",
      color: "bg-blue-50 text-blue-600 dark:bg-blue-950/20 dark:text-blue-400",
      position: "right",
      stats: [
        { value: "All", label: "Apps" },
        { value: "Quick", label: "Replies" },
        { value: "Voice", label: "Input" },
      ],
    },
    {
      id: 5,
      title: "50m Water Resistance",
      description:
        "Fully waterproof design suitable for swimming, showering, and water sports. Automatically tracks swim metrics including laps, pace, and stroke type.",
      icon: <Droplet className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=2024&auto=format&fit=crop",
      color: "bg-cyan-50 text-cyan-600 dark:bg-cyan-950/20 dark:text-cyan-400",
      position: "left",
      stats: [
        { value: "50m", label: "Depth" },
        { value: "5ATM", label: "Rating" },
        { value: "Swim", label: "Tracking" },
      ],
    },
    {
      id: 6,
      title: "Sleep Insights",
      description:
        "Advanced sleep stage tracking differentiates between light, deep, and REM sleep phases, providing detailed analysis and personalized recommendations for better rest.",
      icon: <Timer className="h-5 w-5" />,
      image:
        "https://images.unsplash.com/photo-1531353826977-0941b4779a1c?q=80&w=2070&auto=format&fit=crop",
      color:
        "bg-purple-50 text-purple-600 dark:bg-purple-950/20 dark:text-purple-400",
      position: "right",
      stats: [
        { value: "3", label: "Sleep Stages" },
        { value: "Daily", label: "Score" },
        { value: "Smart", label: "Alarm" },
      ],
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 md:mb-20">
          <Badge className="px-3.5 py-1.5">Smart Innovation</Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Your life at a glance
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed max-w-[700px]">
            Our smartwatch combines cutting-edge technology with elegant design
            to help you stay connected, healthy, and productive.
          </p>
        </div>

        {/* Main product image */}
        <div className="flex justify-center mb-20">
          <div className="relative w-full max-w-md aspect-square rounded-xl overflow-hidden border shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1617043786394-f977fa12eddf?q=80&w=1974&auto=format&fit=crop"
              alt="SmartWatch Pro X2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <Badge variant="secondary" className="mb-2">
                  New Release
                </Badge>
                <h3 className="text-2xl font-semibold">SmartWatch Pro X2</h3>
                <p className="text-white/80 mt-1">Intelligence on your wrist</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline features */}
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={cn(
                "relative mb-16 md:mb-24 scroll-reveal opacity-100 transition-all duration-700",
                index % 2 === 0 ? "md:ml-0" : "md:mr-0"
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex h-8 w-8 rounded-full border-4 border-background bg-primary items-center justify-center z-10">
                <span className="text-xs font-bold text-primary-foreground">
                  {feature.id}
                </span>
              </div>

              <div
                className={cn(
                  "grid md:grid-cols-2 gap-8 items-center",
                  feature.position === "right" ? "md:grid-flow-row-dense" : ""
                )}
              >
                {/* Feature image */}
                <div
                  className={cn(
                    "rounded-xl overflow-hidden border shadow",
                    feature.position === "left"
                      ? "md:col-start-1"
                      : "md:col-start-2"
                  )}
                >
                  <div className="relative aspect-video">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>

                {/* Feature content */}
                <div
                  className={cn(
                    "space-y-6",
                    feature.position === "left"
                      ? "md:col-start-2"
                      : "md:col-start-1",
                    "flex flex-col justify-center"
                  )}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                        feature.color
                      )}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>

                  <p className="text-muted-foreground">{feature.description}</p>

                  {/* Feature stats */}
                  <div className="flex space-x-6">
                    {feature.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold">{stat.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className={cn(
                      "w-fit",
                      feature.position === "right" ? "md:self-end" : ""
                    )}
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-24 max-w-2xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Ready to experience the future?
            </h3>
            <p className="text-muted-foreground">
              The SmartWatch Pro X2 comes with a 45-day satisfaction guarantee
              and 2-year warranty. Available in three elegant finishes: Midnight
              Black, Silver Frost, and Rose Gold.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="#">
                Pre-order Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">View Full Specifications</Link>
            </Button>
          </div>

          <div className="pt-6">
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                <span>Fast Charging</span>
              </div>
              <div className="flex items-center">
                <Droplet className="mr-2 h-5 w-5 text-primary" />
                <span>Water Resistant</span>
              </div>
              <div className="flex items-center">
                <Heart className="mr-2 h-5 w-5 text-primary" />
                <span>Health Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
