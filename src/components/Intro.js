import React from 'react';
import Background from './Background'
import Header from './Header';
import ScrollDown from './ScrollDown/ScrollDown';

const Intro = () => {
  return (
    <div className="position-relative">
      <div className="info text-center">
        <p className="text-main fadeInDown">Daniel Kuc</p>
        <Header/>
        <ScrollDown />
      </div>
      <Background />
    </div>
  )
}

export default Intro;
