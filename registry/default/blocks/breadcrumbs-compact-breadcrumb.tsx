import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

export default function CompactBreadcrumb() {
  return (
    <Breadcrumb className="p-6">
      <BreadcrumbList className="gap-0.5 text-xs">
        <BreadcrumbItem className="gap-0.5">
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="mx-0">
          <ChevronRight className="h-3 w-3" />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="gap-0.5">
          <BreadcrumbLink href="/products">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="mx-0">
          <ChevronRight className="h-3 w-3" />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="gap-0.5">
          <BreadcrumbLink href="/products/categories">
            Categories
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="mx-0">
          <ChevronRight className="h-3 w-3" />
        </BreadcrumbSeparator>
        <BreadcrumbItem className="gap-0.5">
          <BreadcrumbPage>Electronics</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
