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
      difficulty: 0,
      duration: 0,
      season:"", 
      errors: {
        name:"",
        duration:""
     }
  })
  
function handleChange(e){
  e.preventDefault();
  const { value, name }= e.target;
  
  setInput({
   ...input,
   [name]: value
  });
}

function handleAddCountry(e){
  setInput({
    ...input,
    countries:[...input.countries, e.target.value]
  })
}

function handleSubmit(e){
  e.preventDefault();
  const { value, name }= e.target
  let errors = useState.errors;

  switch(name){
    case "name":
      var nameValidate = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
      errors.name = nameValidate.test(value) && value.length < 3 ? "Activity name must be letters and have as minimum 3 characters" : "";
      break;
    case "duration":
        var durationValidate =/^[0-9]+$/;
        errors.difficulty = value.length < 4 && durationValidate.test(value) ? "Duration must be a number" : "";
      break;
        default:
          break;
  }

  //alert("A form was submitted ")
  dispatch(addActivity(input))
}

  return (
    <div className="body">
      <Link to="/home" className="backhome"> Back to Home </Link>
      <h2 className="h2"> Want to ADD any activity? </h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div className="select">
        <select name="countries" defaultValue={"DEFAULT"}className="select-countries" onChange={(e)=>handleAddCountry(e)} multiple >
          <option value="DEFAULT"> Select countries : </option>
           {allCountries.map((pais)=> (
          <option key={pais.id} value={pais.name}> {pais.name}</option>))} 
        </select>
      </div>
      <br></br>
        <h4 className="h4"> Activity name </h4>
        <input
          type="text"
          name="act-name"
          placeholder= "Write here"
          onChange={(e)=>handleChange(e)}
          className="input"
          required
        ></input>
        <br></br>
        <h4 className="h4"> Difficulty </h4>
        <select onChange={(e)=>handleChange(e)}>
          <option value="0">Select number from 1 to 5</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br></br>
        <h4 className="h4"> Duration </h4>
        <input
          type="number"
          name="duration"
          placeholder="Quantity of minutes..."
          onChange={(e)=>handleChange(e)}
          className="input"
          required
        ></input>
        <br></br>
        <h4 className="h4"> Season </h4>
        <select value={useState.season} onChange={(e)=>handleChange(e)}
        className="select-season">
          <option value="value1"> Winter </option>
          <option value="value2"> Spring </option>
          <option value="value3"> Autumn </option>
          <option value="value4"> Summer </option>
        </select>
        <br></br>
        <br></br>
        <br></br>
        <button type="submit" className="buttonAdd">
          DO IT
        </button>
      </form>
      {/* <Footer/> */}
    </div>
  );
}
 
export default Activities;
