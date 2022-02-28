import {CensusRepo} from "./repository/census-repo.js";

const repo = new CensusRepo()

const noOfRowsDD = document.querySelector('#noOfRows')
const addBtn = document.querySelector('#add-btn')
const countriesTable = document.querySelector('#countries')
const form = document.querySelector('#form')

form.addEventListener('submit', addCensus)
noOfRowsDD.addEventListener('change', showCensusList)

//when my window loads display all the countries inside the countriesTable
window.onload = async () => {
    window.deleteCensus = deleteCensus
    window.updateCensus = updateCensus
    await showCensusList()
}

async function showCensusList() {
    const allCensus = await repo
        .getAllCensus(parseInt(noOfRowsDD.value))
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
                <i class="fa fa-edit" onclick="updateCensus('${census.id}')">Edit</i>
                <i class="fa fa-trash" onclick="deleteCensus('${census.id}')">Delete</i>
            </td>             
        </tr>
    
    `
}

async function updateCensus(id){
    const census = await repo.getCensusById(id)
    document.querySelector('#id').value = census.id
    document.querySelector('#country').value = census.country
    document.querySelector('#population').value = census.population
    addBtn.value = 'Update'
}


async function addCensus(e) {
    e.preventDefault()
    const census = formToObject(e.target)
    form.reset()

    //when i reach here, I want to differentiate between the add and the update
    if(addBtn.value == 'Update'){
        await repo.updateCensus(census)
        addBtn.value = 'Add'
    }else{
        census.id = Date.now().toString()
        await repo.addCensus(census)
    }

    //for both
    await showCensusList()
}

async function deleteCensus(id) {
    await repo.deleteCensus(id)
    await showCensusList()
}

function formToObject(form) {
    const formData = new FormData(form)
    const data = {}
    for (const [key, value] of formData) {
        data[key] = value
    }

    return data;
}

