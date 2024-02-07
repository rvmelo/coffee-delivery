import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import React, { useState } from 'react'
import { SelectionCard } from '../../../components/selectionCard'
import { InfoContainer, PaymentContainer, PaymentOptionWrapper } from './styles'
import { useFormContext } from 'react-hook-form'
import { PaymentMethods } from '../../../enums/paymentMethods'
import { AddressFormData } from '..'

interface MethodsData {
  creditCard: boolean
  debitCard: boolean
  cash: boolean
}

export const Payment: React.FC = () => {
  const { setValue } = useFormContext<AddressFormData>()

  const [activeMethods, setActiveMethods] = useState<MethodsData>()

  const handleButtonPress = (value: PaymentMethods) => {
    setValue('paymentMethods', value)
    setActiveMethods({
      creditCard: value === PaymentMethods.CREDIT_CARD,
      debitCard: value === PaymentMethods.DEBIT_CARD,
      cash: value === PaymentMethods.CASH,
    })
  }

  const { creditCard, debitCard, cash } = activeMethods || {}

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
        <SelectionCard
          onClick={() => handleButtonPress(PaymentMethods.CREDIT_CARD)}
          label="Cartão de Crédito"
          icon={CreditCard}
          isSelected={creditCard}
        />
        <SelectionCard
          onClick={() => handleButtonPress(PaymentMethods.DEBIT_CARD)}
          label="Cartão de Débito"
          icon={Bank}
          isSelected={debitCard}
        />
        <SelectionCard
          onClick={() => handleButtonPress(PaymentMethods.CASH)}
          label="Dinheiro"
          icon={Money}
          isSelected={cash}
        />
      </PaymentOptionWrapper>
    </PaymentContainer>
  )
}
