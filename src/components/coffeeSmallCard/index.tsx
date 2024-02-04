import React, { useRef } from 'react'
import { NumberInput } from '../numberInput'
import { DeleteButton } from '../buttons'
import {
  CardLeftSection,
  CardRightSection,
  CoffeeSmallCardContainer,
} from './styles'
import { useCoffee } from '../../contexts/purchaseContext'
import { coffeeOptions } from '../../static/coffeeOptions'

interface CoffeeSmallCardProps {
  name: string
  price: string
  imageSrc: string
}

export const CoffeeSmallCard: React.FC<CoffeeSmallCardProps> = ({
  name,
  imageSrc,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { selectedCoffees, purchaseNewCoffee, deleteCoffee } = useCoffee()

  const foundCoffee = selectedCoffees.find((coffee) => coffee.name === name)

  const amount = foundCoffee?.amount || 1

  const handleNumberInputChange = (value: number) => {
    if (foundCoffee) {
      purchaseNewCoffee({
        ...foundCoffee,
        amount: value,
      })
    }
  }

  const onDelete = () => {
    if (foundCoffee) {
      deleteCoffee(foundCoffee.id)
    }
  }

  const coffeeOptionsKey = Object.keys(coffeeOptions).find(
    (key) => coffeeOptions[key as keyof typeof coffeeOptions].name === name,
  )

  const coffeePrice =
    coffeeOptions[coffeeOptionsKey as keyof typeof coffeeOptions].price

  const total =
    Number(parseFloat(coffeePrice.replace(',', '.')).toFixed(2)) * amount

  const formattedPrice = String(total.toFixed(2)).replace('.', ',')

  return (
    <CoffeeSmallCardContainer>
      <CardLeftSection>
        <img className="cardSVG" src={imageSrc} alt="" />
        <div className="cardData">
          <span>{name}</span>
          <div className="cardInterface">
            <NumberInput
              inputRef={inputRef}
              initialValue={amount}
              handleChange={handleNumberInputChange}
            />
            <DeleteButton onClick={onDelete} />
          </div>
        </div>
      </CardLeftSection>
      <CardRightSection>
        <span>R$ {formattedPrice}</span>
      </CardRightSection>
    </CoffeeSmallCardContainer>
  )
}
