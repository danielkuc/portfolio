import React from 'react'

const Project = ({title, description, logos}) => {
  return (
      <div className="card p-4 col-12 col-md-6 col-lg-4 mt-3">
        <p>{title}</p>
        <div className="img-container">
          {/* <img src="" alt=""/> */}
          {/* add link to img */}
          <span>{description}</span>
        </div>
        <div className="d-flex">
        {logos.map(img => <img src={img} alt="" className="card-logo"/>)}
        </div>
      </div>
  )
}

export default Project
