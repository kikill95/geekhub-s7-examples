Array.prototype.mySort = function (callback) {
  callback = callback || function (first, second) {
    if (first === second) {
      return 0
    } else if (first > second) {
      return 1
    } else {
      return -1
    }
  }

  var workingElement
  for (var i = 0; i < this.length - 1; i++) {
    if (callback(this[i], this[i + 1]) === 1 && i >= 0) {
      workingElement = this[i]
      this[i] = this[i + 1]
      this[i + 1] = workingElement
      i -= 2
    }
  }

  return this
}

var inputArray = [5, 4, 3, 2, 19, 3, 2, 1, 4, 7, 6, 5, 8, 'a', 'B', 'A', 'name']
// [3, undefined, 1, null, NaN, 'Apple', NaN, 2, 'a2', true, '2a', false, 'apple']
// ['Z', 'a', 1, 1, 2, -2, -2, 1, 5, 'A', 'b', 123, -2, -2, 3, -1]
// ['Name', 9, 3, 2, 1, 4, 7, 6, 5, 8, 'a', 'B', 'A']

var sorted = inputArray.sort()
var mySorted = inputArray.mySort()

console.log('With default callback')

console.log(sorted)
console.log(mySorted)

var callback = function (a, b) {
  var modularity = a * a > b * b
  if (a * a === b * b) {
    return 0
  } else if (modularity) {
    return 1
  } else {
    return -1
  }
}

var sortedWithCallback = inputArray.sort(callback)
var mySortedWithCallback = inputArray.mySort(callback)

console.log('With custom callback')

console.log(sortedWithCallback)
console.log(mySortedWithCallback)
