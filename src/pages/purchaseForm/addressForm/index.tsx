import React from 'react'
import { AddressContainer, InfoContainer, InputContainer } from './styles'
import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../components/input'

export const AddressForm: React.FC = () => {
  return (
    <AddressContainer>
      <InfoContainer>
        <MapPinLine />
        <div className="textContainer">
          <span className="title">Endereço de Entrega</span>
          <span className="description">
            Informe o endereço onde deseja receber seu pedido
          </span>
        </div>
      </InfoContainer>
      <InputContainer>
        <Input placeholder="CEP" width={200} />
        <Input placeholder="Rua" width={560} />
        <div className="multipleInputsWrapper">
          <Input placeholder="Número" width={200} />
          <Input placeholder="Complemento" width={348} isOptional />
        </div>
        <div className="multipleInputsWrapper">
          <Input placeholder="Bairro" width={200} />
          <Input placeholder="Cidade" width={276} />
          <Input placeholder="UF" width={60} />
        </div>
      </InputContainer>
    </AddressContainer>
  )
}
