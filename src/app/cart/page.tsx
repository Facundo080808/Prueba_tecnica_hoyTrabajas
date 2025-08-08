"use client";
import Image from "next/image";
import Button from "@/components/UI/button";
import { useCart } from "@/hooks/useCart";


export default function CartPage() {
  const { cart} = useCart();
 
  if (cart.length === 0) {
    return  <p className="fixed inset-0 flex items-center justify-center text-center">
              El carrito está vacío.
            </p>

  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="max-w-3xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Tu Carrito</h1>
      <ul className="divide-y divide-gray-200 dark:divide-neutral-700">
        {cart.map(({ id, name, price, image }) => (
          <li key={id} className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <Image
                  src={image || "/productDefault.webp"}
                  alt={name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-semibold dark:text-white">{name}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-semibold dark:text-white">${price.toLocaleString()}</p>
              
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right flex justify-between items-center">
        <Button variant="buy">Comprar</Button>
        <p className="text-xl font-bold dark:text-white">Total: ${totalPrice.toLocaleString()}</p>
      </div>
    </main>
  );
}
