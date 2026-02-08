"use client"

import { JSX, useEffect, useState } from "react"
//import dynamic from "next/dynamic"
import { CodeIcon, Maximize2 } from "lucide-react"
import type { RegistryItem } from "shadcn/registry"

import { convertRegistryPaths } from "@/lib/utils"
import ComponentCli from "@/components/cli-commands"
import CodeBlock, { highlight } from "@/components/code-block"
import ComponentLoader from "@/components/component-loader-client"
import CopyButton from "@/components/copy-button"
import CopyRegistry from "@/components/copy-registry"
import FavoriteButton from "@/components/favorite-button"
import OpenInV0 from "@/components/open-in-v0"
import { Button } from "@/registry/default/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip"

export default function ComponentDetails({
  component,
  categorie,
}: {
  component: RegistryItem
  categorie: { slug: string; name: string }
}) {
  const [code, setCode] = useState<string | null>(null)
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(
    null
  )

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode("")
      setHighlightedCode(null)
    }

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/${component.name}.json`)
        if (!response.ok) {
          handleEmptyCode()
          return
        }

        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          handleEmptyCode()
          return
        }

        const data = await response.json()
        const codeContent = convertRegistryPaths(data.files[0].content) || ""
        setCode(codeContent)

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, "tsx")
        setHighlightedCode(highlighted)
      } catch (error) {
        console.error("Failed to load code:", error)
        handleEmptyCode()
      }
    }

    loadCode()
  }, [component.name])

  return (
    <div className="absolute top-2 right-2 z-10 flex gap-1 peer-data-comp-loading:hidden">
      <FavoriteButton
        component={{ id: component.name, name: component.name }}
        categorie={categorie}
        className="opacity-0 group-focus-within/item:opacity-100 group-hover/item:opacity-100 lg:opacity-0"
      />
      <CopyRegistry url={`https://ui.woilasoft.com/r/${component.name}.json`} />
      <OpenInV0
        componentSource={`https://ui.woilasoft.com/r/${component.name}.json`}
      />
      <Dialog>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
                  >
                    <Maximize2 size={16} aria-hidden={true} />
                  </Button>
                </DialogTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="text-muted-foreground px-2 py-1 text-xs">
              Maximize view
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="flex max-h-[90vh] max-w-[90vw] flex-col overflow-hidden p-0 sm:max-h-[90vh] sm:max-w-[90vw]">
          <DialogHeader className="sr-only">
            <DialogTitle>Component Preview</DialogTitle>
            <DialogDescription>
              Full screen preview of the component
            </DialogDescription>
          </DialogHeader>
          <div className="items-top justify-top mt-auto flex h-full flex-1 flex-col overflow-auto">
            <div className="mx-auto mt-auto h-full w-full">
              <ComponentLoader
                component={component}
                className="h-full !max-h-none"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground/80 hover:text-foreground transition-none hover:bg-transparent disabled:opacity-100 lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
                  >
                    <CodeIcon size={16} aria-hidden={true} />
                  </Button>
                </DialogTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="text-muted-foreground px-2 py-1 text-xs">
              View code
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            {JSON.stringify(component.categories)}
            <DialogTitle className="text-left">Installation</DialogTitle>
            <DialogDescription className="sr-only">
              Use the CLI to add components to your project
            </DialogDescription>
          </DialogHeader>
          <div className="min-w-0 space-y-5">
            <ComponentCli name={component.name} />
            <div className="space-y-4">
              <p className="text-lg font-semibold tracking-tight">Code</p>
              <div className="relative">
                {code === "" ? (
                  <p className="text-muted-foreground text-sm">
                    No code available. If you think this is an error, please{" "}
                    <a
                      href="https://github.com/origin-space/originui/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium underline hover:no-underline"
                    >
                      open an issue
                    </a>
                    .
                  </p>
                ) : (
                  <>
                    <CodeBlock
                      code={code}
                      lang="tsx"
                      preHighlighted={highlightedCode}
                    />
                    <CopyButton componentSource={code} />
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
