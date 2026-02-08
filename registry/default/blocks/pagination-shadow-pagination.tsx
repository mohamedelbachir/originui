import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";

export default function ShadowPagination() {
  return (
    <div className="p-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="shadow-md hover:shadow-lg transition-shadow border-none"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="shadow-md hover:shadow-lg transition-shadow border-none"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
              className="shadow-lg border-none bg-primary text-primary-foreground hover:text-primary-foreground/90 hover:bg-primary/90"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="shadow-md hover:shadow-lg transition-shadow border-none"
            >
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis className="text-muted-foreground" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="shadow-md hover:shadow-lg transition-shadow border-none"
            >
              8
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="shadow-md hover:shadow-lg transition-shadow border-none"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
