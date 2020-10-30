import React from 'react'
import styled from '@emotion/styled'
import {useTheme} from "emotion-theming";

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin-top: 20px;
    background-color: ${props =>props.theme.boxBackground};
    color: ${props =>props.theme.text};
    border: 1px solid ${props =>props.theme.border};
    width: 100%;
    padding: 10px 0px;
    & > h3 {
        margin: 5px !important; 
    }
    
    & > a {
        font-size: 15px;
    }
`

const Updated = ({ global }) => {
    const theme = useTheme();
    return (
        <Container theme={theme}>
            <a>Updated</a>
            <h3>{global.updatedAt}</h3>
        </Container>
    );
}

export default Updated