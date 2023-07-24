import React from 'react';
import ProjectSlider from '../ProjectSlider/ProjectSlider';
import '../Projects.css';
import { Button } from 'react-bootstrap';
const ProjectBanner = () => {
  return (
    <div>
      <div className="row mt-2 ">
        <div className="col-md-6 col-sm-12 py-4">
          <h1 className="projectTitle">Our Projects</h1>
          <h2 className="projectSubtitle">We develop for better future.</h2>
          <p className="regularText3">
          We have designed several impactful custom based software application and technologies
          </p>
          <Button href='#Allproject' size="lg" variant="outline-danger" className="px-5">
            Explore
          </Button>
        </div>
        <div className="col-md-6 col-sm-12 py-4">
          <ProjectSlider></ProjectSlider>
        </div>
        <div id='Allproject'>

        </div>
      </div>
    </div>
  );
};

export default ProjectBanner;
