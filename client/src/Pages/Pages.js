import React from "react";
import "../Pages/Pages.css";

export default function pages({
  setCountriesPerPage,
  countriesPerPage,
  setCurrentPage,
  currentPage,
  page
}) {

  function handlePrev() {
    setCurrentPage((x) => x - 1);
    if (currentPage === 1) {  
      setCountriesPerPage(9)
      setCurrentPage(1)
      return;
    }
   
  };

  function handleNext() {
    setCurrentPage((x) => x + 1);
    if(currentPage > 0){
      setCountriesPerPage(10);
    }
    if(currentPage === 26){ 
      setCurrentPage(25)
      return; 
    }
    

  };
 
  let pages = [1,2,3,4,5]

  return (
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button className="btn" onClick={() => handlePrev()}>
        Prev
      </button>
      {pages.map((number)=>{
        return <button className="btn"onClick={()=>page(number)}>{number}</button>
      })}
      <button className="btn" onClick={() => handleNext()}>
        Next
      </button>
    </div>
  );
}
