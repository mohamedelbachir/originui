"use client"

import { useState } from "react"
import { LockIcon, CodeIcon, EyeIcon, ExternalLinkIcon, GithubIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import { cn } from "@/lib/utils"
import CodeViewer from "./code-viewer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RegistryItemCardProps {
  item: {
    name: string
    slug: string
    description?: string
    previewUrl?: string
    repoUrl?: string
    isPaid?: boolean
    price?: number
    isPrivate?: boolean
  }
  basePath: string
}

export default function RegistryItemCard({ item, basePath }: RegistryItemCardProps) {
  return (
    <div className="flex flex-col gap-4 scroll-mt-24" id={item.slug}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">{item.name}</h3>
          {item.description && (
            <p className="text-sm text-muted-foreground">{item.description}</p>
          )}
        </div>
      </div>

      <Tabs defaultValue="preview" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="preview" className="gap-2">
              <EyeIcon size={14} />
              Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="gap-2">
              <CodeIcon size={14} />
              Code
            </TabsTrigger>
          </TabsList>
          
          <div className="flex items-center gap-2">
            {item.previewUrl && (
              <Button variant="outline" size="sm" asChild className="h-8 gap-2">
                <a href={item.previewUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon size={14} />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="mt-4 relative overflow-hidden rounded-xl border bg-background shadow-sm">
          <TabsContent value="preview" className="m-0 border-0">
            <div className="bg-grid-zinc-100/50 dark:bg-grid-zinc-900/50 relative aspect-video w-full">
              {item.previewUrl ? (
                <iframe
                  src={item.previewUrl}
                  className="h-full w-full"
                  title={`${item.name} Preview`}
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center p-12 text-center text-muted-foreground">
                  <EyeIcon size={48} className="mb-4 opacity-20" />
                  <p>No live preview available.</p>
                </div>
              )}
              
              {item.isPaid && (
                <div className="absolute top-4 right-4 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-bold shadow-sm flex items-center gap-1 border">
                  <LockIcon size={12} />
                  Premium ${item.price}
                </div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="code" className="m-0 border-0">
            <div className="h-[600px]">
              <CodeViewer item={item} />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}