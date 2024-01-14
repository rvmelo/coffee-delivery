import React from 'react'
import { InputTextContainer } from './styled'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  isActive?: boolean
  width?: number
}

export const Input: React.FC<InputTextProps> = ({
  isOptional = false,
  isActive = false,
  width,
  ...rest
}) => {
  return (
    <InputTextContainer isActive={isActive} width={width}>
      <input {...rest} />
      {isOptional && <span>Opcional</span>}
    </InputTextContainer>
  )
}
