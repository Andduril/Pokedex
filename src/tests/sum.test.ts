import sum from './sum'

it('sum numbers', () => {
  expect(sum([3, 2, 1])).toEqual(6)
  expect((sum([1, 1]))).toEqual(2)
})
