// import React from 'react'
// import './Home.css'
// import Navbar from '../../Components/Navbar/Navbar'
// import Header from '../Header/Header'

// const Home = () => {
//   return (
//     <div className='home'>
//         <Header />
//     </div>
//   )
// }

// export default Home




import React, { useEffect, useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Header from "../Header/Header";
import Availability from "../Availability/Availability";
import AboutUs from "../AboutUs/AboutUs";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const boxref = useRef();
  
  useEffect(() => {
    gsap.to(".navbar", {
      backgroundColor: "black",
      duration: 0.5,
      height: "80px",
      scrollTrigger: {
        trigger: ".navbar",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
      },
    });
} , [])

  return (
    <div className="home" id="home">
      <Header />
      <div id="availability">
        <Availability />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
