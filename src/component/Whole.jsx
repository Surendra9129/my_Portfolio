import react from 'react';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import { Wrap } from './Wrap';
import React from 'react';


const Whole = () => {
    return (
        <div>
            <Wrap></Wrap>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Whole;