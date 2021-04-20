import React from 'react';
import About from './about components/About';
import Inspiration from './about components/Inspiration';
import Philosophy from './about components/Philosophy';
import Skills from './about components/Skills';
import Footer from './about components/Footer';

const Story = () => {
  return (
    <div className="story">
      <div className="container">
        <div className="row about">
        <p className="mx-auto">Who is this guy anyway?</p>
          <About/>
          <Inspiration/>
          <Philosophy/>
          <Skills/>
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default Story;
