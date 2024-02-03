import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import React from 'react'
import { SelectionCard } from '../../../components/selectionCard'
import { InfoContainer, PaymentContainer, PaymentOptionWrapper } from './styles'

export const Payment: React.FC = () => {
  return (
    <PaymentContainer>
      <InfoContainer>
        <CurrencyDollar />
        <div className="textContainer">
          <strong>Pagamento</strong>
          <span className="description">
            O pagamento é feito na entrega. Escolha a forma que desejar
          </span>
        </div>
      </InfoContainer>
      <PaymentOptionWrapper>
        <SelectionCard label="Cartão de Crédito" icon={CreditCard} />
        <SelectionCard label="Cartão de Débito" icon={Bank} />
        <SelectionCard label="Dinheiro" icon={Money} />
      </PaymentOptionWrapper>
    </PaymentContainer>
  )
}
