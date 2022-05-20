import AbstractView from "./AbstractView.js";
import { getCountries } from "../countries.js";

export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Countries");
    }

    async getHTML() {
        // localStorage.setItem('country', null);
        let countries = getCountries();

        return `
        <h1>Countries</h1>
        <div>
        ${countries.map(country=>{
        return (
            `<div class="allCountry"><a href="/countries/${country.cca3}">
                <img src="${country.flags.png}", alt="no image", width="100", height="100"/>
            </a>
            <p>Country Name: ${country.name.common}</p>
            </div>`
            )
        })}
        </div>`;
    }
}