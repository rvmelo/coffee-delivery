import React, { useRef } from 'react'
import { NumberInput } from '../numberInput'
import { BottomContainer, CoffeeCardContainer } from './styled'
import { CartButton } from '../buttons'
import { useCoffee } from '../../contexts/purchaseContext'

interface CoffeeCardProps {
  categories: string[]
  name: string
  description: string
  price: string
  imageSrc: string
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  description,
  name,
  price,
  categories,
  imageSrc,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { purchaseNewCoffee } = useCoffee()

  const onCartButtonClick = () => {
    const amount = Number(inputRef.current?.value) || 0

    const total =
      Number(parseFloat(price.replace(',', '.')).toFixed(2)) * amount

    const formattedPrice = String(total.toFixed(2)).replace('.', ',')

    purchaseNewCoffee({
      name,
      price: formattedPrice,
      amount: Number(inputRef.current?.value) || 1,
    })
  }

  return (
    <CoffeeCardContainer>
      <img src={imageSrc} alt="" />
      <div className="categoriesWrapper">
        {categories.map((category, index) => (
          <div key={index} className="categoryContainer">
            <span>{category}</span>
          </div>
        ))}
      </div>
      <span className="coffeeNameText">{name}</span>
      <span className="coffeeDescriptionText">{description}</span>
      <BottomContainer>
        <span>
          R$<span className="priceValueText"> {price}</span>
        </span>
        <div className="actionContainer">
          <NumberInput inputRef={inputRef} />
          <CartButton onClick={onCartButtonClick} />
        </div>
      </BottomContainer>
    </CoffeeCardContainer>
  )
}
