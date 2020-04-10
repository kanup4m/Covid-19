import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup,
    Marker
} from "react-simple-maps";
import axios from 'axios'
import News from './News';
const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Visual = () => {
    const [citiesData, setcities] = useState([])
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
    const handleMarkerClick = (name, coordinates) => {
        console.log("Marker: ", name + "  " + "Coordinates ", coordinates)
    }
    return (
        <Layout style={{ height: "100vh" }}>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={300} className="site-layout-background">
                    <br />
                    <h1>Total Confirmed Cases</h1>
                    <small>Updated 7 min ago</small>
                    <h1>1,441,128</h1>
                    <h2 className="legend">
                        <div className="color" style={{ background: 'rgb(244, 195, 99)' }} />
                        <div className="description">Active cases</div>
                        <div className="total">1,050,317<div className="delta">+63,020</div></div>
                    </h2>

                    <div>Recovered cases</div>
                    <div>Fatal cases</div>
                    <hr />
                    <p>Browse</p>
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

                </Sider>
                <Layout >
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: 0,
                            minHeight: 280,
                        }}
                    >
                        <div className="overview">
                            {/* <a href="https://www.yahoo.com/lifestyle/want-help-home-donate-coronavirus-113000050.html" target="_blank" className="apiContentLink newsCard"><img className="newsImage" height="76px" width="76px" src="https://www.bing.com/th?id=ON.D32A7987E3F812D249A9EC38024A7444&pid=News" />
                                <div className="infoContainer">
                                    <div className="title">Want to Help From Home? Here’s How to Donate to Coronavirus Aid by Shopping Online</div>
                                    <div className="provider">
                                        <div className="providerName">YAHOO!</div>
                                        <div className="publishedTime"> · 3m</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.yahoo.com/lifestyle/want-help-home-donate-coronavirus-113000050.html" target="_blank" className="apiContentLink newsCard"><img className="newsImage" height="76px" width="76px" src="https://www.bing.com/th?id=ON.D32A7987E3F812D249A9EC38024A7444&pid=News" />
                                <div className="infoContainer">
                                    <div className="title">Want to Help From Home? Here’s How to Donate to Coronavirus Aid by Shopping Online</div>
                                    <div className="provider">
                                        <div className="providerName">YAHOO!</div>
                                        <div className="publishedTime"> · 3m</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.yahoo.com/lifestyle/want-help-home-donate-coronavirus-113000050.html" target="_blank" className="apiContentLink newsCard"><img className="newsImage" height="76px" width="76px" src="https://www.bing.com/th?id=ON.D32A7987E3F812D249A9EC38024A7444&pid=News" />
                                <div className="infoContainer">
                                    <div className="title">Want to Help From Home? Here’s How to Donate to Coronavirus Aid by Shopping Online</div>
                                    <div className="provider">
                                        <div className="providerName">YAHOO!</div>
                                        <div className="publishedTime"> · 3m</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.yahoo.com/lifestyle/want-help-home-donate-coronavirus-113000050.html" target="_blank" className="apiContentLink newsCard"><img className="newsImage" height="76px" width="76px" src="https://www.bing.com/th?id=ON.D32A7987E3F812D249A9EC38024A7444&pid=News" />
                                <div className="infoContainer">
                                    <div className="title">Want to Help From Home? Here’s How to Donate to Coronavirus Aid by Shopping Online</div>
                                    <div className="provider">
                                        <div className="providerName">YAHOO!</div>
                                        <div className="publishedTime"> · 3m</div>
                                    </div>
                                </div>
                            </a> */}
                            <News />

                        </div>
                        {/* <ComposableMap>
                            <ZoomableGroup zoom={2}>
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map(geo => (
                                            <Geography key={geo.rsmKey} geography={geo} />
                                        ))
                                    }
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap> */}
                        <ComposableMap

                        >
                            <ZoomableGroup zoom={2}>
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies
                                            // .filter(d => d.properties.REGION_UN === "Americas")
                                            .map(geo => (
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
                                    <Marker key={name} coordinates={coordinates}>
                                        <circle r={latest_data.calculated.death_rate} fill="#F00" stroke="#fff" onClick={() => handleMarkerClick(name, coordinates)} />
                                    </Marker>
                                ))}
                            </ZoomableGroup>

                        </ComposableMap>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Visual;