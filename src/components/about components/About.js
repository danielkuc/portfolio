import React from 'react';
import useOnScreen from '../hooks';

const About = () => {
  const [ref,visible] = useOnScreen({threshold: 0.3});

  return (
    <section ref={ref} className={`col-12 col-md-12 mb-5 ${visible ? "fadeIn" : "fadeOut"}`}>
      <span className="d-block mb-2">
      My name is Daniel. I am a software developer and a technology enthusiast.</span>
      The Internet, software and hardware are my passion, were my hobby for a long time and always have been a large part of my life and interests. After a successful career in health care I have decided to take a leap and commit to my hobby full time and turn it into a career in software development.
    </section>
  )
}

export default About;
