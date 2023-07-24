import React from 'react';
import Banner from './Banner/Banner';
import Layout from '../../Components/Layout/Layout';
import ShowCards from './ShowCards/ShowCards';
import './Home.css';
import ServicesH from './ServicesH/ServicesH';
import IndustryWeServe from './IndustryWeServe/IndustryWeServe';
import OurProducts from './OurProducts/OurProducts';
const Home = () => {
  return (
    <div className="home">
      <Layout>
        <Banner></Banner>
        <ShowCards></ShowCards>
        <ServicesH></ServicesH>
        <IndustryWeServe></IndustryWeServe>
        
        <OurProducts></OurProducts>
      </Layout>
    </div>
  );
};

export default Home;
