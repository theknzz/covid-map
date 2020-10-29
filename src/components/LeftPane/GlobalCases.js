import React from 'react'
import styled from "@emotion/styled";

const Container = styled.div`
    background-color: #222222;
    color: white;
    width: 100%;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    border: 1px solid #525252;
    > h1 {
        color: red;
        margin: 10px !important;
    }
`

const GlobalCases = ({ nr }) => {
    return (
        <Container>Global Cases: <h1>{nr}</h1></Container>
    )
}

export default GlobalCases