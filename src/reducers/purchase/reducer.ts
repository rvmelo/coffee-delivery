import { coffeeOptions } from '../../static/coffeeOptions'
import { ActionTypes } from './action'
import { produce } from 'immer'

export interface Coffee {
  id: string
  amount: number
  name: string
  price: string
}

interface PurchaseState {
  selectedCoffees: Coffee[]
}

interface ActionData {
  type: ActionTypes
  payload?: { coffee: Coffee } | { id: string }
}

export function purchaseReducer(state: PurchaseState, action: ActionData) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const { coffee: coffeePayload } = (action.payload || {}) as {
        coffee: Coffee
      }

      const foundCoffeeIndex = state.selectedCoffees.findIndex(
        (coffee) => coffee.name === coffeePayload.name,
      )

      // update coffee amount
      if (foundCoffeeIndex >= 0) {
        return produce(state, (draft) => {
          draft.selectedCoffees[foundCoffeeIndex].amount = coffeePayload.amount

          const foundCoffeeKey = Object.keys(coffeeOptions).find(
            (key) =>
              coffeeOptions[key as keyof typeof coffeeOptions].name ===
              draft.selectedCoffees[foundCoffeeIndex].name,
          ) as keyof typeof coffeeOptions

          const price = coffeeOptions[foundCoffeeKey].price

          const total =
            Number(parseFloat(price.replace(',', '.')).toFixed(2)) *
            coffeePayload.amount

          const formattedTotal = String(total.toFixed(2)).replace('.', ',')
          draft.selectedCoffees[foundCoffeeIndex].price = formattedTotal
        })
      }

      // add new coffee
      return produce(state, (draft) => {
        draft.selectedCoffees.push({
          ...coffeePayload,
        })
      })
    }

    case ActionTypes.REMOVE_COFFEE: {
      const { id } = (action.payload || {}) as { id: string }

      return produce(state, (draft) => {
        draft.selectedCoffees = draft.selectedCoffees.filter(
          (coffee) => coffee.id !== id,
        )
      })
    }

    case ActionTypes.CLEAR_CART: {
      return produce(state, (draft) => {
        draft.selectedCoffees = []
      })
    }

    default:
      return state
  }
}
