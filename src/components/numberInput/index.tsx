import React, { useState } from 'react'
import { NumberInputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

interface NumberInputProps {
  inputRef: React.RefObject<HTMLInputElement>
}

export const NumberInput: React.FC<NumberInputProps> = ({ inputRef }) => {
  const [inputNumber, setInputNumber] = useState(1)

  const onIncrement = () => {
    const newValue = inputNumber + 1
    setInputNumber(newValue)
  }

  const onDecrement = () => {
    const newValue = inputNumber - 1

    if (newValue >= 1) {
      setInputNumber(newValue)
    }
  }

  return (
    <NumberInputContainer>
      <Plus size={14} onClick={onIncrement} />

      <input
        ref={inputRef}
        type="number"
        step="1"
        max=""
        onChange={(e) => setInputNumber(Number(e.target.value))}
        value={inputNumber}
        name="quantity"
        className="quantity-field"
      />

      <Minus size={14} onClick={onDecrement} />
    </NumberInputContainer>
  )
}
