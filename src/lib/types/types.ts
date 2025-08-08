import { ButtonHTMLAttributes,ElementType } from "react"

export interface ThemeContextType {
  theme: "light" | "dark" | "system"
  setTheme: (theme: "light" | "dark" | "system") => void
}

export type Theme = "light" | "dark" | "system"

export interface IProduct {
  id: number;
  name: string;
  price: number;
  image?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "buy"
    as?: ElementType
}

export type ProductsContextType = {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;  
  filteredProducts: IProduct[] | null;
  setFilteredProducts: (products: IProduct[] | null) => void;
  loading: boolean;
  error: string | null;
};


export type CartContextType = {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  fetchCart: () => Promise<void>;
};