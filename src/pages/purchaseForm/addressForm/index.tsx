import React from 'react'
import { AddressContainer, InfoContainer, InputContainer } from './styles'
import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../components/input'
import { useFormContext } from 'react-hook-form'

export const AddressForm: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

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
          errorMessage={errors.cep?.message as string}
          {...register('cep', { valueAsNumber: true })}
        />
        <Input
          type="text"
          placeholder="Rua"
          width={560}
          errorMessage={errors.street?.message as string}
          {...register('street')}
        />
        <div className="multipleInputsWrapper">
          <Input
            type="number"
            placeholder="Número"
            width={200}
            errorMessage={errors.number?.message as string}
            {...register('number', { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Complemento"
            width={348}
            isOptional
            errorMessage={errors.complement?.message as string}
            {...register('complement')}
          />
        </div>
        <div className="multipleInputsWrapper">
          <Input
            type="text"
            placeholder="Bairro"
            width={200}
            errorMessage={errors.neighborhood?.message as string}
            {...register('neighborhood')}
          />
          <Input
            type="text"
            placeholder="Cidade"
            width={276}
            errorMessage={errors.city?.message as string}
            {...register('city')}
          />
          <Input
            type="text"
            placeholder="UF"
            width={60}
            errorMessage={errors.uf?.message as string}
            {...register('uf')}
          />
        </div>
      </InputContainer>
    </AddressContainer>
  )
}
