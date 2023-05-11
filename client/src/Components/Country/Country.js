import React, { useEffect } from "react";
import "./Country.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getCountryDetailById,
  getActivitiesFiltered,
} from "../../Redux/actions/index";
import { Link, useParams } from "react-router-dom";
import CardActivity from "../CardActivity/CardActivity";
import { FaHome } from "react-icons/fa";

export const Country = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const country = useSelector((state) => state.countryDetail);
  const activitiesFilter = useSelector((state) => state.activitiesFiltered);

  useEffect(() => {
    dispatch(getCountryDetailById(id));
    dispatch(getActivitiesFiltered(id));
  }, [dispatch, id]);

  return (
    <div className="main-cointainer">
      <div className="space-container"></div>
      <div className="body">
        <div className="back-button-container">
          <Link to="/home">
            <button className="backbtn">
              <FaHome />
            </button>
          </Link>
        </div>
        <h1 className="furtherinfoh1"> About {country.name} </h1>

        <div>
          <img
            className="flagimage"
            src={country.flag_image}
            alt={country.name}
          />
          <h3>
            <span>Three letter country code:</span> "{country.id}"
          </h3>
          <h2 className="futherinfo">
            <span>Capital:</span> {country.capital}
          </h2>
          <h2 className="futherinfo">
            <span>Subregion:</span> {country.subregion}
          </h2>
          <h2 className="futherinfo">
            <span>Area:</span> {country.area} km2{" "}
          </h2>
          <h2 className="futherinfo">
            <span>Population:</span>
            {country.population} residents
          </h2>
        </div>
        <br></br>
        <br></br>
        <h2 className="title-activities">
          <span>Featured Activities</span>
        </h2>
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
};

export default Country;
