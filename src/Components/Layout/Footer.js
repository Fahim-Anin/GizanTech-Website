import React from 'react';
import { Image } from 'react-bootstrap';

// import {  } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Assets/Images/Logo.png';
const Footer = () => {
  return (
    <div id="footer">
      <hr style={{ color: '71a89c' }} />
      <div className="">
        {/* <FooterC /> */}

        <div className="footer-style py-2">
          <div className="container">
            <div className="row ">
              <div className="col-lg-6 col-12">
                <Image
                  href="/"
                  className="footerLogo"
                  src={Logo}
                  alt="logo"
                  fluid
                />
                <p
                  style={{
                    textAlign: 'justify',
                    paddingTop: '30px',
                    paddingRight: '150px',
                  }}
                >
                  GizanTech provides in being capable to develop production
                  grade application by availing full stack development, Soft
                  skills, Analytics and project management skills to get a core
                  software job in the Industry.
                </p>
                {/* <Button
                  variant="primary"
                  style={{ fontWeight: '700' }}
                  className="py-3 px-4 mt-2"
                >
                  APPLY NOW
                </Button>{' '} */}
              </div>
              <div className="col-lg-2 col-3 ">
                <h3>Info</h3>

                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li></li>
                  <li><a href="https://www.facebook.com/gizantech" ><img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" width="40" alt="Facebook" /></a></li>
                  <p></p>
                  <li><a href="https://www.linkedin.com/company/gizantech/" ><img src="https://cdn-icons-png.flaticon.com/512/3669/3669739.png" width="40" alt="Linkedin Icon Pictures" /></a></li>
                  <p></p>
                  <li><a href="https://github.com/GizanTech/gt-website" ><img src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png" width="40" alt="Git, github, hub icon" /></a></li>
                </ul>
              </div>
              <div className="col-lg-4 col-3 offset-xs-2">
                <h3>Contact</h3>
                <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                  <li>
                    Address:Talaimari, Rajshahi-6000, Bangladesh
                
                  </li>
                  <li></li>
                  <li>Mob: +880 1743473012</li>
                  <li>Mob: +880 1760015402</li>
                  <li>Email: admin@gizantech.com </li>
                
                </ul>
              </div>
            </div>
            {/* <hr
              className="mt-5"
              style={{ fontWeight: '800', color: 'black' }}
            /> */}
            <hr style={{ color: '#71a89c' }} />
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h6>
                  © Copyright | 2022 GizanTech | All Rights Reserved.
                </h6>
                {/* <p>
                  Privacy Policy | Terms of Service | * Registration Charges
                  Applied
                </p> */}
              </div>
              <div className="col-lg-6 col-md-12 d-flex justify-content-end">
                <span>
                  {/* <FontAwesomeIcon
                    icon="fa-brands fa-linkedin"
                    className="mx-2"
                    size="2x"
                    color="blue"
                  /> */}
                  {/* <FontAwesomeIcon className="mx-2" size="2x" color="blue" />
                  <FontAwesomeIcon className="mx-2" size="2x" color="blue" />
                  <FontAwesomeIcon className="mx-2" size="2x" color="blue" /> */}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
