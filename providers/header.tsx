"use client"

import { useEffect, useState, type HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

type HeaderProviderProps = HTMLAttributes<HTMLDivElement>

export const HeaderProvider = ({
  children,
  className,
}: HeaderProviderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 5)
    const throttledHandleScroll = () => requestAnimationFrame(handleScroll)

    window.addEventListener("scroll", throttledHandleScroll)

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll)
    }
  }, [])

  return <header className={cn(className, "border-b")}>{children}</header>
}
