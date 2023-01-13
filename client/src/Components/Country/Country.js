import React, { useEffect } from 'react';
import "../Country/Country.css";
import { useSelector, useDispatch } from "react-redux";
import { getCountryDetailById } from "../../Redux/actions/index";
import { Link, useParams } from "react-router-dom";



function Country(props) {
  const { id }=useParams();
  const dispatch= useDispatch(); 

  useEffect(()=>{
    dispatch(getCountryDetailById(id))},[dispatch,id])
    
  const country = useSelector((state)=>state.countryDetail);

//console.log("aca esta el id ",id)

  return (

    <div className='main-cointainer'>
      <Link to="/home"><button className="backbtn">Back</button></Link>
        <div className='body'>
          <h1 className='utherinfoh1'> About... </h1>

          <h1> {country.name} </h1>
          <div><img className="flagimage"src={country.flag_image} alt={country.name}/>
          <h3>Código de país de 3 letras: {country.id}</h3>
          <h2 className='futherinfo'>Capital: {country.capital}</h2>
          <h2 className='futherinfo'>Subregion: {country.subregion}</h2>
          <h2 className='futherinfo'>Area: {country.area} km2 </h2>
          <h2 className='futherinfo'>Population: {country.population} residents</h2></div>
          
          <h2 className='turistic-detail'> Turistic Activities </h2>
         {/* VER COMO HAGO CON ACTIVITIES ACA VAN TODAS LAS ACTIVIDADES RELACIONADAS CON ESTE PAIS */}
         </div>
      
    </div>
  )}

export default Country;

