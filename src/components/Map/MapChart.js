import React, { memo, useEffect } from "react";
import { rounded } from '../../functions/round'
import { connect } from 'react-redux'
import {getGlobalInfo, getMapInfo, getWorldInfo} from "../../store/actions/infoActions";
import styled from "@emotion/styled";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";


const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapContainer = styled.div`
    max-height: 87.2vh;
    flex: 2;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    border: 1px solid #525252;
    background-color: #010f1a;
    margin: 5px;
`

const MapChart = ({ setTooltipContent, getInfo, country, getWorld, getGlobal }) => {

    useEffect( () => {
        getWorld();
        getGlobal();
    }, []);

    console.log('country: ', country);
    return (
        <MapContainer>
            <ComposableMap className={'map'} data-tip="" projectionConfig={{ scale: 50 }} width={500} height={500}>
                <ZoomableGroup center={[20, 195]} zoom={2.6}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onClick={() => {
                                        const { NAME } = geo.properties;
                                        // getNumberOfInfected(NAME);
                                        getInfo(NAME);
                                    }}
                                    onMouseEnter={() => {
                                        const { NAME, POP_EST } = geo.properties;
                                        setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: "#2a2a28",
                                            outline: "none"
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
    }
}

const mapStateToProps = (state) => {
    return {
        country: state.info.country,
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(memo(MapChart));
