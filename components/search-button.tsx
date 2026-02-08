"use client"

import { isCommandMenuOpenAtom } from "@/atoms/command-menu"
import { RiSearch2Line } from "@remixicon/react"
import { useSetAtom } from "jotai"

// import { SearchIcon } from "lucide-react"

import { cn } from "@/lib/utils"

// import { useIsMobile } from "@/hooks/use-mobile"

// import { Button } from "@/registry/default/ui/button"

export default function SearchButton({ className }: { className?: string }) {
  const setOpen = useSetAtom(isCommandMenuOpenAtom)
  // const isMobile = useIsMobile()

  // if (isMobile) {
  //   return (
  //     <Button
  //       variant="outline"
  //       size="icon"
  //       onClick={() => setOpen(true)}
  //       aria-label="Search"
  //     >
  //       <SearchIcon size={20} />
  //     </Button>
  //   )
  // }

  return (
    <button
      onClick={() => setOpen(true)}
      className={cn(
        "bg-background text-foreground placeholder:text-muted-foreground/70 focus:border-ring focus:ring-ring/50 inline-flex h-10 w-fit min-w-72 cursor-text items-center rounded-full border px-4 py-0 text-sm outline-none focus:ring-[3px]",
        className
      )}
    >
      <span className="flex grow items-center gap-2">
        <RiSearch2Line
          className="text-muted-foreground -ms-1"
          size={20}
          aria-hidden="true"
        />
        <span className="font-normal text-zinc-400 dark:text-zinc-500">
          Quick search...
        </span>
        <div className="text-muted-foreground/80 pointer-events-none ml-auto flex items-center justify-center">
          <kbd className="text-muted-foreground inline-flex font-[inherit] text-xs font-medium">
            <span className="opacity-70">⌘</span>K
          </kbd>
        </div>
      </span>
    </button>
  )
}
