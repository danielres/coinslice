// @flow

import nowReducer from './index'

import type { Action, NowValues } from '../../types'

describe(`on NOW_SUCCESS`, () => {
  it('Adds crypto values to NowValues', () => {
    const initialNowValues: NowValues = {}

    const action: Action = {
      type: 'NOW_SUCCESS',
      payload: { BTC: 1, ETH: 2 },
    }

    const expected: NowValues = { BTC: 1, ETH: 2 }

    expect(nowReducer(initialNowValues, action)).toEqual(expected)
  })
})

describe(`on NOW_FAILURE`, () => {
  it('Empties state', () => {
    const initialNowValues: NowValues = {
      ETH: 1,
    }

    const action: Action = {
      type: 'NOW_FAILURE',
      error: 'Error message',
    }

    const expected = {}

    expect(nowReducer(initialNowValues, action)).toEqual(expected)
  })
})
