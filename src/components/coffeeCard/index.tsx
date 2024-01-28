import React from 'react'
import { NumberInput } from '../numberInput'
import { BottomContainer, CoffeeCardContainer } from './styled'
import { CartButton } from '../buttons'

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
          <NumberInput
            onIncrement={() => undefined}
            onDecrement={() => undefined}
          />
          <CartButton onClick={() => undefined} />
        </div>
      </BottomContainer>
    </CoffeeCardContainer>
  )
}
