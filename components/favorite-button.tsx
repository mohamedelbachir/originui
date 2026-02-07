"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

import { useFavorites } from "@/hooks/use-favorites"
import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

interface FavoriteButtonProps {
  componentName: string
  componentCategorie: string
  className?: string
  favorites: ReturnType<typeof useFavorites>
}

export default function FavoriteButton({
  componentName,
  className,
  componentCategorie,
  favorites,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isLoaded, addFavorite, removeFavorite } =
    favorites
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoaded) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground/80 disabled:opacity-50"
        disabled
      >
        <Heart size={16} />
      </Button>
    )
  }

  const isFav = isFavorite(componentCategorie, componentName)

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent ${className}`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              // if (isFav) {
              //   removeFavorite(componentCategorie, componentName)
              // } else {
              //   addFavorite(componentCategorie, componentName)
              // }
              toggleFavorite(componentCategorie, componentName)
            }}
          >
            <Heart
              size={16}
              className={isFav ? "fill-red-500 text-red-500" : ""}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="text-muted-foreground px-2 py-1 text-xs">
          {isFav ? "Remove from favorites" : "Add to favorites"}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
