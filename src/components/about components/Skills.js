import React from 'react';
import useOnScreen from '../hooks';

import csharp from '../../images/c.svg';
import core from '../../images/core.svg';
import js from '../../images/javascript.svg';
import react from '../../images/react.svg';

const Skills = () => {
  const [ref, visible] = useOnScreen({threshold: 0.2});

  return (
    <section ref={ref} className={`col-12 col-md-12 mt-5 ${visible ? "fadeIn" : "fadeOut"} `}>
    <p>Skills</p>
      <span>Here are some of the technologies I am most proficient with: </span>
      <ul className="list-group list-group-horizontal-md d-flex flex-wrap justify-content-around mt-4">
        <li className="list-group-flush"><img src={csharp} alt="css logo"/></li>
        <li className="list-group-flush"><img src={core} alt="css logo"/></li>
        <li className="list-group-flush"><img src={js} alt="JavaScript logo"/>JavaScript</li>
        <li className="list-group-flush"><img src={react} alt="react logo"/>React</li>
      </ul>
    </section>
  )
}

export default Skills;
