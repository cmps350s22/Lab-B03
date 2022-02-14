const numbers = [1, 2, 3, 4, -5, 6, -7, -8]

// for (const number of numbers) {
//     console.log(number)
// }

// function display(a) {
//     console.log(a)
// }
//
// numbers.forEach(display)

numbers.forEach(a => console.log(a))
console.log('original array', numbers)

const mapped = numbers.map(x => x ** 3)
const filtered = numbers.filter(x => x < 0)
const findNegative8 = numbers.find(x => x === -8)

console.log('mapped' , mapped)
console.log('filtered' , filtered)