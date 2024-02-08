import React, { forwardRef, useState } from 'react'
import { ErrorText, InputContainer, InputWrapper } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  width?: number
  errorMessage?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isOptional = false, width, errorMessage, ...rest }: InputProps, ref) => {
    const [isActive, setIsActive] = useState(false)

    const handleFocus = () => {
      setIsActive(true)
    }

    const handleBlur = () => {
      setIsActive(false)
    }

    return (
      <InputWrapper width={width}>
        <InputContainer $isActive={isActive}>
          <input
            ref={ref}
            onBlurCapture={handleBlur}
            onFocus={handleFocus}
            {...rest}
          />
          {isOptional && <span>Opcional</span>}
        </InputContainer>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </InputWrapper>
    )
  },
)

Input.displayName = 'Input'
