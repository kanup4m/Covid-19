import React, { useEffect, useState } from 'react';
import TextLoop from 'react-text-loop';
import Layout from '../components/Layout';
import styled from 'styled-components'
import axios from 'axios'
import Active from '../images/active.js'
import Confirmed from '../images/confirmed.js'
import Critical from '../images/critical.js'
import Deaths from '../images/deaths.js'
import ReactTooltip from "react-tooltip";
import Recovered from '../images/recovered.js'
import Map from '../components/Map'
import Table from '../components/Table';
import { Card, WingBlank, WhiteSpace, NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'
import Loader from '../components/PreLoader'
const Home = () => {
    const [death, setDeath] = useState(0)
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [active, setActive] = useState(0)
    const [newDeath, setNewDeath] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('https://corona-api.com/timeline')
            .then(function (response) {
                const data = response.data.data;
                console.log(data[0])
                setActive(data[0].active)
                setDeath(data[0].deaths)
                setConfirmed(data[0].confirmed)
                setRecovered(data[0].recovered)
                setNewDeath(data[0].new_deaths)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            });

    })
    return (
        <div>
            <NavBar
                mode="light"
               

            >COVID-19 Tracker</NavBar>
            <WingBlank size="lg">
                <WhiteSpace size="lg" />
                {loading === true ? <Loader /> : <div>
                    <div className="card-active">
                        <Active />
                        <div> Active <br /> <div style={{ color: "white", fontSize: "30px" }}>{active}</div></div>
                    </div>
                    <WhiteSpace size="lg" />

                    <div className="card-confirm">
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
                        <div>New Deaths <br /> <div style={{ color: "white", fontSize: "30px" }}>{newDeath}</div></div>
                    </div>
                    <WhiteSpace size="lg" />

                    <div className="card-death">
                        <Deaths />
                        <div>Deaths <br /> <div style={{ color: "white", fontSize: "30px" }}>{death}</div></div>
                    </div>
                    <WhiteSpace size="lg" />
                    <Table />
                </div>}
            </WingBlank>
        </div>
    );
}

export default Home;