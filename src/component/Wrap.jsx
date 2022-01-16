import React from "react"
import Typewriter from 'typewriter-effect'
import { Image } from "./Image"
import {Button} from '@material-ui/core'

const Wrap=()=>{
    return <>
    <div className="top">
      <Image></Image>
    <h3>Hey There! <br />I'm Surendra Yadav</h3>
    <Typewriter 
       onInit={((typewriter)=>{
       setInterval(()=>{
         typewriter.typeString("I'm Full-stack web developer").pause(2000).deleteAll().start();
       },1000)
      
     })}
     />
    <div className="wrapper">
    <a color="white" href="https://drive.google.com/file/d/1lKLf5uKg6OwbQPVqmpxxJ7UIcFluuNPz/view?usp=sharing"><Button color='inherit' > <img src='image/download.png' className='Resume_icon'></img>Resume</Button></a> 
    
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    <div className="dot"></div>
    </div>
  </div>

    </>
}
export  {Wrap};