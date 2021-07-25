import React from 'react';
import RewardCardRadio from '../RewardCardRadio/RewardCardRadio';
import closeModal from '../../../public/images/icon-close-modal.svg';

const RewardsModal = (props) => {
  const {
    handleModalOpen,
    rewards,
    selectedReward,
    rewardChangeHandler,
    onSubmitPledge
  } = props;

  return (
    <div className='back-project-modal'>
      <div className='back-project-modal-body card '>
        <div className='back-project-modal-header'>
          <img
            src={closeModal}
            alt='modal-close'
            width='15'
            height='15'
            onClick={handleModalOpen}
          ></img>
        </div>

        <div>
          <h4>Back this project</h4>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <div className='reward-card-container'>
            {rewards.map((reward, index) => {
              return (
                <RewardCardRadio
                  key={index}
                  title={reward.title}
                  description={reward.description}
                  disable={reward.disable}
                  stockLeft={reward.stockLeft}
                  minimumPledge={reward.minimumPledge}
                  handleRewardChange={rewardChangeHandler}
                  selectedReward={selectedReward}
                  onSubmitPledge={onSubmitPledge}
                ></RewardCardRadio>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsModal;
