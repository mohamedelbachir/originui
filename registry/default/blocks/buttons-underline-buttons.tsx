import { Button } from "@/registry/default/ui/button";

export default function UnderlineButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="default"
        className="relative after:absolute after:bottom-2 after:left-2 after:right-2 after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Default
      </Button>

      <Button
        variant="secondary"
        className="relative after:absolute after:bottom-2 after:left-2 after:right-2 after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Secondary
      </Button>

      <Button
        variant="destructive"
        className="relative after:absolute after:bottom-2 after:left-2 after:right-2 after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Destructive
      </Button>

      <Button
        variant="outline"
        className="relative after:absolute after:bottom-2 after:left-2 after:right-2 after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Outline
      </Button>

      <Button
        variant="ghost"
        className="relative after:absolute after:bottom-2 after:left-2 after:right-2 after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
      >
        Ghost
      </Button>
    </div>
  );
}
