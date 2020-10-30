import React from 'react'
import styled from "@emotion/styled";
import {useTheme} from "emotion-theming";

const Row = styled.div`
    display: flex;
    padding: 3px;
    border-bottom: 1px solid ${props => props.theme.border};
    width: 100%;
`

const NrCases = styled.div`
    flex: 1;
    font-weight: bold;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.color === 'red' ? 'red' : 'green'};
`

const CountryName = styled.div`
    flex: 2;
    color: ${props => props.theme.text};
`

const CountryCase = ({ name, cases, color }) => {
    const theme = useTheme();
    return (
        <Row theme={theme}>
            <NrCases color={color}>{cases}</NrCases>
            <CountryName theme={theme}>{name}</CountryName>
        </Row>
    );
}

export default CountryCase