import React from 'react';
import styled from 'styled-components';

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
    <StyledBackground ref={ref}>
      <div className="container">
        <div className="row about">
          <p className="header">Who is this guy anyway?</p>
          <div className={`col-12 col-md-12 ${visible ? "fadeIn" : null}`}>
            Good question, quick introductions are in order!
            My name is Dan, nice to meet you!
            I am a front end, aspiring to full stack, developer and I hail from the sunny planet Earth,
            lovely place by the way, you should come and visit. Internet, software, applications and websites are my passion and were my hobby for a long time. After a successful career in health care I have decided to take a leap and commit to my hobby full time.
            
          </div>
          <div className={`col-12 col-md-6 ${visible ? "fadeInLeft" : null}`}>
            <p>Inspiration</p>
              There are a number of things I take inspiration from, but you could sum them up in few words: nature, simplicity, space, motion and people. Our world and surroundings are a source of unlimited fuel for my imagination.
          </div>
          <div className={`col-12 col-md-6 mb-5 ${visible ? "fadeInRight" : null}`}>
            <p>Philosophy</p>
              I believe life should be simple, less is sometimes more and simplifying things is a way to go. I strive to build fast, responsive and accessible software.
          </div>
        </div>
      </div>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  background-color: #082447;
  color:white ;
`

export default Story;
