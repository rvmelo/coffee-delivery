import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { Coffee, purchaseReducer } from '../reducers/purchase/reducer'
import {
  addNewCoffee,
  removeCoffee,
  clearCart,
} from '../reducers/purchase/action'

interface PurchaseContextType {
  selectedCoffees: Coffee[]
  purchaseNewCoffee: (data: Omit<Coffee, 'id'>) => void
  deleteCoffee: (id: string) => void
  deleteAllCoffees: () => void
}

const purchaseContext = createContext({} as PurchaseContextType)

interface PurchaseProviderProps {
  children: ReactNode
}

export const PurchaseContextProvider: React.FC<PurchaseProviderProps> = ({
  children,
}) => {
  const [{ selectedCoffees }, dispatch] = useReducer(
    purchaseReducer,
    {
      selectedCoffees: [],
    },
    (initialState) => {
      const stateAsJSON = localStorage.getItem(
        '@rvtheone:coffee-delivery:selected-coffees-state-1.0.0',
      )

      if (stateAsJSON) {
        return JSON.parse(stateAsJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify({ selectedCoffees })
    localStorage.setItem(
      '@rvtheone:coffee-delivery:selected-coffees-state-1.0.0',
      stateJSON,
    )
  }, [selectedCoffees])

  function purchaseNewCoffee(data: Omit<Coffee, 'id'>) {
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

  function deleteAllCoffees() {
    dispatch(clearCart())
  }

  return (
    <purchaseContext.Provider
      value={{
        selectedCoffees,
        purchaseNewCoffee,
        deleteCoffee,
        deleteAllCoffees,
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
