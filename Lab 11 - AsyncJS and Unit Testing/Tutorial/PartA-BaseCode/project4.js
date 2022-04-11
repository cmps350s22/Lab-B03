import fs from 'fs-extra'


/*
1.Rewrite the you created in Part-2 using promises.
*/

fs.readJson('data/course.json')
    //courses with instructor names
    .then(courses => {
        return fs.readJson('data/staff.json')
            .then(staffs => {
                //we added the staff names
                for (const course of courses) {
                    const {firstname, lastname} = staffs
                        .find(staff => staff.staffNo == course.instructorId)
                    course.instructor = `${firstname} ${lastname}`
                }
                return courses
            })
            .catch(err => console.error(err))
    })
    //courses with students
    .then(courses => {
        return fs.readJson('data/student.json')
            .then(students =>{
                for (const course of courses) {
                    course.students = students
                        .filter(student => student.courseIds.includes(course.crn))
                        .map(student => `${student.firstname} ${student.lastname}`)
                }
                return courses
            })
            .catch(err => console.error(err))
    })
    //display
    .then(courses => console.log(courses))
    .catch(err => console.error(err))

