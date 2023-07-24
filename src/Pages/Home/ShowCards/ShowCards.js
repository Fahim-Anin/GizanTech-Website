import React from 'react';
import SCard from './SCard';
import BannerHead from '../../../Assets/Images/BannerHead.png';
import Banner3 from '../../../Assets/Images/Banner3.png';
import CardImg1 from '../../../Assets/Images/CardImg1.svg';
import aiML from '../../../Assets/Images/aiML.jpg';
import iot from '../../../Assets/Images/iot.jpg';
import webDev from '../../../Assets/Images/website.jpg';
import mobileApp from '../../../Assets/Images/mobileApp.jpg';
import loram from '../../../Assets/Images/loram.jpg';
import embeded from '../../../Assets/Images/embeddedSystem.jpg';

import { motion } from 'framer-motion'
import { Random, Wave } from 'react-animated-text';

const ShowCards = () => {
  return (
    <div className="showCard">
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
        className="cardContainer">
        <div
          className="row">
          <SCard>
            <img className="cImageIn" src={iot} alt="banner" />

            <div className="cTitle">
            <Random
                text="IOT"
                effect="jump"
                effectChange={2.0}
                effectDuration={0.5}
                iterations={2}
              />
            </div>
          </SCard>
          <SCard>
            <img className="cImageIn" src={mobileApp} alt="banner" />
            <div className="cTitle">
              <Random
                text="Mobile Application"
                effect="jump"
                effectChange={2.0}
                effectDuration={0.5}
                iterations={2}
              />
            </div>
          </SCard>
          <SCard>
            <img className="cImageIn" src={webDev} alt="banner" />
            <div className="cTitle">
            <Random
                text="Web Application"
                effect="jump"
                effectChange={2.0}
                effectDuration={0.5}
                iterations={2}
              />
               </div>
          </SCard>
          <SCard>
            <img className="cImageIn" src={aiML} alt="banner" />
            <div className="cTitle">
            <Random
                text=" AI & ML"
                effect="jump"
                effectChange={2.0}
                effectDuration={0.5}
                iterations={2}
              />
             </div>
          </SCard>
          <SCard>
            <img className="cImageIn" src={loram} alt="banner" />
            <div className="cTitle">
            <Random
                text="LoraWan"
                effect="jump"
                effectChange={2.0}
                effectDuration={0.5}
                iterations={2}
              />
             </div>
          </SCard>
          <SCard>
            <img className="cImageIn" src={embeded} alt="banner" />
            <div className="cTitle">
            <Random
                text="Embedded System"
                effect="jump"
                effectChange={2.0}
                effectDuration={0.5}
                iterations={2}
              />
             </div>
          </SCard>
        </div>
      </motion.div>
    </div>
  );
};

export default ShowCards;
