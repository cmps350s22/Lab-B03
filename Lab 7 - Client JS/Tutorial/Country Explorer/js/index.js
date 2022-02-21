const regionSearchBar = document.querySelector('#region')
const countryDropdown = document.querySelector('#country')
const regionBaseUrl = 'https://restcountries.com/v3.1/region'

async function handleRegionChanged(region) {
    const selectedRegion = regionSearchBar.value
    const url = `${regionBaseUrl}/${region}`
    //download the data
    const data = await fetch(url)
    const countries = await data.json()

    const options = countries.map(country => `<option value="${country.name.common}">${country.name.common}</option>`)
    countryDropdown.innerHTML = options.join(' ')


}

const url = `${regionBaseUrl}/${selectedRegion}`
console.log(url)


















