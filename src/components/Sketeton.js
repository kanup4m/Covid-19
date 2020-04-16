import React from 'react';
import { useEffect, useState } from 'react';
import { Card, WingBlank, WhiteSpace, NavBar, Icon } from 'antd-mobile';
import Active from '../images/active'
import Confirmed from '../images/confirmed.js'
import Critical from '../images/critical.js'
import Deaths from '../images/deaths.js'
import Recovered from '../images/recovered.js'
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './styles.module.css'
import axios from 'axios';
import Chart from './Chart';
import Loader from './PreLoader'
import { Link } from 'react-router-dom'
const Country = () => {
    const [death, setDeath] = useState(0)
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [critical, setCritical] = useState(0)
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [loader, setLoader] = useState(true)
    const url = window.location.pathname;
    const m = /[^/]*$/.exec(url)[0];

    useEffect(() => {
        axios.get(`https://corona-api.com/countries/${m}`)
            .then(function (response) {
                const data = response.data.data;
                console.log(data)
                setData(data.timeline)
                setName(data.name)
                setDeath(data.latest_data.deaths)
                setConfirmed(data.latest_data.confirmed)
                setRecovered(data.latest_data.recovered)
                setCritical(data.latest_data.critical)
                console.log(m)
                setLoader(false)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return (
        <div>
            <NavBar
                mode="light"
                leftContent={<Link to="/">Back</Link>}

            >COVID-19 Tracker</NavBar>
            {loader === true ? <Loader /> : <div>
                <WingBlank size="lg">
                    <h1 style={{ textAlign: "center", marginBottom: 0 }}>{name}</h1>

                    <div style={{ padding: "30px" }}>

                        <div className="card-confirm" >
                            <Confirmed />
                            <div>Confirmed <br /> <div style={{ color: "white", fontSize: "30px" }}>{confirmed}</div></div>
                        </div>
                        <WhiteSpace size="lg" />

                        <div className="card-recover">
                            <Recovered />
                            <div>Recovered <br /> <div style={{ color: "white", fontSize: "30px" }}>{recovered}</div></div>
                        </div>
                        <WhiteSpace size="lg" />

                        <div className="card-critical">
                            <Critical />
                            <div>New Deaths <br /> <div style={{ color: "white", fontSize: "30px" }}>{critical}</div></div>
                        </div>
                        <WhiteSpace size="lg" />

                        <div className="card-death">
                            <Deaths />
                            <div>Deaths <br /> <div style={{ color: "white", fontSize: "30px" }}>{death}</div></div>
                        </div>
                    </div>

                    <WhiteSpace size="lg" />

                </WingBlank>
                <div style={{
                    paddingBottom: '56.25%', /* 16:9 */
                    position: 'relative',
                    height: 0
                }} >
                    <div style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%'
                    }}>
                        <ResponsiveContainer>
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10, right: 30, left: 0, bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="confirmed" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="recovered" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                                <Area type="monotone" dataKey="deaths" stackId="1" stroke="#ffc658" fill="#ffc658" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Country;