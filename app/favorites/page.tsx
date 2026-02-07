import type { Metadata } from "next"

import FavoritesClient from "./favorites-client"

export const metadata: Metadata = {
  title: "My Favorites - Woilasoft UI",
  description: "View your saved components.",
}

export default async function FavoritesPage() {
  return <FavoritesClient />
}
