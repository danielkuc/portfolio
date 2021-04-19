import React from 'react'

const Project = ({params}) => {
  const {title, description,logos, github, projectImg} = params
  return (
      <div className="card col-12 col-md-6 col-lg-4 mt-3">
        <img className="card-img-top" src={projectImg} alt={projectImg}/>
        <div className="card-body mx-4">
          <p className="card-title">{title}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex img-list">
            {logos.map((img, index) => <img src={img} alt="" className="card-logo" key={index}/>)}
          </div>
          <a className="card-link" href={github} target={"_blank"} rel="noreferrer">Source code</a>
          <button className="btn btn-dark d-block">Live project</button>
        </div>
      </div>
  )
}

// 

export default Project
