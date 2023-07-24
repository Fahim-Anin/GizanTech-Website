import React from 'react';
//import BannerHead from '../../../Assets/Images/BannerHead.png';
import Banner3 from '../../../Assets/Gifs/drone.gif';
import './Banner.css';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Button } from 'react-bootstrap';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer.ts";

const Banner = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
// useFollowPointer is used to grab the curser point with external file 'use-follow-pointer.ts'

  //   const componentDidMount = () => {
  //     const script = document.createElement('script');

  //     script.src =
  //       'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
  //     script.async = true;

  //     document.body.appendChild(script);
  //     const x = document.getElementById('bannerGifID');
  //   };
  //   componentDidMount();
  return (
    <div className="banner">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center">
          <div>
            <motion.div 
            className="banner-title"
              initial={{
                opacity:0,
                y:30,
              }}
              
              animate={{
                opacity:1,
                 y:0,
                
              }}
              transition={{
                delay:.3,
                duration:1
              
              }}
            >
              Welcome to the GizanTech
            </motion.div>
            {/* <h1>Let's be friend.</h1> */}
            <motion.p 
            className="paragraphText"
            initial={{
              x:+400,
              opacity:0.3
            }}
            animate={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:2,
              delay:0.1,
              type:"spring",
              stiffness:200
            }}
            
            >
              {' '}
              To have an impact on the fourth industrial revolution, GizanTech was founded.
               We focus on providing software and embedded system solutions for the industries that will form the core of industry 4.0. 
               We are thrilled to have you accompany us on our next journeys.{' '}
            </motion.p>
             
           
            <motion.button  initial={{
              x:+400,
              opacity:0.3
            }}
            animate={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:2,
              delay:0.1,
              type:"spring",
              stiffness:200
            }}
            
           
              className="getInTouchButton mt-3 btn btn"
              size="medium"
              variant="outline-danger"
            >
             Get In Touch
            </motion.button>{' '} 

          </div>
        </div>
       

        
        <motion.div 
        ref={ref}
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001
        }}
          className="col-md-6 d-flex align-items-center justify-content-center"
          id="bannerGifID"
        >
          {/* <img className="bannerImage" src={Banner3} alt="banner" /> */}
          <Player
            autoplay
            loop
            bounce
            src="https://assets5.lottiefiles.com/packages/lf20_ZNmWRs.json"
            style={{ height: '700px', width: '600px' }}
            className="bannerImage"
          >
            <Controls
              visible={false}
              buttons={['play', 'repeat', 'frame', 'debug']}
            />
          </Player>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
