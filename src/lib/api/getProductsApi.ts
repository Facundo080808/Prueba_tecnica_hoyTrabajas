export async function getProducts() {
  const res = await fetch("/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("No se pudieron obtener los productos");
  }

  return res.json();
}
