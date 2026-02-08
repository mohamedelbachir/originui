import { Badge } from "@/registry/default/ui/badge";

export default function DotIndicatorBadge() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Badge variant="default" className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/80 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-foreground"></span>
        </span>
        Default
      </Badge>

      <Badge variant="secondary" className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-foreground/80 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-foreground"></span>
        </span>
        Secondary
      </Badge>

      <Badge variant="destructive" className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-destructive-foreground/80 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-destructive-foreground"></span>
        </span>
        Destructive
      </Badge>

      <Badge variant="outline" className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/50 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground/80"></span>
        </span>
        Outline
      </Badge>
    </div>
  );
}
