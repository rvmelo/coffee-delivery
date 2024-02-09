import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import React from 'react'
import {
  AddressContainer,
  AddressItem,
  AddressWrapper,
  ConfirmRequestContainer,
  IconWrapper,
  IllustrationGrid,
  ItemTextWrapper,
  RequestGrid,
  RequestStatusContainer,
} from './styles'
import { useTheme } from 'styled-components'
import confirmation from '../../assets/confirmation.svg'
import { useLocation } from 'react-router-dom'
import { PaymentMethods } from '../../enums/paymentMethods'

interface NavigationProps {
  number: number
  street: string
  neighborhood: string
  city: string
  state: string
  paymentMethods: PaymentMethods
}

const paymentLabels = {
  [PaymentMethods.CREDIT_CARD]: 'Cartão de Crédito',
  [PaymentMethods.DEBIT_CARD]: 'Cartão de Débito',
  [PaymentMethods.CASH]: 'Dinheiro',
}

export const ConfirmRequest: React.FC = () => {
  const theme = useTheme()

  const { number, paymentMethods, street, city, state, neighborhood } =
    useLocation().state as NavigationProps

  return (
    <ConfirmRequestContainer>
      <RequestGrid>
        <RequestStatusContainer>
          <span className="title">Uhu! Pedido confirmado</span>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </RequestStatusContainer>
        <AddressWrapper>
          <AddressContainer>
            <AddressItem>
              <IconWrapper backgroundColor={theme.purple}>
                <MapPin />
              </IconWrapper>
              <ItemTextWrapper>
                <span>
                  Entrega em{' '}
                  <strong>
                    Rua {street}, {number}
                  </strong>
                </span>
                <span>
                  {neighborhood} - {city}, {state}
                </span>
              </ItemTextWrapper>
            </AddressItem>
            <AddressItem>
              <IconWrapper backgroundColor={theme['yellow-dark']}>
                <Timer />
              </IconWrapper>
              <ItemTextWrapper>
                <span>Previsão de entrega </span>
                <strong>20 min - 30 min</strong>
              </ItemTextWrapper>
            </AddressItem>
            <AddressItem>
              <IconWrapper backgroundColor={theme['yellow-dark']}>
                <CurrencyDollar />
              </IconWrapper>
              <ItemTextWrapper>
                <span>Pagamento na entrega</span>
                <strong>{paymentLabels[paymentMethods]}</strong>
              </ItemTextWrapper>
            </AddressItem>
          </AddressContainer>
        </AddressWrapper>
      </RequestGrid>
      <IllustrationGrid>
        <img src={confirmation} alt="" />
      </IllustrationGrid>
    </ConfirmRequestContainer>
  )
}
