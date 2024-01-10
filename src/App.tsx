import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { NumberInput } from './components/numberInput'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>coffee-delivery</div>
      <NumberInput
        onIncrement={() => console.log('incrementing')}
        onDecrement={() => console.log('decrementing')}
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}
