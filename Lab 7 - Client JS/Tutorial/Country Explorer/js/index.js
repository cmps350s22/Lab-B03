const regionSearchBar = document.querySelector('#region')
const countryDropdown = document.querySelector('#country')
const factsArea = document.querySelector('#facts-area')
const regionBaseUrl = 'https://restcountries.com/v3.1/region'
const countryBaseUrl = 'https://restcountries.com/v3.1/name'

async function handleRegionChanged(region) {
    const selectedRegion = regionSearchBar.value
    const url = `${regionBaseUrl}/${region}`
    //download the data
    const data = await fetch(url)
    const countries = await data.json()

    const options = countries.map(country => `<option value="${country.name.common}">${country.name.common}</option>`)
    countryDropdown.innerHTML = options.join(' ')
    await handleCountryChanged(countryDropdown.value)

}

async function handleCountryChanged(selectedCountry) {
    const url = `${countryBaseUrl}/${selectedCountry}`
    //download the data
    const data = await fetch(url)
    const countries = await data.json()
    factsArea.innerHTML = factsHTML(countries[0])

}

function factsHTML(country) {
    const key = Object.keys(country.currencies)[0]
    console.log(key)

    return `
        <h1>Fact about ${country.name.common}</h1>
        <img src="${country.flags.png}">
        <table>
            <tr>
                <td>Offical Country Name</td>
                <td>${country.name.common}</td>
            </tr> 
            <tr>
                <td>Capital City</td>
                <td>${country.capital}</td>
            </tr>
             <tr>
                <td>Population</td>
                <td>${country.population}</td>
            </tr>
               <tr>
                <td>Currency</td>
                <td>${country.currencies[key].name}</td>
            </tr>
        </table>
    `
}

















