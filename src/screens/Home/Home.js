import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import Stats from '../../components/Stats/Stats';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='hero-container'>
        <img
          src='/public/images/image-hero-desktop.jpg'
          width='100%'
          draggable={false}
        ></img>

        <div className='hero-box'>
          <div className='container'>
            <Navbar></Navbar>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='contents'>
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
