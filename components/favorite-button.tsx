"use client"

import { useEffect, useState } from "react"
import { Heart } from "lucide-react"

import { useFavoritesStore } from "@/hooks/useFavoritesStore"
import { Button } from "@/registry/default/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

interface FavoriteButtonProps {
  component: { id: string; name: string }
  categorie: { slug: string; name: string }
  className?: string
  // favorites: ReturnType<typeof useFavorites>
}

export default function FavoriteButton({
  component,
  className,
  categorie,
}: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavoritesStore()
  const categorySlug = categorie.slug
  const categoryName = categorie.name
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isLoaded()) {
    return null
  }

  //const isFav = isFavorite(componentCategorie, componentName)
  const isFav = isFavorite(categorySlug, component.name)

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
              // toggleFavorite(componentCategorie, componentName)
              toggleFavorite(
                { slug: categorySlug, name: categoryName },
                { id: component.name, name: component.name }
              )
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
