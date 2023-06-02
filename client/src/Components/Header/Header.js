import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Header.css";
import {
  getCountryByName,
  filterByContinent,
  orderAlphabetic,
  orderPopulation,
  getCountries,
  filterBySeason,
} from "../../Redux/actions/index";
import { Link } from "react-router-dom";

export const Header = ({ setCurrentPage }) => {
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    dispatch(getCountryByName(search));
    e.target.reset();
  }
  function handleFilterContinent(e) {
    setSelect(e.target.value);
    if (e.target.value !== "") {
      dispatch(filterByContinent(e.target.value));
    }
  }
  function handleOrderAlphabetic(e) {
    if (e.target.value !== "") {
      dispatch(orderAlphabetic(e.target.value));
    }
  }

  function handleOrderPopulation(e) {
    if (e.target.value !== "") {
      dispatch(orderPopulation(e.target.value));
    }
  }

  function handleReset(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterBySeason(e) {
    if (e.target.value !== "") {
      dispatch(filterBySeason(e.target.value));
    }
  }
  return (
    <div className="search-bar">
      <h1 className="h1"> Countries in the World </h1>

      <div className="menu">
        <div className="linkbutton">
          <button className="create-act">
            <Link to="/activities" className="create-act">
              Create Activity
            </Link>
          </button>
          <button onClick={(e) => handleReset(e)} className="create-act1">
            Reset Filters / Orders
          </button>
          <div className="dropdown">
            <button className="dropbtn">Filter</button>
            <div className="dropdown-content">
              <ul className="continent-list">
                <li className="create-act">Continent</li>
                <select
                  onChange={(e) => handleFilterContinent(e)}
                  className="continent-detail"
                >
                  <option value=""></option>
                  <option value="North America">North America</option>
                  <option value="South America">South America</option>
                  <option value="Asia">Asia</option>
                  <option value="Africa">Africa</option>
                  <option value="Oceania">Oceania</option>
                  <option value="Europe">Europe</option>
                  <option value="Antarctica">Antarctica</option>
                </select>
                <li className="create-act">Turistic Activities per Season</li>

                <select
                  className="secondselect"
                  onChange={(e) => handleFilterBySeason(e)}
                >
                  <option value=""></option>
                  <option value="Winter">Winter</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Autumn">Autumn</option>
                </select>
              </ul>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Order</button>
            <div className="dropdown-content">
              <ul className="continent-list">
                <li className="create-act">Alphabetic</li>
                <select onChange={(e) => handleOrderAlphabetic(e)}>
                  <option></option>
                  <option className="select-continent" value={"A-Z"}>
                    A-Z
                  </option>
                  <option className="select-continent" value={"Z-A"}>
                    Z-A
                  </option>
                </select>
                <li className="create-act">Population</li>
                <select onChange={(e) => handleOrderPopulation(e)}>
                  <option></option>
                  <option value="Descending order"> Descending order </option>
                  <option value="Ascending order"> Ascending order</option>
                </select>
              </ul>
            </div>
          </div>
          <div className="searchnav">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                className="input"
                type="text"
                placeholder="Enter a country "
                onChange={(e) => handleChange(e)}
              ></input>
              <button type="submit" className="search-btn">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
