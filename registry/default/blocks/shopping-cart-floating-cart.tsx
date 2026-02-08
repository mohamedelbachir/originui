"use client";

import { Button } from "@/registry/default/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/default/ui/card";
import {
  ShoppingCart,
  Trash2,
  Plus,
  Minus,
  CreditCard,
  Package,
  X,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/registry/default/ui/badge";
import { Separator } from "@/registry/default/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  color: string;
  size: string;
  stock: number;
}

export default function FloatingCart() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Classic Chronograph Watch",
      price: 299.99,
      originalPrice: 399.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      color: "Black",
      size: "Standard",
      stock: 5,
    },
    {
      id: "2",
      name: "Sport Diver Watch",
      price: 199.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      color: "Blue",
      size: "Standard",
      stock: 3,
    },
  ]);

  const [isOpen, setIsOpen] = useState(true);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 200 ? 0 : 5.99;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, change: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(
            1,
            Math.min(item.stock, item.quantity + change)
          );
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Height set for example purpose only */}
      <div className="h-[750px] p-6 relative">
        {/* Cart Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full h-14 w-14"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <div className="relative">
              <ShoppingCart className="h-6 w-6" />
              {items.length > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-3 -right-3 h-5 w-5 p-0 flex items-center justify-center"
                >
                  {totalItems}
                </Badge>
              )}
            </div>
          )}
        </Button>

        {/* Floating Cart Panel */}
        {isOpen && (
          <Card className="fixed bottom-24 right-6 w-80 shadow-xl z-40 border-2 animate-in slide-in-from-bottom-5 duration-300">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Your Cart</CardTitle>
                <Badge variant="outline" className="font-normal">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </Badge>
              </div>
              <CardDescription>
                Review your items before checkout
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              {/* Cart Items */}
              <div className="max-h-[300px] overflow-y-auto px-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 py-3 border-b last:border-0"
                  >
                    {/* Product Image */}
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-sm truncate w-40">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {item.color} • {item.size}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 absolute right-6"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-none"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-xs">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 rounded-none"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="text-right">
                          <div className="font-medium text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>
                          {item.originalPrice && (
                            <div className="text-xs text-muted-foreground line-through">
                              ${(item.originalPrice * item.quantity).toFixed(2)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="px-6 py-4 bg-muted/30 space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-2 pt-4 pb-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <Package className="h-3 w-3" />
                <span>Free shipping on orders over $200</span>
              </div>

              <Button className="w-full">
                <CreditCard className="h-4 w-4 mr-2" />
                Checkout
              </Button>

              <Button variant="outline" className="w-full" size="sm">
                <span>View Cart</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </>
  );
}
