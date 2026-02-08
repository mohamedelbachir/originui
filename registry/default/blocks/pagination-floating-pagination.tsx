import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";

export default function FloatingPagination() {
  return (
    <div className="relative h-[300px] border rounded-md overflow-hidden">
      {/* This container simulates a scrollable area */}
      <div className="h-full overflow-y-auto p-4">
        {/* Sample content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Sample Content</h2>
          <p className="text-muted-foreground">
            Scroll down to see the floating pagination.
          </p>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-4 border rounded-md">
              <h3 className="font-medium">Item {i + 1}</h3>
              <p className="text-sm text-muted-foreground">
                This is a sample item description.
              </p>
            </div>
          ))}
        </div>

        {/* Floating pagination */}
        <div className="sticky bottom-4 left-0 right-0 flex justify-center mt-4">
          <Pagination>
            <PaginationContent className="bg-card text-card-foreground shadow-md border rounded-full p-1">
              <PaginationItem>
                <PaginationPrevious href="#" className="rounded-full" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-full">
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="rounded-full">
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-full">
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="rounded-full">
                  8
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="rounded-full" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
