import BestCombination from "@/components/bestCombinationFilter";
import ProductList from "@/components/productCardList";
import { CartButtonLink } from "@/components/UI/cartButtonLink";


export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Productos</h1>
      <BestCombination />
     
        <ProductList />
     
      <CartButtonLink />
    </main>
  );
}
