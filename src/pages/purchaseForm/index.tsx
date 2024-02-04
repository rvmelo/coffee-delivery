import React from 'react'
import { PageSection, PurchaseContainer, PurchaseFormContainer } from './styles'
import { AddressForm } from './addressForm'
import { Payment } from './payment'
import { Request } from './request'

export const PurchaseForm: React.FC = () => {
  return (
    <PurchaseFormContainer>
      <PageSection>
        <strong>Confirmar seu pedido</strong>
        <PurchaseContainer>
          <AddressForm />
          <Payment />
        </PurchaseContainer>
      </PageSection>
      <PageSection>
        <strong>Cafés Selecionados</strong>
        <Request />
      </PageSection>
    </PurchaseFormContainer>
  )
}
