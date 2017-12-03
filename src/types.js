// @flow

export type NowValues = { [string]: number }

export type PortfolioNewEntry = {
  coin: string,
  date: string,
  amount: number,
  price: number,
}

export type PortfolioEntry = {
  ...PortfolioNewEntry,
  id: number,
}

export type PortfolioFormEntry =
  | {}
  | {
      id: ?number,
      coin: ?string,
      date: ?string,
      amount: ?number,
      price: ?number,
    }

// export type PortfolioEntries = Array<PortfolioEntry>

export type Action =
  | { type: 'NOW/REQUEST' }
  | { type: 'NOW/SUCCESS', payload: NowValues }
  | { type: 'NOW/FAILURE', error: string }
  | { type: 'PORTFOLIO/ADD_ENTRY', payload: PortfolioNewEntry }
  | { type: 'PORTFOLIO/REMOVE_ENTRY', id: number }
  | { type: 'PORTFOLIO_FORM/UPDATE', payload: PortfolioFormEntry }
  | { type: 'PORTFOLIO_FORM/RESET' }
