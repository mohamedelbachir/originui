import { Badge } from "@/registry/default/ui/badge";

export default function ExtraLargeBadge() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Badge variant="default" className="text-base px-6 py-2 font-medium">
        Default
      </Badge>

      <Badge variant="secondary" className="text-base px-6 py-2 font-medium">
        Secondary
      </Badge>

      <Badge variant="destructive" className="text-base px-6 py-2 font-medium">
        Destructive
      </Badge>

      <Badge variant="outline" className="text-base px-6 py-2 font-medium">
        Outline
      </Badge>
    </div>
  );
}
