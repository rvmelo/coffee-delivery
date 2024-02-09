import React, { useState } from 'react'
import {
  ActionButtonContainer,
  CartButtonContainer,
  DeleteButtonContainer,
} from './styles'
import { Check, ShoppingCartSimple, Trash } from 'phosphor-react'

interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  ...rest
}) => {
  return (
    <ActionButtonContainer {...rest}>
      <span>{label}</span>
    </ActionButtonContainer>
  )
}

interface DeleteButtonProps {
  onClick: (data?: unknown) => void
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <DeleteButtonContainer onClick={onClick}>
      <Trash />
      <span>remover</span>
    </DeleteButtonContainer>
  )
}

interface CartButtonProps {
  onClick: (data?: unknown) => void
}

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const [isDisabled, setIsDisabled] = useState(false)

  const handleClick = () => {
    setIsDisabled(true)
    setTimeout(() => {
      onClick()
      setIsDisabled(false)
    }, 1000)
  }

  return (
    <CartButtonContainer
      disabled={isDisabled}
      onClick={handleClick}
      backgroundColor={isDisabled ? 'yellow-dark' : 'purple-dark'}
    >
      {isDisabled ? (
        <Check weight="fill" size={18} />
      ) : (
        <ShoppingCartSimple size={18} />
      )}
    </CartButtonContainer>
  )
}
