import React from 'react'
import { NumberInput } from '../numberInput'
import { DeleteButton } from '../buttons'
import {
  CardLeftSection,
  CardRightSection,
  CoffeeSmallCardContainer,
} from './styles'

interface CoffeeSmallCardProps {
  name: string
  price: string
  imageSrc: string
}

export const CoffeeSmallCard: React.FC<CoffeeSmallCardProps> = ({
  name,
  price,
  imageSrc,
}) => {
  return (
    <CoffeeSmallCardContainer>
      <CardLeftSection>
        <img className="cardSVG" src={imageSrc} alt="" />
        <div className="cardData">
          <span>{name}</span>
          <div className="cardInterface">
            <NumberInput
              onIncrement={() => undefined}
              onDecrement={() => undefined}
            />
            <DeleteButton onClick={() => undefined} />
          </div>
        </div>
      </CardLeftSection>
      <CardRightSection>
        <span>R$ {price}</span>
      </CardRightSection>
    </CoffeeSmallCardContainer>
  )
}
