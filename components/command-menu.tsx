"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { isCommandMenuOpenAtom } from "@/atoms/command-menu"
import { useAtom } from "jotai"
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react"
import { useTheme } from "next-themes"

import { blocks } from "@/config/blocks"
import { categories } from "@/config/components"
import { links } from "@/lib/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"

export function CommandMenu() {
  const router = useRouter()
  const [open, setOpen] = useAtom(isCommandMenuOpenAtom)
  const { setTheme } = useTheme()
  //const allComponents = React.useMemo(() => getComponents().filter((c)=>), [])
  const allLinks = React.useMemo(() => {
    const c = categories.map((category) => {
      return { name: category.name, slug: category.slug, type: "category" }
    })

    const b = blocks.map((block) => {
      return {
        name: block.name,
        slug: block.slug,
        type: "block",
      }
    })
    const result = [...c, ...b]
    return result
  }, [])
  //const allComponents = React.useMemo(() => getComponents(), [])
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  const runCommand = React.useCallback(
    (command: () => void) => {
      setOpen(false)
      command()
    },
    [setOpen]
  )

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <span className="sr-only">Command Menu</span>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {links.map((navItem) => (
              <CommandItem
                key={navItem.href}
                value={navItem.text}
                onSelect={() => {
                  runCommand(() => router.push(navItem.href))
                }}
              >
                <FileIcon className="mr-2 h-4 w-4" />
                {navItem.text}
              </CommandItem>
            ))}
            <CommandItem
              value="Home"
              onSelect={() => {
                runCommand(() => router.push("/"))
              }}
            >
              <FileIcon className="mr-2 h-4 w-4" />
              Home
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Components">
            {allLinks.map((link) => (
              <CommandItem
                key={link.name}
                value={link.name}
                onSelect={() => {
                  // Find category for this component to construct URL

                  if (link.type === "category") {
                    runCommand(() =>
                      router.push(`/showcase?category=${link.slug}`)
                    )
                  } else if (link.type === "block") {
                    runCommand(() =>
                      router.push(`/blocks?category=${link.slug}`)
                    )
                  }
                }}
              >
                <CircleIcon className="mr-2 h-4 w-4" />
                {link.name}
                {/* {link.description && (
                  <span className="text-muted-foreground ml-2 truncate text-xs">
                    {link.description}
                  </span>
                )} */}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 h-4 w-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
