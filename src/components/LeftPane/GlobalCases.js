import React from 'react'
import styled from "@emotion/styled";
import {useTheme} from "emotion-theming";

const Container = styled.div`
    background-color: ${props =>props.theme.boxBackground};
    color: ${props =>props.theme.text};
    width: 100%;
    padding: 20px 0px;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    border: 1px solid ${props =>props.theme.border};
    > h1 {
        color: red;
        margin: 10px !important;
    }
`

const GlobalCases = ({ nr }) => {
    const theme = useTheme();
    return (
        <Container theme={theme}>Global Cases: <h1>{nr}</h1></Container>
    )
}

export default GlobalCases