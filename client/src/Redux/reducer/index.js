import {
  GET_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  FILTER_CONTINENT,
  ORDER_ALPHABETIC,
  ORDER_POPULATION,
  ADD_ACTIVITY, 
  GET_COUNTRY_DETAIL_BY_ID,
  GET_ACTIVITIES,
  FILTER_ACTIVITIES_BY_SEASON,
  GET_ACTIVITIES_FILTERED,
 
} from "../actions/index";


//INICIALIZACION -- Estado global inicial

const initialState = {
  countries:[],
  allCountries: [],
  countryDetail: {},
  activities: [], 
  activitiesFiltered:[]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
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
       case GET_ACTIVITIES:
        
        return {
          ...state,
          activities: action.payload
        }
      case FILTER_ACTIVITIES_BY_SEASON:
         const actFilt= state.activities.filter((e)=>e.season === action.payload )
        return {
          ...state,
          activities: actFilt
        }
      case GET_ACTIVITIES_FILTERED:
        
        console.log("ACA ESTA LA CACA", action.payload)
        console.log("la estrella", state.activities)

      const filtAct= state.activities.filter(e=>e.countries.includes(action.payload))
      console.log("aca esta the reañ caca ", filtAct)
      //   // const filteredAct= action.payload === "All" ? state.countries :
      //   // caca.filter((e)=>e.activities.map(el => el.countries.includes(action.payload)))

      //     //const filt= state.activities.map((e)=> e.name).includes(action.payload)
      //     //const actFiltered= state.activities.filter(e=> e.countries).includes(action.payload)
          return {
            ...state,
             activitiesFiltered: filtAct
          }
    
       default: return state;
    }
};

export default rootReducer;
