"use client"

import Link from "next/link"
import { HeaderProvider } from "@/providers/header"
import { ViewAnimation } from "@/providers/view-animation"
import { Heart } from "lucide-react"
import { useTheme } from "next-themes"

import { links } from "@/lib/navigation"
import { LineShadowText } from "@/components/line-shadow-text"
import SearchButton from "@/components/search-button"
import { Button } from "@/registry/default/ui/button"

import { ActiveLink } from "../active-link"
import { ThemeSwitcher } from "../theme-switcher"
import { MobileMenu } from "./mobile-menu"
import { MobileMenuTrigger } from "./mobile-menu-trigger"

export const Header = () => {
  const theme = useTheme()
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black"
  return (
    <>
      <HeaderProvider className="bg-backdrop/90 sticky top-0 right-0 left-0 z-50 mx-auto flex max-w-[1600px] items-center justify-between border-x-0 px-4 py-2 backdrop-blur-md transition-all sm:px-6 sm:py-4">
        <div className="w-32">
          <ViewAnimation
            initial={{ opacity: 0, translateY: -8 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            <Link href="/" aria-label="Home">
              <span className="text-xl leading-none font-semibold tracking-tighter text-balance sm:text-2xl">
                Woilasoft
                <LineShadowText className="italic" shadowColor={shadowColor}>
                  UI
                </LineShadowText>
              </span>
            </Link>
          </ViewAnimation>
        </div>
        <nav className="hidden gap-6 md:flex">
          {links.map((link, index) => (
            <ViewAnimation
              key={link.href}
              initial={{ opacity: 0, translateY: -8 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              delay={0.4 + index * 0.1}
            >
              <ActiveLink href={link.href}>{link.text}</ActiveLink>
            </ViewAnimation>
          ))}
        </nav>
        <div className="hidden min-w-32 justify-end md:flex">
          <ViewAnimation
            initial={{ opacity: 0, translateY: -8 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            delay={0.8}
          >
            <div className="flex items-center gap-2">
              <SearchButton />
              <Button variant="outline" size="icon" asChild>
                <Link href="/favorites" aria-label="Favorites">
                  <Heart size={15} />
                </Link>
              </Button>
              <ThemeSwitcher />
              <Button variant="outline" size="sm" asChild>
                <Link href="/showcase">Get started</Link>
              </Button>
            </div>
          </ViewAnimation>
        </div>
        <div className="flex w-32 justify-end md:hidden">
          <ViewAnimation
            initial={{ opacity: 0, translateY: -8 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            delay={0.8}
          >
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="/favorites" aria-label="Favorites">
                  <Heart size={20} />
                </Link>
              </Button>
              <ThemeSwitcher />
              <MobileMenuTrigger />
            </div>
          </ViewAnimation>
        </div>
      </HeaderProvider>
      <MobileMenu />
    </>
  )
}
