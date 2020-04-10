import React from 'react'
import axios from 'axios'
import { Table } from 'antd';
import { Link } from 'react-router-dom'

const columns = [
    {
        title: 'Country',
        dataIndex: 'name',
        render: code => <Link to={`/countries/${code}`} target="_blank" style={{ color: "#667eea", fontSize: "1rem" }}> {code}</Link >,

    },
    {
        title: 'Total Cases',
        dataIndex: 'latest_data',
        render: latest_data => `${latest_data.confirmed}`,
        defaultSortOrder: 'descend',
        sorter: {
            compare: (a, b) => a.latest_data.confirmed - b.latest_data.confirmed,
            multiple: 4,
        },
    },
    {
        title: 'New Cases',
        dataIndex: 'today',
        render: today => `${today.confirmed}`,
    }, {
        title: 'Total Deaths',
        dataIndex: 'latest_data',
        render: latest_data => <span > <span style={{ fontWeight: "bold" }}>{latest_data.deaths}</span> ({Math.round((latest_data.confirmed - latest_data.recovered) / latest_data.deaths).toFixed(2)}%)</span>,
    },
    {
        title: 'Critical',
        dataIndex: 'latest_data',
        render: latest_data => `${latest_data.critical}`,
    },
    {
        title: 'Total Recovered',
        dataIndex: 'latest_data',
        render: latest_data => <span > <span style={{ fontWeight: "bold" }}>{latest_data.recovered}</span> ({Math.round((latest_data.confirmed - latest_data.deaths) / latest_data.recovered).toFixed(2)}%)</span>,
    },
];

class Countries extends React.Component {
    state = {
        data: [],
        loading: false,
    };

    componentDidMount() {
        this.fetch();
    }



    fetch = (params = {}) => {
        console.log('params:', params);
        this.setState({ loading: true });
        axios({
            url: 'https://corona-api.com/countries',
            method: 'get',
        }).then(data => {
            // console.log(data.data.data)
            // console.log(JSON.stringify(data))
            // Read total count from server
            // pagination.total = data.totalCount;
            // pagination.total = 250;
            this.setState({
                loading: false,
                data: data.data.data,
            });
        });
    };

    render() {
        return (
            <Table
                columns={columns}
                bordered
                rowKey={record => record.code}
                dataSource={this.state.data}
                loading={this.state.loading}

            />
        );
    }
}

export default Countries