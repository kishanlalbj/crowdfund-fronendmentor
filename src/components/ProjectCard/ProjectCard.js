import React from 'react';
import './ProjectCard.css';

const ProjectCard = () => {
  return (
    <div className='project-hero'>
      <div className='card'>
        <span className='project-logo'>
          <img
            src='/public/images/logo-mastercraft.svg'
            alt='project_logo'
            draggable={false}
          ></img>
        </span>
        <div className='project-hero-header'>
          <span>Mastercraft Bamboo Monitor Riser</span>
        </div>
        <div className='project-hero-desc'>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </div>
        <div className='project-hero-actions'>
          <button className='btn'>Back this project</button>
          <button className='btn'>Bookmark</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
