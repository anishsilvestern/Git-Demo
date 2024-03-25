let XMLHTTPRequest = require("xhr2");

let xhr = new XMLHTTPRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.send();

xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText);

    let population = countries.filter((countries) => {
        return countries.population > 200000000;
    })


    for(let key of Object.keys(population)){
        console.log(`${population[key].name.common} : ${population[key].population} ` )
    }





}
