"use client"

import Link from "next/link"
import { atom, useAtom } from "jotai"

import { links } from "@/lib/navigation"
import { cn } from "@/lib/utils"

import { ActiveLink } from "../active-link"
import SearchButton from "../search-button"
import { Button } from "../ui/button"

export const mobileMenuOpen = atom(false)

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useAtom(mobileMenuOpen)

  return (
    <div
      className={cn(
        "bg-background fixed top-[53px] right-0 left-0 z-50 flex h-[calc(100vh-53px)] flex-col gap-4 p-4 md:p-8",
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
      <SearchButton className="w-full" />
      <Button variant="outline" size="sm" asChild>
        <Link href="/showcase">Get started</Link>
      </Button>
      {/* <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
        <Link href="/contact">{tHero('contact')}</Link>
      </Button> */}
    </div>
  )
}
