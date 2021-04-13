import React from 'react'
import Project from './Project'
import styled from 'styled-components'

const ProjectList = () => {
  return (
    <StyledProjects>
      <div className="container my-5">
        <div className="row">
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </div>
    </StyledProjects>
  )
}

const StyledProjects = styled.div`
  min-height:100vh;
`

export default ProjectList
