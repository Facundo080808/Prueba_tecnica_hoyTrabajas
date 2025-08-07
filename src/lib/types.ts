import { ButtonHTMLAttributes,ElementType } from "react"

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
    as?: ElementType
}