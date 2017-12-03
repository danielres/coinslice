// @flow
import { connect } from 'react-redux'

import { updateForm, resetForm } from '../store/portfolioForm/actions'
import { addEntry, removeEntry } from '../store/portfolio/actions'
import PortfolioForm from './PortfolioForm'

export default connect(
  ({ portfolioForm }) => ({ portfolioForm }),
  dispatch => ({
    onSubmit: entry => dispatch(addEntry(entry)),
    updateForm: ({ target: { name, value } }) =>
      dispatch(updateForm({ [name]: value })),
  })
)(PortfolioForm)
