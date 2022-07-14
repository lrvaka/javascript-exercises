const findTheOldest = (arrayOfPeople) =>
  arrayOfPeople.reduce((obj, item) => {
    if (!item.hasOwnProperty("yearOfDeath")) {
      item.yearOfDeath = new Date().getFullYear()
    }
    if (Object.keys(obj).length === 0) {
      obj["name"] = item.name
      obj.yearOfBirth = item.yearOfBirth
      obj.yearOfDeath = item.yearOfDeath
    } else if (
      obj.yearOfDeath - obj.yearOfBirth <
      item.yearOfDeath - item.yearOfBirth
    ) {
      obj["name"] = item.name
      obj.yearOfBirth = item.yearOfBirth
      obj.yearOfDeath = item.yearOfDeath
    }
    return obj
  }, {})

// Do not edit below this line
module.exports = findTheOldest
