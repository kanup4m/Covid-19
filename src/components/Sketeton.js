import React from 'react';
import TextLoop from 'react-text-loop';

const Loader = () => {
    return (
        <div>
            <TextLoop mask>
                <div>Acquiring Token</div>
                <div>Making API calls</div>
                <div>Validating Token</div>
                <div>Receving data</div>
                <div>Formatting data</div>
            </TextLoop>

        </div>
    );
}

export default Loader;