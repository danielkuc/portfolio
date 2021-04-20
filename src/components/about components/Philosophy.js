import React from 'react';
import useOnScreen from '../hooks';

const Philosophy = () => {
  const [ref,visible] = useOnScreen({threshold: 0.5});

  return (
    <section ref={ref} className={`col-12 col-md-6 ${visible ? "fadeInRight" : null}`} >
      <p>Philosophy</p>
      I believe life should be simple, less is sometimes more and simplifying things is a way to go. I strive to build fast, responsive and easy to use software, always focusing on the user experience.
    </section>
  )
}

export default Philosophy;
