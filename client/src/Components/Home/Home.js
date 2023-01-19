import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Pages from "../../Pages/Pages.js";

import { getCountries, getActivities } from "../../Redux/actions/index";

function Home() {
  const dispatch = useDispatch();

  const allCountries = useSelector((state) => state.allCountries);

  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(9);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );
  
  const page = (number) => {
    setCurrentPage(number);
    if (number === 1) {
      setCountriesPerPage(9);
    } else {
      setCountriesPerPage(10);
    }
  };

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  return (
    <div className="main-container">
      <Header setCurrentPage={setCurrentPage} />
      <br></br>
      <br></br>
      {currentCountries &&
        currentCountries.map((pais) => {
          return (
            <Card
              id={pais.id}
              name={pais.name}
              continent={pais.continent}
              flag_image={pais.flag_image}
            />
          );
        })}
      <Pages
        allCountries={allCountries.length}
        page={page}
        setCountriesPerPage={setCountriesPerPage}
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
}

export default Home;
