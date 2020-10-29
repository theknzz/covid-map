import {
    GetCountryInfoSuccess,
    GetCountryInfoError,
    GetWorldInfoSuccess,
    GetWorldInfoError,
    GetGlobalInfoSuccess, GetGlobalInfoError
} from "../actionList";

const initialData = {
    country: {},
    world: [{}],
    error: '',
    global: {},
}

export const infoReducer = (state = initialData, action) => {
    switch (action.type) {
        case GetCountryInfoSuccess:
            return {
                ...state,
                country: action.data,
                error: '',
            };
        case GetCountryInfoError:
            return {
                ...state,
                error: action.data,
            };
        case GetWorldInfoSuccess:
            const obj = {
                ...state,
                world: action.data,
                error: '',
            };
            console.log(obj)
            return obj;
        case GetWorldInfoError:
            return {
                ...state,
                error: action.data,
            }
        case GetGlobalInfoSuccess:
            return {
                ...state,
                error: '',
                global: action.data,
            }
        case GetGlobalInfoError:
            return {
                ...state,
                error: action.data,
            }
        default:
            return state;
    }
}