const cars = ['Ford', 'Chevy', 'Jeep', 'Hyundai']
const moreCars = ['Tesla', 'Ferrari', 'Corvette', 'Honda']
const totalArray = cars.concat(moreCars)

console.log(cars.length)
console.log(totalArray)
console.log(totalArray.indexOf('Honda'), totalArray.lastIndexOf('Ford'))

const stringOfCars = totalArray.join()
const carsFromString = []

console.log(stringOfCars)
console.log(stringOfCars.split(',' + carsFromString))

const carsInReverse = totalArray.reverse()
console.log(carsInReverse)

const sort = carsInReverse.sort()
const myPrediction = 'Chevy'

console.log(sort)
console.log("Prediction at index:", carsInReverse.indexOf(myPrediction))

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)
const removedReptiles = pets.splice(4, 2, 'hamster')
const removedPet = pets.pop()
const shiftedPet = pets.shift()
pets.push(removedPet)
pets.unshift('turtle')

console.log(reptiles)
console.log(removedReptiles)
console.log(removedPet)
console.log(shiftedPet)
console.log(pets)

const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]

const addTwo = (num, index, arr) => {
  arr[index] = num + 2
}
numbers.forEach(addTwo)
console.log(numbers)




