import { ComponentType } from "react"
import type { RegistryItem } from "shadcn/registry"

import { cn } from "@/lib/utils"

//import { IframeWrapper } from "@/components/iframe-wrapper"

interface ComponentLoaderProps {
  component: RegistryItem
  subPath?: string
  className?: string
}

export default async function ComponentLoader<TProps extends object>({
  component,
  subPath = "components",
  className,
  ...props
}: ComponentLoaderProps & TProps) {
  if (!component?.name) {
    return null
  }

  try {
    const Component = (
      await import(`@/registry/default/${subPath}/${component.name}`)
    ).default as ComponentType<TProps>

    return (
      <div
        className={cn(
          "relative mx-auto flex max-h-[450px] w-full items-start justify-center overflow-auto py-5",
          className
        )}
      >
        <Component {...(props as TProps)} currentPage={1} totalPages={10} />
      </div>

      // <IframeWrapper className="h-full">
      //   <div className="flex min-h-full w-full items-center justify-center p-8">
      //     <Component {...(props as TProps)} currentPage={1} totalPages={10} />
      //   </div>
      // </IframeWrapper>
    )
  } catch (error) {
    console.error(`Failed to load component ${component.name}:`, error)
    return null
  }
}
