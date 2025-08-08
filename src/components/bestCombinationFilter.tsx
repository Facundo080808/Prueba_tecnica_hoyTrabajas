"use client";
import { useEffect, useState } from "react";
import { useProducts } from "@/hooks/useProducts"; // Usa tu custom hook que accede al contexto
import Button from "./UI/button";

type Product = {
  id: number;
  name: string;
  price: number;
};

// 🧠 Algoritmo para encontrar mejor combinación
function findBestCombination(products: Product[], budget: number): Product[] {
  let bestCombo: Product[] = [];
  let maxTotal = 0;

  const totalCombinations = 1 << products.length;

  for (let i = 0; i < totalCombinations; i++) {
    const combo: Product[] = [];
    let total = 0;

    for (let j = 0; j < products.length; j++) {
      if (i & (1 << j)) {
        const product = products[j];
        total += product.price;
        combo.push(product);
      }
    }

    if (total <= budget && total > maxTotal) {
      maxTotal = total;
      bestCombo = combo;
    }
  }

  return bestCombo;
}

// 🧩 Componente principal
export default function BestCombination() {
  const { products, loading, error ,setFilteredProducts } = useProducts(); 
  const [budget, setBudget] = useState(0);
  const [result, setResult] = useState<Product[]>([]);
  
  useEffect(() => {
    if (budget <= 0) return setFilteredProducts(products)

  
    const best = findBestCombination(products, budget);
    setResult(best);
    setFilteredProducts(best);
  }, [budget, products, setFilteredProducts]);

  const total = result.reduce((sum, p) => sum + p.price, 0);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <section className="max-w-xl mx-auto p-6 bg-white dark:bg-neutral-900 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-4">Mejor combinación de productos</h1>
      <article className="flex flex-row items-end gap-4 flex-wrap">
   
        <div className="flex flex-col">
          <label htmlFor="budget" className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Presupuesto:
          </label>
          <input
            id="budget"
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded w-32 dark:bg-neutral-800 dark:text-white dark:border-neutral-700"
          />
        </div>

   
        <Button
          onClick={() => setFilteredProducts(products)}
          className="text-white px-4 py-2 rounded"
          variant="default"
        >
          Reiniciar filtro
        </Button>

   
        {result.length > 0 ? (
          <p className="font-semibold text-gray-900 dark:text-white ml-auto">
            Total: ${total}
          </p>
        ) : (
          <p className="text-gray-500 ml-auto">Sin productos válidos</p>
        )}
      </article>


    </section>
  );
}
