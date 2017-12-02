// @flow
import type { Action, PortfolioFormEntry } from '../../types'

export const updateForm = (formEntry: PortfolioFormEntry) => (
  dispatch: Function
) => dispatch(({ type: 'PORTFOLIO_FORM/UPDATE', payload: formEntry }: Action))

export const resetForm = () => (dispatch: Function) =>
  dispatch(({ type: 'PORTFOLIO_FORM/RESET' }: Action))
