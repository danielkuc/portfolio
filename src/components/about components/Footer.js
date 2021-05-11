import React from 'react';
import useOnScreen from '../hooks';

const Footer = () => {
  const [ref,visible] = useOnScreen({threshold: 0.4});

  return (
    <section ref={ref} className={`call-to-action col-12 py-2 my-2 d-flex flex-wrap flex-column align-items-center ${visible ? "fadeIn" : null} `}>
      <p className="h3">Let's get creative together!</p>
      <p>...or have a coffee</p>
      <a className="mb-5" href="mailto:danpkuc@gmail.com">Get in touch!</a>
    </section>
  )
}

export default Footer;
