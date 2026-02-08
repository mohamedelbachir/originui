"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Card } from "@/registry/default/ui/card";

export default function CountdownTimerCTA() {
  // Set end date to 7 days from now for demo purposes
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Demo countdown timer
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Countdown Timer CTA Section */}
      <div className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Limited Time Offer
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Special Launch Discount
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Get 50% off our premium plan for a limited time. Act fast before
                this offer expires!
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="flex gap-4 mt-8">
              <Card className="p-4 text-center w-20">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-xs text-muted-foreground uppercase">
                  Days
                </div>
              </Card>
              <Card className="p-4 text-center w-20">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs text-muted-foreground uppercase">
                  Hours
                </div>
              </Card>
              <Card className="p-4 text-center w-20">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs text-muted-foreground uppercase">
                  Minutes
                </div>
              </Card>
              <Card className="p-4 text-center w-20">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs text-muted-foreground uppercase">
                  Seconds
                </div>
              </Card>
            </div>

            <div className="pt-6">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                asChild
              >
                <Link href="#">Claim Your Discount</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Use code <span className="font-bold">LAUNCH50</span> at checkout
            </p>
          </div>
        </div>
      </div>
      {/* End Countdown Timer CTA Section */}
    </>
  );
}
