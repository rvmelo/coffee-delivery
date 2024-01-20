import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { NumberInput } from './components/numberInput'
import { Cart } from './components/cart'
import { ActionButton, CartButton, DeleteButton } from './components/buttons'
import { SelectionCard } from './components/selectionCard'
import { CreditCard } from 'phosphor-react'
import { Input } from './components/input'
import { CoffeeCard } from './components/coffeeCard'
import { coffeeOptions } from './static/coffeeOptions'
import { CoffeeSmallCard } from './components/coffeeSmallCard'

export function App() {
  const { description, imageSrc, name, price } = coffeeOptions.express

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
      <Input type="text" placeholder="Text" isOptional />
      <CoffeeCard
        description={description}
        imageSrc={imageSrc}
        name={name}
        price={price}
        type="tradicional"
      />
      <CoffeeSmallCard imageSrc={imageSrc} name={name} price={price} />
    </ThemeProvider>
  )
}
