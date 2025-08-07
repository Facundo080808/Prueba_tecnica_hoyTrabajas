import type{ PropsWithChildren } from 'react'
import { ThemeProvider } from '../context/themeContext'





export default function Providers({ children } : PropsWithChildren) {
  return (
    <ThemeProvider>
      
          {children}
      
    </ThemeProvider>
  )
}