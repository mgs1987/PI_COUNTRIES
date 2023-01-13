const { Country } = require("../db");
const sequelize= require("sequelize");

async function getAllCountries(req,res){
      const countries= await Country.findAll();
        return countries;
}

module.exports = { getAllCountries }