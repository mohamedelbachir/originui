import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/default/ui/breadcrumb";
import { Check } from "lucide-react";

export default function ProgressBreadcrumb() {
  // In a real application, this would be dynamic based on the current step
  const currentStep = 3;
  const steps = [
    { id: 1, name: "Cart", href: "/cart" },
    { id: 2, name: "Shipping", href: "/checkout/shipping" },
    { id: 3, name: "Payment", href: "/checkout/payment" },
    { id: 4, name: "Confirmation", href: "/checkout/confirmation" },
  ];

  return (
    <Breadcrumb className="p-6">
      <BreadcrumbList className="flex-wrap justify-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <BreadcrumbItem>
              {step.id < currentStep ? (
                <BreadcrumbLink
                  href={step.href}
                  className={`flex items-center gap-2 ${
                    step.id < currentStep ? "text-primary" : ""
                  }`}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    <Check className="h-3 w-3" />
                  </span>
                  <span>{step.name}</span>
                </BreadcrumbLink>
              ) : step.id === currentStep ? (
                <BreadcrumbPage className="flex items-center gap-2 font-medium">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                    {step.id}
                  </span>
                  <span>{step.name}</span>
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href={step.href}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-muted-foreground text-xs">
                    {step.id}
                  </span>
                  <span>{step.name}</span>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>

            {index < steps.length - 1 && (
              <BreadcrumbSeparator className="mx-2 text-muted-foreground">
                <div className="h-px w-8 bg-muted-foreground/30"></div>
              </BreadcrumbSeparator>
            )}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
