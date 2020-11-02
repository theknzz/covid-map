import React from 'react'
import Chart from 'chart.js'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import {useTheme} from "emotion-theming";

const Container = styled.div`
    margin-left: 10px;
    border: 1px solid ${props =>props.theme.border};
    margin-top: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    flex: 1;
    overflow: hidden;
    background-color: ${props =>props.theme.boxBackground};
`

const GraphWrapper = styled.div`
     @media screen and (max-height: 768px) {
        > canvas {
            margin: 10px;
        }
        width: 100vw;
        overflow: hidden;
    }
    flex: 4;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    & > canvas {
        width: auto;
        height: auto;
    }
`
const Title = styled.div`
    flex: 1;
    color: ${props =>props.theme.text};
    margin-top: 6px;
    > h5 {
        margin: 10px !important;
    }
`

const GenderGraph = ({ portugal }) => {

    const theme = useTheme();

    const canvas = document.getElementById('genderGraph');
    const context = canvas && canvas.getContext('2d');

    let infectedM = [];
    for (let i in portugal.infected_m) {
        const value = portugal.infected_m[i];
        infectedM.push(value ? value : 0);
    }


    let infectedF = [];
    for (let i in portugal.infected_f) {
        const value = portugal.infected_f[i];
        infectedF.push(value ? value : 0);
    }


    context && new Chart(context, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [
                {
                    label: ["# of Man"],
                    data: [infectedM[infectedM.length-1]],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                },
                {
                        label: ['# of Woman'],
                        data: [infectedF[infectedF.length-1]],
                        backgroundColor: [
                            'rgba(255,0,56,0.6)',
                        ],
                        borderColor: [
                            'rgba(253,0,53)',
                        ],
                        borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    return (
        <Container theme={theme}>
            <Title theme={theme}><h5>Gender Graph - Portugal</h5></Title>
            <GraphWrapper>
                <canvas id={'genderGraph'} width={'auto'} height={'auto'}/>
            </GraphWrapper>
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        portugal: state.info.portugal,
    }
}

export default connect(mapStateToProps)(GenderGraph)