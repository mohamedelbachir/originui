"use client"

import * as React from "react"
//import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"

interface IframeWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const IframeWrapper = React.forwardRef<
  HTMLDivElement,
  IframeWrapperProps
>(({ children, className, ...props }, ref) => {
  const [mountNode, setMountNode] = React.useState<HTMLElement | null>(null)
  const iframeRef = React.useRef<HTMLIFrameElement>(null)

  React.useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const handleLoad = () => {
      const doc = iframe.contentDocument
      if (!doc) return

      // Set mount node
      setMountNode(doc.body)

      // Copy styles
      const parentDoc = window.document
      
      // Copy link tags (e.g., for external stylesheets)
      Array.from(parentDoc.querySelectorAll('link[rel="stylesheet"]')).forEach(link => {
        const newLink = link.cloneNode(true)
        doc.head.appendChild(newLink)
      })

      // Copy style tags (e.g., for Tailwind or CSS-in-JS)
      Array.from(parentDoc.querySelectorAll('style')).forEach(style => {
        const newStyle = style.cloneNode(true)
        doc.head.appendChild(newStyle)
      })

      // Copy classes from html and body to preserve theme (dark/light mode)
      doc.documentElement.className = parentDoc.documentElement.className
      doc.body.className = parentDoc.body.className
      doc.documentElement.setAttribute('dir', parentDoc.documentElement.getAttribute('dir') || 'ltr')
      
      if (parentDoc.documentElement.getAttribute('style')) {
         doc.documentElement.setAttribute('style', parentDoc.documentElement.getAttribute('style')!)
      }
    }

    if (iframe.contentDocument?.readyState === 'complete') {
        handleLoad()
    } else {
        iframe.addEventListener('load', handleLoad)
    }

    return () => {
      iframe.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={cn("h-full w-full overflow-hidden rounded-md border bg-background", className)}
      {...props}
    >
      {/* <iframe
        ref={iframeRef}
        className="h-full w-full border-0 bg-transparent"
        title="Component Preview"
        // Ensure contentDocument is accessible
        //srcDoc="<!DOCTYPE html><html><head></head><body></body></html>"
      /> */}
      {children}
      {/* {mountNode && createPortal(children, mountNode)} */}
    </div>
  )
})
IframeWrapper.displayName = "IframeWrapper"