import { Button } from "@/registry/default/ui/button";
import { Input } from "@/registry/default/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function PageHeadingWithTabs() {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px] py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Products
            </h1>
            <p className="mt-2 text-muted-foreground">
              Browse and manage your products inventory
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8"
              />
            </div>
            <Button>
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>

        <div className="mt-8 flex gap-4 border-b">
          <Link
            href="#"
            className="border-b-2 border-primary px-4 py-2.5 text-sm font-medium"
          >
            All Products
          </Link>
          <Link
            href="#"
            className="border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-muted-foreground hover:border-muted"
          >
            Active
          </Link>
          <Link
            href="#"
            className="border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-muted-foreground hover:border-muted"
          >
            Draft
          </Link>
          <Link
            href="#"
            className="border-b-2 border-transparent px-4 py-2.5 text-sm font-medium text-muted-foreground hover:border-muted"
          >
            Archived
          </Link>
        </div>
      </div>
    </div>
  );
}
