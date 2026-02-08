"use client";

import { useState } from "react";
import { Badge } from "@/registry/default/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/default/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/default/ui/select";
import { cn } from "@/lib/utils";

export default function CircularProgress() {
  const [category, setCategory] = useState("business");

  const categories = [
    { id: "business", name: "Business" },
    { id: "technical", name: "Technical" },
    { id: "customer", name: "Customer" },
  ];

  const statsByCategory = {
    business: [
      {
        label: "Revenue Growth",
        value: 84,
        suffix: "%",
        info: "Year over year",
      },
      { label: "ROI", value: 167, suffix: "%", info: "Return on investment" },
      {
        label: "Market Share",
        value: 42,
        suffix: "%",
        info: "In primary markets",
      },
      { label: "Profit Margin", value: 23, suffix: "%", info: "Net margin" },
    ],
    technical: [
      {
        label: "System Uptime",
        value: 99.97,
        suffix: "%",
        info: "Last 30 days",
      },
      {
        label: "Load Time",
        value: 78,
        suffix: "%",
        info: "Faster than average",
      },
      { label: "Code Coverage", value: 91, suffix: "%", info: "Test coverage" },
      {
        label: "API Performance",
        value: 88,
        suffix: "%",
        info: "Response time",
      },
    ],
    customer: [
      { label: "Satisfaction", value: 94, suffix: "%", info: "Overall rating" },
      { label: "Retention", value: 87, suffix: "%", info: "Customer loyalty" },
      { label: "NPS Score", value: 72, suffix: "", info: "Net promoter score" },
      {
        label: "Support Rating",
        value: 96,
        suffix: "%",
        info: "Issue resolution",
      },
    ],
  };

  // Helper function to determine color based on value
  const getColorClass = (value: number) => {
    if (value >= 90) return "text-emerald-500";
    if (value >= 75) return "text-blue-500";
    if (value >= 50) return "text-amber-500";
    return "text-rose-500";
  };

  // SVG Circular Progress component
  const CircularProgressIndicator = ({
    value,
    size = 150,
    strokeWidth = 10,
  }: {
    value: number;
    size?: number;
    strokeWidth?: number;
  }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-gray-200 dark:text-gray-800"
        />
        {/* Foreground circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={cn(getColorClass(value))}
        />
      </svg>
    );
  };

  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  return (
    <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Performance
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl">
            Key Performance Indicators
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Visualizing our achievements across all business aspects
          </p>
        </div>

        {/* Mobile Dropdown (visible on small screens) */}
        <div className="md:hidden mb-8">
          <Select value={category} onValueChange={handleCategoryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={`select-${cat.id}`} value={cat.id}>
                  {cat.name} Metrics
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tabs for desktop with TabsContent for all views */}
        <Tabs value={category} onValueChange={setCategory} className="w-full">
          {/* Desktop Tabs (hidden on small screens) */}
          <div className="hidden md:flex justify-center mb-12">
            <TabsList>
              {categories.map((cat) => (
                <TabsTrigger key={cat.id} value={cat.id}>
                  {cat.name} Metrics
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Using TabsContent for all categories */}
          {categories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id}>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {statsByCategory[cat.id as keyof typeof statsByCategory].map(
                  (stat, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-6 rounded-xl border bg-card"
                    >
                      <div className="relative flex items-center justify-center mb-4">
                        <CircularProgressIndicator
                          value={stat.value}
                          size={120} // Smaller on mobile, will scale up with container
                        />
                        <div className="absolute flex flex-col items-center justify-center">
                          <span
                            className={cn(
                              "text-2xl md:text-3xl font-bold",
                              getColorClass(stat.value)
                            )}
                          >
                            {stat.value}
                            {stat.suffix}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-center">
                        {stat.label}
                      </h3>
                      <p className="mt-1 text-xs md:text-sm text-muted-foreground text-center">
                        {stat.info}
                      </p>
                    </div>
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
