import React, { useEffect, useState } from "react";
import "./Activities.css";
import { useDispatch, useSelector } from "react-redux";
import { addActivity, getCountries } from "../../Redux/actions"
import { Link } from "react-router-dom";


function Activities() {
  
  const dispatch= useDispatch()

  const allCountries = useSelector((state) => state.allCountries)
 
 useEffect(() => { 
  dispatch(getCountries());
}, [dispatch]);


  const [input, setInput]= useState({
      countries:[],
      name:"",
      difficulty: "",
      duration: 0,
      season:"", 
      errors: {
        name:"",
        duration:""
     }
  })
  
function handleChange(e){
  e.preventDefault();
  setInput({
   ...input,
   [e.target.name]: e.target.value
  });
}

function handleAddCountry(e){
  setInput({
    ...input,
    countries:[...input.countries, e.target.value]
  })
}

function handleDifficulty(e){
   e.preventDefault();
   setInput({
    ...input,
    difficulty : e.target.value
   })
}
function handleSeason(e){
  e.preventDefault();
  setInput({
    ...input,
    season: e.target.value
  })
}

function handleSubmit(e){
  e.preventDefault();
  
  const { value, name }= e.target
  let errors = useState.errors;
   //console.log(input)

  switch(name){
    case "name":
      var nameValidate = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
      errors.name = nameValidate.test(value) && value.length < 3
       ? "Activity name must be letters and have as minimum 3 characters"
       : "";
      break;
    case "duration":
        var durationValidate =/^[0-9]+$/;
        errors.difficulty = value.length < 4 && durationValidate.test(value) 
        ? "Duration must be a number" 
        : "";
      break;
        default:
          break;
  };
  
  dispatch(addActivity(input))
  setInput({
    countries:"",
    name:"",
    difficulty:"",
    duration:"",
    season:""
  });
}

  return (
    <div className="body">
      <br></br>
      <Link to="/home" className="backhome"> Back to Home </Link>
      <h2 className="h2"> Want to ADD any activity? </h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="select">
        <h4 className="h4">  Select countries :</h4>
        <select 
        name="countries" 
        className="select-countries" 
        onChange={(e)=>handleAddCountry(e)} 
        multiple >

           {allCountries.map((pais)=> (
          <option key={pais.id} value={pais.name}>
             {pais.name}
             </option>))} 
        </select>
      </div>
      <br></br>
        <h4 className="h4"> Activity name </h4>
        <input
          type="text"
          name="name"
          placeholder= "Write here"
          onChange={(e)=>handleChange(e)}
          className="input"
          value={input.value}
          required
        ></input>
        <br></br>
        <h4 htmlFor="difficulty" className="h4">
           Difficulty
            </h4>
        <select className="select-season"onChange={(e)=>handleDifficulty(e)}>
          <option key="0" value="0">
            Select number from 1 to 5
            </option>
          <option key="1"value="1">
            1- Begginer
          </option>
          <option key="2"value="2">
            2-Low
            </option>
          <option key="3"value="3">
            3-Medium
            </option>
          <option key="4"value="4">
            4-High
            </option>
          <option key="5"value="5">
            5-Professional
            </option>
        </select>
        <br></br>
        <h4 className="h4"> Duration </h4>
        <input
          type="number"
          name="duration"
          placeholder="Quantity of minutes..."
          onChange={(e)=>handleChange(e)}
          className="input"
          value={input.value}
          required
        ></input>
        <br></br>
        <h4 className="h4"> Season </h4>
        <select value={useState.season} 
        onChange={(e)=>handleSeason(e)}
        className="select-season"
        >
          <option value="0">Select season</option>
          <option value="Winter"> Winter </option>
          <option value="Spring"> Spring </option>
          <option value="Autumn"> Autumn </option>
          <option value="Summer"> Summer </option>
        </select>
        <br></br>
        <br></br>
        <br></br>
        <button type="submit" className="buttonAdd">
          Add Turistic Activity
          </button>
        
      </form>
    </div>
  );
}
 
export default Activities;
