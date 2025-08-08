import { NextResponse } from "next/server"
import { productsList } from "@/lib/utils/productsList"

export async function GET() {
  return NextResponse.json(productsList)
}
