import { Badge } from "@/registry/default/ui/badge";

export default function ThreeDimensionalBadge() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Badge
        variant="default"
        className="transform transition-transform hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
      >
        Default
      </Badge>

      <Badge
        variant="secondary"
        className="transform transition-transform hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
      >
        Secondary
      </Badge>

      <Badge
        variant="destructive"
        className="transform transition-transform hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
      >
        Destructive
      </Badge>

      <Badge
        variant="outline"
        className="transform transition-transform hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]"
      >
        Outline
      </Badge>
    </div>
  );
}
