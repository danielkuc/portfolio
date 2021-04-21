import React from 'react';
import useOnScreen from '../hooks';

const Footer = () => {
  const [ref,visible] = useOnScreen({threshold: 0.5});

  return (
    <section ref={ref} className={`call-to-action col-12 py-5 my-5 d-flex flex-column align-items-center ${visible ? "fadeIn" : null} `}>
      <p className="h3">Lets be creative together!</p>
      <p>...or have a coffee</p>
      <a href="mailto:danpkuc@gmail.com">Get in touch!</a>
  </section>
  )
}

export default Footer;
