import React from 'react'
import styled from '@emotion/styled'
import CountryCase from './CountryCase'
import {useTheme} from "emotion-theming";

const Container = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow-y: auto;
    color: ${props => props.theme.text};
    justify-content: center;
    background-color: ${props => props.theme.boxBackground};
    margin-top: 10px;
    max-height: 60vh;
    border: 1px solid ${props => props.theme.border};
    > h5 {
        margin: 20px !important;
    }
    @media screen and (max-height: 768px) {
        > h5 {
        }
    }
`

const CountryCases = ({ world, color, append }) => {
    const theme = useTheme();

    const countryCases = world.map(country => {
        return <CountryCase color={color} key={country.name} name={country.name} cases={country.infected} />
    })

    return (
        <Container theme={theme}>
            <h5>Cases {append} by Countries</h5>
            {countryCases}
        </Container>
    )
}

export default CountryCases