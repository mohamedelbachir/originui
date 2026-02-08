"use client";

import { Badge } from "@/registry/default/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  ChevronUp,
  ChevronDown,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ComparisonStats() {
  const stats = [
    {
      title: "Revenue",
      current: "$348,245",
      previous: "$298,129",
      change: 16.8,
      timeframe: "vs. last quarter",
      trend: "up",
    },
    {
      title: "New Customers",
      current: "2,427",
      previous: "2,184",
      change: 11.1,
      timeframe: "vs. last quarter",
      trend: "up",
    },
    {
      title: "Average Order Value",
      current: "$143.80",
      previous: "$132.40",
      change: 8.6,
      timeframe: "vs. last quarter",
      trend: "up",
    },
    {
      title: "Refund Rate",
      current: "2.1%",
      previous: "2.8%",
      change: -25.0,
      timeframe: "vs. last quarter",
      trend: "down", // Down is good for refund rate
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="lg:w-1/3">
            <div className="sticky top-20">
              <Badge className="mb-4">Q3 2023</Badge>
              <h2 className="text-3xl font-bold lg:text-4xl">
                Quarterly Business Review
              </h2>
              <p className="mt-4 text-muted-foreground">
                Compare our current performance against previous metrics,
                showing growth and areas of improvement.
              </p>
              <div className="mt-8 flex items-center justify-start">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                <span className="font-medium">
                  Updated daily at midnight UTC
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="grid gap-6 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index} className="rounded-xl border bg-card p-6">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <div
                      className={cn(
                        "flex items-center rounded-full py-1 px-2 text-xs font-medium",
                        (stat.trend === "up" && stat.title !== "Refund Rate") ||
                          (stat.trend === "down" &&
                            stat.title === "Refund Rate")
                          ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400"
                          : "bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400"
                      )}
                    >
                      {Math.abs(stat.change)}%
                      {(stat.trend === "up" && stat.title !== "Refund Rate") ||
                      (stat.trend === "down" &&
                        stat.title === "Refund Rate") ? (
                        <ChevronUp className="ml-1 h-3 w-3" />
                      ) : (
                        <ChevronDown className="ml-1 h-3 w-3" />
                      )}
                    </div>
                  </div>

                  <div className="mt-3">
                    <h3 className="text-3xl font-bold">{stat.current}</h3>
                    <div className="mt-1 flex items-center text-sm text-muted-foreground">
                      <div className="flex items-center">
                        {(stat.trend === "up" &&
                          stat.title !== "Refund Rate") ||
                        (stat.trend === "down" &&
                          stat.title === "Refund Rate") ? (
                          <TrendingUp className="mr-1 h-4 w-4 text-emerald-500" />
                        ) : (
                          <TrendingDown className="mr-1 h-4 w-4 text-rose-500" />
                        )}
                        from {stat.previous}
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {stat.timeframe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
