import React from 'react'
import { Banner } from './components/banner'
import { SelectionContainer } from './styles'
import { CoffeeOptions } from './components/coffeeOptions'

export const CoffeeSelection: React.FC = () => {
  return (
    <SelectionContainer>
      <Banner />
      <CoffeeOptions />
    </SelectionContainer>
  )
}
