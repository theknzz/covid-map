import React from 'react'
import styled from '@emotion/styled'
import {useTheme} from "emotion-theming";

const Container = styled.div`
    background-color: ${props =>props.theme.boxBackground};
    color: ${props =>props.theme.text};
    width: 100%;
    padding: 30px 0px;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    border: 1px solid ${props =>props.theme.border};
    > h1 {
        color: green;
        margin: 10px !important;
    }
`

const GlobalInfo = ({ global }) => {
    const theme = useTheme();
    return (
        <Container theme={theme}>
            Global Info
            <h1>{global.recovered}</h1>
        </Container>
    )
}

export default GlobalInfo