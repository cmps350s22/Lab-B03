//Synchronous code. Change it to async using callback.
// let data = fs.readFileSync('data/student.json');
// console.log(JSON.parse(data));
//
// console.log('some more code ....')

/*
1.Convert this code to asynchronous form using a separate callback function (callBack).
2.Change the callback function to an anonymous one.
2.Take care of error handling in the callback function
*/

import fs from 'fs'

function readFile(filename, cb) {
   fs.readFile(filename, (err, data)=>{
       if(!err)
           cb(null, data)
       else
           cb(err, null)
   })
}

readFile('data/student.json', (err, data) => {
    if (!err)
        console.log(JSON.parse(data))
    else
        console.log(err)
})


console.log('some more code of your app')
console.log('some more code of your app')
console.log('some more code of your app')
console.log('some more code of your app')
