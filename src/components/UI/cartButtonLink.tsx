"use client";

import { ShoppingCart } from "lucide-react";
import LinkButton from "./buttonLink";
import { useCart } from "@/hooks/useCart";

export function CartButtonLink() {
  const { cart } = useCart();

  return (
    <LinkButton
      href="/cart"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg transition"
      variant="outline"
    >
      <ShoppingCart className="w-5 h-5" />
      {cart.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-white">
          {cart.length}
        </span>
      )}
    </LinkButton>
  );
}
