import React from 'react';
import Layout from '../../components/Layout'
import { useEffect } from 'react';
import axios from 'axios';
const Country = () => {
    const url = window.location.pathname;
    const m = /[^/]*$/.exec(url)[0];
    useEffect(() => {
        axios.get('https://corona-api.com/countries/US')
            .then(function (response) {
                const data = response.data.data;
                console.log(data)

            })
            .catch(function (error) {
                console.log(error);
            });
    })
    return (
        <div>
            <Layout>
                <p>{m}</p>
            </Layout>
        </div>
    );
}

export default Country;