import { Badge } from "@/registry/default/ui/badge";

export default function ElevatedBadge() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Badge
        variant="default"
        className="shadow-md hover:shadow-lg transition-shadow"
      >
        Default
      </Badge>

      <Badge
        variant="secondary"
        className="shadow-md hover:shadow-lg transition-shadow"
      >
        Secondary
      </Badge>

      <Badge
        variant="destructive"
        className="shadow-md hover:shadow-lg transition-shadow"
      >
        Destructive
      </Badge>

      <Badge
        variant="outline"
        className="shadow-md hover:shadow-lg transition-shadow"
      >
        Outline
      </Badge>
    </div>
  );
}
