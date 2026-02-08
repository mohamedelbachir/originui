import { Button } from "@/registry/default/ui/button";

export default function CutCornersButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="default"
        className="rounded-none [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-all duration-300"
      >
        Default
      </Button>

      <Button
        variant="secondary"
        className="rounded-none [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-all duration-300"
      >
        Secondary
      </Button>

      <Button
        variant="destructive"
        className="rounded-none [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-all duration-300"
      >
        Destructive
      </Button>

      <Button
        variant="outline"
        className="rounded-none [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-all duration-300"
      >
        Outline
      </Button>

      <Button
        variant="ghost"
        className="rounded-none [clip-path:polygon(10%_0,100%_0,90%_100%,0_100%)] hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] transition-all duration-300"
      >
        Ghost
      </Button>
    </div>
  );
}
