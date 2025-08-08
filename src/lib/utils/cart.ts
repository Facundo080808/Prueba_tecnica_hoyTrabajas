import { productsList } from "./productsList"
import { IProduct } from "@/lib/types/types"


let cart: IProduct[] = []

export function getCart() {
  return cart
}

export function addToCart(productId: number): "added" | "already_in_cart" | "not_found" {
  const product = productsList.find(p => p.id === productId)
  if (!product) return "not_found"

  const alreadyInCart = cart.some(p => p.id === productId)
  if (alreadyInCart) return "already_in_cart"

  cart.push(product)
  return "added"
}
