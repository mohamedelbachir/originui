"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";

const categories = [
  {
    id: "general",
    label: "General",
  },
  {
    id: "billing",
    label: "Billing & Pricing",
  },
  {
    id: "support",
    label: "Support & Help",
  },
  {
    id: "features",
    label: "Features",
  },
];

const faqsByCategory = {
  general: [
    {
      question: "What is Acme and how does it work?",
      answer:
        "Acme is a comprehensive platform designed to help teams collaborate more efficiently. Our tools integrate seamlessly with your existing workflow, providing powerful features without the complexity.",
    },
    {
      question: "Is Acme suitable for individual users?",
      answer:
        "Absolutely! While Acme is great for teams, many of our features are perfect for individual users looking to boost their productivity and organization.",
    },
    {
      question: "Can I use Acme on multiple devices?",
      answer:
        "Yes, Acme works across all your devices. Your data syncs automatically, so you can switch between desktop, mobile, and tablet seamlessly.",
    },
  ],
  billing: [
    {
      question: "How much does Acme cost?",
      answer:
        "Acme offers flexible pricing options starting from $10/month for individual users and $25/month for teams. We also offer custom enterprise plans for larger organizations.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, all plans come with a 14-day free trial, no credit card required. You can explore all features before deciding which plan works best for you.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "You can upgrade, downgrade, or cancel your plan at any time. Changes to your subscription will take effect at the next billing cycle.",
    },
  ],
  support: [
    {
      question: "How can I contact support?",
      answer:
        "Our support team is available 24/7 via email and chat. Premium plans also include priority support and dedicated account managers.",
    },
    {
      question: "Do you offer onboarding assistance?",
      answer:
        "Yes, all plans include basic onboarding resources. Team and Enterprise plans include personalized onboarding sessions with our customer success team.",
    },
    {
      question: "Where can I find documentation?",
      answer:
        "Comprehensive documentation is available in our Help Center. We also provide video tutorials and regular webinars for users who prefer visual learning.",
    },
  ],
  features: [
    {
      question: "What integrations does Acme offer?",
      answer:
        "Acme integrates with over 50 popular tools including Slack, GitHub, Trello, and Zoom. We're constantly adding new integrations based on user feedback.",
    },
    {
      question: "Is there a limit to how many projects I can create?",
      answer:
        "No, all plans include unlimited projects. The only limitation is on the number of team members who can access those projects, which varies by plan.",
    },
    {
      question: "Can I export my data from Acme?",
      answer:
        "Yes, you can export all your data at any time in common formats like CSV, JSON, or PDF. We believe your data belongs to you and make it easy to take it with you.",
    },
  ],
};

export default function TabbedCategories() {
  const [activeCategory, setActiveCategory] = useState("general");

  return (
    <div className="max-w-[85rem] container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-muted-foreground">
          Everything you need to know about our product and billing
        </p>
      </div>
      {/* End Title */}

      <div className="max-w-4xl mx-auto">
        {/* Tabs for larger screens */}
        <div className="hidden md:flex border-b mb-8 space-x-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "pb-4 px-1 font-medium relative",
                activeCategory === category.id
                  ? "text-primary border-b-2 border-primary -mb-px"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Dropdown for mobile */}
        <div className="md:hidden mb-8">
          <Select value={activeCategory} onValueChange={setActiveCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* FAQ Content */}
        <div className="space-y-8">
          {faqsByCategory[activeCategory as keyof typeof faqsByCategory].map(
            (faq, index) => (
              <div key={index} className="border-b pb-8 last:border-0">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
