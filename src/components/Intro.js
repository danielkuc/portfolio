import React from 'react';
import Background from './Background'

const Intro = () => {
  return (
    <Background>
      <div className="container-flex d-flex vh-100 background justify-content-center align-items-center">
      <div className="row">
        <div className="d-flex">
          <p className="vertical-text align-top">Daniel</p>
          <p className="vertical-text align-top">Peter</p>
          <p className="vertical-text align-top">Kuc</p>
        </div>
      </div>
    </div>
      </Background>
  )
}

export default Intro
