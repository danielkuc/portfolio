import React, { useEffect, useState } from 'react';
import Project from './Project';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    const res = await fetch('data.json');
    const data = await res.json();
    return data;
  }

  useEffect( () => {
    const fetchData = async () => {
      const result = await getData();
      setProjects(result.results);
    }
    fetchData();
  } ,[]);

  return (
    <div className="project p-3 mb-5">
      <div className="container">
        <p className="h4 text-center py-2">Some of the projects I worked on.</p>
        <p>These are the projects I've spent most time working on and keep coming back to. Some of them are passion projects, some are learning projects. Most are made for fun!</p>
        <div className="row">
          {projects.map(project => {
            const  {title, description, logos, id, github, projectImg,alt} = project;
            const params = {title,description,logos,github, projectImg,alt};
            return <Project params={params} key={id}/>
          })}
        </div>
      </div>
    </div>
  )
}


export default ProjectList
