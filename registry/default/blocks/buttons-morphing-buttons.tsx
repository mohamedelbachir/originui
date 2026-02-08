import { Button } from "@/registry/default/ui/button";

export default function MorphingButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="default"
        className="rounded-lg hover:rounded-[24px] transition-all duration-300"
      >
        Default
      </Button>

      <Button
        variant="secondary"
        className="rounded-lg hover:rounded-[24px] transition-all duration-300"
      >
        Secondary
      </Button>

      <Button
        variant="destructive"
        className="rounded-lg hover:rounded-[24px] transition-all duration-300"
      >
        Destructive
      </Button>

      <Button
        variant="outline"
        className="rounded-lg hover:rounded-[24px] transition-all duration-300"
      >
        Outline
      </Button>

      <Button
        variant="ghost"
        className="rounded-lg hover:rounded-[24px] transition-all duration-300"
      >
        Ghost
      </Button>
    </div>
  );
}
