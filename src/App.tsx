import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { Router } from './router'
import { BrowserRouter } from 'react-router-dom'
import { PurchaseContextProvider } from './contexts/purchaseContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PurchaseContextProvider>
          <Router />
        </PurchaseContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
