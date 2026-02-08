import { Suspense } from "react"
import type { Metadata } from "next"
import { Loader2Icon } from "lucide-react"

import { Section } from "@/components/section"

import FavoritesClient from "./favorites-client"

export const metadata: Metadata = {
  title: "My Favorites - Woilasoft UI",
  description: "View your saved components.",
}

export default async function FavoritesPage() {
  return (
    <Suspense
      fallback={
        <Section
          sectionClassName="mx-auto max-w-[1600px] px-4 sm:px-6 "
          crossClassName="!hidden"
        >
          <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center gap-4 text-center">
            <div className="py-20 text-center">
              <Loader2Icon className="text-muted-foreground mx-auto mb-4 h-8 w-8 animate-spin opacity-20" />
              <p className="text-muted-foreground">Loading favorites...</p>
            </div>
          </div>
        </Section>
      }
    >
      <FavoritesClient />
    </Suspense>
  )
}
