"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { ArrowRight } from "lucide-react";

export default function AnimatedTextHero() {
  const [typedText, setTypedText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = [
    "innovative solutions",
    "creative workflows",
    "powerful analytics",
    "seamless experiences",
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 1500;

    const currentPhrase = phrases[currentPhraseIndex];

    // Handle typing, pausing, and deleting
    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentPhrase) {
        // Finished typing, wait before starting to delete
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      } else if (isDeleting && typedText === "") {
        // Finished deleting, move to next phrase
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        return;
      }

      // Either typing or deleting
      setTypedText((prev) => {
        if (isDeleting) {
          return prev.substring(0, prev.length - 1);
        } else {
          return currentPhrase.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, phrases]);

  return (
    <div className="relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Empower your team with{" "}
              <span className="relative inline-flex overflow-hidden">
                <span className="text-primary">{typedText}</span>
                <span className="absolute right-0 w-[2px] h-full bg-primary animate-pulse"></span>
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground dark:text-muted-foreground/90 md:text-xl">
              Our platform helps teams work smarter, not harder. Streamline your
              workflow, boost productivity, and deliver exceptional results.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <Button size="lg" className="w-full" asChild>
              <Link href="#">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full dark:border-gray-700"
              asChild
            >
              <Link href="#">Book a Demo</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-3xl">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold text-foreground">10k+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold text-foreground">200+</div>
              <div className="text-sm text-muted-foreground">
                Enterprise Clients
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent"></div>
    </div>
  );
}
