import React from 'react';
import About from './about/About'
import Experience from './experience/Experience'
import Knowledge from './knowledge/Knowledge'

const Home = () => {
    return (
        <div>
            <About/>
            <Experience></Experience>
            <Knowledge></Knowledge>
        </div>
    );
};

export default Home;