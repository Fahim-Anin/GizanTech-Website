import React, { useState } from 'react';
import {
 
  Container,
  
  Image,
  Nav,
  Navbar, 
  Offcanvas,
} from 'react-bootstrap';
import career from '../../Assets/Images/career.jpg'

import { Link } from 'react-router-dom';
import Logo from '../../Assets/Images/Logo.png';

const NavBar = () => {
  const [hover, setHover] = useState('');
  const primaryColor = 'secondary custom-style-control';
  return (
    <div className="navBarClass">
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container >
            {/* <Navbar.Brand className={`text-title`} href="/"> */}
            {/* <Nav.Link className={`text-${primaryColor}`} href="/"> */}
            {/* <Image href="/" className="navLogo" src={Logo} alt="logo" fluid /> */}
            {/* </Nav.Link> */}
            <Link to="/">
              <Image className="navLogo" src={Logo} alt="logo" fluid />
            </Link>
            {/* </Navbar.Brand> */}

            {/* Hamburger  menu */}
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

         
       
            <Navbar.Offcanvas 
              
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header id="nav-toggle-button" closeButton>
                <Offcanvas.Title
                  className={`text-${primaryColor}`}
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  GizanTech
                </Offcanvas.Title>
              </Offcanvas.Header>
         
              <Offcanvas.Body >
                <Nav className="justify-content-end flex-grow-1 pe-3 navCustom">

                  <Link className={`text-${primaryColor} nav-link `} to="/home">
                    {hover === "home" ? <p className='nav-item text-dark disable' onMouseLeave={() => setHover("")}> HOME</p>
                      : <img onMouseEnter={() => setHover("home")}

                        src="https://cdn-icons-png.flaticon.com/512/25/25694.png" width="30" alt="Home" title="Home" />
                    }
                  </Link>
                  <Link className={`text-${primaryColor} nav-link`} to="/about">
                    {hover === "about" ? <p className='nav-item text-dark' onMouseLeave={() => setHover("")}> ABOUT</p>
                      : <img 
                      onMouseEnter={() => setHover("about")}
                      src="https://cdn-icons-png.flaticon.com/512/1/1176.png" 
                      width="30" 
                      title="About" 
                      alt='about'
                      />
                    }
                  </Link>
                  <Link className={`text-${primaryColor} nav-link`} to="/registration">
                    {hover === "career" ? <p className='nav-item text-dark' onMouseLeave={() => setHover("")}>CAREER</p>
                      : <img 
                      onMouseEnter={() => setHover("career")}
                      src={ career }
                      width="30" 
                      title="career" 
                      alt='career'
                      />
                      
                    }
                  </Link>

                  <Link className={`text-${primaryColor} nav-item nav-link`} to="/projects">
                    {hover === "projects" ? <p className='nav-item text-dark' onMouseLeave={() => setHover("")}>PROJECTS</p>
                      : <img onMouseEnter={() => setHover("projects")}
                        src="https://cdn-icons-png.flaticon.com/512/4629/4629061.png" width="30" title="projects" alt='project' />
                    }
                  </Link>

                  {/* <NavDropdown
                    title="Services"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className={`text-${primaryColor}`}
                    style={{ color: '#fff' }}
                  >
                    <NavDropdown.Item
                      className={`text-${primaryColor}`}
                      href="#action3"
                    >
                      WOT Projects
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className={`text-${primaryColor}`}
                      href="#action3"
                    >
                      IOT Projects
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      className={`text-${primaryColor}`}
                      href="#action4"
                    >
                      Android Projects
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Link className={`text-${primaryColor} nav-link`} to="/team">
                    {hover === "team" ? <p style={{ 'text-decoration': 'inherit' }} className='nav-item text-dark' onMouseLeave={() => setHover("")}>TEAM</p>
                      : <img onMouseEnter={() => setHover("team")}
                        src="https://cdn-icons-png.flaticon.com/512/681/681494.png" width="30" title="projects" alt='project' />
                    }
                  </Link>
                  <Link className={`text-${primaryColor} nav-link`} to="/contact">
                    {hover === "contact" ? <p className='nav-item text-dark' onMouseLeave={() => setHover("")}>CONTACT</p>
                      : <img onMouseEnter={() => setHover("contact")}
                        src="https://cdn-icons-png.flaticon.com/512/46/46646.png" width="30" title="projects"  alt='contact'/>
                    }

                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavBar;
