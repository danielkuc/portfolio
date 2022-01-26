import React from 'react';
import useOnScreen from '../hooks';

const About = () => {
  const [ref,visible] = useOnScreen({threshold: 0.3});

  return (
    <section ref={ref} className={`col-12 col-md-12 mb-5 ${visible ? "fadeIn" : "fadeOut"}`}>
      <span className="d-block mb-2">Good question, quick introductions are in order!
      My name is Dan, nice to meet you!</span>
      I am an aspiring software developer and I hail from the sunny planet Earth,
      lovely place by the way, you should come and visit. Internet, software, applications and websites are my passion and were my hobby for a long time and technology has always been a large part of my life and interests. After a successful career in health care I have decided to take a leap and commit to my hobby full time and turn it into a career.
    </section>
  )
}

export default About;
