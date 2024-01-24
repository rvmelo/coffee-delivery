import React from 'react'
import coffeeLogo from '../../assets/coffee-logo.svg'
import { MapPin } from 'phosphor-react'
import { Cart } from '../../components/cart'
import { HeaderContainer, LayoutContainer, LocationWrapper } from './styles'
import { Outlet } from 'react-router-dom'

export const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <img className="logoSVG" src={coffeeLogo} alt="coffeeLogo" />
        <div className="rightContainer">
          <LocationWrapper>
            <MapPin size={22} />
            <span>Aracaju, SE</span>
          </LocationWrapper>
          <Cart />
        </div>
      </HeaderContainer>
      <Outlet />
    </LayoutContainer>
  )
}
