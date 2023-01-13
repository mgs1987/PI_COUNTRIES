import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Home.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//import { Link } from "react-router-dom";
import Pages from "../Pages";

import { getCountries } from "../../Redux/actions/index";

function Home() {
  const dispatch = useDispatch(); //lo necesitamos para despachar actions

  //When an action is dispatched, useSelector() will do a reference comparison of the previous selector result value and the
  // current result value. If they are different, the component will be forced to re-render. If they are the same, the component
  // will not re-render.

  const allCountries = useSelector((state) => state.allCountries); // este hook redux permite extraer data del estado del redux store

  
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(currentPage !== 1? 10:9);
  
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const page = (number) => {
    setCurrentPage(number);
  };

// con este hook le estamos diciendo al componente que tiene q hacer algo dsp de renderizarse react 
//recordara la funcion que le hemos pasado y la llamara luego para actualizar el dom
 
useEffect(() => { //equivale a montaje,actualiz., y desmontaje(ciclo de vida)
    dispatch(getCountries()); //cada vez q nuestro componente se render x cambios del estado o props
  }, [dispatch]);

 
  return (
    <div className="main-container">
      <Header
      setCurrentPage={setCurrentPage} />
      <br></br>
      <br></br>
      {currentCountries &&
        currentCountries.map((pais) => {
          //console.log(pais.id)
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
        countriesPerPage={countriesPerPage}
        page={page}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}

export default Home;

