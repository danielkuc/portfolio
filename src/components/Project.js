import React from 'react'

const Project = ({title, description, tags}) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mt-3">
      <div className="card p-4">
        <p>{title}</p>
        <div className="img-container">
          {/* <img src="" alt=""/> */}
          {/* add link to img */}
          <span>{description}</span>
        </div>
        {tags}
      </div>
    </div>
  )
}

export default Project
