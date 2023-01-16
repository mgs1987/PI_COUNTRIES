const { Router } = require("express");
const { Sequelize, Op } = require("sequelize");
const { dataBFiller } = require("../controllers/dbFiller");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getAllCountries } = require("../controllers/getCountries");
const agregarActividad = require("../controllers/addActivity");
const { Country }=require("../db");
const { Activities }= require("../db");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


//-----------------GET/countries y GET/countries?name="..."--------------------------//

router.get("/countries", async (req, res, next) => {
    const { name } = req.query;

  try {
    await dataBFiller();
    
    if(name){
        const match= await Country.findAll({
            where: {
                name: {
                    [Op.iLike]:`%${name}%`,
                }
            }
        });
        if(!match.length){
            return res.status(404).send("Sorry, we could not find any country with that name")
        }
        return res.status(200).json(match)
    } 
    const countries= await Country.findAll({
        includes:{
            model: Activities,
        }
    })
    res.status(200).send(countries)
  } catch (err) {
    next(err);
  }
});


//-------------------- GET /countries/{idPais}--------------------------:


 router.get("/countries/:id", async(req,res) =>{
   const { id }= req.params
    //  const idPais = req.params.id.toUpperCase();
       
     try{
        await dataBFiller();

        if(id){
            const idMayus= id.toUpperCase()
            const idCountry= await Country.findByPk(idMayus,{
                includes: {
                    model: Activities,
                }
            })

            if(!idCountry){
                return res.status(404).send("No country found with that id")
            }
            res.status(200).json(idCountry)
        }

     } catch(err){
        console.log(err)}
 });

//----------------------POST /activities---------------------------------//
// // Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// // Crea una actividad turística en la base de datos,

router.post("/activities", agregarActividad.addActivity);

//------------------GET /activities --------------------------------------//
 
router.get("/activities", async (req, res, next) => {

    try {
      const newActivity = await Activities.findAll({
        include: [
          {
            model: Country,
            through: "Country_Activities",
          },
        ],
      });
      res.status(200).json(newActivity);
    } catch (error) {    // Agarra los errores sequelize, "next" pasa al siguiente middleware.
      next(error);
    }
  });

module.exports = router;
