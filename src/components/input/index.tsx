import React, { forwardRef, useState } from 'react'
import { InputTextContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  width?: number
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isOptional = false, width, ...rest }: InputProps, ref) => {
    const [isActive, setIsActive] = useState(false)

    const handleFocus = () => {
      setIsActive(true)
    }

    const handleBlur = () => {
      setIsActive(false)
    }

    return (
      <InputTextContainer $isActive={isActive} width={width}>
        <input ref={ref} onFocus={handleFocus} onBlur={handleBlur} {...rest} />
        {isOptional && <span>Opcional</span>}
      </InputTextContainer>
    )
  },
)

Input.displayName = 'Input'
