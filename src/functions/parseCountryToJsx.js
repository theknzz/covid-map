import React from 'react'
import styled from "@emotion/styled";

const Flag = styled.img`
    width: auto;
    height: 50px;
`

export const parseCountryToJsx = (country) => {
    return (
        <div>
            <div><h3>{country.name}</h3><Flag src={country.flag} alt={'country_flag'}/></div><br/>
            <strong>Infected: </strong>{country.infected}<br/>
            <strong>Deaths: </strong>{country.deaths}<br/>
            <strong>Recovered: </strong>{country.recovered}<br/>
            <strong>Tests: </strong>{country.tests}
        </div>

    )
}
