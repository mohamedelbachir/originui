import { Badge } from "@/registry/default/ui/badge";

export default function RibbonBadge() {
  return (
    <div className="flex flex-wrap gap-8 p-6">
      <div className="relative">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-2 bg-primary text-primary-foreground hover:bg-primary/80 rounded-l-sm"></div>
        <Badge variant="default" className="pl-3 rounded-l-none">
          Default
        </Badge>
      </div>

      <div className="relative">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-l-sm"></div>
        <Badge variant="secondary" className="pl-3 rounded-l-none">
          Secondary
        </Badge>
      </div>

      <div className="relative">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-2 bg-destructive text-destructive-foreground hover:bg-destructive/80 rounded-l-sm"></div>
        <Badge variant="destructive" className="pl-3 rounded-l-none">
          Destructive
        </Badge>
      </div>

      <div className="relative">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-6 w-2 border rounded-l-sm"></div>
        <Badge variant="outline" className="pl-3 rounded-l-none">
          Outline
        </Badge>
      </div>
    </div>
  );
}
