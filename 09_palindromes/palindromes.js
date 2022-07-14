// const palindromes = (string) => {
//   const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g

//   const result = string.replace(regex, "").split(" ").join("").toLowerCase()
//   const reversed = string.replace(regex, "").split(" ")

//   for (let i = 0; i < reversed.length; i++) {
//     reversed[i] = reversed[i].split("").reverse().join("")
//   }

//   const final = reversed.reverse().join("").toLowerCase()

//   console.log(result)
//   console.log(final)
//   if (result == final) return true
//   return false
// }

const palindromes = (string) =>
  string.toLowerCase().replace(/[^a-z]/g, "") ==
  string
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .reverse()
    .join("")

// Do not edit below this line
module.exports = palindromes
