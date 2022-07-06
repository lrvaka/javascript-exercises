const reverseString = (string) => {
  //inputs - string
  //outputs - reversal of string
  const arrayOfString = string.split("")
  let reversedArrayOfString = []
  arrayOfString.forEach((e) => reversedArrayOfString.unshift(e))
  return reversedArrayOfString.join("")
}

// Do not edit below this line
module.exports = reverseString
