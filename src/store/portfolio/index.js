// @flow
import type { Action, PortfolioEntry } from '../../types'

const initialState: Array<PortfolioEntry> = []

export default (
  state: Array<PortfolioEntry> = initialState,
  action: Action
): Array<PortfolioEntry> => {
  switch (action.type) {
    case 'PORTFOLIO/ADD_ENTRY':
      return [...state, action.payload]
    case 'PORTFOLIO/REMOVE_ENTRY':
      return [...state.filter(e => e.id !== action.id)]
    default:
      return state
  }
}
