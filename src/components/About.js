import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <StyledBackground>
      Hello from About
    </StyledBackground>
  )
}

const StyledBackground = styled.div`
  height: 100vh;
  background-color: grey;
  color:white ;
`

export default About
