"use client";
import Card from "@/components/productCard";
import { useProducts } from "@/hooks/useProducts";

export default function ProductList() {
  const { products, filteredProducts, loading, error } = useProducts();

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const displayProducts = filteredProducts ?? products;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}
