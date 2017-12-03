// @flow
import Joi from 'joi-browser'

export const PortfolioNewEntrySchema = Joi.object().keys({
  coin: Joi.string().length(3),
  date: Joi.string()
    .isoDate()
    .required(),
  price: Joi.number().required(),
})
