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


const getHtmlCountrt = country => {
    return `
    <div class='mini'>
    <h2>${country.name.common}</h> </br>
    <img class='width' src='${country.flags.png}' >
    </div>
    
    `
}

loadingCountries()