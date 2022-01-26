import React from 'react';
import useOnScreen from '../hooks';

import css from '../../images/css3.svg';
import csharp from '../../images/c.svg';
import html from '../../images/html5.svg';
import js from '../../images/javascript.svg';
import php from '../../images/php.svg';
import laravel from '../../images/laravel.svg';
import react from '../../images/react.svg';
import redux from '../../images/redux.svg';
import sass from '../../images/sass.svg';

const Skills = () => {
  const [ref, visible] = useOnScreen({threshold: 0.2});

  return (
    <section ref={ref} className={`col-12 col-md-12 mt-5 ${visible ? "fadeIn" : "fadeOut"} `}>
    <p>Skills</p>
      <span>Here are some of the technologies I am most proficient with: </span>
      <ul className="list-group list-group-horizontal-md d-flex flex-wrap justify-content-around mt-4">
        <li className="list-group-flush"><img src={html} alt="html logo"/>HTML5</li>
        <li className="list-group-flush"><img src={css} alt="css logo"/>CSS3</li>
        <li className="list-group-flush"><img src={csharp} alt="css logo"/>C#</li>
        <li className="list-group-flush"><img src={js} alt="JavaScript logo"/>JavaScript</li>
        <li className="list-group-flush"><img src={react} alt="react logo"/>React</li>
      </ul>
      <span>And some I'm familiar with: </span>
      <ul className="list-group list-group-horizontal-md d-flex flex-wrap justify-content-around mt-4">
        <li className="list-group-flush"> <img src={redux} alt="Redux logo"/> Redux</li>
        <li className="list-group-flush"><img src={sass} alt="sass logo"/>Sass</li>
        <li className="list-group-flush"><img src={php} alt="sass logo"/>PHP</li>
        <li className="list-group-flush"><img src={laravel} alt="sass logo"/>Laravel</li>
      </ul>
    </section>
  )
}

export default Skills;
