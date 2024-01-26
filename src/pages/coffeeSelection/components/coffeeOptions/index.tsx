import React from 'react'
import { CoffeeData, coffeeOptions } from '../../../../static/coffeeOptions'
import { CoffeeCard } from '../../../../components/coffeeCard'
import { CoffeeOptionsContainer } from './styles'

export const CoffeeOptions: React.FC = () => {
  type CoffeeKeyType = keyof CoffeeData

  return (
    <CoffeeOptionsContainer>
      <span>Nossos cafés</span>
      <div className="optionsContainer">
        {Object.keys(coffeeOptions).map((key) => {
          const name = coffeeOptions[key as CoffeeKeyType].name
          const description = coffeeOptions[key as CoffeeKeyType].description
          const imageSrc = coffeeOptions[key as CoffeeKeyType].imageSrc
          const price = coffeeOptions[key as CoffeeKeyType].price
          const categories = coffeeOptions[key as CoffeeKeyType].categories

          return (
            <CoffeeCard
              key={name}
              name={name}
              description={description}
              imageSrc={imageSrc}
              price={price}
              categories={categories}
            />
          )
        })}
      </div>
    </CoffeeOptionsContainer>
  )
}
