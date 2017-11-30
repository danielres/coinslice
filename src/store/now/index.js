// @flow
import type { Action, NowValues } from '../../types'

const initialState: NowValues = {}

export default (state: NowValues = initialState, action: Action): NowValues => {
  switch (action.type) {
    case 'NOW_SUCCESS':
      return { ...action.payload }
    case 'NOW_FAILURE':
      console.error(action.error)
      return {}
    default:
      return state
  }
}
