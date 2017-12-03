// @flow
import * as React from 'react'
import type { PortfolioNewEntry } from '../types'

type Props = {
  onSubmit: Function,
  portfolioForm: PortfolioNewEntry,
  updateForm: Function,
}

export default ({ onSubmit, portfolioForm, updateForm }: Props) => (
  <form
    onSubmit={e => {
      e.preventDefault()
      onSubmit(portfolioForm)
    }}
  >
    <div>
      <label htmlFor="coin">Coin</label>
      <input
        name="coin"
        onChange={updateForm}
        type="text"
        value={portfolioForm.coin}
      />
    </div>
    <div>
      <label htmlFor="date">Date</label>
      <input
        name="date"
        onChange={updateForm}
        type="text"
        value={portfolioForm.date}
      />
    </div>
    <div>
      <label htmlFor="price">Price</label>
      <input
        name="price"
        onChange={updateForm}
        type="text"
        value={portfolioForm.price}
      />
    </div>
    <button>Submit</button>
  </form>
)
