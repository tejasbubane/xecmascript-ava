const divisibleBy = (number, divisor) => {
  return number % divisor === 0
}

const isLeapYear = (year) => {
  return divisibleBy(year, 400) || divisibleBy(year, 4) && !divisibleBy(year, 100)
}

export default isLeapYear
