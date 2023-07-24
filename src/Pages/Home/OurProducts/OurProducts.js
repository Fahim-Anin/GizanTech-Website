import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import aadev from '../../../Assets/Images/Andorid App Development-01.png'
import blockChain from '../../../Assets/Images/blockchain-01.png'
import embed from '../../../Assets/Images/Embedded System-01.png'
import mL from '../../../Assets/Images/Machine Learning-01.png'
import pcb from '../../../Assets/Images/PCB Design-01.png'
import bitCoin from '../../../Assets/Images/Bitcoin Final-01.png'
import Stipe from '../Stipe/Stipe';

const OurProducts = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="my-5 carouselControl ">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 imgStyle"
            src={aadev}
            alt="First slide"
            
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgStyle"
            src={blockChain}            
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgStyle"
            src={embed}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgStyle"
            src={mL}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item> 
        <Carousel.Item>
          <img
            className="d-block w-100 imgStyle"
            src={pcb}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imgStyle"
            src={bitCoin}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    
      
    </div>
  );
};

export default OurProducts;
