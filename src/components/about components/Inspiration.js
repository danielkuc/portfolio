import React from 'react';
import useOnScreen from '../hooks';

const Inspiration = () => {

  const [ref, visible] = useOnScreen({threshold: 0.2});

  return (
      <section ref={ref} className={`col-12 col-md-6 ${visible ? "fadeInLeft" : null}`}>
        <p>Inspiration</p>
          What makes a person tick? In my case it's challenge, I enjoy setting myself goals, learning new things and testing my limits. 
          My surrounding, environment and people around me are a constant inspiration to push myself further.
      </section>
  )
}

export default Inspiration;
