const ftoc = (fahrenheit) => {
  if ((fahrenheit - 32) * (5 / 9) === 0) return 0
  return +((fahrenheit - 32) * (5 / 9)).toFixed(1)
}

const ctof = (celsius) => {
  if (celsius * (9 / 5) + 32 === 0) return 0
  return +(celsius * (9 / 5) + 32).toFixed(1)
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
}
