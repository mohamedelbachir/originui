import registry from "@/registry.json"
import { clsx, type ClassValue } from "clsx"
import type { RegistryItem } from "shadcn/registry"
import { toast } from "sonner"
import { twMerge } from "tailwind-merge"

import type { RegistryTag } from "@/registry/registry-tags"

const components = registry.items as unknown as RegistryItem[]

export const getComponents = (
  selectedTags: RegistryTag[] = []
): RegistryItem[] => {
  return selectedTags.length
    ? components.filter((component) =>
        selectedTags.every(
          (tag) => component.meta?.tags?.includes(tag) ?? false
        )
      )
    : components
}

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
  const componentsMap = new Map(components.map((comp) => [comp.name, comp]))

  return names
    .map((name) => componentsMap.get(name))
    .filter((comp): comp is RegistryItem => comp !== undefined)
}

export const getAvailableTags = (
  selectedTags: RegistryTag[]
): RegistryTag[] => {
  if (!selectedTags.length) return []

  // Get all components that have all the selected tags
  const matchingComponents = components.filter((component) =>
    selectedTags.every((tag) => component.meta?.tags?.includes(tag) ?? false)
  )

  // Get all unique tags from the matching components
  const availableTags = new Set<RegistryTag>()
  matchingComponents.forEach((component) => {
    component.meta?.tags?.forEach((tag: RegistryTag) => {
      if (!selectedTags.includes(tag)) {
        availableTags.add(tag)
      }
    })
  })

  return Array.from(availableTags)
}

export const convertRegistryPaths = (content: string): string => {
  return content
    .replace(/@\/registry\/default\/ui/g, "@/components/ui")
    .replace(/@\/registry\/default\/compositions/g, "@/components")
    .replace(/@\/registry\/default\/hooks/g, "@/hooks")
    .replace(/@\/registry\/default\/lib/g, "@/lib")
}

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs))

export const parseError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message
  }

  if (typeof error === "string") {
    return error
  }

  return "An unknown error occurred"
}

export const handleError = (error: unknown) => {
  const message = parseError(error)

  toast.error(message)
}

export const formatDateRange = (
  startDate: string,
  endDate: string | null,
  locale: string
): string => {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : null

  const formatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  })

  const startFormatted = formatter.format(start)
  const endFormatted = end
    ? formatter.format(end)
    : locale === "fr"
      ? "Présent"
      : "Present"

  return `${startFormatted} - ${endFormatted}`
}
