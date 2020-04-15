import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ReactTooltip from "react-tooltip";
import Sidebar from './Sidebar';
import SimpleMap from './SimpleMap'
import { Link } from 'react-router-dom'
import Skeleton from './Sketeton'
import axios from 'axios'
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Visual = () => {
    const [content, setContent] = useState("");
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
        <Layout style={{ height: "100vh" }}>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" >
                    <Menu.Item key="1">COVID-19 Tracker</Menu.Item>
                    <Menu.Item ><Link to="/india">India Stats</Link></Menu.Item>
                    <Menu.Item>Help</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={300} className="site-layout-background tab">
                    <br />
                    <h1>Total Confirmed Cases</h1>
                    <h1 className="confirmed">{confirmed}</h1>
                    <h2 className="legend">
                        <div className="color" style={{ background: 'rgb(244, 195, 99)' }} />
                        <div className="description">Active cases</div>
                        <div className="total">{active}
                        </div>
                    </h2>
                    <h2 className="legend">
                        <div class="color" style={{ background: 'rgb(96, 187, 105)' }}></div>
                        <div className="description">Recovered cases</div>
                        <div className="total">{recovered}
                        </div>
                    </h2>
                    <h2 className="legend">
                        <div class="color" style={{ background: 'rgb(118, 118, 118)' }}></div>
                        <div className="description">Fatal cases</div>
                        <div className="total">{death}
                        </div>
                    </h2>
                    <hr />
                    <p>Browse</p>
                    <div className="sidebar">
                        <div className="sidebar-fixed">

                            <div id="unitedstates" className="area ">
                                <div className="areaName" title="United States">United States</div>
                                <div className="areaTotal">
                                    <div className="secondaryInfo">400,788</div>
                                </div>
                            </div>
                            <div id="unitedstates" className="area ">
                                <div className="areaName" title="United States">United States</div>
                                <div className="areaTotal">
                                    <div className="secondaryInfo">400,788</div>
                                </div>
                            </div>
                            <div id="unitedstates" className="area ">
                                <div className="areaName" title="United States">United States</div>
                                <div className="areaTotal">
                                    <div className="secondaryInfo">400,788</div>
                                </div>
                            </div>
                            <div id="unitedstates" className="area ">
                                <div className="areaName" title="United States">United States</div>
                                <div className="areaTotal">
                                    <div className="secondaryInfo">400,788</div>
                                </div>
                            </div>
                            <div id="unitedstates" className="area ">
                                <div className="areaName" title="United States">United States</div>
                                <div className="areaTotal">
                                    <div className="secondaryInfo">400,788</div>
                                </div>
                            </div>



                        </div>
                    </div>

                </Sider>
                <Layout >
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: 0,
                            minHeight: 280,
                        }}
                    >

                        <SimpleMap />
                        <Skeleton />

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Visual;