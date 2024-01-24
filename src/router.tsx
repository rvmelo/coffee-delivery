import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { CoffeeSelection } from './pages/coffeeSelection'
import { PurchaseForm } from './pages/purchaseForm'
import { ConfirmRequest } from './pages/confirmRequest'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<CoffeeSelection />} />
        <Route path="/purchaseForm" element={<PurchaseForm />} />
        <Route path="/confirmRequest" element={<ConfirmRequest />} />
      </Route>
    </Routes>
  )
}
