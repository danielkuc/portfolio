import React from 'react'
import Project from './Project'

const ProjectList = () => {
  return (
    <div className="project pt-3">
      <div className="container">
        <div className="row">
          <Project/>
          <Project/>
          <Project/>
          <Project/>
        </div>
      </div>
    </div>
  )
}


export default ProjectList
