import React from 'react'
import { useTheme } from 'styled-components'
import { CartContainer } from './styles'
import { ShoppingCart } from 'phosphor-react'

interface CartProps {
  amount?: number
  onClick?: () => void
}

export const Cart: React.FC<CartProps> = ({ amount = 0, onClick }) => {
  const theme = useTheme()

  return (
    <CartContainer onClick={onClick}>
      <ShoppingCart size={18} color={theme['yellow-dark']} weight="fill" />
      {amount > 0 && (
        <div>
          <span>{amount}</span>
        </div>
      )}
    </CartContainer>
  )
}
