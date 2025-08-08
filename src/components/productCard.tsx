import { IProduct } from "@/lib/types/types";
import Image from "next/image";
import Button from "@/components/UI/button";
import { ShoppingCart } from "lucide-react";

type CardProps = {
  product: IProduct;
};

export default function Card( {product }: CardProps) {
  const { name, price, image } = product;
  const imageUrl = image || "/productDefault.webp";

  return (
   <article className="rounded-2xl shadow-md p-4 border border-gray-200 dark:border-neutral-700 hover:shadow-lg transition duration-300 bg-white dark:bg-neutral-900 flex flex-col">
    <figure className="w-full aspect-[4/3] relative rounded-xl overflow-hidden mb-4">
      <Image
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
    <Button variant="buy" className="mt-auto" onClick={() => {}}>
      <ShoppingCart className="w-5 h-5" />
    </Button>
  </article>
  );
}
