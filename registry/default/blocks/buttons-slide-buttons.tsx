import { Button } from "@/registry/default/ui/button";

export default function SlideButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button
        variant="default"
        className="relative overflow-hidden before:absolute before:inset-0 before:bg-foreground/10 before:translate-x-[-101%] hover:before:translate-x-0 before:transition-transform before:duration-300"
      >
        <span className="relative z-10">Default</span>
      </Button>

      <Button
        variant="secondary"
        className="relative overflow-hidden before:absolute before:inset-0 before:bg-foreground/10 before:translate-x-[-101%] hover:before:translate-x-0 before:transition-transform before:duration-300"
      >
        <span className="relative z-10">Secondary</span>
      </Button>

      <Button
        variant="destructive"
        className="relative overflow-hidden before:absolute before:inset-0 before:bg-foreground/10 before:translate-x-[-101%] hover:before:translate-x-0 before:transition-transform before:duration-300"
      >
        <span className="relative z-10">Destructive</span>
      </Button>

      <Button
        variant="outline"
        className="relative overflow-hidden before:absolute before:inset-0 before:bg-foreground/10 before:translate-x-[-101%] hover:before:translate-x-0 before:transition-transform before:duration-300"
      >
        <span className="relative z-10">Outline</span>
      </Button>

      <Button
        variant="ghost"
        className="relative overflow-hidden before:absolute before:inset-0 before:bg-foreground/10 before:translate-x-[-101%] hover:before:translate-x-0 before:transition-transform before:duration-300"
      >
        <span className="relative z-10">Ghost</span>
      </Button>
    </div>
  );
}
