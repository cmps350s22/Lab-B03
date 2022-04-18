const template = `
    <table class="table">
        <thead>
            <tr>
                <th>Program</th>
                <th>Code</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
        {{#each courses}}
            <tr>
                <td>{{this.program}}</td>
                <td>{{this.code}}</td>
                <td>{{this.name}}</td>            
            </tr>
         {{/each}}
        </tbody>
    </table>
`

//{"program":"CS","code":"CMPS 205","name":"Discrete Structures for Computing"}
async function getCourses(programCode){
    //http://localhost:5000/api/courses/CE
    const data = await fetch(`/api/courses/${programCode}`)
    const courses = await data.json()
    const compiledTemplates = Handlebars.compile(template)
    const htmlCoursesTable = compiledTemplates({courses})
    document.querySelector("#courses-area").innerHTML = htmlCoursesTable
}
