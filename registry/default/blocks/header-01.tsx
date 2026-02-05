import { Button } from "@/registry/default/ui/button"

export default function Header01() {
  return (
    <header className="bg-background border-b px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold">
            Woilasoft
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#" className="hover:text-primary text-sm font-medium">
              Components
            </a>
            <a href="#" className="hover:text-primary text-sm font-medium">
              Blocks
            </a>
            <a href="#" className="hover:text-primary text-sm font-medium">
              Templates
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button size="sm">Get started</Button>
        </div>
      </div>
    </header>
  )
}
