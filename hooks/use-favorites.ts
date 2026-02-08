"use client"

import { useEffect, useState } from "react"

type Favorites = Record<string, string[]>

export function useFavorites() {
  const [favorites, setFavorites] = useState<Favorites>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("woilasoft-ui-favorite")
    if (stored) {
      setFavorites(JSON.parse(stored))
    }
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    console.log("FAVORITES STATE:", favorites)
  }, [favorites])
  // Centralized persistence
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("woilasoft-ui-favorite", JSON.stringify(favorites))
    }
  }, [favorites, isLoaded])

  const addFavorite = (category: string, componentName: string) => {
    console.log("ADDING:", category, componentName)
    setFavorites((prev) => {
      console.log("PREVIOUS:", prev)
      const current = prev[category] ?? []

      if (current.includes(componentName)) return prev

      return {
        ...prev,
        [category]: [...current, componentName],
      }
    })
  }

  const removeFavorite = (category: string, componentName: string) => {
    setFavorites((prev) => {
      const current = prev[category] ?? []

      const updated = current.filter((n) => n !== componentName)

      if (updated.length === 0) {
        const copy = { ...prev }
        delete copy[category]
        return copy
      }

      return {
        ...prev,
        [category]: updated,
      }
    })
  }

  const toggleFavorite = (category: string, componentName: string) => {
    // setFavorites((prev) => {
    //   const current = prev[category] ?? []

    //   const exists = current.includes(componentName)

    //   if (exists) {
    //     const updated = current.filter((n) => n !== componentName)

    //     if (!updated.length) {
    //       const copy = { ...prev }
    //       delete copy[category]
    //       return copy
    //     }

    //     return {
    //       ...prev,
    //       [category]: updated,
    //     }
    //   }

    //   return {
    //     ...prev,
    //     [category]: [...current, componentName],
    //   }
    // })
    if (isFavorite(category, componentName)) {
      removeFavorite(category, componentName)
    } else {
      addFavorite(category, componentName)
    }
  }

  const isFavorite = (category: string, componentName: string) => {
    return favorites[category]?.includes(componentName) ?? false
  }

  const hasComponent = (componentName: string) =>
    Object.values(favorites).some((l) => l.includes(componentName))

  const isFavoritesEmpty = () =>
    Object.values(favorites).every((l) => l.length === 0)

  const getCategories = () => Object.keys(favorites)

  return {
    favorites,
    isLoaded,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    hasComponent,
    isFavoritesEmpty,
    getCategories,
  }
}
