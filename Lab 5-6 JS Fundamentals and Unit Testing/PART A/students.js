const students = [
    {name: 'Hani', gender: 'Male', grade: 92, age: 19},
    {name: 'Ahmed', gender: 'Male', grade: 82, age: 30},
    {name: 'Sara', gender: 'Female', grade: 82, age: 24},
    {name: 'Emany', gender: 'Female', grade: 88, age: 26},
    {name: 'Hanan', gender: 'Female', grade: 50, age: 18},
    {name: 'Issa', gender: 'Male', grade: 42, age: 24}
]

const femaleStudents = students
    .filter(student => student.gender === "Female")
console.log('All female Students', femaleStudents)

const studentsGthan25 = students.filter(student => student.age > 25)
console.log('All students G than 25', studentsGthan25)

const femaleStudentsGthan25 = students
    .filter(student => student.gender === "Female")
    .filter(student => student.age < 25)

console.log('female Students G than 25', femaleStudentsGthan25)

const avg = students
    .reduce((acc, curr) => acc + curr.grade, 0) / students.length

const studentNames = students.map(student => student.name)
console.log(`Student Names = ${studentNames}`)

console.log(` Average = ${avg}`)


// const s1 = {
//     name : 'Ali',
//     age : 22,
//     hobbies : ['Football', 'BasketBall'],
//     children : [
//         {
//             name : 'Mohamed',
//             age : 5,
//             hobbies : ['Video Games', 'BasketBall'],
//         },
//         {
//             name : 'Hossam',
//             age : 5,
//             hobbies : ['Video Games', 'BasketBall'],
//         }
//     ]
// }
//
// console.log(s1.children[0].name)