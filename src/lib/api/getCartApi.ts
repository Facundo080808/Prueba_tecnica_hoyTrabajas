export async function getCartApi() {
  const res = await fetch("/api/cart", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("No se pudieron obtener los productos del carrito");
  }

  return res.json();
}
