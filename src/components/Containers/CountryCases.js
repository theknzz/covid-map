import React from 'react'
import styled from '@emotion/styled'
import CountryCase from './CountryCase'

const Container = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow-y: auto;
    color: white;
    justify-content: center;
    background-color: #222222;
    margin-top: 10px;
    border: 1px solid #525252;
    > h5 {
        margin: 20px !important;
    }
`

const CountryCases = ({ world, color }) => {

    const countryCases = world.map(country => {
        return <CountryCase color={color} key={country.name} name={country.name} cases={country.infected} />
    })

    return (
        <Container>
            <h5>Cases by Countries</h5>
            {countryCases}
        </Container>
    )
}

export default CountryCases