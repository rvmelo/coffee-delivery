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

export const ConfirmRequest: React.FC = () => {
  const theme = useTheme()

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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
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
                <strong>Cartão de Crédito</strong>
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
