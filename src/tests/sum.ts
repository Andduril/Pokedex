const sum = (numbers: number[]): number => {
  let result: number = 0
  numbers.forEach(value => {
    result += value
  })
  return result
}

export default sum
