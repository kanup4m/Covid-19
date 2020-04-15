import React, { useState, useEffect } from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from "react-simple-maps";
import { Tooltip } from 'antd';

import axios from 'axios'
import Sidebar from './Sidebar';
import Chart from './Chart';
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
const SimpleMap = ({ setTooltipContent }) => {
    const [citiesData, setcities] = useState([])
    const [ac, setAc] = useState('India')
    const [death, setDeath] = useState(288)
    const [recover, setRecover] = useState(831)
    const [confirmed, setConfirmed] = useState(8656)
    useEffect(() => {
        axios.get('https://corona-api.com/countries')
            .then(function (response) {
                const country = (response.data.data)
                const cities = country.map(
                    ({
                        coordinates: {
                            longitude,
                            latitude
                        }, ...place }) => ({
                            ...place,
                            coordinates: [longitude, latitude]
                        }))
                setcities(cities)
                // console.log(citiesData)
                // console.log(cities)


            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    const handleMarkerClick = (name, coordinates, latest_data) => {
        console.log("Marker: ", name + "  " + "Coordinates ", coordinates)
        setAc(name)
        setDeath(coordinates.deaths)
        setRecover(coordinates.recovered)
        setConfirmed(coordinates.confirmed)
    }

    return (
        <div>
            <div className="overview">
                {/* <Chart />  */}
                <Sidebar name={ac} death={death} recover={recover} confirmed={confirmed} />

            </div>
            <ComposableMap>
                <ZoomableGroup zoom={2}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#EAEAEC"
                                    stroke="#D6D6DA"
                                />
                            ))
                        }
                    </Geographies>
                    {citiesData.map(({ name, coordinates, latest_data }) => (
                        <Marker key={name} coordinates={coordinates}
                        >
                            <circle r={latest_data.calculated.death_rate} fill="#B33771" stroke="#fff" onMouseEnter={() => handleMarkerClick(name, latest_data, coordinates)} />
                        </Marker>
                    ))}
                </ZoomableGroup>

            </ComposableMap>
        </div>
    );
}

export default SimpleMap;