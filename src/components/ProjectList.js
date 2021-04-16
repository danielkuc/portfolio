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
    <div className="project pt-3">
      <div className="container">
        <div className="row">
          {projects.map(project => <Project title={project.title} description={project.description} tags={project.tags} key={project.id}/> )}
        </div>
      </div>
    </div>
  )
}


export default ProjectList
