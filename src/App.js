import MapChart from "./components/Map/MapChart";
import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import styled from "@emotion/styled";
import LeftPane from "./components/LeftPane/LeftPane";
import RightPane from "./components/RightPane/RightPane";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: 0px 30px;
`

const Title = styled.h1`
    max-height: 10vh;
    color: white;
    display: flex;
    justify-content: center;
`


function App() {
    const [content, setContent] = useState('');
    return (
        <>
            <Title>Covid Dashboard</Title>
            <Container>
                <LeftPane />
                <MapChart setTooltipContent={setContent}/>
                <RightPane />
            </Container>
            <ReactTooltip>{content}</ReactTooltip>
        </>
  );
}

export default App;
