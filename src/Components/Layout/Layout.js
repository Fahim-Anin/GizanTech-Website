import React from 'react';
import NavBar from './NavBar';
import './Layout.css';
import Footer from './Footer';
// import bgVide0 from '../../Assets/Videos/3236817434.mp4'
const Layout = ({ children }) => {
  return (
    <>
      <div className="home">
        <NavBar />
        <div className="container  layout-inside">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
