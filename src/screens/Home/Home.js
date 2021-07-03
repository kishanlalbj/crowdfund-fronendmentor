import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Stats from '../../components/Stats/Stats';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <Navbar></Navbar>

      <div className='contents'>
        <div className='container'>
          <ProjectCard></ProjectCard>
          <br></br>
          <Stats></Stats>
          <br></br>
          <About></About>
        </div>
      </div>
    </div>
  );
};

export default Home;
