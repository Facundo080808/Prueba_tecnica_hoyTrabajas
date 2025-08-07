import { NextRequest, NextResponse } from "next/server"
import { getCart, addToCart } from "@/lib/cart"

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

    const success = addToCart(id)

    if (!success) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 })
    }

    return NextResponse.json({ message: "Producto agregado" })
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 })
  }
}
