// @flow
import reducer from './index'
import type { Action, PortfolioFormEntry } from '../../types'

type State = PortfolioFormEntry

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
    const initial: State = entry1
    const action: Action = {
      type: 'PORTFOLIO_FORM/UPDATE',
      payload: { amount: 2 },
    }
    const expected: State = entry2

    expect(reducer(initial, action)).toEqual(expected)
  })
})

describe(`on PORTFOLIO_FORM/RESET`, () => {
  it('Resets the form', () => {
    const initial: State = entry1
    const action: Action = { type: 'PORTFOLIO_FORM/RESET' }
    const expected: State = {}

    expect(reducer(initial, action)).toEqual(expected)
  })
})
