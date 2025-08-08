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
    throw new Error("No se pudieron obtener los productos");
  }

  return res.json();
}
