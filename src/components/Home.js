import React from 'react';
import About from './about/About'
import Experience from './experience/Experience'
import Knowledge from './knowledge/Knowledge'
import Studies from './studies/Studies'
import Projects from './projects/Projects'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import './home.scss'

const Home = () => {
    return (
        <div>
            <About/>
            <Experience/>
            <Knowledge/>
            <Studies/>
            <Projects/>
        </div>
    );
};

export default Home;