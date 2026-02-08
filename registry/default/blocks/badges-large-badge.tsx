import { Badge } from "@/registry/default/ui/badge";

export default function LargeBadge() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Badge variant="default" className="text-sm px-4 py-1">
        Default
      </Badge>

      <Badge variant="secondary" className="text-sm px-4 py-1">
        Secondary
      </Badge>

      <Badge variant="destructive" className="text-sm px-4 py-1">
        Destructive
      </Badge>

      <Badge variant="outline" className="text-sm px-4 py-1">
        Outline
      </Badge>
    </div>
  );
}
