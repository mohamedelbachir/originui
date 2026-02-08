import { Button } from "@/registry/default/ui/button";

export default function ShadowButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="default"
        className="shadow-none hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300"
      >
        Default
      </Button>

      <Button
        variant="secondary"
        className="shadow-none hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300"
      >
        Secondary
      </Button>

      <Button
        variant="destructive"
        className="shadow-none hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300"
      >
        Destructive
      </Button>

      <Button
        variant="outline"
        className="shadow-none hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300"
      >
        Outline
      </Button>

      <Button
        variant="ghost"
        className="shadow-none hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-shadow duration-300"
      >
        Ghost
      </Button>
    </div>
  );
}
