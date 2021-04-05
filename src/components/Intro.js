import React from 'react';
import Background from './Background'
import Header from './Header';

const Intro = () => {
  return (
    <div className="position-relative">
      <div className="info">
      <div className="row">
        <div className="d-flex">
          <p className="vertical-text align-top mx-4">Daniel</p>
          <p className="vertical-text align-top mx-4">Pe<span className="text-capitalize">t</span>er</p>
          <p className="vertical-text align-top mx-4">Kuc</p>
        </div>
      </div>
      <Header/>
    </div>
    <Background />
    </div>
  )
}

export default Intro
