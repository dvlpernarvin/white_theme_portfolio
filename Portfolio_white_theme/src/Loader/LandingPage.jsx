import React from 'react';
import '../Styles/LandingStyle.css';

const LoadingPage = () => {
  return (
    <div className="loader-wrapper" style={{ textAlign : 'center' }}>
      <div className="loader">
        {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
        <div className="covers">
          {Array.from({ length: 7 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;