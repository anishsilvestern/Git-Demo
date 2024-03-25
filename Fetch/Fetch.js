let fetchCountries() => {
    fetch('https://restcountries.com/v3.1/all')

    .then (
        () => {
            console.log("succes")
        }
    ) 

    .catch (
        ()  => {
            console.log('Failed')
        }
    )    

}







fetchCountries();