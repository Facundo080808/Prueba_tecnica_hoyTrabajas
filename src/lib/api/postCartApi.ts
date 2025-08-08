export async function postCardApi(id : number) {
  const res = await fetch("/api/cart", {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id}), 
  });

  if (!res.ok) {
    throw new Error("Erro al añadir al carrito");
  }

  return res.json();
}
