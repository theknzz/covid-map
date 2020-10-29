import React from 'react'
import styled from "@emotion/styled";

const Row = styled.div`
    display: flex;
    padding: 3px;
    border-bottom: 1px solid #ccc;
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
    color: #bdbdbd;
`

const CountryCase = ({ name, cases, color }) => {
    return (
        <Row>
            <NrCases color={color}>{cases}</NrCases>
            <CountryName>{name}</CountryName>
        </Row>
    );
}

export default CountryCase