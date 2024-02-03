import React from 'react'
import { PurchaseContainer, PurchaseFormContainer } from './styles'
import { AddressForm } from './addressForm'
import { Payment } from './payment'

export const PurchaseForm: React.FC = () => {
  return (
    <PurchaseFormContainer>
      <strong>Confirmar seu pedido</strong>
      <PurchaseContainer>
        <AddressForm />
        <Payment />
      </PurchaseContainer>
    </PurchaseFormContainer>
  )
}
