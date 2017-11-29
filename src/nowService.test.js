import now, { getOriginalData } from './nowService'

describe('getOriginalData()', () => {
  it('Fetches relevant data from coinmarketcap api', async () => {
    const originalData = await getOriginalData({})
    expect(originalData.map(e => e.symbol)).toEqual(['BTC', 'ETH', '_'])
  })
})

describe('now()', async () => {
  const originalData = await getOriginalData({})
  const data = await now({ coins: ['ETH', 'BTC'] })

  it('Returns selected coins only', async () => {
    expect(originalData.length).toEqual(3)
    expect(Object.keys(data).length).toEqual(2)
  })
  it('Returns data properly formatted', async () => {
    expect(data.BTC).toMatch(/\d+\.\d+/)
    expect(data.ETH).toMatch(/\d+\.\d+/)
  })
})
