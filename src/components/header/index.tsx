import React from 'react'
import coffeeLogo from '../../assets/coffee-logo.svg'
import { HeaderContainer, LocationWrapper } from './styles'
import { MapPin } from 'phosphor-react'
import { Cart } from '../cart'
import { useCoffee } from '../../contexts/purchaseContext'
import { useNavigate } from 'react-router-dom'

export const Header: React.FC = () => {
  const { selectedCoffees } = useCoffee()

  const navigate = useNavigate()

  function handleNavigation() {
    if (selectedCoffees.length <= 0) {
      return alert('Escolha pelo menos um café')
    }

    navigate('/purchaseForm')
  }

  return (
    <HeaderContainer>
      <img className="logoSVG" src={coffeeLogo} alt="coffeeLogo" />
      <div className="rightContainer">
        <LocationWrapper>
          <MapPin size={22} />
          <span>Aracaju, SE</span>
        </LocationWrapper>
        <Cart amount={selectedCoffees.length} onClick={handleNavigation} />
      </div>
    </HeaderContainer>
  )
}
