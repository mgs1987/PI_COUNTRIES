const sequelize= require("sequelize")
const { Activity, Country }= require("../db")

async function addActivity(req,res,next){
        try{
        const { name, difficulty, duration, season, countries }=req.body
        if(!name || !difficulty || !duration || !season || !countries){
            return res.status(400).json({msg: "Incomplete Form"})
        }
    
        const [activity, created]= await Activity.findOrCreate({  //busco si existe, si no, creo una actividad nueva
            where: {
                name,
                difficulty,
                duration,
                season
            }
        })
       
        countries.forEach(async (c)=> {
            const country= await Country.findeOne({
                where: {
                    name:c
                } 
            })
            if(country) { 
                await activity.addCountry(country)}
        });
        return res.status(200).send(`Se creo la actividad ${activity.name}.`)

    } catch(err){
         next(err)}
    
}
module.exports = { addActivity }