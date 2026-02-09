import { Section } from "@/components/section"
import {
  Loader2Icon
} from "lucide-react"
export default function Loading(){
    return <Section
        sectionClassName="mx-auto max-w-[1600px] px-4 sm:px-6 "
        crossClassName="!hidden"
      >
        <div className="flex min-h-[calc(100vh-150px)] flex-col items-center justify-center gap-4 text-center">
          <div className="py-20 text-center">
            <Loader2Icon className="text-muted-foreground mx-auto mb-4 h-8 w-8 animate-spin opacity-20" />
          </div>
        </div>
      </Section>
}