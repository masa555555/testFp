import AbstractView from "./AbstractView.js";
import { getCountries, getSelectedCountry } from "../countries.js";

export default class extends AbstractView{
    constructor(params) {
        console.log(params);
        super(params);
        this.setTitle("Country");
    }

    async getHTML() {
        await getSelectedCountry(this.params.id);
        let selectedCountry = JSON.parse(localStorage.getItem('country'))[0];
        console.log(selectedCountry)
        // if (selectedCountry != "undefined") {
        //     alert("empty")
        // } 
        // let country = countries.reduce((prev, curr)=> {
        //     if(curr.cca3 == this.params.id){
        //         return prev.concat(curr);
        //     } else {
        //         return prev;
        //     }
        // },[])[0];

        // let country;
        // for(let i=0; i<countries.length; i++) {
        //     if(countries[i].cca3==this.params.id){
        //         country = countries[i];
        //     }
        //     let currenciesCountry;
        //     for(let i=0;i<countries.length; i++) {
        //         if(currencies[i].country==this.params.id){
        //             currenciesCountry = currencies[i]
        //         }
        //     }
        // }
        return `
        <div class="countryV">
        <h1>${selectedCountry.name['common']}'s flag is ${selectedCountry.flag}</h1>
        <p>Capital: ${selectedCountry.capital}</p>
        <p>Languages: ${Object.values(selectedCountry.languages)}</p>
        <p>Population: ${selectedCountry.population}</p>
        <p>Currencies: ${Object.keys(selectedCountry.currencies)}</p>
        <p>Region: ${selectedCountry.region}</p>
        <p>Subregion: ${selectedCountry.subregion}</p>
        </div>
        `;
    }
}