import React from 'react';
import useOnScreen from '../hooks';

const About = () => {
  const [ref,visible] = useOnScreen({threshold: 0.5});

  return (
    <section ref={ref} className={`col-12 col-md-12 mb-5 ${visible ? "fadeIn" : "fadeOut"}`}>
      <span className="d-block">Good question, quick introductions are in order!
      My name is Dan, nice to meet you!</span>
      I am a front end, aspiring to full stack, developer and I hail from the sunny planet Earth,
      lovely place by the way, you should come and visit. Internet, software, applications and websites are my passion and were my hobby for a long time. After a successful career in health care I have decided to take a leap and commit to my hobby full time.
    </section>
  )
}

export default About;
