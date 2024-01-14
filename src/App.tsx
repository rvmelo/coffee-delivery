import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { NumberInput } from './components/numberInput'
import { Cart } from './components/cart'
import { ActionButton, CartButton, DeleteButton } from './components/buttons'
import { SelectionCard } from './components/selectionCard'
import { CreditCard } from 'phosphor-react'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>coffee-delivery</div>
      <NumberInput
        onIncrement={() => console.log('incrementing')}
        onDecrement={() => console.log('decrementing')}
      />
      <Cart amount={4} />
      <ActionButton onClick={() => undefined} label="label" />
      <DeleteButton onClick={() => undefined} />
      <CartButton onClick={() => undefined} />
      <GlobalStyle />
      <SelectionCard icon={CreditCard} label="Cartão de crédito" />
    </ThemeProvider>
  )
}
