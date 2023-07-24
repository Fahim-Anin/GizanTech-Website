import React from 'react';
import './itemBox.css';
const itemBox = ({ items }) => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="flexStyleM">
          {items.map((tc) => (
            <h3
              className="expertIn"
              key={Math.random().toString() + Date.now().toString()}
            >
            <span>&nbsp;•&nbsp;</span>  {tc}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default itemBox;
