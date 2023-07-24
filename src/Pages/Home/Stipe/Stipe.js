import React from 'react';
import './Stipe.css';
const Stipe = ({ children }) => {
  return (
    <div className="stipe mt-5">
      <div className="row container">{children}</div>
    </div>
  );
};

export default Stipe;
