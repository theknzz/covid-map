import moment from "moment";
import { rounded } from "./round";

export const parseCountry = jsonObject => {
    return {
        updatedAt: moment(jsonObject.updated).fromNow(),
        name: jsonObject.country,
        flag: jsonObject.countryInfo.flag,
        infected: rounded(jsonObject.cases),
        deaths: rounded(jsonObject.deaths),
        recovered: rounded(jsonObject.recovered),
        tests: rounded(jsonObject.tests),
    }
}