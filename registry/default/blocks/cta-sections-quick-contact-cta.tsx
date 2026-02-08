"use client";

import Link from "next/link";
import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Label } from "@/registry/default/ui/label";
import { Textarea } from "@/registry/default/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { ArrowRight, Calendar, Mail, MessageCircle, Phone } from "lucide-react";

export default function QuickContactCTA() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
  };

  return (
    <>
      {/* Quick Contact CTA Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
          <div className="rounded-xl border overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="bg-primary p-8 md:p-12 text-primary-foreground">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Let&apos;s connect
                  </h2>
                  <p className="md:text-lg">
                    Have a question or ready to start your project? We&apos;re
                    here to help you find the perfect solution.
                  </p>
                </div>
                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <p className="text-primary-foreground/80 text-sm">
                        For general inquiries or support requests.
                      </p>
                      <Link
                        href="mailto:hello@example.com"
                        className="mt-1 inline-flex text-sm font-medium hover:underline"
                      >
                        hello@example.com
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-6 w-6 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-primary-foreground/80 text-sm">
                        Speak directly with a member of our team.
                      </p>
                      <Link
                        href="tel:+1234567890"
                        className="mt-1 inline-flex text-sm font-medium hover:underline"
                      >
                        +1 (234) 567-890
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="h-6 w-6 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Live Chat</h3>
                      <p className="text-primary-foreground/80 text-sm">
                        Chat with our support team in real-time.
                      </p>
                      <Link
                        href="#"
                        className="mt-1 inline-flex text-sm font-medium hover:underline"
                      >
                        Start a chat
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 mt-0.5 shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Book a Demo</h3>
                      <p className="text-primary-foreground/80 text-sm">
                        Schedule a personalized product demonstration.
                      </p>
                      <Link
                        href="#"
                        className="mt-1 inline-flex text-sm font-medium hover:underline"
                      >
                        Schedule now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Send us a message</h3>
                    <p className="text-muted-foreground">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger id="subject">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="demo">Request a Demo</SelectItem>
                        <SelectItem value="billing">
                          Billing Question
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <Link
                      href="#"
                      className="underline underline-offset-2 hover:text-primary"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Quick Contact CTA Section */}
    </>
  );
}
