import React from 'react';
import './content.css';
import SlidingImagePane from './slidingPane';
import ClosedLeftMenu from './closedLeftMenu';

const Content = () => {
    return (
        <section>
            <ClosedLeftMenu />
            <SlidingImagePane />

        </section>
    )
}

export default Content;
