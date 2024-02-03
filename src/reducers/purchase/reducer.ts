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
  payload: { coffee: Coffee } | { id: string }
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
        draft.selectedCoffees.filter((coffee) => coffee.id !== id)
      })
    }

    default:
      return state
  }
}
