import React from 'react'
import { NumberInput } from '../numberInput'
import { Cart } from '../cart'
import { BottomContainer, CoffeeCardContainer } from './styled'

interface CoffeeCardProps {
  type: string
  name: string
  description: string
  price: string
  imageSrc: string
}

export const CoffeeCard: React.FC<CoffeeCardProps> = ({
  description,
  name,
  price,
  type,
  imageSrc,
}) => {
  return (
    <CoffeeCardContainer>
      <img src={imageSrc} alt="" />
      <div className="typeContainer">
        <span>{type}</span>
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
          <Cart />
        </div>
      </BottomContainer>
    </CoffeeCardContainer>
  )
}
