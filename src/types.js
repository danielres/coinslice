// @flow

export type NowValues = { [string]: number }
export type PortfolioEntry = {
  id: number,
  coin: string,
  date: string,
  amount: number,
  price: number,
}
// export type PortfolioEntries = Array<PortfolioEntry>

export type Action =
  | { type: 'NOW/REQUEST' }
  | { type: 'NOW/SUCCESS', payload: NowValues }
  | { type: 'NOW/FAILURE', error: string }
  | { type: 'PORTFOLIO/ADD_ENTRY', payload: PortfolioEntry }
  | { type: 'PORTFOLIO/REMOVE_ENTRY', id: number }
