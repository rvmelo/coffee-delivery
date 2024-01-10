import React from 'react'
import { NumberInputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

interface NumberInputProps {
  onIncrement: () => void
  onDecrement: () => void
}

export const NumberInput: React.FC<NumberInputProps> = ({
  onIncrement,
  onDecrement,
}) => {
  return (
    <NumberInputContainer>
      <Plus size={14} onClick={onIncrement} />

      <input
        type="number"
        step="1"
        max=""
        value="1"
        name="quantity"
        className="quantity-field"
      />

      <Minus size={14} onClick={onDecrement} />
    </NumberInputContainer>
  )
}
