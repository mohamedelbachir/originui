"use client"

import { LockIcon, CodeIcon, EyeIcon } from "lucide-react"
import { Button } from "@/registry/default/ui/button"

interface CodeViewerProps {
  item: {
    name: string
    previewUrl?: string
    repoUrl?: string
    isPaid?: boolean
    price?: number
    isPrivate?: boolean
  }
}

export default function CodeViewer({ item }: CodeViewerProps) {
  const github1sUrl = item.repoUrl?.replace("github.com", "github1s.com")

  return (
    <div className="relative h-full w-full bg-muted">
      {item.isPaid ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm p-12 text-center">
          <div className="mb-6 rounded-full bg-primary/10 p-4">
            <LockIcon size={32} className="text-primary" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">This is a Premium Item</h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            Get full access to the source code and documentation for this item.
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="text-4xl font-bold">${item.price}</span>
            <Button size="lg" className="w-full min-w-[200px]">
              Buy Now
            </Button>
          </div>
        </div>
      ) : item.isPrivate ? (
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <LockIcon size={48} className="text-muted-foreground mb-4 opacity-20" />
          <h3 className="mb-2 font-bold">Private Repository</h3>
          <p className="text-muted-foreground max-w-sm">
            The source code for this item is currently in a private repository.
          </p>
        </div>
      ) : github1sUrl ? (
        <iframe
          src={github1sUrl}
          className="h-full w-full"
          title={`${item.name} Source Code`}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <CodeIcon size={48} className="text-muted-foreground mb-4 opacity-20" />
          <p className="text-muted-foreground">Source code not available yet.</p>
        </div>
      )}
    </div>
  )
}