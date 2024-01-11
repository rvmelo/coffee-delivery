import React from 'react'
import { useTheme } from 'styled-components'
import { CartContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'

interface CartProps {
  amount?: number
}

export const Cart: React.FC<CartProps> = ({ amount = 0 }) => {
  const theme = useTheme()

  return (
    <CartContainer>
      <ShoppingCart size={22} color={theme['yellow-dark']} weight="fill" />
      {amount > 0 && (
        <div>
          <span>{amount}</span>
        </div>
      )}
    </CartContainer>
  )
}
