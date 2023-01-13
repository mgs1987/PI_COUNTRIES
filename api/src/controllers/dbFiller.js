require("dotenv").config();
const axios = require("axios");
const { Country } = require("../db")
const { API_URL }=process.env;
const sequelize= require("sequelize")


async function infoCountries(){
    const countriesApi= await axios.get(API_URL);
    const countriesDb = countriesApi.data.map(c => {
        let country= {
            name:c.name.official,
            id: c.cca3,
            flag_image: c.flags[0],
            continent: c.continents[0],
            capital: !c.capital ? "": c.capital.join(),
            subregion: c.subregion,
            area: c.area,
            population: c.population,
        }
      return country
    })
    return countriesDb
};

async function dataBFiller(){
    let countries = await Country.findAll();
    if(countries.length == 0){
        const arrCountries= await infoCountries();
        await Country.bulkCreate(arrCountries)
    }
    
}


 
module.exports= {
    dataBFiller
};




