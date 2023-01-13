import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  FILTER_CONTINENT,
  ORDER_ALPHABETIC,
  ORDER_POPULATION,
  ADD_ACTIVITY, 
  GET_COUNTRY_DETAIL_BY_ID
} from "../actions/index";


//INICIALIZACION -- Estado global inicial

const initialState = {
  countries: [],
  allCountries: [],
  countryDetail: {},
  activities: [] 
};

// delete activity  EXTRA

//hace el cambio en el store //EL REDUCER REECIBE EL ESTADO
const rootReducer = (state = initialState, action) => {
  //el reducer hace el cambio en el store, es una funcion: que me esta pidiendo la accion?
 

  switch (action.type) //funcion pura// siempre devuelve un nuevo estado
   {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        allCountries: action.payload
      };
    case GET_COUNTRY_BY_NAME:
         
      return {
        ...state,
        allCountries: action.payload
      };
    
    case FILTER_CONTINENT:
      
      const continentFilter = state.countries.filter((e)=> e.continent === action.payload)
      return {
        ...state,
       allCountries: continentFilter
      }
    case ORDER_ALPHABETIC:

      let sortedCountries = []
      if(action.payload === "Z-A"){
        sortedCountries= [...state.countries.sort((a,b)=>a.name.localeCompare(b.name))]
      } 
      if(action.payload === "A-Z"){
        sortedCountries= [...state.countries.sort((a,b)=> b.name.localeCompare(a.name))]
      }
        return {
          ...state,
        allCountries: sortedCountries,
        }
     case ORDER_POPULATION:
          let sortedPopulation= []
          if(action.payload === "Ascending order"){
            sortedPopulation = [...state.allCountries.sort((a,b)=> a.population - b.population)]
          }
          if(action.payload === "Descending order"){
            sortedPopulation = [...state.allCountries.sort((a,b)=> b.population - a.population)]
          }
            return {
              ...state,
              allCountries: sortedPopulation,
            }
      case ADD_ACTIVITY:
         return {
          ...state,
          activities: state.activities.concat(action.payload)
         }
      case GET_COUNTRY_DETAIL_BY_ID:
          return {
            ...state,
            countryDetail: action.payload
          }
       default: return state
    }
};
export default rootReducer;
