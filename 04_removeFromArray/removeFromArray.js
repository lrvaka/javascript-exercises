const removeFromArray = (arr, ...elements) => {
  elements.forEach((e) => {
    if (arr.indexOf(e) === -1) return
    arr.splice(arr.indexOf(e), 1)
  })

  return arr
}

// Do not edit below this line
module.exports = removeFromArray
