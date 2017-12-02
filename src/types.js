// @flow

export type NowValues = { [string]: number }

export type Action =
  | { type: 'NOW/REQUEST' }
  | { type: 'NOW/SUCCESS', payload: NowValues }
  | { type: 'NOW/FAILURE', error: string }
