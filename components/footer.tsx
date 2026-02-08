import { PlusIcon } from "lucide-react"

const Cross = () => (
  <div className="relative h-6 w-6">
    <div className="bg-border absolute left-3 h-6 w-px" />
    <div className="bg-border absolute top-3 h-px w-6" />
    <PlusIcon
      size={20}
      className="text-muted-foreground/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    />
  </div>
)

export default function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <div className="border-border relative border-t px-4 py-8 sm:border-x sm:border-t-0 sm:px-6">
          <div className="absolute -top-3 -left-3 z-10 h-6">
            <Cross />
          </div>
          <div className="absolute -top-3 -right-3 z-10 h-6 -translate-x-px">
            <Cross />
          </div>

          <div className="flex justify-between gap-2 max-sm:flex-col max-sm:text-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Woilasoft UI
            </p>
            <p className="text-muted-foreground text-sm">
              A project by{" "}
              <a
                className="text-foreground decoration-border font-medium underline underline-offset-4 hover:no-underline"
                href="https://woilasoft.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                woilasoft
              </a>{" "}
              and{" "}
              <a
                className="text-foreground decoration-border font-medium underline underline-offset-4 hover:no-underline"
                href="https://originui.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                originUI
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
