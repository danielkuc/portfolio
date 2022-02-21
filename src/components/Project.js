import React from 'react'

const Project = ({params}) => {
  const {title, description,logos, github,link, projectImg, alt} = params
  return (
      <div className="card col-12 col-md-6 col-lg-4 m-3">
        <img className="card-img-top" src={projectImg} alt={projectImg}/>
        <div className="card-body mx-4">
          <p className="card-title">{title}</p>
          <p className="card-text">{description}</p>
          <div className="d-flex img-list">
            {logos.map((img, index) => <img src={img} alt={alt[index]} className="card-logo" key={index}/>)}
          </div>
          <a className="card-link" href={github} target={"_blank"} rel="noreferrer">Source code</a>
          <a className="card-link" href={link} target={"_blank"} rel="noreferrer">Live project</a>
          {/* <button className="btn btn-info d-block my-3">Live project</button> */}
        </div>
      </div>
  )
}

// 

export default Project
