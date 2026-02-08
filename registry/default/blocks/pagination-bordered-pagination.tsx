import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/default/ui/pagination";

export default function BorderedPagination() {
  return (
    <div className="p-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              className="border-2 border-border hover:border-primary transition-colors"
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="border-2 border-border hover:border-primary transition-colors"
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              isActive
              className="border-2 border-primary bg-transparent text-primary hover:bg-primary/10"
            >
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href="#"
              className="border-2 border-border hover:border-primary transition-colors"
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
              className="border-2 border-border hover:border-primary transition-colors"
            >
              8
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#"
              className="border-2 border-border hover:border-primary transition-colors"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
