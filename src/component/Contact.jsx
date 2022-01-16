import react from "react";
 import Boxes from './Boxes.css';
 import Aos from 'aos';
 import { useEffect,useState } from 'react';
 import { ContactDiv } from './ContactDiv';
const Contact=()=>{
    useEffect(() => {
        Aos.init({duration:2000});
           }, [])
           const [email, setEmail] = useState() 
       const [contact, setContact] = useState() 
    return(
        <>
              <h1>Contact me</h1>
              <div style={{marginTop:'50px'}}>📞- 9336012391,9984088737</div>
              <div style={{marginTop:'20px'}}>📧 -surendrayadav91296@gmail.com</div>
               <div className="grid">
               <a target='_blank' className="" href="https://www.linkedin.com/in/surendra-yadav-75812b1a1/"> <div data-aos='flip-left' ><img src="image/linkedin.png" alt="" /></div></a>
               <a target='_blank' className="" href="https://github.com/Surendra9129">  <div data-aos='flip-right'><img src="image/github.png" alt=""/></div></a>
               <a target='_blank' className="" href="https://medium.com/@surendrayadav91296">  <div data-aos='flip-left'><img src="image/medium.png" alt="" /> </div></a>
              
               {/* <a className="" href="#">  <div data-aos='flip-right'  onClick={()=>{setContact(<ContactDiv ><h1>Contact me </h1> <p>📞 9336012391, 9984088737</p> <div onClick={()=>{setContact()}}>❌</div></ContactDiv>)}} ><div className="con"><div>Contact-9336012391,</div> <div>9984088737</div></div></div></a>     */}
               <div>{email}</div> 
               <div>{contact}</div>        
                   </div> 
                   <div style={{marginBottom:'350px', marginTop:'150px'}}></div>
                   <h5 >Thank you for your time</h5>
        </>
    )
}

export default Contact