const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all').then(res=> res.json())
    .then(data => {localStorage.setItem('countries', JSON.stringify(data))})
    .catch(error => console.log('error',error));
}

const loadSelectedCountry = (code) => {
    return　fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(res => res.json())
    .then(data => {
        localStorage.setItem('country', JSON.stringify(data));
    })
}

loadCountries();

export function getCountries() {
    const countries = localStorage.getItem('countries');
    return JSON.parse(countries);
};

export function getSelectedCountry(code) {
    const country = loadSelectedCountry(code);
    return country;
}



