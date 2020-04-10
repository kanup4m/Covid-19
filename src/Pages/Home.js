import React, { useEffect, useState } from 'react';
import TextLoop from 'react-text-loop';
import Layout from '../components/Layout';
import { Card } from 'antd';
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
import Chart from '../components/Chart';
const MainDiv = styled.div`
    text-align:center;
    background-color:#4a5568;
    color:white;
    padding:1px;
`
const Home = () => {
    const [death, setDeath] = useState(0)
    const [confirmed, setConfirmed] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [active, setActive] = useState(0)
    const [newDeath, setNewDeath] = useState(0)


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
            })
            .catch(function (error) {
                console.log(error);
            });

    })
    return (
        <div>
            <div>
                <Layout>
                    <div className="div2">
                        <TextLoop mask>
                            <div>Don't hoard groceries and essentials. Please ensure that people who are in need don't face a shortage because of you!  </div>
                            <div>Be compassionate! Help those in need like the elderly and poor. They are facing a crisis which we can't even imagine!
</div>
                            <div>Lockdown means LOCKDOWN! Avoid going out unless absolutely necessary. Stay safe!
</div>
                            <div>Stay Home Stay Healthy</div>
                        </TextLoop>
                    </div>


                    <h1 style={{ textAlign: "center" }}>COVID-19 TRACKER</h1>
                    {/* <div className="div-group">
                    <h2 className="confirmed">Confirmed <br /><br /> 100</h2>
                    <h2 className="active">Active <br /> <br />100</h2>
                    <h2 className="recovered">Recovered <br /><br /> 100</h2>
                    <h2 className="deceased">Deceased <br /> <br />100</h2>
                </div> */}
                    <div style={{ paddingLeft: "15%", paddingRight: "15%" }}>
                        <MainDiv><br />Confirmed countries in total <br /> <h1 style={{ color: "white" }}>183 <small>(93.85)</small> / 195</h1></MainDiv>
                        <div className="list-grid">
                            <Card style={{ width: 170 }} className="card-active">
                                <Active />
                                <div> Active <br /> <div style={{ color: "white", fontSize: "30px" }}>{active}</div></div>
                            </Card>
                            <Card style={{ width: 170 }} className="card-confirm">
                                <Confirmed />
                                <div>Confirmed <br /> <div style={{ color: "white", fontSize: "30px" }}>{confirmed}</div></div>
                            </Card>
                            <Card style={{ width: 170 }} className="card-recover">
                                <Recovered />
                                <div>Recovered <br /> <div style={{ color: "white", fontSize: "30px" }}>{recovered}</div></div>
                            </Card>
                            <Card style={{ width: 170 }} className="card-critical">
                                <Critical />
                                <div>New Deaths <br /> <div style={{ color: "white", fontSize: "30px" }}>{newDeath}</div></div>
                            </Card>
                            <Card style={{ width: 170 }} className="card-death">
                                <Deaths />
                                <div>Deaths <br /> <div style={{ color: "white", fontSize: "30px" }}>{death}</div></div>
                            </Card>
                        </div>
                        <Chart />
                        <div >
                            <Table />

                        </div>
                        <Map />
                    </div>
                </Layout>

            </div >
        </div>
    );
}

export default Home;