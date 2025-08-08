"use client";

import { ShoppingCart } from "lucide-react";

import { useEffect, useState } from "react";
import LinkButton from "./buttonLink";

export function CartButtonLink() {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await fetch("/api/cart", { cache: "no-store" });
        const data = await res.json();
        const quantity = data?.items?.reduce((acc: number, item: any) => acc + item.quantity, 0) || 0;
        setTotal(quantity);
      } catch (err) {
        console.error("Error al obtener el carrito:", err);
      }
    }

    fetchCart();
  }, []);
  
  return (
    <LinkButton
      href="/cart"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg  transition"
      variant="outline"
    >
      <ShoppingCart className="w-5 h-5" />
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-white">{total}</span>
    </LinkButton>
  );
}
