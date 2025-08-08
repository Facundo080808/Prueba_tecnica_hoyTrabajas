import { NextRequest, NextResponse } from "next/server"
import { getCart, addToCart } from "@/lib/utils/cart"

export async function GET() {
  const currentCart = getCart()
  return NextResponse.json(currentCart)
}

export async function POST(request: NextRequest) {
  try {
    const { id } = await request.json()

    if (typeof id !== "number") {
      return NextResponse.json({ error: "ID inválido" }, { status: 400 })
    }

    const result = addToCart(id)

    switch (result) {
      case "added":
        return NextResponse.json({ message: "Producto agregado" })
      case "already_in_cart":
        return NextResponse.json({ message: "El producto ya está en el carrito" }, { status: 409 }) 
      case "not_found":
        return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 })
    }
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 })
  }
}

