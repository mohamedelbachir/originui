import type { HTMLAttributes } from "react"
import { ViewAnimation } from "@/providers/view-animation"
import { PlusIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type SectionProps = HTMLAttributes<HTMLDivElement> & {
  sectionClassName?: string
  crossClassName?: string
}

const Cross = () => (
  <div className="relative h-6 w-6">
    <div className="bg-backdrop absolute left-3 h-6 w-px" />
    <div className="bg-backdrop absolute top-3 h-px w-6" />

    <ViewAnimation
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <PlusIcon size={20} className="text-connection" />
    </ViewAnimation>
  </div>
)

export const Section = ({
  children,
  className,
  sectionClassName,
  crossClassName,
  ...props
}: SectionProps) => (
  <section {...props}>
    <div className={cn("relative mx-auto max-w-[1406px]", sectionClassName)}>
      <div className={cn("px-4 sm:border-x sm:px-6", className)}>
        {children}
      </div>
      <div
        className={cn(
          "absolute -bottom-3 -left-3 z-10 hidden h-6 sm:block",
          crossClassName
        )}
      >
        <Cross />
      </div>
      <div
        className={cn(
          "absolute -right-3 -bottom-3 z-10 hidden h-6 -translate-x-px sm:block",
          crossClassName
        )}
      >
        <Cross />
      </div>
    </div>
  </section>
)
