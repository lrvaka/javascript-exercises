const repeatString = (string, num) => {
  if (num < 0) return "ERROR"

  let endResult = ""
  for (let i = 0; i < num; i++) {
    endResult += string
  }
  return endResult
}

// Do not edit below this line
module.exports = repeatString
