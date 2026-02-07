"use client"

import { ComponentType, useMemo } from "react"
import dynamic from "next/dynamic"
import type { RegistryItem } from "shadcn/registry"

interface ComponentLoaderProps {
  component: RegistryItem
}

export default function ComponentLoader<TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  const DynamicComponent = useMemo(() => {
    if (!component?.name) return null

    return dynamic(
      () =>
        import(`@/registry/default/components/${component.name}`).then(
          (m) => m.default as ComponentType<TProps>
        ),
      {
        ssr: false,
      }
    )
  }, [component?.name])

  if (!DynamicComponent) return null

  return (
    <DynamicComponent {...(props as TProps)} currentPage={1} totalPages={10} />
  )
}

// import { ComponentType } from "react"
// import type { RegistryItem } from "shadcn/registry"

// interface ComponentLoaderProps {
//   component: RegistryItem
// }

// export default async function ComponentLoader<TProps extends object>({
//   component,
//   ...props
// }: ComponentLoaderProps & TProps) {
//   if (!component?.name) {
//     return null
//   }

//   try {
//     const Component = (
//       await import(`@/registry/default/components/${component.name}`)
//     ).default as ComponentType<TProps>

//     return <Component {...(props as TProps)} currentPage={1} totalPages={10} />
//   } catch (error) {
//     console.error(`Failed to load component ${component.name}:`, error)
//     return null
//   }
// }
