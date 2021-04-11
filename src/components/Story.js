import React from 'react';
import styled from 'styled-components';
import About from './About';

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
        <div className="row">
          <About visible={visible}/>
          <div className={`col-12 col-md-6 ${visible ? "fadeInLeft" : null }`}>
            <p>Inspiration</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae architecto, quibusdam molestias nobis, repellat cupiditate nisi illo natus cumque dignissimos magni quae! Perferendis recusandae nesciunt dolorem ea, suscipit eum!
          </div>
          <div className={`col-12 col-md-6 ${visible ? "fadeInRight" : null}`}>
            <p>Philosophy</p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet accusamus sapiente ratione veniam amet, libero eum consequatur nulla minus impedit sint reprehenderit quis officiis voluptatibus nemo provident sit explicabo?
          </div>
        </div>
      </div>
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  min-height: 100vh;
  background-color: #082447;
  color:white ;
`

export default Story;
