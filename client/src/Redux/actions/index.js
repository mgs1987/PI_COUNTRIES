import axios from "axios";

export const GET_COUNTRY_BY_NAME= "GET_COUNTRY_BY_NAME";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const FILTER_CONTINENT ="FILTER_CONTINENT";
export const ORDER_ALPHABETIC= "ORDER_ALPHABETIC";
export const ORDER_POPULATION= "ORDER_POPULATION";
export const ADD_ACTIVITY ="ADD_ACTIVITY";
export const GET_COUNTRY_DETAIL_BY_ID="GET_COUNTRY_DETAIL_BY_ID";
export const GET_ACTIVITIES="GET_ACTIVITIES";
export const FILTER_ACTIVITIES_BY_SEASON="FILTER_ACTIVITIES_BY_SEASON";
export const GET_ACTIVITIES_FILTERED= "GET_ACTIVITIES_FILTERED"


//aca conectamos el back con el front
//ACTIONS SON OBJETOS

export function getCountries(){
    return async function (dispatch){
        let response = await axios.get("http://localhost:3001/countries")
        //console.log(response.data)
        return dispatch ({
            type: GET_COUNTRIES, 
            payload: response.data
        });
    };
};


export function getCountryByName(name){
    return async function(dispatch){
     try {
        const nombre= await axios.get(`http://localhost:3001/countries?name=${name}`)
        //console.log(nombre)
        if(nombre.status === 200 || nombre.status === 304){
          return dispatch({type: GET_COUNTRY_BY_NAME, payload: nombre.data})
        }
       
     } catch (err){
        alert("Country not found")
     }
    }
};

export function getCountryDetailById(id){
   return async function(dispatch){
    return await axios.get(`http://localhost:3001/countries/${id}`)
        .then((resp)=> resp.data)
        .then((resp)=> {
          dispatch({ type: GET_COUNTRY_DETAIL_BY_ID, payload: resp})
        })
        .catch((err)=> 
           console.log(err))   
   };
};

export function filterByContinent(payload){
   return async function(dispatch) {
    try{
        dispatch({type: FILTER_CONTINENT, payload})
    } catch (err){console.log(err)
    }}
};

export function orderAlphabetic(payload){
    return async function(dispatch){
        try {
            dispatch({type: ORDER_ALPHABETIC, payload})
        }catch(err){
            console.log(err)}
    }
}

export function orderPopulation(payload){
    return async function(dispatch){
        try{
            dispatch({type: ORDER_POPULATION, payload})
        } catch(err){
            console.log(err)}
    }
}

export function addActivity(data){
    return async function(dispatch){
      return axios.post("http://localhost:3001/activities", data)
        .then(response => response.data)
        .then(response => {
            dispatch({type: ADD_ACTIVITY, payload: response})
            alert("Activity created")
        })
        .catch(err => {
            console.log(err)
            alert("Sorry, we could not create any activity", "Error" + err)
        })
    } 
    }

export function getActivities(){
    return async function(dispatch){
        return axios.get("http://localhost:3001/activities")
        .then((resp)=> resp.data)
        .then((resp)=>
        dispatch({type: GET_ACTIVITIES,
                 payload: resp}))     
 }
}

export function filterActivitiesBySeason(payload){
    return async function(dispatch){
        try {
            dispatch({type: FILTER_ACTIVITIES_BY_SEASON, payload})
        } catch (err){
            console.log(err)
        }
    }
}

export function getActivitiesFiltered(payload){
    return async function(dispatch){
console.log("mi sueno", payload)
        try {
            dispatch({type:GET_ACTIVITIES_FILTERED,payload})
        }catch(err){ console.log(err)}
    }
}

