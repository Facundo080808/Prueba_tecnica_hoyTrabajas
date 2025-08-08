import type{ PropsWithChildren } from 'react'
import { ThemeProvider } from '../context/themeContext'
import { ProductsProvider } from '@/context/productContext'





export default function Providers({ children } : PropsWithChildren) {
  return (
    <ThemeProvider>
      <ProductsProvider>
          {children}
      </ProductsProvider>      
    </ThemeProvider>
  )
}