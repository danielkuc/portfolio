import React from 'react'
import styled from 'styled-components';

const About = ({visible}) => {
  return (
    <Section className={`col-12 col-12-md ${visible ? "fadeIn" : null}`}>
      <p>About Me</p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nesciunt consectetur obcaecati distinctio nulla, dignissimos quibusdam aperiam commodi expedita. Quae vero modi vitae tempora assumenda facilis illum molestias reprehenderit dignissimos.
    </Section>
  )
}

export const Section = styled.div`
  opacity: 0;
  font-size: 1rem;
  padding: 10px 10px;
`

export default About;
