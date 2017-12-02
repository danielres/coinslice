// @flow
import type { Action, PortfolioEntry } from '../../types'

export const addEntry = (entry: PortfolioEntry) => (dispatch: Function) =>
  dispatch(({ type: 'PORTFOLIO/ADD_ENTRY', payload: entry }: Action))

export const removeEntry = (id: number) => (dispatch: Function) =>
  dispatch(({ type: 'PORTFOLIO/REMOVE_ENTRY', id }: Action))
