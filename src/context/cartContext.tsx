"use client"
import { createContext, useEffect, useState } from "react";
import { IProduct , CartContextType } from "@/lib/types/types";
import { getCartApi } from "@/lib/api/getCartApi";

export const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<IProduct[]>([]);
  
  const fetchCart = async () => {
  try {
    const response = await getCartApi();
    setCart(response);
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
  }
};
  useEffect(() => {
  fetchCart();
}, []);

  return (
    <CartContext.Provider value={{ cart, setCart, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
}


