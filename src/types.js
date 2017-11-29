// @flow

export type NowValues = { [string]: number }

export type Action =
  | { type: 'NOW_REQUEST' }
  | { type: 'NOW_SUCCESS', payload: NowValues }
  | { type: 'NOW_FAILURE', error: string }
