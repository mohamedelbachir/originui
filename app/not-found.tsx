import Link from "next/link"
import { HomeIcon, MoveRightIcon } from "lucide-react"

import { Section } from "@/components/section"
import { Button } from "@/registry/default/ui/button"

export default function NotFound() {
  return (
    <Section className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center py-20">
      <div className="bg-background relative overflow-hidden rounded-2xl border px-8 py-20 shadow-sm sm:px-16">
        {/* Background Patterns */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] dark:bg-[radial-gradient(#1d1d1d_1px,transparent_1px)]"></div>
        <div className="absolute inset-0 top-0 left-0 items-center bg-linear-to-t from-white from-0% to-transparent to-60% px-5 py-24 dark:from-[#050505]"></div>

        <article className="relative z-10 flex flex-col items-center text-center">
          <div className="bg-primary/10 text-primary mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white text-4xl font-black shadow-xl dark:border-neutral-800">
            404
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
            Page not found
          </h1>

          <p className="text-muted-foreground mx-auto mb-10 max-w-md text-lg">
            The page you&apos;re looking for does not exist or has been moved to
            another URL.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-8">
              <Link href="/">
                <HomeIcon className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full px-8"
            >
              <Link href="/showcase">
                Browse Components
                <MoveRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </Section>
  )
}
