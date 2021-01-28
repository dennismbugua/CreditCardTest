import { Action } from '@ngrx/store'
import { Card } from './../models/card.model'
import * as CardActions from './../actions/card.actions'


const initialState: Card = {
  cardHolder: 'Name',
  creditCardNumber: 'Number',
  expirationDate: 'Date',
  amount: 'Amount',
}


export function reducer(state: Card[] = [initialState], action: CardActions.Actions) {


  switch (action.type) {
    case CardActions.ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
