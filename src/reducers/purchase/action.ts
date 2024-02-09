import { Coffee } from './reducer'

export enum ActionTypes {
  ADD_NEW_COFFEE = 'add_new_coffee',
  REMOVE_COFFEE = 'remove_coffee',
  CLEAR_CART = 'clear_cart',
}

export function addNewCoffee(coffee: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE,
    payload: {
      coffee,
    },
  }
}

export function removeCoffee(id: string) {
  return {
    type: ActionTypes.REMOVE_COFFEE,
    payload: {
      id,
    },
  }
}

export function clearCart() {
  return {
    type: ActionTypes.CLEAR_CART,
  }
}
