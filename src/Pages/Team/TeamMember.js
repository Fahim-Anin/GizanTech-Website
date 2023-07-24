import React from 'react';
import ItemBox from '../../Components/Custom/ItemBox';
import { motion } from 'framer-motion';

const TeamMember = ({ member }) => {
  return (
    <motion.div  className=" shadow cardBody w-sm-80 body col-lg-3 col-md-5 md-auto col-sm-12 mx-3 pb-4 "
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeIn", duration: 2, delay: 0.2 }}
    >

      <div className="imgBox ">
        <img className="teamMember " src={member.image} alt="banner" />
        <h2>{member.name}</h2>
        <h4 className='text-muted'>{member.position}</h4>
      </div>
      <ItemBox items={member.qualifications} />{' '}
      <div className='row pb-0 p-4'>
        <div className='col-4'>
        {/* <a href={member.fbId}  ><img src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png" width="40" alt="Facebook" /></a> */}
        </div>
        <div className='col-4'>
        
        {/* <a href={member.inId}  ><img src="https://cdn-icons-png.flaticon.com/512/3669/3669739.png" width="40" alt="Linkedin Icon Pictures" /></a> */}
        </div>
        <div className='col-4'>

        {/* <a href={member.gitId}  ><img src="https://cdn-icons-png.flaticon.com/512/2504/2504911.png" width="40" alt="Git, github, hub icon" /></a> */}
        </div>

       
      </div>
    </motion.div>

  );
};

export default TeamMember;
