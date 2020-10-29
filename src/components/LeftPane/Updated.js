import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    margin-top: 20px;
    color: #bdbdbd;
    border: 1px solid #525252;
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
    return (
        <Container>
            <a>Updated</a>
            <h3>{global.updatedAt}</h3>
        </Container>
    );
}

export default Updated