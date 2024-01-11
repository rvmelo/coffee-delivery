import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { NumberInput } from './components/numberInput'
import { Cart } from './components/cart'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>coffee-delivery</div>
      <NumberInput
        onIncrement={() => console.log('incrementing')}
        onDecrement={() => console.log('decrementing')}
      />
      <Cart amount={4} />
      <GlobalStyle />
    </ThemeProvider>
  )
}
