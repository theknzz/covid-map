import React from 'react'
import styled from "@emotion/styled";
import Chart from 'chart.js'
import { connect } from 'react-redux'
import {useTheme} from "emotion-theming";

const Container = styled.div`
    flex: 2;
    border: 1px solid ${props =>props.theme.border};
    margin-top: 10px;
    background-color: ${props =>props.theme.boxBackground};
    @media screen and (max-height: 768px) {
        > canvas {
            max-width: 100%;
            flex: 1;
        }
    }
`

const PortugalGraph = ({ portugal }) => {
    // parse json object into array of tracked days
    let trackedDays = [];
    for (let i in portugal.days)
        trackedDays.push(portugal.days[i])

    // parse json object into array of infected
    let nrInfected = [];
    for (let i in portugal.infected) {
        nrInfected.push(portugal.infected[i])
    }

    // parse json object into array of recovered
    let nrRecovered = [];
    for (let i in portugal.recovered) {
        nrRecovered.push(portugal.recovered[i])
    }

    const element = document.getElementById('myChart');
    const context = element && element.getContext('2d');

    context && new Chart(context, {
        type: 'line',
        data: {
            labels: trackedDays,
            datasets: [
                {
                    label: '# of infected',
                    data: nrInfected,
                    backgroundColor: [
                        'rgba(255,25,25, 0.2)',
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of recovered',
                    data: nrRecovered,
                    backgroundColor: [
                        'rgba(152,253,149, 0.6)',
                    ],
                    borderWidth: 1
                }
                ]
        },
        options: {
            title: {
                display: true,
                text: 'Portugal track',
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    const theme = useTheme();

    return (
        <Container theme={theme}>
            <canvas id={'myChart'} width={660}/>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        portugal: state.info.portugal,
    }
}

export default connect(mapStateToProps)(PortugalGraph)