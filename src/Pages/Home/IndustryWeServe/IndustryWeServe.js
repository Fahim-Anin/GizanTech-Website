import React from 'react';
import './IndustryWeServe.css';
import { motion }from 'framer-motion'
import demoIndustryList from './demoIndustryList';
 
const IndustryWeServe = () => {
  return (
    <div className="my-5 ">
      <h1 className="sHtitle">Industry We Serve</h1>
      <div className="row container">
      {/* <IndustryShow/> */}
      {
        demoIndustryList.map((industry,index)=>
        <motion.div
                 
                 initial={{
                   opacity:0.5,
                   x:window.innerWidth/6,
                 }}
                 transition={{
                   delay:`.${index+2}`,
                   duration:1,
                   type:'spring'
                 }}
                 whileInView={{
                   opacity:1,
                   x:0
                   
                 }}
                 viewport={{once:false,amount:.3}}
       
               className="col-lg-2 col-md-4 singleIndustry ">
                 <img
                   className="iconStyle2"
                   src={industry.logoUrl}
                  alt="Industry_pic"
                 ></img>
                 <h3 className="serviceTitle"> {industry.type}</h3>
               </motion.div>)
      }
      </div>
    </div>
  );
};

export default IndustryWeServe;
