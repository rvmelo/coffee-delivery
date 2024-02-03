import React from 'react'
import { LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'

export const DefaultLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
