"use client"

import { ReactNode } from "react"

import { useFavorites } from "@/hooks/use-favorites"

export default function FavoritesProvider({
  children,
}: {
  children: (favorites: ReturnType<typeof useFavorites>) => ReactNode
}) {
  const favorites = useFavorites()

  return children(favorites)
}
