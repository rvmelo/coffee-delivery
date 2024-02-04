import React, { useState } from 'react'
import { NumberInputContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'

interface NumberInputProps {
  inputRef: React.RefObject<HTMLInputElement>
  initialValue?: number
  handleChange?: (value: number) => void
}

export const NumberInput: React.FC<NumberInputProps> = ({
  inputRef,
  initialValue = 1,
  handleChange,
}) => {
  const [inputNumber, setInputNumber] = useState(initialValue)

  const onIncrement = () => {
    const newValue = inputNumber + 1
    setInputNumber(newValue)

    handleChange?.(newValue)
  }

  const onDecrement = () => {
    const newValue = inputNumber - 1

    if (newValue >= 1) {
      setInputNumber(newValue)
      handleChange?.(newValue)
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
