import { Button } from "@/registry/default/ui/button";

export default function PixelButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="default"
        className="border-2 shadow-[4px_4px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_currentColor] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
      >
        Default
      </Button>

      <Button
        variant="secondary"
        className="border-2 shadow-[4px_4px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_currentColor] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
      >
        Secondary
      </Button>

      <Button
        variant="destructive"
        className="border-2 shadow-[4px_4px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_currentColor] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
      >
        Destructive
      </Button>

      <Button
        variant="outline"
        className="border-2 shadow-[4px_4px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_currentColor] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
      >
        Outline
      </Button>

      <Button
        variant="ghost"
        className="border-2 shadow-[4px_4px_0px_0px_currentColor] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_currentColor] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all"
      >
        Ghost
      </Button>
    </div>
  );
}
