import React from 'react';
import './ProjectCard.css';

const ProjectCard = () => {
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => setOpen(!open);

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
          <button className='btn' onClick={handleModalOpen}>
            Back this project
          </button>
          {/* <button className='btn'>Bookmark</button> */}
          <div className='chip'>
            <span>
              <img
                src='/public/images/icon-bookmark.svg'
                alt='bookmark-icon'
                width='60'
                height='60'
              ></img>
            </span>
            <span>Bookmark</span>
          </div>
        </div>
      </div>

      {open ? (
        <div className='back-project-modal'>
          <div className='back-project-modal-body card '>
            <div className='back-project-modal-header'>
              <img
                src='/public/images/icon-close-modal.svg'
                alt='modal-close'
                width='15'
                height='15'
                onClick={handleModalOpen}
              ></img>
            </div>

            <div>
              <h4>Back this project</h4>
              <p>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectCard;
