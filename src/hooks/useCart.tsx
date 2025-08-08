import { CartContext } from "@/context/cartContext";
import { useContext } from "react";


export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe usarse dentro de un CartProvider");
  }
  return context;
}