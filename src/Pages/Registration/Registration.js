import React from 'react';
import Layout from '../../Components/Layout/Layout';
import './Registration.css';
import Typewriter from 'typewriter-effect';
import ReqForm from '../Apply/Apply';
import OpenJobs from './OpenJobs';

const Registration = () => {
    return ( 
      <Layout>
      <div className="registration">
      
          <p className="typewriter">
    
    <Typewriter
  onInit={(typewriter)=>{

   typewriter.typeString("Open Jobs")
   
   .pauseFor(2000)
   .deleteAll()
   .typeString("Open Jobs")
   .deleteAll()
   .typeString("Open Jobs")
   .deleteAll()
   .typeString("Open Jobs")
   .deleteAll()
   .typeString("Open Jobs")
   .start()
   
  }}
/>
      </p>

      </div>
      <OpenJobs />

      </Layout>
    );
  };
  
  export default Registration;
  
/*
  <Typewriter
  onInit={(typewriter)=>{
   typewriter.typeString("Registration is closed!")
   .pauseFor(2000)
   .start()
   */
