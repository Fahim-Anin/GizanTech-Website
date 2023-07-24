import React from 'react';
import Layout from '../../Components/Layout/Layout';
import ProjectSlider from './ProjectSlider/ProjectSlider';
import './Projects.css';
import { Button, Image } from 'react-bootstrap';
import ProjectBanner from './ProjectBanner/ProjectBanner';
import Banner3 from '../../Assets/Images/Banner3.png';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const projects = {
  walkitalki: {
    technologies: ['Java', 'Android Studio', 'XML', 'Blututh low ennergy'],
  },
};
const walkitalkiT = [
  'Java',
  'Android Studio',
  'XML'
];
const points = [
  'You can chat networkfree',
  'Verify yourself freely',
  'Lot more facilities',
  'Rich connectivity available',
];
const Projects = () => {
  return (
    <Layout>
      <ProjectBanner></ProjectBanner>
      <hr></hr>
      <div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="generalImage" src={Banner3} alt="banner" />
          </div>
          <div className="col-md-6 col-sm-12 py-5">
            <h1>Walki Talki Application</h1>
            <div className="flexContainer">
              {walkitalkiT.map((tc) => (
                <h3
                  className="technologyUsed"
                  key={Math.random().toString() + Date.now().toString()}
                >
                  {tc}
                </h3>
              ))}
            </div>
            <div className="my-4">
              {points.map((p) => (
                <h5
                  className="py-1"
                  key={Math.random().toString() + Date.now().toString()}
                ></h5>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr></hr>
        {/* <div className="row">
          <div className="col-md-6 col-sm-12 py-5">
            <h1>Walki Talki Application</h1>
            <div className="flexContainer">
              {walkitalkiT.map((tc) => (
                <h3
                  className="technologyUsed"
                  key={Math.random().toString() + Date.now().toString()}
                >
                  {tc}
                </h3>
              ))}
            </div>
            <div className="my-4">
              {points.map((p) => (
                <h5
                  className="py-1"
                  key={Math.random().toString() + Date.now().toString()}
                >
                  &nbsp;&nbsp; {p}
                </h5>
              ))}
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="generalImage" src={Banner3} alt="banner" />
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default Projects;
