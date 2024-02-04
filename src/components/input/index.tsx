import React, { useState } from 'react'
import { InputTextContainer } from './styled'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  width?: number
}

export const Input: React.FC<InputTextProps> = ({
  isOptional = false,
  width,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false)

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = () => {
    setIsActive(false)
  }

  return (
    <InputTextContainer isActive={isActive} width={width}>
      <input onFocus={handleFocus} onBlur={handleBlur} {...rest} />
      {isOptional && <span>Opcional</span>}
    </InputTextContainer>
  )
}
