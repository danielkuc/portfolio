import React from 'react';
// import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import Story from './components/Story';
import ProjectList from './components/ProjectList';


const App = () => {
  return (
    <div>
      <Intro />
      <Story/>
      <ProjectList/>
    </div>
  )
}

export default App;
