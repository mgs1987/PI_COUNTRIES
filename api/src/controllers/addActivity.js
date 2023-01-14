const sequelize= require("sequelize")
const { Activities, Country }= require("../db")

async function addActivity(req,res,next){

        try{
        const { name, difficulty, duration, season, countries }=req.body

        console.log(typeof countries)

        if(!name || !difficulty || !duration || !season || !countries){
            return res.status(400).json({msg: "Incomplete Form"})
        }

        const [activity, created]= await Activities.findOrCreate({  //busco si existe, si no, creo una actividad nueva
            where: {
                name,
                difficulty,
                duration,
                season
            }
        })
        countries.forEach (async (c)=>{
        const country = await Country.findOne({ where: { name: c } }); // para cada pais pasado lo busco
            if (country) { await activity.addCountry(country) };  
    })
    
     return res.status(201).send("Activity created")
    } catch (err) {
         next(err) 
    }  
};
module.exports = { addActivity }