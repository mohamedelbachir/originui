"use client"

import * as React from "react"
import {
  CheckIcon,
  XIcon,
  CreditCardIcon,
  CircleIcon,
  Loader2Icon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Perfect for small projects and individuals.",
    features: ["5 Components", "Basic Documentation", "Community Support", "Free Updates"],
    buttonText: "Current Plan",
    current: true,
  },
  {
    name: "Pro",
    price: "49",
    description: "Ideal for professional developers and startups.",
    features: [
      "All Components",
      "Advanced Blocks",
      "Priority Support",
      "Custom Themes",
      "Private Discord Access",
    ],
    buttonText: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "199",
    description: "Custom solutions for large organizations.",
    features: [
      "Unlimited Everything",
      "Dedicated Account Manager",
      "SLA Support",
      "Custom Development",
      "Team Training",
    ],
    buttonText: "Contact Sales",
  },
]

const paymentMethods = [
  { id: "card", name: "Credit Card", icon: CreditCardIcon },
  { id: "paypal", name: "PayPal", icon: CircleIcon },
  { id: "orange", name: "Orange Money", icon: CircleIcon, color: "text-orange-500" },
  { id: "mtn", name: "MTN Money", icon: CircleIcon, color: "text-yellow-500" },
]

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = React.useState(plans[1])
  const [paymentMethod, setPaymentMethod] = React.useState("card")
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [modalType, setModalType] = React.useState<"success" | "failed" | null>(null)

  const handlePayment = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      // Randomly succeed or fail for demo purposes
      setModalType(Math.random() > 0.3 ? "success" : "failed")
    }, 2000)
  }

  return (
    <div className="w-full py-12">
      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-background p-6 shadow-sm transition-all hover:shadow-md",
              plan.popular && "border-primary ring-1 ring-primary",
              plan.current && "opacity-80"
            )}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1">
                Most Popular
              </Badge>
            )}
            <div className="mb-8">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">${plan.price}</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="h-5 w-5 shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={plan.popular ? "default" : "outline"}
              className="w-full"
              disabled={plan.current}
              onClick={() => setSelectedPlan(plan)}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>

      {/* Payment Selection Area (Only shown if a non-current plan is selected) */}
      {!selectedPlan.current && (
        <div className="mt-16 rounded-2xl border bg-muted/30 p-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold">Secure Payment</h2>
              <p className="mt-2 text-muted-foreground">
                Choose your preferred payment method to upgrade to the {selectedPlan.name} plan.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center justify-between rounded-lg border bg-background p-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">Selected Plan</span>
                    <span className="text-lg font-bold">{selectedPlan.name}</span>
                  </div>
                  <span className="text-2xl font-bold">${selectedPlan.price}</span>
                </div>

                <div className="space-y-4">
                  <Label>Payment Method</Label>
                  <RadioGroup
                    value={paymentMethod}
                    onValueChange={setPaymentMethod}
                    className="grid grid-cols-2 gap-4"
                  >
                    {paymentMethods.map((method) => (
                      <Label
                        key={method.id}
                        htmlFor={`ps-${method.id}`}
                        className={cn(
                          "flex cursor-pointer flex-col items-center justify-between rounded-xl border-2 bg-background p-4 hover:bg-muted/50 [&:has([data-state=checked])]:border-primary",
                          paymentMethod === method.id && "border-primary"
                        )}
                      >
                        <RadioGroupItem value={method.id} id={`ps-${method.id}`} className="sr-only" />
                        <method.icon className={cn("mb-3 h-6 w-6", method.color)} />
                        <span className="text-xs font-medium">{method.name}</span>
                      </Label>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-end space-y-4">
              <div className="rounded-xl border bg-background p-6">
                <h3 className="font-bold">Order Summary</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${selectedPlan.price}.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="mt-4 border-t pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${selectedPlan.price}.00</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="h-12 w-full text-lg"
                disabled={isProcessing}
                onClick={handlePayment}
              >
                {isProcessing ? (
                  <>
                    <Loader2Icon className="mr-2 h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Pay $${selectedPlan.price}`
                )}
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Payment secured by industry standard encryption.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      <Dialog open={modalType === "success"} onOpenChange={() => setModalType(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <CheckIcon className="h-6 w-6 text-emerald-600" />
            </div>
            <DialogTitle className="text-center">Payment Successful!</DialogTitle>
            <DialogDescription className="text-center">
              Your subscription to the {selectedPlan.name} plan is now active. 
              Enjoy all the premium features!
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="w-full" onClick={() => setModalType(null)}>
              Go to Dashboard
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Failed Modal */}
      <Dialog open={modalType === "failed"} onOpenChange={() => setModalType(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <XIcon className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-center">Payment Failed</DialogTitle>
            <DialogDescription className="text-center">
              We couldn't process your payment. Please check your payment details 
              or try a different method.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button className="w-full" variant="destructive" onClick={() => setModalType(null)}>
              Try Again
            </Button>
            <Button className="w-full" variant="ghost" onClick={() => setModalType(null)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}