import { Button } from "@/registry/default/ui/button";

export default function SkewButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="default"
        className="hover:skew-x-6 transition-transform duration-300"
      >
        Default
      </Button>

      <Button
        variant="secondary"
        className="hover:skew-x-6 transition-transform duration-300"
      >
        Secondary
      </Button>

      <Button
        variant="destructive"
        className="hover:skew-x-6 transition-transform duration-300"
      >
        Destructive
      </Button>

      <Button
        variant="outline"
        className="hover:skew-x-6 transition-transform duration-300"
      >
        Outline
      </Button>

      <Button
        variant="ghost"
        className="hover:skew-x-6 transition-transform duration-300"
      >
        Ghost
      </Button>
    </div>
  );
}
