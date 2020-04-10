import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
const Div = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  position:relative;
  margin:auto;
  top:50%;
  width:50%;
  padding: 0.25em 1em;

`
const NotFound = () => {
    return (
        <Layout>
            <Div >
                <h1>Page Not Found</h1>
                <p>Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
                <h4>Back to homepage</h4>
            </Div>
        </Layout>

    );
}

export default NotFound;