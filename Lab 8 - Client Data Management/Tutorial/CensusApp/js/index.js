import {CensusRepo} from "./repository/census-repo.js";

const repo = new CensusRepo()

const countriesTable = document.querySelector('#countries')
const form = document.querySelector('#form')
form.addEventListener('submit', addCensus)

//when my window loads display all the countries inside the countriesTable
window.onload = async () => {
    await showCensusList()
}

async function showCensusList() {
    const allCensus = await repo.getAllCensus()
    const htmlRows = allCensus.map(c => censusToHTMLRow(c)).join('')

    countriesTable.innerHTML = `
       ${htmlRows}
    `
}
//ctrl + alt + l [format code]
function censusToHTMLRow(census) {
    return `
        <tr> 
            <td>${census.country}</td>
            <td>${census.population}</td>
            <td>
                <i class="fa fa-edit">Edit</i>
                <i class="fa fa-trash">Delete</i>
            </td>
             
        </tr>
    
    `
}

function addCensus(e) {
    e.preventDefault()
    const census = formToObject(e.target)
    census.id = Date.now().toString()
    repo.addCensus(census)
    form.reset()
}

function formToObject(form) {
    const formData = new FormData(form)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }

    return data;
}

