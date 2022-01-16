import React from 'react';
import Aos from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Boxes from './Boxes.css'
import {Button} from '@material-ui/core'

const Project = () => {
    useEffect(() => {
 Aos.init({duration:3000});
    }, [])
    return (
        <div>
            <h1>Projects</h1>
            
            <div className='grids'>
                <div data-aos='flip-left' className='boxes'><img src="image/cs.png" alt="" /></div>
                <div data-aos='fade-right' className='boxes'>
                    <h2>Coursera</h2>
                    <li> It is a web application that enables students to buy
                      online courses.
                    </li>
                    <li>We have used fetch API to get the data and local storage to store the data.
                    </li>
                    <li>implemented debouncing to sort the result.</li>
                    <li>A collaborative project built by a team of 6executed in 6 days.
                    </li>
                    <div className='tech-stacks'>
                        <div><h4>Tech-Stacks</h4></div>
                        <div> <img src="image/download (1).png" alt="" /></div>
                        <div> <img src="image/download (2).png" alt="" /></div>
                        <div> <img src="image/download (3).png" alt="" /></div>
                    </div>
                    <a target='_blank' href="https://github.com/Surendra9129/Coursera_Clone"><button className='btn'><Button ><h2 >Code </h2></Button></button></a>
                    
                    
                    <a target='_blank' href="https://confident-hamilton-2def1d.netlify.app/"><button className='btn'><Button ><h2 >demo </h2></Button></button></a>
                </div>
                <div data-aos='flip-right' className='boxes'><img  src="image/lf.jfif" alt="" /></div>
                <div data-aos='fade-up' className='boxes'>

                <h2 className='life_tech'>LifeStyle Store</h2>
                    <li>Life Style Stor is an e-commerce website that sells clothes
                    </li>
                    <li> used fetch API to get the data and local storage to store the data.
                    </li>
                    <li>used local storage for signIn authentication     
                    </li>
                    <li>A collaborative project built by a team of 4 executed in 6 days.
                    </li>
                    <div className='tech-stacks'>
                        <div><h4 className='life_tech'>Tech-Stacks</h4></div>
                        <div> <img src="image/download (1).png" alt="" /></div>
                        <div> <img src="image/download (2).png" alt="" /></div>
                        <div> <img src="image/download (3).png" alt="" /></div>
                    </div>
                    <a target='_blank' href="https://github.com/aadityaneve/Clone-lifestylestores"><button className='btn'><Button ><h2 className='life_tech'>Code </h2></Button></button></a>
                    
                    
                    <a target='_blank' href="https://gracious-wing-addaa8.netlify.app/pages/index.html"><button className='btn'><Button ><h2 className='life_tech'>demo </h2></Button></button></a>

                </div>
                <div data-aos='flip-left' className='boxes'>5</div>
                <div data-aos='fade-left' className='boxes'>6</div>
                <div data-aos='flip-right' className='boxes'>7</div>
                <div  data-aos='fade-in' className='boxes'>8</div>
            </div>
           . <h1 className='bottom'>.</h1>
        </div>
    );
};

export default Project;
