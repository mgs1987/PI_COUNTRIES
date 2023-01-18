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

function Header({ setCurrentPage }) {
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("");

  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setCurrentPage(1);
    dispatch(getCountryByName(search));
  }
  function handleFilterContinent(e) {
    e.preventDefault();
    setSelect(e.target.value);
    dispatch(filterByContinent(e.target.value));
  }

  function handleOrderAlphabetic(e) {
    e.preventDefault();
    setOrder(e.target.value);
    dispatch(orderAlphabetic(order));
  }

  function handleOrderPopulation(e) {
    e.preventDefault();
    dispatch(orderPopulation(e.target.value));
  }

  function handleReset(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterBySeason(e) {
    dispatch(filterBySeason(e.target.value));
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
            {" "}
            Reset Filters / Orders
          </button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Filter</button>
          <div className="dropdown-content">
            <ul className="continent-list">
              <li className="create-act">
                  Continent
                </li>
              <select
                onChange={(e) => handleFilterContinent(e)}
                className="continent-detail"
              >
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Europe">Europe</option>
                <option value="Antarctica">Antarctica</option>
              </select>
              <li className="create-act">
                  Turistic Activities per Countries
              </li>
              
              <select className="secondselect"onChange={(e) => handleFilterBySeason(e)}>
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
                <option className="select-continent">A-Z</option>
                <option className="select-continent">Z-A</option>
              </select>
              <li className="create-act">Population</li>
              <select onChange={(e) => handleOrderPopulation(e)}>
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
              placeholder="Write a country name"
              onChange={(e) => handleChange(e)}
            ></input>
            <button type="submit" className="search-btn">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
