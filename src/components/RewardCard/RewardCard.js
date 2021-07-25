import React from 'react';
import './RewardCard.css';

const RewardCard = (props) => {
  const { title, pledgeAmount, description, rewardLeft, outOfStock } = props;

  return (
    <div className={`card-outline ${outOfStock ? 'disabled' : null}`}>
      <div className='reward-header'>
        <h4>{title}</h4>
        <span
          className={`${
            outOfStock ? 'reward-pledge-text-disabled' : 'reward-pledge-text'
          }`}
        >
          Pledge ${pledgeAmount} or more
        </span>
      </div>

      <div className='reward-body'>
        <p
          className={`${
            outOfStock ? 'reward-body-text-disabled' : 'reward-body-text'
          }`}
        >
          {description}
        </p>
      </div>

      <div className='reward-footer'>
        <div>
          <span className='reward-left-number'>{rewardLeft}</span>{' '}
          <span>left </span>
        </div>
        <div>
          <button className='btn' disabled={outOfStock} onClick={() => {}}>
            {!outOfStock ? 'Select Reward' : 'Out Of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RewardCard;
