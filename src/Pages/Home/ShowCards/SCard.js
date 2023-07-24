import React from 'react';
import { motion } from 'framer-motion';
import './ShowCards.css';
const SCard = ({ children }) => {
  return (
    <div className="col-lg-2 col-md-6 col-sm-12">
      <motion.div
      className="cImage hover-shadow">{children}
      </motion.div>
    </div>
  );
};

export default SCard;
