import React, { useEffect } from 'react'
import { PageSection, PurchaseContainer, PurchaseFormContainer } from './styles'
import { AddressForm } from './addressForm'
import { Payment } from './payment'
import { Request } from './request'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

const addressValidationSchema = zod.object({
  cep: zod
    .number()
    .min(8, 'Informe um cep válido')
    .max(8, 'Informe um cep válido'),
  street: zod.string().min(3, 'Informe uma rua válida'),
  number: zod
    .number()
    .min(3, 'Informe um número válido')
    .max(3, 'Informe um número válido'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, 'Informe um bairro válido'),
  city: zod.string().min(3, 'Informe uma cidade válida'),
  uf: zod
    .string()
    .min(2, 'Informe uma uf válido')
    .max(2, 'Informe uma uf válido'),
})

type AddressFormData = zod.infer<typeof addressValidationSchema>

export const PurchaseForm: React.FC = () => {
  const navigate = useNavigate()

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressValidationSchema),
    defaultValues: {
      cep: 0,
      city: '',
      complement: '',
      neighborhood: '',
      number: 0,
      street: '',
      uf: '',
    },
  })

  const { handleSubmit, reset, watch } = addressForm

  function handlePayment(data: AddressFormData) {
    navigate('/confirmRequest', {
      state: data,
    })
    reset()
  }

  // function onError(data: any) {
  //   console.log('errors: ', data)
  // }

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) =>
  //     console.log(value, name, type),
  //   )
  //   return () => subscription.unsubscribe()
  // }, [watch])

  return (
    <form onSubmit={handleSubmit(handlePayment)}>
      <FormProvider {...addressForm}>
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
      </FormProvider>
    </form>
  )
}
