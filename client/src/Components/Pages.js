import React from "react";

export default function pages({countriesPerPage, allCountries, page}){
   const pageNumbers =[];

   for(let i =1; i<= Math.ceil(allCountries/countriesPerPage); i++){
    pageNumbers.push(i)
   }

   return (
    <div>
        <ul>
            {pageNumbers.map((number)=> {
                return <button onClick={()=> page(number)}>{number}</button>
            })}
        </ul>
    </div>
   )
}