import { IProduct } from "@/lib/types/types";

export function findBestCombination(products: IProduct[], budget: number): IProduct[] {
  let bestCombo: IProduct[] = [];
  let maxTotal = 0;

  const totalCombinations = 1 << products.length;

  for (let i = 0; i < totalCombinations; i++) {
    const combo: IProduct[] = [];
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