import React, {
  ForwardRefRenderFunction,
  ReactElement,
  forwardRef,
  useState,
} from 'react'
import { InputTextContainer } from './styled'

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
    <InputTextContainer isActive={isActive} width={width}>
      <input onFocus={handleFocus} onBlur={handleBlur} {...rest} />
      {isOptional && <span>Opcional</span>}
    </InputTextContainer>
  )
}

/* This way can react-hook-form can pass the ref
property to the component. 
According to this link: 
https://app.rocketseat.com.br/h/forum/react-js/975a5274-72f4-4de5-a47d-25bcea71c407 */

const CustomInput: ForwardRefRenderFunction<
  HTMLInputElement,
  InputTextProps
> = (props, ref): ReactElement => {
  return <InputComponent {...props} ref={ref} />
}

export const Input = forwardRef(CustomInput)
