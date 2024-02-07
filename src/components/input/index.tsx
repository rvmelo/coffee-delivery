import React, { ElementRef, forwardRef, useState } from 'react'
import { InputTextContainer } from './styles'

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean
  width?: number
}

const InputComponent: React.FC<InputTextProps> = ({
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
    <InputTextContainer $isActive={isActive} width={width}>
      <input onFocus={handleFocus} onBlur={handleBlur} {...rest} />
      {isOptional && <span>Opcional</span>}
    </InputTextContainer>
  )
}

export const Input = forwardRef<
  ElementRef<typeof InputComponent>,
  InputTextProps
>(({ ...rest }: InputTextProps, ref) => {
  return <InputComponent {...rest} ref={ref} />
})

Input.displayName = 'Input'
