import React from 'react';
import About from './about/About'
import Experience from './experience/Experience'
import Knowledge from './knowledge/Knowledge'
import Studies from './studies/Studies'
import Projects from './projects/Projects'

import './home.scss'

const Home = () => {
    return (
        <div className='snapwrapper'>
            <div  className='snapsection'>

            <About/>
            </div>
            <div  className='snapsection'>

            <Experience/>
            </div>
            <Knowledge className='snapsection'/>
            <Studies className='snapsection'/>
            <Projects className='snapsection'/>
        </div>
    );
};

export default Home;