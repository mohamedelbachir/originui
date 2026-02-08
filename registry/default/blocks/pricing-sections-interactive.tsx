"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import { Slider } from "@/registry/default/ui/slider";
import { Badge } from "@/registry/default/ui/badge";
import { CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

// Pricing tiers
const tiers = [
  {
    name: "Starter",
    basePrice: 29,
    pricePerUser: 9,
    features: [
      "All core features",
      "Up to 10 projects",
      "5GB storage per user",
      "Basic analytics",
      "Email support",
    ],
    recommended: false,
  },
  {
    name: "Business",
    basePrice: 99,
    pricePerUser: 7,
    features: [
      "All Starter features",
      "Unlimited projects",
      "20GB storage per user",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom domains",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    basePrice: 299,
    pricePerUser: 5,
    features: [
      "All Business features",
      "Unlimited projects",
      "50GB storage per user",
      "Advanced analytics",
      "24/7 phone support",
      "API access",
      "Custom domains",
      "SSO authentication",
      "Custom integrations",
      "Dedicated account manager",
    ],
    recommended: false,
  },
];

export default function PricingSectionInteractive() {
  const [userCount, setUserCount] = useState(5);

  // Calculate prices based on user count
  const calculatePrice = (basePrice: number, pricePerUser: number) => {
    return basePrice + pricePerUser * userCount;
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Scale your pricing with your team
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Our flexible pricing adapts to your team size. Choose the plan
              that works best for you.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Team Size</h3>
              <div className="flex items-center rounded-full bg-primary/10 px-3 py-1">
                <span className="text-xl font-bold text-primary">
                  {userCount}
                </span>
                <span className="ml-1 text-sm text-muted-foreground">
                  users
                </span>
              </div>
            </div>
            <Slider
              defaultValue={[5]}
              max={50}
              min={1}
              step={1}
              onValueChange={(value) => setUserCount(value[0])}
              className="py-4"
            />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>1 user</span>
              <span>25 users</span>
              <span>50 users</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
          {tiers.map((tier) => {
            const price = calculatePrice(tier.basePrice, tier.pricePerUser);
            return (
              <Card
                key={tier.name}
                className={cn(
                  "flex flex-col relative",
                  tier.recommended && "border-primary shadow-md"
                )}
              >
                {tier.recommended && (
                  <Badge
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2"
                    variant="default"
                  >
                    Recommended
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold">${price}</span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      /month
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    ${tier.basePrice} base + ${tier.pricePerUser} per user
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-sm">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={tier.recommended ? "default" : "outline"}
                    asChild
                  >
                    <Link href="/signup">Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="mt-2 text-sm">
            Need more than 50 users?{" "}
            <Link
              href="/contact"
              className="text-primary underline underline-offset-4"
            >
              Contact our sales team
            </Link>{" "}
            for a custom quote.
          </p>
        </div>
      </div>
    </section>
  );
}
