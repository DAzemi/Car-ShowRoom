
import React from 'react';
import '../Styles/Prealoder.css';

function Preloader() {
  return (
    <div className="preloader">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
}

export default Preloader;
