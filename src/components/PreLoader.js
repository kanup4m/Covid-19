import React from 'react';
import { Skeleton } from 'antd';

const Loader = () => {
    return (
        <div style={{ padding: "20px" }}>
            {/* <Skeleton avatar active />
            <Skeleton avatar active />

            */}
            <Skeleton.Input style={{ width: '300px' }} active avatar />
            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <br />
            <br />

            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <br />
            <br />

            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <br />
            <br />

            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />
            <Skeleton.Input style={{ width: '300px' }} active />

            <br />
            <br />

            <Skeleton active />



            <Skeleton active />
        </div>
    );
}

export default Loader;