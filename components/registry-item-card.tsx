"use client"

import { CodeIcon, ExternalLinkIcon, EyeIcon, LockIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/registry/default/ui/button"

import CodeViewer from "./code-viewer"

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
  basePath?: string
}

export default function RegistryItemCard({ item }: RegistryItemCardProps) {
  return (
    <div className="flex scroll-mt-24 flex-col gap-4" id={item.slug}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">{item.name}</h3>
          {item.description && (
            <p className="text-muted-foreground text-sm">{item.description}</p>
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
                <a
                  href={item.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLinkIcon size={14} />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        <div className="bg-background relative mt-4 overflow-hidden rounded-xl border shadow-sm">
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
                <div className="text-muted-foreground flex h-full flex-col items-center justify-center p-12 text-center">
                  <EyeIcon size={48} className="mb-4 opacity-20" />
                  <p>No live preview available.</p>
                </div>
              )}

              {item.isPaid && (
                <div className="bg-background/90 absolute top-4 right-4 flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-sm">
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
