let XMLhttpRequest = require('xhr2');

let xhr = new XMLhttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.send();

xhr.onload = function() {
    let  countries = JSON.parse(xhr.responseText);
      
     for(let intex in Object.keys(countries)){
        console.log(countries[intex].flag);

     };
};