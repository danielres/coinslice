// @flow
import reducer from './index'
import type { Action, PortfolioFormEntry } from '../../types'

import { initialState } from './index'
import type { State } from './index'

const entry1 = {
  coin: 'BTC',
  amount: 1,
}

const entry2 = {
  ...entry1,
  amount: 2,
}

describe(`on PORTFOLIO_FORM/UPDATE`, () => {
  it('Updates the form entry', () => {
    const initial: State = { errors: {}, data: entry1 }
    const action: Action = {
      type: 'PORTFOLIO_FORM/UPDATE',
      payload: { amount: 2 },
    }
    const expected: State = { errors: {}, data: entry2 }

    expect(reducer(initial, action)).toEqual(expected)
  })
})

describe(`on PORTFOLIO_FORM/RESET`, () => {
  it('Resets the form', () => {
    const initial: State = { errors: {}, data: entry1 }
    const action: Action = { type: 'PORTFOLIO_FORM/RESET' }
    const expected: State = initialState

    expect(reducer(initial, action)).toEqual(expected)
  })
})
