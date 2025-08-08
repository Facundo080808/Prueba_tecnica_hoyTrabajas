"use client";
import BestCombination from "@/components/bestCombinationFilter";
import ProductList from "@/components/productCardList";
import { CartButtonLink } from "@/components/UI/cartButtonLink";
import { useCart } from "@/hooks/useCart";
import { useEffect } from "react";


export default function Home() {
  const { fetchCart } = useCart();

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>
      <BestCombination />
     
        <ProductList />
     
      <CartButtonLink />
    </main>
  );
}
