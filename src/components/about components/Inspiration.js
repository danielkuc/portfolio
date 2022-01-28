import React from 'react';
import useOnScreen from '../hooks';

const Inspiration = () => {

  const [ref, visible] = useOnScreen({threshold: 0.2});

  return (
      <section ref={ref} className={`col-12 col-md-6 ${visible ? "fadeInLeft" : null}`}>
        <p>Inspiration</p>
          What makes a person tick? In my case it's challenge, I enjoy setting myself goals, learning new things and testing my limits while keeping things simple. Just because something is challenging it doesn't mean it can't be simple in it's nature. 
          My surrounding, environment and people around me are a constant inspiration to push myself further and a source of motivation.
      </section>
  )
}

export default Inspiration;
