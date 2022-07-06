const sumAll = (a, b) => {
  if (a < 0 || b < 0) return "ERROR"
  if (a < 0 || b < 0) return "ERROR"
  if (typeof a !== "number" || typeof b !== "number") return "ERROR"

  let range = []

  if (a > b) {
    for (let i = b; i <= a; i++) {
      range.push(i)
    }
  } else {
    for (let i = a; i <= b; i++) {
      range.push(i)
    }
  }

  const sum = range.reduce((p, c) => p + c)
  return sum
}

// Do not edit below this line
module.exports = sumAll
