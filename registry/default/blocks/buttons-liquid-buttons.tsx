import { Button } from "@/registry/default/ui/button";

export default function LiquidButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="default"
        className="rounded-[60%_40%_40%_60%/60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%/50%_60%_30%_60%] transition-all duration-500"
      >
        Default
      </Button>

      <Button
        variant="secondary"
        className="rounded-[60%_40%_40%_60%/60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%/50%_60%_30%_60%] transition-all duration-500"
      >
        Secondary
      </Button>

      <Button
        variant="destructive"
        className="rounded-[60%_40%_40%_60%/60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%/50%_60%_30%_60%] transition-all duration-500"
      >
        Destructive
      </Button>

      <Button
        variant="outline"
        className="rounded-[60%_40%_40%_60%/60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%/50%_60%_30%_60%] transition-all duration-500"
      >
        Outline
      </Button>

      <Button
        variant="ghost"
        className="rounded-[60%_40%_40%_60%/60%_30%_70%_40%] hover:rounded-[40%_60%_70%_30%/50%_60%_30%_60%] transition-all duration-500"
      >
        Ghost
      </Button>
    </div>
  );
}
