import Link from "next/link";
import { CreditCard, Smartphone } from "lucide-react";

export default function EcommerceFooterWithPayments() {
  return (
    <footer className="bg-muted/30 border-t px-4 py-8 md:py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-foreground font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-3">
            <h3 className="text-foreground font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/help"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div className="space-y-3">
            <h3 className="text-foreground font-semibold">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/bestsellers"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link
                  href="/sale"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-foreground font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/accessibility"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter - spans full width on mobile, single column on larger screens */}
          <div className="col-span-2 space-y-3 md:col-span-4 lg:col-span-1">
            <h3 className="text-foreground font-semibold">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get special offers and updates.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-input bg-background placeholder:text-muted-foreground focus:ring-ring flex-1 rounded-md border px-3 py-2 text-sm focus:ring-2 focus:outline-none"
              />
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">We accept:</span>
              <div className="flex items-center gap-3">
                {/* Visa */}
                <div className="bg-background flex h-8 w-12 items-center justify-center rounded border">
                  <CreditCard className="text-muted-foreground h-4 w-4" />
                </div>
                {/* Mastercard */}
                <div className="bg-background flex h-8 w-12 items-center justify-center rounded border">
                  <div className="flex gap-0.5">
                    <div className="h-3 w-3 rounded-full bg-red-500 opacity-80"></div>
                    <div className="-ml-1 h-3 w-3 rounded-full bg-yellow-500 opacity-80"></div>
                  </div>
                </div>
                {/* PayPal */}
                <div className="bg-background flex h-8 w-12 items-center justify-center rounded border">
                  <span className="text-xs font-bold text-blue-600">PP</span>
                </div>
                {/* Apple Pay */}
                <div className="bg-background flex h-8 w-12 items-center justify-center rounded border">
                  <Smartphone className="text-muted-foreground h-4 w-4" />
                </div>
                {/* Google Pay */}
                <div className="bg-background flex h-8 w-12 items-center justify-center rounded border">
                  <span className="text-muted-foreground text-xs font-bold">
                    G
                  </span>
                </div>
                {/* American Express */}
                <div className="bg-background flex h-8 w-12 items-center justify-center rounded border">
                  <span className="text-xs font-bold text-blue-600">AE</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-muted-foreground text-center text-sm md:text-right">
              <p>
                &copy; {new Date().getFullYear()} Your Store Name. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
