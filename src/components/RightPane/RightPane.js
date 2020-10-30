import React from 'react'
import styled from "@emotion/styled";
import GlobalInfo from "./GlobalInfo";
import { connect } from 'react-redux'
import CountryCases from "../Containers/CountryCases";
import PortugalGraph from "./PortugalGraph";
import GenderGraph from "./GenderGraph";
import {useTheme} from "emotion-theming";

const Container = styled.div`
    flex: 1;
    background-color: ${props => props.theme.background};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 10px;
    max-height: 85vh;
    border: 1px solid ${props => props.theme.border};
    margin: 5px;
    @media screen and (max-width: 758px) {
        max-height: auto;
        margin: 5px;
        max-height: none;
        overflow: hidden;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: auto;
    @media (max-width: 758px) {
        flex-flow: column nowrap;
        justify-content: center;
        flex: 1;
        width: 100%;
        align-items: center;
        overflow: hidden;
    }
`

const RightPane = ({ global, world }) => {
    const theme = useTheme();
    return (
        <Container theme={theme}>
            <GlobalInfo global={global}/>
            <Wrapper>
                <CountryCases append={'recovered'} world={world} color={'green'} />
                <GenderGraph />
            </Wrapper>
            <PortugalGraph />
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