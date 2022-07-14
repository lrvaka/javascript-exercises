const add = (...numbers) => numbers.reduce((a, c) => a + c, 0) //no array entered, use spread to make them into array

const subtract = (...numbers) => numbers.reduce((a, c) => a - c) //skip initial value no you don't get a negative

const sum = (numbers) => numbers.reduce((a, c) => a + c, 0) //array is entered

const multiply = (numbers) => numbers.reduce((a, c) => a * c)

const power = (a, b) => a ** b

const factorial = (num) => {
  let final = 1
  if (num === 0) return 1
  for (let i = 1; i < num + 1; i++) {
    final *= i
  }
  return final
}

const recursiveFactorial = function (n) {
  if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
}
