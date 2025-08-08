import { useCart } from "@/hooks/useCart";

export function useIsInCart(productId: number): boolean {
  const { cart } = useCart();
  return cart.some((item) => item.id === productId);
}
