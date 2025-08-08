"use client";
import { PropsWithChildren, useEffect, useState, createContext } from "react";
import { IProduct } from "@/lib/types/types";
import { getProducts } from "@/lib/api/getProductsApi";
import {ProductsContextType} from "@/lib/types/types";


export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export function ProductsProvider({ children }: PropsWithChildren) {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[] | null>(null);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
     <ProductsContext.Provider value={{
      products,
      setProducts,
      filteredProducts,
      setFilteredProducts,
      loading,
      error,
    }}>
      {children}
    </ProductsContext.Provider>
  );
}
