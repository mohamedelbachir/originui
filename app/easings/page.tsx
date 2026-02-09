import type { Metadata } from "next"
import Link from "next/link"
import { LayoutGridIcon, ListIcon } from "lucide-react"

import { categories } from "@/config/components"
import { RegistryLayout } from "@/components/registry-layout"
import { Button } from "@/registry/default/ui/button"

import Easings from "./easings"

export const metadata: Metadata = {
  title: "Tailwind CSS Easing Classes - Origin UI",
  description:
    "A collection of easing utility classes to enhance your Tailwind CSS animations and transitions.",
}

const easings = [
  {
    name: "linear",
    points: [0, 0, 1, 1],
  },
  {
    name: "ease",
    points: [0.25, 0.1, 0.25, 1],
  },
  {
    name: "ease-in",
    points: [0.42, 0, 1, 1],
  },
  {
    name: "ease-out",
    points: [0, 0, 0.58, 1],
  },
  {
    name: "ease-in-out",
    points: [0.42, 0, 0.58, 1],
  },
  {
    name: "ease-in-sine",
    points: [0.12, 0, 0.39, 0],
  },
  {
    name: "ease-out-sine",
    points: [0.61, 1, 0.88, 1],
  },
  {
    name: "ease-in-out-sine",
    points: [0.37, 0, 0.63, 1],
  },
  {
    name: "ease-in-quad",
    points: [0.11, 0, 0.5, 0],
  },
  {
    name: "ease-out-quad",
    points: [0.5, 1, 0.89, 1],
  },
  {
    name: "ease-in-out-quad",
    points: [0.45, 0, 0.55, 1],
  },
  {
    name: "ease-in-cubic",
    points: [0.32, 0, 0.67, 0],
  },
  {
    name: "ease-out-cubic",
    points: [0.33, 1, 0.68, 1],
  },
  {
    name: "ease-in-out-cubic",
    points: [0.65, 0, 0.35, 1],
  },
  {
    name: "ease-in-quart",
    points: [0.5, 0, 0.75, 0],
  },
  {
    name: "ease-out-quart",
    points: [0.25, 1, 0.5, 1],
  },
  {
    name: "ease-in-out-quart",
    points: [0.76, 0, 0.24, 1],
  },
  {
    name: "ease-in-quint",
    points: [0.64, 0, 0.78, 0],
  },
  {
    name: "ease-out-quint",
    points: [0.22, 1, 0.36, 1],
  },
  {
    name: "ease-in-out-quint",
    points: [0.83, 0, 0.17, 1],
  },
  {
    name: "ease-in-expo",
    points: [0.7, 0, 0.84, 0],
  },
  {
    name: "ease-out-expo",
    points: [0.16, 1, 0.3, 1],
  },
  {
    name: "ease-in-out-expo",
    points: [0.87, 0, 0.13, 1],
  },
  {
    name: "ease-in-circ",
    points: [0.55, 0, 1, 0.45],
  },
  {
    name: "ease-out-circ",
    points: [0, 0.55, 0.45, 1],
  },
  {
    name: "ease-in-out-circ",
    points: [0.85, 0, 0.15, 1],
  },
  {
    name: "ease-in-back",
    points: [0.36, 0, 0.66, -0.56],
  },
  {
    name: "ease-out-back",
    points: [0.34, 1.56, 0.64, 1],
  },
  {
    name: "ease-in-out-back",
    points: [0.68, -0.6, 0.32, 1.6],
  },
]

type Props = {
  searchParams: Promise<{ view?: "grid" | "list" }>
}

export default async function Page({ searchParams }: Props) {
  const view = (await searchParams).view || "grid"

  return (
    <RegistryLayout
      categories={categories}
      currentCategorySlug=""
      basePath={`/showcase?view=${view}`}
    >
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
            Easings
          </h1>
          <p className="text-muted-foreground text-lg">
            A set of easing functions ready to copy and paste into your Tailwind
            CSS project.
          </p>
        </div>

        <div className="bg-background hidden items-center gap-1 rounded-lg border p-1 shadow-sm sm:flex">
          <Button
            asChild
            variant={view === "list" ? "secondary" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Link href={`/easings?view=list`} title="List View">
              <ListIcon size={16} />
            </Link>
          </Button>
          <Button
            asChild
            variant={view === "grid" ? "secondary" : "ghost"}
            size="sm"
            className="h-8 w-8 p-0"
          >
            <Link href={`/easings?view=grid`} title="Grid View">
              <LayoutGridIcon size={16} />
            </Link>
          </Button>
        </div>
      </div>

      <Easings easings={easings} view={view} />
    </RegistryLayout>
  )
}
