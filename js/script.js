const loadingCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => showCountry(data))
}

const showCountry = countries => {
    console.log(countries[0]);

    const content = countries.map(country => getHtmlCountrt(country))
    // console.log(content[0]);
    const container = document.getElementById('api-container');
    container.innerHTML = content.join(' ')
}


const getHtmlCountrt = ({ name, flags }) => {
    return `
    <div class='mini'>
    <h2>${name.common}</h> </br>
    <img class='width' src='${flags.png}' > </br>
    
    </div>
    `

    // const { name, flags } = country

    // return `
    // <div class='mini'>
    // <h2>${name.common}</h> </br>
    // <img class='width' src='${flags.png}' > </br>
    // <h2>${country.subregion}</h>
    // </div>
    // `

    // return `
    // <div class='mini'>
    // <h2>${country.name.common}</h> </br>
    // <img class='width' src='${country.flags.png}' > </br>
    // <h2>${country.subregion}</h>
    // </div>
    // `
}

loadingCountries()