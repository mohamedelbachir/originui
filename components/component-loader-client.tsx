"use client"

import { ComponentType } from "react"
import dynamic from "next/dynamic"
import { LoaderCircleIcon } from "lucide-react"
import type { RegistryItem } from "shadcn/registry"

import { cn } from "@/lib/utils"

//import { IframeWrapper } from "@/components/iframe-wrapper"

interface ComponentLoaderProps {
  component: RegistryItem
  className?: string
}

export default function ComponentLoader<TProps extends object>({
  component,
  className,
  ...props
}: ComponentLoaderProps & TProps) {
  if (!component.files?.length) {
    return null
  }
  const path = component.files[0].path
  const newPath = path.replace("registry/", "")
  const Component = dynamic(
    () => import(`@/registry/${newPath}`).catch(() => () => null),
    {
      loading: () => (
        <div
          data-comp-loading="true"
          className="peer flex min-h-20 items-center justify-center"
        >
          <span className="sr-only">Loading component...</span>
          <LoaderCircleIcon
            className="text-input -ms-1 animate-spin"
            size={24}
            aria-hidden="true"
          />
        </div>
      ),
      ssr: false,
    }
  ) as ComponentType<TProps>

  return (
    // <IframeWrapper className="min-h-[350px]">
    <div
      className={cn(
        "flex h-fit max-h-[200px] w-full items-start justify-center overflow-auto p-8 sm:max-h-[450px]",
        className
      )}
    >
      <Component {...(props as TProps)} currentPage={1} totalPages={10} />
    </div>
    // </IframeWrapper>
  )
}
