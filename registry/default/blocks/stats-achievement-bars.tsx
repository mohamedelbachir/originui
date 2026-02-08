"use client";

import { Badge } from "@/registry/default/ui/badge";
import { Progress } from "@/registry/default/ui/progress";
import { CheckCircle2, AlertCircle, Target } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AchievementBars() {
  const achievements = [
    {
      title: "Q3 Sales Target",
      currentValue: 1842350,
      targetValue: 2000000,
      format: "currency",
      progress: 92.1, // pre-calculated for demo
      status: "on-track", // on-track, at-risk, completed
      timeRemaining: "14 days remaining",
    },
    {
      title: "Customer Acquisition",
      currentValue: 2427,
      targetValue: 3000,
      format: "number",
      progress: 80.9,
      status: "on-track",
      timeRemaining: "14 days remaining",
    },
    {
      title: "Retention Rate",
      currentValue: 78.5,
      targetValue: 75,
      format: "percent",
      progress: 104.7, // can exceed 100%
      status: "completed",
      timeRemaining: "Goal exceeded",
    },
    {
      title: "Support Response Time",
      currentValue: 4.2,
      targetValue: 3,
      format: "time",
      progress: 71.4, // inverse: lower is better, so 71.4% to goal
      status: "at-risk",
      timeRemaining: "14 days remaining",
    },
  ];

  // Format functions for different value types
  const formatValue = (value: number, format: string) => {
    switch (format) {
      case "currency":
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(value);
      case "number":
        return new Intl.NumberFormat("en-US").format(value);
      case "percent":
        return `${value}%`;
      case "time":
        return `${value} hours`;
      default:
        return value.toString();
    }
  };

  // Status indicator component
  const StatusIndicator = ({ status }: { status: string }) => {
    switch (status) {
      case "completed":
        return (
          <div className="flex items-center text-emerald-500">
            <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span className="text-[10px] sm:text-xs font-medium">
              Completed
            </span>
          </div>
        );
      case "at-risk":
        return (
          <div className="flex items-center text-amber-500">
            <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span className="text-[10px] sm:text-xs font-medium">At Risk</span>
          </div>
        );
      case "on-track":
      default:
        return (
          <div className="flex items-center text-blue-500">
            <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
            <span className="text-[10px] sm:text-xs font-medium">On Track</span>
          </div>
        );
    }
  };

  // Helper function to get progress bar color class based on status
  const getProgressClass = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "at-risk":
        return "bg-amber-500";
      case "on-track":
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-24 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-2">Q3 Progress</Badge>
          <h2 className="text-3xl font-bold md:text-4xl">Goal Tracking</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Monitor our progress toward key business objectives
          </p>
        </div>

        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="rounded-xl border bg-card p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2 gap-1 sm:gap-0">
                <h3 className="font-semibold text-base sm:text-lg">
                  {achievement.title}
                </h3>
                <StatusIndicator status={achievement.status} />
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">
                  {formatValue(achievement.currentValue, achievement.format)}
                </div>
                <div className="text-sm text-muted-foreground">
                  Target:{" "}
                  {formatValue(achievement.targetValue, achievement.format)}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm font-medium">
                    {achievement.progress}%
                  </span>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    {achievement.timeRemaining}
                  </span>
                </div>
                <Progress
                  value={Math.min(achievement.progress, 100)}
                  className={cn(
                    "h-2",
                    achievement.status === "completed"
                      ? "bg-emerald-100 dark:bg-emerald-950"
                      : achievement.status === "at-risk"
                      ? "bg-amber-100 dark:bg-amber-950"
                      : "bg-blue-100 dark:bg-blue-950",
                    "[&>div]:" + getProgressClass(achievement.status)
                  )}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
