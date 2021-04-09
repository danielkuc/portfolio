import React from 'react';
import styled from 'styled-components';

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

const About = () => {

  const [ref,visible] =useOnScreen({ treshhold: 0.2 });

  return (
    <StyledBackground ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-12-md my-5 fadeIn">
            <p>About Me</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam temporibus distinctio omnis laudantium labore delectus dicta, quos eos officiis sed quas tenetur quo pariatur earum repellat commodi tempore. Doloribus, quis.
          </div>
          <div className="col-12 col-md-6 my-5 fadeInLeft">
            <p>Inspiration</p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi beatae architecto, quibusdam molestias nobis, repellat cupiditate nisi illo natus cumque dignissimos magni quae! Perferendis recusandae nesciunt dolorem ea, suscipit eum!
          </div>
          <div className="col-12 col-md-6 my-5 fadeInRight">
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

export default About
