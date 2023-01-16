import React, { useEffect } from "react";
import "../Country/Country.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountryDetailById,
  getActivitiesFiltered,
} from "../../Redux/actions/index";
import { Link, useParams } from "react-router-dom";
import CardActivity from "../CardActivity/CardActivity";

function Country(props) {
  const { id } = useParams();
  const dispatch = useDispatch();

  const country = useSelector((state) => state.countryDetail);
  const activitiesFilter = useSelector((state) => state.activitiesFiltered);

  useEffect(() => {
    dispatch(getCountryDetailById(id));
    dispatch(getActivitiesFiltered(country.name));
  }, [dispatch, id, country.name]);

  return (
    <div className="main-cointainer">
      <br></br>
      <div className="body">
        <div className="filterseason">
          <Link to="/home">
            <button className="backbtn">Back to Home</button>
          </Link>
        </div>
        <h1 className="utherinfoh1"> About... </h1>

        <h1> {country.name} </h1>
        <div>
          <img
            className="flagimage"
            src={country.flag_image}
            alt={country.name}
          />
          <h3> Three letter country code: "{country.id}"</h3>
          <h2 className="futherinfo">Capital: {country.capital}</h2>
          <h2 className="futherinfo">Subregion: {country.subregion}</h2>
          <h2 className="futherinfo">Area: {country.area} km2 </h2>
          <h2 className="futherinfo">
            Population: {country.population} residents
          </h2>
        </div>
        <br></br>
        <br></br>
        <div className="turisticAct">
          <h2> Turistic Activities Availables </h2>
        </div>

        {activitiesFilter &&
          activitiesFilter.map((el) => {
            return (
              <CardActivity
                name={el.name}
                difficulty={el.difficulty}
                duration={el.duration}
                season={el.season}
              />
            );
          })}
      </div>
    </div>
  );
}


export default Country;

