import React from 'react';
import axios from 'axios';
import { List, WhiteSpace } from 'antd-mobile';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Item = List.Item;

const CountryList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://corona-api.com/countries')
            .then(function (response) {
                console.log(response.data.data)
                const result = response.data.data
                const sortedData = result.sort(function (a, b) {
                    return b.latest_data.deaths - a.latest_data.deaths
                })
                setData(sortedData)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <div>
            <div id="unitedstates" className="area" style={{ color: "#4a5568", fontWeight: "bold" }}>
                <div className="areaName" >Country</div>
                <div className="areaTotal">
                    <div className="secondaryInfo">Deaths</div>
                </div>
            </div>
            <div className="country-list2">
                {data.map(country => (
                    <>
                        {/* <List className="my-list">
                            <Link to={`/countries/${country.code}`}><Item extra={<span style={{ color: "#4a5568", fontWeight: "bold" }}>{country.latest_data.confirmed}</span>} ><span style={{ color: "#667eea" }}>{country.name}</span></Item></Link>
                        </List> */}
                        <div id="unitedstates" className="area">
                            <div className="areaName" title={country.name} style={{ color: "#667eea" }}>{country.name}</div>
                            <div className="areaTotal">
                                <div className="secondaryInfo" style={{ color: "#4a5568", fontWeight: "bold" }}>{country.latest_data.confirmed}</div>
                            </div>
                        </div>
                    </>
                ))}
            </div>

        </div>
    );
}

export default CountryList;