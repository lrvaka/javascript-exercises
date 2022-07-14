const fibonacci = (count) => {
  if (count < 0) return "OOPS"
  let a = 0
  let b = 1

  for (let i = 1; i < count; i++) {
    const temp = b
    b = a + b
    a = temp
  }

  return b
}

// Do not edit below this line
module.exports = fibonacci

// const fibonacci = (num) => {
//   if (num < 0) return "OOPS"
//   if (typeof num == "string") Number(num)
//   if (num == 1) return 1
//   let arrayOfNums = []
//   for (let i = 1; i < num; i++) {
//     if (arrayOfNums.length == 0) arrayOfNums.push(1)
//     if (arrayOfNums.length == 1) arrayOfNums.push(1)
//     arrayOfNums.push(arrayOfNums[i] + arrayOfNums[i - 1])
//   }
//   console.log(arrayOfNums)
//   return arrayOfNums[num - 1]
// }
