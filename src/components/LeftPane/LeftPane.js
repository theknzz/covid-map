import React from 'react'
import styled from "@emotion/styled";
import { connect } from 'react-redux'
import GlobalCases from "./GlobalCases";
import CountryCases from "../Containers/CountryCases";
import Updated from "./Updated";
import {useTheme} from "emotion-theming";

const Container = styled.div`
    flex: 0.7;
    background-color: ${props => props.theme.background};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-height: 85vh;
    border: 1px solid ${props => props.theme.border};
    margin: 5px;
    @media screen and (max-height: 768px) {
        max-height: none;
    }
`

const LeftPane = ({ global, world }) => {

    const theme = useTheme();

    return (
        <Container theme={theme}>
            <GlobalCases nr={global.infected} />
            <CountryCases append={''} world={world} color={'red'}/>
            <Updated global={global}/>
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