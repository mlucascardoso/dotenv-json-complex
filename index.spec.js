const env = require('./index')

describe('Environment', () => {
  test('Should return undefined if env function is not called', () => {
    expect(process.env.test).toBe(undefined)
  })

  test('Should return env variables if env function is loaded', () => {
    env()
    expect(process.env.test).toBe('{"cukinha":"Cuka"}')
  })
})