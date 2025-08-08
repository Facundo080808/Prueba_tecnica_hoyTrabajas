import type{ PropsWithChildren } from 'react'
import { ThemeProvider } from '../context/themeContext'
import { ProductsProvider } from '@/context/productContext'
import { CartProvider } from '@/context/cartContext'





export default function Providers({ children } : PropsWithChildren) {
  return (
    <ThemeProvider>
      <ProductsProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </ProductsProvider>      
    </ThemeProvider>
  )
}