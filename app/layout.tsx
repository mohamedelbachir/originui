import type { Metadata, Viewport } from "next"
//import { Outfit as FontHeading, Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import Script from "next/script"

// import Header from "@/components/header"
import { CommandMenu } from "@/components/command-menu"
import Footer from "@/components/footer"
import { Header } from "@/components/header/index"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster as Sonner } from "@/registry/default/ui/sonner"
import { Toaster } from "@/registry/default/ui/toaster"

import "./globals.css"

// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// })

// const fontHeading = FontHeading({
//   subsets: ["latin"],
//   variable: "--font-heading",
// })

const outfit = localFont({
  src: [
    {
      path: "./_fonts/Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./_fonts/Outfit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./_fonts/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./_fonts/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./_fonts/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./_fonts/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./_fonts/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./_fonts/Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
})

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://ui.woilasoft.com"),
  title:
    "Woilasoft UI - Beautiful UI components built with Tailwind CSS and React",
  description:
    "An extensive collection of copy-and-paste components for quickly building app UIs. Free, open-source, and ready to drop into your projects.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        //className={`${fontSans.variable} ${fontHeading.variable} font-sans tracking-[-0.25px] antialiased has-not-data-home:before:absolute has-not-data-home:before:inset-x-0 has-not-data-home:before:h-100 has-not-data-home:before:bg-linear-to-b has-not-data-home:before:from-zinc-100 has-data-home:bg-zinc-50 dark:has-not-data-home:before:hidden dark:has-data-home:bg-zinc-950`}
        className={` ${outfit.variable} font-sans tracking-[-0.25px] antialiased has-not-data-home:before:absolute has-not-data-home:before:inset-x-0 has-not-data-home:before:h-100 has-not-data-home:before:bg-linear-to-b has-not-data-home:before:from-zinc-100 has-data-home:bg-zinc-50 dark:has-not-data-home:before:hidden dark:has-data-home:bg-zinc-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="overflow-hidden px-4 supports-[overflow:clip]:overflow-clip sm:px-6">
            <div className="before:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] after:bg-[linear-gradient(to_bottom,--theme(--color-border/.3),--theme(--color-border)_200px,--theme(--color-border)_calc(100%-200px),--theme(--color-border/.3))] relative mx-auto w-full max-w-6xl before:absolute before:inset-y-0 before:-left-12 before:w-px after:absolute after:inset-y-0 after:-right-12 after:w-px">
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="grow">{children}</main>
                <Footer />
              </div>
            </div>
          </div> */}
          <Header />
          {/* <div className="container mx-auto h-[52px] sm:h-16 sm:border-x" /> */}
          <main className="divide-y overflow-x-clip sm:border-b">
            {children}
          </main>
          <Footer />
          <CommandMenu />
          <Toaster />
          <Sonner />
        </ThemeProvider>
        <Script
          src="https://plausible.cruip.com/js/script.js"
          data-domain="ui.woilasoft.com"
          strategy="beforeInteractive"
          defer
        />
      </body>
    </html>
  )
}
