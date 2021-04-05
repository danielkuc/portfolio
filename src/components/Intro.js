import React from 'react';
import Background from './Background'

const Intro = () => {
  return (
    <div className="container-flex position-relative">
      <div className="container info">
      <div className="row">
        <div className="d-flex">
          <p className="vertical-text align-top">Daniel</p>
          <p className="vertical-text align-top">Peter</p>
          <p className="vertical-text align-top">Kuc</p>
        </div>
      </div>
    </div>
    <Background id="particle-js"/>
    </div>
  )
}

export default Intro
