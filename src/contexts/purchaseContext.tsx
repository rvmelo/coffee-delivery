import React, { ReactNode, createContext, useContext, useReducer } from 'react'
import { Coffee, purchaseReducer } from '../reducers/purchase/reducer'
import { addNewCoffee, removeCoffee } from '../reducers/purchase/action'

interface PurchaseContextType {
  selectedCoffees: Coffee[]
  createNewCoffee: (data: Omit<Coffee, 'id'>) => void
  deleteCoffee: (id: string) => void
}

const purchaseContext = createContext({} as PurchaseContextType)

interface PurchaseProviderProps {
  children: ReactNode
}

export const PurchaseContextProvider: React.FC<PurchaseProviderProps> = ({
  children,
}) => {
  const [{ selectedCoffees }, dispatch] = useReducer(purchaseReducer, {
    selectedCoffees: [],
  })

  function createNewCoffee(data: Omit<Coffee, 'id'>) {
    const id = String(new Date().getTime())

    const newCoffee = {
      id,
      ...data,
    }

    dispatch(addNewCoffee(newCoffee))
  }

  function deleteCoffee(id: string) {
    dispatch(removeCoffee(id))
  }

  return (
    <purchaseContext.Provider
      value={{
        selectedCoffees,
        createNewCoffee,
        deleteCoffee,
      }}
    >
      {children}
    </purchaseContext.Provider>
  )
}

export function useCoffee() {
  const context = useContext(purchaseContext)

  if (!context) {
    throw new Error('useCoffee must be inside a PurchaseContextProvider')
  }

  return context
}
