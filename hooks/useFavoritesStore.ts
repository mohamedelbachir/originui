"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

type FavoriteComponent = {
  id: string
  name: string
}

type FavoriteCategory = {
  slug: string
  name: string
  components: FavoriteComponent[]
}

type FavoritesState = {
  favorites: Record<string, FavoriteCategory>

  addFavorite: (
    category: { slug: string; name: string },
    component: FavoriteComponent
  ) => void

  removeFavorite: (categorySlug: string, componentId: string) => void

  toggleFavorite: (
    category: { slug: string; name: string },
    component: FavoriteComponent
  ) => void

  isFavorite: (categorySlug: string, componentId: string) => boolean

  getCategories: () => FavoriteCategory[]

  isLoaded: () => boolean

  isEmpty: () => boolean
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: {},

      addFavorite: (category, component) =>
        set((state) => {
          const entry = state.favorites[category.slug]

          if (entry?.components.some((c) => c.id === component.id)) return state

          return {
            favorites: {
              ...state.favorites,
              [category.slug]: {
                slug: category.slug,
                name: category.name,
                components: [...(entry?.components ?? []), component],
              },
            },
          }
        }),

      isLoaded: () => {
        const state = get()
        return Object.keys(state.favorites).length > 0 || state.isEmpty()
      },
      removeFavorite: (slug, id) =>
        set((state) => {
          const entry = state.favorites[slug]
          if (!entry) return state

          const updated = entry.components.filter((c) => c.id !== id)

          if (!updated.length) {
            const copy = { ...state.favorites }
            delete copy[slug]
            return { favorites: copy }
          }

          return {
            favorites: {
              ...state.favorites,
              [slug]: { ...entry, components: updated },
            },
          }
        }),

      toggleFavorite: (category, component) => {
        const exists = get().favorites[category.slug]?.components.some(
          (c) => c.id === component.id
        )

        if (exists) {
          get().removeFavorite(category.slug, component.id)
        } else {
          get().addFavorite(category, component)
        }
      },

      isFavorite: (slug, id) =>
        get().favorites[slug]?.components.some((c) => c.id === id) ?? false,

      getCategories: () => Object.values(get().favorites),

      isEmpty: () =>
        Object.values(get().favorites).every((c) => c.components.length === 0),
    }),
    {
      name: "woilasoft-ui-favorites",
      version: 1,
    }
  )
)
