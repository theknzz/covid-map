import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    background-color: #222222;
    color: #bdbdbd;
    width: 100%;
    padding: 30px 0px;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    border: 1px solid #525252;
    > h1 {
        color: green;
        margin: 10px !important;
    }
`

const GlobalInfo = ({ global }) => {
    return (
        <Container>
            Global Info
            <h1>{global.recovered}</h1>
        </Container>
    )
}

export default GlobalInfo