import { IProduct } from "@/lib/types/types";
import Image from "next/image";
import Button from "@/components/UI/button";
import { postCardApi } from "@/lib/api/postCartApi";
import clsx from "clsx";
import { useIsInCart } from "@/hooks/useIsInCart";
import { useState } from "react";
import { useCart } from "@/hooks/useCart";



type CardProps = {
  product: IProduct;
};

export default function Card( {product }: CardProps) {
  const { fetchCart} = useCart();
  const { name, price, image } = product;
  const imageUrl = image || "/productDefault.webp";
  const existsInCart = useIsInCart(product.id);
  const [isAdding, setIsAdding] = useState<boolean>(existsInCart);
 
  const handleAddToCart = async () => {
  try {
    if (existsInCart || isAdding) return;
    await postCardApi(product.id);
    await fetchCart();
    setIsAdding(true);
  } catch(error) {
   console.error(error);
  }
};


  return (
   <article className="rounded-2xl shadow-md p-4 border border-gray-200 dark:border-neutral-700 hover:shadow-lg transition duration-300 bg-white dark:bg-neutral-900 flex flex-col">
    <figure className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-4">
      <Image
        priority
        src={imageUrl}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </figure>
    <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
      {name}
    </h2>
    <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">
      ${price.toLocaleString("es-AR")}
    </p>
    <Button
      variant="buy"
      onClick={handleAddToCart}
      className={clsx(
        "mt-auto transition-all duration-300",
        (existsInCart || isAdding)  && "animate-shake bg-red-500 text-white hover:bg-red-800  dark:bg-red-500 dark:text-white dark:hover:bg-red-800"
      )}
    >
      {existsInCart || isAdding  ? (
        <span>Ya está en el carrito</span>
      ) : (
        <>
       
          Añadir al carrito
        </>
      )}
    </Button>

  </article>
  );
}
