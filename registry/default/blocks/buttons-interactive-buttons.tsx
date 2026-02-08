import { Button } from "@/registry/default/ui/button";
import { Heart, ThumbsUp, Star, Bell, Zap } from "lucide-react";

export default function InteractiveButtons() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      <Button variant="outline" className="group gap-2">
        <Heart className="h-4 w-4 group-hover:fill-destructive group-hover:text-destructive group-hover:animate-[heartbeat_1s_ease-in-out]" />
        <span className="group-hover:text-destructive">Like</span>
      </Button>

      <Button variant="outline" className="group gap-2">
        <ThumbsUp className="h-4 w-4 group-hover:fill-primary group-hover:text-primary transition-transform group-hover:rotate-12" />
        <span className="group-hover:text-primary relative after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-primary after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
          Approve
        </span>
      </Button>

      <Button variant="ghost" className="group gap-2">
        <Star className="h-4 w-4 transition-all duration-300 group-hover:text-yellow-400 group-hover:fill-yellow-400 group-hover:animate-[spin_0.5s_ease-in-out]" />
        <span className="group-hover:text-yellow-500">Star</span>
      </Button>

      <Button variant="outline" className="group gap-2">
        <Bell className="h-4 w-4 group-hover:text-primary group-hover:[animation:ring_0.5s_ease-in-out]" />
        <span className="group-hover:text-primary">Notify</span>
      </Button>

      <Button variant="default" className="group gap-2">
        <Zap className="h-4 w-4 transition-all duration-300 group-hover:text-yellow-300 group-hover:scale-125 group-hover:-rotate-12" />
        <span className="relative after:absolute after:inset-0 after:bg-gradient-to-r after:from-yellow-300/0 after:via-yellow-300/30 after:to-yellow-300/0 after:translate-x-[-100%] group-hover:after:translate-x-[100%] after:transition-transform after:duration-500">
          Boost
        </span>
      </Button>
    </div>
  );
}
