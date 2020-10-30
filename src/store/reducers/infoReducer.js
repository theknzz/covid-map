import {
    GetCountryInfoSuccess,
    GetCountryInfoError,
    GetWorldInfoSuccess,
    GetWorldInfoError,
    GetGlobalInfoSuccess,
    GetGlobalInfoError,
    GetPortugalInfoSuccess,
    PortugalServerDown,
} from "../actionList";

const initialData = {
    country: {},
    world: [{}],
    error: '',
    global: {},
    portugal: {},
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
            return {
                ...state,
                world: action.data,
                error: '',
            };
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
        case GetPortugalInfoSuccess:
            return {
                ...state,
                portugal: action.data,
                error: '',
            }
        case PortugalServerDown:
            return {
                ...state,
                error: 'Portugal server is longer active',
            }
        default:
            return state;
    }
}