import React from 'react'
import { AddressContainer, InfoContainer, InputContainer } from './styles'
import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../components/input'
import { useFormContext } from 'react-hook-form'

export const AddressForm: React.FC = () => {
  const { register } = useFormContext()

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
        <Input
          type="number"
          placeholder="CEP"
          width={200}
          {...register('cep', { valueAsNumber: true })}
        />
        <Input
          type="text"
          placeholder="Rua"
          width={560}
          {...register('street')}
        />
        <div className="multipleInputsWrapper">
          <Input
            type="number"
            placeholder="Número"
            width={200}
            {...register('number', { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Complemento"
            width={348}
            isOptional
            {...register('complement')}
          />
        </div>
        <div className="multipleInputsWrapper">
          <Input
            type="text"
            placeholder="Bairro"
            width={200}
            {...register('neighborhood')}
          />
          <Input
            type="text"
            placeholder="Cidade"
            width={276}
            {...register('city')}
          />
          <Input type="text" placeholder="UF" width={60} {...register('uf')} />
        </div>
      </InputContainer>
    </AddressContainer>
  )
}
