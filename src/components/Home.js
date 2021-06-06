import React from 'react';
import About from './about/About'
import Experience from './experience/Experience'
import Knowledge from './knowledge/Knowledge'
import Studies from './studies/Studies'

const Home = () => {
    return (
        <div>
            <About/>
            <Experience></Experience>
            <Knowledge></Knowledge>
            <Studies></Studies>
        </div>
    );
};

export default Home;