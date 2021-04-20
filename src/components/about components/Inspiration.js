import React from 'react';
import useOnScreen from '../hooks';

const Inspiration = () => {

  const [ref, visible] = useOnScreen({threshold: 0.5});

  return (
      <section ref={ref} className={`col-12 col-md-6 ${visible ? "fadeInLeft" : null}`}>
        <p>Inspiration</p>
        There are a number of things I take inspiration from, but you could sum them up in few words: nature, simplicity, space, motion and people. Our world and surroundings are a source of unlimited fuel for my imagination.
      </section>
  )
}

export default Inspiration;
