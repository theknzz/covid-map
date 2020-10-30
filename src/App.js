import MapChart from "./components/Map/MapChart";
import React, { useState } from "react";
import ReactTooltip from 'react-tooltip';
import styled from "@emotion/styled";
import LeftPane from "./components/LeftPane/LeftPane";
import RightPane from "./components/RightPane/RightPane";
import { ThemeProvider } from 'emotion-theming'
import { darkTheme, lightTheme } from "./components/Theme/Theme";
import { useTheme } from 'emotion-theming'

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: 0px 30px;
    @media screen and (max-width: 758px) {
        display: flex;
        width: 100%;
        flex-flow: column nowrap;
        margin: 0px;
    }
`

const Title = styled.h1`
    max-height: 10vh;
    color: ${props => props.isDark ? 'white' : 'black'};
    display: flex;
    justify-content: center;
    flex: 1;
    > img {
        width: 50px;
        height: 50px;
    }
    @media screen and (max-width: 758px) {
        font-size: 1.5em;
        > img {
            width: 35px;
            height: 35px;
        }    
    }
`

const Body = styled.div`
    display: flex;
    flex-flow: column nowrap;
    min-height: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.isDark ? 'black' : '#ffffff'};
    font-family: 'Montserrat', sans-serif;
`

const Header = styled.div`
    display: flex;
    > button {
        border: none;
        background-color: ${props => props.isDark ? 'black' : '#ffffff'};
        color: ${props => props.isDark ? 'white' : 'black'};
        font-size: 2em;
        &: focus {
            outline: none;
        }
    }
`


function App() {

    const [isDark, setTheme] = useState(true);
    const [content, setContent] = useState('');
    const sun = '🔆';
    const moon = '🌕';

    const theme = useTheme();

    const handleClick = e => {
        setTheme(!isDark);
    }

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <Body isDark={isDark}>
                <Header isDark={isDark}>
                    <Title isDark={isDark}>
                        C<img src={'https://freesvg.org/img/Virus.png'} alt={'o'}/>
                        vid Dashboard
                    </Title>
                    <button onClick={handleClick}>{isDark ? moon : sun}</button>
                </Header>
                <Container theme={theme}>
                    <LeftPane />
                    <MapChart setTooltipContent={setContent} />
                    <RightPane />
                </Container>
                <ReactTooltip>{content}</ReactTooltip>
            </Body>
        </ThemeProvider>
  );
}

export default App;
