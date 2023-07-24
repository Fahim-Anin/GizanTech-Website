import React, { useState } from 'react';
import './About.css';

import Layout from '../../Components/Layout/Layout';
import { motion } from 'framer-motion'
import Card from 'react-bootstrap/Card';
import mission from '../../Assets/Images/motivation.png'
import vision from '../../Assets/Images/vision.png'
import { Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const About = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  return (
    <>

      <Layout>
        <div className='topSection'>
        </div>
        <motion.div

          initial={{
            opacity: 0,
            y: 0,
            x: 0,

          }}

          animate={{
            opacity: 1,
            y: -200,
            x: 0
          }}
          transition={{
            delay: .3,
            duration: 1

          }}
        >
          <div className='bg-text'>
            <h1>We Are GizanTech</h1>
            <Button href='#missionSection' className='btn-lg' variant='outline-info'> &#8595;  &#8595; &#8595;</Button>
          </div>
        </motion.div>
        {/* <div>Company Profile</div>
        <div>Our Value</div> */}
        {/* OUR Vision START */}
        <div
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          variant="outline-info"
          className='collapseTitle shadow'
          id='missionSection'
        >
          Our Vision
        </div>
        <div>

          <div>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">

                <Card className='' id='missionSection'>
                  <Card.Body>
                      <Card.Text>
                      Creating innovative technology that improves and simplifies daily lives. This involves the development of new products, services, and systems that leverage cutting-edge technologies such as artificial intelligence, the Internet of Things (IoT), 5G networks, and cloud computing.Aiming to address some of the world's biggest challenges such as climate change, healthcare, and education through the development of sustainable, accessible, and scalable technology solutions. Also to desire for progress, an entrepreneurial spirit, and a passion for solving problems and making a positive impact on the world. The company is constantly evolving and adapting to new trends and market demands, driving the advancement of technology and shaping our future.

                    </Card.Text>
                  </Card.Body>
                </Card>

              </div>
            </Collapse>
          </div>
          {/* OUR Vision END */}



          {/* OUR MISSION START */}


          <div
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
            variant="outline-info"
            className='collapseTitle shadow'

          >
            Our Mission
          </div>

          <div >
            <Collapse in={open2} dimension="width" >
              <div id="example-collapse-text">

                <Card className='' id='missionSection'>
                  <Card.Body>
                    <Card.Text className='text-justify'>
                      Creating and delivering the products and services that enhance human lives and improve the world. This is accomplished by leveraging the latest technological advancements to solve real-world problems and meet the changing needs and demands of society. The mission of the tech industry encompasses several key aspects, including: innovation, accessibility, sustainability, education, economic growth.
                      The mission is to be rooted in a desire to make a positive impact on society, and it is this focus that drives the development of new and innovative solutions that benefit us all.

                    </Card.Text>
                  </Card.Body>
                </Card>

              </div>
            </Collapse>
          </div>

        </div>
        {/* OUR MISSION END */}

        <div className='contactSection'>
          <div style={{ 'text-align': 'center', 'font-size': '40px' }}> WANT US TO CALL YOU?<br /> <Link to='/contact'> <Button> Reach Out </Button></Link></div>

        </div>
      </Layout>
    </>
  );
};

export default About;
