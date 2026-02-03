"use client"

import Link from "next/link"
import { atom, useAtom } from "jotai"

import { links } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/default/ui/button"

import { ActiveLink } from "../active-link"

export const mobileMenuOpen = atom(false)

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useAtom(mobileMenuOpen)

  return (
    <div
      className={cn(
        "bg-backdrop fixed top-[53px] right-0 left-0 z-50 flex h-[calc(100vh-53px)] flex-col gap-4 p-4 md:p-8",
        "sm:top-[69px] sm:h-[calc(100vh-69px)]",
        isOpen ? "flex" : "hidden"
      )}
    >
      {links.map((link) => (
        <ActiveLink
          key={link.href}
          href={link.href}
          onClick={() => setIsOpen(false)}
        >
          {link.text}
        </ActiveLink>
      ))}
      {/* <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
        <Link href="/contact">{tHero('contact')}</Link>
      </Button> */}
    </div>
  )
}
