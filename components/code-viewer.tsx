"use client"

import * as React from "react"
import {
  CheckIcon,
  CircleIcon,
  CodeIcon,
  CreditCardIcon,
  Loader2Icon,
  LockIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface CodeViewerProps {
  item: {
    name: string
    previewUrl?: string
    repoUrl?: string
    isPaid?: boolean
    price?: number
    isPrivate?: boolean
  }
}

const paymentMethods = [
  { id: "card", name: "Credit Card", icon: CreditCardIcon },
  { id: "paypal", name: "PayPal", icon: CircleIcon },
  {
    id: "orange",
    name: "Orange Money",
    icon: CircleIcon,
    color: "text-orange-500",
  },
  { id: "mtn", name: "MTN Money", icon: CircleIcon, color: "text-yellow-500" },
]

export default function CodeViewer({ item }: CodeViewerProps) {
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false)
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [paymentMethod, setPaymentMethod] = React.useState("card")
  const [modalType, setModalType] = React.useState<"success" | "failed" | null>(
    null
  )

  const github1sUrl = item.repoUrl?.replace("github.com", "github1s.com")

  const handlePayment = () => {
    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsCheckoutOpen(false)
      // Randomly succeed or fail for demo purposes
      setModalType(Math.random() > 0.3 ? "success" : "failed")
    }, 2000)
  }

  return (
    <div className="bg-muted relative h-full w-full">
      {item.isPaid ? (
        <div className="bg-background/80 absolute inset-0 z-10 flex flex-col items-center justify-center p-12 text-center backdrop-blur-sm">
          <div className="bg-primary/10 mb-6 rounded-full p-4">
            <LockIcon size={32} className="text-primary" />
          </div>
          <h3 className="mb-2 text-2xl font-bold">This is a Premium Item</h3>
          <p className="text-muted-foreground mb-8 max-w-md">
            Get full access to the source code and documentation for this item.
          </p>
          <div className="flex flex-col items-center gap-4">
            <span className="text-4xl font-bold">${item.price}</span>
            <Button
              size="lg"
              className="w-full min-w-[200px]"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Buy Now
            </Button>
          </div>
        </div>
      ) : item.isPrivate ? (
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <LockIcon
            size={48}
            className="text-muted-foreground mb-4 opacity-20"
          />
          <h3 className="mb-2 font-bold">Private Repository</h3>
          <p className="text-muted-foreground max-w-sm">
            The source code for this item is currently in a private repository.
          </p>
        </div>
      ) : github1sUrl ? (
        <iframe
          src={github1sUrl}
          className="h-full w-full"
          title={`${item.name} Source Code`}
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center p-12 text-center">
          <CodeIcon
            size={48}
            className="text-muted-foreground mb-4 opacity-20"
          />
          <p className="text-muted-foreground">
            Source code not available yet.
          </p>
        </div>
      )}

      {/* Checkout Dialog */}
      <Dialog open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Secure Checkout</DialogTitle>
            <DialogDescription>
              Complete your purchase for {item.name}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium">Template</span>
                <span className="text-lg font-bold">{item.name}</span>
              </div>
              <span className="text-2xl font-bold">${item.price}</span>
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
                    htmlFor={`cv-${method.id}`}
                    className={cn(
                      "bg-background hover:bg-muted/50 [&:has([data-state=checked])]:border-primary flex cursor-pointer flex-col items-center justify-between rounded-xl border-2 p-4",
                      paymentMethod === method.id && "border-primary"
                    )}
                  >
                    <RadioGroupItem
                      value={method.id}
                      id={`cv-${method.id}`}
                      className="sr-only"
                    />
                    <method.icon className={cn("mb-3 h-6 w-6", method.color)} />
                    <span className="text-xs font-medium">{method.name}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>
          </div>

          <DialogFooter>
            <Button
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
                `Pay $${item.price}`
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Success Modal */}
      <Dialog
        open={modalType === "success"}
        onOpenChange={() => setModalType(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
              <CheckIcon className="h-6 w-6 text-emerald-600" />
            </div>
            <DialogTitle className="text-center">
              Payment Successful!
            </DialogTitle>
            <DialogDescription className="text-center">
              You now have full access to {item.name}. The source code is now
              unlocked.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button className="w-full" onClick={() => setModalType(null)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Failed Modal */}
      <Dialog
        open={modalType === "failed"}
        onOpenChange={() => setModalType(null)}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <XIcon className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-center">Payment Failed</DialogTitle>
            <DialogDescription className="text-center">
              We couldn&apos;t process your payment. Please check your payment
              details or try a different method.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col gap-2 sm:flex-col">
            <Button
              className="w-full"
              variant="destructive"
              onClick={() => setIsCheckoutOpen(true)}
            >
              Try Again
            </Button>
            <Button
              className="w-full"
              variant="ghost"
              onClick={() => setModalType(null)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
