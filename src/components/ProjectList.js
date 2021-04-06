import React from 'react'
import Project from './Project'
import styled from 'styled-components'

const ProjectList = () => {
  return (
    <StyledProjects>
      Hello from Project List
      <Project/>
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
  height:100vh;
  background-color:black;
  color:white;
`

export default ProjectList
