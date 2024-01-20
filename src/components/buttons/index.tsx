import React from 'react'
import {
  ActionButtonContainer,
  CartButtonContainer,
  DeleteButtonContainer,
} from './styles'
import { ShoppingCartSimple, Trash } from 'phosphor-react'

interface ActionButtonProps {
  onClick: (data?: unknown) => void
  label: string
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <ActionButtonContainer onClick={onClick}>
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
  return (
    <CartButtonContainer onClick={onClick}>
      <ShoppingCartSimple size={22} />
    </CartButtonContainer>
  )
}
