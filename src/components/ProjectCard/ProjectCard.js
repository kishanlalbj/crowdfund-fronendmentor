import React from 'react';
import RewardsModal from '../RewardsModal/RewardsModal';
import SuccessModal from '../SuccessModal/SuccessModal';
import mastercraft from '../../../public/images/logo-mastercraft.svg';
import bookmarkIcon from '../../../public/images/icon-bookmark.svg';
import bookmarkedIcon from '../../../public/images/icon-bookmarked.svg';
import './ProjectCard.css';

const ProjectCard = () => {
  const [open, setOpen] = React.useState(false);
  const [bookmark, setBookmark] = React.useState(false);
  const [submitModal, setSubmitModal] = React.useState(false);
  const [rewards, setRewards] = React.useState([
    {
      title: 'Pledge with no reward',
      description: `Choose to support us without a reward if you simply believe in our project. 
        As a backer, you will be signed up to receive product updates via email.`
    },
    {
      title: 'Bamboo Stand',
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      minimumPledge: 25,
      stockLeft: 101
    },
    {
      title: 'Black Edition Stand',
      description: `
      You get a Black Special Edition computer stand and a personal thank you. 
      You’ll be added to our Backer member list. 
      Shipping is included.
      `,
      minimumPledge: 75,
      stockLeft: 64
    },
    {
      title: 'Mahogany Special Edition',
      description: `
        You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. 
        You’ll be added to our Backer member list.  
        Shipping is included.
        `,
      minimumPledge: 200,
      stockLeft: 0,
      disable: true
    }
  ]);

  const [selectedReward, setSelectedReward] = React.useState();

  const handleModalOpen = () => setOpen(!open);

  const onBookMark = () => setBookmark(!bookmark);

  const rewardChangeHandler = (e) => {
    console.log(e.target);
    setSelectedReward(e.target.value);
  };

  const onSubmitPledge = () => {
    handleModalOpen();
    toggleSubmitModal();
  };

  const toggleSubmitModal = () => {
    setSubmitModal(!submitModal);
  };

  return (
    <div className='project-hero'>
      <div className='card'>
        <span className='project-logo'>
          <img src={mastercraft} alt='project_logo' draggable={false}></img>
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

          <div className='bookmark-container'>
            {!bookmark ? (
              <>
                <img
                  src={bookmarkIcon}
                  alt='bookmark-icon'
                  width='60'
                  height='60'
                  className='bookmark-logo'
                ></img>

                <button className='bookmark-btn' onClick={onBookMark}>
                  Bookmark
                </button>
              </>
            ) : (
              <>
                <img
                  src={bookmarkedIcon}
                  alt='bookmark-icon'
                  width='60'
                  height='60'
                  className='bookmark-logo'
                ></img>
                <button
                  className='bookmark-btn'
                  style={{
                    color: '#3cb3ab'
                  }}
                  onClick={onBookMark}
                >
                  Bookmarked
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {open ? (
        <RewardsModal
          open={open}
          handleModalOpen={handleModalOpen}
          rewards={rewards}
          selectedReward={selectedReward}
          rewardChangeHandler={rewardChangeHandler}
          onSubmitPledge={onSubmitPledge}
        ></RewardsModal>
      ) : null}

      {submitModal ? (
        <SuccessModal onClose={toggleSubmitModal}></SuccessModal>
      ) : null}
    </div>
  );
};

export default ProjectCard;
