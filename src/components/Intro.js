import React from 'react';
import Background from './Background'
import Header from './Header';

const Intro = () => {
  return (
    <div className="position-relative">
      <div className="info text-center">
        <p className="text-main fadeInDown">Daniel Kuc</p>
        <Header/>
      </div>
      <Background />
    </div>
  )
}

export default Intro;
