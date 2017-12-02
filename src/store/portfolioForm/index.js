// @flow
import type { Action, PortfolioFormEntry } from '../../types'

type State = PortfolioFormEntry

const initialState = {}

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'PORTFOLIO_FORM/UPDATE':
      return { ...state, ...action.payload }
    case 'PORTFOLIO_FORM/RESET':
      return {}
    default:
      return state
  }
}
