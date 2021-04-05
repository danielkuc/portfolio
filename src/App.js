import React from 'react';
// import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import About from './components/About';
import ProjectList from './components/ProjectList';


const App = () => {
  return (
    <div>
      <Intro />
      <About/>
      <ProjectList/>
    </div>
  )
}

export default App;
