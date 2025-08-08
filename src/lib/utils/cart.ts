import { productsList } from "./productsList"
import { IProduct } from "./types"


let cart: IProduct[] = []

export function getCart() {
  return cart
}

export function addToCart(productId: number) {
  const product = productsList.find(p => p.id === productId)
  if (!product) return false
  cart.push(product)
  return true
}
