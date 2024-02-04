import React from 'react'
import { useCoffee } from '../../../contexts/purchaseContext'
import { CoffeeSmallCard } from '../../../components/coffeeSmallCard'
import { coffeeOptions } from '../../../static/coffeeOptions'
import {
  CoffeeItem,
  PriceContainer,
  PriceItem,
  RequestContainer,
} from './styles'
import { ActionButton } from '../../../components/buttons'
import { useNavigate } from 'react-router-dom'

export const Request: React.FC = () => {
  const { selectedCoffees } = useCoffee()

  const navigate = useNavigate()

  const total = selectedCoffees.reduce((previousValue, currentValue) => {
    const { price } = currentValue || {}

    const value = Number(parseFloat(price.replace(',', '.')).toFixed(2))

    return previousValue + value
  }, 0)

  const formattedTotal = String(total.toFixed(2)).replace('.', ',')

  const totalWithDelivery = String((total + 3.5).toFixed(2)).replace('.', ',')

  const onPurchase = () => {
    navigate('/confirmRequest')
  }

  return (
    <RequestContainer>
      {selectedCoffees.map((coffee) => {
        const foundKey = Object.keys(coffeeOptions).find(
          (key) =>
            coffeeOptions[key as keyof typeof coffeeOptions].name ===
            coffee.name,
        )

        const totalItemPrice = Number(
          parseFloat(coffee.price.replace(',', '.')).toFixed(2),
        )

        const formattedPrice = String(totalItemPrice.toFixed(2)).replace(
          '.',
          ',',
        )

        return (
          <CoffeeItem key={coffee.id}>
            <CoffeeSmallCard
              name={coffee.name}
              price={formattedPrice}
              imageSrc={
                coffeeOptions[foundKey as keyof typeof coffeeOptions].imageSrc
              }
            />
          </CoffeeItem>
        )
      })}
      <PriceContainer>
        <PriceItem>
          <span>Total de itens</span>
          <span className="priceText">R$ {formattedTotal}</span>
        </PriceItem>
        <PriceItem>
          <span>Entrega</span>
          <span className="priceText">R$ 3,50</span>
        </PriceItem>
        <PriceItem>
          <strong>Total</strong>
          <strong>R$ {totalWithDelivery}</strong>
        </PriceItem>
      </PriceContainer>
      <ActionButton label="confirmar pedido" onClick={onPurchase} />
    </RequestContainer>
  )
}
