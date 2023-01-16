import React, { useEffect,useState } from 'react';
import "../Country/Country.css";
import { useSelector, useDispatch } from "react-redux";
import {  getCountryDetailById, filterActivitiesBySeason, getActivitiesFiltered } from "../../Redux/actions/index";
import { Link, useParams } from "react-router-dom";
import CardActivity from '../CardActivity/CardActivity';



function Country(props) {
  const { id }=useParams();
  const dispatch= useDispatch(); 

  const [select, setSelect]= useState({
    season:"",
  })

  const country = useSelector((state)=>state.countryDetail);
  //const activities= useSelector((state)=> state.activities)
  const activitiesFilter = useSelector((state)=>state.activitiesFiltered)

  console.log(country.name)

  useEffect(()=>{
    dispatch(getCountryDetailById(id))
    dispatch(getActivitiesFiltered(country.name))
   //dispatch(getActivities())
  },[dispatch,id,country.name])
    
 
    
 

 function handleFilter(e){
  e.preventDefault();
  setSelect(e.target.value)
  dispatch(filterActivitiesBySeason(e.target.value))
 }
  
//console.log("aca esta el id ",id)

  return (
     
    <div className='main-cointainer'>
    <br></br>
    <div className='body'>
        <div className='filterseason'>
        <Link to="/home"><button className="backbtn">Back to Home</button></Link>
        <label className="filteract"> Filter activities</label>
          <select onChange={(e)=>handleFilter(e)}>
            <option value="0">Choose a Season</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
          </select>
          </div>
          <h1 className='utherinfoh1'> About... </h1>

          <h1> {country.name} </h1>
          <div><img className="flagimage"src={country.flag_image} alt={country.name}/>
          <h3> Three letter country code: "{country.id}"</h3>
          <h2 className='futherinfo'>Capital: {country.capital}</h2>
          <h2 className='futherinfo'>Subregion: {country.subregion}</h2>
          <h2 className='futherinfo'>Area: {country.area} km2 </h2>
          <h2 className='futherinfo'>Population: {country.population} residents</h2></div>
          <br></br>
          <br></br>
          <div className="turisticAct">
          <h2> Turistic Activities Availables </h2>
          </div>

         {activitiesFilter && activitiesFilter.map((el)=>{
          return ( 
          <CardActivity
            name= {el.name}
            difficulty={el.difficulty}
            duration= {el.duration}
            season={el.season} 
            
            /> );
          })}
         </div>
      
    </div>
  )}

export default Country;

