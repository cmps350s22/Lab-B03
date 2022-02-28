import {CensusRepo} from "./repository/census-repo.js";

const form = document.querySelector('#form')
form.addEventListener('submit', addCensus)

function addCensus(e) {
    e.preventDefault()
    console.log(e.target)
}

