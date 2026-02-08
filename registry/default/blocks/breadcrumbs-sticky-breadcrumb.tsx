import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

export default function StickyBreadcrumb() {
  return (
    <div className="relative h-[300px] border rounded-md overflow-hidden">
      {/* This container simulates a scrollable area */}
      <div className="h-full overflow-y-auto">
        {/* Sticky breadcrumb */}
        <Breadcrumb className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b p-3 shadow-sm">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Products</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/products/categories">
                Categories
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium">
                Electronics
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Sample content to demonstrate scrolling */}
        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold">Electronics</h2>
          <p className="text-muted-foreground">
            Browse our selection of electronic products.
          </p>
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-md">
                <h3 className="font-medium">Product Category {i + 1}</h3>
                <p className="text-sm text-muted-foreground">
                  This is a sample product category description.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
