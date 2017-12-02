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
      const { id } = action
      return [...state.filter(e => e.id !== id)]
    default:
      return state
  }
}
