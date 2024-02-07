import React from 'react'
import { PageSection, PurchaseContainer, PurchaseFormContainer } from './styles'
import { AddressForm } from './addressForm'
import { Payment } from './payment'
import { Request } from './request'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { PaymentMethods } from '../../enums/paymentMethods'

const addressValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }).positive(),
  street: zod.string().min(3, 'Informe uma rua válida'),
  number: zod
    .number({ invalid_type_error: 'Informe o complemento' })
    .positive(),

  complement: zod.string().optional(),
  neighborhood: zod.string().min(3, 'Informe um bairro válido'),
  city: zod.string().min(3, 'Informe uma cidade válida'),
  uf: zod
    .string()
    .min(2, 'Informe uma uf válido')
    .max(2, 'Informe uma uf válido'),
  paymentMethods: zod.enum(
    [
      PaymentMethods.CREDIT_CARD,
      PaymentMethods.DEBIT_CARD,
      PaymentMethods.CASH,
    ],
    { required_error: 'Escolha um método de pagamento' },
  ),
})

export type AddressFormData = zod.infer<typeof addressValidationSchema>

export const PurchaseForm: React.FC = () => {
  const navigate = useNavigate()

  const addressForm = useForm<AddressFormData>({
    resolver: zodResolver(addressValidationSchema),
    defaultValues: {
      city: '',
      complement: '',
      neighborhood: '',
      street: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = addressForm

  function handlePayment(data: AddressFormData) {
    navigate('/confirmRequest', {
      state: data,
    })
    reset()
  }

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
