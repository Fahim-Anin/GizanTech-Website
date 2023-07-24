import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Layout from '../../Components/Layout/Layout';
import { delay, motion } from 'framer-motion'
import './Team.css';
//import ItemBox from '../../Components/Custom/ItemBox';
import TeamMember from './TeamMember';
import { Button,Collapse,Card } from 'react-bootstrap';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {mlResearch,embeded, branding, managing, appDev, webDev, iot,   }from './teamMemberList'
import { Link } from 'react-router-dom';

const Team = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout>
      
      <div className='teamPage'>
      
      <motion.h1
        className="membersTitle"
        animate={{
          scale: 1.5,
          fontSize: '30px',
        }}

      >
        Team Members
      </motion.h1>
      <Tabs
      defaultActiveKey="administration"
      id="justify-tab-example"
      className="mb-3 "
      justify
    >
      <Tab className='' eventKey="administration" title="Administration">
        {/* <Sonnet /> */}
          <div className='row d-flex justify-content-center '>
          {managing.map((member) => (

              <TeamMember member={member} key={member.id.toString()} />
          ))}
        </div>
      </Tab>

      <Tab eventKey="iot" title="Embedded System">
        {/* <Sonnet /> */}
          <div className='row  d-flex justify-content-center'>
          {iot.map((member) => (

              <TeamMember member={member} key={member.id.toString()} />
          ))}
        </div>
      </Tab>
      <Tab eventKey="webDev" title="WebDev">
        {/* <Sonnet /> */}
          <div className='row d-flex justify-content-center'>
          {webDev.map((member) => (

              <TeamMember member={member} key={member.id.toString()} />
          ))}
        </div>
      </Tab>
      <Tab eventKey="mApp" title="Android Dev">
        {/* <Sonnet /> */}
          <div className='row d-flex justify-content-center'>
          {appDev.map((member) => (

              <TeamMember member={member} key={member.id.toString()} />
          ))}
        </div>
      
      </Tab>
      
      {/* <Tab eventKey="embeded" title="Embedded System Design Team"> */}
        {/* <Sonnet /> */}
          {/* <div className='row d-flex justify-content-center'>
          {embeded.map((member) => (

              <TeamMember member={member} key={member.id.toString()} />
          ))}
        </div> */}
      {/* </Tab> */}
      
      {/* <Tab eventKey="mlResearch" title="ML & Research Team "> */}
        {/* <Sonnet /> */}
          {/* <div className='rowd-flex justify-content-center '>
          {mlResearch.map((member) => (

              <TeamMember member={member} key={member.id.toString()} />
          ))}
        </div> */}
      {/* </Tab> */}
      <Tab eventKey="branding" title="Branding & Marketing"> 
        {/* <Sonnet /> */}
          <div className=' row d-flex justify-content-center'>
          {branding.map((member) => (

              <TeamMember member={member} key={member.id.toString()} />
          ))}
        </div>
       </Tab>
    </Tabs>
      <div className="row">

       
      </div>

      {/* <hr className="my-5"></hr>
      <div>
        <p className="description">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
      </div>
      <div className="d-flex justify-content-center mb-5">
        <Button className="getInTouchButton mt-3" size="lg" variant="warning">
          Contact Us
        </Button>{' '}
      </div> */}   
      </div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="outline-info"
      >
        	&gt;
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
           
           <Link to='/memberlogin'>
           <Button variant='outline-info'>Login</Button>
           </Link> 
          </div>
        </Collapse>
      </div>
    </Layout>
  );
};

export default Team;
