import React from 'react'
import Project from './Project'
import styled from 'styled-components'

const ProjectList = () => {
  return (
    <StyledProjects>
      <div className="container">
        <div className="row">
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
