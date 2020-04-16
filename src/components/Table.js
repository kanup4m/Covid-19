import React from 'react';
import axios from 'axios';
import { List, WhiteSpace } from 'antd-mobile';

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Item = List.Item;

const Table = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://corona-api.com/countries')
            .then(function (response) {
                console.log(response.data.data)
                setData(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <div>
            <List className="my-list" style={{ color: "#4a5568", fontWeight: "bold" }}>
                <Item extra={'Confirmed'}>Country</Item>
            </List>
            <div className="country-list">
                {data.map(country => (
                    <>
                        <List className="my-list">
                            <Link to={`/countries/${country.code}`}><Item extra={<span style={{ color: "#4a5568", fontWeight: "bold" }}>{country.latest_data.confirmed}</span>} ><span style={{ color: "#667eea" }}>{country.name}</span></Item></Link>
                        </List>
                        <WhiteSpace size="lg" />
                    </>
                ))}
            </div>

        </div>
    );
}

export default Table;