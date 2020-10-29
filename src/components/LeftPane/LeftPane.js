import React from 'react'
import styled from "@emotion/styled";
import { connect } from 'react-redux'
import GlobalCases from "./GlobalCases";
import CountryCases from "../Containers/CountryCases";

const Container = styled.div`
    flex: 0.7;
    background-color: #363636;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-height: 85vh;
    border: 1px solid #525252;
    margin: 5px;
`

const LeftPane = ({ global, world }) => {
    console.log(global)
    return (
        <Container>
            <GlobalCases nr={global.infected} />
            <CountryCases world={world} color={'red'}/>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        global: state.info.global,
        world: state.info.world,
    }
}

export default connect(mapStateToProps)(LeftPane)