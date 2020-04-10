
import React, { useState, useEffect } from "react"
import { geoEqualEarth, geoPath } from "d3-geo"
import { feature } from "topojson-client"
import axios from 'axios'


const projection = geoEqualEarth()
    .scale(160)
    .translate([800 / 2, 450 / 2])

const WorldMap = (props) => {
    const [geographies, setGeographies] = useState([])
    const [citiesData, setcities] = useState([])

    useEffect(() => {
        fetch("/abc.json")
            .then(response => {
                if (response.status !== 200) {
                    console.log(`There was a problem: ${response.status}`)
                    return
                }
                response.json().then(worlddata => {
                    setGeographies(feature(worlddata, worlddata.objects.countries).features)
                })
            })
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
    }, [citiesData])


    const handleCountryClick = countryIndex => {
        console.log("Clicked on country: ", geographies[countryIndex])
    }

    const handleMarkerClick = i => {
        console.log("Marker: ", citiesData[i])
    }

    return (
        <div>
            {/* "latest_data": {
                "deaths": 14,
            "confirmed": 444,
            "recovered": 29,
            "critical": 0,
            "calculated": {
                "death_rate": 3.153153153153153,
                "recovery_rate": 6.531531531531531,
                "recovered_vs_death_ratio": null,
                " */}

            <svg width={800} height={450} viewBox="0 0 800 450">
                <g className="countries">
                    {
                        geographies.map((d, i) => (
                            <path
                                key={`path-${i}`}
                                d={geoPath().projection(projection)(d)}
                                className="country"
                                fill={`rgba(38,50,56,${1 / geographies.length * i})`}
                                stroke="#FFFFFF"
                                strokeWidth={0.5}
                                onClick={() => handleCountryClick(i)}
                            />
                        ))
                    }
                </g>
                <g className="markers">
                    {
                        citiesData.map((city, i) => (
                            <circle
                                key={`marker-${i}`}
                                cx={projection(city.coordinates)[0]}
                                cy={projection(city.coordinates)[1]}
                                r={city.latest_data.calculated.death_rate}
                                fill="#f80759"
                                stroke="#ff9068"
                                className="marker"
                                onClick={() => handleMarkerClick(i)}
                            />
                            // <circle
                            //     key={`marker-${i}`}
                            //     cx={projection(city.coordinates.longitude)}
                            //     cy={projection(city.coordinates.latitude)}
                            //     r={city.population / 3000000}
                            //     fill="#E91E63"
                            //     stroke="#FFFFFF"
                            //     className="marker"
                            //     onClick={() => handleMarkerClick(i)}
                            // />
                        ))
                    }
                </g>
            </svg>


        </div>

    )
}

export default WorldMap