import React from 'react';
import css from '../images/css3.svg'
import html from '../images/html5.svg'
import js from '../images/javascript.svg'
import sass from '../images/sass.svg'
import react from '../images/react.svg'
import redux from '../images/redux.svg'

// custom hook to keep track of DOM element and when it becomes visible.
const useOnScreen = (options) => {
  const ref = React.useRef();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);

    if(ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if(ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options]);

  return [ref, visible];
}

const Story = () => {
  // deconstructs custom hook
  const [ref,visible] = useOnScreen({ threshold: 0.1 });


  return (
    // ADD ref = ref from hook for it to work
    <div ref={ref} className="story">
      <div className="container">
        <div className="row about">
          <p className={`header ${visible ? "fadeIn" : null}`}>Who is this guy anyway?</p>
          <div className={`col-12 col-md-12 ${visible ? "fadeIn" : null}`}>
            <span className="d-block">Good question, quick introductions are in order!
            My name is Dan, nice to meet you!</span>
            I am a front end, aspiring to full stack, developer and I hail from the sunny planet Earth,
            lovely place by the way, you should come and visit. Internet, software, applications and websites are my passion and were my hobby for a long time. After a successful career in health care I have decided to take a leap and commit to my hobby full time.
            
          </div>
          <div className={`col-12 col-md-6 ${visible ? "fadeInLeft" : null}`}>
            <p>Inspiration</p>
              There are a number of things I take inspiration from, but you could sum them up in few words: nature, simplicity, space, motion and people. Our world and surroundings are a source of unlimited fuel for my imagination.
          </div>
          <div className={`col-12 col-md-6 ${visible ? "fadeInRight" : null}`}>
            <p>Philosophy</p>
              I believe life should be simple, less is sometimes more and simplifying things is a way to go. I strive to build fast, responsive and easy to use software, always focusing on the user experience.
          </div>
          <div className={`col-12 col-md-12 mb-5 ${visible ? "fadeIn" : null}`}>
            <p>Skills</p>
              <span>Here are some of the technologies I am most proficient with: </span>
              <ul className="list-group list-group-horizontal-md d-flex flex-wrap justify-content-around mt-4">
                <li className="list-group-flush"><img src={html} alt="html logo"/>HTML5</li>
                <li className="list-group-flush"><img src={css} alt="css icon"/>CSS3</li>
                <li className="list-group-flush"><img src={sass} alt="sass logo"/>Sass</li>
                <li className="list-group-flush"><img src={js} alt=""/>JavaScript</li>
                <li className="list-group-flush"><img src={react} alt="react logo"/>React</li>
                <li className="list-group-flush"> <img src={redux} alt=""/> Redux</li>
              </ul>
          </div>
          <p className="h3">Lets be creative together!</p>
          <span>...or have a coffee</span>
          <a href="">Get in touch.</a>
        </div>
      </div>
    </div>
  )
}

export default Story;
