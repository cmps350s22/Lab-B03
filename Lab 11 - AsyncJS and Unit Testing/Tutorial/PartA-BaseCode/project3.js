import fs from 'fs-extra'

/*
1.Rewrite the you created in Part-1 using promises.
*/

fs.readJson('data/course.json')
    .then(courses => courses.map(course => course.crn))
    .then(crns=> console.log(crns))
    .catch(err => console.log(err))

console.log('another code')
