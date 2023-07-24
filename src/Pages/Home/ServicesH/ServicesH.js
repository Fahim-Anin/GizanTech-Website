import React from 'react';
import './ServicesH.css';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const ServicesH = () => {
  return (
    <div className="my-5">
      <h1 className="sHtitle ">Our Services</h1>
      <div>
        <p className="regularTextT">

        </p>
        <div className="row">
          <div className="col-lg-4 col-md-6 regularText">
            <motion.div

              initial={{
                opacity: 0.2,
                y: 100,
              }}
              transition={{

                duration: .5

              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/4091/4091294.png"
              ></img>
              <h3 className="serviceTitle">Web Development</h3>
              <p>
               
        
              </p>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6 regularText">
            <motion.div
              //  whileHover={
              //   {
              //     scale:1.1
              //   }
              // }
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              transition={{
                // delay: .7,
                duration: .7,
                // type: 'spring'
              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/2452/2452611.png"
              ></img>
              <h3 className="serviceTitle">Mobile App Development</h3>
              <p>
                
                


              </p>
            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6 regularText">
            <motion.div
              // whileHover={
              //   {
              //     scale: 1.1
              //   }
              // }
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              transition={{
                // delay: 1,
                duration: 1,
                // type: 'spring'
              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/4363/4363951.png"
              ></img>
              <h3 className="serviceTitle">Embedded System Design</h3>
              <p>
              
              </p>
              
              
            </motion.div>
          </div>

          <div className="col-lg-4 col-md-6 regularText">
            <motion.div
              whileHover={
                {
                  scale: 1.1
                }
              }
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              transition={{
                delay: .3,
                duration: .1,
                type: 'spring'
              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/1865/1865584.png"
              ></img>
              <h3 className="serviceTitle">PCB Design</h3>
              <p>
              
              </p>
              

            </motion.div>
          </div>

          <div className="col-lg-4 col-md-6 regularText">
            <motion.div
              whileHover={
                {
                  scale: 1.1
                }
              }
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              transition={{
                // delay: .7,
                duration: .1,
                // type: 'spring'
              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/1385/1385377.png"
              ></img>
              <h3 className="serviceTitle">Blockchain & Smart-Contract(Solidity)</h3>
              <p>
               
              </p>
              

            </motion.div>
          </div>

          <div className="col-lg-4 col-md-6 regularText">
            <motion.div
              whileHover={
                {
                  scale: 1.1
                }
              }
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              transition={{
                // delay: 1,
                duration: .1,
                // type: 'spring'
              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/3869/3869864.png"
              ></img>
              <h3 className="serviceTitle">Internet of Things(IOT)</h3>
              <p>
                
              </p>
              

            </motion.div>
          </div>


          <div className="col-lg-4 col-md-6 regularText">
            <motion.div
              whileHover={
                {
                  scale: 1.1
                }
              }
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              transition={{
                // delay: .1,
                duration: .5,
                // type: 'spring'
              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/2152/2152477.png"
              ></img>
              <h3 className="serviceTitle">AIoT & Machine Learning</h3>
              <p>
               
              </p>
              

            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6 regularText">
            <motion.div
              whileHover={
                {
                  scale: 1.1
                }
              }
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              transition={{
                // delay: .7,
                duration: 1,
                // type: 'spring'
              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/4025/4025152.png"
              ></img>
              <h3 className="serviceTitle">Branding & Marketing</h3>
              <p>
               
              </p>
              

            </motion.div>
          </div>
          <div className="col-lg-4 col-md-6 regularText">
            <motion.div
              whileHover={
                {
                  scale: 1.1
                }
              }
              initial={{
                opacity: 0.2,
                y: 50,
              }}
              transition={{
                // delay: 1,
                duration: .5,
                // type: 'spring'
              }}
              whileInView={{
                opacity: 1,
                y: 0

              }}
              viewport={{ once: false, amount: .4 }}
              className="serviceItem">
              <img
                className="iconStyle"
                src="https://cdn-icons-png.flaticon.com/512/7407/7407716.png"
              ></img>
              <h3 className="serviceTitle">Publication</h3>
              <p>
              </p>
              



            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesH;
