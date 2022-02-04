import React from 'react';
import useOnScreen from '../hooks';
import github from '../../images/github1.svg'
import linkedin from '../../images/linkedin.svg'

const Footer = () => {
  const [ref,visible] = useOnScreen({threshold: 0.4});

  return (
    <section ref={ref} className={`call-to-action col-12 py-2 my-2 d-flex flex-wrap flex-column align-items-center ${visible ? "fadeIn" : null} `}>
      <p className="h3">Let's get creative together!</p>
      <p>...or have a coffee</p>
      <a className="mb-5" href="mailto:danpkuc@gmail.com">Get in touch!</a>
      <div className='mx-auto d-flex'>
        <a href="https://github.com/danielkuc" target="_blank" rel="noreferrer">
          <img src={github} alt="" className='bg-white mh-50 h-50 rounded-circle'/>
        </a>
        <a href="https://www.linkedin.com/in/daniel-kuc-3b9486230/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="" className='bg-white mh-50 h-50 rounded'/>
        </a>
      </div>
    </section>
  )
}

export default Footer;
