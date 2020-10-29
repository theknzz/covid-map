import React from 'react'
import styled from "@emotion/styled";
import GlobalInfo from "./GlobalInfo";
import { connect } from 'react-redux'
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
const RightPane = ({ global, world }) => {
    return (
        <Container>
            <GlobalInfo global={global}/>
            <CountryCases world={world} color={'green'}/>
            {/*<Graph />*/}
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        global: state.info.global,
        world: state.info.world,
    }
}

export default connect(mapStateToProps)(RightPane)