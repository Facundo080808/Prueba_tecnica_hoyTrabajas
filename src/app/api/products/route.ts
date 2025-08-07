import { NextResponse } from "next/server"
import { productsList } from "@/lib/productsList"

export async function GET() {
  return NextResponse.json(productsList)
}
