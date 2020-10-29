import {
    GetCountryInfoSuccess,
    GetCountryInfoError,
    GetWorldInfoSuccess,
    GetWorldInfoError,
    GetGlobalInfoSuccess, GetGlobalInfoError
} from "../actionList";
import { parseCountry } from "../../functions/parseCountry";
import moment from "moment";
import {rounded} from "../../functions/round";

export const getMapInfo = (country) => {
    return (dispatch, getState) =>  {
        fetch(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
            .then( res => res.json()
                .then( r => {
                    // parse the api response to store just the used data
                    const parsedCountry = parseCountry(r);
                    dispatch({type: GetCountryInfoSuccess, data: parsedCountry});
                }))
            .catch( err => {
                console.error(err);
                dispatch({type: GetCountryInfoError, data: err});
            })
    }
}

export const getWorldInfo = () => {
    return (dispatch, getState) => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then( res => res.json()
                .then( r =>{
                    const parsedWorld = r.map( country => {
                        return parseCountry(country);
                    });
                    dispatch({ type: GetWorldInfoSuccess, data: parsedWorld})
                }))
            .catch( err => {
                dispatch({ type: GetWorldInfoError, data: err})
            })
    }
}

export const getGlobalInfo = () => {
    return (dispatch, getState) => {
        fetch('https://disease.sh/v3/covid-19/all')
            .then(json => json.json()
                .then( res => {
                    const global =  {
                        updatedAt: moment(res.updated).fromNow(),
                        infected: rounded(res.cases),
                        recovered: rounded(res.recovered),
                        deaths: rounded(res.deaths),
                    }
                    dispatch({ type: GetGlobalInfoSuccess, data: global});
                })
            )
            .catch(err => {
                console.error(err)
                dispatch({type: GetGlobalInfoError, data: err})
            })
    }
}