import React, { memo, useEffect } from "react";
import { connect } from 'react-redux'
import { getGlobalInfo, getMapInfo, getWorldInfo, portugalInfo } from "../../store/actions/infoActions";
import styled from "@emotion/styled";
import { parseCountryToJsx } from "../../functions/parseCountryToJsx";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import {useTheme} from "emotion-theming";


const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapContainer = styled.div`
    max-height: 87.2vh;
    flex: 2;
    display: flex;
    justify-content: center;
    min-width: 30vw;
    flex-flow: column wrap;
    border: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.mapBackground};
    margin: 5px;
`

const MapChart = ({ setTooltipContent, getInfo, country, getWorld, getGlobal, getPortugal, portugal }) => {

    const theme = useTheme();

    useEffect( () => {
        getWorld();
        getGlobal();
        getPortugal();
    }, [ ]);

    return (
        <MapContainer theme={theme}>
            <ComposableMap className={'map'} data-tip="" projectionConfig={{ scale: 50 }} width={500} height={500}>
                <ZoomableGroup center={[20, 180]} zoom={4}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => {
                                        setTooltipContent(parseCountryToJsx(country));
                                    }}
                                    onMouseEnter={() => {
                                        const { NAME, POP_EST } = geo.properties;
                                        getInfo(NAME);
                                        setTooltipContent(`${NAME}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: theme.mapFill,
                                            outline: "none",
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </MapContainer>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo: (country) => dispatch(getMapInfo(country)),
        getWorld: () => dispatch(getWorldInfo()),
        getGlobal: () => dispatch(getGlobalInfo()),
        getPortugal: () => dispatch(portugalInfo())
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.info.country,
        portugal: state.info.portugal,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(memo(MapChart));
